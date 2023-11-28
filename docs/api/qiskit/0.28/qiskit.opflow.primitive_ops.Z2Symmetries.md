# qiskit.opflow\.primitive\_ops.Z2Symmetries

<span id="undefined" />

`Z2Symmetries(symmetries, sq_paulis, sq_list, tapering_values=None)`

Z2 Symmetries

**Parameters**

*   **symmetries** (`List`\[`Pauli`]) – the list of Pauli objects representing the Z\_2 symmetries
*   **sq\_paulis** (`List`\[`Pauli`]) – the list of single - qubit Pauli objects to construct the Clifford operators
*   **sq\_list** (`List`\[`int`]) – the list of support of the single-qubit Pauli objects used to build the Clifford operators
*   **tapering\_values** (`Optional`\[`List`\[`int`]]) – values determines the sector.

**Raises**

[**OpflowError**](qiskit.opflow.OpflowError#qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – Invalid paulis

<span id="undefined" />

`__init__(symmetries, sq_paulis, sq_list, tapering_values=None)`

**Parameters**

*   **symmetries** (`List`\[`Pauli`]) – the list of Pauli objects representing the Z\_2 symmetries
*   **sq\_paulis** (`List`\[`Pauli`]) – the list of single - qubit Pauli objects to construct the Clifford operators
*   **sq\_list** (`List`\[`int`]) – the list of support of the single-qubit Pauli objects used to build the Clifford operators
*   **tapering\_values** (`Optional`\[`List`\[`int`]]) – values determines the sector.

**Raises**

[**OpflowError**](qiskit.opflow.OpflowError#qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – Invalid paulis

## Methods

|                                                                                                                                                                 |                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [`__init__`](#qiskit.opflow.primitive_ops.Z2Symmetries.__init__ "qiskit.opflow.primitive_ops.Z2Symmetries.__init__")(symmetries, sq\_paulis, sq\_list\[, …])    | **type symmetries**`List`\[`Pauli`]                                                        |
| [`consistent_tapering`](#qiskit.opflow.primitive_ops.Z2Symmetries.consistent_tapering "qiskit.opflow.primitive_ops.Z2Symmetries.consistent_tapering")(operator) | Tapering the operator with the same manner of how this tapered operator is created.        |
| [`copy`](#qiskit.opflow.primitive_ops.Z2Symmetries.copy "qiskit.opflow.primitive_ops.Z2Symmetries.copy")()                                                      | Get a copy of self.                                                                        |
| [`find_Z2_symmetries`](#qiskit.opflow.primitive_ops.Z2Symmetries.find_Z2_symmetries "qiskit.opflow.primitive_ops.Z2Symmetries.find_Z2_symmetries")(operator)    | Finds Z2 Pauli-type symmetries of an Operator.                                             |
| [`is_empty`](#qiskit.opflow.primitive_ops.Z2Symmetries.is_empty "qiskit.opflow.primitive_ops.Z2Symmetries.is_empty")()                                          | Check the z2\_symmetries is empty or not.                                                  |
| [`taper`](#qiskit.opflow.primitive_ops.Z2Symmetries.taper "qiskit.opflow.primitive_ops.Z2Symmetries.taper")(operator)                                           | Taper an operator based on the z2\_symmetries info and sector defined by tapering\_values. |

## Attributes

|                                                                                                                                           |                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`cliffords`](#qiskit.opflow.primitive_ops.Z2Symmetries.cliffords "qiskit.opflow.primitive_ops.Z2Symmetries.cliffords")                   | Get clifford operators, build based on symmetries and single-qubit X. |
| [`settings`](#qiskit.opflow.primitive_ops.Z2Symmetries.settings "qiskit.opflow.primitive_ops.Z2Symmetries.settings")                      | Return operator settings.                                             |
| [`sq_list`](#qiskit.opflow.primitive_ops.Z2Symmetries.sq_list "qiskit.opflow.primitive_ops.Z2Symmetries.sq_list")                         | returns sq list                                                       |
| [`sq_paulis`](#qiskit.opflow.primitive_ops.Z2Symmetries.sq_paulis "qiskit.opflow.primitive_ops.Z2Symmetries.sq_paulis")                   | returns sq paulis                                                     |
| [`symmetries`](#qiskit.opflow.primitive_ops.Z2Symmetries.symmetries "qiskit.opflow.primitive_ops.Z2Symmetries.symmetries")                | return symmetries                                                     |
| [`tapering_values`](#qiskit.opflow.primitive_ops.Z2Symmetries.tapering_values "qiskit.opflow.primitive_ops.Z2Symmetries.tapering_values") | returns tapering values                                               |

<span id="undefined" />

`property cliffords`

Get clifford operators, build based on symmetries and single-qubit X. :rtype: `List`\[`PauliSumOp`] :returns: a list of unitaries used to diagonalize the Hamiltonian.

<span id="undefined" />

`consistent_tapering(operator)`

Tapering the operator with the same manner of how this tapered operator is created. i.e., using the same Cliffords and tapering values.

**Parameters**

**operator** (`PauliSumOp`) – the to-be-tapered operator

**Return type**

`OperatorBase`

**Returns**

The tapered operator

**Raises**

[**OpflowError**](qiskit.opflow.OpflowError#qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – The given operator does not commute with the symmetry

<span id="undefined" />

`copy()`

Get a copy of self. :rtype: `Z2Symmetries` :returns: copy

<span id="undefined" />

`classmethod find_Z2_symmetries(operator)`

Finds Z2 Pauli-type symmetries of an Operator.

**Return type**

`Z2Symmetries`

**Returns**

a z2\_symmetries object contains symmetries, single-qubit X, single-qubit list.

<span id="undefined" />

`is_empty()`

Check the z2\_symmetries is empty or not. :rtype: `bool` :returns: Empty or not

<span id="undefined" />

`property settings`

Return operator settings.

**Return type**

`Dict`

<span id="undefined" />

`property sq_list`

returns sq list

<span id="undefined" />

`property sq_paulis`

returns sq paulis

<span id="undefined" />

`property symmetries`

return symmetries

<span id="undefined" />

`taper(operator)`

Taper an operator based on the z2\_symmetries info and sector defined by tapering\_values. The tapering\_values will be stored into the resulted operator for a record.

**Parameters**

**operator** (`PauliSumOp`) – the to-be-tapered operator.

**Returns**

\[:class\`PauliSumOp\`]; otherwise, [`PauliSumOp`](qiskit.opflow.primitive_ops.PauliSumOp#qiskit.opflow.primitive_ops.PauliSumOp "qiskit.opflow.primitive_ops.PauliSumOp")

**Return type**

If tapering\_values is None

**Raises**

[**OpflowError**](qiskit.opflow.OpflowError#qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – Z2 symmetries, single qubit pauli and single qubit list cannot be empty

<span id="undefined" />

`property tapering_values`

returns tapering values
