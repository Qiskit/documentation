# DAGOpNode



`DAGOpNode(op, qargs=None, cargs=None)`

Bases: `qiskit.dagcircuit.dagnode.DAGNode`

Object to represent an Instruction at a node in the DAGCircuit.

Create an Instruction node

## Methods

|                                                                                                                                            |                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| [`semantic_eq`](qiskit.dagcircuit.DAGOpNode.semantic_eq#qiskit.dagcircuit.DAGOpNode.semantic_eq "qiskit.dagcircuit.DAGOpNode.semantic_eq") | Check if DAG nodes are considered equivalent, e.g., as a node\_match for nx.is\_isomorphic. |

## Attributes



### cargs



### condition

Returns the condition of the node.op



### name

Returns the Instruction name corresponding to the op for this node



### op



### qargs



### sort\_key



### type

Returns the type object



### wire

Returns the Bit object, else None.
