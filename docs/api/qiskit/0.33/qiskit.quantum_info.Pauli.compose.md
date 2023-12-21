# qiskit.quantum\_info.Pauli.compose

`Pauli.compose(other, qargs=None, front=False, inplace=False)`

Return the operator composition with another Pauli.

**Parameters**

*   **other** ([*Pauli*](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – a Pauli object.
*   **qargs** (*list or None*) – Optional, qubits to apply dot product on (default: None).
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].
*   **inplace** (*bool*) – If True update in-place (default: False).

**Returns**

The composed Pauli.

**Return type**

[Pauli](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – if other cannot be converted to an operator, or has incompatible dimensions for specified subsystems.

<Admonition title="Note" type="note">
  Composition (`&`) by default is defined as left matrix multiplication for matrix operators, while [`dot()`](qiskit.quantum_info.Pauli.dot#qiskit.quantum_info.Pauli.dot "qiskit.quantum_info.Pauli.dot") is defined as right matrix multiplication. That is that `A & B == A.compose(B)` is equivalent to `B.dot(A)` when `A` and `B` are of the same type.

  Setting the `front=True` kwarg changes this to right matrix multiplication and is equivalent to the [`dot()`](qiskit.quantum_info.Pauli.dot#qiskit.quantum_info.Pauli.dot "qiskit.quantum_info.Pauli.dot") method `A.dot(B) == A.compose(B, front=True)`.
</Admonition>
