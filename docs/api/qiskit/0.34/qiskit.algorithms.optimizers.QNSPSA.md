# QNSPSA[¶](#qnspsa "Permalink to this headline")

<span id="undefined" />

`QNSPSA(fidelity, maxiter=100, blocking=True, allowed_increase=None, learning_rate=None, perturbation=None, last_avg=1, resamplings=1, perturbation_dims=None, regularization=None, hessian_delay=0, lse_solver=None, initial_hessian=None, callback=None, termination_checker=None)`

Bases: `qiskit.algorithms.optimizers.spsa.SPSA`

The Quantum Natural SPSA (QN-SPSA) optimizer.

The QN-SPSA optimizer \[1] is a stochastic optimizer that belongs to the family of gradient descent methods. This optimizer is based on SPSA but attempts to improve the convergence by sampling the **natural gradient** instead of the vanilla, first-order gradient. It achieves this by approximating Hessian of the `fidelity` of the ansatz circuit.

Compared to natural gradients, which require $\mathcal{O}(d^2)$ expectation value evaluations for a circuit with $d$ parameters, QN-SPSA only requires $\mathcal{O}(1)$ and can therefore significantly speed up the natural gradient calculation by sacrificing some accuracy. Compared to SPSA, QN-SPSA requires 4 additional function evaluations of the fidelity.

The stochastic approximation of the natural gradient can be systematically improved by increasing the number of `resamplings`. This leads to a Monte Carlo-style convergence to the exact, analytic value.

<Admonition title="Note" type="note">
  This component has some function that is normally random. If you want to reproduce behavior then you should set the random number generator seed in the algorithm\_globals (`qiskit.utils.algorithm_globals.random_seed = seed`).
</Admonition>

## Examples

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

## References

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
*   **callback** (`Optional`\[`Callable`\[\[`int`, `ndarray`, `float`, `float`, `bool`], `None`]]) – A callback function passed information in each iteration step. The information is, in this order: the parameters, the function value, the number of function evaluations, the stepsize, whether the step was accepted.
*   **termination\_checker** (`Optional`\[`Callable`\[\[`int`, `ndarray`, `float`, `float`, `bool`], `bool`]]) – A callback function executed at the end of each iteration step. The arguments are, in this order: the parameters, the function value, the number of function evaluations, the stepsize, whether the step was accepted. If the callback returns True, the optimization is terminated. To prevent additional evaluations of the objective method, if the objective has not yet been evaluated, the objective is estimated by taking the mean of the objective evaluations used in the estimate of the gradient.

## Methods

|                                                                                                                                                                                                            |                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`calibrate`](qiskit.algorithms.optimizers.QNSPSA.calibrate#qiskit.algorithms.optimizers.QNSPSA.calibrate "qiskit.algorithms.optimizers.QNSPSA.calibrate")                                                 | Calibrate SPSA parameters with a powerseries as learning rate and perturbation coeffs.                    |
| [`estimate_stddev`](qiskit.algorithms.optimizers.QNSPSA.estimate_stddev#qiskit.algorithms.optimizers.QNSPSA.estimate_stddev "qiskit.algorithms.optimizers.QNSPSA.estimate_stddev")                         | Estimate the standard deviation of the loss function.                                                     |
| [`get_fidelity`](qiskit.algorithms.optimizers.QNSPSA.get_fidelity#qiskit.algorithms.optimizers.QNSPSA.get_fidelity "qiskit.algorithms.optimizers.QNSPSA.get_fidelity")                                     | Get a function to compute the fidelity of `circuit` with itself.                                          |
| [`get_support_level`](qiskit.algorithms.optimizers.QNSPSA.get_support_level#qiskit.algorithms.optimizers.QNSPSA.get_support_level "qiskit.algorithms.optimizers.QNSPSA.get_support_level")                 | Get the support level dictionary.                                                                         |
| [`gradient_num_diff`](qiskit.algorithms.optimizers.QNSPSA.gradient_num_diff#qiskit.algorithms.optimizers.QNSPSA.gradient_num_diff "qiskit.algorithms.optimizers.QNSPSA.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`minimize`](qiskit.algorithms.optimizers.QNSPSA.minimize#qiskit.algorithms.optimizers.QNSPSA.minimize "qiskit.algorithms.optimizers.QNSPSA.minimize")                                                     | Minimize the scalar function.                                                                             |
| [`optimize`](qiskit.algorithms.optimizers.QNSPSA.optimize#qiskit.algorithms.optimizers.QNSPSA.optimize "qiskit.algorithms.optimizers.QNSPSA.optimize")                                                     | Perform optimization.                                                                                     |
| [`print_options`](qiskit.algorithms.optimizers.QNSPSA.print_options#qiskit.algorithms.optimizers.QNSPSA.print_options "qiskit.algorithms.optimizers.QNSPSA.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.algorithms.optimizers.QNSPSA.set_max_evals_grouped#qiskit.algorithms.optimizers.QNSPSA.set_max_evals_grouped "qiskit.algorithms.optimizers.QNSPSA.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.algorithms.optimizers.QNSPSA.set_options#qiskit.algorithms.optimizers.QNSPSA.set_options "qiskit.algorithms.optimizers.QNSPSA.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.algorithms.optimizers.QNSPSA.wrap_function#qiskit.algorithms.optimizers.QNSPSA.wrap_function "qiskit.algorithms.optimizers.QNSPSA.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

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

The optimizer settings in a dictionary format.

**Return type**

`Dict`\[`str`, `Any`]
