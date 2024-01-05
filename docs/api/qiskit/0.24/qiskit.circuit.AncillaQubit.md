---
title: AncillaQubit
description: API reference for qiskit.circuit.AncillaQubit
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.AncillaQubit
---

<span id="qiskit-circuit-ancillaqubit" />

# qiskit.circuit.AncillaQubit

<span id="qiskit.circuit.AncillaQubit" />

`AncillaQubit(register, index)`

A qubit used as ancillary qubit.

Creates a qubit.

**Parameters**

*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – a quantum register.
*   **index** (*int*) – the index to insert the qubit

**Raises**

**CircuitError** – if the provided register is not a valid [`QuantumRegister`](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")

### \_\_init\_\_

<span id="qiskit.circuit.AncillaQubit.__init__" />

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

<span id="qiskit.circuit.AncillaQubit.index" />

`property index`

Get bit’s index.

### register

<span id="qiskit.circuit.AncillaQubit.register" />

`property register`

Get bit’s register.

