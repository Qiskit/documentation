---
title: execute
description: API reference for qiskit.aqua.QuantumInstance.execute
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.QuantumInstance.execute
---

# execute

<span id="qiskit.aqua.QuantumInstance.execute" />

`QuantumInstance.execute(circuits, had_transpiled=False)`

A wrapper to interface with quantum backend.

**Parameters**

*   **circuits** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") *or list\[*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")*]*) – circuits to execute
*   **had\_transpiled** (*bool, optional*) – whether or not circuits had been transpiled

**Returns**

Result object

**Return type**

[Result](qiskit.result.Result "qiskit.result.Result")

## TODO: Maybe we can combine the circuits for the main ones and calibration circuits before

assembling to the qobj.

