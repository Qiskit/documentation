# qiskit.aqua.components.optimizers.ADAM.minimize

`ADAM.minimize(objective_function, initial_point, gradient_function)`

Run the minimization.

**Parameters**

*   **objective\_function** (`Callable`\[\[`ndarray`], `float`]) – A function handle to the objective function.
*   **initial\_point** (`ndarray`) – The initial iteration point.
*   **gradient\_function** (`Callable`\[\[`ndarray`], `float`]) – A function handle to the gradient of the objective function.

**Return type**

`Tuple`\[`ndarray`, `float`, `int`]

**Returns**

A tuple of (optimal parameters, optimal value, number of iterations).
