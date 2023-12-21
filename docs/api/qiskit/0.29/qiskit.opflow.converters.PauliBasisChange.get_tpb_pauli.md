# qiskit.opflow\.converters.PauliBasisChange.get\_tpb\_pauli

`PauliBasisChange.get_tpb_pauli(list_op)`

Gets the Pauli (not `PauliOp`!) whose diagonalizing single-qubit rotations is a superset of the diagonalizing single-qubit rotations for each of the Paulis in `list_op`. TPB stands for Tensor Product Basis.

**Parameters**

**list\_op** (`ListOp`) – the `ListOp` whose TPB Pauli to return.

**Return type**

`Pauli`

**Returns**

The TBP Pauli.
