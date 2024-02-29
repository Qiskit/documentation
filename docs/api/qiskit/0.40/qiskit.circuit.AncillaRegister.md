---
title: AncillaRegister
description: API reference for qiskit.circuit.AncillaRegister
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.AncillaRegister
---

# AncillaRegister

<span id="qiskit.circuit.AncillaRegister" />

`AncillaRegister(size=None, name=None, bits=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/circuit/quantumregister.py "view source code")

Bases: [`qiskit.circuit.quantumregister.QuantumRegister`](qiskit.circuit.QuantumRegister "qiskit.circuit.quantumregister.QuantumRegister")

Implement an ancilla register.

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

<span id="qiskit.circuit.AncillaRegister.index" />

`AncillaRegister.index(bit)`

Find the index of the provided bit within this register.

### qasm

<span id="qiskit.circuit.AncillaRegister.qasm" />

`AncillaRegister.qasm()`

Return OPENQASM string for this register.

## Attributes

<span id="qiskit.circuit.AncillaRegister.instances_counter" />

### instances\_counter

`= count(0)`

<span id="qiskit.circuit.AncillaRegister.name" />

### name

Get the register name.

<span id="qiskit.circuit.AncillaRegister.name_format" />

### name\_format

<span id="qiskit.circuit.AncillaRegister.prefix" />

### prefix

`= 'a'`

<span id="qiskit.circuit.AncillaRegister.size" />

### size

Get the register size.

