# qiskit.quantum\_info.PauliTable.argsort

`PauliTable.argsort(weight=False)`

Return indices for sorting the rows of the table.

The default sort method is lexicographic sorting by qubit number. By using the weight kwarg the output can additionally be sorted by the number of non-identity terms in the Pauli, where the set of all Pauli’s of a given weight are still ordered lexicographically.

**Parameters**

**weight** (*bool*) – optionally sort by weight if True (Default: False).

**Returns**

the indices for sorting the table.

**Return type**

array
