---
title: Qubit
description: API reference for qiskit.circuit.Qubit
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.Qubit
---

# qiskit.circuit.Qubit

<span id="qiskit.circuit.Qubit" />

`Qubit(register=None, index=None)`

Implement a quantum bit.

Creates a qubit.

**Parameters**

*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – Optional. A quantum register containing the bit.
*   **index** (*int*) – Optional. The index of the bit in its containing register.

**Raises**

**CircuitError** – if the provided register is not a valid [`QuantumRegister`](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")

### \_\_init\_\_

<span id="qiskit.circuit.Qubit.__init__" />

`__init__(register=None, index=None)`

Creates a qubit.

**Parameters**

*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – Optional. A quantum register containing the bit.
*   **index** (*int*) – Optional. The index of the bit in its containing register.

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

