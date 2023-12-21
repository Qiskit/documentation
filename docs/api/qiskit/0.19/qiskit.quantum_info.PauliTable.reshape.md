---
title: reshape
description: API reference for qiskit.quantum_info.PauliTable.reshape
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.PauliTable.reshape
---

# reshape

<span id="qiskit.quantum_info.PauliTable.reshape" />

`PauliTable.reshape(input_dims=None, output_dims=None)`

Return a shallow copy with reshaped input and output subsystem dimensions.

## Arg:

## input\_dims (None or tuple): new subsystem input dimensions.

If None the original input dims will be preserved \[Default: None].

## output\_dims (None or tuple): new subsystem output dimensions.

If None the original output dims will be preserved \[Default: None].

**Returns**

returns self with reshaped input and output dimensions.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if combined size of all subsystem input dimension or subsystem output dimensions is not constant.

