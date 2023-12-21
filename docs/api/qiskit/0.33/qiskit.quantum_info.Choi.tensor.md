# qiskit.quantum\_info.Choi.tensor

`Choi.tensor(other)`

Return the tensor product with another Choi.

**Parameters**

**other** ([*Choi*](qiskit.quantum_info.Choi#qiskit.quantum_info.Choi "qiskit.quantum_info.Choi")) – a Choi object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current Choi, and $b$ is the other Choi.

**Return type**

[Choi](qiskit.quantum_info.Choi#qiskit.quantum_info.Choi "qiskit.quantum_info.Choi")

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>
