# DAGNode

`DAGNode(type=None, op=None, name=None, qargs=None, cargs=None, wire=None, nid=- 1)`

Bases: `object`

Object to represent the information at a node in the DAGCircuit.

It is used as the return value from \*\_nodes() functions and can be supplied to functions that take a node.

Create a node

## Methods

|                                                                                                                                      |                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| [`semantic_eq`](qiskit.dagcircuit.DAGNode.semantic_eq#qiskit.dagcircuit.DAGNode.semantic_eq "qiskit.dagcircuit.DAGNode.semantic_eq") | Check if DAG nodes are considered equivalent, e.g., as a node\_match for nx.is\_isomorphic. |

## Attributes

### cargs

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

### wire

Returns the Bit object, else None.
