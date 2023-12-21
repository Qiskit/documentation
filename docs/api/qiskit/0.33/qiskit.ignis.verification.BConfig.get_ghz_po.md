# qiskit.ignis.verification.BConfig.get\_ghz\_po

`BConfig.get_ghz_po(n, delta)`

This function creates an Parity Oscillation circuit with n qubits, where the middle superposition rotation around the x and y axes is by delta

**Parameters**

*   **n** (`int`) – number of qubits
*   **delta** (`float`) – the middle superposition rotation

**Return type**

`Tuple`\[`QuantumCircuit`, `Dict`]

**Returns**

The Parity Oscillation circuit and the initial GHZ layout
