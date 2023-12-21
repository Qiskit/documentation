---
title: power
description: API reference for qiskit.quantum_info.ScalarOp.power
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.ScalarOp.power
---

# power

<span id="qiskit.quantum_info.ScalarOp.power" />

`ScalarOp.power(n)`

Return the power of the ScalarOp.

**Parameters**

**n** (*Number*) – the exponent for the scalar op.

**Returns**

the `coeff ** n` ScalarOp.

**Return type**

[ScalarOp](qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp")

**Raises**

**QiskitError** – if the input and output dimensions of the operator are not equal, or the power is not a positive integer.

