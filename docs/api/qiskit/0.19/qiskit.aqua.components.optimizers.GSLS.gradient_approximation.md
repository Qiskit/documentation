---
title: gradient_approximation
description: API reference for qiskit.aqua.components.optimizers.GSLS.gradient_approximation
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.optimizers.GSLS.gradient_approximation
---

# gradient\_approximation

<span id="qiskit.aqua.components.optimizers.GSLS.gradient_approximation" />

`GSLS.gradient_approximation(n, x, x_value, directions, sample_set_x, sample_set_y)`

Construct gradient approximation from given sample.

**Parameters**

*   **n** (`int`) – Dimension of the problem.
*   **x** (`ndarray`) – Point around which the sample set was constructed.
*   **x\_value** (`float`) – Objective function value at x.
*   **directions** (`ndarray`) – Directions of the sample points wrt the central point x, as a 2D array.
*   **sample\_set\_x** (`ndarray`) – x-coordinates of the sample set, one point per row, as a 2D array.
*   **sample\_set\_y** (`ndarray`) – Objective function values of the points in sample\_set\_x, as a 1D array.

**Return type**

`ndarray`

**Returns**

Gradient approximation at x, as a 1D array.

