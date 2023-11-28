# qiskit.ignis.verification.get\_ghz\_mqc[¶](#qiskit-ignis-verification-get-ghz-mqc "Permalink to this headline")

<span id="undefined" />

`get_ghz_mqc(n, delta, full_measurement=True)`

This function creates an MQC circuit with n qubits, where the middle phase rotation around the z axis is by delta

**Parameters**

*   **n** (`int`) – number of qubits
*   **delta** (`float`) – the rotation of the middle phase around the z axis
*   **full\_measurement** (`bool`) – Whether to append full measurement, or only on the first qubit.

**Return type**

`QuantumCircuit`

**Returns**

The MQC circuit
