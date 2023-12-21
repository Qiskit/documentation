# qiskit.opflow\.primitive\_ops.Z2Symmetries.consistent\_tapering

`Z2Symmetries.consistent_tapering(operator)`

Tapering the operator with the same manner of how this tapered operator is created. i.e., using the same Cliffords and tapering values.

**Parameters**

**operator** (`PauliSumOp`) – the to-be-tapered operator

**Return type**

`OperatorBase`

**Returns**

The tapered operator

**Raises**

[**OpflowError**](qiskit.opflow.OpflowError#qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – The given operator does not commute with the symmetry
