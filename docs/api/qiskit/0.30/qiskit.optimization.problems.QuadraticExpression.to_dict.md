# qiskit.optimization.problems.QuadraticExpression.to\_dict

`QuadraticExpression.to_dict(symmetric=False, use_name=False)`

Returns the coefficients of the quadratic expression as dictionary, either using tuples of variable names or indices as keys.

**Parameters**

*   **symmetric** (`bool`) – Determines whether the output is in a symmetric form or not.
*   **use\_name** (`bool`) – Determines whether to use index or names to refer to variables.

**Return type**

`Dict`\[`Union`\[`Tuple`\[`int`, `int`], `Tuple`\[`str`, `str`]], `float`]

**Returns**

An dictionary with the coefficients corresponding to the quadratic expression.
