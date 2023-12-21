---
title: mul
description: API reference for qiskit.aqua.operators.primitive_ops.PauliOp.mul
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.primitive_ops.PauliOp.mul
---

# mul

<span id="qiskit.aqua.operators.primitive_ops.PauliOp.mul" />

`PauliOp.mul(scalar)`

Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`).

**Parameters**

**scalar** (`Union`\[`int`, `float`, `complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]) – The real or complex scalar by which to multiply the Operator, or the `ParameterExpression` to serve as a placeholder for a scalar factor.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

An `OperatorBase` equivalent to product of self and scalar.

