# qiskit.dagcircuit.DAGCircuit.op\_nodes

`DAGCircuit.op_nodes(op=None, include_directives=True)`

Get the list of “op” nodes in the dag.

**Parameters**

*   **op** (*Type*) – [`qiskit.circuit.Instruction`](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction") subclass op nodes to return. If None, return all op nodes.
*   **include\_directives** (*bool*) – include barrier, snapshot etc.

**Returns**

the list of node ids containing the given op.

**Return type**

list\[[DAGOpNode](qiskit.dagcircuit.DAGOpNode#qiskit.dagcircuit.DAGOpNode "qiskit.dagcircuit.DAGOpNode")]
