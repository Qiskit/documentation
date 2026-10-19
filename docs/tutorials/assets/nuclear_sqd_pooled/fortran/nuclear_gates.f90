! This code is part of Qiskit.
!
! (C) Copyright IBM 2026.
!
! This code is licensed under the Apache License, Version 2.0. You may
! obtain a copy of this license in the LICENSE.txt file in the root directory
! of this source tree or at https://www.apache.org/licenses/LICENSE-2.0.
!
! nuclear_gates  -  gate primitives for the nuclear circuit ansatz.
!
! Both excitation arities are available from one location under stable names.
! A caller assembling a custom ansatz needs only this module.
!
! Public API:
!
!   create_hf_reference(circuit, n_qubits, n_protons, n_neutrons)
!     Initialise |HF⟩ by placing X gates on the lowest-SPE occupied orbitals.
!
!   add_single_excitation(circuit, hole_qubit, virtual_qubit, theta)
!     Append a Givens rotation exp(θ(a†_v a_h − h.c.)) to circuit.
!     Gate decomposition: 4 CX + 2 RY = 6 gates.  Particle number conserved exactly.
!
!   add_double_excitation(circuit, h1, h2, v1, v2, theta)
!     Append a QEB double-excitation gate exp(θ(a†_v1 a†_v2 a_h2 a_h1 − h.c.)).
!     Gate decomposition: 14 CX + 6 H + 8 RY = 28 gates.
!
!   finalize_ansatz(circuit)
!     Append measure_all to close the circuit.

module nuclear_gates
    use iso_c_binding
    use qiskit_circuit
    use nuclear_ansatz, only: create_hf_reference, &
                               add_single_excitation => add_givens_layer, &
                               add_double_excitation => add_double_excitation_layer, &
                               finalize_ansatz
    implicit none
    private

    public :: create_hf_reference
    public :: add_single_excitation
    public :: add_double_excitation
    public :: finalize_ansatz

end module nuclear_gates
