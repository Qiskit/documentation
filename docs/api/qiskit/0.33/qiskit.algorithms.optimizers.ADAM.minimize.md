# qiskit.algorithms.optimizers.ADAM.minimize

`ADAM.minimize(fun, x0, jac=None, bounds=None, objective_function=None, initial_point=None, gradient_function=None)`

Minimize the scalar function.

**Parameters**

*   **fun** (`Callable`\[\[`Union`\[`float`, `ndarray`]], `float`]) – The scalar function to minimize.
*   **x0** (`Union`\[`float`, `ndarray`]) – The initial point for the minimization.
*   **jac** (`Optional`\[`Callable`\[\[`Union`\[`float`, `ndarray`]], `Union`\[`float`, `ndarray`]]]) – The gradient of the scalar function `fun`.
*   **bounds** (`Optional`\[`List`\[`Tuple`\[`float`, `float`]]]) – Bounds for the variables of `fun`. This argument might be ignored if the optimizer does not support bounds.
*   **objective\_function** (`Optional`\[`Callable`\[\[`ndarray`], `float`]]) – DEPRECATED. A function handle to the objective function.
*   **initial\_point** (`Optional`\[`ndarray`]) – DEPRECATED. The initial iteration point.
*   **gradient\_function** (`Optional`\[`Callable`\[\[`ndarray`], `float`]]) – DEPRECATED. A function handle to the gradient of the objective function.

**Return type**

`OptimizerResult`

**Returns**

The result of the optimization, containing e.g. the result as attribute `x`.
