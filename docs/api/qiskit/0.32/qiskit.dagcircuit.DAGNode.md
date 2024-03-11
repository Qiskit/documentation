---
title: DAGNode
description: API reference for qiskit.dagcircuit.DAGNode
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.dagcircuit.DAGNode
---

# DAGNode

<span id="qiskit.dagcircuit.DAGNode" />

`DAGNode(type=None, op=None, name=None, qargs=None, cargs=None, wire=None, nid=- 1)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/dagcircuit/dagnode.py "view source code")

Bases: `object`

Object to represent the information at a node in the DAGCircuit.

It is used as the return value from \*\_nodes() functions and can be supplied to functions that take a node.

Create a node

## Methods

### semantic\_eq

<span id="qiskit.dagcircuit.DAGNode.semantic_eq" />

`static DAGNode.semantic_eq(node1, node2, bit_indices1=None, bit_indices2=None)`

Check if DAG nodes are considered equivalent, e.g., as a node\_match for nx.is\_isomorphic.

**Parameters**

*   **node1** ([*DAGNode*](qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")) – A node to compare.
*   **node2** ([*DAGNode*](qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")) – The other node to compare.
*   **bit\_indices1** (*dict*) – Dictionary mapping Bit instances to their index within the circuit containing node1
*   **bit\_indices2** (*dict*) – Dictionary mapping Bit instances to their index within the circuit containing node2

**Returns**

If node1 == node2

**Return type**

Bool

## Attributes

<span id="qiskit.dagcircuit.DAGNode.cargs" />

### cargs

<span id="qiskit.dagcircuit.DAGNode.condition" />

### condition

Returns the condition of the node.op

<span id="qiskit.dagcircuit.DAGNode.name" />

### name

Returns the Instruction name corresponding to the op for this node

<span id="qiskit.dagcircuit.DAGNode.op" />

### op

Returns the Instruction object corresponding to the op for the node, else None

<span id="qiskit.dagcircuit.DAGNode.qargs" />

### qargs

Returns list of Qubit, else an empty list.

<span id="qiskit.dagcircuit.DAGNode.sort_key" />

### sort\_key

<span id="qiskit.dagcircuit.DAGNode.type" />

### type

<span id="qiskit.dagcircuit.DAGNode.wire" />

### wire

Returns the Bit object, else None.

