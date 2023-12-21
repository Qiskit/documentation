---
title: ls_optimize
description: API reference for qiskit.aqua.components.optimizers.GSLS.ls_optimize
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.optimizers.GSLS.ls_optimize
---

# ls\_optimize

<span id="qiskit.aqua.components.optimizers.GSLS.ls_optimize" />

`GSLS.ls_optimize(n, obj_fun, initial_point, var_lb, var_ub)`

Run the line search optimization.

**Parameters**

*   **n** (`int`) – Dimension of the problem.
*   **obj\_fun** (`callable`) – Objective function.
*   **initial\_point** (`ndarray`) – Initial point.
*   **var\_lb** (`ndarray`) – Vector of lower bounds on the decision variables. Vector elements can be -np.inf if the corresponding variable is unbounded from below.
*   **var\_ub** (`ndarray`) – Vector of upper bounds on the decision variables. Vector elements can be np.inf if the corresponding variable is unbounded from below.

**Return type**

`Tuple`\[`ndarray`, `float`, `int`, `float`]

**Returns**

Final iterate as a vector, corresponding objective function value, number of evaluations, and norm of the gradient estimate.

**Raises**

**ValueError** – If the number of dimensions mismatches the size of the initial point or the length of the lower or upper bound.

