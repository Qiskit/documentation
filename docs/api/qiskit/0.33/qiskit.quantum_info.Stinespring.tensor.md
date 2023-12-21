# qiskit.quantum\_info.Stinespring.tensor

`Stinespring.tensor(other)`

Return the tensor product with another Stinespring.

**Parameters**

**other** ([*Stinespring*](qiskit.quantum_info.Stinespring#qiskit.quantum_info.Stinespring "qiskit.quantum_info.Stinespring")) – a Stinespring object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current Stinespring, and $b$ is the other Stinespring.

**Return type**

[Stinespring](qiskit.quantum_info.Stinespring#qiskit.quantum_info.Stinespring "qiskit.quantum_info.Stinespring")

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>
