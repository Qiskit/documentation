# qiskit.aqua.operators.evolutions.EvolvedOp.permute

`EvolvedOp.permute(permutation)`

Permutes the qubits of the operator.

**Parameters**

**permutation** (`List`\[`int`]) – A list defining where each qubit should be permuted. The qubit at index j should be permuted to position permutation\[j].

**Return type**

`OperatorBase`

**Returns**

A new OperatorBase containing the permuted operator.

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if indices do not define a new index for each qubit.
