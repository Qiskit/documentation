# qiskit.quantum\_info.SparsePauliOp.tensor

`SparsePauliOp.tensor(other)`

Return the tensor product with another SparsePauliOp.

**Parameters**

**other** ([*SparsePauliOp*](qiskit.quantum_info.SparsePauliOp#qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")) – a SparsePauliOp object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current SparsePauliOp, and $b$ is the other SparsePauliOp.

**Return type**

[SparsePauliOp](qiskit.quantum_info.SparsePauliOp#qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>
