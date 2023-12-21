# qiskit.quantum\_info.ScalarOp.tensor

`ScalarOp.tensor(other)`

Return the tensor product with another ScalarOp.

**Parameters**

**other** ([*ScalarOp*](qiskit.quantum_info.ScalarOp#qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp")) – a ScalarOp object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current ScalarOp, and $b$ is the other ScalarOp.

**Return type**

[ScalarOp](qiskit.quantum_info.ScalarOp#qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp")

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>
