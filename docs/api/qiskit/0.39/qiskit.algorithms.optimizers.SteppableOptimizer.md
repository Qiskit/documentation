---
title: SteppableOptimizer
description: API reference for qiskit.algorithms.optimizers.SteppableOptimizer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.SteppableOptimizer
---

# SteppableOptimizer

<span id="qiskit.algorithms.optimizers.SteppableOptimizer" />

`SteppableOptimizer(maxiter=100)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/algorithms/optimizers/steppable_optimizer.py "view source code")

Bases: [`qiskit.algorithms.optimizers.optimizer.Optimizer`](qiskit.algorithms.optimizers.Optimizer "qiskit.algorithms.optimizers.optimizer.Optimizer")

Base class for a steppable optimizer.

This family of optimizers uses the [ask and tell interface](https://optuna.readthedocs.io/en/stable/tutorial/20_recipes/009_ask_and_tell.html). When using this interface the user has to call [`ask()`](qiskit.algorithms.optimizers.SteppableOptimizer#ask "qiskit.algorithms.optimizers.SteppableOptimizer.ask") to get information about how to evaluate the fucntion (we are asking the optimizer about how to do the evaluation). This information is typically the next points at which the function is evaluated, but depending on the optimizer it can also determine whether to evaluate the function or its gradient. Once the function has been evaluated, the user calls the method `tell()` to tell the optimizer what the result of the function evaluation(s) is. The optimizer then updates its state accordingly and the user can decide whether to stop the optimization process or to repeat a step.

This interface is more customizable, and allows the user to have full control over the evaluation of the function.

**Examples**

An example where the evaluation of the function has a chance of failing. The user, with specific knowledge about his function can catch this errors and handle them before passing the result to the optimizer.

```python
import random
import numpy as np
from qiskit.algorithms.optimizers import GradientDescent

def objective(x):
    if random.choice([True, False]):
        return None
    else:
        return (np.linalg.norm(x) - 1) ** 2

def grad(x):
    if random.choice([True, False]):
        return None
    else:
        return 2 * (np.linalg.norm(x) - 1) * x / np.linalg.norm(x)


initial_point = np.random.normal(0, 1, size=(100,))

optimizer = GradientDescent(maxiter=20)
optimizer.start(x0=initial_point, fun=objective, jac=grad)

while optimizer.continue_condition():
    ask_data = optimizer.ask()
    evaluated_gradient = None

    while evaluated_gradient is None:
        evaluated_gradient = grad(ask_data.x_center)
        optimizer.state.njev += 1

    optmizer.state.nit += 1

     cf  = TellData(eval_jac=evaluated_gradient)
    optimizer.tell(ask_data=ask_data, tell_data=tell_data)

result = optimizer.create_result()
```

Users that aren’t dealing with complicated functions and who are more familiar with step by step optimization algorithms can use the [`step()`](qiskit.algorithms.optimizers.SteppableOptimizer#step "qiskit.algorithms.optimizers.SteppableOptimizer.step") method which wraps the [`ask()`](qiskit.algorithms.optimizers.SteppableOptimizer#ask "qiskit.algorithms.optimizers.SteppableOptimizer.ask") and [`tell()`](qiskit.algorithms.optimizers.SteppableOptimizer#tell "qiskit.algorithms.optimizers.SteppableOptimizer.tell") methods. In the same spirit the method [`minimize()`](qiskit.algorithms.optimizers.SteppableOptimizer#minimize "qiskit.algorithms.optimizers.SteppableOptimizer.minimize") will optimize the function and return the result.

To see other libraries that use this interface one can visit: [https://optuna.readthedocs.io/en/stable/tutorial/20\_recipes/009\_ask\_and\_tell.html](https://optuna.readthedocs.io/en/stable/tutorial/20_recipes/009_ask_and_tell.html)

**Parameters**

**maxiter** (`int`) – Number of steps in the optimization process before ending the loop.

## Methods

### ask

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.ask" />

`SteppableOptimizer.ask()`

Ask the optimizer for a set of points to evaluate.

This method asks the optimizer which are the next points to evaluate. These points can, e.g., correspond to function values and/or its derivative. It may also correspond to variables that let the user infer which points to evaluate. It is the first method inside of a [`step()`](qiskit.algorithms.optimizers.SteppableOptimizer#step "qiskit.algorithms.optimizers.SteppableOptimizer.step") in the optimization process.

**Return type**

[`AskData`](qiskit.algorithms.optimizers.AskData "qiskit.algorithms.optimizers.steppable_optimizer.AskData")

**Returns**

An object containing the data needed to make the funciton evaluation to advance the optimization process.

### continue\_condition

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.continue_condition" />

`SteppableOptimizer.continue_condition()`

Condition that indicates the optimization process should continue.

**Return type**

`bool`

**Returns**

`True` if the optimization process should continue, `False` otherwise.

### create\_result

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.create_result" />

`abstract SteppableOptimizer.create_result()`

Returns the result of the optimization.

All the information needed to create such a result should be stored in the optimizer state and will typically contain the best point found, the function value and gradient at that point, the number of function and gradient evaluation and the number of iterations in the optimization.

**Return type**

[`OptimizerResult`](qiskit.algorithms.optimizers.OptimizerResult "qiskit.algorithms.optimizers.optimizer.OptimizerResult")

**Returns**

The result of the optimization process.

### evaluate

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.evaluate" />

`abstract SteppableOptimizer.evaluate(ask_data)`

Evaluates the function according to the instructions contained in `ask_data`.

If the user decides to use [`step()`](qiskit.algorithms.optimizers.SteppableOptimizer#step "qiskit.algorithms.optimizers.SteppableOptimizer.step") instead of [`ask()`](qiskit.algorithms.optimizers.SteppableOptimizer#ask "qiskit.algorithms.optimizers.SteppableOptimizer.ask") and [`tell()`](qiskit.algorithms.optimizers.SteppableOptimizer#tell "qiskit.algorithms.optimizers.SteppableOptimizer.tell") this function will contain the logic on how to evaluate the function.

**Parameters**

**ask\_data** ([`AskData`](qiskit.algorithms.optimizers.AskData "qiskit.algorithms.optimizers.steppable_optimizer.AskData")) – Contains the information on how to do the evaluation.

**Return type**

[`TellData`](qiskit.algorithms.optimizers.TellData "qiskit.algorithms.optimizers.steppable_optimizer.TellData")

**Returns**

Data of all relevant information about the function evaluation.

### get\_support\_level

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.get_support_level" />

`abstract SteppableOptimizer.get_support_level()`

Return support level dictionary

### gradient\_num\_diff

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.gradient_num_diff" />

`static SteppableOptimizer.gradient_num_diff(x_center, f, epsilon, max_evals_grouped=None)`

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

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.minimize" />

`SteppableOptimizer.minimize(fun, x0, jac=None, bounds=None)`

Minimizes the function.

For well behaved functions the user can call this method to minimize a function. If the user wants more control on how to evaluate the function a custom loop can be created using [`ask()`](qiskit.algorithms.optimizers.SteppableOptimizer#ask "qiskit.algorithms.optimizers.SteppableOptimizer.ask") and [`tell()`](qiskit.algorithms.optimizers.SteppableOptimizer#tell "qiskit.algorithms.optimizers.SteppableOptimizer.tell") and evaluating the function manually.

**Parameters**

*   **fun** (`Callable`\[\[`Union`\[`float`, `ndarray`]], `float`]) – Function to minimize.
*   **x0** (`Union`\[`float`, `ndarray`]) – Initial point.
*   **jac** (`Optional`\[`Callable`\[\[`Union`\[`float`, `ndarray`]], `Union`\[`float`, `ndarray`]]]) – Function to compute the gradient.
*   **bounds** (`Optional`\[`List`\[`Tuple`\[`float`, `float`]]]) – Bounds of the search space.

**Return type**

[`OptimizerResult`](qiskit.algorithms.optimizers.OptimizerResult "qiskit.algorithms.optimizers.optimizer.OptimizerResult")

**Returns**

Object containing the result of the optimization.

### print\_options

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.print_options" />

`SteppableOptimizer.print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.set_max_evals_grouped" />

`SteppableOptimizer.set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.set_options" />

`SteppableOptimizer.set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### start

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.start" />

`abstract SteppableOptimizer.start(fun, x0, jac=None, bounds=None)`

Populates the state of the optimizer with the data provided and sets all the counters to 0.

**Parameters**

*   **fun** (`Callable`\[\[`Union`\[`float`, `ndarray`]], `float`]) – Function to minimize.
*   **x0** (`Union`\[`float`, `ndarray`]) – Initial point.
*   **jac** (`Optional`\[`Callable`\[\[`Union`\[`float`, `ndarray`]], `Union`\[`float`, `ndarray`]]]) – Function to compute the gradient.
*   **bounds** (`Optional`\[`List`\[`Tuple`\[`float`, `float`]]]) – Bounds of the search space.

**Return type**

`None`

### step

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.step" />

`SteppableOptimizer.step()`

Performs one step in the optimization process.

This method composes [`ask()`](qiskit.algorithms.optimizers.SteppableOptimizer#ask "qiskit.algorithms.optimizers.SteppableOptimizer.ask"), [`evaluate()`](qiskit.algorithms.optimizers.SteppableOptimizer#evaluate "qiskit.algorithms.optimizers.SteppableOptimizer.evaluate"), and [`tell()`](qiskit.algorithms.optimizers.SteppableOptimizer#tell "qiskit.algorithms.optimizers.SteppableOptimizer.tell") to make a “step” in the optimization process.

**Return type**

`None`

### tell

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.tell" />

`SteppableOptimizer.tell(ask_data, tell_data)`

Updates the optimization state using the results of the function evaluation.

A canonical optimization example using [`ask()`](qiskit.algorithms.optimizers.SteppableOptimizer#ask "qiskit.algorithms.optimizers.SteppableOptimizer.ask") and [`tell()`](#qiskit.algorithms.optimizers.SteppableOptimizer.tell "qiskit.algorithms.optimizers.SteppableOptimizer.tell") can be seen in [`step()`](qiskit.algorithms.optimizers.SteppableOptimizer#step "qiskit.algorithms.optimizers.SteppableOptimizer.step").

**Parameters**

*   **ask\_data** ([`AskData`](qiskit.algorithms.optimizers.AskData "qiskit.algorithms.optimizers.steppable_optimizer.AskData")) – Contains the information on how the evaluation was done.
*   **tell\_data** ([`TellData`](qiskit.algorithms.optimizers.TellData "qiskit.algorithms.optimizers.steppable_optimizer.TellData")) – Contains all relevant information about the evaluation of the objective function.

**Return type**

`None`

### wrap\_function

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.wrap_function" />

`static SteppableOptimizer.wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

## Attributes

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.bounds_support_level" />

### bounds\_support\_level

Returns bounds support level

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.gradient_support_level" />

### gradient\_support\_level

Returns gradient support level

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.initial_point_support_level" />

### initial\_point\_support\_level

Returns initial point support level

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.is_bounds_ignored" />

### is\_bounds\_ignored

Returns is bounds ignored

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.is_bounds_required" />

### is\_bounds\_required

Returns is bounds required

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.is_bounds_supported" />

### is\_bounds\_supported

Returns is bounds supported

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.is_gradient_ignored" />

### is\_gradient\_ignored

Returns is gradient ignored

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.is_gradient_required" />

### is\_gradient\_required

Returns is gradient required

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.is_gradient_supported" />

### is\_gradient\_supported

Returns is gradient supported

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.is_initial_point_ignored" />

### is\_initial\_point\_ignored

Returns is initial point ignored

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.is_initial_point_required" />

### is\_initial\_point\_required

Returns is initial point required

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.is_initial_point_supported" />

### is\_initial\_point\_supported

Returns is initial point supported

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.setting" />

### setting

Return setting

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.settings" />

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

<span id="qiskit.algorithms.optimizers.SteppableOptimizer.state" />

### state

Return the current state of the optimizer.

**Return type**

[`OptimizerState`](qiskit.algorithms.optimizers.OptimizerState "qiskit.algorithms.optimizers.steppable_optimizer.OptimizerState")

