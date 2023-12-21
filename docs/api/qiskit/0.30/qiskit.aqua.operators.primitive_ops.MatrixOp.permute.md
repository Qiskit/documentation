# qiskit.aqua.operators.primitive\_ops.MatrixOp.permute

`MatrixOp.permute(permutation=None)`

Creates a new MatrixOp that acts on the permuted qubits.

**Parameters**

**permutation** (`Optional`\[`List`\[`int`]]) – A list defining where each qubit should be permuted. The qubit at index j should be permuted to position permutation\[j].

**Return type**

`MatrixOp`

**Returns**

A new MatrixOp representing the permuted operator.

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if indices do not define a new index for each qubit.
