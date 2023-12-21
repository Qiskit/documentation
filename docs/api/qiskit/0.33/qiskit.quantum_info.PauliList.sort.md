# qiskit.quantum\_info.PauliList.sort

`PauliList.sort(weight=False, phase=False)`

Sort the rows of the table.

The default sort method is lexicographic sorting by qubit number. By using the weight kwarg the output can additionally be sorted by the number of non-identity terms in the Pauli, where the set of all Pauli’s of a given weight are still ordered lexicographically.

**Example**

Consider sorting all a random ordering of all 2-qubit Paulis

```python
from numpy.random import shuffle
from qiskit.quantum_info.operators import PauliList

# 2-qubit labels
labels = ['II', 'IX', 'IY', 'IZ', 'XI', 'XX', 'XY', 'XZ',
          'YI', 'YX', 'YY', 'YZ', 'ZI', 'ZX', 'ZY', 'ZZ']
# Shuffle Labels
shuffle(labels)
pt = PauliList(labels)
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
['IX', 'YY', 'YX', 'YI', 'IZ', 'ZI', 'II', 'ZZ', 'IY', 'ZX', 'XY', 'YZ',
 'ZY', 'XI', 'XX', 'XZ']
Lexicographically sorted
['II', 'IX', 'IY', 'IZ', 'XI', 'XX', 'XY', 'XZ', 'YI', 'YX', 'YY', 'YZ',
 'ZI', 'ZX', 'ZY', 'ZZ']
Weight sorted
['II', 'IX', 'IY', 'IZ', 'XI', 'YI', 'ZI', 'XX', 'XY', 'XZ', 'YX', 'YY',
 'YZ', 'ZX', 'ZY', 'ZZ']
```

**Parameters**

*   **weight** (*bool*) – optionally sort by weight if True (Default: False).
*   **phase** (*bool*) – Optionally sort by phase before weight or order (Default: False).

**Returns**

a sorted copy of the original table.

**Return type**

[PauliList](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")
