---
title: pdf_to_probabilities
description: API reference for qiskit.aqua.components.uncertainty_models.LogNormalDistribution.pdf_to_probabilities
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.uncertainty_models.LogNormalDistribution.pdf_to_probabilities
---

# pdf\_to\_probabilities

<span id="qiskit.aqua.components.uncertainty_models.LogNormalDistribution.pdf_to_probabilities" />

`static LogNormalDistribution.pdf_to_probabilities(pdf, low, high, num_values)`

Takes a probability density function (pdf), and returns a truncated and discretized array of probabilities corresponding to it

**Parameters**

*   **pdf** (*function*) – probability density function
*   **low** (*float*) – lower bound of equidistant grid
*   **high** (*float*) – upper bound of equidistant grid
*   **num\_values** (*int*) – number of grid points

**Returns**

array of probabilities

**Return type**

list

