---
title: AQGD
description: API reference for qiskit.aqua.components.optimizers.AQGD
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.AQGD
---

# AQGD

<span id="qiskit.aqua.components.optimizers.AQGD" />

`AQGD(maxiter=1000, eta=1.0, tol=1e-06, disp=False, momentum=0.25, param_tol=1e-06, averaging=10)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/components/optimizers/aqgd.py "view source code")

Bases: `qiskit.aqua.components.optimizers.optimizer.Optimizer`

Analytic Quantum Gradient Descent (AQGD) with Epochs optimizer. Performs gradient descent optimization with a momentum term, analytic gradients, and customized step length schedule for parametrized quantum gates, i.e. Pauli Rotations. See, for example:

*   K. Mitarai, M. Negoro, M. Kitagawa, and K. Fujii. (2018). Quantum circuit learning. Phys. Rev. A 98, 032309. [https://arxiv.org/abs/1803.00745](https://arxiv.org/abs/1803.00745)
*   Maria Schuld, Ville Bergholm, Christian Gogolin, Josh Izaac, Nathan Killoran. (2019). Evaluating analytic gradients on quantum hardware. Phys. Rev. A 99, 032331. [https://arxiv.org/abs/1811.11184](https://arxiv.org/abs/1811.11184)

for further details on analytic gradients of parametrized quantum gates.

Gradients are computed “analytically” using the quantum circuit when evaluating the objective function.

Performs Analytical Quantum Gradient Descent (AQGD) with Epochs.

**Parameters**

*   **maxiter** (`Union`\[`int`, `List`\[`int`]]) – Maximum number of iterations (full gradient steps)
*   **eta** (`Union`\[`float`, `List`\[`float`]]) – The coefficient of the gradient update. Increasing this value results in larger step sizes: param = previous\_param - eta \* deriv
*   **tol** (`float`) – Tolerance for change in windowed average of objective values. Convergence occurs when either objective tolerance is met OR parameter tolerance is met.
*   **disp** (`bool`) – Set to True to display convergence messages.
*   **momentum** (`Union`\[`float`, `List`\[`float`]]) – Bias towards the previous gradient momentum in current update. Must be within the bounds: \[0,1)
*   **param\_tol** (`float`) – Tolerance for change in norm of parameters.
*   **averaging** (`int`) – Length of window over which to average objective values for objective convergence criterion

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If the length of `maxiter`, momentum\`, and `eta` is not the same.

## Methods

### get\_support\_level

<span id="qiskit.aqua.components.optimizers.AQGD.get_support_level" />

`AQGD.get_support_level()`

Support level dictionary

**Returns**

**gradient, bounds and initial point**

support information that is ignored/required.

**Return type**

Dict\[str, int]

### gradient\_num\_diff

<span id="qiskit.aqua.components.optimizers.AQGD.gradient_num_diff" />

`static AQGD.gradient_num_diff(x_center, f, epsilon, max_evals_grouped=1)`

We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center.

**Parameters**

*   **x\_center** (*ndarray*) – point around which we compute the gradient
*   **f** (*func*) – the function of which the gradient is to be computed.
*   **epsilon** (*float*) – the epsilon used in the numeric differentiation.
*   **max\_evals\_grouped** (*int*) – max evals grouped

**Returns**

the gradient computed

**Return type**

grad

### optimize

<span id="qiskit.aqua.components.optimizers.AQGD.optimize" />

`AQGD.optimize(num_vars, objective_function, gradient_function=None, variable_bounds=None, initial_point=None)`

Perform optimization.

**Parameters**

*   **num\_vars** (*int*) – Number of parameters to be optimized.
*   **objective\_function** (*callable*) – A function that computes the objective function.
*   **gradient\_function** (*callable*) – A function that computes the gradient of the objective function, or None if not available.
*   **variable\_bounds** (*list\[(float, float)]*) – List of variable bounds, given as pairs (lower, upper). None means unbounded.
*   **initial\_point** (*numpy.ndarray\[float]*) – Initial point.

**Return type**

`Tuple`\[`ndarray`, `float`, `int`]

**Returns**

**point, value, nfev**

point: is a 1D numpy.ndarray\[float] containing the solution value: is a float with the objective function value nfev: number of objective function calls made if available or None

**Raises**

**ValueError** – invalid input

### print\_options

<span id="qiskit.aqua.components.optimizers.AQGD.print_options" />

`AQGD.print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.aqua.components.optimizers.AQGD.set_max_evals_grouped" />

`AQGD.set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.aqua.components.optimizers.AQGD.set_options" />

`AQGD.set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### wrap\_function

<span id="qiskit.aqua.components.optimizers.AQGD.wrap_function" />

`static AQGD.wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

## Attributes

<span id="qiskit.aqua.components.optimizers.AQGD.bounds_support_level" />

### bounds\_support\_level

Returns bounds support level

<span id="qiskit.aqua.components.optimizers.AQGD.gradient_support_level" />

### gradient\_support\_level

Returns gradient support level

<span id="qiskit.aqua.components.optimizers.AQGD.initial_point_support_level" />

### initial\_point\_support\_level

Returns initial point support level

<span id="qiskit.aqua.components.optimizers.AQGD.is_bounds_ignored" />

### is\_bounds\_ignored

Returns is bounds ignored

<span id="qiskit.aqua.components.optimizers.AQGD.is_bounds_required" />

### is\_bounds\_required

Returns is bounds required

<span id="qiskit.aqua.components.optimizers.AQGD.is_bounds_supported" />

### is\_bounds\_supported

Returns is bounds supported

<span id="qiskit.aqua.components.optimizers.AQGD.is_gradient_ignored" />

### is\_gradient\_ignored

Returns is gradient ignored

<span id="qiskit.aqua.components.optimizers.AQGD.is_gradient_required" />

### is\_gradient\_required

Returns is gradient required

<span id="qiskit.aqua.components.optimizers.AQGD.is_gradient_supported" />

### is\_gradient\_supported

Returns is gradient supported

<span id="qiskit.aqua.components.optimizers.AQGD.is_initial_point_ignored" />

### is\_initial\_point\_ignored

Returns is initial point ignored

<span id="qiskit.aqua.components.optimizers.AQGD.is_initial_point_required" />

### is\_initial\_point\_required

Returns is initial point required

<span id="qiskit.aqua.components.optimizers.AQGD.is_initial_point_supported" />

### is\_initial\_point\_supported

Returns is initial point supported

<span id="qiskit.aqua.components.optimizers.AQGD.setting" />

### setting

Return setting

