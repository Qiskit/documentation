# qiskit.optimization.QuadraticProgram.continuous\_var\_list

`QuadraticProgram.continuous_var_list(keys, lowerbound=0, upperbound=1e+20, name=None, key_format='{}')`

Uses ‘var\_list’ to construct a list of continuous variables

**Parameters**

*   **lowerbound** (`Union`\[`float`, `int`]) – The lower bound of the variable(s).
*   **upperbound** (`Union`\[`float`, `int`]) – The upper bound of the variable(s).
*   **name** (`Optional`\[`str`]) – The name(s) of the variable(s).
*   **key\_format** (`str`) – The format used to name/index the variable(s).
*   **keys** (`Union`\[`int`, `Sequence`]) – If keys: int, it is interpreted as the number of variables to construct. Otherwise, the elements of the sequence are converted to strings via ‘str’ and substituted into key\_format.

**Return type**

`List`\[`Variable`]

**Returns**

A list of variable instances.

**Raises**

*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – if the variable name is already taken.
*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – if less than one variable instantiation is attempted.
*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – if key\_format has more than one substitution or a nested substitution.
