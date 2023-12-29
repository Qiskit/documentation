# DAGDepNode

`DAGDepNode(type=None, op=None, name=None, qargs=None, cargs=None, condition=None, successors=None, predecessors=None, reachable=None, matchedwith=None, successorstovisit=None, isblocked=None, qindices=None, cindices=None, nid=- 1)`

Bases: `object`

Object to represent the information at a node in the DAGDependency().

It is used as the return value from \*\_nodes() functions and can be supplied to functions that take a node.

## Methods

|                                                                                                                                               |                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [`copy`](qiskit.dagcircuit.DAGDepNode.copy#qiskit.dagcircuit.DAGDepNode.copy "qiskit.dagcircuit.DAGDepNode.copy")                             | Function to copy a DAGDepNode object.                                                       |
| [`semantic_eq`](qiskit.dagcircuit.DAGDepNode.semantic_eq#qiskit.dagcircuit.DAGDepNode.semantic_eq "qiskit.dagcircuit.DAGDepNode.semantic_eq") | Check if DAG nodes are considered equivalent, e.g., as a node\_match for nx.is\_isomorphic. |

## Attributes

### cargs

### cindices

### condition

Returns the condition of the node.op

### isblocked

### matchedwith

### name

### node\_id

### op

Returns the Instruction object corresponding to the op for the node, else None

### predecessors

### qargs

Returns list of Qubit, else an empty list.

### qindices

### reachable

### sort\_key

### successors

### successorstovisit

### type
