---
title: Qubit
description: API reference for qiskit.circuit.Qubit
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.Qubit
---

<span id="qiskit-circuit-qubit" />

# qiskit.circuit.Qubit

<span id="qiskit.circuit.Qubit" />

`Qubit(register, index)`

Implement a quantum bit.

Creates a qubit.

**Parameters**

*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – a quantum register.
*   **index** (*int*) – the index to insert the qubit

**Raises**

**CircuitError** – if the provided register is not a valid [`QuantumRegister`](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")

### \_\_init\_\_

<span id="qiskit.circuit.Qubit.__init__" />

`__init__(register, index)`

Creates a qubit.

**Parameters**

*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – a quantum register.
*   **index** (*int*) – the index to insert the qubit

**Raises**

**CircuitError** – if the provided register is not a valid [`QuantumRegister`](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")

## Methods

## Attributes

### index

<span id="qiskit.circuit.Qubit.index" />

`property index`

Get bit’s index.

### register

<span id="qiskit.circuit.Qubit.register" />

`property register`

Get bit’s register.

