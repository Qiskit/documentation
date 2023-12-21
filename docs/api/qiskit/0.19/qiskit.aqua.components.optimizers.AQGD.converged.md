---
title: converged
description: API reference for qiskit.aqua.components.optimizers.AQGD.converged
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.optimizers.AQGD.converged
---

# converged

<span id="qiskit.aqua.components.optimizers.AQGD.converged" />

`AQGD.converged(objval, n=2)`

Determines if the objective function has converged by finding the difference between the current value and the previous n values.

**Parameters**

*   **objval** (*float*) – Current value of the objective function.
*   **n** (*int*) – Number of previous steps which must be within the convergence criteria in order to be considered converged. Using a larger number will prevent the optimizer from stopping early.

**Returns**

Whether or not the optimization has converged.

**Return type**

bool

