---
title: channel_matrix_representation
description: API reference for qiskit.providers.aer.utils.NoiseTransformer.channel_matrix_representation
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.utils.NoiseTransformer.channel_matrix_representation
---

# channel\_matrix\_representation

<span id="qiskit.providers.aer.utils.NoiseTransformer.channel_matrix_representation" />

`NoiseTransformer.channel_matrix_representation(operators)`

We convert the operators to a matrix by applying the channel to the four basis elements of the 2x2 matrix space representing density operators; this is standard linear algebra

**Parameters**

**operators** (*list*) – The list of operators to transform into a Matrix

**Returns**

The matrx representation of the operators

**Return type**

sympy.Matrix

