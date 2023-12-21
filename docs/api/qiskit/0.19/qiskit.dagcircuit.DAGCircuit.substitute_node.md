---
title: substitute_node
description: API reference for qiskit.dagcircuit.DAGCircuit.substitute_node
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.dagcircuit.DAGCircuit.substitute_node
---

# substitute\_node

<span id="qiskit.dagcircuit.DAGCircuit.substitute_node" />

`DAGCircuit.substitute_node(node, op, inplace=False)`

Replace a DAGNode with a single instruction. qargs, cargs and conditions for the new instruction will be inferred from the node to be replaced. The new instruction will be checked to match the shape of the replaced instruction.

**Parameters**

*   **node** ([*DAGNode*](qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")) – Node to be replaced
*   **op** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – The [`qiskit.circuit.Instruction`](qiskit.circuit.Instruction "qiskit.circuit.Instruction") instance to be added to the DAG
*   **inplace** (*bool*) – Optional, default False. If True, existing DAG node will be modified to include op. Otherwise, a new DAG node will be used.

**Returns**

the new node containing the added instruction.

**Return type**

[DAGNode](qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")

**Raises**

*   [**DAGCircuitError**](qiskit.dagcircuit.DAGCircuitError "qiskit.dagcircuit.DAGCircuitError") – If replacement instruction was incompatible with
*   **location of target node.** –

