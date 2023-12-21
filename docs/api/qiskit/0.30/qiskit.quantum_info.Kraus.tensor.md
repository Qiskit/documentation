# qiskit.quantum\_info.Kraus.tensor

`Kraus.tensor(other)`

Return the tensor product with another Kraus.

**Parameters**

**other** ([*Kraus*](qiskit.quantum_info.Kraus#qiskit.quantum_info.Kraus "qiskit.quantum_info.Kraus")) – a Kraus object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current Kraus, and $b$ is the other Kraus.

**Return type**

[Kraus](qiskit.quantum_info.Kraus#qiskit.quantum_info.Kraus "qiskit.quantum_info.Kraus")

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>
