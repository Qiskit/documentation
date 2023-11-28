# AQGD

<span id="undefined" />

`AQGD(maxiter=1000, eta=1.0, tol=1e-06, momentum=0.25, param_tol=1e-06, averaging=10)`

Bases: `qiskit.algorithms.optimizers.optimizer.Optimizer`

Analytic Quantum Gradient Descent (AQGD) with Epochs optimizer. Performs gradient descent optimization with a momentum term, analytic gradients, and customized step length schedule for parameterized quantum gates, i.e. Pauli Rotations. See, for example:

*   K. Mitarai, M. Negoro, M. Kitagawa, and K. Fujii. (2018). Quantum circuit learning. Phys. Rev. A 98, 032309. [https://arxiv.org/abs/1803.00745](https://arxiv.org/abs/1803.00745)
*   Maria Schuld, Ville Bergholm, Christian Gogolin, Josh Izaac, Nathan Killoran. (2019). Evaluating analytic gradients on quantum hardware. Phys. Rev. A 99, 032331. [https://arxiv.org/abs/1811.11184](https://arxiv.org/abs/1811.11184)

for further details on analytic gradients of parameterized quantum gates.

Gradients are computed “analytically” using the quantum circuit when evaluating the objective function.

Performs Analytical Quantum Gradient Descent (AQGD) with Epochs.

**Parameters**

*   **maxiter** (`Union`\[`int`, `List`\[`int`]]) – Maximum number of iterations (full gradient steps)
*   **eta** (`Union`\[`float`, `List`\[`float`]]) – The coefficient of the gradient update. Increasing this value results in larger step sizes: param = previous\_param - eta \* deriv
*   **tol** (`float`) – Tolerance for change in windowed average of objective values. Convergence occurs when either objective tolerance is met OR parameter tolerance is met.
*   **momentum** (`Union`\[`float`, `List`\[`float`]]) – Bias towards the previous gradient momentum in current update. Must be within the bounds: \[0,1)
*   **param\_tol** (`float`) – Tolerance for change in norm of parameters.
*   **averaging** (`int`) – Length of window over which to average objective values for objective convergence criterion

**Raises**

[**AlgorithmError**](qiskit.algorithms.AlgorithmError#qiskit.algorithms.AlgorithmError "qiskit.algorithms.AlgorithmError") – If the length of `maxiter`, momentum\`, and `eta` is not the same.

## Methods

|                                                                                                                                                                                                      |                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_support_level`](qiskit.algorithms.optimizers.AQGD.get_support_level#qiskit.algorithms.optimizers.AQGD.get_support_level "qiskit.algorithms.optimizers.AQGD.get_support_level")                 | Support level dictionary                                                                                  |
| [`gradient_num_diff`](qiskit.algorithms.optimizers.AQGD.gradient_num_diff#qiskit.algorithms.optimizers.AQGD.gradient_num_diff "qiskit.algorithms.optimizers.AQGD.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`minimize`](qiskit.algorithms.optimizers.AQGD.minimize#qiskit.algorithms.optimizers.AQGD.minimize "qiskit.algorithms.optimizers.AQGD.minimize")                                                     | Minimize the scalar function.                                                                             |
| [`optimize`](qiskit.algorithms.optimizers.AQGD.optimize#qiskit.algorithms.optimizers.AQGD.optimize "qiskit.algorithms.optimizers.AQGD.optimize")                                                     | Perform optimization.                                                                                     |
| [`print_options`](qiskit.algorithms.optimizers.AQGD.print_options#qiskit.algorithms.optimizers.AQGD.print_options "qiskit.algorithms.optimizers.AQGD.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.algorithms.optimizers.AQGD.set_max_evals_grouped#qiskit.algorithms.optimizers.AQGD.set_max_evals_grouped "qiskit.algorithms.optimizers.AQGD.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.algorithms.optimizers.AQGD.set_options#qiskit.algorithms.optimizers.AQGD.set_options "qiskit.algorithms.optimizers.AQGD.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.algorithms.optimizers.AQGD.wrap_function#qiskit.algorithms.optimizers.AQGD.wrap_function "qiskit.algorithms.optimizers.AQGD.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

## Attributes

<span id="undefined" />

### bounds\_support\_level

Returns bounds support level

<span id="undefined" />

### gradient\_support\_level

Returns gradient support level

<span id="undefined" />

### initial\_point\_support\_level

Returns initial point support level

<span id="undefined" />

### is\_bounds\_ignored

Returns is bounds ignored

<span id="undefined" />

### is\_bounds\_required

Returns is bounds required

<span id="undefined" />

### is\_bounds\_supported

Returns is bounds supported

<span id="undefined" />

### is\_gradient\_ignored

Returns is gradient ignored

<span id="undefined" />

### is\_gradient\_required

Returns is gradient required

<span id="undefined" />

### is\_gradient\_supported

Returns is gradient supported

<span id="undefined" />

### is\_initial\_point\_ignored

Returns is initial point ignored

<span id="undefined" />

### is\_initial\_point\_required

Returns is initial point required

<span id="undefined" />

### is\_initial\_point\_supported

Returns is initial point supported

<span id="undefined" />

### setting

Return setting

<span id="undefined" />

### settings

**Return type**

`Dict`\[`str`, `Any`]
