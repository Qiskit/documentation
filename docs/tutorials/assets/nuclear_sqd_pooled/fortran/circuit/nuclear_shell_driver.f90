! This code is part of Qiskit.
!
! (C) Copyright IBM 2026.
!
! This code is licensed under the Apache License, Version 2.0. You may
! obtain a copy of this license in the LICENSE.txt file in the root directory
! of this source tree or at https://www.apache.org/licenses/LICENSE-2.0.
!
! Any modifications or derivative works of this code must retain this
! copyright notice, and modified files need to carry a notice indicating
! that they have been altered from the originals.

!> @brief Nuclear dynamics circuit ensemble driver
!>
!> Builds a magnitude-ranked circuit ensemble: each circuit gets a singles
!> layer (Givens rotations) and a doubles layer (QEB double-excitation gates).
!> Operator pools are ranked by |F_pq| and |V_ms| respectively; angles are
!> set once by the exact two-level mixing formula (EN perturbation theory).
!> Circuit r takes the slice [1+(r-1)*n,(r*n)] from the ranked pool, wrapping
!> at the pool end.  Bitstrings from all circuits are pooled and diagonalized.

module nuclear_shell_driver
    use iso_c_binding
    !$ use omp_lib
    use qiskit_circuit
    use qiskit_target
    use qiskit_transpiler
#ifdef USE_RUNTIME
    ! Only available when qiskit-fortran was built with
    ! -DQISKIT_FORTRAN_RUNTIME=ON; see BUILD_INSTRUCTIONS.md.
    use qiskit_runtime
#endif
    use nuclear_ansatz
    use nuclear_selection, only: select_singles_slice, select_doubles_slice
    use symmetry_filter, only: filter_bitstrings, setup_single_particle_data, &
                                 convert_bitstrings_to_int, filter_bitstrings_int
    use exact_solver, only: rank_pairs_by_pt2, rank_doubles_by_pt2, &
                             seed_angles, seed_double_angles, &
                             filter_doubles_by_j, &
                             build_subspace_hamiltonian, &
                             diagonalize_exact_complex, verify_angle_formulas
    use usdb_reader, only: tbme_element, read_usdb_file, model_space_data
    use orbital_registry, only: init_registry_from_file, &
                                 init_registry_from_snt, &
                                 reg_proton_holes, reg_proton_virtuals, &
                                 reg_n_qubits, reg_is_occupied, reg_mj2, reg_tz
    use clebsch_gordan, only: init_cg_tables, cleanup_cg_tables, filter_excitations_by_j
    implicit none
    private

    public :: run_circuit_ensemble, run_bitstrings_dir

contains

#ifdef USE_RUNTIME
    subroutine extract_bitstrings_from_sampler(res, bitstrings, n_qubits)
        type(RtSamplerResult), intent(in) :: res
        character(kind=c_char), intent(out) :: bitstrings(:,:)
        integer, intent(in) :: n_qubits

        integer(c_size_t) :: i, n_samples
        integer :: j
        character(len=:), allocatable :: sample_str
        integer(8) :: hex_val
        integer :: bit_pos, ios

        n_samples = res%num_samples()
        if (int(n_samples) /= size(bitstrings, 2)) then
            error stop "extract_bitstrings_from_sampler: sample count mismatch"
        end if

        do i = 0_c_size_t, n_samples - 1_c_size_t
            sample_str = res%sample(int(i))
            if (len(sample_str) >= 2 .and. sample_str(1:2) == '0x') then
                read(sample_str(3:), '(z20)', iostat=ios) hex_val
                if (ios /= 0) then
                    write(*, '(a, i0, a, a, a)') &
                        "WARNING: Failed to parse hex sample at index ", i, ": ", trim(sample_str), &
                        " - skipping this sample"
                    cycle  ! Skip the sample entirely, without breaking the workflow
                end if
                do j = 1, n_qubits
                    bit_pos = j - 1
                    if (btest(hex_val, bit_pos)) then
                        bitstrings(j, int(i) + 1) = '1'
                    else
                        bitstrings(j, int(i) + 1) = '0'
                    end if
                end do
            else
                do j = 1, n_qubits
                    if (j <= len(sample_str)) then
                        bitstrings(j, int(i) + 1) = sample_str(j:j)
                    else
                        bitstrings(j, int(i) + 1) = '0'
                    end if
                end do
            end if
        end do
    end subroutine extract_bitstrings_from_sampler
#endif


    ! =========================================================================
    ! Post-processing strategy: POOLED
    !
    ! All N_circuits × shots bitstrings are merged into one pool before
    ! filtering and diagonalization.  More unique Slater determinants →
    ! larger subspace → tighter Rayleigh-Ritz upper bound on E₀.
    !
    ! Invoked by: nuclear_shell_driver (default for --runtime and test mode,
    !             or explicitly with --mode pooled).
    ! =========================================================================
    !> Executes a circuit ensemble: n_circuits circuits, each with a ranked
    !> slice of subset_target pairs from the magnitude-ranked operator pool.
    !> Circuit r takes positions [(r-1)*n+1 .. r*n] (mod pool size) from the
    !> ranked list.  Angles are set by the exact two-level mixing formula:
    !>   θ_pq = ½·arctan(2·F_pq / Δε_pq)
    !> where F_pq is the Fock off-diagonal (Σ_{k∈occ} V_ms(p,k;q,k)).
    !>
    !> After all circuits are submitted, bitstrings are pooled and a single
    !> Hamiltonian build + diagonalization runs on the combined subspace.
    subroutine run_circuit_ensemble(n_circuits, n_protons, n_neutrons, &
                                    shots, min_energy, use_runtime, &
                                    mj2_target, j_target_2, subset_target, &
                                    max_depth, snt_file, save_bitstrings, &
                                    backend_name)
        integer(c_int), intent(in)  :: n_circuits
        integer(c_int), intent(in)  :: n_protons, n_neutrons
        integer(c_int), intent(in)  :: shots
        real(c_double), intent(out) :: min_energy
        logical,        intent(in), optional :: use_runtime
        integer(c_int), intent(in), optional :: mj2_target
        integer(c_int), intent(in), optional :: j_target_2
        integer(c_int), intent(in), optional :: subset_target
        ! max_depth: optional gate-count cap per circuit (0 = unlimited).
        ! Givens=6 gates, QEB=28 gates.  E.g. max_depth=100 limits to ~3 singles+2 doubles.
        integer(c_int), intent(in), optional :: max_depth
        ! snt_file: path to the .snt interaction file (default: "USDB.snt").
        character(len=*), intent(in), optional :: snt_file
        ! save_bitstrings: write bitstrings_stepNN.txt even in test mode (for parallel post-processing)
        logical,        intent(in), optional :: save_bitstrings
        ! backend_name: run on this backend by name; absent or blank = least busy
        character(len=*), intent(in), optional :: backend_name

        integer :: r, j, n_kept, status, ik, n_kept_int
        integer :: total_shots, pool_ptr
        integer(c_int) :: n_qubits, mj2_tgt, j_tgt_2, n_subset
        integer :: depth_cap, singles_gate_depth
        integer :: layer_size, d_layer_size
        integer(8) :: tick_rate, tc0, tc1
        integer(8) :: t_filter_ns, t_ham_ns, t_diag_ns
        logical :: do_runtime, do_save_bitstrings
        integer(c_int64_t) :: n_backends
        integer :: dim, info, filtered_size_i, n_sp_total
        integer :: raw_d_size, filtered_d_size
        integer(c_int) :: raw_size_i
        character(len=256) :: snt_str

        type(QuantumCircuit) :: circuit, qc_transpiled
        type(Target) :: backend_target
#ifdef USE_RUNTIME
        type(RtService) :: service
        type(RtBackendList) :: backends
        type(RtBackend) :: backend, candidate
        integer :: ib
        type(RtJob) :: job
        type(RtSamplerResult) :: res
#endif

        character(kind=c_char), allocatable :: bitstrings(:,:)
        character(kind=c_char), allocatable :: pool_bs(:,:)
        integer(1), allocatable :: occ_int(:,:)
        logical(c_bool), allocatable :: kept(:)
        integer, allocatable :: kept_idx(:), basis_map(:)
        complex(8), allocatable :: hamiltonian(:,:)
        real(8), allocatable :: eigenvalues(:)
        complex(8), allocatable :: eigenvectors(:,:)
        type(model_space_data) :: model_space

        ! Singles pool (1p1h)
        integer(c_int), allocatable :: raw_pairs(:,:), filtered_pairs(:,:)
        integer(c_int), allocatable :: ranked_pairs(:,:), layer_pairs(:,:)
        real(8),        allocatable :: tbme_weights(:), angles(:)

        ! Doubles pool (2p2h)
        integer(c_int), allocatable :: raw_quads(:,:), filtered_quads(:,:)
        integer(c_int), allocatable :: ranked_quads(:,:), d_layer_quads(:,:)
        real(8),        allocatable :: d_tbme_weights(:), d_angles(:)

        mj2_tgt  = 0_c_int
        j_tgt_2  = 0_c_int
        n_subset = 16_c_int
        depth_cap = 0
        if (present(mj2_target))    mj2_tgt  = mj2_target
        if (present(j_target_2))    j_tgt_2  = j_target_2
        if (present(subset_target)) n_subset = subset_target
        if (present(max_depth))     depth_cap = int(max_depth)

        snt_str = "USDB.snt"
        if (present(snt_file)) snt_str = trim(adjustl(snt_file))

        ! Guard: --max-depth and --subset are inconsistent when the minimum gate
        ! cost of one full subset (all singles, no doubles) exceeds the depth cap.
        ! Givens rotation = 6 gates; at least 1 must fit or the cap is unusable.
        if (depth_cap > 0 .and. depth_cap < 6) then
            write(*,'("ERROR: --max-depth ",I0," is below the minimum single-gate cost (6).")') &
                depth_cap
            write(*,'("       Set --max-depth >= 6 (Givens=6 gates, QEB=28 gates).")')
            error stop "inconsistent --max-depth: too small to admit any gate"
        end if
        if (depth_cap > 0 .and. present(subset_target)) then
            ! Warn when requested subset cannot fit in the depth cap even without doubles
            block
                integer :: max_singles_in_budget, min_depth_for_subset
                max_singles_in_budget = depth_cap / 6
                min_depth_for_subset  = int(n_subset) * 6
                if (int(n_subset) > max_singles_in_budget) then
                    write(*,'("ERROR: --subset ",I0," requires at least ",I0, &
                              " gates for singles alone, but --max-depth is ",I0,".")') &
                        int(n_subset), min_depth_for_subset, depth_cap
                    write(*,'("       Either raise --max-depth to >= ",I0, &
                              " or lower --subset.")') min_depth_for_subset
                    error stop "inconsistent --subset and --max-depth"
                end if
            end block
        end if

        do_runtime = .false.
        if (present(use_runtime)) do_runtime = use_runtime
#ifndef USE_RUNTIME
        if (do_runtime) then
            print *, "ERROR: this build has no IBM Runtime support, so --runtime"
            print *, "is unavailable.  To enable it, rebuild qiskit-fortran with"
            print *, "-DQISKIT_FORTRAN_RUNTIME=ON and -DQISKIT_RUNTIME_ROOT=/path/to/qiskit-ibm-runtime-c,"
            print *, "then reconfigure applications/ with the same -DQISKIT_RUNTIME_ROOT."
            print *, "See BUILD_INSTRUCTIONS.md steps 5-8."
            error stop 1
        end if
#endif
        do_save_bitstrings = .false.
        if (present(save_bitstrings)) do_save_bitstrings = save_bitstrings

        print *, "Nuclear Shell Model Circuit Ensemble"
        if (do_runtime) then
            print *, "Mode: IBM Runtime"
        else
            print *, "Mode: Test (simulated bitstrings)"
        end if
        print '("  Nucleus        : ",I1,"p + ",I1,"n")', n_protons, n_neutrons
        print '("  Circuits       : ",I4)', n_circuits
        print '("  Shots/circuit  : ",I6)', shots
        print '("  Pairs/circuit  : ",I4," (ranked partition)")', n_subset
        if (depth_cap > 0) &
            print '("  Max depth/ckt  : ",I4," gates")', depth_cap
        block
            integer :: n_omp_threads
            !$ n_omp_threads = omp_get_max_threads()
            !$ print '("  OMP threads (max): ",I4)', n_omp_threads
            !$ write(*,'("RESULT  omp_threads   ",I16," threads")') int(n_omp_threads, 8)
        end block
        print *, ""

        ! --- 2. Load Hamiltonian from .snt file ----------------------------------
        block
            integer :: snt_status
            call read_usdb_file(trim(snt_str), model_space, snt_status)
            if (snt_status /= 0) then
                write(*,'("ERROR: could not load ",A)') trim(snt_str)
                error stop "run_circuit_ensemble: .snt file not found"
            end if
        end block
        ! setup_single_particle_data calls init_registry_from_file internally,
        ! resetting tbl_occupied.  We therefore initialise the registry twice:
        !   pass 1 (0,0)   -  populates n_reg and quantum numbers for setup_single_particle_data
        !   setup call     -  allocates SD_MJ2/SD_PAR arrays from the registry
        !   pass 2 (np,nn) -  sets correct HF occupation used by create_ph_excitation_pool
        call init_registry_from_snt(model_space, 0_c_int, 0_c_int)
        n_qubits = int(reg_n_qubits(), c_int)
        n_sp_total = int(n_qubits)
        call setup_single_particle_data(n_qubits, trim(snt_str)//c_null_char)
        call init_cg_tables(int(maxval(model_space%orbitals(1:model_space%n_orbitals)%j2), c_int))
        call init_registry_from_snt(model_space, n_protons, n_neutrons)

        ! --- 3. Build operator pools and rank by PT2; seed frozen angles ----------
        ! Singles pool (1p1h): rank + seed once, shared across all circuits
        call create_ph_excitation_pool(n_qubits, n_protons, n_neutrons, raw_size_i, raw_pairs)
        block
            integer(c_int) :: fs
            call filter_excitations_by_j(raw_pairs, int(raw_size_i, c_int), j_tgt_2, &
                                         filtered_pairs, fs)
            filtered_size_i = int(fs)
        end block
        call rank_pairs_by_pt2(model_space, filtered_pairs, filtered_size_i, n_sp_total, &
                               ranked_pairs, tbme_weights)
        call seed_angles(model_space, ranked_pairs, filtered_size_i, n_sp_total, angles)

        ! Doubles pool (2p2h): rank + seed once
        call create_2p2h_excitation_pool(n_qubits, n_protons, n_neutrons, raw_d_size, raw_quads)
        block
            integer(c_int) :: fd
            call filter_doubles_by_j(raw_quads, raw_d_size, filtered_quads, fd)
            filtered_d_size = int(fd)
        end block
        if (filtered_d_size > 0) then
            call rank_doubles_by_pt2(model_space, filtered_quads, filtered_d_size, n_sp_total, &
                                     ranked_quads, d_tbme_weights)
            call seed_double_angles(model_space, ranked_quads, filtered_d_size, n_sp_total, d_angles)
        end if

        print '("  Singles  -  raw: ",I4,"  CG-filtered: ",I4)', raw_size_i, filtered_size_i
        print '("  Doubles  -  raw: ",I4,"  CG-filtered: ",I4)', raw_d_size, filtered_d_size
        block
            integer :: k
            print '("  Top singles (|V_ms| MeV):")'
            do k = 1, min(3, filtered_size_i)
                write(*,'("    s",I2,"  (",I2,"->",I2,")  |V|=",F7.4,"  θ=",F7.4," rad")') &
                    k, ranked_pairs(k,1), ranked_pairs(k,2), abs(tbme_weights(k)), angles(k)
            end do
            if (filtered_d_size > 0) then
                print '("  Top doubles (|V_ms| MeV):")'
                do k = 1, min(3, filtered_d_size)
                    write(*,'("    d",I2,"  (",I2,",",I2,"->",I2,",",I2,")  |V|=",F7.4,"  θ=",F7.4," rad")') &
                        k, ranked_quads(k,1), ranked_quads(k,2), &
                           ranked_quads(k,3), ranked_quads(k,4), &
                           abs(d_tbme_weights(k)), d_angles(k)
                end do
            end if
        end block
        print *, ""

        ! 2x2 sanity-check: seeded angles vs exact 2x2 diagonalization
        block
            integer, allocatable :: hf_occ(:)
            integer :: qq, n_fail_check
            integer :: n_check_s, n_check_d
            allocate(hf_occ(n_sp_total))
            do qq = 1, n_sp_total
                if (reg_is_occupied(qq - 1)) then
                    hf_occ(qq) = 1
                else
                    hf_occ(qq) = 0
                end if
            end do
            n_check_s = min(filtered_size_i, 4)
            n_check_d = 0
            if (filtered_d_size > 0) n_check_d = min(filtered_d_size, 4)
            if (filtered_d_size > 0) then
                call verify_angle_formulas(model_space, hf_occ, n_sp_total, &
                    ranked_pairs(1:n_check_s, :), n_check_s, &
                    ranked_quads(1:n_check_d, :), n_check_d, &
                    angles(1:n_check_s), d_angles(1:n_check_d), &
                    1.0d-5, n_fail_check)
            else
                block
                    integer(c_int) :: empty_quads(0,4)
                    real(8) :: empty_d_angles(0)
                    call verify_angle_formulas(model_space, hf_occ, n_sp_total, &
                        ranked_pairs(1:n_check_s, :), n_check_s, &
                        empty_quads, 0, &
                        angles(1:n_check_s), empty_d_angles, &
                        1.0d-5, n_fail_check)
                end block
            end if
            if (n_fail_check > 0) then
                write(*,'("WARNING: ",I0," angle sanity check(s) failed")') n_fail_check
            end if
            deallocate(hf_occ)
        end block
        print *, ""

        ! --- 4. Connect to IBM Runtime (if --runtime) ----------------------------
#ifdef USE_RUNTIME
        if (do_runtime) then
            print *, "Connecting to IBM Quantum Runtime..."
            call service%connect()
            print *, "Connected."
            call service%backends(backends)
            n_backends = backends%length()
            if (present(backend_name)) then
                if (len_trim(backend_name) > 0) then
                    do ib = 0, int(n_backends) - 1
                        candidate = backends%get(ib)
                        if (trim(candidate%name()) == trim(backend_name)) then
                            backend = candidate
                            exit
                        end if
                    end do
                    if (.not. backend%is_valid()) then
                        write(*,'("ERROR: backend ",A," is not in your account listing.")') &
                            trim(backend_name)
                        write(*,'("       Available:")')
                        do ib = 0, int(n_backends) - 1
                            candidate = backends%get(ib)
                            write(*,'("         ",A)') trim(candidate%name())
                        end do
                        error stop "run_circuit_ensemble: --backend not found"
                    end if
                end if
            end if
            if (.not. backend%is_valid()) backend = backends%least_busy()
            if (.not. backend%is_valid()) error stop "No backends available."
            print *, "Backend:", backend%name()
            call backend%get_target(service, backend_target)
            print *, ""
        end if
#endif

        call system_clock(count_rate=tick_rate)
        min_energy = huge(1.0d0)

        total_shots = int(n_circuits) * int(shots)
        allocate(pool_bs(n_qubits, total_shots))
        pool_ptr = 0

        ! --- 4 (cont.). Build circuit ensemble -----------------------------------
        ! Ranked partition: circuit r gets operators at positions s+1..s+layer_size
        ! from the magnitude-sorted pool, wrapping at pool end
        ! (s = mod((r-1)*n_subset, n_pool)).
        do r = 1, int(n_circuits)
            print '("  Circuit ",I2," of ",I2)', r, int(n_circuits)

            ! Singles slice
            call select_singles_slice(ranked_pairs, filtered_size_i, r, int(n_subset), &
                                      layer_pairs, layer_size, &
                                      max_depth=merge(depth_cap, 0, depth_cap > 0))
            singles_gate_depth = layer_size * 6
            write(*,'("    Singles: ",I2," / ",I2," (pool=",I3,")")') &
                layer_size, int(n_subset), filtered_size_i

            ! Doubles slice
            if (filtered_d_size > 0) then
                call select_doubles_slice(ranked_quads, filtered_d_size, r, max(1, int(n_subset)/2), &
                                          d_layer_quads, d_layer_size, &
                                          max_depth=merge(depth_cap, 0, depth_cap > 0), &
                                          depth_already_used=singles_gate_depth)
                if (d_layer_size > 0) &
                    write(*,'("    Doubles: ",I2," / ",I2," (pool=",I3,")")') &
                        d_layer_size, max(1, int(n_subset)/2), filtered_d_size
            else
                d_layer_size = 0
                allocate(d_layer_quads(0, 4))
            end if

            call create_hf_reference(circuit, n_qubits, n_protons, n_neutrons, snt_file=trim(snt_str))

            ! Singles rotations  -  angle index matches select_singles_slice start offset
            block
                integer :: k, idx, s
                s = mod((r - 1) * int(n_subset), max(filtered_size_i, 1))
                do k = 1, layer_size
                    idx = mod(s + k - 1, max(filtered_size_i, 1)) + 1
                    write(*,'("      s(",I2,"->",I2,")  θ=",F7.4," rad")') &
                        layer_pairs(k,1), layer_pairs(k,2), angles(idx)
                    call add_givens_layer(circuit, layer_pairs(k,1), layer_pairs(k,2), &
                                         real(angles(idx), c_double))
                end do
            end block

            ! Doubles rotations
            block
                integer :: k, idx, s
                s = mod((r - 1) * max(1, int(n_subset)/2), max(filtered_d_size, 1))
                do k = 1, d_layer_size
                    idx = mod(s + k - 1, max(filtered_d_size, 1)) + 1
                    write(*,'("      d(",I2,",",I2,"->",I2,",",I2,")  θ=",F7.4," rad")') &
                        d_layer_quads(k,1), d_layer_quads(k,2), &
                        d_layer_quads(k,3), d_layer_quads(k,4), d_angles(idx)
                    call add_double_excitation_layer(circuit, &
                        d_layer_quads(k,3), d_layer_quads(k,4), &
                        d_layer_quads(k,1), d_layer_quads(k,2), &
                        real(d_angles(idx), c_double))
                end do
            end block

            call finalize_ansatz(circuit)
            print '("    Instructions: ",I5)', circuit%num_instructions()

            deallocate(layer_pairs, d_layer_quads)

            allocate(bitstrings(n_qubits, shots))
            allocate(kept(shots))

            ! --- 5. Transpile and submit to IBM Runtime (or generate test shots) ----
            if (do_runtime) then
#ifdef USE_RUNTIME
                block
                    type(TranspileOptions) :: topts
                    call topts%init(optimization_level=0)
                    call transpile(circuit, qc_transpiled, backend=backend_target, options=topts)
                end block
                call service%run_sampler(job, backend, qc_transpiled, shots=shots)
                do
                    status = service%job_status(job)
                    if (job_is_terminal(status)) exit
                    call sleep(5)
                end do
                if (status /= int(QkrtJobStatus_Completed)) then
                    print *, "    Job did not complete:", job_status_name(status)
                    deallocate(bitstrings, kept, layer_pairs, d_layer_quads)
                    cycle
                end if
                call service%sampler_results(res, job)
                call extract_bitstrings_from_sampler(res, bitstrings, n_qubits)
                ! Dump bitstrings (step naming kept compatible with --bitstrings-dir)
                block
                    integer :: funit, bs, bq
                    character(len=64) :: bsfname
                    write(bsfname,'("bitstrings_step",I2.2,".txt")') r
                    open(newunit=funit, file=trim(bsfname), status='replace', action='write')
                    do bs = 1, int(shots)
                        do bq = 1, int(n_qubits)
                            write(funit,'(A1)',advance='no') bitstrings(bq, bs)
                        end do
                        write(funit,*)
                    end do
                    close(funit)
                    print '("    Written: ",A)', trim(bsfname)
                end block
#endif
            else
                call generate_test_bitstrings(n_qubits, shots, n_protons, n_neutrons, bitstrings)
                if (do_save_bitstrings) then
                    block
                        integer :: funit, bs, bq
                        character(len=64) :: bsfname
                        write(bsfname,'("bitstrings_step",I2.2,".txt")') r
                        open(newunit=funit, file=trim(bsfname), status='replace', action='write')
                        do bs = 1, int(shots)
                            do bq = 1, int(n_qubits)
                                write(funit,'(A1)',advance='no') bitstrings(bq, bs)
                            end do
                            write(funit,*)
                        end do
                        close(funit)
                        print '("    Written: ",A)', trim(bsfname)
                    end block
                end if
            end if

            ! Append to pool
            pool_bs(:, pool_ptr+1 : pool_ptr+int(shots)) = bitstrings
            pool_ptr = pool_ptr + int(shots)

            deallocate(bitstrings, kept)
            print *, ""
        end do
        ! End circuit loop

        print *, "=========================================="
        print '("  Pooled bitstrings : ",I6," (from ",I2," circuits)")', &
            pool_ptr, int(n_circuits)

        ! --- 6. Symmetry filter: keep shots satisfying (N_p, N_n, Mj=0, even parity)
        allocate(occ_int(n_qubits, pool_ptr))
        call convert_bitstrings_to_int(pool_bs(:,1:pool_ptr), int(n_qubits), pool_ptr, occ_int)

        allocate(kept(pool_ptr))
        call system_clock(tc0)
        call filter_bitstrings_int(occ_int, pool_ptr, int(n_qubits), int(n_qubits/2), &
                                   n_protons, n_neutrons, mj2_tgt, 0_c_int, kept, n_kept)
        call system_clock(tc1)
        t_filter_ns = (tc1 - tc0) * (1000000000_8 / tick_rate)
        deallocate(occ_int)
        print '("  Filter: kept ",I5," / ",I6," pooled shots")', n_kept, pool_ptr

        t_ham_ns  = 0_8
        t_diag_ns = 0_8

        if (n_kept > 0) then
            n_kept_int = int(n_kept)
            allocate(kept_idx(n_kept_int))
            ik = 0
            do j = 1, pool_ptr
                if (kept(j)) then
                    ik = ik + 1
                    kept_idx(ik) = j
                end if
            end do

            ! --- 7. Build subspace Hamiltonian restricted to surviving determinants --
            allocate(basis_map(n_kept_int))
            call system_clock(tc0)
            call build_subspace_hamiltonian(model_space, n_protons, n_neutrons, &
                pool_bs, kept_idx, n_kept_int, int(n_qubits), &
                hamiltonian, dim, basis_map, info)
            call system_clock(tc1)
            t_ham_ns = (tc1 - tc0) * (1000000000_8 / tick_rate)
            deallocate(pool_bs)

            if (info == 0) then
                ! --- 8. Diagonalize (LAPACK zheev) -> eigenvalues -------------------
                call system_clock(tc0)
                call diagonalize_exact_complex(hamiltonian, dim, eigenvalues, eigenvectors, info)
                call system_clock(tc1)
                t_diag_ns = (tc1 - tc0) * (1000000000_8 / tick_rate)

                ! --- 9. Emit RESULT lines -----------------------------------------
                if (info == 0) then
                    min_energy = eigenvalues(1)
                    print '("  Subspace dim  : ",I5)', dim
                    block
                        integer :: ei, n_show
                        n_show = min(4, dim)
                        do ei = 1, n_show
                            write(*,'("  E",I1,"            : ",F18.9," MeV")') ei, eigenvalues(ei)
                            write(*,'("RESULT  energy_level",I2.2,"   ",F16.9," MeV")') ei, eigenvalues(ei)
                        end do
                    end block
                    write(*,'("RESULT  subspace_dim   ",I16," states")') dim
                    write(*,'("RESULT  pooled_kept    ",I16," shots")') n_kept
                else
                    print *, "  Diagonalization failed"
                end if
                deallocate(eigenvectors)
            else
                print *, "  Hamiltonian build failed"
            end if

            if (allocated(hamiltonian))  deallocate(hamiltonian)
            if (allocated(eigenvalues))  deallocate(eigenvalues)
            if (allocated(kept_idx))     deallocate(kept_idx)
            if (allocated(basis_map))    deallocate(basis_map)
        else
            print *, "  No valid bitstrings after filter  -  increase shots or circuits"
        end if

        deallocate(kept)

        write(*,'("RESULT  filter_total   ",I16," ns")') t_filter_ns
        write(*,'("RESULT  ham_total      ",I16," ns")') t_ham_ns
        write(*,'("RESULT  diag_total     ",I16," ns")') t_diag_ns
        write(*,'("RESULT  classical_total",I16," ns")') t_filter_ns + t_ham_ns + t_diag_ns
        print '("  Classical: ",F10.3," ms (filter+ham+diag)")', &
            real(t_filter_ns + t_ham_ns + t_diag_ns, 8) / 1.0d6

        deallocate(ranked_pairs, tbme_weights, angles, filtered_pairs, raw_pairs)
        if (allocated(ranked_quads))    deallocate(ranked_quads)
        if (allocated(d_tbme_weights))  deallocate(d_tbme_weights)
        if (allocated(d_angles))        deallocate(d_angles)
        if (allocated(filtered_quads))  deallocate(filtered_quads)
        if (allocated(raw_quads))       deallocate(raw_quads)
        call cleanup_cg_tables()

    end subroutine run_circuit_ensemble

    subroutine generate_test_bitstrings(n_qubits, n_samples, n_protons, n_neutrons, bitstrings)
        integer(c_int), intent(in) :: n_qubits, n_samples, n_protons, n_neutrons
        character(kind=c_char), intent(out) :: bitstrings(:,:)
        integer :: i, q

        do i = 1, n_samples
            bitstrings(:, i) = '0'
            do q = 0, n_qubits - 1
                if (reg_is_occupied(q)) bitstrings(q + 1, i) = '1'
            end do
        end do
    end subroutine generate_test_bitstrings

    ! =========================================================================
    ! Post-processing strategy: PER-STEP
    !
    ! Each bitstrings_stepNN.txt file is filtered and diagonalized
    ! independently; the reported energy is min(E₀) over all steps.
    ! Smaller subspace per step but embarrassingly parallel across steps.
    !
    ! Invoked by: nuclear_shell_driver --bitstrings-dir (--mode per-step),
    !             and nuclear_shell_parallel (PGAS coarray, cafrun -n N).
    ! A single coarray image gives the same result as this subroutine.
    ! =========================================================================
    !> Load per-step bitstring files and run the classical post-processing pipeline.
    !> Mirrors the --bitstrings-dir mode of the Python baseline.
    !> Reads bitstrings_step01.txt .. bitstrings_stepNN.txt from bits_dir,
    !> runs symmetry filter → subspace Hamiltonian → diagonalisation for each,
    !> and emits RESULT lines.
    subroutine run_bitstrings_dir(bits_dir, n_protons, n_neutrons, max_steps, &
                                   mj2_target, j_target_2, snt_file)
        character(len=*), intent(in) :: bits_dir
        integer(c_int),   intent(in) :: n_protons, n_neutrons
        integer,          intent(in) :: max_steps   ! maximum steps to look for
        integer(c_int), intent(in), optional :: mj2_target  ! 2*Mj target sector (0=even-even; +/-1=odd-mass)
        integer(c_int), intent(in), optional :: j_target_2  ! 2*J for CG pool filter (0=J=0 ground state)
        ! snt_file: path to the .snt interaction file (default: "USDB.snt").
        character(len=*), intent(in), optional :: snt_file

        type(model_space_data) :: ms
        character(kind=c_char), allocatable :: bitstrings(:,:)
        integer(1),             allocatable :: occ_int(:,:)
        logical(c_bool),        allocatable :: kept(:)
        integer,                allocatable :: kept_idx(:), basis_map(:)
        real(8),                allocatable :: eigenvalues(:)
        complex(8),             allocatable :: hamiltonian(:,:), eigenvectors(:,:)
        integer(c_int) :: n_qubits, n_kept_ci
        integer(c_int) :: n_shots_file
        integer(c_int) :: mj2_tgt   ! resolved from optional arg
        integer        :: i, j, ik, n_kept, dim, info, n_valid_steps
        integer        :: funit, ios, q
        integer(8)     :: tc0, tc1, tick
        integer(8)     :: t_filter_ns, t_ham_ns, t_diag_ns, t_classical_ns
        integer(8)     :: total_filter_ns, total_ham_ns, total_diag_ns, total_classical_ns
        real(8)        :: e_min
        character(len=256) :: bsfile
        ! Sized from the model space below, not fixed: a literal len=24 (the
        ! sd-shell width) truncated every 40-character pf-shell line, so
        ! linebuf(q:q) read past the declared length for q > 24 and the filter
        ! kept zero shots.  The shot count was unaffected, so it failed silently.
        ! Allocated one character wider than n_qubits so an over-long record is
        ! still over-long after the read and the width check below can see it;
        ! sized exactly, a long line truncates to n_qubits and passes the check.
        character(len=:), allocatable :: linebuf
        character(len=256) :: snt_str

        mj2_tgt  = 0_c_int
        snt_str  = "USDB.snt"
        if (present(mj2_target)) mj2_tgt = mj2_target
        if (present(snt_file))   snt_str  = trim(adjustl(snt_file))

        print *, "=========================================="
        print *, "Fortran classical pipeline (--bitstrings-dir)"
        print '("  Source : ",A)', trim(bits_dir)
        print '("  Nucleus: ",I1,"p+",I1,"n")', n_protons, n_neutrons
        print *, "=========================================="

        block
            integer :: snt_st2
            call read_usdb_file(trim(snt_str), ms, snt_st2)
            if (snt_st2 /= 0) then
                write(*,'("ERROR: could not load ",A)') trim(snt_str)
                error stop "run_bitstrings_dir: .snt file not found"
            end if
        end block
        call init_registry_from_snt(ms, n_protons, n_neutrons)
        n_qubits = int(reg_n_qubits(), c_int)
        allocate(character(len=n_qubits + 1) :: linebuf)
        call setup_single_particle_data(n_qubits, trim(snt_str)//c_null_char)
        call init_cg_tables(int(maxval(ms%orbitals(1:ms%n_orbitals)%j2), c_int))

        block
            integer :: n_omp_threads
            !$ n_omp_threads = omp_get_max_threads()
            !$ write(*,'("RESULT  omp_threads   ",I16," threads")') int(n_omp_threads, 8)
        end block

        call system_clock(count_rate=tick)
        total_filter_ns = 0_8; total_ham_ns = 0_8; total_diag_ns = 0_8; total_classical_ns = 0_8
        n_valid_steps = 0
        e_min = huge(1.0d0)

        do i = 1, max_steps
            ! Build filename
            if (len_trim(bits_dir) > 0) then
                write(bsfile,'(A,"/bitstrings_step",I2.2,".txt")') trim(bits_dir), i
            else
                write(bsfile,'("bitstrings_step",I2.2,".txt")') i
            end if

            ! Try to open the file
            open(newunit=funit, file=trim(bsfile), status='old', action='read', iostat=ios)
            if (ios /= 0) exit   ! no more step files

            ! Count lines (shots) and detect n_qubits from line length
            n_shots_file = 0_c_int
            do
                read(funit, '(A)', iostat=ios) linebuf
                if (ios /= 0) exit
                if (len_trim(linebuf) > 0) n_shots_file = n_shots_file + 1_c_int
            end do
            rewind(funit)

            allocate(bitstrings(n_qubits, n_shots_file))
            allocate(kept(n_shots_file))

            do j = 1, int(n_shots_file)
                read(funit, '(A)', iostat=ios) linebuf
                if (ios /= 0) exit
                ! Either direction feeds the filter garbage that reads as "kept 0"
                ! rather than as an error: a short line pads with blanks, and
                ! ichar(' ')-48 = -16, while a long line is a different model space.
                if (len_trim(linebuf) > n_qubits) then
                    write(*,'("ERROR: ",A,", line ",I0,": more than ",I0," characters")') &
                        trim(bsfile), j, n_qubits
                    write(*,'("       Pass the .snt this dump was produced with.")')
                    error stop "run_bitstrings_dir: bitstring width does not match model space"
                else if (len_trim(linebuf) /= n_qubits) then
                    write(*,'("ERROR: ",A,", line ",I0,": ",I0," characters, expected ",I0)') &
                        trim(bsfile), j, len_trim(linebuf), n_qubits
                    write(*,'("       Pass the .snt this dump was produced with.")')
                    error stop "run_bitstrings_dir: bitstring width does not match model space"
                end if
                do q = 1, int(n_qubits)
                    bitstrings(q, j) = linebuf(q:q)
                end do
            end do
            close(funit)

            print '("  Step ",I2,": ",I4," shots from ",A)', i, n_shots_file, trim(bsfile)

            ! Convert to integer array
            allocate(occ_int(n_qubits, n_shots_file))
            call convert_bitstrings_to_int(bitstrings, int(n_qubits), int(n_shots_file), occ_int)

            ! Symmetry filter (timed)
            call system_clock(tc0)
            n_kept_ci = 0_c_int
            call filter_bitstrings_int(occ_int, int(n_shots_file), int(n_qubits), int(n_qubits/2), &
                                       n_protons, n_neutrons, mj2_tgt, 0_c_int, kept, n_kept_ci)
            call system_clock(tc1)
            t_filter_ns = (tc1 - tc0) * (1000000000_8 / tick)
            n_kept = int(n_kept_ci)
            deallocate(occ_int)
            print '("    kept=",I4,"/",I4)', n_kept, n_shots_file

            t_ham_ns  = 0_8
            t_diag_ns = 0_8

            if (n_kept > 0) then
                allocate(kept_idx(n_kept))
                ik = 0
                do j = 1, int(n_shots_file)
                    if (kept(j)) then
                        ik = ik + 1
                        kept_idx(ik) = j
                    end if
                end do

                ! Hamiltonian build (timed)
                allocate(basis_map(n_kept))
                call system_clock(tc0)
                call build_subspace_hamiltonian(ms, n_protons, n_neutrons, &
                    bitstrings, kept_idx, n_kept, int(n_qubits), &
                    hamiltonian, dim, basis_map, info)
                call system_clock(tc1)
                t_ham_ns = (tc1 - tc0) * (1000000000_8 / tick)

                if (info == 0) then
                    ! Diagonalisation (timed)
                    call system_clock(tc0)
                    call diagonalize_exact_complex(hamiltonian, dim, eigenvalues, eigenvectors, info)
                    call system_clock(tc1)
                    t_diag_ns = (tc1 - tc0) * (1000000000_8 / tick)

                    if (info == 0) then
                        n_valid_steps = n_valid_steps + 1
                        e_min = min(e_min, eigenvalues(1))
                        print '("    E=",F18.9," MeV  dim=",I5)', eigenvalues(1), dim
                        write(*,'("RESULT  energy_step",I2.2,"   ",F16.9," MeV")') i, eigenvalues(1)
                        write(*,'("RESULT  kept_step",I2.2,"     ",I16," shots")') i, n_kept
                        write(*,'("RESULT  dim_step",I2.2,"      ",I16," states")') i, dim

                    end if
                    deallocate(eigenvectors)
                end if
                if (allocated(hamiltonian))  deallocate(hamiltonian)
                if (allocated(eigenvalues))  deallocate(eigenvalues)
                if (allocated(kept_idx))     deallocate(kept_idx)
                if (allocated(basis_map))    deallocate(basis_map)
            end if

            t_classical_ns = t_filter_ns + t_ham_ns + t_diag_ns
            total_filter_ns    = total_filter_ns    + t_filter_ns
            total_ham_ns       = total_ham_ns       + t_ham_ns
            total_diag_ns      = total_diag_ns      + t_diag_ns
            total_classical_ns = total_classical_ns + t_classical_ns

            deallocate(bitstrings, kept)
        end do

        ! Aggregate result output
        if (n_valid_steps > 0) then
            write(*,'("RESULT  filter_mean    ",I16," ns")') total_filter_ns / int(n_valid_steps,8)
            write(*,'("RESULT  filter_total   ",I16," ns")') total_filter_ns
            write(*,'("RESULT  ham_mean       ",I16," ns")') total_ham_ns / int(n_valid_steps,8)
            write(*,'("RESULT  ham_total      ",I16," ns")') total_ham_ns
            write(*,'("RESULT  diag_mean      ",I16," ns")') total_diag_ns / int(n_valid_steps,8)
            write(*,'("RESULT  diag_total     ",I16," ns")') total_diag_ns
            write(*,'("RESULT  classical_total",I16," ns")') total_classical_ns
            write(*,'("RESULT  energy_min     ",F16.9," MeV")') e_min
        end if

        call cleanup_cg_tables()
    end subroutine run_bitstrings_dir

end module nuclear_shell_driver

! ============================================================================
! nuclear_shell_driver_exe  -  entry point
!
! Pipeline (single-program, open-loop):
!   1. Parse command-line arguments
!   2. Load .snt Hamiltonian and build operator pools  } run_circuit_ensemble
!   3. Rank pools by PT2 and seed angles               }
!   4. Build circuit ensemble (HF reference + layers)  }
!   5. Submit to IBM Runtime or generate test shots     }
!   6. Pool and filter bitstrings (symmetry post-selection)
!   7. Build restricted subspace Hamiltonian
!   8. Diagonalize (LAPACK zheev) -> ground-state energy
!   9. Emit RESULT lines
! ============================================================================
program nuclear_shell_driver_exe
    use iso_c_binding
    use nuclear_shell_driver
    implicit none

    integer :: n_circuits, shots, n_subset, max_steps, max_depth
    real(c_double) :: min_energy
    character(len=256) :: arg
    character(len=256) :: bitstrings_dir
    character(len=256) :: snt_arg
    character(len=16)  :: mode_flag   ! "pooled", "per-step", or "" (auto-select)
    character(len=128) :: backend_arg ! --backend NAME; "" = least busy
    integer :: i, n_args
    logical :: use_runtime, bitstrings_mode, max_depth_set, save_bitstrings
    integer(8) :: t_wall_0, t_wall_1, tick_rate_wall

    integer(c_int) :: N_PROTONS  = 2
    integer(c_int) :: N_NEUTRONS = 2
    integer(c_int) :: MJ2_TARGET = 0_c_int
    integer(c_int) :: J_TARGET_2 = 0_c_int

    ! --- 1. Defaults (overridden by command-line arguments below) -------------
    n_circuits      = 11
    shots           = 1024
    n_subset        = 16
    max_steps       = 32
    max_depth       = 0
    max_depth_set   = .false.
    bitstrings_dir  = ""
    snt_arg         = "USDB.snt"
    mode_flag       = ""
    backend_arg     = ""
    use_runtime       = .false.
    bitstrings_mode   = .false.
    save_bitstrings   = .false.

    ! --- 1. Parse command-line arguments --------------------------------------
    n_args = command_argument_count()
    i = 1
    do while (i <= n_args)
        call get_command_argument(i, arg)
        select case (trim(arg))
        case ('--circuits', '-n')
            i = i + 1
            if (i <= n_args) then
                call get_command_argument(i, arg)
                read(arg, *) n_circuits
            end if
        case ('--subset')
            i = i + 1
            if (i <= n_args) then
                call get_command_argument(i, arg)
                read(arg, *) n_subset
            end if
        case ('--shots', '-s')
            i = i + 1
            if (i <= n_args) then
                call get_command_argument(i, arg)
                read(arg, *) shots
            end if
        case ('--protons', '-p')
            i = i + 1
            if (i <= n_args) then
                call get_command_argument(i, arg)
                read(arg, *) N_PROTONS
            end if
        case ('--neutrons', '-q')
            i = i + 1
            if (i <= n_args) then
                call get_command_argument(i, arg)
                read(arg, *) N_NEUTRONS
            end if
        case ('--runtime', '-r')
            use_runtime = .true.
        case ('--save-bitstrings')
            save_bitstrings = .true.
        case ('--bitstrings-dir')
            bitstrings_mode = .true.
            i = i + 1
            if (i <= n_args) then
                call get_command_argument(i, bitstrings_dir)
            end if
        case ('--max-steps')
            i = i + 1
            if (i <= n_args) then
                call get_command_argument(i, arg)
                read(arg, *) max_steps
            end if
        case ('--max-depth')
            i = i + 1
            if (i <= n_args) then
                call get_command_argument(i, arg)
                read(arg, *) max_depth
                max_depth_set = .true.
            end if
        case ('--mj-target')
            i = i + 1
            if (i <= n_args) then
                call get_command_argument(i, arg)
                read(arg, *) MJ2_TARGET
            end if
        case ('--j-target')
            i = i + 1
            if (i <= n_args) then
                call get_command_argument(i, arg)
                read(arg, *) J_TARGET_2
            end if
        case ('--snt')
            i = i + 1
            if (i <= n_args) then
                call get_command_argument(i, arg)
                snt_arg = trim(adjustl(arg))
            end if
        case ('--shell')
            ! Convenience alias: maps tier name to default .snt filename.
            i = i + 1
            if (i <= n_args) then
                call get_command_argument(i, arg)
                select case (trim(adjustl(arg)))
                case ("sd")
                    snt_arg = "USDB.snt"
                case ("pf")
                    snt_arg = "gxpf1.snt"
                case default
                    write(*,'("ERROR: --shell must be ''sd'' or ''pf'', got: ",A)') trim(arg)
                    write(*,'("       Use --snt <file.snt> to load any interaction directly.")')
                    stop 1
                end select
            end if
        case ('--backend')
            i = i + 1
            if (i <= n_args) call get_command_argument(i, backend_arg)
        case ('--mode')
            i = i + 1
            if (i <= n_args) then
                call get_command_argument(i, arg)
                mode_flag = trim(adjustl(arg))
                if (mode_flag /= 'pooled' .and. mode_flag /= 'per-step') then
                    write(*,'("ERROR: --mode must be ''pooled'' or ''per-step'', got: ",A)') &
                        trim(mode_flag)
                    stop 1
                end if
            end if
        case ('--help', '-h')
            print *, "Usage: nuclear_shell_driver [OPTIONS]"
            print *, "  -n, --circuits NUM     number of circuits in ensemble (default 11 = full doubles coverage at --subset 16)"
            print *, "  --subset NUM           TBME pairs per circuit (default 8, ranked partition)"
            print *, "  --max-depth NUM        max gates per circuit layer (optional; Givens=6, QEB=28)"
            print *, "                         Must be >= 6. --subset and --max-depth must be consistent."
            print *, "  -s, --shots NUM        shots per circuit (default 1024)"
            print *, "  -p, --protons NUM      valence protons (default 2 = 20Ne)"
            print *, "  -q, --neutrons NUM     valence neutrons (default 2)"
            print *, "  -r, --runtime          submit circuits via IBM Runtime"
            print *, "  --bitstrings-dir DIR   load bitstrings_stepNN.txt from DIR, skip QPU"
            print *, "  --max-steps N          max circuit files to load in --bitstrings-dir mode"
            print *, "  --mode MODE            post-processing strategy (default: auto)"
            print *, "                           pooled    -  pool all circuits, one diagonalization"
            print *, "                                      (default for --runtime / test mode)"
            print *, "                           per-step  -  diagonalize each step file independently,"
            print *, "                                      report min energy (default for --bitstrings-dir;"
            print *, "                                      same strategy as nuclear_shell_parallel)"
            print *, "  --mj-target N          2*Mj sector: 0=even-even (default), +/-1=odd-mass"
            print *, "  --j-target N           2*J for CG filter: 0=J=0 (default)"
            print *, "  --snt FILE             path to any KSHELL-format .snt interaction file"
            print *, "                         (default: USDB.snt).  Any interaction can be used;"
            print *, "                         j_max and orbital count are read from the file."
            print *, "  --shell NAME           shorthand: 'sd' maps to USDB.snt, 'pf' to gxpf1.snt."
            print *, "                         Use --snt for any other interaction."
            print *, "  --save-bitstrings      write bitstrings_stepNN.txt in test mode (for nuclear_shell_parallel)"
            print *, "  --backend NAME         run on this backend instead of the least busy one"
            print *, "                         (--runtime only; NAME must appear in your account listing)"
            stop 0
        case default
            ! Previously an unrecognised flag fell through this select silently, so a
            ! typo or a flag meant for nuclear_shell_parallel (--steps) was discarded
            ! together with its value and the run continued with defaults.
            write(*,'("ERROR: unknown option: ",A)') trim(arg)
            write(*,'("       Run with --help for the supported flags.")')
            stop 1
        end select
        i = i + 1
    end do

    ! Resolve and validate --mode against the other flags.
    ! Auto-select if not set; error on explicit conflict.
    if (mode_flag == "") then
        if (bitstrings_mode) then
            mode_flag = "per-step"
        else
            mode_flag = "pooled"
        end if
    else if (mode_flag == "per-step" .and. .not. bitstrings_mode) then
        print *, "ERROR: --mode per-step requires --bitstrings-dir (no bitstring files without a QPU run)."
        print *, "       Run with --runtime first to produce bitstrings_stepNN.txt, then use --bitstrings-dir."
        stop 1
    else if (mode_flag == "pooled" .and. bitstrings_mode) then
        print *, "ERROR: --mode pooled is not valid with --bitstrings-dir."
        print *, "       Pooled mode runs the full circuit ensemble; use without --bitstrings-dir."
        print *, "       To post-process saved bitstrings, use --mode per-step (or omit --mode)."
        stop 1
    end if

    print *, "========================================"
    print *, "Nuclear Shell Model Circuit Ensemble Driver"
    print *, "========================================"
    write(*,'("  Post-processing  : ",A)') trim(mode_flag)
    print *, ""

    ! --bitstrings-dir / per-step mode: steps 6-9 only (no circuit generation / QPU)
    if (bitstrings_mode) then
        call run_bitstrings_dir(trim(bitstrings_dir), N_PROTONS, N_NEUTRONS, max_steps, &
                                mj2_target=MJ2_TARGET, j_target_2=J_TARGET_2, &
                                snt_file=trim(snt_arg))
        stop 0
    end if

    ! --- 2-9. Full pipeline (steps 2-5 inside run_circuit_ensemble) ----------
    call system_clock(t_wall_0, tick_rate_wall)
    if (max_depth_set) then
        call run_circuit_ensemble(int(n_circuits, c_int), N_PROTONS, N_NEUTRONS, &
                                  int(shots, c_int), min_energy, use_runtime, &
                                  mj2_target=MJ2_TARGET, j_target_2=J_TARGET_2, &
                                  subset_target=int(n_subset, c_int), &
                                  max_depth=int(max_depth, c_int), &
                                  snt_file=trim(snt_arg), &
                                  save_bitstrings=save_bitstrings, &
                                  backend_name=trim(backend_arg))
    else
        call run_circuit_ensemble(int(n_circuits, c_int), N_PROTONS, N_NEUTRONS, &
                                  int(shots, c_int), min_energy, use_runtime, &
                                  mj2_target=MJ2_TARGET, j_target_2=J_TARGET_2, &
                                  subset_target=int(n_subset, c_int), &
                                  snt_file=trim(snt_arg), &
                                  save_bitstrings=save_bitstrings, &
                                  backend_name=trim(backend_arg))
    end if
    call system_clock(t_wall_1)

    ! --- 9. Final wall-clock timing -------------------------------------------
    write(*,'("RESULT  wall_total     ",I16," ns")') &
        (t_wall_1 - t_wall_0) * (1000000000_8 / tick_rate_wall)

end program nuclear_shell_driver_exe
