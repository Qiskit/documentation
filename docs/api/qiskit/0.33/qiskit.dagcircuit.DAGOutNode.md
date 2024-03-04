---
title: DAGOutNode
description: API reference for qiskit.dagcircuit.DAGOutNode
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.dagcircuit.DAGOutNode
---

# DAGOutNode

<span id="qiskit.dagcircuit.DAGOutNode" />

`DAGOutNode(wire)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/dagcircuit/dagnode.py "view source code")

Bases: `qiskit.dagcircuit.dagnode.DAGNode`

Object to represent an outgoing wire node in the DAGCircuit.

Create an outgoing node

## Methods

### semantic\_eq

<span id="qiskit.dagcircuit.DAGOutNode.semantic_eq" />

`static DAGOutNode.semantic_eq(node1, node2, bit_indices1=None, bit_indices2=None)`

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

<span id="qiskit.dagcircuit.DAGOutNode.cargs" />

### cargs

Returns list of Clbit, else an empty list.

<span id="qiskit.dagcircuit.DAGOutNode.condition" />

### condition

Returns the condition of the node.op

<span id="qiskit.dagcircuit.DAGOutNode.name" />

### name

Returns the Instruction name corresponding to the op for this node

<span id="qiskit.dagcircuit.DAGOutNode.op" />

### op

Returns the Instruction object corresponding to the op for the node, else None

<span id="qiskit.dagcircuit.DAGOutNode.qargs" />

### qargs

Returns list of Qubit, else an empty list.

<span id="qiskit.dagcircuit.DAGOutNode.sort_key" />

### sort\_key

<span id="qiskit.dagcircuit.DAGOutNode.type" />

### type

Returns the type object

<span id="qiskit.dagcircuit.DAGOutNode.wire" />

### wire

