# qiskit.dagcircuit.DAGCircuit.topological\_nodes

`DAGCircuit.topological_nodes(key=None)`

Yield nodes in topological order.

**Parameters**

**key** (*Callable*) – A callable which will take a DAGNode object and return a string sort key. If not specified the `sort_key` attribute will be used as the sort key for each node.

**Returns**

node in topological order

**Return type**

generator([DAGOpNode](qiskit.dagcircuit.DAGOpNode#qiskit.dagcircuit.DAGOpNode "qiskit.dagcircuit.DAGOpNode"), [DAGInNode](qiskit.dagcircuit.DAGInNode#qiskit.dagcircuit.DAGInNode "qiskit.dagcircuit.DAGInNode"), or [DAGOutNode](qiskit.dagcircuit.DAGOutNode#qiskit.dagcircuit.DAGOutNode "qiskit.dagcircuit.DAGOutNode"))
