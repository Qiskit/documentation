---
title: deriv
description: API reference for qiskit.aqua.components.optimizers.AQGD.deriv
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.optimizers.AQGD.deriv
---

# deriv

<span id="qiskit.aqua.components.optimizers.AQGD.deriv" />

`AQGD.deriv(j, params, obj)`

Obtains the analytical quantum derivative of the objective function with respect to the jth parameter.

**Parameters**

*   **j** (*int*) – Index of the parameter to compute the derivative of.
*   **params** (*array*) – Current value of the parameters to evaluate the objective function at.
*   **obj** (*callable*) – Objective function.

**Returns**

The derivative of the objective function w\.r.t. j

**Return type**

float

