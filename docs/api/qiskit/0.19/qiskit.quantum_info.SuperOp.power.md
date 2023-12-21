---
title: power
description: API reference for qiskit.quantum_info.SuperOp.power
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.SuperOp.power
---

# power

<span id="qiskit.quantum_info.SuperOp.power" />

`SuperOp.power(n)`

Return the compose of a QuantumChannel with itself n times.

**Parameters**

**n** (*int*) – compute the matrix power of the superoperator matrix.

**Returns**

the n-times composition channel as a SuperOp object.

**Return type**

[SuperOp](qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp")

**Raises**

**QiskitError** – if the input and output dimensions of the QuantumChannel are not equal, or the power is not an integer.

