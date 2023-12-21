# qiskit.quantum\_info.PTM.tensor

`PTM.tensor(other)`

Return the tensor product with another PTM.

**Parameters**

**other** ([*PTM*](qiskit.quantum_info.PTM#qiskit.quantum_info.PTM "qiskit.quantum_info.PTM")) – a PTM object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current PTM, and $b$ is the other PTM.

**Return type**

[PTM](qiskit.quantum_info.PTM#qiskit.quantum_info.PTM "qiskit.quantum_info.PTM")

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>
