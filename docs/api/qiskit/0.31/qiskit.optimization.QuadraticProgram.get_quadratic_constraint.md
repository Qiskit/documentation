# qiskit.optimization.QuadraticProgram.get\_quadratic\_constraint

`QuadraticProgram.get_quadratic_constraint(i)`

Returns a quadratic constraint for a given name or index.

**Parameters**

**i** (`Union`\[`int`, `str`]) – the index or name of the constraint.

**Return type**

`QuadraticConstraint`

**Returns**

The corresponding constraint.

**Raises**

*   **IndexError** – if the index is out of the list size
*   **KeyError** – if the name does not exist
