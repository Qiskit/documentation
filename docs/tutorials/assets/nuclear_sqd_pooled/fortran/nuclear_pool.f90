! This code is part of Qiskit.
!
! (C) Copyright IBM 2026.
!
! This code is licensed under the Apache License, Version 2.0. You may
! obtain a copy of this license in the LICENSE.txt file in the root directory
! of this source tree or at https://www.apache.org/licenses/LICENSE-2.0.
!
! nuclear_pool  -  operator pool management for the nuclear circuit ensemble.
!
! Public API:
!
!   rank_singles_pool_pt2    -  rank a J-filtered 1p1h pool by PT2 score F_pq^2/|Delta_EN|.
!   rank_doubles_pool_pt2    -  rank a J-filtered 2p2h pool by PT2 score V_ms^2/|Delta_EN|.
!
!   filter_singles_by_symmetry  -  apply J=0 CG triangle filter to a raw 1p1h pool.
!   filter_doubles_by_symmetry  -  apply J-coupling triangle filter to a raw 2p2h pool.
!
!   seed_singles_angles      -  compute EN two-level mixing angles for a ranked 1p1h pool.
!   seed_doubles_angles      -  compute EN two-level mixing angles for a ranked 2p2h pool.
!
!   build_ranked_pool        -  convenience: generate + filter + rank + seed in one call.
!                             excitation_rank: 1 = singles only, 2 = doubles only,
!                             3 = both.
!
! Note: Fortran generic resolution requires TKR distinctness at required arguments.
! The singles and doubles procedure pairs share identical TKR at every required
! position (both take rank-2 integer(c_int) pools), so they are exposed as separate
! named procedures rather than overloaded generics.
!
! All heavy lifting is done by exact_solver, nuclear_ansatz, and clebsch_gordan.
! This module is a stable facade  -  callers depend only on the names here.

module nuclear_pool
    use iso_c_binding
    use usdb_reader,      only: model_space_data
    use exact_solver,     only: rank_pairs_by_pt2, rank_doubles_by_pt2, &
                                 seed_angles, seed_double_angles, &
                                 filter_doubles_by_j
    use nuclear_ansatz,   only: create_ph_excitation_pool, create_2p2h_excitation_pool
    use clebsch_gordan,   only: filter_excitations_by_j
    implicit none
    private

    ! Fortran generics require TKR distinctness; all pool procedures share the same
    ! argument types.  Named procedures are exposed directly  -  the names are
    ! self-documenting and callers always know their excitation rank.
    public :: rank_singles_pool_pt2
    public :: rank_doubles_pool_pt2
    public :: filter_singles_by_symmetry
    public :: filter_doubles_by_symmetry
    public :: seed_singles_angles
    public :: seed_doubles_angles
    public :: build_ranked_pool

contains

    ! rank_operator_pool

    ! Rank singles pool by PT2 score F_pq^2/|Delta_EN|.
    subroutine rank_singles_pool_pt2(ms, filtered_pairs, n_pairs, n_sp, ranked_pairs, weights)
        type(model_space_data), intent(in)  :: ms
        integer(c_int),         intent(in)  :: filtered_pairs(:,:)
        integer,                intent(in)  :: n_pairs, n_sp
        integer(c_int), allocatable, intent(out) :: ranked_pairs(:,:)
        real(8),        allocatable, intent(out) :: weights(:)
        call rank_pairs_by_pt2(ms, filtered_pairs, n_pairs, n_sp, ranked_pairs, weights)
    end subroutine rank_singles_pool_pt2

    ! Rank doubles pool by PT2 score V_ms^2/|Delta_EN|.
    subroutine rank_doubles_pool_pt2(ms, filtered_quads, n_quads, n_sp, ranked_quads, weights)
        type(model_space_data), intent(in)  :: ms
        integer(c_int),         intent(in)  :: filtered_quads(:,:)
        integer,                intent(in)  :: n_quads, n_sp
        integer(c_int), allocatable, intent(out) :: ranked_quads(:,:)
        real(8),        allocatable, intent(out) :: weights(:)
        call rank_doubles_by_pt2(ms, filtered_quads, n_quads, n_sp, ranked_quads, weights)
    end subroutine rank_doubles_pool_pt2

    ! filter_pool_by_symmetry
    !
    ! Filter raw singles pairs through J=0 CG angular-momentum check.
    subroutine filter_singles_by_symmetry(raw_pairs, n_raw, j_target_2, &
                                          filtered_pairs, n_filtered)
        integer(c_int), intent(in)  :: raw_pairs(:,:)   ! (n,2)
        integer(c_int), intent(in)  :: n_raw
        integer(c_int), intent(in)  :: j_target_2
        integer(c_int), allocatable, intent(out) :: filtered_pairs(:,:)
        integer(c_int), intent(out) :: n_filtered
        call filter_excitations_by_j(raw_pairs, n_raw, j_target_2, &
                                     filtered_pairs, n_filtered)
    end subroutine filter_singles_by_symmetry

    ! Filter raw doubles quads through J-coupling triangle filter.
    ! j_target_2 is accepted for interface uniformity but doubles filtering
    ! currently checks all J values that satisfy the triangle inequality.
    subroutine filter_doubles_by_symmetry(raw_quads, n_raw, j_target_2, &
                                          filtered_quads, n_filtered)
        integer(c_int), intent(in)  :: raw_quads(:,:)   ! (n,4)
        integer(c_int), intent(in)  :: n_raw            ! c_int to match singles interface
        integer(c_int), intent(in)  :: j_target_2       ! reserved; doubles filter uses all J
        integer(c_int), allocatable, intent(out) :: filtered_quads(:,:)
        integer(c_int), intent(out) :: n_filtered
        call filter_doubles_by_j(raw_quads, int(n_raw), filtered_quads, n_filtered)
    end subroutine filter_doubles_by_symmetry

    ! seed_operator_angles
    !
    ! Compute EN two-level mixing angles for a ranked singles pool.
    subroutine seed_singles_angles(ms, ranked_pairs, n_pairs, n_sp, angles)
        type(model_space_data), intent(in)  :: ms
        integer(c_int),         intent(in)  :: ranked_pairs(:,:)   ! (n,2)
        integer,                intent(in)  :: n_pairs, n_sp
        real(8), allocatable,   intent(out) :: angles(:)
        call seed_angles(ms, ranked_pairs, n_pairs, n_sp, angles)
    end subroutine seed_singles_angles

    ! Compute EN two-level mixing angles for a ranked doubles pool.
    subroutine seed_doubles_angles(ms, ranked_quads, n_quads, n_sp, angles)
        type(model_space_data), intent(in)  :: ms
        integer(c_int),         intent(in)  :: ranked_quads(:,:)   ! (n,4)
        integer,                intent(in)  :: n_quads, n_sp
        real(8), allocatable,   intent(out) :: angles(:)
        call seed_double_angles(ms, ranked_quads, n_quads, n_sp, angles)
    end subroutine seed_doubles_angles

    ! build_ranked_pool
    !
    ! Convenience: generate raw pool → filter by symmetry → rank → seed angles.
    ! excitation_rank: 1 = singles (1p1h pairs), 2 = doubles (2p2h quads).
    ! n_sp: total number of single-particle states (qubits).
    ! j_target_2: 2*J target for CG filter (0 for J=0 ground state sector).
    !
    ! Returns ranked_pool (n_kept × 2 or × 4) and seeded angles (n_kept).
    subroutine build_ranked_pool(ms, n_qubits, n_protons, n_neutrons, &
                                 excitation_rank, n_sp, j_target_2, &
                                 ranked_pool_s, n_kept_s, angles_s, &
                                 ranked_pool_d, n_kept_d, angles_d)
        type(model_space_data), intent(in)  :: ms
        integer(c_int),         intent(in)  :: n_qubits
        integer(c_int),         intent(in)  :: n_protons, n_neutrons
        integer,                intent(in)  :: excitation_rank
        integer,                intent(in)  :: n_sp
        integer(c_int),         intent(in)  :: j_target_2
        ! Singles outputs (populated when excitation_rank == 1 or 3)
        integer(c_int), allocatable, intent(out) :: ranked_pool_s(:,:)
        integer,                     intent(out) :: n_kept_s
        real(8),        allocatable, intent(out) :: angles_s(:)
        ! Doubles outputs (populated when excitation_rank == 2 or 3)
        integer(c_int), allocatable, intent(out) :: ranked_pool_d(:,:)
        integer,                     intent(out) :: n_kept_d
        real(8),        allocatable, intent(out) :: angles_d(:)

        integer(c_int) :: raw_size, n_filt
        integer :: raw_d_size
        integer(c_int), allocatable :: raw_s(:,:), filt_s(:,:)
        integer(c_int), allocatable :: raw_d(:,:), filt_d(:,:)
        real(8),        allocatable :: w_s(:), w_d(:)

        n_kept_s = 0
        n_kept_d = 0
        allocate(ranked_pool_s(0,2), angles_s(0))
        allocate(ranked_pool_d(0,4), angles_d(0))

        if (excitation_rank == 1 .or. excitation_rank == 3) then
            call create_ph_excitation_pool(n_qubits, n_protons, n_neutrons, &
                                           raw_size, raw_s)
            call filter_singles_by_symmetry(raw_s, raw_size, j_target_2, filt_s, n_filt)
            n_kept_s = int(n_filt)
            if (n_kept_s > 0) then
                call rank_singles_pool_pt2(ms, filt_s, n_kept_s, n_sp, ranked_pool_s, w_s)
                call seed_singles_angles(ms, ranked_pool_s, n_kept_s, n_sp, angles_s)
            end if
        end if

        if (excitation_rank == 2 .or. excitation_rank == 3) then
            call create_2p2h_excitation_pool(n_qubits, n_protons, n_neutrons, &
                                             raw_d_size, raw_d)
            call filter_doubles_by_symmetry(raw_d, int(raw_d_size, c_int), j_target_2, filt_d, n_filt)
            n_kept_d = int(n_filt)
            if (n_kept_d > 0) then
                call rank_doubles_pool_pt2(ms, filt_d, n_kept_d, n_sp, ranked_pool_d, w_d)
                call seed_doubles_angles(ms, ranked_pool_d, n_kept_d, n_sp, angles_d)
            end if
        end if

    end subroutine build_ranked_pool

end module nuclear_pool
