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

!> @brief Fortran interface to GSL (GNU Scientific Library) special functions
!>        for computing Wigner 3-j symbols.
!>
!> This module provides a Fortran interface to GSL's gsl_sf_coupling_3j function,
!> which computes Wigner 3-j symbols. These are related to Clebsch-Gordan (CG)
!> coefficients through the formula:
!>
!>   CG(j1,j2,j;m1,m2,m) = (-1)^(j1-j2-m) * sqrt(2j+1) * 3j(j1,j2,j; m1,m2,-m)
!>
!> The GSL function uses real (double precision) values for all angular momentum
!> quantum numbers, not the 2×value integer convention used elsewhere in this
!> codebase. Conversion between conventions is handled by wrapper functions.
!>
!> Requirements:
!>   - GSL library (libgsl) must be installed and linked
!>   - Compile with -DUSE_GSL flag to enable GSL support
!>   - Link with -lgsl -lgslcblas flags
!>
!> References:
!>   - GSL documentation: https://www.gnu.org/software/gsl/doc/html/specfunc.html
!>   - Wigner 3-j symbols: https://en.wikipedia.org/wiki/3-j_symbol
!>   - Clebsch-Gordan coefficients: https://en.wikipedia.org/wiki/Clebsch–Gordan_coefficients

module gsl_interface
    use iso_c_binding
    implicit none
    private
    
    ! Public interface
    public :: gsl_compute_3j
    public :: gsl_compute_cg_from_3j
    public :: gsl_is_available
    
    ! Interface to GSL C function
    !
    ! C signature:
    !   double gsl_sf_coupling_3j(int two_ja, int two_jb, int two_jc,
    !                             int two_ma, int two_mb, int two_mc);
    !
    ! Note: GSL uses integer arguments that represent 2×j and 2×m values
    !       (same convention as our internal representation), but the function
    !       internally converts them to real values for computation.
    interface
        function gsl_sf_coupling_3j_c(two_ja, two_jb, two_jc, &
                                      two_ma, two_mb, two_mc) &
                                      bind(C, name="gsl_sf_coupling_3j")
            use iso_c_binding
            integer(c_int), value :: two_ja, two_jb, two_jc
            integer(c_int), value :: two_ma, two_mb, two_mc
            real(c_double) :: gsl_sf_coupling_3j_c
        end function gsl_sf_coupling_3j_c
    end interface
    
contains

    ! Function: gsl_is_available
    !
    ! Description:
    !   Check if GSL support is available at compile time.
    !   Returns .true. if compiled with USE_GSL, .false. otherwise.
    !
    ! Returns:
    !   .true. if GSL is available, .false. otherwise
    function gsl_is_available() result(available)
        logical :: available
#ifdef USE_GSL
        available = .true.
#else
        available = .false.
#endif
    end function gsl_is_available

    ! Function: gsl_compute_3j
    !
    ! Description:
    !   Compute Wigner 3-j symbol using GSL library.
    !   
    !   Selection rules:
    !     - Triangle inequality: |j1-j2|<= j3<= j1+j2
    !     - m1 + m2 + m3 = 0
    !     - |mi|<= ji for all i
    !
    ! Arguments:
    !   j1_2, j2_2, j3_2 : Angular momentum quantum numbers (2×j)
    !   m1_2, m2_2, m3_2 : Magnetic quantum numbers (2×m)
    !   value            : Output 3-j symbol value
    !   ierr             : Error code (0=success, non-zero=error)
    !
    ! Error codes:
    !   0  : Success
    !   1  : GSL not available (not compiled with USE_GSL)
    !   2  : Invalid quantum numbers (selection rules violated)
    subroutine gsl_compute_3j(j1_2, j2_2, j3_2, m1_2, m2_2, m3_2, value, ierr)
        integer(c_int), intent(in) :: j1_2, j2_2, j3_2
        integer(c_int), intent(in) :: m1_2, m2_2, m3_2
        real(c_double), intent(out) :: value
        integer(c_int), intent(out) :: ierr
        
#ifdef USE_GSL
        ! Initialize
        ierr = 0
        value = 0.0d0
        
        ! Basic validation (GSL will also check, but we can fail fast)
        ! Check triangle inequality
        if (j3_2 < abs(j1_2 - j2_2) .or. j3_2 > j1_2 + j2_2) then
            ierr = 2
            return
        end if
        
        ! Check m-value sum (must equal zero for 3-j symbols)
        if (m1_2 + m2_2 + m3_2 /= 0) then
            ierr = 2
            return
        end if
        
        ! Check m bounds
        if (abs(m1_2) > j1_2 .or. abs(m2_2) > j2_2 .or. abs(m3_2) > j3_2) then
            ierr = 2
            return
        end if
        
        ! Check parity: j1_2 + j2_2 + j3_2 must be even
        if (mod(j1_2 + j2_2 + j3_2, 2) /= 0) then
            ierr = 2
            return
        end if
        
        ! Call GSL function
        ! GSL expects 2×j and 2×m values as integers
        value = gsl_sf_coupling_3j_c(j1_2, j2_2, j3_2, m1_2, m2_2, m3_2)
        
        ! GSL returns 0.0 for invalid inputs or actual zero values
        ! We've already validated, so any zero is a legitimate result
        ierr = 0
#else
        ! GSL not available
        value = 0.0d0
        ierr = 1
#endif
        
    end subroutine gsl_compute_3j

    ! Function: gsl_compute_cg_from_3j
    !
    ! Description:
    !   Compute Clebsch-Gordan coefficient from Wigner 3-j symbol using GSL.
    !   
    !   Conversion formula:
    !     CG(j1,j2,j;m1,m2,m) = (-1)^(j1-j2-m) * sqrt(2j+1) * 3j(j1,j2,j; m1,m2,-m)
    !
    !   This is the standard relationship between CG coefficients and 3-j symbols.
    !   The phase factor (-1)^(j1-j2-m) accounts for the different conventions.
    !
    ! Arguments:
    !   j1_2, j2_2, j_2  : Angular momentum quantum numbers (2×j)
    !   m1_2, m2_2, m_2  : Magnetic quantum numbers (2×m)
    !   cg_value         : Output CG coefficient value
    !   ierr             : Error code (0=success, non-zero=error)
    !
    ! Error codes:
    !   0  : Success
    !   1  : GSL not available
    !   2  : Invalid quantum numbers
    !
    ! Note: The input quantum numbers follow CG convention (m1+m2=m),
    !       but internally we convert to 3-j convention (m1+m2+m3=0, m3=-m).
    subroutine gsl_compute_cg_from_3j(j1_2, j2_2, j_2, m1_2, m2_2, m_2, &
                                      cg_value, ierr)
        integer(c_int), intent(in) :: j1_2, j2_2, j_2
        integer(c_int), intent(in) :: m1_2, m2_2, m_2
        real(c_double), intent(out) :: cg_value
        integer(c_int), intent(out) :: ierr
        
        real(c_double) :: threej_value
        real(c_double) :: phase_factor
        real(c_double) :: normalization
        integer(c_int) :: m3_2
        integer :: phase_exponent
        
        ! Initialize
        cg_value = 0.0d0
        ierr = 0
        
        ! Check m-value conservation for CG coefficients
        if (m1_2 + m2_2 /= m_2) then
            ierr = 2
            return
        end if
        
        ! Convert to 3-j convention: m3 = -m (so m1 + m2 + m3 = 0)
        m3_2 = -m_2
        
        ! Compute 3-j symbol
        call gsl_compute_3j(j1_2, j2_2, j_2, m1_2, m2_2, m3_2, &
                           threej_value, ierr)
        
        if (ierr /= 0) then
            cg_value = 0.0d0
            return
        end if
        
        ! Compute phase factor: (-1)^(j1-j2-m)
        ! Since j and m are stored as 2×value, we need (j1_2; j2_2; m_2)/2
        phase_exponent = (j1_2 - j2_2 - m_2) / 2
        
        ! Handle the phase
        if (mod(phase_exponent, 2) == 0) then
            phase_factor = 1.0d0
        else
            phase_factor = -1.0d0
        end if
        
        ! Compute normalization: sqrt(2j+1)
        ! j is stored as 2×j, so 2j+1 = j_2 + 1
        normalization = sqrt(real(j_2 + 1, c_double))
        
        ! Apply conversion formula
        cg_value = phase_factor * normalization * threej_value
        
    end subroutine gsl_compute_cg_from_3j

end module gsl_interface
