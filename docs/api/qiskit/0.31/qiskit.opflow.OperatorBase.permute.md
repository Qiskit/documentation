# qiskit.opflow\.OperatorBase.permute

`abstract OperatorBase.permute(permutation)`

Permutes the qubits of the operator.

**Parameters**

**permutation** (`List`\[`int`]) – A list defining where each qubit should be permuted. The qubit at index j should be permuted to position permutation\[j].

**Return type**

`OperatorBase`

**Returns**

A new OperatorBase containing the permuted operator.

**Raises**

[**OpflowError**](qiskit.opflow.OpflowError#qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – if indices do not define a new index for each qubit.
