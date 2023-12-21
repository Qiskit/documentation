# qiskit.quantum\_info.PauliTable.dot

`PauliTable.dot(other, qargs=None)`

Return the dot output product of two tables.

This returns the combination of the dot product of all Paulis in the current table with all Pauli’s in the other table and discards the complex phase from the product. Note that for PauliTables this method is equivalent to [`compose()`](qiskit.quantum_info.PauliTable.compose#qiskit.quantum_info.PauliTable.compose "qiskit.quantum_info.PauliTable.compose").

**Example**

```python
from qiskit.quantum_info.operators import PauliTable

current = PauliTable.from_labels(['I', 'X'])
other =  PauliTable.from_labels(['Y', 'Z'])
print(current.dot(other))
```

```python
PauliTable: ['Y', 'Z', 'Z', 'Y']
```

**Parameters**

*   **other** ([*PauliTable*](qiskit.quantum_info.PauliTable#qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")) – another PauliTable.
*   **qargs** (*None or list*) – qubits to apply dot product on (Default: None).

**Returns**

the dot outer product table.

**Return type**

[PauliTable](qiskit.quantum_info.PauliTable#qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")

**Raises**

**QiskitError** – if other cannot be converted to a PauliTable.
