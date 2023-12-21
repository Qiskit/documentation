---
title: qasm
description: API reference for qiskit.circuit.library.TwoLocal.qasm
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.TwoLocal.qasm
---

# qasm

<span id="qiskit.circuit.library.TwoLocal.qasm" />

`TwoLocal.qasm(formatted=False, filename=None)`

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

