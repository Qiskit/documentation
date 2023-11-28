# qiskit.ignis.verification.marginal\_counts[¶](#qiskit-ignis-verification-marginal-counts "Permalink to this headline")

<span id="undefined" />

`marginal_counts(counts, meas_qubits=True, pad_zeros=False)`

Compute marginal counts from a counts dictionary.

**Parameters**

*   **counts** (`Dict`\[`str`, `int`]) – a counts dictionary.
*   **meas\_qubits** (`Union`\[`bool`, `List`\[`int`]]) – (default: True) the qubits to NOT be marinalized over if this is True meas\_qubits will be all measured qubits.
*   **pad\_zeros** (`bool`) – (default: False) Include zero count outcomes in return dict.

**Return type**

`Dict`\[`str`, `int`]

**Returns**

A counts dictionary for the specified qubits. The returned dictionary will have any whitespace trimmed from the input counts keys. Thus if meas\_qubits=True the returned dictionary will have the same values as the input dictionary, but with whitespace trimmed from the keys.
