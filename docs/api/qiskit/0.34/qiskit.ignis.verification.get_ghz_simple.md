# qiskit.ignis.verification.get\_ghz\_simple[¶](#qiskit-ignis-verification-get-ghz-simple "Permalink to this headline")

<span id="undefined" />

`get_ghz_simple(n, measure=True, full_measurement=True)`

Creates a linear GHZ state with the option of measurement

**Parameters**

*   **n** (`int`) – number of qubits
*   **measure** (`bool`) – Whether to add measurement gates
*   **full\_measurement** (`bool`) – Whether to append full measurement, or only on the first qubit. Relevant only for measure=True

**Return type**

`QuantumCircuit`

**Returns**

A linear GHZ Circuit
