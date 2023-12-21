---
title: sort
description: API reference for qiskit.quantum_info.PauliTable.sort
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.PauliTable.sort
---

# sort

<span id="qiskit.quantum_info.PauliTable.sort" />

`PauliTable.sort(weight=False)`

Sort the rows of the table.

The default sort method is lexicographic sorting by qubit number. By using the weight kwarg the output can additionally be sorted by the number of non-identity terms in the Pauli, where the set of all Pauli’s of a given weight are still ordered lexicographically.

**Example**

Consider sorting all a random ordering of all 2-qubit Paulis

```python
from numpy.random import shuffle
from qiskit.quantum_info.operators import PauliTable

# 2-qubit labels
labels = ['II', 'IX', 'IY', 'IZ', 'XI', 'XX', 'XY', 'XZ',
          'YI', 'YX', 'YY', 'YZ', 'ZI', 'ZX', 'ZY', 'ZZ']
# Shuffle Labels
shuffle(labels)
pt = PauliTable.from_labels(labels)
print('Initial Ordering')
print(pt)

# Lexicographic Ordering
srt = pt.sort()
print('Lexicographically sorted')
print(srt)

# Weight Ordering
srt = pt.sort(weight=True)
print('Weight sorted')
print(srt)
```

```python
Initial Ordering
PauliTable: ['XI', 'ZI', 'XZ', 'YX', 'IY', 'ZZ', 'XY', 'YZ', 'IX', 'II', 'ZY', 'ZX', 'XX', 'YY', 'IZ', 'YI']
Lexicographically sorted
PauliTable: ['II', 'IX', 'IY', 'IZ', 'XI', 'XX', 'XY', 'XZ', 'YI', 'YX', 'YY', 'YZ', 'ZI', 'ZX', 'ZY', 'ZZ']
Weight sorted
PauliTable: ['II', 'IX', 'IY', 'IZ', 'XI', 'YI', 'ZI', 'XX', 'XY', 'XZ', 'YX', 'YY', 'YZ', 'ZX', 'ZY', 'ZZ']
```

**Parameters**

**weight** (*bool*) – optionally sort by weight if True (Default: False).

**Returns**

a sorted copy of the original table.

**Return type**

[PauliTable](qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")

