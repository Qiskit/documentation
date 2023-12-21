---
title: dot
description: API reference for qiskit.quantum_info.StabilizerTable.dot
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.StabilizerTable.dot
---

# dot

<span id="qiskit.quantum_info.StabilizerTable.dot" />

`StabilizerTable.dot(other, qargs=None)`

Return the dot output product of two tables.

This returns the combination of the compose product of all stabilizers in the current table with all stabilizers in the other table.

The individual stabilizer dot product is given by

| `A.dot(B)` | I | X  | Y  | Z  |
| ---------- | - | -- | -- | -- |
| **I**      | I | X  | Y  | Z  |
| **X**      | X | I  | -Z | Y  |
| **Y**      | Y | Z  | -I | -X |
| **Z**      | Z | -Y | X  | I  |

**Example**

```python
from qiskit.quantum_info.operators import StabilizerTable

current = StabilizerTable.from_labels(['+I', '-X'])
other =  StabilizerTable.from_labels(['+X', '-Z'])
print(current.dot(other))
```

```python
StabilizerTable: ['+X', '-Z', '-I', '+Y']
```

**Parameters**

*   **other** ([*StabilizerTable*](qiskit.quantum_info.StabilizerTable "qiskit.quantum_info.StabilizerTable")) – another StabilizerTable.
*   **qargs** (*None or list*) – qubits to apply dot product on (Default: None).

**Returns**

the dot outer product table.

**Return type**

[StabilizerTable](qiskit.quantum_info.StabilizerTable "qiskit.quantum_info.StabilizerTable")

**Raises**

**QiskitError** – if other cannot be converted to a StabilizerTable.

