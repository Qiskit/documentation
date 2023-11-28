# DAGOpNode

<span id="undefined" />

`DAGOpNode(op, qargs=None, cargs=None)`

Bases: `qiskit.dagcircuit.dagnode.DAGNode`

Object to represent an Instruction at a node in the DAGCircuit.

Create an Instruction node

## Methods

|                                                                                                                                            |                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| [`semantic_eq`](qiskit.dagcircuit.DAGOpNode.semantic_eq#qiskit.dagcircuit.DAGOpNode.semantic_eq "qiskit.dagcircuit.DAGOpNode.semantic_eq") | Check if DAG nodes are considered equivalent, e.g., as a node\_match for nx.is\_isomorphic. |

## Attributes

<span id="undefined" />

### cargs

<span id="undefined" />

### condition

Returns the condition of the node.op

<span id="undefined" />

### name

Returns the Instruction name corresponding to the op for this node

<span id="undefined" />

### op

<span id="undefined" />

### qargs

<span id="undefined" />

### sort\_key

<span id="undefined" />

### type

Returns the type object

<span id="undefined" />

### wire

Returns the Bit object, else None.
