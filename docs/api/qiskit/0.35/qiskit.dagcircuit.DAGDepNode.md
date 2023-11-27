# DAGDepNode[¶](#dagdepnode "Permalink to this headline")

<span id="undefined" />

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

<span id="undefined" />

### cargs

<span id="undefined" />

### cindices

<span id="undefined" />

### condition

Returns the condition of the node.op

<span id="undefined" />

### isblocked

<span id="undefined" />

### matchedwith

<span id="undefined" />

### name

<span id="undefined" />

### node\_id

<span id="undefined" />

### op

Returns the Instruction object corresponding to the op for the node, else None

<span id="undefined" />

### predecessors

<span id="undefined" />

### qargs

Returns list of Qubit, else an empty list.

<span id="undefined" />

### qindices

<span id="undefined" />

### reachable

<span id="undefined" />

### sort\_key

<span id="undefined" />

### successors

<span id="undefined" />

### successorstovisit

<span id="undefined" />

### type
