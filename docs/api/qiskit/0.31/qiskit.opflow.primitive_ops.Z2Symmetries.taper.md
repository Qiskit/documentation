# qiskit.opflow\.primitive\_ops.Z2Symmetries.taper

`Z2Symmetries.taper(operator)`

Taper an operator based on the z2\_symmetries info and sector defined by tapering\_values. The tapering\_values will be stored into the resulted operator for a record.

**Parameters**

**operator** (`PauliSumOp`) – the to-be-tapered operator.

**Returns**

\[:class\`PauliSumOp\`]; otherwise, [`PauliSumOp`](qiskit.opflow.primitive_ops.PauliSumOp#qiskit.opflow.primitive_ops.PauliSumOp "qiskit.opflow.primitive_ops.PauliSumOp")

**Return type**

If tapering\_values is None

**Raises**

[**OpflowError**](qiskit.opflow.OpflowError#qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – Z2 symmetries, single qubit pauli and single qubit list cannot be empty
