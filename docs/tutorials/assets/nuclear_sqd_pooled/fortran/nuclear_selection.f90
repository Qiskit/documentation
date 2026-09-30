! This code is part of Qiskit.
!
! (C) Copyright IBM 2026.
!
! This code is licensed under the Apache License, Version 2.0. You may
! obtain a copy of this license in the LICENSE.txt file in the root directory
! of this source tree or at https://www.apache.org/licenses/LICENSE-2.0.
!
! nuclear_selection  -  ranked-partition operator selection.
!
! Public API:
!
!   select_singles_slice(ranked_pool, n_pool, circuit_index, subset_size,
!                        layer_ops, layer_size [, max_depth])
!
!   select_doubles_slice(ranked_pool, n_pool, circuit_index, subset_size,
!                        layer_ops, layer_size [, max_depth] [, depth_already_used])
!
!     Both return the consecutive slice of operators starting at position
!       s = mod((circuit_index - 1) * subset_size, n_pool)
!     and taking min(subset_size, n_pool) entries, wrapping at pool end.
!     If max_depth > 0, the slice is further truncated so that
!       layer_size * gate_cost <= max_depth (after subtracting depth_already_used
!       for doubles, which accounts for gates already placed by the singles layer).
!
!     Singles: ranked_pool is (n,2), gate cost 6 (Givens rotation).
!     Doubles: ranked_pool is (n,4), gate cost 28 (QEB gate).
!
! Note: A single generic interface (select_ranked_slice) is NOT provided because
! Fortran generic resolution requires TKR distinctness on required dummy arguments.
! Both procedures have identical TKR at every required position (rank-2 integer(c_int)
! pool, scalar integer counts), so overloading would be non-conforming and
! compiler-dependent.  Callers use the named procedures directly.

module nuclear_selection
    use iso_c_binding
    implicit none
    private

    public :: select_singles_slice
    public :: select_doubles_slice

contains

    subroutine select_singles_slice(ranked_pool, n_pool, circuit_index, subset_size, &
                                    layer_ops, layer_size, max_depth)
        integer(c_int), intent(in)               :: ranked_pool(:,:)   ! (n,2)
        integer,        intent(in)               :: n_pool
        integer,        intent(in)               :: circuit_index       ! 1-based
        integer,        intent(in)               :: subset_size
        integer(c_int), allocatable, intent(out) :: layer_ops(:,:)
        integer,        intent(out)              :: layer_size
        integer,        intent(in), optional     :: max_depth           ! gate budget

        integer, parameter :: GATE_COST = 6
        integer :: s, k, sz

        if (n_pool <= 0) then
            layer_size = 0
            allocate(layer_ops(0, 2))
            return
        end if

        s  = mod((circuit_index - 1) * subset_size, n_pool)
        sz = min(subset_size, n_pool)
        if (present(max_depth) .and. max_depth > 0) sz = min(sz, max_depth / GATE_COST)
        layer_size = sz
        allocate(layer_ops(layer_size, 2))
        do k = 1, layer_size
            layer_ops(k, :) = ranked_pool(mod(s + k - 1, n_pool) + 1, :)
        end do
    end subroutine select_singles_slice

    subroutine select_doubles_slice(ranked_pool, n_pool, circuit_index, subset_size, &
                                    layer_ops, layer_size, max_depth, depth_already_used)
        integer(c_int), intent(in)               :: ranked_pool(:,:)   ! (n,4)
        integer,        intent(in)               :: n_pool
        integer,        intent(in)               :: circuit_index       ! 1-based
        integer,        intent(in)               :: subset_size
        integer(c_int), allocatable, intent(out) :: layer_ops(:,:)
        integer,        intent(out)              :: layer_size
        integer,        intent(in), optional     :: max_depth           ! gate budget
        integer,        intent(in), optional     :: depth_already_used  ! consumed by singles

        integer, parameter :: GATE_COST = 28
        integer :: s, k, sz, budget_left

        if (n_pool <= 0) then
            layer_size = 0
            allocate(layer_ops(0, 4))
            return
        end if

        s  = mod((circuit_index - 1) * subset_size, n_pool)
        sz = min(subset_size, n_pool)
        if (present(max_depth) .and. max_depth > 0) then
            budget_left = max_depth
            if (present(depth_already_used)) budget_left = budget_left - depth_already_used
            sz = min(sz, max(0, budget_left) / GATE_COST)
        end if
        layer_size = sz
        allocate(layer_ops(layer_size, 4))
        do k = 1, layer_size
            layer_ops(k, :) = ranked_pool(mod(s + k - 1, n_pool) + 1, :)
        end do
    end subroutine select_doubles_slice

end module nuclear_selection
