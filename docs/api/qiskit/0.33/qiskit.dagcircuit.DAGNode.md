# DAGNode

`DAGNode(type=None, op=None, name=None, qargs=None, cargs=None, wire=None, nid=- 1)`

Bases: `object`

Parent class for DAGOpNode, DAGInNode, and DAGOutNode.

Create a node

## Methods

|                                                                                                                                      |                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| [`semantic_eq`](qiskit.dagcircuit.DAGNode.semantic_eq#qiskit.dagcircuit.DAGNode.semantic_eq "qiskit.dagcircuit.DAGNode.semantic_eq") | Check if DAG nodes are considered equivalent, e.g., as a node\_match for nx.is\_isomorphic. |

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

### type

Returns the type object

### wire

Returns the Bit object, else None.
