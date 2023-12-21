---
title: op_nodes
description: API reference for qiskit.dagcircuit.DAGCircuit.op_nodes
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.dagcircuit.DAGCircuit.op_nodes
---

# op\_nodes

<span id="qiskit.dagcircuit.DAGCircuit.op_nodes" />

`DAGCircuit.op_nodes(op=None, include_directives=True)`

Get the list of “op” nodes in the dag.

**Parameters**

*   **op** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – op nodes to return. If None, return all op nodes.
*   **include\_directives** (*bool*) – include barrier, snapshot etc.

**Returns**

the list of node ids containing the given op.

**Return type**

list\[[DAGNode](qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")]

