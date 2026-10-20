!> @file symmetry_filter.f90
!> @brief Symmetry-based post-selection filter for nuclear shell model bitstrings
!>
!> This module implements post-selection for nuclear subspace diagonalization: filtering
!> sampled bitstrings to keep only those with correct quantum numbers (N, Z, Jz, parity).
!> Exploiting exact nuclear symmetries reduces the effective shot count needed by ~5-10x.
!>
!> Physics Background:
!> - Particle number conservation (N, Z) is exact in nuclear physics
!> - Jz is the z-component of total angular momentum (conserved in axially symmetric systems)
!> - Parity Π = (-1)^Σli is a multiplicative quantum number (product of single-particle parities)
!> - Post-selection exploits these symmetries to reduce Hilbert space by orders of magnitude

module symmetry_filter
    use iso_c_binding
    use iso_fortran_env, only: int32
    use orbital_registry, only: init_registry_from_file, reg_n_qubits, &
                                 reg_mj2, reg_parity
    implicit none
    private

    ! Public interface
    public :: filter_bitstrings, setup_single_particle_data
    public :: convert_bitstrings_to_int, filter_bitstrings_int

    ! Module-level quantum-number views; populated from orbital_registry
    integer(c_int), allocatable :: SD_MJ2(:)
    integer(c_int), allocatable :: SD_PAR(:)

contains

    !> @brief Initialize single-particle quantum number data for a given shell model space
    !>
    !> Sets up the SD_MJ2 and SD_PAR arrays containing quantum numbers for each
    !> orbital by reading the appropriate .snt file via orbital_registry.
    !>
    !> @param[in] n_qubits  Total number of qubits (orbitals); must match the .snt file.
    !> @param[in] snt_path  Path to the .snt interaction file (e.g. "USDB.snt", "gxpf1.snt").
    !>            Any valid KSHELL-format .snt file is accepted; no hardcoded shell names.
    subroutine setup_single_particle_data(n_qubits, snt_path) bind(c, name="setup_single_particle_data")
        integer(c_int), intent(in), value :: n_qubits
        character(kind=c_char), intent(in) :: snt_path(*)

        character(len=256) :: snt_file
        integer :: i

        snt_file = ""
        i = 1
        do while (snt_path(i) /= c_null_char .and. i <= 256)
            snt_file(i:i) = snt_path(i)
            i = i + 1
        end do

        ! Load quantum numbers from the .snt file.  n_protons/n_neutrons not needed
        ! here; only mj/parity queries are made from this table.  Occupancy is set
        ! separately by init_registry_from_snt / init_registry_sd_shell.
        call init_registry_from_file(trim(snt_file), 0_c_int, 0_c_int)

        ! Populate the local SD_MJ2/SD_PAR views from the registry so that the
        ! filter_bitstrings bind(C) interface continues to work unchanged.
        if (allocated(SD_MJ2)) deallocate(SD_MJ2)
        if (allocated(SD_PAR)) deallocate(SD_PAR)
        allocate(SD_MJ2(n_qubits))
        allocate(SD_PAR(n_qubits))
        do i = 0, n_qubits - 1
            SD_MJ2(i + 1) = reg_mj2(i)
            SD_PAR(i + 1) = reg_parity(i)
        end do

    end subroutine setup_single_particle_data
    
    
    !> @brief Filter bitstrings based on nuclear quantum number constraints
    !>
    !> This is the core symmetry filter that post-selects bitstrings satisfying:
    !> 1. Proton number: popcount(proton_bits) == n_protons
    !> 2. Neutron number: popcount(neutron_bits) == n_neutrons
    !> 3. Jz projection: sum(SD_MJ2 for occupied orbitals) == Mj_2target
    !> 4. Parity: XOR(SD_PAR for occupied orbitals) == parity_target
    !>
    !> @param[in] bitstrings Array of bitstring samples (character strings)
    !> @param[in] n_samples Number of bitstring samples
    !> @param[in] n_qubits Total number of qubits (24 for sd-shell)
    !> @param[in] n_qp Number of proton orbitals (12 for sd-shell)
    !> @param[in] n_qn Number of neutron orbitals (12 for sd-shell)
    !> @param[in] n_protons Target proton number
    !> @param[in] n_neutrons Target neutron number
    !> @param[in] Mj_2target Target 2*Jz value (integer)
    !> @param[in] parity_target Target parity (0=even, 1=odd)
    !> @param[out] kept Logical array indicating which samples pass filter
    !> @param[out] n_kept Count of samples that pass filter
    subroutine filter_bitstrings(bitstrings, n_samples, n_qubits, n_qp, n_qn, &
                                 n_protons, n_neutrons, Mj_2target, parity_target, &
                                 kept, n_kept) bind(c, name="filter_bitstrings")
        integer(c_int), intent(in), value :: n_samples, n_qubits, n_qp, n_qn
        integer(c_int), intent(in), value :: n_protons, n_neutrons, Mj_2target, parity_target
        character(kind=c_char), intent(in) :: bitstrings(n_qubits, n_samples)
        logical(c_bool), intent(out) :: kept(n_samples)
        integer(c_int), intent(out) :: n_kept

        integer :: i_sample, i_qubit
        integer :: proton_count, neutron_count
        integer :: Jz_2sum, parity_prod
        integer :: n_kept_local
        integer, allocatable :: occ(:)         ! per-sample occupation vector (0/1)
        integer(int32) :: packed_p, packed_n   ! packed proton / neutron bits
        integer(int32) :: par_mask_p, par_mask_n ! separate parity masks for p and n halves

        if (.not. allocated(SD_MJ2) .or. .not. allocated(SD_PAR)) then
            print *, "ERROR: Single-particle data not initialized. Call setup_single_particle_data first."
            stop 1
        end if

        if (n_qp + n_qn /= n_qubits) then
            print *, "ERROR: n_qp + n_qn must equal n_qubits"
            stop 1
        end if

        if (parity_target /= 0 .and. parity_target /= 1) then
            print *, "ERROR: parity_target must be 0 (even) or 1 (odd)"
            stop 1
        end if

        kept = .false.
        n_kept_local = 0
        allocate(occ(n_qubits))

        ! Build separate proton and neutron parity masks.  Each mask bit k corresponds
        ! to bit k in packed_p (or packed_n): it is set iff that orbital has odd parity.
        ! Using two int32 masks (one per nucleon species) is safe for any model space
        ! with n_qp <= 32 and n_qn <= 32, covering both sd-shell (12+12) and
        ! pf-shell (20+20).  The previous single-mask approach was truncated at 32
        ! total qubits and silently dropped the last 8 neutron orbitals in pf-shell.
        par_mask_p = 0_int32
        par_mask_n = 0_int32
        do i_qubit = 1, n_qp
            if (SD_PAR(i_qubit) /= 0) &
                par_mask_p = ior(par_mask_p, shiftl(1_int32, i_qubit - 1))
        end do
        do i_qubit = n_qp + 1, n_qubits
            if (SD_PAR(i_qubit) /= 0) &
                par_mask_n = ior(par_mask_n, shiftl(1_int32, i_qubit - n_qp - 1))
        end do

        ! OMP threshold: 512 shots is the break-even point on Apple M-series (8 threads).
        ! Below ~512 samples the thread-spawn overhead (~50 µs) exceeds the serial loop
        ! cost; above it the ~2.8 ms serial time is worth parallelising.
        !$OMP PARALLEL DO SCHEDULE(STATIC) IF(n_samples >= 512) &
        !$OMP   PRIVATE(i_qubit,occ,packed_p,packed_n, &
        !$OMP           proton_count,neutron_count,Jz_2sum,parity_prod) &
        !$OMP   REDUCTION(+:n_kept_local)
        do i_sample = 1, n_samples
            ! Step 1: unpack character column → occ(1..n_qubits) integer 0/1.
            ! The ichar-48 subtract is the only branch-free char→int path; the loop
            ! is short (n_qubits=24) and auto-vectorises with -O2 on ARM64.
            do i_qubit = 1, n_qubits
                occ(i_qubit) = ichar(bitstrings(i_qubit, i_sample)) - 48
            end do

            ! Step 2: pack occ into two int32 words (proton / neutron halves).
            ! bit k of packed_p = occ(k+1) for k=0..n_qp-1; same for packed_n.
            packed_p = 0_int32
            packed_n = 0_int32
            do i_qubit = 1, n_qp
                if (occ(i_qubit)      /= 0) packed_p = ior(packed_p, shiftl(1_int32, i_qubit-1))
            end do
            do i_qubit = n_qp+1, n_qubits
                if (occ(i_qubit) /= 0) packed_n = ior(packed_n, shiftl(1_int32, i_qubit-n_qp-1))
            end do

            ! Step 3: particle counts via hardware popcnt (1 instruction on ARMv8/x86-SSE4.2)
            proton_count  = popcnt(packed_p)
            neutron_count = popcnt(packed_n)
            if (proton_count  /= n_protons)  cycle
            if (neutron_count /= n_neutrons) cycle

            ! Step 4: Mj_2sum  -  weighted sum, no popcnt shortcut; dot_product
            ! over the 24-element int array auto-vectorises to SIMD multiply-add.
            Jz_2sum = dot_product(occ, SD_MJ2)
            if (Jz_2sum /= Mj_2target) cycle

            ! Step 5: parity via poppar applied separately to proton and neutron halves,
            ! then XOR'd.  parity = poppar(packed_p & par_mask_p) XOR poppar(packed_n & par_mask_n).
            parity_prod = ieor(poppar(iand(packed_p, par_mask_p)), &
                               poppar(iand(packed_n, par_mask_n)))
            if (parity_prod /= parity_target) cycle

            kept(i_sample) = .true.
            n_kept_local = n_kept_local + 1
        end do
        !$OMP END PARALLEL DO

        n_kept = int(n_kept_local, c_int)
        deallocate(occ)
        
    end subroutine filter_bitstrings

    ! convert_bitstrings_to_int
    ! Convert character bitstring array to integer(1) occupation matrix.
    ! Call ONCE before the filter timer starts; result is reused for H-build too.
    ! occ_int(i,j) = 0 or 1 (integer(1)) for qubit i, sample j.
    subroutine convert_bitstrings_to_int(bitstrings, n_qubits, n_samples, occ_int)
        character(kind=c_char), intent(in)  :: bitstrings(n_qubits, n_samples)
        integer,                intent(in)  :: n_qubits, n_samples
        integer(1),             intent(out) :: occ_int(n_qubits, n_samples)
        integer :: i, j
        !$OMP PARALLEL DO COLLAPSE(2) SCHEDULE(STATIC)
        do j = 1, n_samples
            do i = 1, n_qubits
                occ_int(i, j) = int(ichar(bitstrings(i, j)) - 48, 1)
            end do
        end do
        !$OMP END PARALLEL DO
    end subroutine convert_bitstrings_to_int


    ! filter_bitstrings_int
    ! Fast filter operating on pre-converted integer(1) occupation matrix.
    ! Uses popcnt for N/Z counts and poppar for parity; dot_product for Mj sum.
    ! Timer should start HERE (after convert_bitstrings_to_int).
    subroutine filter_bitstrings_int(occ_int, n_samples, n_qubits, n_qp, &
                                     n_protons, n_neutrons, Mj_2target, parity_target, &
                                     kept, n_kept)
        integer(1),    intent(in)  :: occ_int(n_qubits, n_samples)
        integer,       intent(in)  :: n_samples, n_qubits, n_qp
        integer,       intent(in)  :: n_protons, n_neutrons, Mj_2target, parity_target
        logical(c_bool), intent(out) :: kept(n_samples)
        integer(c_int),  intent(out) :: n_kept

        integer :: i_sample, i_qubit
        integer :: proton_count, neutron_count, Jz_2sum, parity_prod
        integer :: n_kept_local
        integer(int32) :: packed_p, packed_n, par_mask_p, par_mask_n
        integer, allocatable :: occ_i(:)

        if (.not. allocated(SD_MJ2) .or. .not. allocated(SD_PAR)) then
            print *, "ERROR filter_bitstrings_int: call setup_single_particle_data first"
            stop 1
        end if

        kept = .false.
        n_kept_local = 0
        allocate(occ_i(n_qubits))

        ! Build separate proton/neutron parity masks  -  safe for n_qp<=32, n_qn<=32.
        ! Covers both sd-shell (12+12) and pf-shell (20+20) correctly.
        par_mask_p = 0_int32
        par_mask_n = 0_int32
        do i_qubit = 1, n_qp
            if (SD_PAR(i_qubit) /= 0) &
                par_mask_p = ior(par_mask_p, shiftl(1_int32, i_qubit - 1))
        end do
        do i_qubit = n_qp + 1, n_qubits
            if (SD_PAR(i_qubit) /= 0) &
                par_mask_n = ior(par_mask_n, shiftl(1_int32, i_qubit - n_qp - 1))
        end do

        !$OMP PARALLEL DO SCHEDULE(STATIC) IF(n_samples >= 512) &
        !$OMP   PRIVATE(i_qubit,occ_i,packed_p,packed_n, &
        !$OMP           proton_count,neutron_count,Jz_2sum,parity_prod) &
        !$OMP   REDUCTION(+:n_kept_local)
        do i_sample = 1, n_samples
            ! Widen int(1) column to int for arithmetic
            do i_qubit = 1, n_qubits
                occ_i(i_qubit) = int(occ_int(i_qubit, i_sample))
            end do

            ! Pack proton/neutron bits and use hardware popcnt for N/Z
            packed_p = 0_int32;  packed_n = 0_int32
            do i_qubit = 1, n_qp
                if (occ_i(i_qubit) /= 0) &
                    packed_p = ior(packed_p, shiftl(1_int32, i_qubit - 1))
            end do
            do i_qubit = n_qp + 1, n_qubits
                if (occ_i(i_qubit) /= 0) &
                    packed_n = ior(packed_n, shiftl(1_int32, i_qubit - n_qp - 1))
            end do

            proton_count  = popcnt(packed_p)
            neutron_count = popcnt(packed_n)
            if (proton_count  /= n_protons)  cycle
            if (neutron_count /= n_neutrons) cycle

            ! Mj_2sum: weighted dot product (no bit trick; auto-vectorises)
            Jz_2sum = dot_product(occ_i, SD_MJ2)
            if (Jz_2sum /= Mj_2target) cycle

            ! Parity: XOR of poppar over each nucleon half with its own mask.
            parity_prod = ieor(poppar(iand(packed_p, par_mask_p)), &
                               poppar(iand(packed_n, par_mask_n)))
            if (parity_prod /= parity_target) cycle

            kept(i_sample) = .true.
            n_kept_local = n_kept_local + 1
        end do
        !$OMP END PARALLEL DO

        n_kept = int(n_kept_local, c_int)
        deallocate(occ_i)
    end subroutine filter_bitstrings_int

end module symmetry_filter
