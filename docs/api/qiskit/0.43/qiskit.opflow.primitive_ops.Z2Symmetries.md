---
title: Z2Symmetries
description: API reference for qiskit.opflow.primitive_ops.Z2Symmetries
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.primitive_ops.Z2Symmetries
---

# Z2Symmetries

<span id="qiskit.opflow.primitive_ops.Z2Symmetries" />

`Z2Symmetries(symmetries, sq_paulis, sq_list, tapering_values=None, tol=1e-14)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/primitive_ops/tapered_pauli_sum_op.py "view source code")

Bases: `object`

Deprecated: Z2 Symmetries

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.primitive_ops.tapered_pauli_sum_op.Z2Symmetries` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

*   **symmetries** (*List\[*[*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.operators.symplectic.pauli.Pauli")*]*) – the list of Pauli objects representing the Z\_2 symmetries
*   **sq\_paulis** (*List\[*[*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.operators.symplectic.pauli.Pauli")*]*) – the list of single - qubit Pauli objects to construct the Clifford operators
*   **sq\_list** (*List\[int]*) – the list of support of the single-qubit Pauli objects used to build the Clifford operators
*   **tapering\_values** (*List\[int] | None*) – values determines the sector.
*   **tol** (*float*) – Tolerance threshold for ignoring real and complex parts of a coefficient.

**Raises**

[**OpflowError**](qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – Invalid paulis

**Methods Defined Here**

|                                                                                                                                                      |                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [`consistent_tapering`](qiskit.opflow.primitive_ops.Z2Symmetries#consistent_tapering "qiskit.opflow.primitive_ops.Z2Symmetries.consistent_tapering") | Tapering the operator with the same manner of how this tapered operator is created.        |
| [`convert_clifford`](qiskit.opflow.primitive_ops.Z2Symmetries#convert_clifford "qiskit.opflow.primitive_ops.Z2Symmetries.convert_clifford")          | This method operates the first part of the tapering.                                       |
| [`copy`](qiskit.opflow.primitive_ops.Z2Symmetries#copy "qiskit.opflow.primitive_ops.Z2Symmetries.copy")                                              | Get a copy of self.                                                                        |
| [`find_Z2_symmetries`](qiskit.opflow.primitive_ops.Z2Symmetries#find_z2_symmetries "qiskit.opflow.primitive_ops.Z2Symmetries.find_Z2_symmetries")    | Finds Z2 Pauli-type symmetries of an Operator.                                             |
| [`is_empty`](qiskit.opflow.primitive_ops.Z2Symmetries#is_empty "qiskit.opflow.primitive_ops.Z2Symmetries.is_empty")                                  | Check the z2\_symmetries is empty or not.                                                  |
| [`taper`](qiskit.opflow.primitive_ops.Z2Symmetries#taper "qiskit.opflow.primitive_ops.Z2Symmetries.taper")                                           | Taper an operator based on the z2\_symmetries info and sector defined by tapering\_values. |
| [`taper_clifford`](qiskit.opflow.primitive_ops.Z2Symmetries#taper_clifford "qiskit.opflow.primitive_ops.Z2Symmetries.taper_clifford")                | This method operates the second part of the tapering.                                      |

## Attributes

<span id="qiskit.opflow.primitive_ops.Z2Symmetries.cliffords" />

### cliffords

Get clifford operators, build based on symmetries and single-qubit X. :returns: a list of unitaries used to diagonalize the Hamiltonian.

<span id="qiskit.opflow.primitive_ops.Z2Symmetries.settings" />

### settings

Return operator settings.

<span id="qiskit.opflow.primitive_ops.Z2Symmetries.sq_list" />

### sq\_list

returns sq list

<span id="qiskit.opflow.primitive_ops.Z2Symmetries.sq_paulis" />

### sq\_paulis

returns sq paulis

<span id="qiskit.opflow.primitive_ops.Z2Symmetries.symmetries" />

### symmetries

return symmetries

<span id="qiskit.opflow.primitive_ops.Z2Symmetries.tapering_values" />

### tapering\_values

returns tapering values

<span id="qiskit.opflow.primitive_ops.Z2Symmetries.tol" />

### tol

Tolerance threshold for ignoring real and complex parts of a coefficient.

