---
title: __getitem__
description: API reference for qiskit.circuit.QuantumRegister.__getitem__
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.QuantumRegister.__getitem__
---

# \_\_getitem\_\_

<span id="qiskit.circuit.QuantumRegister.__getitem__" />

`QuantumRegister.__getitem__(key)`

## Arg:

bit\_type (Qubit or Clbit): a constructor type return element/s. key (int or slice or list): index of the clbit to be retrieved.

**Returns**

a Qubit or Clbit instance if key is int. If key is a slice, returns a list of these instances.

**Return type**

[Qubit](qiskit.circuit.Qubit "qiskit.circuit.Qubit") or [Clbit](qiskit.circuit.Clbit "qiskit.circuit.Clbit") or list([Qubit](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) or list([Clbit](qiskit.circuit.Clbit "qiskit.circuit.Clbit"))

**Raises**

*   **CircuitError** – if the key is not an integer.
*   **QiskitIndexError** – if the key is not in the range (0, self.size).

