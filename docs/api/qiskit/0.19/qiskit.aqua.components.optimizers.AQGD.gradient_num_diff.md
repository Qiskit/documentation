---
title: gradient_num_diff
description: API reference for qiskit.aqua.components.optimizers.AQGD.gradient_num_diff
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.optimizers.AQGD.gradient_num_diff
---

# gradient\_num\_diff

<span id="qiskit.aqua.components.optimizers.AQGD.gradient_num_diff" />

`static AQGD.gradient_num_diff(x_center, f, epsilon, max_evals_grouped=1)`

We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center.

**Parameters**

*   **x\_center** (*ndarray*) – point around which we compute the gradient
*   **f** (*func*) – the function of which the gradient is to be computed.
*   **epsilon** (*float*) – the epsilon used in the numeric differentiation.
*   **max\_evals\_grouped** (*int*) – max evals grouped

**Returns**

the gradient computed

**Return type**

grad

