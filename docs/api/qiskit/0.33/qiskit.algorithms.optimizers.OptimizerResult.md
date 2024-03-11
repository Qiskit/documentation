---
title: OptimizerResult
description: API reference for qiskit.algorithms.optimizers.OptimizerResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.OptimizerResult
---

# OptimizerResult

<span id="qiskit.algorithms.optimizers.OptimizerResult" />

`OptimizerResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/algorithms/optimizers/optimizer.py "view source code")

Bases: `qiskit.algorithms.algorithm_result.AlgorithmResult`

The result of an optimization routine.

## Methods

### combine

<span id="qiskit.algorithms.optimizers.OptimizerResult.combine" />

`OptimizerResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

## Attributes

<span id="qiskit.algorithms.optimizers.OptimizerResult.fun" />

### fun

The final value of the minimization.

**Return type**

`Optional`\[`float`]

<span id="qiskit.algorithms.optimizers.OptimizerResult.jac" />

### jac

The final gradient of the minimization.

**Return type**

`Union`\[`float`, `ndarray`, `None`]

<span id="qiskit.algorithms.optimizers.OptimizerResult.nfev" />

### nfev

The total number of function evaluations.

**Return type**

`Optional`\[`int`]

<span id="qiskit.algorithms.optimizers.OptimizerResult.nit" />

### nit

The total number of iterations.

**Return type**

`Optional`\[`int`]

<span id="qiskit.algorithms.optimizers.OptimizerResult.njev" />

### njev

The total number of gradient evaluations.

**Return type**

`Optional`\[`int`]

<span id="qiskit.algorithms.optimizers.OptimizerResult.x" />

### x

The final point of the minimization.

**Return type**

`Union`\[`float`, `ndarray`, `None`]

