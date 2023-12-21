---
title: construct_circuit
description: API reference for qiskit.aqua.components.variational_forms.VariationalForm.construct_circuit
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.variational_forms.VariationalForm.construct_circuit
---

# construct\_circuit

<span id="qiskit.aqua.components.variational_forms.VariationalForm.construct_circuit" />

`abstract VariationalForm.construct_circuit(parameters, q=None)`

Construct the variational form, given its parameters.

**Parameters**

*   **parameters** (`Union`\[`List`\[`float`], `ndarray`]) – circuit parameters.
*   **q** (`Optional`\[[`QuantumRegister`](qiskit.circuit.QuantumRegister "qiskit.circuit.quantumregister.QuantumRegister")]) – Quantum Register for the circuit.

**Returns**

A quantum circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

