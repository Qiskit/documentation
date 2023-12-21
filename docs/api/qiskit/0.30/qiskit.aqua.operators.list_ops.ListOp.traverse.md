# qiskit.aqua.operators.list\_ops.ListOp.traverse

`ListOp.traverse(convert_fn, coeff=None)`

Apply the convert\_fn to each node in the oplist.

**Parameters**

*   **convert\_fn** (`Callable`) – The function to apply to the internal OperatorBase.
*   **coeff** (`Union`\[`int`, `float`, `complex`, `ParameterExpression`, `None`]) – A coefficient to multiply by after applying convert\_fn. If it is None, self.coeff is used instead.

**Return type**

`OperatorBase`

**Returns**

The converted ListOp.
