---
title: construct_circuit
description: API reference for qiskit.aqua.components.reciprocals.LookupRotation.construct_circuit
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.reciprocals.LookupRotation.construct_circuit
---

# construct\_circuit

<span id="qiskit.aqua.components.reciprocals.LookupRotation.construct_circuit" />

`LookupRotation.construct_circuit(mode, inreg)`

Construct the Lookup Rotation circuit.

**Parameters**

*   **mode** (*str*) – construction mode, ‘matrix’ not supported
*   **inreg** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – input register, typically output register of Eigenvalues

**Returns**

containing the Lookup Rotation circuit.

**Return type**

QuantumCircuit

**Raises:**

NotImplementedError: mode not supported

