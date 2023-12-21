---
title: apply_operation_front
description: API reference for qiskit.dagcircuit.DAGCircuit.apply_operation_front
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.dagcircuit.DAGCircuit.apply_operation_front
---

# apply\_operation\_front

<span id="qiskit.dagcircuit.DAGCircuit.apply_operation_front" />

`DAGCircuit.apply_operation_front(op, qargs, cargs, condition=None)`

Apply an operation to the input of the circuit.

**Parameters**

*   **op** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – the operation associated with the DAG node
*   **qargs** (*list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – qubits that op will be applied to
*   **cargs** (*list\[*[*Clbit*](qiskit.circuit.Clbit "qiskit.circuit.Clbit")*]*) – cbits that op will be applied to
*   **condition** (*tuple or None*) – optional condition (ClassicalRegister, value)

**Returns**

the current max node

**Return type**

[DAGNode](qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")

**Raises**

[**DAGCircuitError**](qiskit.dagcircuit.DAGCircuitError "qiskit.dagcircuit.DAGCircuitError") – if initial nodes connected to multiple out edges

