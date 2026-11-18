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

!> @brief Nuclear ansatz creation module
!>
!> Provides subroutines for creating fixed-parameter quantum circuits for
!> nuclear structure calculations. Implements a Hartree-Fock reference state
!> followed by CG-filtered particle-hole Givens rotations at fixed theta.
module nuclear_ansatz
  use iso_c_binding
  use qiskit_circuit
  use orbital_registry, only: init_registry_sd_shell, init_registry_from_file, &
                               reg_is_occupied, &
                               reg_proton_holes, reg_proton_virtuals, &
                               reg_neutron_holes, reg_neutron_virtuals
  implicit none
  private

  real(c_double), parameter :: PI   = 3.14159265358979323846_c_double
  real(c_double), parameter :: PI_2 = 1.57079632679489661923_c_double  ! π/2

  public :: create_hf_reference
  public :: add_givens_layer
  public :: add_double_excitation_layer
  public :: create_ph_excitation_pool
  public :: create_2p2h_excitation_pool
  public :: finalize_ansatz

contains

  !> @brief Initialize circuit with Hartree-Fock reference state
  !>
  !> Creates the HF reference state by applying X gates to occupy the lowest
  !> energy orbitals for protons and neutrons. In the nuclear shell model,
  !> the HF state represents the ground state configuration where nucleons
  !> fill orbitals from lowest to highest energy according to the Pauli
  !> exclusion principle.
  !>
  !> NOTE: This subroutine ONLY initializes the HF reference state.
  !> Measurement should be added separately after all Givens layers are appended.
  !>
  !> Typical workflow:
  !>   1. Create HF reference: call create_hf_reference(circuit, 24, 4, 4)
  !>   2. Add Givens layers: call add_givens_layer(circuit, 0, 6, 0.1d0)
  !>   3. Finalize with measurement: call finalize_ansatz(circuit)
  !>
  !> Qubit mapping (determined by USDB.snt file structure):
  !>   - Proton orbitals come first (tz=-1 entries in USDB.snt)
  !>   - Neutron orbitals follow (tz=+1 entries in USDB.snt)
  !>   - Each j-shell expanded into m-substates in descending mj order
  !>   - |0⟩ = empty orbital, |1⟩ = occupied orbital
  !>
  !> @param circuit The quantum circuit to initialize
  !> @param n_qubits Total number of qubits (must equal n_protons + n_neutrons)
  !> @param n_protons Number of protons (occupied proton orbitals)
  !> @param n_neutrons Number of neutrons (occupied neutron orbitals)
  !> @param snt_file Optional: .snt filename to load (default: "USDB.snt" for sd-shell).
  !>        Pass "GXPF1A.snt" for pf-shell. When omitted the registry is re-initialised
  !>        with USDB.snt, which is correct for sd-shell but wrong for other shells.
  subroutine create_hf_reference(circuit, n_qubits, n_protons, n_neutrons, snt_file)
    type(QuantumCircuit), intent(inout) :: circuit
    integer(c_int), intent(in) :: n_qubits
    integer(c_int), intent(in) :: n_protons
    integer(c_int), intent(in) :: n_neutrons
    character(len=*), intent(in), optional :: snt_file

    integer :: i

    if (n_protons < 0 .or. n_neutrons < 0) &
      error stop "[nuclear_ansatz] create_hf_reference: negative particle count"
    if (n_protons + n_neutrons > n_qubits) &
      error stop "[nuclear_ansatz] create_hf_reference: n_protons + n_neutrons exceeds n_qubits"

    ! Populate the registry with the HF occupation pattern for this system.
    if (present(snt_file)) then
      call init_registry_from_file(trim(snt_file), n_protons, n_neutrons)
    else
      call init_registry_sd_shell(n_protons, n_neutrons)
    end if

    call circuit%init(n_qubits, n_qubits)

    ! Apply X to every qubit the registry marks as HF-occupied.
    do i = 0, n_qubits - 1
      if (reg_is_occupied(i)) call circuit%x(i)
    end do

  end subroutine create_hf_reference

  !> @brief Finalize the ansatz by adding measurements to all qubits
  !>
  !> This should be called after the HF reference state is created
  !> and all Givens layers have been appended. Provides a clean
  !> separation between ansatz construction and measurement.
  !>
  !> Example workflow:
  !>   ! 1. Create HF reference
  !>   call create_hf_reference(circuit, 24, 4, 4)
  !>   ! 2. Add Givens layers
  !>   call add_givens_layer(circuit, 0, 6, 0.1d0)
  !>   call add_givens_layer(circuit, 1, 7, 0.1d0)
  !>   ! 3. Finalize with measurement
  !>   call finalize_ansatz(circuit)
  !>
  !> @param circuit The quantum circuit to finalize
  subroutine finalize_ansatz(circuit)
    type(QuantumCircuit), intent(inout) :: circuit
    
    ! Add measurement to all qubits
    call circuit%measure_all()
    
  end subroutine finalize_ansatz

  !> @brief Add a particle-conserving Givens rotation layer
  !>
  !> Implements a NUMBER-CONSERVING particle-hole excitation operator using
  !> Givens rotations. The gate sequence implements the unitary: exp(θ(a†b - b†a))
  !> where a† creates a particle in orbital a and b annihilates in orbital b.
  !>
  !> Physical interpretation:
  !>   - Excites a nucleon from occupied orbital (hole) to virtual orbital (particle)
  !>   - The parameter θ is fixed at call time from the two-level mixing formula
  !>   - CRITICALLY: This gate CONSERVES particle number by only mixing |01⟩ ↔ |10⟩
  !>
  !> Particle number conservation:
  !>   - The gate acts ONLY on the |01⟩ and |10⟩ subspace (single particle states)
  !>   - States |00⟩ (no particles) and |11⟩ (two particles) remain unchanged
  !>   - This ensures the total particle number is preserved throughout evolution
  !>
  !> Gate decomposition (since controlled-RY is not available):
  !>   The standard number-conserving decomposition is:
  !>     CNOT(b->a) - CRY(θ, a->b) - CNOT(b->a)
  !>
  !>   Since CRY is not available, we decompose it as:
  !>     1. CNOT(b->a)
  !>     2. RY(θ/2) on qubit_b
  !>     3. CNOT(a->b)
  !>     4. RY(-θ/2) on qubit_b
  !>     5. CNOT(a->b)
  !>     6. CNOT(b->a)
  !>
  !> Verification:
  !>   The resulting 4×4 unitary in the {|00⟩, |01⟩, |10⟩, |11⟩} basis is:
  !>     [1   0      0     0  ]
  !>     [0  cos(θ) sin(θ) 0  ]
  !>     [0 -sin(θ) cos(θ) 0  ]
  !>     [0   0      0     1  ]
  !>   This is block-diagonal, confirming particle number conservation.
  !>
  !> @param circuit The quantum circuit to add the layer to
  !> @param qubit_a First qubit index (typically the hole orbital)
  !> @param qubit_b Second qubit index (typically the particle orbital)
  !> @param theta Rotation angle parameter (in radians)
  subroutine add_givens_layer(circuit, qubit_a, qubit_b, theta)
    type(QuantumCircuit), intent(inout) :: circuit
    integer(c_int), intent(in) :: qubit_a
    integer(c_int), intent(in) :: qubit_b
    real(c_double), intent(in) :: theta
    
    ! Validate qubit indices
    if (qubit_a < 0 .or. qubit_b < 0) then
      error stop "[nuclear_ansatz] add_givens_layer: qubit indices must be non-negative"
    end if
    
    if (qubit_a == qubit_b) then
      error stop "[nuclear_ansatz] add_givens_layer: qubit_a and qubit_b must be different"
    end if
    
    ! Implement particle-conserving Givens rotation for particle-hole excitation
    ! This decomposition ensures particle number is conserved by only mixing
    ! |01⟩ <-> |10⟩ states while leaving |00⟩ and |11⟩ unchanged.
    
    call circuit%cx(qubit_b, qubit_a)                      ! 1. basis change
    call circuit%ry(theta / 2.0_c_double, qubit_b)        ! 2. first half-rotation
    call circuit%cx(qubit_a, qubit_b)                      ! 3. entangle
    call circuit%ry(-theta / 2.0_c_double, qubit_b)       ! 4. second half-rotation
    call circuit%cx(qubit_a, qubit_b)                      ! 5. disentangle
    call circuit%cx(qubit_b, qubit_a)                      ! 6. restore basis
    
  end subroutine add_givens_layer

  !> @brief Generate CG-filtered particle-hole excitation pairs for the fixed ansatz
  !>
  !> Enumerates all valid particle-hole excitation pairs. The caller is expected
  !> to pass the result through filter_excitations_by_j (clebsch_gordan) before
  !> building the circuit, reducing the 40-pair full pool to the 16 J=0-coupled
  !> pairs used in the fixed ansatz (confirmed at runtime for 2p+2n sd-shell).
  !>
  !> Excitation rules:
  !>   - Proton excitations: occupied proton orbitals -> virtual proton orbitals
  !>   - Neutron excitations: occupied neutron orbitals -> virtual neutron orbitals
  !>   - No cross-species excitations (proton->neutron or vice versa)
  !>
  !> @param n_qubits Total number of qubits in the system
  !> @param n_protons Number of occupied proton orbitals
  !> @param n_neutrons Number of occupied neutron orbitals
  !> @param pool_size Output: number of excitation pairs in the pool
  !> @param pool_pairs Output: allocated array of (hole, particle) pairs
  subroutine create_ph_excitation_pool(n_qubits, n_protons, n_neutrons, pool_size, pool_pairs)
    integer(c_int), intent(in)  :: n_qubits
    integer(c_int), intent(in)  :: n_protons
    integer(c_int), intent(in)  :: n_neutrons
    integer(c_int), intent(out) :: pool_size
    integer(c_int), allocatable, intent(inout) :: pool_pairs(:,:)

    integer, allocatable :: p_holes(:), p_virts(:), n_holes(:), n_virts(:)
    integer :: n_ph, n_nv, n_pv, n_nn
    integer(c_int), allocatable :: tmp(:,:)
    integer :: idx, h, v

    if (n_qubits < 0 .or. n_protons < 0 .or. n_neutrons < 0) &
      error stop "[nuclear_ansatz] create_ph_excitation_pool: negative parameter"
    if (n_protons + n_neutrons > n_qubits) &
      error stop "[nuclear_ansatz] create_ph_excitation_pool: n_protons + n_neutrons > n_qubits"

    ! Registry must be initialised before this call; create_hf_reference does that.
    ! Pull hole/virtual index lists from the single source of truth.
    call reg_proton_holes(p_holes, n_ph)
    call reg_proton_virtuals(p_virts, n_pv)
    call reg_neutron_holes(n_holes, n_nv)
    call reg_neutron_virtuals(n_virts, n_nn)

    pool_size = n_ph * n_pv + n_nv * n_nn

    ! Use local tmp + move_alloc
    allocate(tmp(pool_size, 2))
    idx = 1

    do h = 1, n_ph
      do v = 1, n_pv
        tmp(idx, 1) = int(p_holes(h), c_int)
        tmp(idx, 2) = int(p_virts(v), c_int)
        idx = idx + 1
      end do
    end do

    do h = 1, n_nv
      do v = 1, n_nn
        tmp(idx, 1) = int(n_holes(h), c_int)
        tmp(idx, 2) = int(n_virts(v), c_int)
        idx = idx + 1
      end do
    end do

    if (allocated(pool_pairs)) deallocate(pool_pairs)
    call move_alloc(tmp, pool_pairs)

  end subroutine create_ph_excitation_pool

  !> @brief Add a two-body double-excitation layer (Jordan-Wigner, 8-CNOT construction)
  !>
  !> Implements exp(θ·(a†_p a†_q a_s a_r − h.c.)) via the Barkoutsos et al. 2018
  !> efficient circuit: 8 Pauli-string exponentials sharing one CNOT backbone,
  !> giving 14 CNOTs + 6 H + 8 RY = 28 gates total.
  !>
  !> Under Jordan-Wigner the anti-Hermitian double-excitation generator expands into
  !> exactly 8 Pauli strings of weight ≤ max(s−p+1, ...) in the JW ordering.
  !> All 8 share the same CNOT backbone; the efficient construction interleaves the
  !> 8 RZ rotations along that backbone rather than building 8 independent ladders.
  !>
  !> Circuit acts non-trivially only in the {|0011⟩, |1100⟩} subspace of qubits
  !> (p,q,r,s)  -  the two-body analogue of the Givens rotation used for singles.
  !>
  !> Gate set: {CX, RZ, H, S, S†}   -  all available on QuantumCircuit.
  !>
  !> Qubit ordering convention: p < q are the creation indices (virtual),
  !> r < s are the annihilation indices (hole).  The caller is responsible for
  !> ensuring all four indices are distinct.
  !>
  !> @param circuit  The quantum circuit to add the layer to
  !> @param qp       Qubit index for creation operator a†_p  (virtual 1, smaller index)
  !> @param qq       Qubit index for creation operator a†_q  (virtual 2, larger index)
  !> @param qr       Qubit index for annihilation operator a_r (hole 1, smaller index)
  !> @param qs       Qubit index for annihilation operator a_s (hole 2, larger index)
  !> @param theta    Rotation angle (radians); seeded from exact two-level formula
  subroutine add_double_excitation_layer(circuit, qp, qq, qr, qs, theta)
    type(QuantumCircuit), intent(inout) :: circuit
    integer(c_int),       intent(in)    :: qp, qq, qr, qs
    real(c_double),       intent(in)    :: theta

    real(c_double) :: t8

    if (qp == qq .or. qp == qr .or. qp == qs .or. &
        qq == qr .or. qq == qs .or. qr == qs) &
      error stop "[nuclear_ansatz] add_double_excitation_layer: indices not all distinct"

    ! Double-excitation gate: Whitfield, Biamonte & Aspuru-Guzik (2011), Table 3;
    ! efficient 14-CNOT decomposition from Barkoutsos et al. Phys. Rev. A 98, 022322 (2018).
    !
    ! Implements exp(θ(a†_p a†_q a_s a_r − h.c.)) in the qubit-excitation (QEB)
    ! approximation  -  Jordan-Wigner Z-strings are dropped, so this is exact for
    ! adjacent qubits (qr,qs adjacent and qp,qq adjacent) and approximate otherwise.
    ! For the sd-shell orbital layout (proton+neutron blocks), orbital pairs within
    ! each isospin block are always adjacent, so pp and nn doubles are exact;
    ! pn doubles carry a residual Z-string error.
    !
    ! Wire ordering: wires = (qr, qs, qp, qq)  -  holes then particles.
    ! This matches the PennyLane DoubleExcitation decomposition with:
    !   wires[0]=qr, wires[1]=qs, wires[2]=qp, wires[3]=qq
    !
    ! Gate count: 14 CX + 6 H + 8 RY = 28 instructions total.
    ! The 8 RY angles are all +/-θ/8; signs follow the 8-Pauli-string pattern
    ! of the JW decomposition of G_pqrs.
    t8 = theta / 8.0_c_double

    call circuit%cx(qp, qq)
    call circuit%cx(qr, qp)
    call circuit%h(qq)
    call circuit%h(qr)
    call circuit%cx(qp, qq)
    call circuit%cx(qr, qs)
    call circuit%ry( t8, qs)
    call circuit%ry(-t8, qr)
    call circuit%cx(qr, qq)
    call circuit%h(qq)
    call circuit%cx(qq, qs)
    call circuit%ry( t8, qs)
    call circuit%ry(-t8, qr)
    call circuit%cx(qp, qs)
    call circuit%cx(qp, qr)
    call circuit%ry(-t8, qs)
    call circuit%ry( t8, qr)
    call circuit%cx(qq, qs)
    call circuit%h(qq)
    call circuit%cx(qr, qq)
    call circuit%ry(-t8, qs)
    call circuit%ry( t8, qr)
    call circuit%cx(qr, qs)
    call circuit%cx(qp, qr)
    call circuit%h(qr)
    call circuit%h(qq)
    call circuit%cx(qr, qp)
    call circuit%cx(qp, qq)

  end subroutine add_double_excitation_layer

  !> @brief Generate 2p2h double-excitation pool
  !>
  !> Enumerates all valid two-particle two-hole excitation quadruples:
  !>   - Proton-proton doubles: (h1,h2) → (v1,v2), both holes and both virtuals proton
  !>   - Neutron-neutron doubles: same within neutron sector
  !>   - Proton-neutron doubles: one proton hole, one neutron hole; one proton virtual, one neutron virtual
  !>
  !> Returns pool_quads(pool_size, 4): columns are (h1, h2, v1, v2), all 0-based qubit indices.
  !> Convention: h1 < h2, v1 < v2 (canonical ordering within each pair).
  !>
  !> The caller should pass the result through filter_doubles_by_j before building circuits.
  !>
  !> @param n_qubits   Total number of qubits
  !> @param n_protons  Number of occupied proton orbitals
  !> @param n_neutrons Number of occupied neutron orbitals
  !> @param pool_size  Output: number of quadruples
  !> @param pool_quads Output: allocated array of (h1,h2,v1,v2) quadruples
  subroutine create_2p2h_excitation_pool(n_qubits, n_protons, n_neutrons, pool_size, pool_quads)
    integer(c_int), intent(in)  :: n_qubits, n_protons, n_neutrons
    integer(c_int), intent(out) :: pool_size
    integer(c_int), allocatable, intent(inout) :: pool_quads(:,:)

    integer, allocatable :: ph(:), pv(:), nh(:), nv(:)
    integer :: n_ph, n_pv, n_nh, n_nv
    integer :: n_pp, n_nn, n_pn, idx
    integer :: h1, h2, v1, v2
    integer(c_int), allocatable :: tmp(:,:)

    if (n_qubits < 0 .or. n_protons < 0 .or. n_neutrons < 0) &
      error stop "[nuclear_ansatz] create_2p2h_excitation_pool: negative parameter"

    call reg_proton_holes(ph, n_ph)
    call reg_proton_virtuals(pv, n_pv)
    call reg_neutron_holes(nh, n_nh)
    call reg_neutron_virtuals(nv, n_nv)

    ! pp doubles: C(n_ph,2) * C(n_pv,2)
    n_pp = (n_ph*(n_ph-1)/2) * (n_pv*(n_pv-1)/2)
    ! nn doubles: C(n_nh,2) * C(n_nv,2)
    n_nn = (n_nh*(n_nh-1)/2) * (n_nv*(n_nv-1)/2)
    ! pn doubles: n_ph * n_nh * n_pv * n_nv
    n_pn = n_ph * n_nh * n_pv * n_nv

    pool_size = n_pp + n_nn + n_pn
    allocate(tmp(pool_size, 4))
    idx = 1

    ! Proton-proton doubles
    do h1 = 1, n_ph - 1
      do h2 = h1 + 1, n_ph
        do v1 = 1, n_pv - 1
          do v2 = v1 + 1, n_pv
            tmp(idx, 1) = int(ph(h1), c_int)
            tmp(idx, 2) = int(ph(h2), c_int)
            tmp(idx, 3) = int(pv(v1), c_int)
            tmp(idx, 4) = int(pv(v2), c_int)
            idx = idx + 1
          end do
        end do
      end do
    end do

    ! Neutron-neutron doubles
    do h1 = 1, n_nh - 1
      do h2 = h1 + 1, n_nh
        do v1 = 1, n_nv - 1
          do v2 = v1 + 1, n_nv
            tmp(idx, 1) = int(nh(h1), c_int)
            tmp(idx, 2) = int(nh(h2), c_int)
            tmp(idx, 3) = int(nv(v1), c_int)
            tmp(idx, 4) = int(nv(v2), c_int)
            idx = idx + 1
          end do
        end do
      end do
    end do

    ! Proton-neutron doubles
    do h1 = 1, n_ph
      do h2 = 1, n_nh
        do v1 = 1, n_pv
          do v2 = 1, n_nv
            tmp(idx, 1) = int(ph(h1), c_int)
            tmp(idx, 2) = int(nh(h2), c_int)
            tmp(idx, 3) = int(pv(v1), c_int)
            tmp(idx, 4) = int(nv(v2), c_int)
            idx = idx + 1
          end do
        end do
      end do
    end do

    if (allocated(pool_quads)) deallocate(pool_quads)
    call move_alloc(tmp, pool_quads)

  end subroutine create_2p2h_excitation_pool

end module nuclear_ansatz
