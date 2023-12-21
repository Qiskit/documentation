# qiskit.quantum\_info.StabilizerTable.expand

`StabilizerTable.expand(other)`

Return the expand output product of two tables.

This returns the combination of the tensor product of all stabilizers in the other table with all stabilizers in the current table. The current tables qubits will be the least-significant in the returned table. This is the opposite tensor order to [`tensor()`](qiskit.quantum_info.StabilizerTable.tensor#qiskit.quantum_info.StabilizerTable.tensor "qiskit.quantum_info.StabilizerTable.tensor").

**Example**

```python
from qiskit.quantum_info.operators import StabilizerTable

current = StabilizerTable.from_labels(['+I', '-X'])
other =  StabilizerTable.from_labels(['-Y', '+Z'])
print(current.expand(other))
```

```python
StabilizerTable: ['-YI', '+YX', '+ZI', '-ZX']
```

**Parameters**

**other** ([*StabilizerTable*](qiskit.quantum_info.StabilizerTable#qiskit.quantum_info.StabilizerTable "qiskit.quantum_info.StabilizerTable")) – another StabilizerTable.

**Returns**

the expand outer product table.

**Return type**

[StabilizerTable](qiskit.quantum_info.StabilizerTable#qiskit.quantum_info.StabilizerTable "qiskit.quantum_info.StabilizerTable")

**Raises**

**QiskitError** – if other cannot be converted to a StabilizerTable.
