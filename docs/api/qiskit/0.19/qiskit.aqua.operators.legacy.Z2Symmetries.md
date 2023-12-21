---
title: Z2Symmetries
description: API reference for qiskit.aqua.operators.legacy.Z2Symmetries
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.legacy.Z2Symmetries
---

# Z2Symmetries

<span id="qiskit.aqua.operators.legacy.Z2Symmetries" />

`Z2Symmetries(symmetries, sq_paulis, sq_list, tapering_values=None)`

Z2 Symmetries

**Parameters**

*   **symmetries** (*list\[*[*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")*]*) – the list of Pauli objects representing the Z\_2 symmetries
*   **sq\_paulis** (*list\[*[*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")*]*) – the list of single - qubit Pauli objects to construct the Clifford operators
*   **sq\_list** (*list\[int]*) – the list of support of the single-qubit Pauli objects used to build the Clifford operators
*   **tapering\_values** (*list\[int], optional*) – values determines the sector.

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Invalid paulis

## Attributes

|                                                                                                                                                         |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`Z2Symmetries.cliffords`](qiskit.aqua.operators.legacy.Z2Symmetries.cliffords "qiskit.aqua.operators.legacy.Z2Symmetries.cliffords")                   | Get clifford operators, build based on symmetries and single-qubit X. |
| [`Z2Symmetries.sq_list`](qiskit.aqua.operators.legacy.Z2Symmetries.sq_list "qiskit.aqua.operators.legacy.Z2Symmetries.sq_list")                         | returns sq list                                                       |
| [`Z2Symmetries.sq_paulis`](qiskit.aqua.operators.legacy.Z2Symmetries.sq_paulis "qiskit.aqua.operators.legacy.Z2Symmetries.sq_paulis")                   | returns sq paulis                                                     |
| [`Z2Symmetries.symmetries`](qiskit.aqua.operators.legacy.Z2Symmetries.symmetries "qiskit.aqua.operators.legacy.Z2Symmetries.symmetries")                | return symmetries                                                     |
| [`Z2Symmetries.tapering_values`](qiskit.aqua.operators.legacy.Z2Symmetries.tapering_values "qiskit.aqua.operators.legacy.Z2Symmetries.tapering_values") | returns tapering values                                               |

## Methods

|                                                                                                                                                                                  |                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [`Z2Symmetries.consistent_tapering`](qiskit.aqua.operators.legacy.Z2Symmetries.consistent_tapering "qiskit.aqua.operators.legacy.Z2Symmetries.consistent_tapering")(operator)    | Tapering the operator with the same manner of how this tapered operator is created.                           |
| [`Z2Symmetries.copy`](qiskit.aqua.operators.legacy.Z2Symmetries.copy "qiskit.aqua.operators.legacy.Z2Symmetries.copy")()                                                         | Get a copy of self.                                                                                           |
| [`Z2Symmetries.find_Z2_symmetries`](qiskit.aqua.operators.legacy.Z2Symmetries.find_Z2_symmetries "qiskit.aqua.operators.legacy.Z2Symmetries.find_Z2_symmetries")(operator)       | Finds Z2 Pauli-type symmetries of an Operator.                                                                |
| [`Z2Symmetries.is_empty`](qiskit.aqua.operators.legacy.Z2Symmetries.is_empty "qiskit.aqua.operators.legacy.Z2Symmetries.is_empty")()                                             | Check the z2\_symmetries is empty or not.                                                                     |
| [`Z2Symmetries.taper`](qiskit.aqua.operators.legacy.Z2Symmetries.taper "qiskit.aqua.operators.legacy.Z2Symmetries.taper")(operator\[, tapering\_values])                         | Taper an operator based on the z2\_symmetries info and sector defined by tapering\_values.                    |
| [`Z2Symmetries.two_qubit_reduction`](qiskit.aqua.operators.legacy.Z2Symmetries.two_qubit_reduction "qiskit.aqua.operators.legacy.Z2Symmetries.two_qubit_reduction")(operator, …) | Eliminates the central and last qubit in a list of Pauli that has diagonal operators (Z,I) at those positions |

