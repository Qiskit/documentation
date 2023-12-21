# qiskit.ignis.verification.BConfig.get\_ghz\_mqc\_para

`BConfig.get_ghz_mqc_para(n, full_measurement=True)`

Get a parametrized MQC circuit. Remember that get\_counts() method accepts an index now, not a circuit

**Parameters**

*   **n** (`int`) – number of qubits
*   **full\_measurement** (`bool`) – Whether to append full measurement, or only on the first qubit

**Return type**

`Tuple`\[`QuantumCircuit`, `Parameter`, `Dict`]

**Returns**

The MQC circuit, its delta parameter, and the initial GHZ layout
