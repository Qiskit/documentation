# qiskit.aqua.operators.legacy.Z2Symmetries.taper

`Z2Symmetries.taper(operator, tapering_values=None)`

Taper an operator based on the z2\_symmetries info and sector defined by tapering\_values. The tapering\_values will be stored into the resulted operator for a record.

**Parameters**

*   **operator** ([*WeightedPauliOperator*](qiskit.aqua.operators.legacy.WeightedPauliOperator#qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator")) – the to-be-tapered operator.
*   **tapering\_values** (*list\[int], optional*) – if None, returns operators at each sector; otherwise, returns the operator located in that sector.

**Returns**

**If**

tapering\_values is None: \[:class\`WeightedPauliOperator\`]; otherwise, [`WeightedPauliOperator`](qiskit.aqua.operators.legacy.WeightedPauliOperator#qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator")

**Return type**

list\[[WeightedPauliOperator](qiskit.aqua.operators.legacy.WeightedPauliOperator#qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator")] or [WeightedPauliOperator](qiskit.aqua.operators.legacy.WeightedPauliOperator#qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator")

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Z2 symmetries, single qubit pauli and single qubit list cannot be empty
