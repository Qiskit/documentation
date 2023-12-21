---
title: optimize
description: API reference for qiskit.aqua.components.optimizers.ADAM.optimize
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.optimizers.ADAM.optimize
---

# optimize

<span id="qiskit.aqua.components.optimizers.ADAM.optimize" />

`ADAM.optimize(num_vars, objective_function, gradient_function=None, variable_bounds=None, initial_point=None)`

Perform optimization.

**Parameters**

*   **num\_vars** (*int*) – number of parameters to be optimized.
*   **objective\_function** (*callable*) – handle to a function that computes the objective function.
*   **gradient\_function** (*callable*) – handle to a function that computes the gradient of the objective function, or None if not available.
*   **variable\_bounds** (*list\[(float, float)]*) – deprecated
*   **initial\_point** (*numpy.ndarray\[float]*) – initial point.

**Returns**

tuple has (point, value, nfev) where

> point: is a 1D numpy.ndarray\[float] containing the solution
>
> value: is a float with the objective function value
>
> nfev: number of objective function calls made if available or None

**Return type**

tuple(numpy.ndarray, float, int)

