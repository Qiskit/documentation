---
title: to_dict
description: API reference for qiskit.optimization.problems.LinearExpression.to_dict
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.problems.LinearExpression.to_dict
---

# to\_dict

<span id="qiskit.optimization.problems.LinearExpression.to_dict" />

`LinearExpression.to_dict(use_name=False)`

Returns the coefficients of the linear expression as dictionary, either using variable names or indices as keys.

**Parameters**

**use\_name** (`bool`) – Determines whether to use index or names to refer to variables.

**Return type**

`Dict`\[`Union`\[`int`, `str`], `float`]

**Returns**

An dictionary with the coefficients corresponding to the linear expression.

