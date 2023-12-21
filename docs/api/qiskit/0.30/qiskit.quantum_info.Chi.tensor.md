# qiskit.quantum\_info.Chi.tensor

`Chi.tensor(other)`

Return the tensor product with another Chi.

**Parameters**

**other** ([*Chi*](qiskit.quantum_info.Chi#qiskit.quantum_info.Chi "qiskit.quantum_info.Chi")) – a Chi object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current Chi, and $b$ is the other Chi.

**Return type**

[Chi](qiskit.quantum_info.Chi#qiskit.quantum_info.Chi "qiskit.quantum_info.Chi")

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>
