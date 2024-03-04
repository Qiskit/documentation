---
title: AncillaRegister
description: API reference for qiskit.circuit.AncillaRegister
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.AncillaRegister
---

<span id="qiskit-circuit-ancillaregister" />

# qiskit.circuit.AncillaRegister

<span id="qiskit.circuit.AncillaRegister" />

`AncillaRegister(size, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/circuit/quantumregister.py "view source code")

Implement an ancilla register.

Create a new generic register.

### \_\_init\_\_

<span id="qiskit.circuit.AncillaRegister.__init__" />

`__init__(size, name=None)`

Create a new generic register.

## Methods

|                                                                                                                 |                                           |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [`__init__`](#qiskit.circuit.AncillaRegister.__init__ "qiskit.circuit.AncillaRegister.__init__")(size\[, name]) | Create a new generic register.            |
| [`qasm`](#qiskit.circuit.AncillaRegister.qasm "qiskit.circuit.AncillaRegister.qasm")()                          | Return OPENQASM string for this register. |

## Attributes

|                                                                                      |                        |
| ------------------------------------------------------------------------------------ | ---------------------- |
| `instances_counter`                                                                  |                        |
| [`name`](#qiskit.circuit.AncillaRegister.name "qiskit.circuit.AncillaRegister.name") | Get the register name. |
| `prefix`                                                                             |                        |
| [`size`](#qiskit.circuit.AncillaRegister.size "qiskit.circuit.AncillaRegister.size") | Get the register size. |

<span id="qiskit.circuit.AncillaRegister.bit_type" />

### bit\_type

alias of [`AncillaQubit`](qiskit.circuit.AncillaQubit "qiskit.circuit.AncillaQubit")

### name

<span id="qiskit.circuit.AncillaRegister.name" />

`property name`

Get the register name.

### qasm

<span id="qiskit.circuit.AncillaRegister.qasm" />

`qasm()`

Return OPENQASM string for this register.

### size

<span id="qiskit.circuit.AncillaRegister.size" />

`property size`

Get the register size.

