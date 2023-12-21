---
title: from_qubit_list
description: API reference for qiskit.transpiler.Layout.from_qubit_list
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.Layout.from_qubit_list
---

# from\_qubit\_list

<span id="qiskit.transpiler.Layout.from_qubit_list" />

`static Layout.from_qubit_list(qubit_list)`

Populates a Layout from a list containing virtual qubits, Qubit or None.

**Parameters**

**qubit\_list** (*list*) – e.g.: \[qr\[0], None, qr\[2], qr\[3]]

**Returns**

the corresponding Layout object

**Return type**

[Layout](qiskit.transpiler.Layout "qiskit.transpiler.Layout")

**Raises**

**LayoutError** – If the elements are not Qubit or None

