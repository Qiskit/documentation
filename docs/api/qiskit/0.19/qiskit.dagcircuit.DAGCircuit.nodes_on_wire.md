---
title: nodes_on_wire
description: API reference for qiskit.dagcircuit.DAGCircuit.nodes_on_wire
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.dagcircuit.DAGCircuit.nodes_on_wire
---

# nodes\_on\_wire

<span id="qiskit.dagcircuit.DAGCircuit.nodes_on_wire" />

`DAGCircuit.nodes_on_wire(wire, only_ops=False)`

Iterator for nodes that affect a given wire.

**Parameters**

*   **wire** (*Bit*) – the wire to be looked at.
*   **only\_ops** (*bool*) – True if only the ops nodes are wanted; otherwise, all nodes are returned.

**Yields**

*DAGNode* – the successive ops on the given wire

**Raises**

[**DAGCircuitError**](qiskit.dagcircuit.DAGCircuitError "qiskit.dagcircuit.DAGCircuitError") – if the given wire doesn’t exist in the DAG

