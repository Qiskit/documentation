---
title: from_label
description: API reference for qiskit.quantum_info.Statevector.from_label
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Statevector.from_label
---

# from\_label

<span id="qiskit.quantum_info.Statevector.from_label" />

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

[Statevector](qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")

**Raises**

**QiskitError** – if the label contains invalid characters, or the length of the label is larger than an explicitly specified num\_qubits.

