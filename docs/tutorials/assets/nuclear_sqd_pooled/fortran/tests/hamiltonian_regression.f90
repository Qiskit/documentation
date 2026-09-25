! This code is part of Qiskit.
! (C) Copyright IBM 2026.
! Licensed under the Apache License, Version 2.0; see LICENSE.txt.
program hamiltonian_regression
    use iso_c_binding, only: c_char
    use usdb_reader
    use clebsch_gordan, only: init_cg_tables
    use exact_solver, only: build_subspace_hamiltonian, diagonalize_exact_complex
    implicit none
    type(model_space_data) :: ms
    integer :: status, i, j, k, l, orb, m, n, dim, unit
    integer :: mj2(24), kept(640)
    integer, allocatable :: mapping(:)
    character(kind=c_char) :: bits(24,640)
    character(len=1024) :: interaction
    complex(8), allocatable :: h(:,:), vectors(:,:)
    real(8), allocatable :: energies(:)

    ! Asymmetric core counts prevent mistaking either count for the core mass.
    call fixture('1 1 18 -0.3')
    call read_usdb_file('reader-test.snt', ms, status, 2, 4)
    if (status /= 0) error stop 'mass-dependent header failed'
    if (ms%core_Z /= 6 .or. ms%core_N /= 8 .or. ms%core_A /= 14) error stop 'incorrect core counts'
    if (abs(ms%core_energy) > 1d-14) error stop 'spurious core energy'
    if (abs(ms%tbmes(1)%matrix_elem - 2d0*(20d0/18d0)**(-0.3d0)) > 1d-12) error stop 'incorrect scaling'
    call free_model_space(ms)
    call read_usdb_file('reader-test.snt', ms, status, 4, 4)
    if (status /= 0) error stop 'second nucleus failed'
    if (abs(ms%tbmes(1)%matrix_elem - 2d0*(22d0/18d0)**(-0.3d0)) > 1d-12) error stop 'ignored valence counts'
    call free_model_space(ms)

    call fixture('1 0')
    call read_usdb_file('reader-test.snt', ms, status, 2, 4)
    if (status /= 0) error stop 'two-field unscaled header failed'
    if (abs(ms%tbmes(1)%matrix_elem - 2d0) > 1d-12) error stop 'unscaled TBME changed'
    call free_model_space(ms)
    call fixture('1 1 0 -0.3')
    call read_usdb_file('reader-test.snt', ms, status, 2, 4)
    if (status == 0) error stop 'accepted invalid reference mass'
    call free_model_space(ms)
    call fixture('1 2')
    call read_usdb_file('reader-test.snt', ms, status, 2, 4)
    if (status == 0) error stop 'accepted unsupported method'
    call free_model_space(ms)
    open(newunit=unit, file='reader-test.snt', status='old')
    close(unit, status='delete')

    call get_command_argument(1, interaction)
    call read_usdb_file(trim(interaction), ms, status, 2, 2)
    if (status /= 0) error stop 'cannot read USDA interaction'
    n = 0
    do orb = 1, ms%n_orbitals
        do m = ms%orbitals(orb)%j2, -ms%orbitals(orb)%j2, -2
            n = n + 1
            if (n > 24) error stop 'unexpected model space'
            mj2(n) = m
        end do
    end do
    if (n /= 24) error stop 'expected sd shell'
    ! All M_J=0 determinants for two protons and two neutrons in the sd shell.
    bits = '0'
    n = 0
    do i = 1, 11
        do j = i+1, 12
            do k = 13, 23
                do l = k+1, 24
                    if (mj2(i)+mj2(j)+mj2(k)+mj2(l) /= 0) cycle
                    n = n+1
                    if (n > 640) error stop 'too many determinants'
                    bits([i,j,k,l],n) = '1'
                    kept(n) = n
                end do
            end do
        end do
    end do
    if (n /= 640) error stop 'incomplete basis'
    call init_cg_tables(maxval(ms%orbitals%j2))
    call build_subspace_hamiltonian(ms, 2, 2, bits, kept, n, 24, h, dim, mapping, status)
    if (status /= 0 .or. dim /= 640) error stop 'Hamiltonian construction failed'
    if (maxval(abs(h-transpose(conjg(h)))) > 1d-10) error stop 'Hamiltonian is not Hermitian'
    call diagonalize_exact_complex(h, dim, energies, vectors, status)
    if (status /= 0) error stop 'diagonalization failed'
    ! Independent Python tutorial calculation, using the same interaction and complete basis.
    if (abs(energies(1) - (-40.472330809897635d0)) > 1d-8) error stop 'Python/Fortran energy mismatch'
    print '(a,f18.10)', 'PASS: full-basis neon-20 energy (MeV): ', energies(1)
contains
    subroutine fixture(header)
        character(len=*), intent(in) :: header
        integer :: u
        open(newunit=u, file='reader-test.snt', status='replace')
        write(u,'(a)') '1 1 6 8', '1 0 0 1 -1', '2 0 0 1 1', '2 0', &
            '1 1 0.0', '2 2 0.0', header, '1 2 1 2 0 2.0'
        close(u)
    end subroutine fixture
end program hamiltonian_regression
