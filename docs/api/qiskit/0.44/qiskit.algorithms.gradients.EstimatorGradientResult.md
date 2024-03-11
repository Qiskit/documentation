---
title: EstimatorGradientResult
description: API reference for qiskit.algorithms.gradients.EstimatorGradientResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.gradients.EstimatorGradientResult
---

# EstimatorGradientResult

<span id="qiskit.algorithms.gradients.EstimatorGradientResult" />

`qiskit.algorithms.gradients.EstimatorGradientResult(gradients, metadata, options)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/algorithms/gradients/base/estimator_gradient_result.py "view source code")

Bases: [`object`](https://docs.python.org/3/library/functions.html#object "(in Python v3.12)")

Result of EstimatorGradient.

## Attributes

<span id="qiskit.algorithms.gradients.EstimatorGradientResult.gradients" />

### gradients

`list[numpy.ndarray]`

The gradients of the expectation values.

<span id="qiskit.algorithms.gradients.EstimatorGradientResult.metadata" />

### metadata

`list[dict[str, Any]]`

Additional information about the job.

<span id="qiskit.algorithms.gradients.EstimatorGradientResult.options" />

### options

`Options`

Primitive runtime options for the execution of the job.

