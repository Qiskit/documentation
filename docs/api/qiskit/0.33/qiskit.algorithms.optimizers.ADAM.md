# ADAM



`ADAM(maxiter=10000, tol=1e-06, lr=0.001, beta_1=0.9, beta_2=0.99, noise_factor=1e-08, eps=1e-10, amsgrad=False, snapshot_dir=None)`

Bases: `qiskit.algorithms.optimizers.optimizer.Optimizer`

Adam and AMSGRAD optimizers.

Adam \[1] is a gradient-based optimization algorithm that is relies on adaptive estimates of lower-order moments. The algorithm requires little memory and is invariant to diagonal rescaling of the gradients. Furthermore, it is able to cope with non-stationary objective functions and noisy and/or sparse gradients.

AMSGRAD \[2] (a variant of Adam) uses a ‘long-term memory’ of past gradients and, thereby, improves convergence properties.

## References

**\[1]: Kingma, Diederik & Ba, Jimmy (2014), Adam: A Method for Stochastic Optimization.**

[arXiv:1412.6980](https://arxiv.org/abs/1412.6980)

**\[2]: Sashank J. Reddi and Satyen Kale and Sanjiv Kumar (2018),**

On the Convergence of Adam and Beyond. [arXiv:1904.09237](https://arxiv.org/abs/1904.09237)

<Admonition title="Note" type="note">
  This component has some function that is normally random. If you want to reproduce behavior then you should set the random number generator seed in the algorithm\_globals (`qiskit.utils.algorithm_globals.random_seed = seed`).
</Admonition>

**Parameters**

*   **maxiter** (`int`) – Maximum number of iterations
*   **tol** (`float`) – Tolerance for termination
*   **lr** (`float`) – Value >= 0, Learning rate.
*   **beta\_1** (`float`) – Value in range 0 to 1, Generally close to 1.
*   **beta\_2** (`float`) – Value in range 0 to 1, Generally close to 1.
*   **noise\_factor** (`float`) – Value >= 0, Noise factor
*   **eps** (`float`) – Value >=0, Epsilon to be used for finite differences if no analytic gradient method is given.
*   **amsgrad** (`bool`) – True to use AMSGRAD, False if not
*   **snapshot\_dir** (`Optional`\[`str`]) – If not None save the optimizer’s parameter after every step to the given directory

## Methods

|                                                                                                                                                                                                      |                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_support_level`](qiskit.algorithms.optimizers.ADAM.get_support_level#qiskit.algorithms.optimizers.ADAM.get_support_level "qiskit.algorithms.optimizers.ADAM.get_support_level")                 | Return support level dictionary                                                                           |
| [`gradient_num_diff`](qiskit.algorithms.optimizers.ADAM.gradient_num_diff#qiskit.algorithms.optimizers.ADAM.gradient_num_diff "qiskit.algorithms.optimizers.ADAM.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`load_params`](qiskit.algorithms.optimizers.ADAM.load_params#qiskit.algorithms.optimizers.ADAM.load_params "qiskit.algorithms.optimizers.ADAM.load_params")                                         | Load iteration parameters for a file called `adam_params.csv`.                                            |
| [`minimize`](qiskit.algorithms.optimizers.ADAM.minimize#qiskit.algorithms.optimizers.ADAM.minimize "qiskit.algorithms.optimizers.ADAM.minimize")                                                     | Minimize the scalar function.                                                                             |
| [`optimize`](qiskit.algorithms.optimizers.ADAM.optimize#qiskit.algorithms.optimizers.ADAM.optimize "qiskit.algorithms.optimizers.ADAM.optimize")                                                     | Perform optimization.                                                                                     |
| [`print_options`](qiskit.algorithms.optimizers.ADAM.print_options#qiskit.algorithms.optimizers.ADAM.print_options "qiskit.algorithms.optimizers.ADAM.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`save_params`](qiskit.algorithms.optimizers.ADAM.save_params#qiskit.algorithms.optimizers.ADAM.save_params "qiskit.algorithms.optimizers.ADAM.save_params")                                         | Save the current iteration parameters to a file called `adam_params.csv`.                                 |
| [`set_max_evals_grouped`](qiskit.algorithms.optimizers.ADAM.set_max_evals_grouped#qiskit.algorithms.optimizers.ADAM.set_max_evals_grouped "qiskit.algorithms.optimizers.ADAM.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.algorithms.optimizers.ADAM.set_options#qiskit.algorithms.optimizers.ADAM.set_options "qiskit.algorithms.optimizers.ADAM.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.algorithms.optimizers.ADAM.wrap_function#qiskit.algorithms.optimizers.ADAM.wrap_function "qiskit.algorithms.optimizers.ADAM.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

## Attributes



### bounds\_support\_level

Returns bounds support level



### gradient\_support\_level

Returns gradient support level



### initial\_point\_support\_level

Returns initial point support level



### is\_bounds\_ignored

Returns is bounds ignored



### is\_bounds\_required

Returns is bounds required



### is\_bounds\_supported

Returns is bounds supported



### is\_gradient\_ignored

Returns is gradient ignored



### is\_gradient\_required

Returns is gradient required



### is\_gradient\_supported

Returns is gradient supported



### is\_initial\_point\_ignored

Returns is initial point ignored



### is\_initial\_point\_required

Returns is initial point required



### is\_initial\_point\_supported

Returns is initial point supported



### setting

Return setting



### settings

**Return type**

`Dict`\[`str`, `Any`]
