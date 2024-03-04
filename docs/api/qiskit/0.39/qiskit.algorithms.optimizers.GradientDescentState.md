---
title: GradientDescentState
description: API reference for qiskit.algorithms.optimizers.GradientDescentState
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.GradientDescentState
---

# GradientDescentState

<span id="qiskit.algorithms.optimizers.GradientDescentState" />

`GradientDescentState(x, fun, jac, nfev, njev, nit, stepsize, learning_rate)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/algorithms/optimizers/gradient_descent.py "view source code")

Bases: [`qiskit.algorithms.optimizers.steppable_optimizer.OptimizerState`](qiskit.algorithms.optimizers.OptimizerState "qiskit.algorithms.optimizers.steppable_optimizer.OptimizerState")

State of [`GradientDescent`](qiskit.algorithms.optimizers.GradientDescent "qiskit.algorithms.optimizers.GradientDescent").

Dataclass with all the information of an optimizer plus the learning\_rate and the stepsize.

## Attributes

<span id="qiskit.algorithms.optimizers.GradientDescentState.stepsize" />

### stepsize

`Optional[float]`

Norm of the gradient on the last step.

<span id="qiskit.algorithms.optimizers.GradientDescentState.learning_rate" />

### learning\_rate

`qiskit.algorithms.optimizers.optimizer_utils.learning_rate.LearningRate`

Learning rate at the current step of the optimization process.

It behaves like a generator, (use `next(learning_rate)` to get the learning rate for the next step) but it can also return the current learning rate with `learning_rate.current`.

<span id="qiskit.algorithms.optimizers.GradientDescentState.x" />

### x

`Union[float, numpy.ndarray]`

Current optimization parameters.

<span id="qiskit.algorithms.optimizers.GradientDescentState.fun" />

### fun

`Optional[Callable[[Union[float, numpy.ndarray]], float]]`

Function being optimized.

<span id="qiskit.algorithms.optimizers.GradientDescentState.jac" />

### jac

`Optional[Callable[[Union[float, numpy.ndarray]], Union[float, numpy.ndarray]]]`

Jacobian of the function being optimized.

<span id="qiskit.algorithms.optimizers.GradientDescentState.nfev" />

### nfev

`Optional[int]`

Number of function evaluations so far in the optimization.

<span id="qiskit.algorithms.optimizers.GradientDescentState.njev" />

### njev

`Optional[int]`

Number of jacobian evaluations so far in the opimization.

<span id="qiskit.algorithms.optimizers.GradientDescentState.nit" />

### nit

`Optional[int]`

Number of optmization steps performed so far in the optimization.

