---
title: OptimizerResult
description: API reference for qiskit.algorithms.optimizers.OptimizerResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.OptimizerResult
---

# OptimizerResult

<span id="qiskit.algorithms.optimizers.OptimizerResult" />

`qiskit.algorithms.optimizers.OptimizerResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.45/qiskit/algorithms/optimizers/optimizer.py "view source code")

Bases: `AlgorithmResult`

The result of an optimization routine.

## Attributes

<span id="qiskit.algorithms.optimizers.OptimizerResult.fun" />

### fun

The final value of the minimization.

<span id="qiskit.algorithms.optimizers.OptimizerResult.jac" />

### jac

The final gradient of the minimization.

<span id="qiskit.algorithms.optimizers.OptimizerResult.nfev" />

### nfev

The total number of function evaluations.

<span id="qiskit.algorithms.optimizers.OptimizerResult.nit" />

### nit

The total number of iterations.

<span id="qiskit.algorithms.optimizers.OptimizerResult.njev" />

### njev

The total number of gradient evaluations.

<span id="qiskit.algorithms.optimizers.OptimizerResult.x" />

### x

The final point of the minimization.

## Methods

### combine

<span id="qiskit.algorithms.optimizers.OptimizerResult.combine" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :param result: Argument result with properties to be set.

**Raises**

[**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError "(in Python v3.12)") – Argument is None

