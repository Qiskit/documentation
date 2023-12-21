# qiskit.aqua.operators.converters.PauliBasisChange.construct\_cnot\_chain

`PauliBasisChange.construct_cnot_chain(diag_pauli_op1, diag_pauli_op2)`

Construct a `CircuitOp` (or `PauliOp` if equal to the identity) which takes the eigenvectors of `diag_pauli_op1` to the eigenvectors of `diag_pauli_op2`, assuming both are diagonal (or performing this operation on their diagonalized Paulis implicitly if not). This works by the insight that the eigenvalue of a diagonal Pauli’s eigenvector is equal to or -1 if the parity is 1 and 1 if the parity is 0, or 1 - (2 \* parity). Therefore, using CNOTs, we can write the parity of diag\_pauli\_op1’s significant bits onto some qubit, and then write out that parity onto diag\_pauli\_op2’s significant bits.

**Parameters**

*   **diag\_pauli\_op1** (`PauliOp`) – The origin `PauliOp`.
*   **diag\_pauli\_op2** (`PauliOp`) – The destination `PauliOp`.

**Return type**

`PrimitiveOp`

**Returns**

The `PrimitiveOp` performs the mapping.
