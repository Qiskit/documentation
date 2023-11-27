# DAGOutNode[¶](#dagoutnode "Permalink to this headline")

<span id="undefined" />

`DAGOutNode(wire)`

Bases: `qiskit.dagcircuit.dagnode.DAGNode`

Object to represent an outgoing wire node in the DAGCircuit.

Create an outgoing node

## Methods

|                                                                                                                                               |                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [`semantic_eq`](qiskit.dagcircuit.DAGOutNode.semantic_eq#qiskit.dagcircuit.DAGOutNode.semantic_eq "qiskit.dagcircuit.DAGOutNode.semantic_eq") | Check if DAG nodes are considered equivalent, e.g., as a node\_match for nx.is\_isomorphic. |

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
