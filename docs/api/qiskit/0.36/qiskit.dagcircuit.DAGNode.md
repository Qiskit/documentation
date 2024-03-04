---
title: DAGNode
description: API reference for qiskit.dagcircuit.DAGNode
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.dagcircuit.DAGNode
---

# DAGNode

<span id="qiskit.dagcircuit.DAGNode" />

`DAGNode(type=None, op=None, name=None, qargs=None, cargs=None, wire=None, nid=- 1)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/dagcircuit/dagnode.py "view source code")

Bases: `object`

Parent class for DAGOpNode, DAGInNode, and DAGOutNode.

Create a node

## Methods

### semantic\_eq

<span id="qiskit.dagcircuit.DAGNode.semantic_eq" />

`static DAGNode.semantic_eq(node1, node2, bit_indices1=None, bit_indices2=None)`

Check if DAG nodes are considered equivalent, e.g., as a node\_match for nx.is\_isomorphic.

**Parameters**

*   **node1** ([*DAGOpNode*](qiskit.dagcircuit.DAGOpNode "qiskit.dagcircuit.DAGOpNode")*,* [*DAGInNode*](qiskit.dagcircuit.DAGInNode "qiskit.dagcircuit.DAGInNode")*,* [*DAGOutNode*](qiskit.dagcircuit.DAGOutNode "qiskit.dagcircuit.DAGOutNode")) – A node to compare.
*   **node2** ([*DAGOpNode*](qiskit.dagcircuit.DAGOpNode "qiskit.dagcircuit.DAGOpNode")*,* [*DAGInNode*](qiskit.dagcircuit.DAGInNode "qiskit.dagcircuit.DAGInNode")*,* [*DAGOutNode*](qiskit.dagcircuit.DAGOutNode "qiskit.dagcircuit.DAGOutNode")) – The other node to compare.
*   **bit\_indices1** (*dict*) – Dictionary mapping Bit instances to their index within the circuit containing node1
*   **bit\_indices2** (*dict*) – Dictionary mapping Bit instances to their index within the circuit containing node2

**Returns**

If node1 == node2

**Return type**

Bool

## Attributes

<span id="qiskit.dagcircuit.DAGNode.cargs" />

### cargs

Returns list of Clbit, else an empty list.

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

<span id="qiskit.dagcircuit.DAGNode.type" />

### type

Returns the type object

<span id="qiskit.dagcircuit.DAGNode.wire" />

### wire

Returns the Bit object, else None.

