---
title: power
description: API reference for qiskit.quantum_info.Operator.power
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Operator.power
---

# power

<span id="qiskit.quantum_info.Operator.power" />

`Operator.power(n)`

Return the matrix power of the operator.

**Parameters**

**n** (*int*) – the power to raise the matrix to.

**Returns**

the n-times composed operator.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if the input and output dimensions of the operator are not equal, or the power is not a positive integer.

