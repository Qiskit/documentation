# qiskit.quantum\_info.StabilizerTable.argsort

`StabilizerTable.argsort(weight=False)`

Return indices for sorting the rows of the PauliTable.

The default sort method is lexicographic sorting of Paulis by qubit number. By using the weight kwarg the output can additionally be sorted by the number of non-identity terms in the Stabilizer, where the set of all Pauli’s of a given weight are still ordered lexicographically.

This does not sort based on phase values. It will preserve the original order of rows with the same Pauli’s but different phases.

**Parameters**

**weight** (*bool*) – optionally sort by weight if True (Default: False).

**Returns**

the indices for sorting the table.

**Return type**

array
