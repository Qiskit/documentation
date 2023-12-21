---
title: compose
description: API reference for qiskit.aqua.operators.state_fns.OperatorStateFn.compose
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.state_fns.OperatorStateFn.compose
---

# compose

<span id="qiskit.aqua.operators.state_fns.OperatorStateFn.compose" />

`OperatorStateFn.compose(other)`

Composition (Linear algebra-style: A\@B(x) = A(B(x))) is not well defined for states in the binary function model, but is well defined for measurements.

**Parameters**

**other** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The Operator to compose with self.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

An Operator equivalent to the function composition of self and other.

**Raises**

**ValueError** – If self is not a measurement, it cannot be composed from the right.

