---
title: Clbit
description: API reference for qiskit.circuit.Clbit
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.Clbit
---

# qiskit.circuit.Clbit

<span id="qiskit.circuit.Clbit" />

`Clbit(register=None, index=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.17/qiskit/circuit/classicalregister.py "view source code")

Implement a classical bit.

Creates a classical bit.

**Parameters**

*   **register** ([*ClassicalRegister*](qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")) – Optional. A classical register containing the bit.
*   **index** (*int*) – Optional. The index of the bit in its containing register.

**Raises**

**CircuitError** – if the provided register is not a valid [`ClassicalRegister`](qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")

### \_\_init\_\_

<span id="qiskit.circuit.Clbit.__init__" />

`__init__(register=None, index=None)`

Creates a classical bit.

**Parameters**

*   **register** ([*ClassicalRegister*](qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")) – Optional. A classical register containing the bit.
*   **index** (*int*) – Optional. The index of the bit in its containing register.

**Raises**

**CircuitError** – if the provided register is not a valid [`ClassicalRegister`](qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")

## Methods

|                                                                                                  |                          |
| ------------------------------------------------------------------------------------------------ | ------------------------ |
| [`__init__`](#qiskit.circuit.Clbit.__init__ "qiskit.circuit.Clbit.__init__")(\[register, index]) | Creates a classical bit. |

## Attributes

|                                                                              |                     |
| ---------------------------------------------------------------------------- | ------------------- |
| [`index`](#qiskit.circuit.Clbit.index "qiskit.circuit.Clbit.index")          | Get bit’s index.    |
| [`register`](#qiskit.circuit.Clbit.register "qiskit.circuit.Clbit.register") | Get bit’s register. |

### index

<span id="qiskit.circuit.Clbit.index" />

`property index`

Get bit’s index.

### register

<span id="qiskit.circuit.Clbit.register" />

`property register`

Get bit’s register.

