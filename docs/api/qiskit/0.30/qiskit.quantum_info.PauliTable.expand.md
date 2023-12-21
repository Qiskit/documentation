# qiskit.quantum\_info.PauliTable.expand

`PauliTable.expand(other)`

Return the expand output product of two tables.

This returns the combination of the tensor product of all Paulis in the other table with all Pauli’s in the current table, with the current tables qubits being the least-significant in the returned table. This is the opposite tensor order to [`tensor()`](qiskit.quantum_info.PauliTable.tensor#qiskit.quantum_info.PauliTable.tensor "qiskit.quantum_info.PauliTable.tensor").

**Example**

```python
from qiskit.quantum_info.operators import PauliTable

current = PauliTable.from_labels(['I', 'X'])
other =  PauliTable.from_labels(['Y', 'Z'])
print(current.expand(other))
```

```python
PauliTable: ['YI', 'YX', 'ZI', 'ZX']
```

**Parameters**

**other** ([*PauliTable*](qiskit.quantum_info.PauliTable#qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")) – another PauliTable.

**Returns**

the expand outer product table.

**Return type**

[PauliTable](qiskit.quantum_info.PauliTable#qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")

**Raises**

**QiskitError** – if other cannot be converted to a PauliTable.
