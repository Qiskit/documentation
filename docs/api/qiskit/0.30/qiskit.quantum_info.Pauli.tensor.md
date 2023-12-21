# qiskit.quantum\_info.Pauli.tensor

`Pauli.tensor(other)`

Return the tensor product with another Pauli.

**Parameters**

**other** ([*Pauli*](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – a Pauli object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current Pauli, and $b$ is the other Pauli.

**Return type**

[Pauli](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>
