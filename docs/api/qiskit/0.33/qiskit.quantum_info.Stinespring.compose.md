# qiskit.quantum\_info.Stinespring.compose

`Stinespring.compose(other, qargs=None, front=False)`

Return the operator composition with another Stinespring.

**Parameters**

*   **other** ([*Stinespring*](qiskit.quantum_info.Stinespring#qiskit.quantum_info.Stinespring "qiskit.quantum_info.Stinespring")) – a Stinespring object.
*   **qargs** (*list or None*) – Optional, a list of subsystem positions to apply other on. If None apply on all subsystems (default: None).
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].

**Returns**

The composed Stinespring.

**Return type**

[Stinespring](qiskit.quantum_info.Stinespring#qiskit.quantum_info.Stinespring "qiskit.quantum_info.Stinespring")

**Raises**

**QiskitError** – if other cannot be converted to an operator, or has incompatible dimensions for specified subsystems.

<Admonition title="Note" type="note">
  Composition (`&`) by default is defined as left matrix multiplication for matrix operators, while [`dot()`](qiskit.quantum_info.Stinespring.dot#qiskit.quantum_info.Stinespring.dot "qiskit.quantum_info.Stinespring.dot") is defined as right matrix multiplication. That is that `A & B == A.compose(B)` is equivalent to `B.dot(A)` when `A` and `B` are of the same type.

  Setting the `front=True` kwarg changes this to right matrix multiplication and is equivalent to the [`dot()`](qiskit.quantum_info.Stinespring.dot#qiskit.quantum_info.Stinespring.dot "qiskit.quantum_info.Stinespring.dot") method `A.dot(B) == A.compose(B, front=True)`.
</Admonition>
