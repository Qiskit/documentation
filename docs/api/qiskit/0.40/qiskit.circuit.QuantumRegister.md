---
title: QuantumRegister
description: API reference for qiskit.circuit.QuantumRegister
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.QuantumRegister
---

# QuantumRegister

<span id="qiskit.circuit.QuantumRegister" />

`QuantumRegister(size=None, name=None, bits=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/circuit/quantumregister.py "view source code")

Bases: `qiskit.circuit.register.Register`

Implement a quantum register.

Create a new generic register.

Either the `size` or the `bits` argument must be provided. If `size` is not None, the register will be pre-populated with bits of the correct type.

**Parameters**

*   **size** (*int*) – Optional. The number of bits to include in the register.
*   **name** (*str*) – Optional. The name of the register. If not provided, a unique name will be auto-generated from the register type.
*   **bits** (*list\[Bit]*) – Optional. A list of Bit() instances to be used to populate the register.

**Raises**

*   **CircuitError** – if both the `size` and `bits` arguments are provided, or if neither are.
*   **CircuitError** – if `size` is not valid.
*   **CircuitError** – if `name` is not a valid name according to the OpenQASM spec.
*   **CircuitError** – if `bits` contained duplicated bits.
*   **CircuitError** – if `bits` contained bits of an incorrect type.

## Methods

### index

<span id="qiskit.circuit.QuantumRegister.index" />

`QuantumRegister.index(bit)`

Find the index of the provided bit within this register.

### qasm

<span id="qiskit.circuit.QuantumRegister.qasm" />

`QuantumRegister.qasm()`

Return OPENQASM string for this register.

## Attributes

<span id="qiskit.circuit.QuantumRegister.instances_counter" />

### instances\_counter

`= count(416)`

<span id="qiskit.circuit.QuantumRegister.name" />

### name

Get the register name.

<span id="qiskit.circuit.QuantumRegister.name_format" />

### name\_format

<span id="qiskit.circuit.QuantumRegister.prefix" />

### prefix

`= 'q'`

<span id="qiskit.circuit.QuantumRegister.size" />

### size

Get the register size.

