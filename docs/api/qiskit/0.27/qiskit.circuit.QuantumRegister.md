---
title: QuantumRegister
description: API reference for qiskit.circuit.QuantumRegister
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.QuantumRegister
---

# qiskit.circuit.QuantumRegister

<span id="qiskit.circuit.QuantumRegister" />

`QuantumRegister(size=None, name=None, bits=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.17/qiskit/circuit/quantumregister.py "view source code")

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
*   **CircuitError** – if `bits` contained bits of an incorrect type.

### \_\_init\_\_

<span id="qiskit.circuit.QuantumRegister.__init__" />

`__init__(size=None, name=None, bits=None)`

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
*   **CircuitError** – if `bits` contained bits of an incorrect type.

## Methods

|                                                                                                                       |                                           |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [`__init__`](#qiskit.circuit.QuantumRegister.__init__ "qiskit.circuit.QuantumRegister.__init__")(\[size, name, bits]) | Create a new generic register.            |
| [`qasm`](#qiskit.circuit.QuantumRegister.qasm "qiskit.circuit.QuantumRegister.qasm")()                                | Return OPENQASM string for this register. |

## Attributes

|                                                                                      |                        |
| ------------------------------------------------------------------------------------ | ---------------------- |
| `instances_counter`                                                                  |                        |
| [`name`](#qiskit.circuit.QuantumRegister.name "qiskit.circuit.QuantumRegister.name") | Get the register name. |
| `name_format`                                                                        |                        |
| `prefix`                                                                             |                        |
| [`size`](#qiskit.circuit.QuantumRegister.size "qiskit.circuit.QuantumRegister.size") | Get the register size. |

<span id="qiskit.circuit.QuantumRegister.bit_type" />

### bit\_type

alias of [`Qubit`](qiskit.circuit.Qubit "qiskit.circuit.Qubit")

### name

<span id="qiskit.circuit.QuantumRegister.name" />

`property name`

Get the register name.

### qasm

<span id="qiskit.circuit.QuantumRegister.qasm" />

`qasm()`

Return OPENQASM string for this register.

### size

<span id="qiskit.circuit.QuantumRegister.size" />

`property size`

Get the register size.

