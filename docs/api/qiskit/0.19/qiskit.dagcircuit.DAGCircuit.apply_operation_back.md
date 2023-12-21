---
title: apply_operation_back
description: API reference for qiskit.dagcircuit.DAGCircuit.apply_operation_back
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.dagcircuit.DAGCircuit.apply_operation_back
---

# apply\_operation\_back

<span id="qiskit.dagcircuit.DAGCircuit.apply_operation_back" />

`DAGCircuit.apply_operation_back(op, qargs=None, cargs=None, condition=None)`

Apply an operation to the output of the circuit.

**Parameters**

*   **op** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – the operation associated with the DAG node
*   **qargs** (*list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – qubits that op will be applied to
*   **cargs** (*list\[*[*Clbit*](qiskit.circuit.Clbit "qiskit.circuit.Clbit")*]*) – cbits that op will be applied to
*   **condition** (*tuple or None*) – optional condition (ClassicalRegister, int)

**Returns**

the current max node

**Return type**

[DAGNode](qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")

**Raises**

[**DAGCircuitError**](qiskit.dagcircuit.DAGCircuitError "qiskit.dagcircuit.DAGCircuitError") – if a leaf node is connected to multiple outputs

