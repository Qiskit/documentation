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

module orbital_registry
  use iso_c_binding
  use usdb_reader, only: model_space_data, orbital_info, read_usdb_file, free_model_space
  implicit none
  private

  public :: init_registry_from_snt
  public :: init_registry_from_file
  public :: init_registry_sd_shell
  public :: reg_n_qubits
  public :: reg_j2
  public :: reg_mj2
  public :: reg_parity
  public :: reg_tz
  public :: reg_is_occupied
  public :: reg_proton_holes
  public :: reg_proton_virtuals
  public :: reg_neutron_holes
  public :: reg_neutron_virtuals

  integer :: n_reg = 0
  integer, allocatable :: tbl_j2(:)
  integer, allocatable :: tbl_mj2(:)
  integer, allocatable :: tbl_parity(:)
  integer, allocatable :: tbl_tz(:)
  real(8), allocatable :: tbl_spe(:)
  logical, allocatable :: tbl_occupied(:)

contains

  subroutine init_registry_from_snt(ms, n_protons, n_neutrons)
    type(model_space_data), intent(in) :: ms
    integer(c_int),         intent(in) :: n_protons, n_neutrons

    integer :: orb, m2, qubit

    n_reg = 0
    do orb = 1, ms%n_orbitals
      n_reg = n_reg + ms%orbitals(orb)%j2 + 1
    end do

    call alloc_tables(n_reg)

    qubit = 1
    do orb = 1, ms%n_orbitals
      if (ms%orbitals(orb)%tz /= -1) cycle
      do m2 = ms%orbitals(orb)%j2, -ms%orbitals(orb)%j2, -2
        tbl_j2(qubit)     = ms%orbitals(orb)%j2
        tbl_mj2(qubit)    = m2
        tbl_parity(qubit) = mod(ms%orbitals(orb)%l, 2)
        tbl_tz(qubit)     = -1
        tbl_spe(qubit)    = ms%spes(ms%orbitals(orb)%idx)
        qubit = qubit + 1
      end do
    end do

    do orb = 1, ms%n_orbitals
      if (ms%orbitals(orb)%tz /= 1) cycle
      do m2 = ms%orbitals(orb)%j2, -ms%orbitals(orb)%j2, -2
        tbl_j2(qubit)     = ms%orbitals(orb)%j2
        tbl_mj2(qubit)    = m2
        tbl_parity(qubit) = mod(ms%orbitals(orb)%l, 2)
        tbl_tz(qubit)     = 1
        tbl_spe(qubit)    = ms%spes(ms%orbitals(orb)%idx)
        qubit = qubit + 1
      end do
    end do

    ! Fill lowest-SPE +/-mj pairs per species to keep Jz=0.
    tbl_occupied = .false.
    block
      integer :: q, qp, cnt, best_q, best_qp
      real(8) :: best_spe
      integer :: best_mj2abs
      logical, allocatable :: used(:)
      allocate(used(n_reg))
      used = .false.

      cnt = 0
      do while (cnt < n_protons)
        best_q  = -1; best_qp = -1
        best_spe = huge(1.0d0); best_mj2abs = huge(1)
        do q = 1, n_reg
          if (tbl_tz(q) /= -1 .or. used(q) .or. tbl_mj2(q) <= 0) cycle
          do qp = 1, n_reg
            if (tbl_tz(qp) /= -1 .or. used(qp)) cycle
            if (tbl_j2(qp) == tbl_j2(q) .and. tbl_mj2(qp) == -tbl_mj2(q) .and. &
                abs(tbl_spe(qp) - tbl_spe(q)) < 1.0d-10) then
              if (tbl_spe(q) < best_spe .or. &
                  (abs(tbl_spe(q) - best_spe) < 1.0d-10 .and. tbl_mj2(q) < best_mj2abs)) then
                best_spe = tbl_spe(q); best_mj2abs = tbl_mj2(q)
                best_q = q; best_qp = qp
              end if
              exit
            end if
          end do
        end do
        if (best_q < 0) exit
        tbl_occupied(best_q) = .true.; tbl_occupied(best_qp) = .true.
        used(best_q) = .true.; used(best_qp) = .true.
        cnt = cnt + 2
      end do

      cnt = 0
      do while (cnt < n_neutrons)
        best_q  = -1; best_qp = -1
        best_spe = huge(1.0d0); best_mj2abs = huge(1)
        do q = 1, n_reg
          if (tbl_tz(q) /= 1 .or. used(q) .or. tbl_mj2(q) <= 0) cycle
          do qp = 1, n_reg
            if (tbl_tz(qp) /= 1 .or. used(qp)) cycle
            if (tbl_j2(qp) == tbl_j2(q) .and. tbl_mj2(qp) == -tbl_mj2(q) .and. &
                abs(tbl_spe(qp) - tbl_spe(q)) < 1.0d-10) then
              if (tbl_spe(q) < best_spe .or. &
                  (abs(tbl_spe(q) - best_spe) < 1.0d-10 .and. tbl_mj2(q) < best_mj2abs)) then
                best_spe = tbl_spe(q); best_mj2abs = tbl_mj2(q)
                best_q = q; best_qp = qp
              end if
              exit
            end if
          end do
        end do
        if (best_q < 0) exit
        tbl_occupied(best_q) = .true.; tbl_occupied(best_qp) = .true.
        used(best_q) = .true.; used(best_qp) = .true.
        cnt = cnt + 2
      end do

      deallocate(used)
    end block

    block
      integer :: q, fp, fn
      fp = 0; fn = 0
      do q = 1, n_reg
        if (tbl_tz(q) == -1 .and. tbl_occupied(q)) fp = fp + 1
        if (tbl_tz(q) ==  1 .and. tbl_occupied(q)) fn = fn + 1
      end do
      if (fp /= n_protons) then
        write(*,'(a,i0,a,i0,a)') &
            "orbital_registry: requested ", n_protons, &
            " protons but filled ", fp, &
            "! exceeds model-space capacity or odd count (Jz=0 requires even)"
        error stop
      end if
      if (fn /= n_neutrons) then
        write(*,'(a,i0,a,i0,a)') &
            "orbital_registry: requested ", n_neutrons, &
            " neutrons but filled ", fn, &
            "! exceeds model-space capacity or odd count (Jz=0 requires even)"
        error stop
      end if
    end block

  end subroutine init_registry_from_snt

  ! Load a .snt file by name and initialise the registry.
  ! Prefer this over init_registry_sd_shell when the filename is not "USDB.snt"
  ! (e.g. a pf-shell interaction such as "GXPF1A.snt").
  subroutine init_registry_from_file(snt_filename, n_protons, n_neutrons)
    character(len=*), intent(in) :: snt_filename
    integer(c_int),   intent(in) :: n_protons, n_neutrons

    type(model_space_data) :: ms
    integer :: status

    call read_usdb_file(snt_filename, ms, status)
    if (status /= 0) then
      write(*,'(a,a,a)') "orbital_registry: could not load ", trim(snt_filename), "  -  check path"
      error stop
    end if
    call init_registry_from_snt(ms, n_protons, n_neutrons)
    call free_model_space(ms)

  end subroutine init_registry_from_file

  subroutine init_registry_sd_shell(n_protons, n_neutrons)
    integer(c_int), intent(in) :: n_protons, n_neutrons
    call init_registry_from_file("USDB.snt", n_protons, n_neutrons)
  end subroutine init_registry_sd_shell

  integer function reg_n_qubits()
    reg_n_qubits = n_reg
  end function reg_n_qubits

  integer function reg_j2(qubit_0)
    integer, intent(in) :: qubit_0
    reg_j2 = tbl_j2(qubit_0 + 1)
  end function reg_j2

  integer function reg_mj2(qubit_0)
    integer, intent(in) :: qubit_0
    reg_mj2 = tbl_mj2(qubit_0 + 1)
  end function reg_mj2

  integer function reg_parity(qubit_0)
    integer, intent(in) :: qubit_0
    reg_parity = tbl_parity(qubit_0 + 1)
  end function reg_parity

  integer function reg_tz(qubit_0)
    integer, intent(in) :: qubit_0
    reg_tz = tbl_tz(qubit_0 + 1)
  end function reg_tz

  logical function reg_is_occupied(qubit_0)
    integer, intent(in) :: qubit_0
    reg_is_occupied = tbl_occupied(qubit_0 + 1)
  end function reg_is_occupied

  subroutine reg_proton_holes(holes, n)
    integer, allocatable, intent(out) :: holes(:)
    integer,              intent(out) :: n
    integer :: q, cnt
    cnt = 0
    do q = 1, n_reg
      if (tbl_tz(q) == -1 .and. tbl_occupied(q)) cnt = cnt + 1
    end do
    n = cnt
    allocate(holes(n))
    cnt = 0
    do q = 1, n_reg
      if (tbl_tz(q) == -1 .and. tbl_occupied(q)) then
        cnt = cnt + 1
        holes(cnt) = q - 1
      end if
    end do
  end subroutine reg_proton_holes

  subroutine reg_proton_virtuals(virts, n)
    integer, allocatable, intent(out) :: virts(:)
    integer,              intent(out) :: n
    integer :: q, cnt
    cnt = 0
    do q = 1, n_reg
      if (tbl_tz(q) == -1 .and. .not. tbl_occupied(q)) cnt = cnt + 1
    end do
    n = cnt
    allocate(virts(n))
    cnt = 0
    do q = 1, n_reg
      if (tbl_tz(q) == -1 .and. .not. tbl_occupied(q)) then
        cnt = cnt + 1
        virts(cnt) = q - 1
      end if
    end do
  end subroutine reg_proton_virtuals

  subroutine reg_neutron_holes(holes, n)
    integer, allocatable, intent(out) :: holes(:)
    integer,              intent(out) :: n
    integer :: q, cnt
    cnt = 0
    do q = 1, n_reg
      if (tbl_tz(q) == 1 .and. tbl_occupied(q)) cnt = cnt + 1
    end do
    n = cnt
    allocate(holes(n))
    cnt = 0
    do q = 1, n_reg
      if (tbl_tz(q) == 1 .and. tbl_occupied(q)) then
        cnt = cnt + 1
        holes(cnt) = q - 1
      end if
    end do
  end subroutine reg_neutron_holes

  subroutine reg_neutron_virtuals(virts, n)
    integer, allocatable, intent(out) :: virts(:)
    integer,              intent(out) :: n
    integer :: q, cnt
    cnt = 0
    do q = 1, n_reg
      if (tbl_tz(q) == 1 .and. .not. tbl_occupied(q)) cnt = cnt + 1
    end do
    n = cnt
    allocate(virts(n))
    cnt = 0
    do q = 1, n_reg
      if (tbl_tz(q) == 1 .and. .not. tbl_occupied(q)) then
        cnt = cnt + 1
        virts(cnt) = q - 1
      end if
    end do
  end subroutine reg_neutron_virtuals

  subroutine alloc_tables(n)
    integer, intent(in) :: n
    if (allocated(tbl_j2))       deallocate(tbl_j2)
    if (allocated(tbl_mj2))      deallocate(tbl_mj2)
    if (allocated(tbl_parity))   deallocate(tbl_parity)
    if (allocated(tbl_tz))       deallocate(tbl_tz)
    if (allocated(tbl_spe))      deallocate(tbl_spe)
    if (allocated(tbl_occupied)) deallocate(tbl_occupied)
    allocate(tbl_j2(n), tbl_mj2(n), tbl_parity(n), tbl_tz(n), tbl_spe(n), tbl_occupied(n))
    tbl_occupied = .false.
    tbl_spe = 0.0d0
  end subroutine alloc_tables

end module orbital_registry
