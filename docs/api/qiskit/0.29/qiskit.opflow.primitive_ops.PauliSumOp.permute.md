# qiskit.opflow\.primitive\_ops.PauliSumOp.permute

`PauliSumOp.permute(permutation)`

Permutes the sequence of `PauliSumOp`.

**Parameters**

**permutation** (`List`\[`int`]) – A list defining where each Pauli should be permuted. The Pauli at index j of the primitive should be permuted to position permutation\[j].

**Return type**

`PauliSumOp`

**Returns**

A new PauliSumOp representing the permuted operator. For operator (X ^ Y ^ Z) and indices=\[1,2,4], it returns (X ^ I ^ Y ^ Z ^ I).

**Raises**

[**OpflowError**](qiskit.opflow.OpflowError#qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – if indices do not define a new index for each qubit.
