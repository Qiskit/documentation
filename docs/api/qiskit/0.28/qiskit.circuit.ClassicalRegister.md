---
title: ClassicalRegister
description: API reference for qiskit.circuit.ClassicalRegister
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.ClassicalRegister
---

# qiskit.circuit.ClassicalRegister

<span id="qiskit.circuit.ClassicalRegister" />

`ClassicalRegister(size=None, name=None, bits=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/circuit/classicalregister.py "view source code")

Implement a classical register.

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

<span id="qiskit.circuit.ClassicalRegister.__init__" />

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

|                                                                                                                           |                                           |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [`__init__`](#qiskit.circuit.ClassicalRegister.__init__ "qiskit.circuit.ClassicalRegister.__init__")(\[size, name, bits]) | Create a new generic register.            |
| [`qasm`](#qiskit.circuit.ClassicalRegister.qasm "qiskit.circuit.ClassicalRegister.qasm")()                                | Return OPENQASM string for this register. |

## Attributes

|                                                                                          |                        |
| ---------------------------------------------------------------------------------------- | ---------------------- |
| `instances_counter`                                                                      |                        |
| [`name`](#qiskit.circuit.ClassicalRegister.name "qiskit.circuit.ClassicalRegister.name") | Get the register name. |
| `name_format`                                                                            |                        |
| `prefix`                                                                                 |                        |
| [`size`](#qiskit.circuit.ClassicalRegister.size "qiskit.circuit.ClassicalRegister.size") | Get the register size. |

<span id="qiskit.circuit.ClassicalRegister.bit_type" />

### bit\_type

alias of [`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.Clbit")

### name

<span id="qiskit.circuit.ClassicalRegister.name" />

`property name`

Get the register name.

### qasm

<span id="qiskit.circuit.ClassicalRegister.qasm" />

`qasm()`

Return OPENQASM string for this register.

### size

<span id="qiskit.circuit.ClassicalRegister.size" />

`property size`

Get the register size.

