<span id="qiskit-quantum-info-two-qubit-cnot-decompose" />

# qiskit.quantum\_info.two\_qubit\_cnot\_decompose

## `two_qubit_cnot_decompose` *= \<qiskit.quantum\_info.synthesis.two\_qubit\_decompose.TwoQubitBasisDecomposer object>*

A class for decomposing 2-qubit unitaries into minimal number of uses of a 2-qubit basis gate.

**Parameters**

*   **gate** ([*Gate*](qiskit.circuit.Gate "qiskit.circuit.Gate")) – Two-qubit gate to be used in the KAK decomposition.
*   **basis\_fidelity** (*float*) – Fidelity to be assumed for applications of KAK Gate. Default 1.0.
*   **euler\_basis** (*str*) – Basis string to be provided to OneQubitEulerDecomposer for 1Q synthesis. Valid options are \[‘ZYZ’, ‘ZXZ’, ‘XYX’, ‘U’, ‘U3’, ‘U1X’, ‘PSX’, ‘ZSX’, ‘RR’]. Default ‘U3’.
