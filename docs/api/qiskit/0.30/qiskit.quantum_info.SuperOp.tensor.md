# qiskit.quantum\_info.SuperOp.tensor

`SuperOp.tensor(other)`

Return the tensor product with another SuperOp.

**Parameters**

**other** ([*SuperOp*](qiskit.quantum_info.SuperOp#qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp")) – a SuperOp object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current SuperOp, and $b$ is the other SuperOp.

**Return type**

[SuperOp](qiskit.quantum_info.SuperOp#qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp")

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>
