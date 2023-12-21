# qiskit.optimization.problems.QuadraticProgram.get\_linear\_constraint

`QuadraticProgram.get_linear_constraint(i)`

Returns a linear constraint for a given name or index.

**Parameters**

**i** (`Union`\[`int`, `str`]) – the index or name of the constraint.

**Return type**

`LinearConstraint`

**Returns**

The corresponding constraint.

**Raises**

*   **IndexError** – if the index is out of the list size
*   **KeyError** – if the name does not exist
