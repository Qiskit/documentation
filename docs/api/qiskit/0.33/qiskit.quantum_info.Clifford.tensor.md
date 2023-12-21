# qiskit.quantum\_info.Clifford.tensor

`Clifford.tensor(other)`

Return the tensor product with another Clifford.

**Parameters**

**other** ([*Clifford*](qiskit.quantum_info.Clifford#qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")) – a Clifford object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current Clifford, and $b$ is the other Clifford.

**Return type**

[Clifford](qiskit.quantum_info.Clifford#qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>
