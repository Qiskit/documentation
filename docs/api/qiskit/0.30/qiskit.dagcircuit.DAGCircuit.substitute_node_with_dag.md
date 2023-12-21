# qiskit.dagcircuit.DAGCircuit.substitute\_node\_with\_dag

`DAGCircuit.substitute_node_with_dag(node, input_dag, wires=None)`

Replace one node with dag.

**Parameters**

*   **node** ([*DAGNode*](qiskit.dagcircuit.DAGNode#qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")) – node to substitute
*   **input\_dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – circuit that will substitute the node
*   **wires** (*list\[Bit]*) – gives an order for (qu)bits in the input circuit. This order gets matched to the node wires by qargs first, then cargs, then conditions.

**Raises**

[**DAGCircuitError**](qiskit.dagcircuit.DAGCircuitError#qiskit.dagcircuit.DAGCircuitError "qiskit.dagcircuit.DAGCircuitError") – if met with unexpected predecessor/successors
