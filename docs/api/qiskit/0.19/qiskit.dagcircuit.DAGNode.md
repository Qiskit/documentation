---
title: DAGNode
description: API reference for qiskit.dagcircuit.DAGNode
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.dagcircuit.DAGNode
---

# DAGNode

<span id="qiskit.dagcircuit.DAGNode" />

`DAGNode(type=None, op=None, name=None, qargs=None, cargs=None, condition=None, wire=None, nid=- 1)`

Object to represent the information at a node in the DAGCircuit.

It is used as the return value from \*\_nodes() functions and can be supplied to functions that take a node.

Create a node

## Attributes

|                                                                                                  |                                                                                |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| [`DAGNode.type`](qiskit.dagcircuit.DAGNode.type "qiskit.dagcircuit.DAGNode.type")                |                                                                                |
| [`DAGNode.name`](qiskit.dagcircuit.DAGNode.name "qiskit.dagcircuit.DAGNode.name")                |                                                                                |
| [`DAGNode.cargs`](qiskit.dagcircuit.DAGNode.cargs "qiskit.dagcircuit.DAGNode.cargs")             |                                                                                |
| [`DAGNode.condition`](qiskit.dagcircuit.DAGNode.condition "qiskit.dagcircuit.DAGNode.condition") |                                                                                |
| [`DAGNode.sort_key`](qiskit.dagcircuit.DAGNode.sort_key "qiskit.dagcircuit.DAGNode.sort_key")    |                                                                                |
| [`DAGNode.op`](qiskit.dagcircuit.DAGNode.op "qiskit.dagcircuit.DAGNode.op")                      | Returns the Instruction object corresponding to the op for the node, else None |
| [`DAGNode.qargs`](qiskit.dagcircuit.DAGNode.qargs "qiskit.dagcircuit.DAGNode.qargs")             | Returns list of Qubit, else an empty list.                                     |
| [`DAGNode.wire`](qiskit.dagcircuit.DAGNode.wire "qiskit.dagcircuit.DAGNode.wire")                | Returns the Bit object, else None.                                             |

## Methods

|                                                                                                                      |                                                                                             |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [`DAGNode.semantic_eq`](qiskit.dagcircuit.DAGNode.semantic_eq "qiskit.dagcircuit.DAGNode.semantic_eq")(node1, node2) | Check if DAG nodes are considered equivalent, e.g., as a node\_match for nx.is\_isomorphic. |

