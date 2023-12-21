---
title: power
description: API reference for qiskit.quantum_info.Clifford.power
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Clifford.power
---

# power

<span id="qiskit.quantum_info.Clifford.power" />

`Clifford.power(n)`

Return the compose of a operator with itself n times.

**Parameters**

**n** (*int*) – the number of times to compose with self (n>0).

**Returns**

the n-times composed operator.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if the input and output dimensions of the operator are not equal, or the power is not a positive integer.

