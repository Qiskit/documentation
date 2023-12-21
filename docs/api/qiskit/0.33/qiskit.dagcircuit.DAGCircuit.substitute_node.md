# qiskit.dagcircuit.DAGCircuit.substitute\_node

`DAGCircuit.substitute_node(node, op, inplace=False)`

Replace an DAGOpNode with a single instruction. qargs, cargs and conditions for the new instruction will be inferred from the node to be replaced. The new instruction will be checked to match the shape of the replaced instruction.

**Parameters**

*   **node** ([*DAGOpNode*](qiskit.dagcircuit.DAGOpNode#qiskit.dagcircuit.DAGOpNode "qiskit.dagcircuit.DAGOpNode")) – Node to be replaced
*   **op** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – The [`qiskit.circuit.Instruction`](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction") instance to be added to the DAG
*   **inplace** (*bool*) – Optional, default False. If True, existing DAG node will be modified to include op. Otherwise, a new DAG node will be used.

**Returns**

the new node containing the added instruction.

**Return type**

[DAGOpNode](qiskit.dagcircuit.DAGOpNode#qiskit.dagcircuit.DAGOpNode "qiskit.dagcircuit.DAGOpNode")

**Raises**

*   [**DAGCircuitError**](qiskit.dagcircuit.DAGCircuitError#qiskit.dagcircuit.DAGCircuitError "qiskit.dagcircuit.DAGCircuitError") – If replacement instruction was incompatible with
*   **location of target node.** –
