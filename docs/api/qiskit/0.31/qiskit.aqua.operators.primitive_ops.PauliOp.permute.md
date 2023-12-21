# qiskit.aqua.operators.primitive\_ops.PauliOp.permute

`PauliOp.permute(permutation)`

Permutes the sequence of Pauli matrices.

**Parameters**

**permutation** (`List`\[`int`]) – A list defining where each Pauli should be permuted. The Pauli at index j of the primitive should be permuted to position permutation\[j].

**Return type**

`PauliOp`

**Returns**

A new PauliOp representing the permuted operator. For operator (X ^ Y ^ Z) and indices=\[1,2,4], it returns (X ^ I ^ Y ^ Z ^ I).

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if indices do not define a new index for each qubit.
