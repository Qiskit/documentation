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

!> @brief Coarray-based PGAS parallel post-processing for the nuclear circuit ensemble
!>
!> Post-processing strategy: PER-STEP (distributed).
!> Each coarray image independently processes a disjoint partition of the
!> per-circuit bitstring files retrieved from the QPU.  This is the PGAS-
!> distributed form of the same strategy used by
!> `nuclear_shell_driver --bitstrings-dir DIR --mode per-step`:
!> each step file is filtered and diagonalized independently, and image 1
!> gathers the per-image minima to report the global variational minimum.
!>
!> A single coarray image (cafrun -n 1, or compiled without a coarray
!> runtime) gives the same result as:
!>   nuclear_shell_driver --bitstrings-dir DIR --mode per-step
!>
!> For the pooled strategy (all circuits merged into one subspace, giving a
!> tighter variational bound), use nuclear_shell_driver directly without
!> --bitstrings-dir.
!>
!> Input: bitstrings_step01.txt .. bitstrings_stepNN.txt written by the
!>        --runtime mode of nuclear_shell_driver.
!>
!> Each image owns steps:  me, me+n_images, me+2*n_images, ...
!> (1-based, wrapping at n_steps)
!>
!> Compile:  cmake -B build -DCMAKE_Fortran_FLAGS="-fcoarray=lib" ...
!> Run:      cafrun -n 4 ./nuclear_shell_parallel \
!>               --steps 11 --protons 2 --neutrons 2

program nuclear_shell_parallel
    use iso_c_binding
    use exact_solver,     only: build_subspace_hamiltonian, diagonalize_exact_complex
    use symmetry_filter,  only: setup_single_particle_data, &
                                 convert_bitstrings_to_int, filter_bitstrings_int
    use usdb_reader,      only: read_usdb_file, model_space_data
    use orbital_registry, only: init_registry_from_snt, reg_n_qubits
    use clebsch_gordan,   only: init_cg_tables, cleanup_cg_tables
    implicit none

    ! Coarray scalars: each image's best energy and timing
    real(8)   :: image_emin[*]
    integer(8):: image_wall_ns[*]

    ! Runtime parameters (overridable via command line)
    integer :: n_steps        = 11
    integer :: n_protons_arg  = 2
    integer :: n_neutrons_arg = 2
    character(len=256) :: bits_dir   = ""
    character(len=64)  :: shell_arg  = "sd"
    character(len=64)  :: snt_file   = "USDB.snt"

    ! Local variables
    integer   :: n_images, me, step, k
    integer(8):: t0_wall, t1_wall, tick_rate
    real(8)   :: e_local_min, e_global_min
    integer(8):: wall_local_ns
    integer(c_int) :: jmax2_derived
    integer   :: snt_ok_flag[*]        ! 0 = ok, 1 = failed; gathered pre-barrier
    integer   :: n_missing_co[*]       ! count of missing step-files on this image

    ! Post-processing state
    type(model_space_data) :: ms
    character(kind=c_char), allocatable :: bitstrings(:,:)
    integer(1),             allocatable :: occ_int(:,:)
    logical(c_bool),        allocatable :: kept(:)
    integer,                allocatable :: kept_idx(:), basis_map(:)
    complex(8),             allocatable :: hamiltonian(:,:), eigenvectors(:,:)
    real(8),                allocatable :: eigenvalues(:)
    integer(c_int) :: n_qubits, n_kept_ci, n_shots_file
    integer        :: ik, n_kept, dim, info, snt_st, funit, ios, q, j
    character(len=256) :: bsfile, arg
    character(len=:), allocatable :: linebuf
    integer(c_int)     :: mj2_tgt
    ! missing-file diagnostics collected locally; totals gathered via coarray
    integer :: n_missing
    integer, allocatable :: missing_step_buf(:)   ! step indices for missing files
    integer :: i_arg, n_args

    n_images = num_images()
    me       = this_image()
    mj2_tgt  = 0_c_int

    ! Parse command-line arguments (all images parse independently)
    n_args = command_argument_count()
    i_arg  = 1
    do while (i_arg <= n_args)
        call get_command_argument(i_arg, arg)
        select case (trim(arg))
        case ('--steps')
            i_arg = i_arg + 1
            if (i_arg <= n_args) then
                call get_command_argument(i_arg, arg)
                read(arg, *) n_steps
            end if
        case ('--protons', '-p')
            i_arg = i_arg + 1
            if (i_arg <= n_args) then
                call get_command_argument(i_arg, arg)
                read(arg, *) n_protons_arg
            end if
        case ('--neutrons', '-q')
            i_arg = i_arg + 1
            if (i_arg <= n_args) then
                call get_command_argument(i_arg, arg)
                read(arg, *) n_neutrons_arg
            end if
        case ('--bitstrings-dir')
            i_arg = i_arg + 1
            if (i_arg <= n_args) call get_command_argument(i_arg, bits_dir)
        case ('--mj-target')
            i_arg = i_arg + 1
            if (i_arg <= n_args) then
                call get_command_argument(i_arg, arg)
                read(arg, *) mj2_tgt
            end if
        case ('--shell')
            i_arg = i_arg + 1
            if (i_arg <= n_args) then
                call get_command_argument(i_arg, arg)
                shell_arg = trim(adjustl(arg))
                select case (trim(shell_arg))
                case ("sd")
                    snt_file = "USDB.snt"
                case ("pf")
                    snt_file = "gxpf1.snt"
                case default
                    if (me == 1) write(*,'("ERROR: unknown shell: ",A)') trim(shell_arg)
                    error stop "nuclear_shell_parallel: unsupported --shell value"
                end select
            end if
        case ('--help', '-h')
            if (me == 1) then
                print *, "Usage: nuclear_shell_parallel [OPTIONS]"
                print *, "  --steps N           number of bitstring step files (default 11)"
                print *, "  -p, --protons N     valence protons  (default 2 = 20Ne)"
                print *, "  -q, --neutrons N    valence neutrons (default 2)"
                print *, "  --bitstrings-dir D  directory containing bitstrings_stepNN.txt"
                print *, "  --mj-target N       2*Mj sector (default 0)"
                print *, "  --shell NAME        shell model space: 'sd' (default) or 'pf' (untested)"
            end if
            stop 0
        end select
        i_arg = i_arg + 1
    end do

    if (me == 1) then
        print *, " Nuclear Shell Model  -  PGAS Coarray Post-processing"
        print '("  Nucleus : ",I1,"p + ",I1,"n")', n_protons_arg, n_neutrons_arg
        print '("  Steps   : ",I4," (circuit bitstring files)")', n_steps
        print '("  Images  : ",I4)', n_images
        if (len_trim(bits_dir) > 0) &
            print '("  Dir     : ",A)', trim(bits_dir)
        print *, ""
    end if

    ! Initialise physics modules (every image reads the same .snt)
    ! Use a coarray flag so a load failure on any image triggers a clean collective
    ! error stop rather than a hung sync all (one image stopped, others waiting).
    snt_ok_flag = 0
    call read_usdb_file(trim(snt_file), ms, snt_st)
    if (snt_st /= 0) then
        write(*,'("Image ",I4,": ERROR: could not load ",A)') me, trim(snt_file)
        snt_ok_flag = 1
    end if

    sync all   ! ensure all images have written snt_ok_flag before image 1 checks

    if (me == 1) then
        do k = 1, n_images
            if (snt_ok_flag[k] /= 0) &
                error stop "nuclear_shell_parallel: .snt file not found on at least one image"
        end do
    end if

    sync all   ! hold remaining images until image 1 has confirmed no failures

    if (snt_st /= 0) stop   ! images that failed don't proceed (image 1 already stopped above)

    call init_registry_from_snt(ms, int(n_protons_arg, c_int), int(n_neutrons_arg, c_int))
    n_qubits = int(reg_n_qubits(), c_int)
    allocate(character(len=n_qubits + 1) :: linebuf)
    call setup_single_particle_data(n_qubits, trim(snt_file)//c_null_char)
    ! Derive j_max from the loaded model space so pf-shell (j_max=7/2) works
    ! automatically without manual edits to the source literal.
    jmax2_derived = int(maxval(ms%orbitals%j2), c_int)
    call init_cg_tables(jmax2_derived)

    ! Each image processes its own partition of steps
    e_local_min   = huge(1.0d0)
    wall_local_ns = 0_8
    n_missing     = 0
    allocate(missing_step_buf(n_steps))
    call system_clock(t0_wall, tick_rate)

    do step = me, n_steps, n_images

        ! Build filename
        if (len_trim(bits_dir) > 0) then
            write(bsfile,'(A,"/bitstrings_step",I2.2,".txt")') trim(bits_dir), step
        else
            write(bsfile,'("bitstrings_step",I2.2,".txt")') step
        end if

        open(newunit=funit, file=trim(bsfile), status='old', action='read', iostat=ios)
        if (ios /= 0) then
            ! Buffer locally; n_missing_co is published to the coarray slot
            ! before sync all so image 1 can note which images had gaps.
            n_missing = n_missing + 1
            missing_step_buf(n_missing) = step
            cycle
        end if

        ! Count lines (= shots)
        n_shots_file = 0_c_int
        do
            read(funit, '(A)', iostat=ios) linebuf
            if (ios /= 0) exit
            if (len_trim(linebuf) > 0) n_shots_file = n_shots_file + 1_c_int
        end do
        rewind(funit)

        if (n_shots_file == 0) then
            close(funit)
            cycle
        end if

        allocate(bitstrings(n_qubits, n_shots_file))
        do j = 1, int(n_shots_file)
            read(funit, '(A)', iostat=ios) linebuf
            if (ios /= 0) exit
            if (len_trim(linebuf) > n_qubits) then
                write(*,'("ERROR [image ",I0,"]: ",A,", line ",I0,": more than ",I0," characters")') &
                    me, trim(bsfile), j, n_qubits
                error stop "nuclear_shell_parallel: bitstring width does not match model space"
            else if (len_trim(linebuf) /= n_qubits) then
                write(*,'("ERROR [image ",I0,"]: ",A,", line ",I0,": ",I0," characters, expected ",I0)') &
                    me, trim(bsfile), j, len_trim(linebuf), n_qubits
                error stop "nuclear_shell_parallel: bitstring width does not match model space"
            end if
            do q = 1, int(n_qubits)
                bitstrings(q, j) = linebuf(q:q)
            end do
        end do
        close(funit)

        ! Convert to integer occupation array
        allocate(occ_int(n_qubits, n_shots_file))
        call convert_bitstrings_to_int(bitstrings, int(n_qubits), int(n_shots_file), occ_int)

        ! Symmetry filter
        allocate(kept(n_shots_file))
        n_kept_ci = 0_c_int
        call filter_bitstrings_int(occ_int, int(n_shots_file), int(n_qubits), int(n_qubits/2), &
                                   int(n_protons_arg, c_int), int(n_neutrons_arg, c_int), &
                                   mj2_tgt, 0_c_int, kept, n_kept_ci)
        deallocate(occ_int)
        n_kept = int(n_kept_ci)

        if (n_kept > 0) then
            allocate(kept_idx(n_kept))
            ik = 0
            do j = 1, int(n_shots_file)
                if (kept(j)) then
                    ik = ik + 1
                    kept_idx(ik) = j
                end if
            end do

            allocate(basis_map(n_kept))
            call build_subspace_hamiltonian(ms, int(n_protons_arg, c_int), int(n_neutrons_arg, c_int), &
                bitstrings, kept_idx, n_kept, int(n_qubits), &
                hamiltonian, dim, basis_map, info)

            if (info == 0) then
                call diagonalize_exact_complex(hamiltonian, dim, eigenvalues, eigenvectors, info)
                if (info == 0) then
                    e_local_min = min(e_local_min, eigenvalues(1))
                    write(*,'("  Image ",I3,": step ",I2,"  kept=",I4,"  dim=",I4,"  E=",F18.9," MeV")') &
                        me, step, n_kept, dim, eigenvalues(1)
                end if
                if (allocated(eigenvectors)) deallocate(eigenvectors)
            end if
            if (allocated(hamiltonian))  deallocate(hamiltonian)
            if (allocated(eigenvalues))  deallocate(eigenvalues)
            if (allocated(kept_idx))     deallocate(kept_idx)
            if (allocated(basis_map))    deallocate(basis_map)
        end if

        deallocate(bitstrings, kept)
    end do

    call system_clock(t1_wall)
    wall_local_ns = (t1_wall - t0_wall) * (1000000000_8 / tick_rate)

    ! Store results in coarray slots for image 1 to gather
    image_emin    = e_local_min
    image_wall_ns = wall_local_ns
    n_missing_co  = n_missing

    deallocate(missing_step_buf)

    sync all

    ! Image 1 gathers and reports
    if (me == 1) then
        print *, ""
        print *, " PGAS Post-processing Results:"
        e_global_min = image_emin[1]
        do k = 1, n_images
            if (image_emin[k] < huge(1.0d0)) then
                write(*,'("  Image ",I3,"  emin=",F18.9," MeV  wall=",F9.3," ms",I4," missing")') &
                    k, image_emin[k], real(image_wall_ns[k], 8) / 1.0d6, n_missing_co[k]
                e_global_min = min(e_global_min, image_emin[k])
            else
                write(*,'("  Image ",I3,"  (no valid steps)  missing=",I4)') k, n_missing_co[k]
            end if
        end do

        print *, ""
        write(*,'("RESULT  energy_min     ",F16.9," MeV")') e_global_min
        write(*,'("RESULT  n_images       ",I16," images")') int(n_images, 8)
    end if

    call cleanup_cg_tables()

end program nuclear_shell_parallel
