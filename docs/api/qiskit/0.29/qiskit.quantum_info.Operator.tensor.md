# qiskit.quantum\_info.Operator.tensor

`Operator.tensor(other)`

Return the tensor product with another Operator.

**Parameters**

**other** ([*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – a Operator object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current Operator, and $b$ is the other Operator.

**Return type**

[Operator](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>
