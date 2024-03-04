---
title: Optimizer
description: API reference for qiskit.algorithms.optimizers.Optimizer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.Optimizer
---

# Optimizer

<span id="qiskit.algorithms.optimizers.Optimizer" />

`Optimizer` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/algorithms/optimizers/optimizer.py "view source code")

Bases: `abc.ABC`

Base class for optimization algorithm.

Initialize the optimization algorithm, setting the support level for \_gradient\_support\_level, \_bound\_support\_level, \_initial\_point\_support\_level, and empty options.

## Methods

### get\_support\_level

<span id="qiskit.algorithms.optimizers.Optimizer.get_support_level" />

`abstract Optimizer.get_support_level()`

Return support level dictionary

### gradient\_num\_diff

<span id="qiskit.algorithms.optimizers.Optimizer.gradient_num_diff" />

`static Optimizer.gradient_num_diff(x_center, f, epsilon, max_evals_grouped=None)`

We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center.

**Parameters**

*   **x\_center** (*ndarray*) – point around which we compute the gradient
*   **f** (*func*) – the function of which the gradient is to be computed.
*   **epsilon** (*float*) – the epsilon used in the numeric differentiation.
*   **max\_evals\_grouped** (*int*) – max evals grouped, defaults to 1 (i.e. no batching).

**Returns**

the gradient computed

**Return type**

grad

### minimize

<span id="qiskit.algorithms.optimizers.Optimizer.minimize" />

`abstract Optimizer.minimize(fun, x0, jac=None, bounds=None)`

Minimize the scalar function.

**Parameters**

*   **fun** (`Callable`\[\[`Union`\[`float`, `ndarray`]], `float`]) – The scalar function to minimize.
*   **x0** (`Union`\[`float`, `ndarray`]) – The initial point for the minimization.
*   **jac** (`Optional`\[`Callable`\[\[`Union`\[`float`, `ndarray`]], `Union`\[`float`, `ndarray`]]]) – The gradient of the scalar function `fun`.
*   **bounds** (`Optional`\[`List`\[`Tuple`\[`float`, `float`]]]) – Bounds for the variables of `fun`. This argument might be ignored if the optimizer does not support bounds.

**Return type**

[`OptimizerResult`](qiskit.algorithms.optimizers.OptimizerResult "qiskit.algorithms.optimizers.optimizer.OptimizerResult")

**Returns**

The result of the optimization, containing e.g. the result as attribute `x`.

### print\_options

<span id="qiskit.algorithms.optimizers.Optimizer.print_options" />

`Optimizer.print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.algorithms.optimizers.Optimizer.set_max_evals_grouped" />

`Optimizer.set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.algorithms.optimizers.Optimizer.set_options" />

`Optimizer.set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### wrap\_function

<span id="qiskit.algorithms.optimizers.Optimizer.wrap_function" />

`static Optimizer.wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

## Attributes

<span id="qiskit.algorithms.optimizers.Optimizer.bounds_support_level" />

### bounds\_support\_level

Returns bounds support level

<span id="qiskit.algorithms.optimizers.Optimizer.gradient_support_level" />

### gradient\_support\_level

Returns gradient support level

<span id="qiskit.algorithms.optimizers.Optimizer.initial_point_support_level" />

### initial\_point\_support\_level

Returns initial point support level

<span id="qiskit.algorithms.optimizers.Optimizer.is_bounds_ignored" />

### is\_bounds\_ignored

Returns is bounds ignored

<span id="qiskit.algorithms.optimizers.Optimizer.is_bounds_required" />

### is\_bounds\_required

Returns is bounds required

<span id="qiskit.algorithms.optimizers.Optimizer.is_bounds_supported" />

### is\_bounds\_supported

Returns is bounds supported

<span id="qiskit.algorithms.optimizers.Optimizer.is_gradient_ignored" />

### is\_gradient\_ignored

Returns is gradient ignored

<span id="qiskit.algorithms.optimizers.Optimizer.is_gradient_required" />

### is\_gradient\_required

Returns is gradient required

<span id="qiskit.algorithms.optimizers.Optimizer.is_gradient_supported" />

### is\_gradient\_supported

Returns is gradient supported

<span id="qiskit.algorithms.optimizers.Optimizer.is_initial_point_ignored" />

### is\_initial\_point\_ignored

Returns is initial point ignored

<span id="qiskit.algorithms.optimizers.Optimizer.is_initial_point_required" />

### is\_initial\_point\_required

Returns is initial point required

<span id="qiskit.algorithms.optimizers.Optimizer.is_initial_point_supported" />

### is\_initial\_point\_supported

Returns is initial point supported

<span id="qiskit.algorithms.optimizers.Optimizer.setting" />

### setting

Return setting

<span id="qiskit.algorithms.optimizers.Optimizer.settings" />

### settings

The optimizer settings in a dictionary format.

The settings can for instance be used for JSON-serialization (if all settings are serializable, which e.g. doesn’t hold per default for callables), such that the optimizer object can be reconstructed as

```python
settings = optimizer.settings
# JSON serialize and send to another server
optimizer = OptimizerClass(**settings)
```

**Return type**

`Dict`\[`str`, `Any`]

