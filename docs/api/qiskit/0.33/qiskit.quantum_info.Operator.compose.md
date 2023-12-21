# qiskit.quantum\_info.Operator.compose

`Operator.compose(other, qargs=None, front=False)`

Return the operator composition with another Operator.

**Parameters**

*   **other** ([*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – a Operator object.
*   **qargs** (*list or None*) – Optional, a list of subsystem positions to apply other on. If None apply on all subsystems (default: None).
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].

**Returns**

The composed Operator.

**Return type**

[Operator](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")

**Raises**

**QiskitError** – if other cannot be converted to an operator, or has incompatible dimensions for specified subsystems.

<Admonition title="Note" type="note">
  Composition (`&`) by default is defined as left matrix multiplication for matrix operators, while [`dot()`](qiskit.quantum_info.Operator.dot#qiskit.quantum_info.Operator.dot "qiskit.quantum_info.Operator.dot") is defined as right matrix multiplication. That is that `A & B == A.compose(B)` is equivalent to `B.dot(A)` when `A` and `B` are of the same type.

  Setting the `front=True` kwarg changes this to right matrix multiplication and is equivalent to the [`dot()`](qiskit.quantum_info.Operator.dot#qiskit.quantum_info.Operator.dot "qiskit.quantum_info.Operator.dot") method `A.dot(B) == A.compose(B, front=True)`.
</Admonition>
