# qiskit.dagcircuit.DAGNode.semantic\_eq

`static DAGNode.semantic_eq(node1, node2, bit_indices1=None, bit_indices2=None)`

Check if DAG nodes are considered equivalent, e.g., as a node\_match for nx.is\_isomorphic.

**Parameters**

*   **node1** ([*DAGNode*](qiskit.dagcircuit.DAGNode#qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")) – A node to compare.
*   **node2** ([*DAGNode*](qiskit.dagcircuit.DAGNode#qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")) – The other node to compare.
*   **bit\_indices1** (*dict*) – Dictionary mapping Bit instances to their index within the circuit containing node1
*   **bit\_indices2** (*dict*) – Dictionary mapping Bit instances to their index within the circuit containing node2

**Returns**

If node1 == node2

**Return type**

Bool
