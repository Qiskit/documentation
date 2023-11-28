# Z2Symmetries

<span id="undefined" />

`Z2Symmetries(symmetries, sq_paulis, sq_list, tapering_values=None)`

Bases: `object`

Z2 Symmetries

**Parameters**

*   **symmetries** (*list\[*[*Pauli*](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")*]*) – the list of Pauli objects representing the Z\_2 symmetries
*   **sq\_paulis** (*list\[*[*Pauli*](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")*]*) – the list of single - qubit Pauli objects to construct the Clifford operators
*   **sq\_list** (*list\[int]*) – the list of support of the single-qubit Pauli objects used to build the Clifford operators
*   **tapering\_values** (*list\[int], optional*) – values determines the sector.

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Invalid paulis

## Methods

|                                                                                                                                                                                                                      |                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [`consistent_tapering`](qiskit.aqua.operators.legacy.Z2Symmetries.consistent_tapering#qiskit.aqua.operators.legacy.Z2Symmetries.consistent_tapering "qiskit.aqua.operators.legacy.Z2Symmetries.consistent_tapering") | Tapering the operator with the same manner of how this tapered operator is created.                           |
| [`copy`](qiskit.aqua.operators.legacy.Z2Symmetries.copy#qiskit.aqua.operators.legacy.Z2Symmetries.copy "qiskit.aqua.operators.legacy.Z2Symmetries.copy")                                                             | Get a copy of self.                                                                                           |
| [`find_Z2_symmetries`](qiskit.aqua.operators.legacy.Z2Symmetries.find_Z2_symmetries#qiskit.aqua.operators.legacy.Z2Symmetries.find_Z2_symmetries "qiskit.aqua.operators.legacy.Z2Symmetries.find_Z2_symmetries")     | Finds Z2 Pauli-type symmetries of an Operator.                                                                |
| [`is_empty`](qiskit.aqua.operators.legacy.Z2Symmetries.is_empty#qiskit.aqua.operators.legacy.Z2Symmetries.is_empty "qiskit.aqua.operators.legacy.Z2Symmetries.is_empty")                                             | Check the z2\_symmetries is empty or not.                                                                     |
| [`taper`](qiskit.aqua.operators.legacy.Z2Symmetries.taper#qiskit.aqua.operators.legacy.Z2Symmetries.taper "qiskit.aqua.operators.legacy.Z2Symmetries.taper")                                                         | Taper an operator based on the z2\_symmetries info and sector defined by tapering\_values.                    |
| [`two_qubit_reduction`](qiskit.aqua.operators.legacy.Z2Symmetries.two_qubit_reduction#qiskit.aqua.operators.legacy.Z2Symmetries.two_qubit_reduction "qiskit.aqua.operators.legacy.Z2Symmetries.two_qubit_reduction") | Eliminates the central and last qubit in a list of Pauli that has diagonal operators (Z,I) at those positions |

## Attributes

<span id="undefined" />

### cliffords

Get clifford operators, build based on symmetries and single-qubit X.

**Returns**

a list of unitaries used to diagonalize the Hamiltonian.

**Return type**

list\[[WeightedPauliOperator](qiskit.aqua.operators.legacy.WeightedPauliOperator#qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator")]

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
