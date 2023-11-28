# qiskit.ignis.verification.get\_ghz\_mqc\_para[¶](#qiskit-ignis-verification-get-ghz-mqc-para "Permalink to this headline")

<span id="undefined" />

`get_ghz_mqc_para(n, full_measurement=True)`

This function creates an MQC circuit with n qubits, where the middle phase rotation around the z axis is parameterized

**Parameters**

*   **n** (`int`) – number of qubits
*   **full\_measurement** (`bool`) – Whether to append full measurement, or only on the first qubit.

**Return type**

`Tuple`\[`QuantumCircuit`, `Parameter`]

**Returns**

An mqc circuit and its Delta parameter
