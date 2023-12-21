---
title: power
description: API reference for qiskit.quantum_info.Kraus.power
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Kraus.power
---

# power

<span id="qiskit.quantum_info.Kraus.power" />

`Kraus.power(n)`

The matrix power of the channel.

**Parameters**

**n** (*int*) – compute the matrix power of the superoperator matrix.

**Returns**

the matrix power of the SuperOp converted to a Kraus channel.

**Return type**

[Kraus](qiskit.quantum_info.Kraus "qiskit.quantum_info.Kraus")

**Raises**

**QiskitError** – if the input and output dimensions of the QuantumChannel are not equal, or the power is not an integer.

