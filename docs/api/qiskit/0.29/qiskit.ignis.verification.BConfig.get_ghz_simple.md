# qiskit.ignis.verification.BConfig.get\_ghz\_simple

`BConfig.get_ghz_simple(n, full_measurement=True)`

Get simple GHZ circuit with measurement

**Parameters**

*   **n** (`int`) – number of qubits
*   **full\_measurement** (`bool`) – Whether to append full measurement, or only on the first qubit

**Return type**

`Tuple`\[`QuantumCircuit`, `QuantumRegister`, `Dict`]

**Returns**

A GHZ Circuit, its measurement circle quantum register and the initial GHZ layout
