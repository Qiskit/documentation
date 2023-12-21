# qiskit.dagcircuit.DAGCircuit.topological\_op\_nodes

`DAGCircuit.topological_op_nodes(key=None)`

Yield op nodes in topological order.

Allowed to pass in specific key to break ties in top order

**Parameters**

**key** (*Callable*) – A callable which will take a DAGNode object and return a string sort key. If not specified the `sort_key` attribute will be used as the sort key for each node.

**Returns**

op node in topological order

**Return type**

generator([DAGOpNode](qiskit.dagcircuit.DAGOpNode#qiskit.dagcircuit.DAGOpNode "qiskit.dagcircuit.DAGOpNode"))
