# qiskit.opflow\.primitive\_ops.CircuitOp.permute

`CircuitOp.permute(permutation)`

Permute the qubits of the circuit.

**Parameters**

**permutation** (`List`\[`int`]) – A list defining where each qubit should be permuted. The qubit at index j of the circuit should be permuted to position permutation\[j].

**Return type**

`CircuitOp`

**Returns**

A new CircuitOp containing the permuted circuit.
