# qiskit.quantum\_info.PauliTable.tensor

`PauliTable.tensor(other)`

Return the tensor output product of two tables.

This returns the combination of the tensor product of all Paulis in the current table with all Pauli’s in the other table, with the other tables qubits being the least-significant in the returned table. This is the opposite tensor order to [`expand()`](qiskit.quantum_info.PauliTable.expand#qiskit.quantum_info.PauliTable.expand "qiskit.quantum_info.PauliTable.expand").

**Example**

```python
from qiskit.quantum_info.operators import PauliTable

current = PauliTable.from_labels(['I', 'X'])
other =  PauliTable.from_labels(['Y', 'Z'])
print(current.tensor(other))
```

```python
PauliTable: ['IY', 'IZ', 'XY', 'XZ']
```

**Parameters**

**other** ([*PauliTable*](qiskit.quantum_info.PauliTable#qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")) – another PauliTable.

**Returns**

the tensor outer product table.

**Return type**

[PauliTable](qiskit.quantum_info.PauliTable#qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")

**Raises**

**QiskitError** – if other cannot be converted to a PauliTable.
