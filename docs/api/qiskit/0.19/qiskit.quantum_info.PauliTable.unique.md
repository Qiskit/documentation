---
title: unique
description: API reference for qiskit.quantum_info.PauliTable.unique
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.PauliTable.unique
---

# unique

<span id="qiskit.quantum_info.PauliTable.unique" />

`PauliTable.unique(return_index=False, return_counts=False)`

Return unique Paulis from the table.

**Example**

```python
from qiskit.quantum_info.operators import PauliTable

pt = PauliTable.from_labels(['X', 'Y', 'X', 'I', 'I', 'Z', 'X', 'Z'])
unique = pt.unique()
print(unique)
```

```python
PauliTable: ['X', 'Y', 'I', 'Z']
```

**Parameters**

*   **return\_index** (*bool*) – If True, also return the indices that result in the unique array. (Default: False)
*   **return\_counts** (*bool*) – If True, also return the number of times each unique item appears in the table.

**Returns**

**unique**

the table of the unique rows.

**unique\_indices: np.ndarray, optional**

The indices of the first occurrences of the unique values in the original array. Only provided if `return_index` is True.

**unique\_counts: np.array, optional**

The number of times each of the unique values comes up in the original array. Only provided if `return_counts` is True.

**Return type**

[PauliTable](qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")

