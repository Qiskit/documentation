# qiskit.ignis.verification.get\_ghz\_po\_para[¶](#qiskit-ignis-verification-get-ghz-po-para "Permalink to this headline")

<span id="undefined" />

`get_ghz_po_para(n)`

This function creates a Parity Oscillation circuit with n qubits, where the middle superposition rotation around

the x and y axes is by delta

**Parameters**

**n** (`int`) – number of qubits

**Return type**

`Tuple`\[`QuantumCircuit`, `List`\[`Parameter`]]

**Returns**

The parity oscillation circuit and its Delta/minus-delta parameters
