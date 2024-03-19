---
title: QNSPSA
description: API reference for qiskit.algorithms.optimizers.QNSPSA
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.QNSPSA
---

# QNSPSA

<span id="qiskit.algorithms.optimizers.QNSPSA" />

`QNSPSA(fidelity, maxiter=100, blocking=True, allowed_increase=None, learning_rate=None, perturbation=None, last_avg=1, resamplings=1, perturbation_dims=None, regularization=None, hessian_delay=0, lse_solver=None, initial_hessian=None, callback=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/algorithms/optimizers/qnspsa.py "view source code")

Bases: `qiskit.algorithms.optimizers.spsa.SPSA`

The Quantum Natural SPSA (QN-SPSA) optimizer.

The QN-SPSA optimizer \[1] is a stochastic optimizer that belongs to the family of gradient descent methods. This optimizer is based on SPSA but attempts to improve the convergence by sampling the **natural gradient** instead of the vanilla, first-order gradient. It achieves this by approximating Hessian of the `fidelity` of the ansatz circuit.

Compared to natural gradients, which require $\mathcal{O}(d^2)$ expectation value evaluations for a circuit with $d$ parameters, QN-SPSA only requires $\mathcal{O}(1)$ and can therefore significantly speed up the natural gradient calculation by sacrificing some accuracy. Compared to SPSA, QN-SPSA requires 4 additional function evaluations of the fidelity.

The stochastic approximation of the natural gradient can be systematically improved by increasing the number of `resamplings`. This leads to a Monte Carlo-style convergence to the exact, analytic value.

<Admonition title="Note" type="note">
  This component has some function that is normally random. If you want to reproduce behavior then you should set the random number generator seed in the algorithm\_globals (`qiskit.utils.algorithm_globals.random_seed = seed`).
</Admonition>

**Examples**

This short example runs QN-SPSA for the ground state calculation of the `Z ^ Z` observable where the ansatz is a `PauliTwoDesign` circuit.

```python
import numpy as np
from qiskit.algorithms.optimizers import QNSPSA
from qiskit.circuit.library import PauliTwoDesign
from qiskit.opflow import Z, StateFn

ansatz = PauliTwoDesign(2, reps=1, seed=2)
observable = Z ^ Z
initial_point = np.random.random(ansatz.num_parameters)

def loss(x):
    bound = ansatz.bind_parameters(x)
    return np.real((StateFn(observable, is_measurement=True) @ StateFn(bound)).eval())

fidelity = QNSPSA.get_fidelity(ansatz)
qnspsa = QNSPSA(fidelity, maxiter=300)
result = qnspsa.optimize(ansatz.num_parameters, loss, initial_point=initial_point)
```

**References**

\[1] J. Gacon et al, “Simultaneous Perturbation Stochastic Approximation of the Quantum Fisher Information”, [arXiv:2103.09232](https://arxiv.org/abs/2103.09232)

**Parameters**

*   **fidelity** (`Callable`\[\[`ndarray`, `ndarray`], `float`]) – A function to compute the fidelity of the ansatz state with itself for two different sets of parameters.
*   **maxiter** (`int`) – The maximum number of iterations. Note that this is not the maximal number of function evaluations.
*   **blocking** (`bool`) – If True, only accepts updates that improve the loss (up to some allowed increase, see next argument).
*   **allowed\_increase** (`Optional`\[`float`]) – If `blocking` is `True`, this argument determines by how much the loss can increase with the proposed parameters and still be accepted. If `None`, the allowed increases is calibrated automatically to be twice the approximated standard deviation of the loss function.
*   **learning\_rate** (`Union`\[`float`, `Callable`\[\[], `Iterator`], `None`]) – The update step is the learning rate is multiplied with the gradient. If the learning rate is a float, it remains constant over the course of the optimization. It can also be a callable returning an iterator which yields the learning rates for each optimization step. If `learning_rate` is set `perturbation` must also be provided.
*   **perturbation** (`Union`\[`float`, `Callable`\[\[], `Iterator`], `None`]) – Specifies the magnitude of the perturbation for the finite difference approximation of the gradients. Can be either a float or a generator yielding the perturbation magnitudes per step. If `perturbation` is set `learning_rate` must also be provided.
*   **last\_avg** (`int`) – Return the average of the `last_avg` parameters instead of just the last parameter values.
*   **resamplings** (`Union`\[`int`, `Dict`\[`int`, `int`]]) – The number of times the gradient (and Hessian) is sampled using a random direction to construct a gradient estimate. Per default the gradient is estimated using only one random direction. If an integer, all iterations use the same number of resamplings. If a dictionary, this is interpreted as `{iteration: number of resamplings per iteration}`.
*   **perturbation\_dims** (`Optional`\[`int`]) – The number of perturbed dimensions. Per default, all dimensions are perturbed, but a smaller, fixed number can be perturbed. If set, the perturbed dimensions are chosen uniformly at random.
*   **regularization** (`Optional`\[`float`]) – To ensure the preconditioner is symmetric and positive definite, the identity times a small coefficient is added to it. This generator yields that coefficient.
*   **hessian\_delay** (`int`) – Start multiplying the gradient with the inverse Hessian only after a certain number of iterations. The Hessian is still evaluated and therefore this argument can be useful to first get a stable average over the last iterations before using it as preconditioner.
*   **lse\_solver** (`Optional`\[`Callable`\[\[`ndarray`, `ndarray`], `ndarray`]]) – The method to solve for the inverse of the Hessian. Per default an exact LSE solver is used, but can e.g. be overwritten by a minimization routine.
*   **initial\_hessian** (`Optional`\[`ndarray`]) – The initial guess for the Hessian. By default the identity matrix is used.
*   **callback** (`Optional`\[`Callable`\[\[`ndarray`, `float`, `float`, `int`, `bool`], `None`]]) – A callback function passed information in each iteration step. The information is, in this order: the parameters, the function value, the number of function evaluations, the stepsize, whether the step was accepted.

## Methods

### calibrate

<span id="qiskit.algorithms.optimizers.QNSPSA.calibrate" />

`static QNSPSA.calibrate(loss, initial_point, c=0.2, stability_constant=0, target_magnitude=None, alpha=0.602, gamma=0.101, modelspace=False)`

Calibrate SPSA parameters with a powerseries as learning rate and perturbation coeffs.

The powerseries are:

$$
a_k = \frac{a}{(A + k + 1)^\alpha}, c_k = \frac{c}{(k + 1)^\gamma}
$$

**Parameters**

*   **loss** (`Callable`\[\[`ndarray`], `float`]) – The loss function.
*   **initial\_point** (`ndarray`) – The initial guess of the iteration.
*   **c** (`float`) – The initial perturbation magnitude.
*   **stability\_constant** (`float`) – The value of A.
*   **target\_magnitude** (`Optional`\[`float`]) – The target magnitude for the first update step, defaults to $2\pi / 10$.
*   **alpha** (`float`) – The exponent of the learning rate powerseries.
*   **gamma** (`float`) – The exponent of the perturbation powerseries.
*   **modelspace** (`bool`) – Whether the target magnitude is the difference of parameter values or function values (= model space).

**Returns**

**A tuple of powerseries generators, the first one for the**

learning rate and the second one for the perturbation.

**Return type**

tuple(generator, generator)

### estimate\_stddev

<span id="qiskit.algorithms.optimizers.QNSPSA.estimate_stddev" />

`static QNSPSA.estimate_stddev(loss, initial_point, avg=25)`

Estimate the standard deviation of the loss function.

**Return type**

`float`

### get\_fidelity

<span id="qiskit.algorithms.optimizers.QNSPSA.get_fidelity" />

`static QNSPSA.get_fidelity(circuit, backend=None, expectation=None)`

Get a function to compute the fidelity of `circuit` with itself.

Let `circuit` be a parameterized quantum circuit performing the operation $U(\theta)$ given a set of parameters $\theta$. Then this method returns a function to evaluate

$$
F(\theta, \phi) = \big|\langle 0 | U^\dagger(\theta) U(\phi) |0\rangle  \big|^2.
$$

The output of this function can be used as input for the `fidelity` to the :class:\~\`qiskit.algorithms.optimizers.QNSPSA\` optimizer.

**Parameters**

*   **circuit** (`QuantumCircuit`) – The circuit preparing the parameterized ansatz.
*   **backend** (`Union`\[`Backend`, `QuantumInstance`, `None`]) – A backend of quantum instance to evaluate the circuits. If None, plain matrix multiplication will be used.
*   **expectation** (`Optional`\[`ExpectationBase`]) – An expectation converter to specify how the expected value is computed. If a shot-based readout is used this should be set to `PauliExpectation`.

**Return type**

`Callable`\[\[`ndarray`, `ndarray`], `float`]

**Returns**

A handle to the function $F$.

### get\_support\_level

<span id="qiskit.algorithms.optimizers.QNSPSA.get_support_level" />

`QNSPSA.get_support_level()`

Get the support level dictionary.

### gradient\_num\_diff

<span id="qiskit.algorithms.optimizers.QNSPSA.gradient_num_diff" />

`static QNSPSA.gradient_num_diff(x_center, f, epsilon, max_evals_grouped=1)`

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

<span id="qiskit.algorithms.optimizers.QNSPSA.optimize" />

`QNSPSA.optimize(num_vars, objective_function, gradient_function=None, variable_bounds=None, initial_point=None)`

Perform optimization.

**Parameters**

*   **num\_vars** (*int*) – Number of parameters to be optimized.
*   **objective\_function** (*callable*) – A function that computes the objective function.
*   **gradient\_function** (*callable*) – A function that computes the gradient of the objective function, or None if not available.
*   **variable\_bounds** (*list\[(float, float)]*) – List of variable bounds, given as pairs (lower, upper). None means unbounded.
*   **initial\_point** (*numpy.ndarray\[float]*) – Initial point.

**Returns**

**point, value, nfev**

point: is a 1D numpy.ndarray\[float] containing the solution value: is a float with the objective function value nfev: number of objective function calls made if available or None

**Raises**

**ValueError** – invalid input

### print\_options

<span id="qiskit.algorithms.optimizers.QNSPSA.print_options" />

`QNSPSA.print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.algorithms.optimizers.QNSPSA.set_max_evals_grouped" />

`QNSPSA.set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.algorithms.optimizers.QNSPSA.set_options" />

`QNSPSA.set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### wrap\_function

<span id="qiskit.algorithms.optimizers.QNSPSA.wrap_function" />

`static QNSPSA.wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

## Attributes

<span id="qiskit.algorithms.optimizers.QNSPSA.bounds_support_level" />

### bounds\_support\_level

Returns bounds support level

<span id="qiskit.algorithms.optimizers.QNSPSA.gradient_support_level" />

### gradient\_support\_level

Returns gradient support level

<span id="qiskit.algorithms.optimizers.QNSPSA.initial_point_support_level" />

### initial\_point\_support\_level

Returns initial point support level

<span id="qiskit.algorithms.optimizers.QNSPSA.is_bounds_ignored" />

### is\_bounds\_ignored

Returns is bounds ignored

<span id="qiskit.algorithms.optimizers.QNSPSA.is_bounds_required" />

### is\_bounds\_required

Returns is bounds required

<span id="qiskit.algorithms.optimizers.QNSPSA.is_bounds_supported" />

### is\_bounds\_supported

Returns is bounds supported

<span id="qiskit.algorithms.optimizers.QNSPSA.is_gradient_ignored" />

### is\_gradient\_ignored

Returns is gradient ignored

<span id="qiskit.algorithms.optimizers.QNSPSA.is_gradient_required" />

### is\_gradient\_required

Returns is gradient required

<span id="qiskit.algorithms.optimizers.QNSPSA.is_gradient_supported" />

### is\_gradient\_supported

Returns is gradient supported

<span id="qiskit.algorithms.optimizers.QNSPSA.is_initial_point_ignored" />

### is\_initial\_point\_ignored

Returns is initial point ignored

<span id="qiskit.algorithms.optimizers.QNSPSA.is_initial_point_required" />

### is\_initial\_point\_required

Returns is initial point required

<span id="qiskit.algorithms.optimizers.QNSPSA.is_initial_point_supported" />

### is\_initial\_point\_supported

Returns is initial point supported

<span id="qiskit.algorithms.optimizers.QNSPSA.setting" />

### setting

Return setting

<span id="qiskit.algorithms.optimizers.QNSPSA.settings" />

### settings

The optimizer settings in a dictionary format.

**Return type**

`Dict`\[`str`, `Any`]

