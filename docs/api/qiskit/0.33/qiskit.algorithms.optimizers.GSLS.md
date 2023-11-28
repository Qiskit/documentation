# GSLS

<span id="undefined" />

`GSLS(maxiter=10000, max_eval=10000, disp=False, sampling_radius=1e-06, sample_size_factor=1, initial_step_size=0.01, min_step_size=1e-10, step_size_multiplier=0.4, armijo_parameter=0.1, min_gradient_norm=1e-08, max_failed_rejection_sampling=50)`

Bases: `qiskit.algorithms.optimizers.optimizer.Optimizer`

Gaussian-smoothed Line Search.

An implementation of the line search algorithm described in [https://arxiv.org/pdf/1905.01332.pdf](https://arxiv.org/pdf/1905.01332.pdf), using gradient approximation based on Gaussian-smoothed samples on a sphere.

<Admonition title="Note" type="note">
  This component has some function that is normally random. If you want to reproduce behavior then you should set the random number generator seed in the algorithm\_globals (`qiskit.utils.algorithm_globals.random_seed = seed`).
</Admonition>

**Parameters**

*   **maxiter** (`int`) – Maximum number of iterations.
*   **max\_eval** (`int`) – Maximum number of evaluations.
*   **disp** (`bool`) – Set to True to display convergence messages.
*   **sampling\_radius** (`float`) – Sampling radius to determine gradient estimate.
*   **sample\_size\_factor** (`int`) – The size of the sample set at each iteration is this number multiplied by the dimension of the problem, rounded to the nearest integer.
*   **initial\_step\_size** (`float`) – Initial step size for the descent algorithm.
*   **min\_step\_size** (`float`) – Minimum step size for the descent algorithm.
*   **step\_size\_multiplier** (`float`) – Step size reduction after unsuccessful steps, in the interval (0, 1).
*   **armijo\_parameter** (`float`) – Armijo parameter for sufficient decrease criterion, in the interval (0, 1).
*   **min\_gradient\_norm** (`float`) – If the gradient norm is below this threshold, the algorithm stops.
*   **max\_failed\_rejection\_sampling** (`int`) – Maximum number of attempts to sample points within bounds.

## Methods

|                                                                                                                                                                                                          |                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_support_level`](qiskit.algorithms.optimizers.GSLS.get_support_level#qiskit.algorithms.optimizers.GSLS.get_support_level "qiskit.algorithms.optimizers.GSLS.get_support_level")                     | Return support level dictionary.                                                                          |
| [`gradient_approximation`](qiskit.algorithms.optimizers.GSLS.gradient_approximation#qiskit.algorithms.optimizers.GSLS.gradient_approximation "qiskit.algorithms.optimizers.GSLS.gradient_approximation") | Construct gradient approximation from given sample.                                                       |
| [`gradient_num_diff`](qiskit.algorithms.optimizers.GSLS.gradient_num_diff#qiskit.algorithms.optimizers.GSLS.gradient_num_diff "qiskit.algorithms.optimizers.GSLS.gradient_num_diff")                     | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`ls_optimize`](qiskit.algorithms.optimizers.GSLS.ls_optimize#qiskit.algorithms.optimizers.GSLS.ls_optimize "qiskit.algorithms.optimizers.GSLS.ls_optimize")                                             | Run the line search optimization.                                                                         |
| [`minimize`](qiskit.algorithms.optimizers.GSLS.minimize#qiskit.algorithms.optimizers.GSLS.minimize "qiskit.algorithms.optimizers.GSLS.minimize")                                                         | Minimize the scalar function.                                                                             |
| [`optimize`](qiskit.algorithms.optimizers.GSLS.optimize#qiskit.algorithms.optimizers.GSLS.optimize "qiskit.algorithms.optimizers.GSLS.optimize")                                                         | Perform optimization.                                                                                     |
| [`print_options`](qiskit.algorithms.optimizers.GSLS.print_options#qiskit.algorithms.optimizers.GSLS.print_options "qiskit.algorithms.optimizers.GSLS.print_options")                                     | Print algorithm-specific options.                                                                         |
| [`sample_points`](qiskit.algorithms.optimizers.GSLS.sample_points#qiskit.algorithms.optimizers.GSLS.sample_points "qiskit.algorithms.optimizers.GSLS.sample_points")                                     | Sample `num_points` points around `x` on the `n`-sphere of specified radius.                              |
| [`sample_set`](qiskit.algorithms.optimizers.GSLS.sample_set#qiskit.algorithms.optimizers.GSLS.sample_set "qiskit.algorithms.optimizers.GSLS.sample_set")                                                 | Construct sample set of given size.                                                                       |
| [`set_max_evals_grouped`](qiskit.algorithms.optimizers.GSLS.set_max_evals_grouped#qiskit.algorithms.optimizers.GSLS.set_max_evals_grouped "qiskit.algorithms.optimizers.GSLS.set_max_evals_grouped")     | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.algorithms.optimizers.GSLS.set_options#qiskit.algorithms.optimizers.GSLS.set_options "qiskit.algorithms.optimizers.GSLS.set_options")                                             | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.algorithms.optimizers.GSLS.wrap_function#qiskit.algorithms.optimizers.GSLS.wrap_function "qiskit.algorithms.optimizers.GSLS.wrap_function")                                     | Wrap the function to implicitly inject the args at the call of the function.                              |

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
