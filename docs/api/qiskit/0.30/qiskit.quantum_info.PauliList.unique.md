# qiskit.quantum\_info.PauliList.unique

`PauliList.unique(return_index=False, return_counts=False)`

Return unique Paulis from the table.

**Example**

```python
from qiskit.quantum_info.operators import PauliList

pt = PauliList(['X', 'Y', '-X', 'I', 'I', 'Z', 'X', 'iZ'])
unique = pt.unique()
print(unique)
```

```python
['X', 'Y', '-X', 'I', 'Z', 'iZ']
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

[PauliList](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")
