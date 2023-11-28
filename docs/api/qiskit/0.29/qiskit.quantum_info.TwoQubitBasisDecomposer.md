# TwoQubitBasisDecomposer[¶](#twoqubitbasisdecomposer "Permalink to this headline")

<span id="undefined" />

`TwoQubitBasisDecomposer(gate, basis_fidelity=1.0, euler_basis=None, pulse_optimize=None)`

Bases: `object`

A class for decomposing 2-qubit unitaries into minimal number of uses of a 2-qubit basis gate.

**Parameters**

*   **gate** ([*Gate*](qiskit.circuit.Gate#qiskit.circuit.Gate "qiskit.circuit.Gate")) – Two-qubit gate to be used in the KAK decomposition.
*   **basis\_fidelity** (*float*) – Fidelity to be assumed for applications of KAK Gate. Default 1.0.
*   **euler\_basis** (*str*) – Basis string to be provided to OneQubitEulerDecomposer for 1Q synthesis. Valid options are \[‘ZYZ’, ‘ZXZ’, ‘XYX’, ‘U’, ‘U3’, ‘U1X’, ‘PSX’, ‘ZSX’, ‘RR’]. Default ‘U3’.
*   **pulse\_optimize** (*None or bool*) – If True, try to do decomposition which minimizes local unitaries in between entangling gates. This will raise an exception if an optimal decomposition is not implemented. Currently, only \[\{CX, SX, RZ}] is known. If False, don’t attempt optimization. If None, attempt optimization but don’t raise if unknown.

## Methods

|                                                                                                                                                                                                                                            |                                                                                                             |                         |                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------------------------- |
| [`decomp0`](qiskit.quantum_info.TwoQubitBasisDecomposer.decomp0#qiskit.quantum_info.TwoQubitBasisDecomposer.decomp0 "qiskit.quantum_info.TwoQubitBasisDecomposer.decomp0")                                                                 | Decompose target \~Ud(x, y, z) with 0 uses of the basis gate.                                               |                         |                                         |
| [`decomp1`](qiskit.quantum_info.TwoQubitBasisDecomposer.decomp1#qiskit.quantum_info.TwoQubitBasisDecomposer.decomp1 "qiskit.quantum_info.TwoQubitBasisDecomposer.decomp1")                                                                 | Decompose target \~Ud(x, y, z) with 1 uses of the basis gate \~Ud(a, b, c). Result Ur has trace: .. math::. |                         |                                         |
| [`decomp2_supercontrolled`](qiskit.quantum_info.TwoQubitBasisDecomposer.decomp2_supercontrolled#qiskit.quantum_info.TwoQubitBasisDecomposer.decomp2_supercontrolled "qiskit.quantum_info.TwoQubitBasisDecomposer.decomp2_supercontrolled") | Decompose target \~Ud(x, y, z) with 2 uses of the basis gate.                                               |                         |                                         |
| [`decomp3_supercontrolled`](qiskit.quantum_info.TwoQubitBasisDecomposer.decomp3_supercontrolled#qiskit.quantum_info.TwoQubitBasisDecomposer.decomp3_supercontrolled "qiskit.quantum_info.TwoQubitBasisDecomposer.decomp3_supercontrolled") | Decompose target with 3 uses of the basis.                                                                  |                         |                                         |
| [`num_basis_gates`](qiskit.quantum_info.TwoQubitBasisDecomposer.num_basis_gates#qiskit.quantum_info.TwoQubitBasisDecomposer.num_basis_gates "qiskit.quantum_info.TwoQubitBasisDecomposer.num_basis_gates")                                 | Computes the number of basis gates needed in a decomposition of input unitary                               |                         |                                         |
| [`traces`](qiskit.quantum_info.TwoQubitBasisDecomposer.traces#qiskit.quantum_info.TwoQubitBasisDecomposer.traces "qiskit.quantum_info.TwoQubitBasisDecomposer.traces")                                                                     | Give the expected traces \$                                                                                 | Tr(U \cdot Utarget^dag) | \$ for different number of basis gates. |
