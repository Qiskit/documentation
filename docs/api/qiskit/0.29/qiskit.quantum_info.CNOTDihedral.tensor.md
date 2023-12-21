# qiskit.quantum\_info.CNOTDihedral.tensor

`CNOTDihedral.tensor(other)`

Return the tensor product with another CNOTDihedral.

**Parameters**

**other** ([*CNOTDihedral*](qiskit.ignis.verification.CNOTDihedral#qiskit.ignis.verification.CNOTDihedral "qiskit.ignis.verification.CNOTDihedral")) – a CNOTDihedral object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current CNOTDihedral, and $b$ is the other CNOTDihedral.

**Return type**

[CNOTDihedral](qiskit.ignis.verification.CNOTDihedral#qiskit.ignis.verification.CNOTDihedral "qiskit.ignis.verification.CNOTDihedral")

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>
