# qiskit.dagcircuit.DAGCircuit.apply\_operation\_back

`DAGCircuit.apply_operation_back(op, qargs=None, cargs=None)`

Apply an operation to the output of the circuit.

**Parameters**

*   **op** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – the operation associated with the DAG node
*   **qargs** (*list\[*[*Qubit*](qiskit.circuit.Qubit#qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – qubits that op will be applied to
*   **cargs** (*list\[*[*Clbit*](qiskit.circuit.Clbit#qiskit.circuit.Clbit "qiskit.circuit.Clbit")*]*) – cbits that op will be applied to

**Returns**

the node for the op that was added to the dag

**Return type**

[DAGOpNode](qiskit.dagcircuit.DAGOpNode#qiskit.dagcircuit.DAGOpNode "qiskit.dagcircuit.DAGOpNode")

**Raises**

[**DAGCircuitError**](qiskit.dagcircuit.DAGCircuitError#qiskit.dagcircuit.DAGCircuitError "qiskit.dagcircuit.DAGCircuitError") – if a leaf node is connected to multiple outputs
