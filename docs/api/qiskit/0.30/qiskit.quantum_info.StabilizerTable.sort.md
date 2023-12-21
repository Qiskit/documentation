# qiskit.quantum\_info.StabilizerTable.sort

`StabilizerTable.sort(weight=False)`

Sort the rows of the table.

The default sort method is lexicographic sorting by qubit number. By using the weight kwarg the output can additionally be sorted by the number of non-identity terms in the Pauli, where the set of all Pauli’s of a given weight are still ordered lexicographically.

This does not sort based on phase values. It will preserve the original order of rows with the same Pauli’s but different phases.

Consider sorting all a random ordering of all 2-qubit Paulis

```python
from numpy.random import shuffle
from qiskit.quantum_info.operators import StabilizerTable

# 2-qubit labels
labels = ['+II', '+IX', '+IY', '+IZ', '+XI', '+XX', '+XY', '+XZ',
          '+YI', '+YX', '+YY', '+YZ', '+ZI', '+ZX', '+ZY', '+ZZ',
          '-II', '-IX', '-IY', '-IZ', '-XI', '-XX', '-XY', '-XZ',
          '-YI', '-YX', '-YY', '-YZ', '-ZI', '-ZX', '-ZY', '-ZZ']
# Shuffle Labels
shuffle(labels)
st = StabilizerTable.from_labels(labels)
print('Initial Ordering')
print(st)

# Lexicographic Ordering
srt = st.sort()
print('Lexicographically sorted')
print(srt)

# Weight Ordering
srt = st.sort(weight=True)
print('Weight sorted')
print(srt)
```

```python
Initial Ordering
StabilizerTable: ['-XI', '-IZ', '+YI', '-YY', '+IY', '+YY', '-II', '-XY', '-IX', '+XI', '-ZI', '-IY', '+IX', '+II', '-YZ', '+XZ', '+ZI', '+YZ', '-YX', '+ZZ', '-ZZ', '+XY', '-XX', '-ZX', '+IZ', '+YX', '-XZ', '-YI', '+XX', '+ZX', '+ZY', '-ZY']
Lexicographically sorted
StabilizerTable: ['-II', '+II', '-IX', '+IX', '+IY', '-IY', '-IZ', '+IZ', '-XI', '+XI', '-XX', '+XX', '-XY', '+XY', '+XZ', '-XZ', '+YI', '-YI', '-YX', '+YX', '-YY', '+YY', '-YZ', '+YZ', '-ZI', '+ZI', '-ZX', '+ZX', '+ZY', '-ZY', '+ZZ', '-ZZ']
Weight sorted
StabilizerTable: ['-II', '+II', '-IX', '+IX', '+IY', '-IY', '-IZ', '+IZ', '-XI', '+XI', '+YI', '-YI', '-ZI', '+ZI', '-XX', '+XX', '-XY', '+XY', '+XZ', '-XZ', '-YX', '+YX', '-YY', '+YY', '-YZ', '+YZ', '-ZX', '+ZX', '+ZY', '-ZY', '+ZZ', '-ZZ']
```

**Parameters**

**weight** (*bool*) – optionally sort by weight if True (Default: False).

**Returns**

a sorted copy of the original table.

**Return type**

[StabilizerTable](qiskit.quantum_info.StabilizerTable#qiskit.quantum_info.StabilizerTable "qiskit.quantum_info.StabilizerTable")
