# DAGInNode

`DAGInNode(wire)`

Bases: `qiskit.dagcircuit.dagnode.DAGNode`

Object to represent an incoming wire node in the DAGCircuit.

Create an incoming node

## Methods

|                                                                                                                                            |                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| [`semantic_eq`](qiskit.dagcircuit.DAGInNode.semantic_eq#qiskit.dagcircuit.DAGInNode.semantic_eq "qiskit.dagcircuit.DAGInNode.semantic_eq") | Check if DAG nodes are considered equivalent, e.g., as a node\_match for nx.is\_isomorphic. |

## Attributes

### cargs

Returns list of Clbit, else an empty list.

### condition

Returns the condition of the node.op

### name

Returns the Instruction name corresponding to the op for this node

### op

Returns the Instruction object corresponding to the op for the node, else None

### qargs

Returns list of Qubit, else an empty list.

### sort\_key

### type

Returns the type object

### wire
