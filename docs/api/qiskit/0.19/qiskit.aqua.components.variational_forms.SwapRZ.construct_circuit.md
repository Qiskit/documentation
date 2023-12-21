---
title: construct_circuit
description: API reference for qiskit.aqua.components.variational_forms.SwapRZ.construct_circuit
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.variational_forms.SwapRZ.construct_circuit
---

# construct\_circuit

<span id="qiskit.aqua.components.variational_forms.SwapRZ.construct_circuit" />

`SwapRZ.construct_circuit(parameters, q=None)`

Construct the variational form, given its parameters.

**Parameters**

*   **parameters** (*Union(numpy.ndarray, list\[*[*Parameter*](qiskit.circuit.Parameter "qiskit.circuit.Parameter")*],* [*ParameterVector*](qiskit.circuit.ParameterVector "qiskit.circuit.ParameterVector")*)*) – circuit parameters
*   **q** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – Quantum Register for the circuit.

**Returns**

a quantum circuit with given parameters

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ValueError** – the number of parameters is incorrect.

