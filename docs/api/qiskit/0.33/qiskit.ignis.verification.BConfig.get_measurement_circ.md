# qiskit.ignis.verification.BConfig.get\_measurement\_circ

`BConfig.get_measurement_circ(n, qregname, cregname, full_measurement=True)`

Creates a measurement circuit that can toggle between measuring the control qubit or measuring all qubits. The default is measurement of all qubits.

**Parameters**

*   **n** (`int`) – number of qubits
*   **qregname** (`str`) – name of the qubit register
*   **cregname** (`str`) – name of the classical register
*   **full\_measurement** (`bool`) – Whether to append full measurement, or only on the first qubit

**Return type**

`QuantumCircuit`

**Returns**

The measurement circuit
