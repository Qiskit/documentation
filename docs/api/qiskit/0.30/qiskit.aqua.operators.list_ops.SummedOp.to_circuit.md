# qiskit.aqua.operators.list\_ops.SummedOp.to\_circuit

`SummedOp.to_circuit()`

Returns the quantum circuit, representing the SummedOp. In the first step, the SummedOp is converted to MatrixOp. This is straightforward for most operators, but it is not supported for operators containing parametrized PrimitiveOps (in that case, AquaError is raised). In the next step, the MatrixOp representation of SummedOp is converted to circuit. In most cases, if the summands themselves are unitary operators, the SummedOp itself is non-unitary and can not be converted to circuit. In that case, ExtensionError is raised in the underlying modules.

**Return type**

`QuantumCircuit`

**Returns**

The circuit representation of the summed operator.

**Raises**

*   [**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if SummedOp can not be converted to MatrixOp (e.g. SummedOp is composed of
*   **parametrized PrimitiveOps**\*\*)\*\*\*\*\*\* –
