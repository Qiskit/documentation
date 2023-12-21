---
title: qasm
description: API reference for qiskit.circuit.QuantumCircuit.qasm
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.QuantumCircuit.qasm
---

# qasm

<span id="qiskit.circuit.QuantumCircuit.qasm" />

`QuantumCircuit.qasm(formatted=False, filename=None)`

Return OpenQASM string.

**Parameters**

*   **formatted** (*bool*) – Return formatted Qasm string.
*   **filename** (*str*) – Save Qasm to file with name ‘filename’.

**Returns**

If formatted=False.

**Return type**

str

**Raises**

**ImportError** – If pygments is not installed and `formatted` is `True`.

