---
title: compute_variance
description: API reference for qiskit.aqua.operators.expectations.PauliExpectation.compute_variance
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.expectations.PauliExpectation.compute_variance
---

# compute\_variance

<span id="qiskit.aqua.operators.expectations.PauliExpectation.compute_variance" />

`PauliExpectation.compute_variance(exp_op)`

Compute the variance of the expectation estimator.

**Parameters**

**exp\_op** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The full expectation value Operator after sampling.

**Return type**

`Union`\[`list`, `float`, `ndarray`]

**Returns**

The variances or lists thereof (if exp\_op contains ListOps) of the expectation value estimation.

