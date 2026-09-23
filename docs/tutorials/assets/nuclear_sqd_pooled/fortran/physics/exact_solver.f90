! Module: exact_solver
!
! Purpose: Shell-model Hamiltonian construction and exact diagonalization.
!
! Primary path (nuclear subspace diagonalization):
!   build_subspace_hamiltonian  -  builds H restricted to the QPU-sampled bitstring
!     subspace (Mj=0, even-parity filtered Slater determinants).
!   diagonalize_exact_complex   -  LAPACK zheev; lowest eigenvalue = variational E₀.
!
module exact_solver
    use iso_c_binding
    use usdb_reader
    use clebsch_gordan
    implicit none
    private

    ! Public interface
    public :: build_subspace_hamiltonian
    public :: rank_pairs_by_pt2
    public :: seed_angles
    public :: filter_doubles_by_j
    public :: rank_doubles_by_pt2
    public :: seed_double_angles

    public :: diagonalize_exact_complex
    public :: verify_angle_formulas

    ! Single-particle state descriptor for multi-orbital sd-shell
    type :: sp_state
        integer :: orb_idx  ! 1-based orbital index (matches .snt)
        integer :: j2       ! 2*j
        integer :: mj2      ! 2*mj
        integer :: tz       ! -1 proton, +1 neutron
        integer :: l        ! orbital l
        real(8) :: spe      ! single-particle energy (MeV)
    end type sp_state

contains

    ! Build the ordered sp_state array from model_space_data.
    ! Ordering: protons (tz=-1) first, then neutrons (tz=+1); within each isospin
    ! block, orbitals in .snt order, mj descending.  All routines in this module
    ! that call v_ms_elem depend on this fixed ordering.
    subroutine build_sp_array(ms, sp)
        type(model_space_data), intent(in)               :: ms
        type(sp_state),         intent(out), allocatable :: sp(:)
        integer :: n_sp, i, k, tz, m2
        n_sp = 0
        do i = 1, ms%n_orbitals
            n_sp = n_sp + ms%orbitals(i)%j2 + 1
        end do
        allocate(sp(n_sp))
        k = 0
        do tz = -1, 1, 2
            do i = 1, ms%n_orbitals
                if (ms%orbitals(i)%tz /= tz) cycle
                do m2 = ms%orbitals(i)%j2, -ms%orbitals(i)%j2, -2
                    k = k + 1
                    sp(k)%orb_idx = ms%orbitals(i)%idx
                    sp(k)%j2      = ms%orbitals(i)%j2
                    sp(k)%mj2     = m2
                    sp(k)%tz      = ms%orbitals(i)%tz
                    sp(k)%l       = ms%orbitals(i)%l
                    sp(k)%spe     = ms%spes(ms%orbitals(i)%idx)
                end do
            end do
        end do
    end subroutine build_sp_array

    ! Return +1.0 or -1.0 for (-1)^n without integer exponentiation.
    pure real(8) function phase_sign(n)
        integer, intent(in) :: n
        phase_sign = merge(1.0d0, -1.0d0, mod(n, 2) == 0)
    end function phase_sign

    ! Subroutine: diagonalize_exact_complex
    !
    ! Description:
    !   Diagonalize a complex Hermitian Hamiltonian using LAPACK's zheev.
    !   Eigenvalues are real; eigenvectors are complex.
    !
    !   This is the correct diagonalizer for multi-shell sd-shell calculations
    !   where H is Hermitian but not real-symmetric, and for any system where
    !   time-reversal is explicitly broken (external magnetic field, recoil
    !   corrections).
    !
    ! Arguments:
    !   H_matrix     : Input complex Hermitian matrix (dim * dim); destroyed on exit
    !   dim          : Matrix dimension
    !   eigenvalues  : Output real eigenvalues (ascending)
    !   eigenvectors : Output complex eigenvectors (column i = eigenvector i)
    !   status       : Error status (0 = success)
    subroutine diagonalize_exact_complex(H_matrix, dim, eigenvalues, eigenvectors, status)
        complex(8), intent(inout) :: H_matrix(:,:)
        integer,    intent(in)    :: dim
        real(8),    allocatable, intent(out) :: eigenvalues(:)
        complex(8), allocatable, intent(out) :: eigenvectors(:,:)
        integer,    intent(out) :: status

        ! LAPACK zheev workspace
        character :: jobz, uplo
        integer   :: lda, lwork, lrwork, info
        complex(8), allocatable :: work(:)
        real(8),    allocatable :: rwork(:)

        status = 0
        jobz  = 'V'   ! eigenvalues and eigenvectors  -  needed for overlap verification
        uplo  = 'U'
        lda   = dim
        lrwork = max(1, 3*dim - 2)

        allocate(eigenvalues(dim))
        allocate(eigenvectors(dim, dim))
        allocate(rwork(lrwork))

        ! Query optimal complex workspace
        lwork = -1
        allocate(work(1))
        call zheev(jobz, uplo, dim, H_matrix, lda, eigenvalues, work, lwork, rwork, info)
        lwork = int(real(work(1)))
        deallocate(work)
        allocate(work(lwork))

        ! Diagonalize
        call zheev(jobz, uplo, dim, H_matrix, lda, eigenvalues, work, lwork, rwork, info)

        if (info /= 0) then
            print *, "ERROR: LAPACK zheev failed with info =", info
            status = -1
            deallocate(work, rwork)
            return
        end if

        ! zheev (JOBZ='V') writes eigenvectors into H_matrix; copy out
        eigenvectors = H_matrix
        deallocate(work, rwork)

    end subroutine diagonalize_exact_complex



    ! Subroutine: compute_sd_twobody
    !
    ! Compute two-body contribution to <alpha|V|beta> using Slater-Condon rules.
    !
    ! The m-scheme two-body antisymmetric matrix element is:
    !   V_ms(p,q;r,s) = sum_J (2J+1) * CG(jp,jq;J|mp,mq) * CG(jr,js;J|mr,ms) * <pq;J|V|rs;J>
    !
    ! Slater-Condon rules (for a N-body Slater determinant basis):
    !   |alpha> and |beta> differ by 0 sp states (diagonal, alpha==beta):
    !     <alpha|V2|alpha> = sum_{i<j in alpha} V_ms(i,j;i,j)
    !   Differ by 2 sp states (alpha has {p,shared}, beta has {q,shared}; p in alpha not beta,
    !     q in beta not alpha):
    !     <alpha|V2|beta> = phase * sum_{j in both} V_ms(p,j;q,j)
    !   Differ by 4 sp states ({p1,p2} in alpha not beta, {q1,q2} in beta not alpha):
    !     <alpha|V2|beta> = phase * V_ms(p1,p2;q1,q2)
    !   Differ by > 4: zero.
    !
    ! Phase from bringing annihilation/creation operators to normal order: (-1)^(number of
    ! occupied states between the creation/annihilation positions in the ordered list).
    subroutine compute_sd_twobody(sp, n_sp, occ_a, occ_b, tbmes, n_tbme, h_elem)
        type(sp_state), intent(in)  :: sp(:)
        integer,        intent(in)  :: n_sp, n_tbme
        integer,        intent(in)  :: occ_a(:), occ_b(:)
        type(tbme_element), intent(in) :: tbmes(:)
        real(8),        intent(out) :: h_elem

        integer :: n_diff, diff_a(4), diff_b(4), cnt_a, cnt_b
        integer :: i, j, p, q, r, s_idx, t
        integer :: J_2, J2_min, J2_max
        real(8) :: cg_bra, cg_ket, tbme_val, v_ms
        integer :: phase, k

        h_elem = 0.0d0

        ! Find differences: states in alpha not in beta, and vice versa
        cnt_a = 0; cnt_b = 0
        do i = 1, n_sp
            if (occ_a(i) == 1 .and. occ_b(i) == 0) then
                cnt_a = cnt_a + 1
                if (cnt_a <= 4) diff_a(cnt_a) = i
            else if (occ_a(i) == 0 .and. occ_b(i) == 1) then
                cnt_b = cnt_b + 1
                if (cnt_b <= 4) diff_b(cnt_b) = i
            end if
        end do
        n_diff = cnt_a   ! = cnt_b (particle-number conservation enforced at basis level)

        if (n_diff > 2) return   ! zero by Slater-Condon

        select case (n_diff)

        case (0)
            ! Diagonal: <alpha|V2|alpha> = sum_{i<j occ} V_ms(i,j;i,j)
            do i = 1, n_sp
                if (occ_a(i) == 0) cycle
                do j = i + 1, n_sp
                    if (occ_a(j) == 0) cycle
                    call v_ms_elem(sp, tbmes, n_tbme, i, j, i, j, v_ms)
                    h_elem = h_elem + v_ms
                end do
            end do

        case (1)
            ! One excitation: p -> q
            p = diff_a(1)   ! in alpha, not beta
            q = diff_b(1)   ! in beta, not alpha

            ! Phase: (-1)^(number of occupied states between p and q in alpha)
            phase = 1
            do k = min(p,q)+1, max(p,q)-1
                if (occ_a(k) == 1) phase = -phase
            end do

            ! <alpha|V2|beta> = phase * sum_{j in both} <pj||qj>
            do j = 1, n_sp
                if (j == p .or. j == q) cycle
                if (occ_a(j) == 0) cycle   ! j must be in both alpha and beta
                call v_ms_elem(sp, tbmes, n_tbme, p, j, q, j, v_ms)
                h_elem = h_elem + real(phase, 8) * v_ms
            end do

        case (2)
            ! Two excitations: (p1,p2) -> (q1,q2)
            p = diff_a(1); r = diff_a(2)   ! in alpha, not beta (p < r by construction)
            q = diff_b(1); s_idx = diff_b(2)  ! in beta, not alpha (q < s by construction)

            ! Phase: product of occupied states between each creation/annihilation position
            phase = 1
            do k = p+1, r-1
                if (occ_a(k) == 1) phase = -phase
            end do
            do k = q+1, s_idx-1
                if (occ_b(k) == 1) phase = -phase
            end do

            call v_ms_elem(sp, tbmes, n_tbme, p, r, q, s_idx, v_ms)
            h_elem = real(phase, 8) * v_ms

        end select

    end subroutine compute_sd_twobody


    ! v_ms_elem: antisymmetric m-scheme two-body matrix element <pq||rs>.
    !
    ! Standard Condon-Shortley formula:
    !   <pq||rs> = sqrt(1+delta_{orb_p,orb_q}) * sqrt(1+delta_{orb_r,orb_s})
    !              * sum_J CG(jp,jq,J; mp,mq) * CG(jr,js,J; mr,ms) * TBME(J)
    !
    ! where TBME(J) = <orb_p orb_q; J | V | orb_r orb_s; J>  (normalized antisym states).
    !
    ! The sqrt(1+delta) factors (c12, c34) arise from the normalization of J-scheme states:
    ! |ab;J> includes (1+delta_{ab})^{-1/2} for same-orbital pairs.
    !
    ! Arguments may be in any order; the CG sum handles m-selection automatically.
    ! Hermitian symmetry is guaranteed by the formula (CG*CG*TBME is symmetric under (p,q)↔(r,s)).
    subroutine v_ms_elem(sp, tbmes, n_tbme, p, q, r, s_idx, result)
        type(sp_state),     intent(in)  :: sp(:)
        type(tbme_element), intent(in)  :: tbmes(:)
        integer,            intent(in)  :: n_tbme, p, q, r, s_idx
        real(8),            intent(out) :: result

        integer :: J_2, J2_min, J2_max, t
        real(8) :: cg_bra, cg_ket, tbme_val, v, c12, c34
        integer :: M_bra, M_ket

        result = 0.0d0
        M_bra = sp(p)%mj2 + sp(q)%mj2
        M_ket = sp(r)%mj2 + sp(s_idx)%mj2
        if (M_bra /= M_ket) return
        if (sp(p)%tz + sp(q)%tz /= sp(r)%tz + sp(s_idx)%tz) return

        J2_min = max(abs(sp(p)%j2 - sp(q)%j2), abs(sp(r)%j2 - sp(s_idx)%j2))
        J2_max = min(sp(p)%j2 + sp(q)%j2,      sp(r)%j2 + sp(s_idx)%j2)

        ! Normalization factors from USDB J-scheme state convention (same isospin only).
        if (sp(p)%tz == sp(q)%tz) then
            c12 = merge(sqrt(2.0d0), 1.0d0, sp(p)%orb_idx == sp(q)%orb_idx)
        else
            c12 = 1.0d0
        end if
        if (sp(r)%tz == sp(s_idx)%tz) then
            c34 = merge(sqrt(2.0d0), 1.0d0, sp(r)%orb_idx == sp(s_idx)%orb_idx)
        else
            c34 = 1.0d0
        end if

        v = 0.0d0
        do J_2 = J2_min, J2_max, 2
            cg_bra = lookup_cg(sp(p)%j2, sp(q)%j2, J_2, sp(p)%mj2, sp(q)%mj2, M_bra)
            if (abs(cg_bra) < 1.0d-12) cycle
            cg_ket = lookup_cg(sp(r)%j2, sp(s_idx)%j2, J_2, sp(r)%mj2, sp(s_idx)%mj2, M_ket)
            if (abs(cg_ket) < 1.0d-12) cycle

            tbme_val = 0.0d0
            do t = 1, n_tbme
                if (tbmes(t)%J /= J_2 / 2) cycle
                ! USDB stores pn TBMEs proton-orbital first; try all 4 bra/ket orderings.
                ! J-scheme antisymmetry phase for swapping a pair: (-1)^{(j_a+j_b)/2 - J}.
                if ((tbmes(t)%a == sp(p)%orb_idx .and. tbmes(t)%b == sp(q)%orb_idx .and. &
                     tbmes(t)%c == sp(r)%orb_idx .and. tbmes(t)%d == sp(s_idx)%orb_idx) .or. &
                    (tbmes(t)%a == sp(r)%orb_idx .and. tbmes(t)%b == sp(s_idx)%orb_idx .and. &
                     tbmes(t)%c == sp(p)%orb_idx .and. tbmes(t)%d == sp(q)%orb_idx)) then
                    tbme_val = tbmes(t)%matrix_elem
                    exit
                end if
                if ((tbmes(t)%a == sp(q)%orb_idx .and. tbmes(t)%b == sp(p)%orb_idx .and. &
                     tbmes(t)%c == sp(r)%orb_idx .and. tbmes(t)%d == sp(s_idx)%orb_idx) .or. &
                    (tbmes(t)%a == sp(r)%orb_idx .and. tbmes(t)%b == sp(s_idx)%orb_idx .and. &
                     tbmes(t)%c == sp(q)%orb_idx .and. tbmes(t)%d == sp(p)%orb_idx)) then
                    tbme_val = tbmes(t)%matrix_elem * &
                        phase_sign((sp(p)%j2 + sp(q)%j2)/2 - J_2/2)
                    exit
                end if
                if ((tbmes(t)%a == sp(p)%orb_idx .and. tbmes(t)%b == sp(q)%orb_idx .and. &
                     tbmes(t)%c == sp(s_idx)%orb_idx .and. tbmes(t)%d == sp(r)%orb_idx) .or. &
                    (tbmes(t)%a == sp(s_idx)%orb_idx .and. tbmes(t)%b == sp(r)%orb_idx .and. &
                     tbmes(t)%c == sp(p)%orb_idx .and. tbmes(t)%d == sp(q)%orb_idx)) then
                    tbme_val = tbmes(t)%matrix_elem * &
                        phase_sign((sp(r)%j2 + sp(s_idx)%j2)/2 - J_2/2)
                    exit
                end if
                if ((tbmes(t)%a == sp(q)%orb_idx .and. tbmes(t)%b == sp(p)%orb_idx .and. &
                     tbmes(t)%c == sp(s_idx)%orb_idx .and. tbmes(t)%d == sp(r)%orb_idx) .or. &
                    (tbmes(t)%a == sp(s_idx)%orb_idx .and. tbmes(t)%b == sp(r)%orb_idx .and. &
                     tbmes(t)%c == sp(q)%orb_idx .and. tbmes(t)%d == sp(p)%orb_idx)) then
                    tbme_val = tbmes(t)%matrix_elem * &
                        phase_sign((sp(p)%j2 + sp(q)%j2)/2 - J_2/2) * &
                        phase_sign((sp(r)%j2 + sp(s_idx)%j2)/2 - J_2/2)
                    exit
                end if
            end do
            if (abs(tbme_val) < 1.0d-15) cycle

            v = v + cg_bra * cg_ket * tbme_val
        end do

        result = c12 * c34 * v

    end subroutine v_ms_elem

    ! Subroutine: build_subspace_hamiltonian
    !
    ! Build a Hamiltonian restricted to the subspace spanned by the symmetry-kept
    ! bitstrings from the quantum sampler.  This is the nuclear subspace
    ! diagonalization Hamiltonian: only Slater determinants that actually
    ! appeared in the IBM Runtime output
    ! (after Mj=0 + even-parity filtering) are included in the basis.
    !
    ! Arguments:
    !   ms              : Populated model_space_data (from read_usdb_file)
    !   n_protons       : Number of valence protons
    !   n_neutrons      : Number of valence neutrons
    !   bitstrings      : (n_qubits, n_samples)  -  '0'/'1' character array
    !   kept_idx        : Indices (1-based) of the n_kept bitstrings that passed the filter
    !   n_kept          : Number of kept bitstrings
    !   n_qubits        : Total qubits (= n_sp proton + neutron substates)
    !   H_matrix        : Output complex Hermitian Hamiltonian (dim × dim)
    !   dim             : Number of unique Slater determinants in the subspace
    !   basis_map       : Maps subspace column i → kept_idx index (for overlap)
    !   status          : 0 = success, -1 = failure
    subroutine build_subspace_hamiltonian(ms, n_protons, n_neutrons, &
        bitstrings, kept_idx, n_kept, n_qubits, &
        H_matrix, dim, basis_map, status)
        use iso_c_binding, only: c_char
        type(model_space_data), intent(in)   :: ms
        integer,                intent(in)   :: n_protons, n_neutrons
        character(kind=c_char), intent(in)   :: bitstrings(:,:)
        integer,                intent(in)   :: kept_idx(:)
        integer,                intent(in)   :: n_kept, n_qubits
        complex(8), allocatable, intent(out) :: H_matrix(:,:)
        integer,                intent(out)  :: dim
        integer, allocatable,   intent(out)  :: basis_map(:)
        integer,                intent(out)  :: status

        type(sp_state), allocatable :: sp(:)
        integer :: n_sp, n_sp_p
        integer, allocatable :: sd_basis(:,:)   ! (n_sp, n_kept)  -  candidate occupations
        integer, allocatable :: sd_tmp(:,:)     ! scratch for the dedup gather (see below)
        integer :: i, j, alpha, beta, idx, b, n_unique
        integer, allocatable :: unique_map(:)   ! unique_map(i) = kept_idx index for basis col i
        real(8) :: h_elem
        integer(8), allocatable :: keys(:)      ! packed occupation keys for sort-based dedup
        integer,    allocatable :: sort_idx(:)  ! argsort of keys
        integer :: ki, tmp_int
        integer(8) :: tmp_key

        status = 0

        call build_sp_array(ms, sp)
        n_sp = size(sp)
        n_sp_p = count(sp%tz == -1)

        if (n_qubits /= n_sp) then
            print *, "ERROR build_subspace_hamiltonian: n_qubits /= n_sp", n_qubits, n_sp
            status = -1
            deallocate(sp)
            return
        end if

        ! The dedup below packs one occupation vector into a single 64-bit key,
        ! so the model space must fit in 64 single-particle states.
        if (n_sp > 64) then
            print *, "ERROR build_subspace_hamiltonian: n_sp > 64 exceeds packed key width", n_sp
            status = -1
            deallocate(sp)
            return
        end if

        if (n_kept == 0) then
            print *, "ERROR build_subspace_hamiltonian: no kept bitstrings"
            status = -1
            deallocate(sp)
            return
        end if

        ! Convert each kept bitstring to an occupation vector; deduplicate.
        ! Pack each n_sp-bit occupation into a 64-bit integer key, argsort the keys,
        ! then do a single linear scan for consecutive duplicates -- O(n log n) total.
        allocate(sd_basis(n_sp, n_kept))
        allocate(unique_map(n_kept))
        allocate(keys(n_kept))
        allocate(sort_idx(n_kept))

        ! Build all keys and the initial occupation table in one pass
        do i = 1, n_kept
            idx = kept_idx(i)
            keys(i) = 0_8
            do j = 1, n_sp
                b = ichar(bitstrings(j, idx)) - 48
                sd_basis(j, i) = b
                if (b /= 0) keys(i) = ior(keys(i), ishft(1_8, j - 1))
            end do
            sort_idx(i) = i
        end do

        ! Insertion sort on keys (n_kept <= a few thousand in practice)
        do i = 2, n_kept
            tmp_key = keys(sort_idx(i))
            tmp_int = sort_idx(i)
            ki = i - 1
            ! Fortran does not guarantee short-circuit .and., so the ki >= 1 bound
            ! check must gate the sort_idx(ki) access structurally.
            do while (ki >= 1)
                if (keys(sort_idx(ki)) <= tmp_key) exit
                sort_idx(ki + 1) = sort_idx(ki)
                ki = ki - 1
            end do
            sort_idx(ki + 1) = tmp_int
        end do

        ! Linear scan of sorted order: first occurrence of each key is unique.
        ! This pass only records indices.
        n_unique = 0
        do i = 1, n_kept
            ki = sort_idx(i)
            if (i > 1) then
                if (keys(ki) == keys(sort_idx(i - 1))) cycle
            end if
            n_unique = n_unique + 1
            unique_map(n_unique) = ki
        end do

        ! Gather the unique occupations into the leading n_unique columns.
        ! This MUST go through scratch rather than compacting sd_basis in place:
        ! the sources are visited in sorted order (unique_map is a permutation of
        ! a subset of 1..n_kept), so for any non-identity order a source column
        ! can already have been overwritten as an earlier destination, e.g. with
        ! sort_idx = [2,3,1], writing column 1 on step 1 destroys the source that
        ! step 3 needs. That silently corrupts H_matrix.
        allocate(sd_tmp(n_sp, n_unique))
        do i = 1, n_unique
            sd_tmp(:, i) = sd_basis(:, unique_map(i))
        end do
        sd_basis(:, 1:n_unique) = sd_tmp
        deallocate(sd_tmp)

        deallocate(keys, sort_idx)

        dim = n_unique
        allocate(basis_map(dim))
        basis_map = unique_map(1:dim)


        ! Build H_matrix over the deduplicated subspace.
        ! One-body (diagonal SPE + core) and two-body are separated so the full
        ! (alpha, beta) pair loop is data-independent and can use COLLAPSE(2).
        ! Every (alpha,beta) pair is visited exactly once across the whole iteration
        ! space, so each H(i,j) is written exactly once regardless of scheduling. No races.
        allocate(H_matrix(dim, dim))
        H_matrix = cmplx(0.0d0, 0.0d0, kind=8)

        ! One-body diagonal: SPE sum + core energy (serial; dim iterations, cheap)
        do alpha = 1, dim
            H_matrix(alpha, alpha) = cmplx(ms%core_energy, 0.0d0, kind=8)
            do i = 1, n_sp
                if (sd_basis(i, alpha) == 1) &
                    H_matrix(alpha, alpha) = H_matrix(alpha, alpha) &
                        + cmplx(sp(i)%spe, 0.0d0, kind=8)
            end do
        end do

        ! Two-body: embarrassingly parallel over all (alpha,beta) pairs.
        ! COLLAPSE(2) exposes dim^2 independent work units to the scheduler.
        !$OMP PARALLEL DO COLLAPSE(2) SCHEDULE(DYNAMIC,8) PRIVATE(h_elem)
        do alpha = 1, dim
            do beta = 1, dim
                h_elem = 0.0d0
                call compute_sd_twobody(sp, n_sp, sd_basis(:,alpha), sd_basis(:,beta), &
                                         ms%tbmes, ms%n_tbme, h_elem)
                if (abs(h_elem) > 0.0d0) then
                    if (beta == alpha) then
                        H_matrix(alpha, alpha) = H_matrix(alpha, alpha) &
                            + cmplx(h_elem, 0.0d0, kind=8)
                    else
                        H_matrix(alpha, beta) = cmplx(h_elem, 0.0d0, kind=8)
                    end if
                end if
            end do
        end do
        !$OMP END PARALLEL DO

        deallocate(sp, sd_basis, unique_map)

    end subroutine build_subspace_hamiltonian

    ! Subroutine: rank_pairs_by_pt2
    !
    ! Ranks CG-filtered particle-hole pairs by descending CIPSI/EN second-order score:
    !   score = F_pq² / |Δε_EN|
    ! where F_pq = Σ_{k∈occ,k≠h,v} V_ms(h,k;v,k) and Δε_EN = H_hh − H_vv.
    !
    ! This is the per-configuration PT2 energy estimate ε_α = |⟨ψ|H|α⟩|²/(E₀−H_αα)
    ! introduced by Huron, Malrieu & Rancurel (J. Chem. Phys. 58, 5745, 1973) as the
    ! selection criterion for CIPSI.  Greedy selection by score maximises the PT2
    ! energy recovery per circuit slot.  Bare |F_pq| ranking omits the denominator
    ! and undervalues near-degenerate pairs (small |Δε_EN|) that have large mixing.
    !
    ! tbme_weights returns F_pq values.
    subroutine rank_pairs_by_pt2(ms, filtered_pairs, n_pairs, n_sp, &
                                  ranked_pairs, tbme_weights)
        use iso_c_binding, only: c_int
        use orbital_registry, only: reg_is_occupied
        type(model_space_data), intent(in)  :: ms
        integer(c_int),         intent(in)  :: filtered_pairs(:,:)
        integer,                intent(in)  :: n_pairs, n_sp
        integer(c_int), allocatable, intent(out) :: ranked_pairs(:,:)
        real(8),        allocatable, intent(out) :: tbme_weights(:)

        type(sp_state), allocatable :: sp(:)
        integer :: k, i, j_orb, sp_idx, h_sp, v_sp, spk
        real(8) :: fock_pq, vms, vk, delta_eps, en_corr, denom, score
        real(8), allocatable :: scores(:), fock_vals(:)
        integer, allocatable :: order(:)
        integer :: tmp_idx, min_pos

        call build_sp_array(ms, sp)

        allocate(scores(n_pairs), fock_vals(n_pairs), order(n_pairs))
        do k = 1, n_pairs
            order(k) = k
            h_sp = filtered_pairs(k, 1) + 1
            v_sp = filtered_pairs(k, 2) + 1

            fock_pq = 0.0d0
            en_corr = 0.0d0
            do spk = 1, n_sp
                if (spk == h_sp .or. spk == v_sp) cycle
                if (.not. reg_is_occupied(spk - 1)) cycle
                call v_ms_elem(sp, ms%tbmes, ms%n_tbme, h_sp, spk, v_sp, spk, vms)
                fock_pq = fock_pq + vms
                call v_ms_elem(sp, ms%tbmes, ms%n_tbme, h_sp, spk, h_sp, spk, vk)
                en_corr = en_corr + vk
                call v_ms_elem(sp, ms%tbmes, ms%n_tbme, v_sp, spk, v_sp, spk, vk)
                en_corr = en_corr - vk
            end do
            fock_vals(k) = fock_pq
            delta_eps = sp(h_sp)%spe - sp(v_sp)%spe
            denom = sign(max(abs(delta_eps + en_corr), 0.1d0), delta_eps + en_corr)
            scores(k) = fock_pq**2 / abs(denom)
        end do

        do i = 1, n_pairs - 1
            min_pos = i
            do j_orb = i + 1, n_pairs
                if (scores(order(j_orb)) > scores(order(min_pos))) min_pos = j_orb
            end do
            if (min_pos /= i) then
                tmp_idx        = order(i)
                order(i)       = order(min_pos)
                order(min_pos) = tmp_idx
            end if
        end do

        allocate(ranked_pairs(n_pairs, 2))
        allocate(tbme_weights(n_pairs))
        do k = 1, n_pairs
            sp_idx = order(k)
            ranked_pairs(k, 1) = filtered_pairs(sp_idx, 1)
            ranked_pairs(k, 2) = filtered_pairs(sp_idx, 2)
            tbme_weights(k) = fock_vals(sp_idx)
        end do

        deallocate(sp, scores, fock_vals, order)

    end subroutine rank_pairs_by_pt2

    ! Subroutine: seed_angles
    !
    ! Computes the exact two-level mixing angle for each ranked particle-hole pair:
    !
    !   θ_pq = ½·arctan( 2·F_pq / Δε_EN )
    !
    ! where F_pq = Σ_{k∈occ, k≠h,v} V_ms(h,k;v,k)  (Fock off-diagonal, summed over spectators)
    ! and   Δε_EN = (ε_v − ε_h) + Σ_{k∈occ, k≠h,v} [V_ms(v,k;v,k) − V_ms(h,k;h,k)]
    !              (Epstein-Nesbet denominator: SPE gap + change in spectator two-body energy)
    !
    ! This is the exact diagonalisation of the 2×2 HF+single-excitation subspace
    ! when the diagonal elements include the full two-body spectator interaction.
    ! The EN denominator equals H_hh − H_vv from the full USDB Hamiltonian,
    ! matching what verify_angle_formulas computes by explicit 2×2 diagonalization.
    !
    ! Arguments:
    !   ms           : Populated model_space_data
    !   ranked_pairs : (n_pairs,2)  -  col1=hole qubit (0-based), col2=virtual qubit
    !   n_pairs      : Number of pairs
    !   n_sp         : Total sp states (= n_qubits)
    !   angles       : Output  -  θ_pq in radians for each pair (same ordering)
    subroutine seed_angles(ms, ranked_pairs, n_pairs, n_sp, angles)
        use iso_c_binding, only: c_int
        use orbital_registry, only: reg_is_occupied
        type(model_space_data), intent(in)  :: ms
        integer(c_int),         intent(in)  :: ranked_pairs(:,:)
        integer,                intent(in)  :: n_pairs, n_sp
        real(8), allocatable,   intent(out) :: angles(:)

        type(sp_state), allocatable :: sp(:)
        integer :: i, h_sp, v_sp, spk
        real(8) :: fock_pq, vms, delta_eps, en_corr, vk, denom

        call build_sp_array(ms, sp)
        allocate(angles(n_pairs))

        do i = 1, n_pairs
            h_sp = ranked_pairs(i, 1) + 1   ! 0-based -> 1-based
            v_sp = ranked_pairs(i, 2) + 1

            ! Numerator: Fock off-diagonal  -  sum V_ms(h,k;v,k) over occupied spectators k
            fock_pq = 0.0d0
            en_corr = 0.0d0
            do spk = 1, n_sp
                if (spk == h_sp .or. spk == v_sp) cycle
                if (.not. reg_is_occupied(spk - 1)) cycle
                call v_ms_elem(sp, ms%tbmes, ms%n_tbme, h_sp, spk, v_sp, spk, vms)
                fock_pq = fock_pq + vms
                ! EN spectator correction: H_ref_spectator - H_exc_spectator = V(h,k) - V(v,k)
                call v_ms_elem(sp, ms%tbmes, ms%n_tbme, h_sp, spk, h_sp, spk, vk)
                en_corr = en_corr + vk
                call v_ms_elem(sp, ms%tbmes, ms%n_tbme, v_sp, spk, v_sp, spk, vk)
                en_corr = en_corr - vk
            end do

            ! Denominator: Epstein-Nesbet gap = H_hh - H_vv (reference minus excited).
            ! Sign convention: denominator = (E_ref - E_exc) to match
            !   tan(2θ) = 2F / (H_hh - H_vv) from 2x2 diagonalization.
            ! SPE contribution: ε_h - ε_v (hole minus virtual, i.e. < 0 for genuine gap).
            ! EN correction: change in spectator two-body when h → v (positive = excited lower).
            delta_eps = sp(h_sp)%spe - sp(v_sp)%spe
            denom = sign(max(abs(delta_eps + en_corr), 0.1d0), delta_eps + en_corr)

            ! Exact two-level mixing angle
            angles(i) = 0.5d0 * atan2(2.0d0 * fock_pq, denom)
        end do

        deallocate(sp)

    end subroutine seed_angles

    ! Subroutine: filter_doubles_by_j
    !
    ! CG filter for 2p2h quadruples (h1,h2,v1,v2): keeps only those where
    ! the bra pair (h1,h2) and ket pair (v1,v2) can couple to a common total J
    ! with the same M projection.  This is the two-body generalisation of
    ! filter_excitations_by_j and applies the same triangle-inequality check.
    !
    ! Arguments:
    !   raw_quads      : (n_raw, 4)  -  input (h1,h2,v1,v2) 0-based qubit quadruples
    !   n_raw          : Number of input quadruples
    !   filtered_quads : Output  -  quadruples passing J-coupling filter
    !   n_filtered     : Output  -  number of quadruples that passed
    subroutine filter_doubles_by_j(raw_quads, n_raw, filtered_quads, n_filtered)
        use iso_c_binding, only: c_int
        use orbital_registry, only: reg_j2, reg_mj2, reg_tz
        integer(c_int), intent(in)  :: raw_quads(:,:)
        integer,        intent(in)  :: n_raw
        integer(c_int), allocatable, intent(out) :: filtered_quads(:,:)
        integer(c_int), intent(out) :: n_filtered

        integer :: i, J2_bra_min, J2_bra_max, J2_ket_min, J2_ket_max
        integer :: jh1, jh2, jv1, jv2, mh1, mh2, mv1, mv2, M_bra, M_ket
        integer :: h1, h2, v1, v2
        logical :: passes
        integer(c_int), allocatable :: tmp(:,:)

        allocate(tmp(n_raw, 4))
        n_filtered = 0_c_int

        do i = 1, n_raw
            h1 = raw_quads(i,1);  h2 = raw_quads(i,2)
            v1 = raw_quads(i,3);  v2 = raw_quads(i,4)

            jh1 = reg_j2(h1);  jh2 = reg_j2(h2)
            jv1 = reg_j2(v1);  jv2 = reg_j2(v2)
            mh1 = reg_mj2(h1); mh2 = reg_mj2(h2)
            mv1 = reg_mj2(v1); mv2 = reg_mj2(v2)

            M_bra = mv1 + mv2
            M_ket = mh1 + mh2
            if (M_bra /= M_ket) cycle

            ! Triangle inequality: J must be reachable by both pairs
            J2_bra_min = abs(jv1 - jv2);  J2_bra_max = jv1 + jv2
            J2_ket_min = abs(jh1 - jh2);  J2_ket_max = jh1 + jh2

            passes = max(J2_bra_min, J2_ket_min) <= min(J2_bra_max, J2_ket_max)
            if (.not. passes) cycle

            n_filtered = n_filtered + 1_c_int
            tmp(n_filtered, :) = raw_quads(i, :)
        end do

        allocate(filtered_quads(n_filtered, 4))
        if (n_filtered > 0) filtered_quads = tmp(1:n_filtered, :)
        deallocate(tmp)

    end subroutine filter_doubles_by_j

    ! Subroutine: rank_doubles_by_pt2
    !
    ! Ranks 2p2h quadruples by descending CIPSI/EN second-order score:
    !   score = V_ms(h1,h2;v1,v2)^2 / |Delta_EN|
    ! where Delta_EN = H_ref - H_exc is the full Epstein-Nesbet denominator (SPE gap +
    ! spectator sum + pair self-interaction term -- see seed_double_angles for details).
    !
    ! Criterion from Huron, Malrieu & Rancurel (J. Chem. Phys. 58, 5745, 1973):
    ! for a double excitation <psi|H|alpha> = V_ms by Slater-Condon (no spectator sum),
    ! so score = V_ms^2/|Delta_EN|. tbme_weights returns V_ms values.
    subroutine rank_doubles_by_pt2(ms, filtered_quads, n_quads, n_sp, &
                                    ranked_quads, tbme_weights)
        use iso_c_binding, only: c_int
        use orbital_registry, only: reg_is_occupied
        type(model_space_data), intent(in)  :: ms
        integer(c_int),         intent(in)  :: filtered_quads(:,:)
        integer,                intent(in)  :: n_quads, n_sp
        integer(c_int), allocatable, intent(out) :: ranked_quads(:,:)
        real(8),        allocatable, intent(out) :: tbme_weights(:)

        type(sp_state), allocatable :: sp(:)
        integer :: k, i, kk
        integer :: h1_sp, h2_sp, v1_sp, v2_sp
        real(8) :: vms, delta_eps, en_corr, vk, denom, score
        real(8), allocatable :: scores(:), vms_vals(:)
        integer, allocatable :: order(:)
        integer :: tmp_idx, min_pos, j2_orb

        call build_sp_array(ms, sp)

        allocate(scores(n_quads), vms_vals(n_quads), order(n_quads))
        do k = 1, n_quads
            order(k) = k
            h1_sp = filtered_quads(k,1) + 1
            h2_sp = filtered_quads(k,2) + 1
            v1_sp = filtered_quads(k,3) + 1
            v2_sp = filtered_quads(k,4) + 1

            call v_ms_elem(sp, ms%tbmes, ms%n_tbme, v1_sp, v2_sp, h1_sp, h2_sp, vms)
            vms_vals(k) = vms

            delta_eps = (sp(h1_sp)%spe + sp(h2_sp)%spe) &
                      - (sp(v1_sp)%spe + sp(v2_sp)%spe)
            en_corr = 0.0d0
            do kk = 1, n_sp
                if (.not. reg_is_occupied(kk - 1)) cycle
                if (kk == h1_sp .or. kk == h2_sp) cycle
                call v_ms_elem(sp, ms%tbmes, ms%n_tbme, h1_sp, kk, h1_sp, kk, vk)
                en_corr = en_corr + vk
                call v_ms_elem(sp, ms%tbmes, ms%n_tbme, h2_sp, kk, h2_sp, kk, vk)
                en_corr = en_corr + vk
                call v_ms_elem(sp, ms%tbmes, ms%n_tbme, v1_sp, kk, v1_sp, kk, vk)
                en_corr = en_corr - vk
                call v_ms_elem(sp, ms%tbmes, ms%n_tbme, v2_sp, kk, v2_sp, kk, vk)
                en_corr = en_corr - vk
            end do
            call v_ms_elem(sp, ms%tbmes, ms%n_tbme, h1_sp, h2_sp, h1_sp, h2_sp, vk)
            en_corr = en_corr + vk
            call v_ms_elem(sp, ms%tbmes, ms%n_tbme, v1_sp, v2_sp, v1_sp, v2_sp, vk)
            en_corr = en_corr - vk

            denom = sign(max(abs(delta_eps + en_corr), 0.1d0), delta_eps + en_corr)
            scores(k) = vms**2 / abs(denom)
        end do

        do i = 1, n_quads - 1
            min_pos = i
            do j2_orb = i + 1, n_quads
                if (scores(order(j2_orb)) > scores(order(min_pos))) min_pos = j2_orb
            end do
            if (min_pos /= i) then
                tmp_idx          = order(i)
                order(i)         = order(min_pos)
                order(min_pos)   = tmp_idx
            end if
        end do

        allocate(ranked_quads(n_quads, 4))
        allocate(tbme_weights(n_quads))
        do k = 1, n_quads
            ranked_quads(k, :) = filtered_quads(order(k), :)
            tbme_weights(k) = vms_vals(order(k))
        end do

        deallocate(sp, scores, vms_vals, order)

    end subroutine rank_doubles_by_pt2

    ! Subroutine: seed_double_angles
    !
    ! Computes the exact two-level mixing angle for each 2p2h excitation:
    !   θ = ½·arctan(2·V_ms(h1,h2;v1,v2) / Δε_EN)
    !
    ! Numerator: by Slater-Condon rules, two determinants differing by exactly
    ! two orbitals have H matrix element = V_ms(h1,h2;v1,v2) directly  -  no
    ! spectator sum (unlike singles where F_pq requires contracting both legs
    ! against occupied spectators).
    !
    ! Denominator: Epstein-Nesbet gap, not the bare SPE difference.
    !   Δε_EN = Δε_0 + Σ_{k∈occ, k≠h1,h2} [V_ms(v1,k;v1,k) + V_ms(v2,k;v2,k)
    !                                        − V_ms(h1,k;h1,k) − V_ms(h2,k;h2,k)]
    ! where Δε_0 = (ε_v1+ε_v2) − (ε_h1+ε_h2).
    ! The EN correction accounts for the change in two-body interaction energy
    ! between the excited pair and every occupied spectator  -  larger than for
    ! singles since two orbitals change simultaneously.
    !
    ! Arguments:
    !   ms           : Populated model_space_data
    !   ranked_quads : (n_quads,4)  -  ranked (h1,h2,v1,v2), 0-based qubit indices
    !   n_quads      : Number of quadruples
    !   n_sp         : Total single-particle states (= n_qubits)
    !   angles       : Output  -  seeded angles for each ranked quadruple (radians)
    subroutine seed_double_angles(ms, ranked_quads, n_quads, n_sp, angles)
        use iso_c_binding, only: c_int
        use orbital_registry, only: reg_is_occupied
        type(model_space_data), intent(in)  :: ms
        integer(c_int),         intent(in)  :: ranked_quads(:,:)
        integer,                intent(in)  :: n_quads, n_sp
        real(8), allocatable,   intent(out) :: angles(:)

        type(sp_state), allocatable :: sp(:)
        integer :: i, kk
        integer :: h1_sp, h2_sp, v1_sp, v2_sp
        real(8) :: vms, delta_eps, en_corr, vk, denom

        call build_sp_array(ms, sp)
        allocate(angles(n_quads))

        do i = 1, n_quads
            h1_sp = ranked_quads(i,1) + 1
            h2_sp = ranked_quads(i,2) + 1
            v1_sp = ranked_quads(i,3) + 1
            v2_sp = ranked_quads(i,4) + 1

            ! Numerator: direct Slater-Condon TBME (no spectator sum for doubles)
            call v_ms_elem(sp, ms%tbmes, ms%n_tbme, v1_sp, v2_sp, h1_sp, h2_sp, vms)

            ! Denominator: Epstein-Nesbet gap = H_ref - H_exc (reference minus excited).
            ! Sign convention: denominator = (E_ref - E_exc) matching tan(2θ) = 2V/(H_ref-H_exc).
            ! SPE contribution: (ε_h1+ε_h2) - (ε_v1+ε_v2) (holes minus virtuals).
            delta_eps = (sp(h1_sp)%spe + sp(h2_sp)%spe) &
                      - (sp(v1_sp)%spe + sp(v2_sp)%spe)
            ! EN correction: H_ref_spectator - H_exc_spectator
            !   = Σ_{k∈occ,k≠h1,h2}[V(h1,k)+V(h2,k)-V(v1,k)-V(v2,k)]
            !   + [V(h1,h2;h1,h2) - V(v1,v2;v1,v2)]    (pair self-interaction)
            en_corr = 0.0d0
            do kk = 1, n_sp
                if (.not. reg_is_occupied(kk - 1)) cycle
                if (kk == h1_sp .or. kk == h2_sp)  cycle
                call v_ms_elem(sp, ms%tbmes, ms%n_tbme, h1_sp, kk, h1_sp, kk, vk)
                en_corr = en_corr + vk
                call v_ms_elem(sp, ms%tbmes, ms%n_tbme, h2_sp, kk, h2_sp, kk, vk)
                en_corr = en_corr + vk
                call v_ms_elem(sp, ms%tbmes, ms%n_tbme, v1_sp, kk, v1_sp, kk, vk)
                en_corr = en_corr - vk
                call v_ms_elem(sp, ms%tbmes, ms%n_tbme, v2_sp, kk, v2_sp, kk, vk)
                en_corr = en_corr - vk
            end do
            ! Pair self-interaction change: V(h1,h2;h1,h2) - V(v1,v2;v1,v2)
            call v_ms_elem(sp, ms%tbmes, ms%n_tbme, h1_sp, h2_sp, h1_sp, h2_sp, vk)
            en_corr = en_corr + vk
            call v_ms_elem(sp, ms%tbmes, ms%n_tbme, v1_sp, v2_sp, v1_sp, v2_sp, vk)
            en_corr = en_corr - vk
            denom = sign(max(abs(delta_eps + en_corr), 0.1d0), &
                         delta_eps + en_corr)
            angles(i) = 0.5d0 * atan2(2.0d0 * vms, denom)
        end do

    end subroutine seed_double_angles


    ! Subroutine: verify_angle_formulas
    !
    ! Sanity-check both seed_angles and seed_double_angles against explicit
    ! 2×2 Hamiltonian diagonalization for a given set of pairs and quadruples.
    !
    ! For each singles pair (h,v):
    !   H2x2 = [[H_hh,  F_pq ],
    !            [F_pq,  H_vv ]]
    !   where H_hh and H_vv are the diagonal USDB energies of the HF reference and
    !   the singly-excited determinant (one-body SPE sums + two-body diagonal),
    !   and F_pq = Σ_{k∈occ, k≠h,v} V_ms(h,k;v,k) is the off-diagonal Fock element.
    !   Exact mixing angle: θ_exact = ½·atan2(2·F_pq, H_hh − H_vv).
    !   This must match seed_angles output to within tol (default 1e-6 rad).
    !
    ! For each doubles quadruple (h1,h2,v1,v2):
    !   H2x2 = [[H_ref,  Vms ],
    !            [Vms,    H_exc]]
    !   where Vms = V_ms(h1,h2;v1,v2) (direct Slater-Condon element),
    !   H_ref and H_exc are the full USDB diagonal energies of the reference and
    !   doubly-excited determinant.
    !   Exact mixing angle: θ_exact = ½·atan2(2·Vms, H_ref − H_exc).
    !   This must match seed_double_angles output to within tol.
    !
    ! Prints a PASS/FAIL line for every pair and quadruple, then a summary.
    ! Returns n_fail = total number of failures.
    !
    ! Arguments:
    !   ms           : Populated model_space_data
    !   hf_occ      : (n_sp) integer array  -  1 if sp state is HF-occupied, else 0
    !   n_sp         : Total single-particle states
    !   pairs        : (n_pairs,2)  -  (h,v) 0-based qubit pairs to check
    !   n_pairs      : Number of singles pairs
    !   quads        : (n_quads,4)  -  (h1,h2,v1,v2) 0-based qubit quads to check
    !   n_quads      : Number of doubles quadruples
    !   angles_s     : Seeded singles angles (from seed_angles), radians
    !   angles_d     : Seeded doubles angles (from seed_double_angles), radians
    !   tol          : Tolerance in radians (recommended: 1.0e-5)
    !   n_fail       : Output  -  number of checks that exceeded tol
    subroutine verify_angle_formulas(ms, hf_occ, n_sp, &
                                     pairs, n_pairs, quads, n_quads, &
                                     angles_s, angles_d, tol, n_fail)
        use iso_c_binding, only: c_int
        type(model_space_data), intent(in) :: ms
        integer,                intent(in) :: hf_occ(:)
        integer,                intent(in) :: n_sp
        integer(c_int),         intent(in) :: pairs(:,:)
        integer,                intent(in) :: n_pairs
        integer(c_int),         intent(in) :: quads(:,:)
        integer,                intent(in) :: n_quads
        real(8),                intent(in) :: angles_s(:)
        real(8),                intent(in) :: angles_d(:)
        real(8),                intent(in) :: tol
        integer,                intent(out) :: n_fail

        type(sp_state), allocatable :: sp(:)
        integer :: i, k, h_sp, v_sp, h1_sp, h2_sp, v1_sp, v2_sp
        real(8) :: fock_pq, vms, h_hh, h_vv, h_ref, h_exc
        real(8) :: theta_exact, delta, vk
        logical :: occ_k

        call build_sp_array(ms, sp)
        n_fail = 0

        ! --- Singles checks ---
        if (n_pairs > 0) then
            print '(a)', "  [verify_angle] --- Singles 2x2 checks ---"
        end if

        do i = 1, n_pairs
            h_sp = pairs(i,1) + 1
            v_sp = pairs(i,2) + 1

            ! H_hh: diagonal of the HF reference in our occupation basis
            !   = core_energy + sum_{k occ} spe(k) + sum_{j<k occ} V_ms(j,k;j,k)
            h_hh = ms%core_energy
            do k = 1, n_sp
                if (hf_occ(k) == 0) cycle
                h_hh = h_hh + sp(k)%spe
                ! two-body diagonal contribution from pair (k, earlier orbitals)
                block
                    integer :: kk
                    real(8) :: vv
                    do kk = 1, k-1
                        if (hf_occ(kk) == 0) cycle
                        call v_ms_elem(sp, ms%tbmes, ms%n_tbme, kk, k, kk, k, vv)
                        h_hh = h_hh + vv
                    end do
                end block
            end do

            ! H_vv: singly-excited determinant  -  h_sp unoccupied, v_sp occupied
            !   = core_energy + sum_{k occ(exc)} spe(k)
            !   + sum_{j<k both occ(exc)} V_ms(j,k;j,k)
            ! occ(exc) = hf_occ with bit h_sp flipped off, v_sp flipped on
            h_vv = ms%core_energy
            do k = 1, n_sp
                occ_k = (hf_occ(k) == 1)
                if (k == h_sp) occ_k = .false.
                if (k == v_sp) occ_k = .true.
                if (.not. occ_k) cycle
                h_vv = h_vv + sp(k)%spe
                block
                    integer :: kk
                    real(8) :: vv
                    logical :: occ_kk
                    do kk = 1, k-1
                        occ_kk = (hf_occ(kk) == 1)
                        if (kk == h_sp) occ_kk = .false.
                        if (kk == v_sp) occ_kk = .true.
                        if (.not. occ_kk) cycle
                        call v_ms_elem(sp, ms%tbmes, ms%n_tbme, kk, k, kk, k, vv)
                        h_vv = h_vv + vv
                    end do
                end block
            end do

            ! Off-diagonal: F_pq = sum_{k occ, k/=h,v} V_ms(h,k;v,k)
            fock_pq = 0.0d0
            do k = 1, n_sp
                if (k == h_sp .or. k == v_sp) cycle
                if (hf_occ(k) == 0) cycle
                call v_ms_elem(sp, ms%tbmes, ms%n_tbme, h_sp, k, v_sp, k, vk)
                fock_pq = fock_pq + vk
            end do

            ! Exact angle from 2x2 diagonalization
            theta_exact = 0.5d0 * atan2(2.0d0 * fock_pq, h_hh - h_vv)

            ! Compare  -  handle atan2 branch equivalence: θ and θ+/-π/2 are not the same
            ! rotation, so a raw mod-π equivalence is wrong; we check the direct diff.
            delta = abs(theta_exact - angles_s(i))

            if (delta <= tol) then
                print '(a,i3,a,f10.6,a,f10.6,a)', &
                    "  [verify_angle] singles #", i, &
                    "  seeded=", angles_s(i), "  exact=", theta_exact, "  PASS"
            else
                print '(a,i3,a,f10.6,a,f10.6,a,es10.3,a)', &
                    "  [verify_angle] singles #", i, &
                    "  seeded=", angles_s(i), "  exact=", theta_exact, &
                    "  |diff|=", delta, "  FAIL"
                n_fail = n_fail + 1
            end if
        end do

        ! --- Doubles checks ---
        if (n_quads > 0) then
            print '(a)', "  [verify_angle] --- Doubles 2x2 checks ---"
        end if

        do i = 1, n_quads
            h1_sp = quads(i,1) + 1
            h2_sp = quads(i,2) + 1
            v1_sp = quads(i,3) + 1
            v2_sp = quads(i,4) + 1

            ! H_ref: same HF reference diagonal
            h_ref = ms%core_energy
            do k = 1, n_sp
                if (hf_occ(k) == 0) cycle
                h_ref = h_ref + sp(k)%spe
                block
                    integer :: kk
                    real(8) :: vv
                    do kk = 1, k-1
                        if (hf_occ(kk) == 0) cycle
                        call v_ms_elem(sp, ms%tbmes, ms%n_tbme, kk, k, kk, k, vv)
                        h_ref = h_ref + vv
                    end do
                end block
            end do

            ! H_exc: doubly-excited determinant  -  h1,h2 empty; v1,v2 filled
            h_exc = ms%core_energy
            do k = 1, n_sp
                occ_k = (hf_occ(k) == 1)
                if (k == h1_sp .or. k == h2_sp) occ_k = .false.
                if (k == v1_sp .or. k == v2_sp) occ_k = .true.
                if (.not. occ_k) cycle
                h_exc = h_exc + sp(k)%spe
                block
                    integer :: kk
                    real(8) :: vv
                    logical :: occ_kk
                    do kk = 1, k-1
                        occ_kk = (hf_occ(kk) == 1)
                        if (kk == h1_sp .or. kk == h2_sp) occ_kk = .false.
                        if (kk == v1_sp .or. kk == v2_sp) occ_kk = .true.
                        if (.not. occ_kk) cycle
                        call v_ms_elem(sp, ms%tbmes, ms%n_tbme, kk, k, kk, k, vv)
                        h_exc = h_exc + vv
                    end do
                end block
            end do

            ! Off-diagonal: V_ms(h1,h2;v1,v2)  -  direct Slater-Condon TBME
            call v_ms_elem(sp, ms%tbmes, ms%n_tbme, v1_sp, v2_sp, h1_sp, h2_sp, vms)

            ! Exact angle from 2x2 diagonalization
            theta_exact = 0.5d0 * atan2(2.0d0 * vms, h_ref - h_exc)

            delta = abs(theta_exact - angles_d(i))

            if (delta <= tol) then
                print '(a,i3,a,f10.6,a,f10.6,a)', &
                    "  [verify_angle] doubles #", i, &
                    "  seeded=", angles_d(i), "  exact=", theta_exact, "  PASS"
            else
                print '(a,i3,a,f10.6,a,f10.6,a,es10.3,a)', &
                    "  [verify_angle] doubles #", i, &
                    "  seeded=", angles_d(i), "  exact=", theta_exact, &
                    "  |diff|=", delta, "  FAIL"
                n_fail = n_fail + 1
            end if
        end do

        print '(a,i0,a,i0,a)', "  [verify_angle] Summary: ", &
            n_pairs + n_quads, " checks, ", n_fail, " failed"

        deallocate(sp)

    end subroutine verify_angle_formulas


end module exact_solver