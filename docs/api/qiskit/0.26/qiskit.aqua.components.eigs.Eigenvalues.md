---
title: Eigenvalues
description: API reference for qiskit.aqua.components.eigs.Eigenvalues
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.eigs.Eigenvalues
---

# qiskit.aqua.components.eigs.Eigenvalues

<span id="qiskit.aqua.components.eigs.Eigenvalues" />

`Eigenvalues`

Base class for eigenvalue estimation.

This method should initialize the module and use an exception if a component of the module is not available.

### \_\_init\_\_

<span id="qiskit.aqua.components.eigs.Eigenvalues.__init__" />

`abstract __init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

### construct\_circuit

<span id="qiskit.aqua.components.eigs.Eigenvalues.construct_circuit" />

`abstract construct_circuit(mode, register=None)`

Construct the eigenvalue estimation quantum circuit.

**Parameters**

*   **mode** (*str*) – ‘matrix’ or ‘circuit’
*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – register for circuit construction where eigenvalues will be stored.

**Returns**

object for the eigenvalue estimation circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**NotImplementedError** – not implemented

### construct\_inverse

<span id="qiskit.aqua.components.eigs.Eigenvalues.construct_inverse" />

`construct_inverse(mode, circuit)`

Construct the inverse eigenvalue estimation quantum circuit.

**Parameters**

*   **mode** (*str*) – construction mode, ‘matrix’ not supported
*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – the quantum circuit to invert

**Returns**

**object for of the inverted eigenvalue estimation**

circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

*   **NotImplementedError** – not implemented for matrix mode
*   **ValueError** – Circuit was not constructed beforehand

### get\_register\_sizes

<span id="qiskit.aqua.components.eigs.Eigenvalues.get_register_sizes" />

`abstract get_register_sizes()`

get register sizes

### get\_scaling

<span id="qiskit.aqua.components.eigs.Eigenvalues.get_scaling" />

`abstract get_scaling()`

get scaling

