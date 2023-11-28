# Z2Symmetries

<span id="undefined" />

`Z2Symmetries(symmetries, sq_paulis, sq_list, tapering_values=None, tol=1e-14)`

Bases: `object`

Z2 Symmetries

**Parameters**

*   **symmetries** (`List`\[`Pauli`]) – the list of Pauli objects representing the Z\_2 symmetries
*   **sq\_paulis** (`List`\[`Pauli`]) – the list of single - qubit Pauli objects to construct the Clifford operators
*   **sq\_list** (`List`\[`int`]) – the list of support of the single-qubit Pauli objects used to build the Clifford operators
*   **tapering\_values** (`Optional`\[`List`\[`int`]]) – values determines the sector.
*   **tol** (`float`) – Tolerance threshold for ignoring real and complex parts of a coefficient.

**Raises**

[**OpflowError**](qiskit.opflow.OpflowError#qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – Invalid paulis

## Methods Defined Here

|                                                                                                                                                                                                                   |                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [`consistent_tapering`](qiskit.opflow.primitive_ops.Z2Symmetries.consistent_tapering#qiskit.opflow.primitive_ops.Z2Symmetries.consistent_tapering "qiskit.opflow.primitive_ops.Z2Symmetries.consistent_tapering") | Tapering the operator with the same manner of how this tapered operator is created.        |
| [`copy`](qiskit.opflow.primitive_ops.Z2Symmetries.copy#qiskit.opflow.primitive_ops.Z2Symmetries.copy "qiskit.opflow.primitive_ops.Z2Symmetries.copy")                                                             | Get a copy of self.                                                                        |
| [`find_Z2_symmetries`](qiskit.opflow.primitive_ops.Z2Symmetries.find_Z2_symmetries#qiskit.opflow.primitive_ops.Z2Symmetries.find_Z2_symmetries "qiskit.opflow.primitive_ops.Z2Symmetries.find_Z2_symmetries")     | Finds Z2 Pauli-type symmetries of an Operator.                                             |
| [`is_empty`](qiskit.opflow.primitive_ops.Z2Symmetries.is_empty#qiskit.opflow.primitive_ops.Z2Symmetries.is_empty "qiskit.opflow.primitive_ops.Z2Symmetries.is_empty")                                             | Check the z2\_symmetries is empty or not.                                                  |
| [`taper`](qiskit.opflow.primitive_ops.Z2Symmetries.taper#qiskit.opflow.primitive_ops.Z2Symmetries.taper "qiskit.opflow.primitive_ops.Z2Symmetries.taper")                                                         | Taper an operator based on the z2\_symmetries info and sector defined by tapering\_values. |

## Attributes

<span id="undefined" />

### cliffords

Get clifford operators, build based on symmetries and single-qubit X. :rtype: `List`\[`PauliSumOp`] :returns: a list of unitaries used to diagonalize the Hamiltonian.

<span id="undefined" />

### settings

Return operator settings.

**Return type**

`Dict`

<span id="undefined" />

### sq\_list

returns sq list

<span id="undefined" />

### sq\_paulis

returns sq paulis

<span id="undefined" />

### symmetries

return symmetries

<span id="undefined" />

### tapering\_values

returns tapering values

<span id="undefined" />

### tol

Tolerance threshold for ignoring real and complex parts of a coefficient.
