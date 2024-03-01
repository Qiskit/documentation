---
title: DAGNode
description: API reference for qiskit.dagcircuit.DAGNode
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.dagcircuit.DAGNode
---

# DAGNode

<span id="qiskit.dagcircuit.DAGNode" />

`DAGNode(type=None, op=None, name=None, qargs=None, cargs=None, condition=None, wire=None, nid=- 1)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/dagcircuit/dagnode.py "view source code")

Object to represent the information at a node in the DAGCircuit.

It is used as the return value from \*\_nodes() functions and can be supplied to functions that take a node.

Create a node

## Attributes

### cargs

### condition

### name

### op

Returns the Instruction object corresponding to the op for the node, else None

### qargs

Returns list of Qubit, else an empty list.

### sort\_key

### type

### wire

Returns the Bit object, else None.

## Methods

### semantic\_eq

<span id="qiskit.dagcircuit.DAGNode.semantic_eq" />

`static DAGNode.semantic_eq(node1, node2)`

Check if DAG nodes are considered equivalent, e.g., as a node\_match for nx.is\_isomorphic.

**Parameters**

*   **node1** ([*DAGNode*](qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")) – A node to compare.
*   **node2** ([*DAGNode*](qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")) – The other node to compare.

**Returns**

If node1 == node2

**Return type**

Bool

