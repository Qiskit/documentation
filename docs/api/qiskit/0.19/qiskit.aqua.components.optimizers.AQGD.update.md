---
title: update
description: API reference for qiskit.aqua.components.optimizers.AQGD.update
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.optimizers.AQGD.update
---

# update

<span id="qiskit.aqua.components.optimizers.AQGD.update" />

`AQGD.update(j, params, deriv, mprev)`

Updates the jth parameter based on the derivative and previous momentum

**Parameters**

*   **j** (*int*) – Index of the parameter to compute the derivative of.
*   **params** (*array*) – Current value of the parameters to evaluate the objective function at.
*   **deriv** (*float*) – Value of the derivative w\.r.t. the jth parameter
*   **mprev** (*array*) – Array containing all of the parameter momentums

**Returns**

params, new momentums

**Return type**

tuple

