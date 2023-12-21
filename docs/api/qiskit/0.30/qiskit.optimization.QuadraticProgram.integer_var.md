# qiskit.optimization.QuadraticProgram.integer\_var

`QuadraticProgram.integer_var(lowerbound=0, upperbound=1e+20, name=None)`

Adds an integer variable to the quadratic program.

**Parameters**

*   **lowerbound** (`Union`\[`float`, `int`]) – The lowerbound of the variable.
*   **upperbound** (`Union`\[`float`, `int`]) – The upperbound of the variable.
*   **name** (`Optional`\[`str`]) – The name of the variable.

**Return type**

`Variable`

**Returns**

The added variable.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – if the variable name is already occupied.
