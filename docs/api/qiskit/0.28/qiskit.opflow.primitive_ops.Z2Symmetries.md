---
title: Z2Symmetries
description: API reference for qiskit.opflow.primitive_ops.Z2Symmetries
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.primitive_ops.Z2Symmetries
---

# qiskit.opflow\.primitive\_ops.Z2Symmetries

<span id="qiskit.opflow.primitive_ops.Z2Symmetries" />

`Z2Symmetries(symmetries, sq_paulis, sq_list, tapering_values=None)`

Z2 Symmetries

**Parameters**

*   **symmetries** (`List`\[`Pauli`]) – the list of Pauli objects representing the Z\_2 symmetries
*   **sq\_paulis** (`List`\[`Pauli`]) – the list of single - qubit Pauli objects to construct the Clifford operators
*   **sq\_list** (`List`\[`int`]) – the list of support of the single-qubit Pauli objects used to build the Clifford operators
*   **tapering\_values** (`Optional`\[`List`\[`int`]]) – values determines the sector.

**Raises**

[**OpflowError**](qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – Invalid paulis

### \_\_init\_\_

<span id="qiskit.opflow.primitive_ops.Z2Symmetries.__init__" />

`__init__(symmetries, sq_paulis, sq_list, tapering_values=None)`

**Parameters**

*   **symmetries** (`List`\[`Pauli`]) – the list of Pauli objects representing the Z\_2 symmetries
*   **sq\_paulis** (`List`\[`Pauli`]) – the list of single - qubit Pauli objects to construct the Clifford operators
*   **sq\_list** (`List`\[`int`]) – the list of support of the single-qubit Pauli objects used to build the Clifford operators
*   **tapering\_values** (`Optional`\[`List`\[`int`]]) – values determines the sector.

**Raises**

[**OpflowError**](qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – Invalid paulis

## Methods

## Attributes

### cliffords

<span id="qiskit.opflow.primitive_ops.Z2Symmetries.cliffords" />

`property cliffords`

Get clifford operators, build based on symmetries and single-qubit X. :rtype: `List`\[`PauliSumOp`] :returns: a list of unitaries used to diagonalize the Hamiltonian.

### consistent\_tapering

<span id="qiskit.opflow.primitive_ops.Z2Symmetries.consistent_tapering" />

`consistent_tapering(operator)`

Tapering the operator with the same manner of how this tapered operator is created. i.e., using the same Cliffords and tapering values.

**Parameters**

**operator** (`PauliSumOp`) – the to-be-tapered operator

**Return type**

`OperatorBase`

**Returns**

The tapered operator

**Raises**

[**OpflowError**](qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – The given operator does not commute with the symmetry

### copy

<span id="qiskit.opflow.primitive_ops.Z2Symmetries.copy" />

`copy()`

Get a copy of self. :rtype: `Z2Symmetries` :returns: copy

### find\_Z2\_symmetries

<span id="qiskit.opflow.primitive_ops.Z2Symmetries.find_Z2_symmetries" />

`classmethod find_Z2_symmetries(operator)`

Finds Z2 Pauli-type symmetries of an Operator.

**Return type**

`Z2Symmetries`

**Returns**

a z2\_symmetries object contains symmetries, single-qubit X, single-qubit list.

### is\_empty

<span id="qiskit.opflow.primitive_ops.Z2Symmetries.is_empty" />

`is_empty()`

Check the z2\_symmetries is empty or not. :rtype: `bool` :returns: Empty or not

### settings

<span id="qiskit.opflow.primitive_ops.Z2Symmetries.settings" />

`property settings`

Return operator settings.

**Return type**

`Dict`

### sq\_list

<span id="qiskit.opflow.primitive_ops.Z2Symmetries.sq_list" />

`property sq_list`

returns sq list

### sq\_paulis

<span id="qiskit.opflow.primitive_ops.Z2Symmetries.sq_paulis" />

`property sq_paulis`

returns sq paulis

### symmetries

<span id="qiskit.opflow.primitive_ops.Z2Symmetries.symmetries" />

`property symmetries`

return symmetries

### taper

<span id="qiskit.opflow.primitive_ops.Z2Symmetries.taper" />

`taper(operator)`

Taper an operator based on the z2\_symmetries info and sector defined by tapering\_values. The tapering\_values will be stored into the resulted operator for a record.

**Parameters**

**operator** (`PauliSumOp`) – the to-be-tapered operator.

**Returns**

\[:class\`PauliSumOp\`]; otherwise, [`PauliSumOp`](qiskit.opflow.primitive_ops.PauliSumOp "qiskit.opflow.primitive_ops.PauliSumOp")

**Return type**

If tapering\_values is None

**Raises**

[**OpflowError**](qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – Z2 symmetries, single qubit pauli and single qubit list cannot be empty

### tapering\_values

<span id="qiskit.opflow.primitive_ops.Z2Symmetries.tapering_values" />

`property tapering_values`

returns tapering values

