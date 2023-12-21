# qiskit.aqua.components.optimizers.ADAM.optimize

`ADAM.optimize(num_vars, objective_function, gradient_function=None, variable_bounds=None, initial_point=None)`

Perform optimization.

**Parameters**

*   **num\_vars** (`int`) – Number of parameters to be optimized.
*   **objective\_function** (`Callable`\[\[`ndarray`], `float`]) – Handle to a function that computes the objective function.
*   **gradient\_function** (`Optional`\[`Callable`\[\[`ndarray`], `float`]]) – Handle to a function that computes the gradient of the objective function.
*   **variable\_bounds** (`Optional`\[`List`\[`Tuple`\[`float`, `float`]]]) – deprecated
*   **initial\_point** (`Optional`\[`ndarray`]) – The initial point for the optimization.

**Return type**

`Tuple`\[`ndarray`, `float`, `int`]

**Returns**

A tuple (point, value, nfev) where

> point: is a 1D numpy.ndarray\[float] containing the solution
>
> value: is a float with the objective function value
>
> nfev: is the number of objective function calls
