# qiskit.optimization.QuadraticProgram.maximize

`QuadraticProgram.maximize(constant=0.0, linear=None, quadratic=None)`

Sets a quadratic objective to be maximized.

**Parameters**

*   **constant** (`float`) – the constant offset of the objective.
*   **linear** (`Union`\[`ndarray`, `spmatrix`, `List`\[`float`], `Dict`\[`Union`\[`int`, `str`], `float`], `None`]) – the coefficients of the linear part of the objective.
*   **quadratic** (`Union`\[`ndarray`, `spmatrix`, `List`\[`List`\[`float`]], `Dict`\[`Tuple`\[`Union`\[`int`, `str`], `Union`\[`int`, `str`]], `float`], `None`]) – the coefficients of the quadratic part of the objective.

**Return type**

`None`

**Returns**

The created quadratic objective.
