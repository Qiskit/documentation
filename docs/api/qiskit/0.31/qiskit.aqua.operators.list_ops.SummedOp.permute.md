# qiskit.aqua.operators.list\_ops.SummedOp.permute

`SummedOp.permute(permutation)`

Permute the qubits of the operator.

**Parameters**

**permutation** (`List`\[`int`]) – A list defining where each qubit should be permuted. The qubit at index j should be permuted to position permutation\[j].

**Return type**

`ListOp`

**Returns**

A new ListOp representing the permuted operator.

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if indices do not define a new index for each qubit.
