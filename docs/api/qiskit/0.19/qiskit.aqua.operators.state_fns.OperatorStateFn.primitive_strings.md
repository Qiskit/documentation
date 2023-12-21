---
title: primitive_strings
description: API reference for qiskit.aqua.operators.state_fns.OperatorStateFn.primitive_strings
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.state_fns.OperatorStateFn.primitive_strings
---

# primitive\_strings

<span id="qiskit.aqua.operators.state_fns.OperatorStateFn.primitive_strings" />

`OperatorStateFn.primitive_strings()`

Return a set of strings describing the primitives contained in the Operator. For example, `{'QuantumCircuit', 'Pauli'}`. For hierarchical Operators, such as `ListOps`, this can help illuminate the primitives represented in the various recursive levels, and therefore which conversions can be applied.

**Return type**

`Set`\[`str`]

**Returns**

A set of strings describing the primitives contained within the Operator.

