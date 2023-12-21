---
title: equals
description: API reference for qiskit.aqua.operators.list_ops.ListOp.equals
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.list_ops.ListOp.equals
---

# equals

<span id="qiskit.aqua.operators.list_ops.ListOp.equals" />

`ListOp.equals(other)`

Evaluate Equality between Operators, overloaded by `==`. Only returns True if self and other are of the same representation (e.g. a DictStateFn and CircuitStateFn will never be equal, even if their vector representations are equal), their underlying primitives are equal (this means for ListOps, OperatorStateFns, or EvolvedOps the equality is evaluated recursively downwards), and their coefficients are equal.

**Parameters**

**other** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The `OperatorBase` to compare to self.

**Return type**

`bool`

**Returns**

A bool equal to the equality of self and other.

