---
title: assign_parameters
description: API reference for qiskit.aqua.operators.primitive_ops.MatrixOp.assign_parameters
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.primitive_ops.MatrixOp.assign_parameters
---

# assign\_parameters

<span id="qiskit.aqua.operators.primitive_ops.MatrixOp.assign_parameters" />

`MatrixOp.assign_parameters(param_dict)`

Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another. This method differs from Terra’s `assign_parameters` in that it also supports lists of values to assign for a give `Parameter`, in which case self will be copied for each parameterization in the binding list(s), and all the copies will be returned in an `OpList`. If lists of parameterizations are used, every `Parameter` in the param\_dict must have the same length list of parameterizations.

**Parameters**

**param\_dict** (`dict`) – The dictionary of `Parameters` to replace, and values or lists of values by which to replace them.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The `OperatorBase` with the `Parameters` in self replaced by the values or `Parameters` in param\_dict. If param\_dict contains parameterization lists, this `OperatorBase` is an `OpList`.

