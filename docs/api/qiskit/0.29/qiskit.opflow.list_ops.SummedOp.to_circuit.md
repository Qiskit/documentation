# qiskit.opflow\.list\_ops.SummedOp.to\_circuit

`SummedOp.to_circuit()`

Returns the quantum circuit, representing the SummedOp. In the first step, the SummedOp is converted to MatrixOp. This is straightforward for most operators, but it is not supported for operators containing parameterized PrimitiveOps (in that case, OpflowError is raised). In the next step, the MatrixOp representation of SummedOp is converted to circuit. In most cases, if the summands themselves are unitary operators, the SummedOp itself is non-unitary and can not be converted to circuit. In that case, ExtensionError is raised in the underlying modules.

**Return type**

`QuantumCircuit`

**Returns**

The circuit representation of the summed operator.

**Raises**

*   [**OpflowError**](qiskit.opflow.OpflowError#qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – if SummedOp can not be converted to MatrixOp (e.g. SummedOp is composed of
*   **parameterized PrimitiveOps**\*\*)\*\*\*\*\*\* –
