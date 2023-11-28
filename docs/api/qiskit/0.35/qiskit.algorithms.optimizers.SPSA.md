# SPSA

<span id="undefined" />

`SPSA(maxiter=100, blocking=False, allowed_increase=None, trust_region=False, learning_rate=None, perturbation=None, last_avg=1, resamplings=1, perturbation_dims=None, second_order=False, regularization=None, hessian_delay=0, lse_solver=None, initial_hessian=None, callback=None, termination_checker=None)`

Bases: `qiskit.algorithms.optimizers.optimizer.Optimizer`

Simultaneous Perturbation Stochastic Approximation (SPSA) optimizer.

SPSA \[1] is an gradient descent method for optimizing systems with multiple unknown parameters. As an optimization method, it is appropriately suited to large-scale population models, adaptive modeling, and simulation optimization.

<Admonition title="See also" type="note">
  Many examples are presented at the [SPSA Web site](http://www.jhuapl.edu/SPSA).
</Admonition>

The main feature of SPSA is the stochastic gradient approximation, which requires only two measurements of the objective function, regardless of the dimension of the optimization problem.

Additionally to standard, first-order SPSA, where only gradient information is used, this implementation also allows second-order SPSA (2-SPSA) \[2]. In 2-SPSA we also estimate the Hessian of the loss with a stochastic approximation and multiply the gradient with the inverse Hessian to take local curvature into account and improve convergence. Notably this Hessian estimate requires only a constant number of function evaluations unlike an exact evaluation of the Hessian, which scales quadratically in the number of function evaluations.

<Admonition title="Note" type="note">
  SPSA can be used in the presence of noise, and it is therefore indicated in situations involving measurement uncertainty on a quantum computation when finding a minimum. If you are executing a variational algorithm using a Quantum ASseMbly Language (QASM) simulator or a real device, SPSA would be the most recommended choice among the optimizers provided here.
</Admonition>

The optimization process can includes a calibration phase if neither the `learning_rate` nor `perturbation` is provided, which requires additional functional evaluations. (Note that either both or none must be set.) For further details on the automatic calibration, please refer to the supplementary information section IV. of \[3].

<Admonition title="Note" type="note">
  This component has some function that is normally random. If you want to reproduce behavior then you should set the random number generator seed in the algorithm\_globals (`qiskit.utils.algorithm_globals.random_seed = seed`).
</Admonition>

## Examples

This short example runs SPSA for the ground state calculation of the `Z ^ Z` observable where the ansatz is a `PauliTwoDesign` circuit.

```python
import numpy as np
from qiskit.algorithms.optimizers import SPSA
from qiskit.circuit.library import PauliTwoDesign
from qiskit.opflow import Z, StateFn

ansatz = PauliTwoDesign(2, reps=1, seed=2)
observable = Z ^ Z
initial_point = np.random.random(ansatz.num_parameters)

def loss(x):
    bound = ansatz.bind_parameters(x)
    return np.real((StateFn(observable, is_measurement=True) @ StateFn(bound)).eval())

spsa = SPSA(maxiter=300)
result = spsa.optimize(ansatz.num_parameters, loss, initial_point=initial_point)
```

To use the Hessian information, i.e. 2-SPSA, you can add second\_order=True to the initializer of the SPSA class, the rest of the code remains the same.

```python
two_spsa = SPSA(maxiter=300, second_order=True)
result = two_spsa.optimize(ansatz.num_parameters, loss, initial_point=initial_point)
```

## References

\[1]: J. C. Spall (1998). An Overview of the Simultaneous Perturbation Method for Efficient Optimization, Johns Hopkins APL Technical Digest, 19(4), 482–492. [Online at jhuapl.edu.](https://www.jhuapl.edu/SPSA/PDF-SPSA/Spall_An_Overview.PDF)

\[2]: J. C. Spall (1997). Accelerated second-order stochastic optimization using only function measurements, Proceedings of the 36th IEEE Conference on Decision and Control, 1417-1424 vol.2. [Online at IEEE.org.](https://ieeexplore.ieee.org/document/657661)

\[3]: A. Kandala et al. (2017). Hardware-efficient Variational Quantum Eigensolver for Small Molecules and Quantum Magnets. Nature 549, pages242–246(2017). [arXiv:1704.05018v2](https://arxiv.org/pdf/1704.05018v2.pdf#section*.11)

**Parameters**

*   **maxiter** (`int`) – The maximum number of iterations. Note that this is not the maximal number of function evaluations.
*   **blocking** (`bool`) – If True, only accepts updates that improve the loss (up to some allowed increase, see next argument).
*   **allowed\_increase** (`Optional`\[`float`]) – If `blocking` is `True`, this argument determines by how much the loss can increase with the proposed parameters and still be accepted. If `None`, the allowed increases is calibrated automatically to be twice the approximated standard deviation of the loss function.
*   **trust\_region** (`bool`) – If `True`, restricts the norm of the update step to be $\leq 1$.
*   **learning\_rate** (`Union`\[`float`, `array`, `Callable`\[\[], `Iterator`], `None`]) – The update step is the learning rate is multiplied with the gradient. If the learning rate is a float, it remains constant over the course of the optimization. If a NumPy array, the $i$-th element is the learning rate for the $i$-th iteration. It can also be a callable returning an iterator which yields the learning rates for each optimization step. If `learning_rate` is set `perturbation` must also be provided.
*   **perturbation** (`Union`\[`float`, `array`, `Callable`\[\[], `Iterator`], `None`]) – Specifies the magnitude of the perturbation for the finite difference approximation of the gradients. See `learning_rate` for the supported types. If `perturbation` is set `learning_rate` must also be provided.
*   **last\_avg** (`int`) – Return the average of the `last_avg` parameters instead of just the last parameter values.
*   **resamplings** (`Union`\[`int`, `Dict`\[`int`, `int`]]) – The number of times the gradient (and Hessian) is sampled using a random direction to construct a gradient estimate. Per default the gradient is estimated using only one random direction. If an integer, all iterations use the same number of resamplings. If a dictionary, this is interpreted as `{iteration: number of resamplings per iteration}`.
*   **perturbation\_dims** (`Optional`\[`int`]) – The number of perturbed dimensions. Per default, all dimensions are perturbed, but a smaller, fixed number can be perturbed. If set, the perturbed dimensions are chosen uniformly at random.
*   **second\_order** (`bool`) – If True, use 2-SPSA instead of SPSA. In 2-SPSA, the Hessian is estimated additionally to the gradient, and the gradient is preconditioned with the inverse of the Hessian to improve convergence.
*   **regularization** (`Optional`\[`float`]) – To ensure the preconditioner is symmetric and positive definite, the identity times a small coefficient is added to it. This generator yields that coefficient.
*   **hessian\_delay** (`int`) – Start multiplying the gradient with the inverse Hessian only after a certain number of iterations. The Hessian is still evaluated and therefore this argument can be useful to first get a stable average over the last iterations before using it as preconditioner.
*   **lse\_solver** (`Optional`\[`Callable`\[\[`ndarray`, `ndarray`], `ndarray`]]) – The method to solve for the inverse of the Hessian. Per default an exact LSE solver is used, but can e.g. be overwritten by a minimization routine.
*   **initial\_hessian** (`Optional`\[`ndarray`]) – The initial guess for the Hessian. By default the identity matrix is used.
*   **callback** (`Optional`\[`Callable`\[\[`int`, `ndarray`, `float`, `float`, `bool`], `None`]]) – A callback function passed information in each iteration step. The information is, in this order: the number of function evaluations, the parameters, the function value, the stepsize, whether the step was accepted.
*   **termination\_checker** (`Optional`\[`Callable`\[\[`int`, `ndarray`, `float`, `float`, `bool`], `bool`]]) – A callback function executed at the end of each iteration step. The arguments are, in this order: the parameters, the function value, the number of function evaluations, the stepsize, whether the step was accepted. If the callback returns True, the optimization is terminated. To prevent additional evaluations of the objective method, if the objective has not yet been evaluated, the objective is estimated by taking the mean of the objective evaluations used in the estimate of the gradient.

**Raises**

**ValueError** – If `learning_rate` or `perturbation` is an array with less elements than the number of iterations.

## Example

## Methods

|                                                                                                                                                                                                      |                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`calibrate`](qiskit.algorithms.optimizers.SPSA.calibrate#qiskit.algorithms.optimizers.SPSA.calibrate "qiskit.algorithms.optimizers.SPSA.calibrate")                                                 | Calibrate SPSA parameters with a powerseries as learning rate and perturbation coeffs.                    |
| [`estimate_stddev`](qiskit.algorithms.optimizers.SPSA.estimate_stddev#qiskit.algorithms.optimizers.SPSA.estimate_stddev "qiskit.algorithms.optimizers.SPSA.estimate_stddev")                         | Estimate the standard deviation of the loss function.                                                     |
| [`get_support_level`](qiskit.algorithms.optimizers.SPSA.get_support_level#qiskit.algorithms.optimizers.SPSA.get_support_level "qiskit.algorithms.optimizers.SPSA.get_support_level")                 | Get the support level dictionary.                                                                         |
| [`gradient_num_diff`](qiskit.algorithms.optimizers.SPSA.gradient_num_diff#qiskit.algorithms.optimizers.SPSA.gradient_num_diff "qiskit.algorithms.optimizers.SPSA.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`minimize`](qiskit.algorithms.optimizers.SPSA.minimize#qiskit.algorithms.optimizers.SPSA.minimize "qiskit.algorithms.optimizers.SPSA.minimize")                                                     | Minimize the scalar function.                                                                             |
| [`optimize`](qiskit.algorithms.optimizers.SPSA.optimize#qiskit.algorithms.optimizers.SPSA.optimize "qiskit.algorithms.optimizers.SPSA.optimize")                                                     | Perform optimization.                                                                                     |
| [`print_options`](qiskit.algorithms.optimizers.SPSA.print_options#qiskit.algorithms.optimizers.SPSA.print_options "qiskit.algorithms.optimizers.SPSA.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.algorithms.optimizers.SPSA.set_max_evals_grouped#qiskit.algorithms.optimizers.SPSA.set_max_evals_grouped "qiskit.algorithms.optimizers.SPSA.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.algorithms.optimizers.SPSA.set_options#qiskit.algorithms.optimizers.SPSA.set_options "qiskit.algorithms.optimizers.SPSA.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.algorithms.optimizers.SPSA.wrap_function#qiskit.algorithms.optimizers.SPSA.wrap_function "qiskit.algorithms.optimizers.SPSA.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

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
