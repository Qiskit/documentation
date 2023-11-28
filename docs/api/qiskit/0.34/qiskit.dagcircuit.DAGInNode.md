# DAGInNode

<span id="undefined" />

`DAGInNode(wire)`

Bases: `qiskit.dagcircuit.dagnode.DAGNode`

Object to represent an incoming wire node in the DAGCircuit.

Create an incoming node

## Methods

|                                                                                                                                            |                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| [`semantic_eq`](qiskit.dagcircuit.DAGInNode.semantic_eq#qiskit.dagcircuit.DAGInNode.semantic_eq "qiskit.dagcircuit.DAGInNode.semantic_eq") | Check if DAG nodes are considered equivalent, e.g., as a node\_match for nx.is\_isomorphic. |

## Attributes

<span id="undefined" />

### cargs

Returns list of Clbit, else an empty list.

<span id="undefined" />

### condition

Returns the condition of the node.op

<span id="undefined" />

### name

Returns the Instruction name corresponding to the op for this node

<span id="undefined" />

### op

Returns the Instruction object corresponding to the op for the node, else None

<span id="undefined" />

### qargs

Returns list of Qubit, else an empty list.

<span id="undefined" />

### sort\_key

<span id="undefined" />

### type

Returns the type object

<span id="undefined" />

### wire
