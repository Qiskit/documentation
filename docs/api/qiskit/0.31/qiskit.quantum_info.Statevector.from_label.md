# qiskit.quantum\_info.Statevector.from\_label

`classmethod Statevector.from_label(label)`

Return a tensor product of Pauli X,Y,Z eigenstates.

| Label | Statevector                     |
| ----- | ------------------------------- |
| `"0"` | $[1, 0]$                        |
| `"1"` | $[0, 1]$                        |
| `"+"` | $[1 / \sqrt{2}, 1 / \sqrt{2}]$  |
| `"-"` | $[1 / \sqrt{2}, -1 / \sqrt{2}]$ |
| `"r"` | $[1 / \sqrt{2}, i / \sqrt{2}]$  |
| `"l"` | $[1 / \sqrt{2}, -i / \sqrt{2}]$ |

**Parameters**

**label** (*string*) – a eigenstate string ket label (see table for allowed values).

**Returns**

The N-qubit basis state density matrix.

**Return type**

[Statevector](qiskit.quantum_info.Statevector#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")

**Raises**

**QiskitError** – if the label contains invalid characters, or the length of the label is larger than an explicitly specified num\_qubits.
