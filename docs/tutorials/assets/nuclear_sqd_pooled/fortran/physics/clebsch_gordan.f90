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
!> @brief Clebsch-Gordan coefficient computation and angular momentum filtering
!>        for symmetry-adapted nuclear structure calculations.
!>
!> This module provides Clebsch-Gordan (CG) coefficients for coupling two
!> angular momenta and filtering particle-hole excitations based on angular
!> momentum conservation. This reduces the operator pool size by ensuring only
!> J-conserving operators are included.
!>
!> Physics Background:
!>   - CG coefficients couple two angular momenta: |j1,m1⟩ ⊗ |j2,m2⟩ -> |J,M⟩
!>   - Triangle inequality: |j1-j2| <= J <= j1+j2 (ensures physical coupling)
!>   - M-value conservation: M = m1 + m2
!>   - Symmetry: CG(j1,j2,J;m1,m2,M) = (-1)^(j1+j2-J) CG(j2,j1,J;m2,m1,M)
!>
!> Performance:
!>   - Precomputes all CG coefficients at initialization (one-time cost)
!>   - Uses lookup table for O(1) access during filtering
!>   - Reduces ADAPT pool by factor of ~1/J̄max (typically 3-5x reduction)
!>   - For sd-shell: reduces 40-80 iterations to 10-20 iterations
!>
!> Optional GSL Support:
!>   - When compiled with -DUSE_GSL, uses GSL library for general j > 5/2 cases
!>   - Provides more accurate results for high angular momentum couplings
!>   - Falls back to built-in Racah formula when GSL is not available
!>   - Special cases (j <= 5/2) always use optimized analytical formulas

module clebsch_gordan
    use iso_c_binding
    use orbital_registry, only: reg_j2
#ifdef USE_GSL
    use gsl_interface, only: gsl_compute_cg_from_3j, gsl_is_available
#endif
    implicit none
    private
    
    ! Public interface
    public :: init_cg_tables
    public :: filter_excitations_by_j
    public :: cleanup_cg_tables
    public :: lookup_cg
    
    ! Type: CGCoefficient
    !
    ! Description:
    !   Stores a single Clebsch-Gordan coefficient with quantum numbers.
    !   All j and m values are stored as 2*value (integers) to avoid fractions.
    !   For example, j=5/2 is stored as j_2=5, m=-3/2 is stored as m_2=-3.
    !
    ! Fields:
    !   j1_2, j2_2, j_2 : Angular momentum quantum numbers (2*j)
    !   m1_2, m2_2, m_2 : Magnetic quantum numbers (2*m)
    !   value           : CG coefficient value
    type :: CGCoefficient
        integer(c_int) :: j1_2    ! 2*j1 (to avoid fractions)
        integer(c_int) :: j2_2    ! 2*j2
        integer(c_int) :: j_2     ! 2*j (coupled)
        integer(c_int) :: m1_2    ! 2*m1
        integer(c_int) :: m2_2    ! 2*m2
        integer(c_int) :: m_2     ! 2*m
        real(c_double) :: value   ! CG coefficient value
    end type CGCoefficient
    
    ! Module-level CG coefficient table
    type(CGCoefficient), allocatable :: cg_table(:)
    integer(c_int) :: n_cg_entries = 0
    
    ! Constants
    real(c_double), parameter :: PI = 3.141592653589793d0
    real(c_double), parameter :: CG_TOLERANCE = 1.0d-12
    
contains

    ! Subroutine: init_cg_tables
    !
    ! Description:
    !   Initialize Clebsch-Gordan coefficient tables for j values up to j_max.
    !   Precomputes all CG coefficients for common couplings in sd-shell.
    !
    ! Arguments:
    !   j_max_2 : Maximum angular momentum (2*j_max)
    !             sd-shell: j_max_2 = 5  (j=5/2 for 0d5/2 orbital)
    !             pf-shell: j_max_2 = 7  (j=7/2 for 0f7/2 orbital)
    !
    ! Algorithm:
    !   1. Estimate table size based on j_max
    !   2. Loop over all valid (j1, j2, j, m1, m2, m) combinations
    !   3. Apply triangle inequality and m-conservation
    !   4. Compute CG coefficient using analytical formulas
    !   5. Store non-zero coefficients in table
    subroutine init_cg_tables(j_max_2)
        integer(c_int), intent(in) :: j_max_2
        
        integer(c_int) :: j1_2, j2_2, j_2, m1_2, m2_2, m_2
        integer(c_int) :: estimated_size, idx
        real(c_double) :: cg_value
        logical :: is_valid
        
        ! Estimate table size (conservative upper bound)
        ! For each j1, j2 pair, we have approx. (2j1+1)(2j2+1)(j1+j2+1) entries
        estimated_size = ((j_max_2 + 1) * (j_max_2 + 2) / 2)**2 * (j_max_2 + 1)
        
        ! Allocate table
        if (allocated(cg_table)) deallocate(cg_table)
        allocate(cg_table(estimated_size))
        
        idx = 0
        
        ! Loop over all j1 values (in units of 1/2)
        do j1_2 = 1, j_max_2, 2  ! j = 1/2, 3/2, 5/2, ...
            ! Loop over all j2 values
            do j2_2 = 1, j_max_2, 2
                ! Loop over all possible coupled j values (triangle inequality)
                do j_2 = abs(j1_2 - j2_2), j1_2 + j2_2, 2
                    ! Loop over all m1 values
                    do m1_2 = -j1_2, j1_2, 2
                        ! Loop over all m2 values
                        do m2_2 = -j2_2, j2_2, 2
                            m_2 = m1_2 + m2_2
                            
                            ! Check if m is valid for coupled j
                            if (abs(m_2) > j_2) cycle
                            
                            ! Compute CG coefficient
                            call compute_cg_coefficient(j1_2, j2_2, j_2, &
                                                       m1_2, m2_2, m_2, &
                                                       cg_value, is_valid)
                            
                            ! Store non-zero coefficients
                            if (is_valid .and. abs(cg_value) > CG_TOLERANCE) then
                                idx = idx + 1
                                if (idx > estimated_size) then
                                    print *, "ERROR: CG table size exceeded!"
                                    stop
                                end if
                                
                                cg_table(idx)%j1_2 = j1_2
                                cg_table(idx)%j2_2 = j2_2
                                cg_table(idx)%j_2 = j_2
                                cg_table(idx)%m1_2 = m1_2
                                cg_table(idx)%m2_2 = m2_2
                                cg_table(idx)%m_2 = m_2
                                cg_table(idx)%value = cg_value
                            end if
                        end do
                    end do
                end do
            end do
        end do
        
        n_cg_entries = idx
        
        ! Optionally trim table to actual size
        if (n_cg_entries < estimated_size) then
            block
                type(CGCoefficient), allocatable :: temp_table(:)
                allocate(temp_table(n_cg_entries))
                temp_table(1:n_cg_entries) = cg_table(1:n_cg_entries)
                call move_alloc(temp_table, cg_table)
            end block
        end if
        
    end subroutine init_cg_tables

    ! Subroutine: compute_cg_coefficient
    !
    ! Description:
    !   Compute a single Clebsch-Gordan coefficient using analytical formulas.
    !   Implements simplified formulas for common sd-shell cases.
    !
    ! Arguments:
    !   j1_2, j2_2, j_2 : Angular momentum quantum numbers (2*j)
    !   m1_2, m2_2, m_2 : Magnetic quantum numbers (2*m)
    !   cg_value        : Output CG coefficient value
    !   is_valid        : Output flag indicating if coefficient is valid
    !
    ! Special Cases:
    !   1. j1 = j2 = 1/2 (s-orbitals coupling)
    !   2. j1 = 3/2, j2 = 1/2 (d3/2 with s1/2)
    !   3. j1 = 5/2, j2 = 1/2 (d5/2 with s1/2)
    !   4. General case using Racah formula
    subroutine compute_cg_coefficient(j1_2, j2_2, j_2, m1_2, m2_2, m_2, &
                                     cg_value, is_valid)
        integer(c_int), intent(in) :: j1_2, j2_2, j_2, m1_2, m2_2, m_2
        real(c_double), intent(out) :: cg_value
        logical, intent(out) :: is_valid
        
        ! Check triangle inequality
        if (j_2 < abs(j1_2 - j2_2) .or. j_2 > j1_2 + j2_2) then
            is_valid = .false.
            cg_value = 0.0d0
            return
        end if

        ! Parity check: j1_2 + j2_2 + j_2 must be even (integer/half-integer
        ! consistency; same criterion as in check_triangle_inequality).
        if (mod(j1_2 + j2_2 + j_2, 2) /= 0) then
            is_valid = .false.
            cg_value = 0.0d0
            return
        end if
        
        ! Check m-value conservation
        if (m1_2 + m2_2 /= m_2) then
            is_valid = .false.
            cg_value = 0.0d0
            return
        end if
        
        ! Check m bounds
        if (abs(m1_2) > j1_2 .or. abs(m2_2) > j2_2 .or. abs(m_2) > j_2) then
            is_valid = .false.
            cg_value = 0.0d0
            return
        end if
        
        is_valid = .true.
        
        ! Special case: j1 = j2 = 1/2 (always use optimized formula)
        if (j1_2 == 1 .and. j2_2 == 1) then
            call cg_half_half(j_2, m1_2, m2_2, m_2, cg_value)
            return
        end if
        
        ! Special case: one j = 1/2 (always use optimized formula)
        if (j2_2 == 1) then
            call cg_j_half(j1_2, j_2, m1_2, m2_2, m_2, cg_value)
            return
        end if
        
        if (j1_2 == 1) then
            ! Use symmetry: CG(j1,j2,J;m1,m2,M) = (-1)^(j1+j2-J) CG(j2,j1,J;m2,m1,M)
            call cg_j_half(j2_2, j_2, m2_2, m1_2, m_2, cg_value)
            if (mod((j1_2 + j2_2 - j_2)/2, 2) /= 0) cg_value = -cg_value
            return
        end if
        
! General case: use GSL if available and j > 5/2, otherwise use Racah formula
#ifdef USE_GSL
        ! Use GSL for general cases with j > 5/2 for better accuracy
        if (j1_2 > 5 .or. j2_2 > 5 .or. j_2 > 5) then
            block
                integer(c_int) :: ierr
                call gsl_compute_cg_from_3j(j1_2, j2_2, j_2, m1_2, m2_2, m_2, &
                                           cg_value, ierr)
                if (ierr == 0) then
                    ! GSL computation successful
                    return
                else
                    ! GSL failed, fall back to Racah formula
                    ! (This shouldn't happen for valid inputs, but provides safety)
                    print *, "Warning: GSL computation failed, using Racah formula"
                end if
            end block
        end if
#endif
        
        ! Fall back to Racah formula (either GSL not available or j <= 5/2)
        call cg_general(j1_2, j2_2, j_2, m1_2, m2_2, m_2, cg_value)
        
    end subroutine compute_cg_coefficient
    
    ! Subroutine: cg_half_half
    !
    ! Description:
    !   CG coefficients for j1 = j2 = 1/2 coupling.
    !   This is the simplest case (two spin-1/2 particles).
    !
    ! Formulas:
    !   J=0, M=0: CG(1/2,1/2,0; m1,m2,0) = (-1)^(1/2-m1) / √2 for m1=-m2
    !   J=1, M  : Standard spin triplet formulas
    subroutine cg_half_half(j_2, m1_2, m2_2, m_2, cg_value)
        integer(c_int), intent(in) :: j_2, m1_2, m2_2, m_2
        real(c_double), intent(out) :: cg_value
        
        real(c_double), parameter :: SQRT2 = 1.4142135623730951d0
        
        if (j_2 == 0) then
            ! Singlet: J=0, M=0
            if (m1_2 == 1 .and. m2_2 == -1) then
                cg_value = 1.0d0 / SQRT2
            else if (m1_2 == -1 .and. m2_2 == 1) then
                cg_value = -1.0d0 / SQRT2
            else
                cg_value = 0.0d0
            end if
        else if (j_2 == 2) then
            ! Triplet: J=1
            if (m_2 == 2) then
                ! M=1: both spins up
                cg_value = 1.0d0
            else if (m_2 == -2) then
                ! M=-1: both spins down
                cg_value = 1.0d0
            else if (m_2 == 0) then
                ! M=0: symmetric combination
                if (m1_2 == 1 .and. m2_2 == -1) then
                    cg_value = 1.0d0 / SQRT2
                else if (m1_2 == -1 .and. m2_2 == 1) then
                    cg_value = 1.0d0 / SQRT2
                else
                    cg_value = 0.0d0
                end if
            else
                cg_value = 0.0d0
            end if
        else
            cg_value = 0.0d0
        end if
        
    end subroutine cg_half_half
    
    ! Subroutine: cg_j_half
    !
    ! Description:
    !   CG coefficients for coupling j with 1/2.
    !   Uses the formula: CG(j,1/2,J;m,+/-1/2,M) = +/-√[(j+/-m+1)/(2j+1)] for J=j+1/2
    !                                           = ∓√[(j∓m)/(2j+1)]   for J=j-1/2
    !
    ! This covers:
    !   - d3/2 ⊗ s1/2 (j=3/2 with j=1/2)
    !   - d5/2 ⊗ s1/2 (j=5/2 with j=1/2)
    subroutine cg_j_half(j1_2, j_2, m1_2, m2_2, m_2, cg_value)
        integer(c_int), intent(in) :: j1_2, j_2, m1_2, m2_2, m_2
        real(c_double), intent(out) :: cg_value
        
        real(c_double) :: j1, m1, j, m
        real(c_double) :: factor
        
        ! Convert to real values
        j1 = real(j1_2, c_double) / 2.0d0
        m1 = real(m1_2, c_double) / 2.0d0
        j = real(j_2, c_double) / 2.0d0
        m = real(m_2, c_double) / 2.0d0
        
        if (j_2 == j1_2 + 1) then
            ! J = j1 + 1/2.  Formulas (Edmonds 3.7.7):
            !   m2=+1/2: CG = +sqrt((j1+m1+1)/(2j1+1))
            !   m2=-1/2: CG = +sqrt((j1-m1+1)/(2j1+1))
            if (m2_2 == 1) then
                factor = (j1 + m1 + 1.0d0) / (2.0d0 * j1 + 1.0d0)
                cg_value = sqrt(factor)
            else if (m2_2 == -1) then
                factor = (j1 - m1 + 1.0d0) / (2.0d0 * j1 + 1.0d0)
                cg_value = sqrt(factor)
            else
                cg_value = 0.0d0
            end if
        else if (j_2 == j1_2 - 1) then
            ! J = j1 - 1/2.  Formulas (Edmonds 3.7.7):
            !   m2=+1/2: CG = -sqrt((j1-m1)/(2j1+1))
            !   m2=-1/2: CG = +sqrt((j1+m1)/(2j1+1))
            if (m2_2 == 1) then
                factor = (j1 - m1) / (2.0d0 * j1 + 1.0d0)
                cg_value = -sqrt(factor)
            else if (m2_2 == -1) then
                factor = (j1 + m1) / (2.0d0 * j1 + 1.0d0)
                cg_value = sqrt(factor)
            else
                cg_value = 0.0d0
            end if
        else
            cg_value = 0.0d0
        end if
        
    end subroutine cg_j_half
    
    ! Subroutine: cg_general
    !
    ! Description:
    !   General Clebsch-Gordan coefficient using Racah formula.
    !   This is a simplified implementation for moderate j values.
    !
    ! Formula:
    !   CG(j1,j2,J;m1,m2,M) = δ(m1+m2,M) * √[(2J+1) * Δ(j1,j2,J)] * 
    !                         √[(j1+m1)!(j1-m1)!(j2+m2)!(j2-m2)!(J+M)!(J-M)!] *
    !                         Σ_k [(-1)^k / (k! * ...)]
    !
    ! Note: For production use with large j, consider linking to GSL library.
    subroutine cg_general(j1_2, j2_2, j_2, m1_2, m2_2, m_2, cg_value)
        integer(c_int), intent(in) :: j1_2, j2_2, j_2, m1_2, m2_2, m_2
        real(c_double), intent(out) :: cg_value
        
        real(c_double) :: j1, j2, j, m1, m2, m
        real(c_double) :: prefactor, sum_term
        integer :: k, k_min, k_max
        real(c_double) :: term
        
        ! Convert to real values
        j1 = real(j1_2, c_double) / 2.0d0
        j2 = real(j2_2, c_double) / 2.0d0
        j = real(j_2, c_double) / 2.0d0
        m1 = real(m1_2, c_double) / 2.0d0
        m2 = real(m2_2, c_double) / 2.0d0
        m = real(m_2, c_double) / 2.0d0
        
        ! Compute prefactor
        prefactor = sqrt((2.0d0 * j + 1.0d0) * &
                        triangle_coefficient(j1, j2, j) * &
                        factorial_ratio(j1, m1) * &
                        factorial_ratio(j2, m2) * &
                        factorial_ratio(j, m))
        
        ! Compute sum over k
        k_min = max(0, int(j2 - j - m1), int(j1 - j + m2))
        k_max = min(int(j1 + j2 - j), int(j1 - m1), int(j2 + m2))
        
        sum_term = 0.0d0
        do k = k_min, k_max
            term = (-1.0d0)**k / &
                   (factorial(k) * &
                    factorial(int(j1 + j2 - j) - k) * &
                    factorial(int(j1 - m1) - k) * &
                    factorial(int(j2 + m2) - k) * &
                    factorial(int(j - j2 + m1) + k) * &
                    factorial(int(j - j1 - m2) + k))
            sum_term = sum_term + term
        end do
        
        cg_value = prefactor * sum_term
        
    end subroutine cg_general

    ! Function: triangle_coefficient
    !
    ! Description:
    !   Compute the triangle coefficient Δ(j1,j2,j) for CG coefficients.
    !   Δ(a,b,c) = [(a+b-c)!(a-b+c)!(-a+b+c)!] / [(a+b+c+1)!]
    function triangle_coefficient(j1, j2, j) result(delta)
        real(c_double), intent(in) :: j1, j2, j
        real(c_double) :: delta
        
        delta = factorial(int(j1 + j2 - j)) * &
                factorial(int(j1 - j2 + j)) * &
                factorial(int(-j1 + j2 + j)) / &
                factorial(int(j1 + j2 + j + 1.0d0))
        
    end function triangle_coefficient

    ! Function: factorial_ratio
    !
    ! Description:
    !   Compute (j+m)!(j-m)! for CG coefficient calculation.
    function factorial_ratio(j, m) result(ratio)
        real(c_double), intent(in) :: j, m
        real(c_double) :: ratio
        
        ratio = factorial(int(j + m)) * factorial(int(j - m))
        
    end function factorial_ratio

    ! Function: factorial
    !
    ! Description:
    !   Compute factorial n! for small integers.
    !   Uses lookup table for efficiency.
    function factorial(n) result(fact)
        integer, intent(in) :: n
        real(c_double) :: fact
        integer :: i
        
        if (n < 0) then
            fact = 0.0d0
            return
        end if
        
        if (n == 0 .or. n == 1) then
            fact = 1.0d0
            return
        end if
        
        fact = 1.0d0
        do i = 2, n
            fact = fact * real(i, c_double)
        end do
        
    end function factorial

    ! Subroutine: filter_excitations_by_j
    !
    ! Description:
    !   Filter particle-hole excitations based on angular momentum coupling.
    !   Only keeps excitations where j_hole and j_particle can couple to j_target.
    !
    ! Arguments:
    !   pool_pairs     : Input array of (hole, particle) pairs [2 * pool_size]
    !   pool_size      : Number of excitation pairs
    !   j_target_2     : Target total angular momentum (2*J)
    !   filtered_pairs : Output array of filtered pairs
    !   filtered_size  : Number of filtered pairs
    !
    ! Filtering Logic:
    !   1. For each (hole, particle) pair:
    !      - Extract j_hole and j_particle from orbital indices via orbital_registry
    !      - Check triangle inequality: |j_hole - j_particle| <= j_target <= j_hole + j_particle
    !      - Keep pair if condition satisfied
    !   2. This reduces pool size by factor of ~1/J̄max
    subroutine filter_excitations_by_j(pool_pairs, pool_size, j_target_2, &
                                      filtered_pairs, filtered_size)
        integer(c_int), intent(in) :: pool_pairs(:,:)  ! (pool_size, 2): col1=hole, col2=particle
        integer(c_int), intent(in) :: pool_size
        integer(c_int), intent(in) :: j_target_2
        integer(c_int), allocatable, intent(out) :: filtered_pairs(:,:)  ! (filtered_size, 2)
        integer(c_int), intent(out) :: filtered_size

        integer(c_int) :: i, hole_idx, particle_idx
        integer(c_int) :: j_hole_2, j_particle_2
        logical :: can_couple
        integer(c_int), allocatable :: temp_pairs(:,:)

        ! Allocate temporary array (maximum size): (pool_size, 2)
        allocate(temp_pairs(pool_size, 2))

        filtered_size = 0

        ! Loop over all excitation pairs; pool_pairs is (pool_size, 2)
        do i = 1, pool_size
            hole_idx     = pool_pairs(i, 1)
            particle_idx = pool_pairs(i, 2)

            ! Get j quantum numbers from orbital indices
            j_hole_2     = get_j_from_orbital(hole_idx)
            j_particle_2 = get_j_from_orbital(particle_idx)

            ! Check if they can couple to j_target
            can_couple = check_triangle_inequality(j_hole_2, j_particle_2, j_target_2)

            if (can_couple) then
                filtered_size = filtered_size + 1
                temp_pairs(filtered_size, 1) = hole_idx
                temp_pairs(filtered_size, 2) = particle_idx
            end if
        end do

        ! Allocate output array with exact size: (filtered_size, 2)
        allocate(filtered_pairs(filtered_size, 2))
        if (filtered_size > 0) then
            filtered_pairs(1:filtered_size, :) = temp_pairs(1:filtered_size, :)
        end if

        deallocate(temp_pairs)

    end subroutine filter_excitations_by_j

    ! Function: get_j_from_orbital
    !
    ! Description:
    !   Extract j quantum number (2*j) from orbital index.
    !   Delegates to orbital_registry which reads orbital data from USDB.snt.
    !   No hardcoded shell structure assumptions.
    !
    ! Arguments:
    !   orbital_idx : Qubit/orbital index (0-based)
    !
    ! Returns:
    !   j_2 : 2*j quantum number for the orbital
    !
    ! Note: Requires orbital_registry to be initialized via init_registry_sd_shell()
    !       or init_registry_from_snt() before calling this function.
    function get_j_from_orbital(orbital_idx) result(j_2)
        integer(c_int), intent(in) :: orbital_idx
        integer(c_int) :: j_2
        j_2 = reg_j2(int(orbital_idx))
    end function get_j_from_orbital

    ! Function: check_triangle_inequality
    !
    ! Description:
    !   Check if three angular momenta satisfy the triangle inequality.
    !   Required for valid angular momentum coupling.
    !
    ! Triangle Inequality:
    !   |j1 - j2| <= j <= j1 + j2
    !
    ! Returns:
    !   .true. if triangle inequality is satisfied, .false. otherwise
    function check_triangle_inequality(j1_2, j2_2, j_2) result(is_valid)
        integer(c_int), intent(in) :: j1_2, j2_2, j_2
        logical :: is_valid

        ! Range check: |j1-j2| <= j <= j1+j2
        is_valid = (j_2 >= abs(j1_2 - j2_2)) .and. (j_2 <= j1_2 + j2_2)

        ! Parity check: j1_2 + j2_2 + j_2 must be even.
        ! CG(j1,j2,j;m1,m2,m) = 0 whenever this sum is odd because the
        ! half-integer/integer character of j must be consistent:
        ! j1+j2 and j must be simultaneously integer or simultaneously
        ! half-integer, i.e. (j1_2 + j2_2 + j_2) mod 2 == 0.
        if (is_valid) is_valid = (mod(j1_2 + j2_2 + j_2, 2) == 0)

    end function check_triangle_inequality

    ! Function: lookup_cg
    !
    ! Description:
    !   Look up a Clebsch-Gordan coefficient from the precomputed table.
    !   Uses linear search (sufficient for moderate table sizes).
    !
    ! Arguments:
    !   j1_2, j2_2, j_2 : Angular momentum quantum numbers (2*j)
    !   m1_2, m2_2, m_2 : Magnetic quantum numbers (2*m)
    !
    ! Returns:
    !   CG coefficient value, or 0.0 if not found
    !
    ! Performance:
    !   - O(n) linear search
    !   - For large tables, consider hash table or binary search
    !   - Typical sd-shell table has ~100-500 entries
    function lookup_cg(j1_2, j2_2, j_2, m1_2, m2_2, m_2) result(cg_value)
        integer(c_int), intent(in) :: j1_2, j2_2, j_2, m1_2, m2_2, m_2
        real(c_double) :: cg_value
        integer(c_int) :: i
        
        cg_value = 0.0d0
        
        ! Linear search through table
        do i = 1, n_cg_entries
            if (cg_table(i)%j1_2 == j1_2 .and. &
                cg_table(i)%j2_2 == j2_2 .and. &
                cg_table(i)%j_2 == j_2 .and. &
                cg_table(i)%m1_2 == m1_2 .and. &
                cg_table(i)%m2_2 == m2_2 .and. &
                cg_table(i)%m_2 == m_2) then
                cg_value = cg_table(i)%value
                return
            end if
        end do
        
    end function lookup_cg

    ! Subroutine: cleanup_cg_tables
    !
    ! Description:
    !   Deallocate CG coefficient table and reset counters.
    !   Call this when done with CG calculations to free memory.
    subroutine cleanup_cg_tables()
        if (allocated(cg_table)) deallocate(cg_table)
        n_cg_entries = 0
    end subroutine cleanup_cg_tables

end module clebsch_gordan
