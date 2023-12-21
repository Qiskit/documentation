---
title: expand
description: API reference for qiskit.quantum_info.PauliTable.expand
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.PauliTable.expand
---

# expand

<span id="qiskit.quantum_info.PauliTable.expand" />

`PauliTable.expand(other)`

Return the expand output product of two tables.

This returns the combination of the tensor product of all Paulis in the other table with all Pauli’s in the current table, with the current tables qubits being the least-significant in the returned table. This is the opposite tensor order to [`tensor()`](qiskit.quantum_info.PauliTable.tensor "qiskit.quantum_info.PauliTable.tensor").

**Example**

```python
from qiskit.quantum_info.operators import PauliTable

current = PauliTable.from_labels(['I', 'X'])
other =  PauliTable.from_labels(['Y', 'Z'])
print(current.expand(other))
```

```python
PauliTable: ['YI', 'ZI', 'YX', 'ZX']
```

**Parameters**

**other** ([*PauliTable*](qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")) – another PauliTable.

**Returns**

the expand outer product table.

**Return type**

[PauliTable](qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")

**Raises**

**QiskitError** – if other cannot be converted to a PauliTable.

