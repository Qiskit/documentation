# qiskit.aqua.operators.state\_fns.CircuitStateFn.permute

`CircuitStateFn.permute(permutation)`

Permute the qubits of the circuit.

**Parameters**

**permutation** (`List`\[`int`]) – A list defining where each qubit should be permuted. The qubit at index j of the circuit should be permuted to position permutation\[j].

**Return type**

`CircuitStateFn`

**Returns**

A new CircuitStateFn containing the permuted circuit.
