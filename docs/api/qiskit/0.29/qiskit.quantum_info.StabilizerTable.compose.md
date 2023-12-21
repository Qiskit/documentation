# qiskit.quantum\_info.StabilizerTable.compose

`StabilizerTable.compose(other, qargs=None, front=False)`

Return the compose output product of two tables.

This returns the combination of the compose product of all stabilizers in the current table with all stabilizers in the other table.

The individual stabilizer compose product is given by

| `A.compose(B)` | I | X  | Y  | Z  |
| -------------- | - | -- | -- | -- |
| **I**          | I | X  | Y  | Z  |
| **X**          | X | I  | Z  | -Y |
| **Y**          | Y | -Z | -I | X  |
| **Z**          | Z | Y  | -X | I  |

If front=True the composition will be given by the [`dot()`](qiskit.quantum_info.StabilizerTable.dot#qiskit.quantum_info.StabilizerTable.dot "qiskit.quantum_info.StabilizerTable.dot") method.

**Example**

```python
from qiskit.quantum_info.operators import StabilizerTable

current = StabilizerTable.from_labels(['+I', '-X'])
other =  StabilizerTable.from_labels(['+X', '-Z'])
print(current.compose(other))
```

```python
StabilizerTable: ['+X', '-Z', '-I', '-Y']
```

**Parameters**

*   **other** ([*StabilizerTable*](qiskit.quantum_info.StabilizerTable#qiskit.quantum_info.StabilizerTable "qiskit.quantum_info.StabilizerTable")) – another StabilizerTable.
*   **qargs** (*None or list*) – qubits to apply compose product on (Default: None).
*   **front** (*bool*) – If True use dot composition method (default: False).

**Returns**

the compose outer product table.

**Return type**

[StabilizerTable](qiskit.quantum_info.StabilizerTable#qiskit.quantum_info.StabilizerTable "qiskit.quantum_info.StabilizerTable")

**Raises**

**QiskitError** – if other cannot be converted to a StabilizerTable.
