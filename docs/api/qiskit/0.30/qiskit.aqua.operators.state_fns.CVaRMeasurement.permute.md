# qiskit.aqua.operators.state\_fns.CVaRMeasurement.permute

`CVaRMeasurement.permute(permutation)`

Permute the qubits of the state function.

**Parameters**

**permutation** (`List`\[`int`]) – A list defining where each qubit should be permuted. The qubit at index j of the circuit should be permuted to position permutation\[j].

**Return type**

`OperatorStateFn`

**Returns**

A new StateFn containing the permuted primitive.
