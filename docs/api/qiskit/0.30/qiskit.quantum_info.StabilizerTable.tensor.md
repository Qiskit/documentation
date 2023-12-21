# qiskit.quantum\_info.StabilizerTable.tensor

`StabilizerTable.tensor(other)`

Return the tensor output product of two tables.

This returns the combination of the tensor product of all stabilizers in the current table with all stabilizers in the other table. The other tables qubits will be the least-significant in the returned table. This is the opposite tensor order to [`tensor()`](#qiskit.quantum_info.StabilizerTable.tensor "qiskit.quantum_info.StabilizerTable.tensor").

**Example**

```python
from qiskit.quantum_info.operators import StabilizerTable

current = StabilizerTable.from_labels(['+I', '-X'])
other =  StabilizerTable.from_labels(['-Y', '+Z'])
print(current.tensor(other))
```

```python
StabilizerTable: ['-IY', '+IZ', '+XY', '-XZ']
```

**Parameters**

**other** ([*StabilizerTable*](qiskit.quantum_info.StabilizerTable#qiskit.quantum_info.StabilizerTable "qiskit.quantum_info.StabilizerTable")) – another StabilizerTable.

**Returns**

the tensor outer product table.

**Return type**

[StabilizerTable](qiskit.quantum_info.StabilizerTable#qiskit.quantum_info.StabilizerTable "qiskit.quantum_info.StabilizerTable")

**Raises**

**QiskitError** – if other cannot be converted to a StabilizerTable.
