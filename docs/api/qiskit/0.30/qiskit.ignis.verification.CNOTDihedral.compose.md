# qiskit.ignis.verification.CNOTDihedral.compose

`CNOTDihedral.compose(other, qargs=None, front=False)`

Return the composed operator.

**Parameters**

*   **other** ([*CNOTDihedral*](qiskit.ignis.verification.CNOTDihedral#qiskit.ignis.verification.CNOTDihedral "qiskit.ignis.verification.CNOTDihedral")) – an operator object.
*   **qargs** (*None*) – using specific qargs is not implemented for this operator.
*   **front** (*bool*) – if True compose using right operator multiplication, instead of left multiplication \[default: False].

**Returns**

The operator self @ other.

**Return type**

[CNOTDihedral](qiskit.ignis.verification.CNOTDihedral#qiskit.ignis.verification.CNOTDihedral "qiskit.ignis.verification.CNOTDihedral")

**Raises**

*   **QiskitError** – if operators have incompatible dimensions for composition.
*   **NotImplementedError** – if qargs is not None.

## Additional Information:

Composition (`@`) is defined as left matrix multiplication for matrix operators. That is that `A @ B` is equal to `B * A`. Setting `front=True` returns right matrix multiplication `A * B` and is equivalent to the [`dot()`](qiskit.ignis.verification.CNOTDihedral.dot#qiskit.ignis.verification.CNOTDihedral.dot "qiskit.ignis.verification.CNOTDihedral.dot") method.
