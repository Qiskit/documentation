# qiskit.quantum\_info.PauliTable.compose

`PauliTable.compose(other, qargs=None, front=True)`

Return the compose output product of two tables.

This returns the combination of the dot product of all Paulis in the current table with all Pauli’s in the other table and discards the complex phase from the product. Note that for PauliTables this method is equivalent to [`dot()`](qiskit.quantum_info.PauliTable.dot#qiskit.quantum_info.PauliTable.dot "qiskit.quantum_info.PauliTable.dot") and hence the `front` kwarg does not change the output.

**Example**

```python
from qiskit.quantum_info.operators import PauliTable

current = PauliTable.from_labels(['I', 'X'])
other =  PauliTable.from_labels(['Y', 'Z'])
print(current.compose(other))
```

```python
PauliTable: ['Y', 'Z', 'Z', 'Y']
```

**Parameters**

*   **other** ([*PauliTable*](qiskit.quantum_info.PauliTable#qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")) – another PauliTable.
*   **qargs** (*None or list*) – qubits to apply dot product on (Default: None).
*   **front** (*bool*) – If True use dot composition method \[default: False].

**Returns**

the compose outer product table.

**Return type**

[PauliTable](qiskit.quantum_info.PauliTable#qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")

**Raises**

**QiskitError** – if other cannot be converted to a PauliTable.
