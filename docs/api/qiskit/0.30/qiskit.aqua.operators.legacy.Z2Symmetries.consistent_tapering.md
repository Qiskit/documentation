# qiskit.aqua.operators.legacy.Z2Symmetries.consistent\_tapering

`Z2Symmetries.consistent_tapering(operator)`

Tapering the operator with the same manner of how this tapered operator is created. i.e., using the same Cliffords and tapering values.

**Parameters**

**operator** ([*WeightedPauliOperator*](qiskit.aqua.operators.legacy.WeightedPauliOperator#qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator")) – the to-be-tapered operator

**Returns**

the tapered operator

**Return type**

TaperedWeightedPauliOperator

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – The given operator does not commute with the symmetry
