---
title: QuantumRegister
description: API reference for qiskit.circuit.QuantumRegister
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.QuantumRegister
---

# QuantumRegister

<span id="qiskit.circuit.QuantumRegister" />

`QuantumRegister(size, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/circuit/quantumregister.py "view source code")

Implement a quantum register.

Create a new generic register.

## Attributes

### instances\_counter

<span id="qiskit.circuit.QuantumRegister.instances_counter" />

`= count(0)`

### name

Get the register name.

### prefix

<span id="qiskit.circuit.QuantumRegister.prefix" />

`= 'q'`

### size

Get the register size.

## Methods

### \_\_getitem\_\_

<span id="qiskit.circuit.QuantumRegister.__getitem__" />

`QuantumRegister.__getitem__(key)`

#### Arg:

bit\_type (Qubit or Clbit): a constructor type return element/s. key (int or slice or list): index of the clbit to be retrieved.

**Returns**

a Qubit or Clbit instance if key is int. If key is a slice, returns a list of these instances.

**Return type**

[Qubit](qiskit.circuit.Qubit "qiskit.circuit.Qubit") or [Clbit](qiskit.circuit.Clbit "qiskit.circuit.Clbit") or list([Qubit](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) or list([Clbit](qiskit.circuit.Clbit "qiskit.circuit.Clbit"))

**Raises**

*   **CircuitError** – if the key is not an integer.
*   **QiskitIndexError** – if the key is not in the range (0, self.size).

### \_\_len\_\_

<span id="qiskit.circuit.QuantumRegister.__len__" />

`QuantumRegister.__len__()`

Return register size.

### qasm

<span id="qiskit.circuit.QuantumRegister.qasm" />

`QuantumRegister.qasm()`

Return OPENQASM string for this register.

