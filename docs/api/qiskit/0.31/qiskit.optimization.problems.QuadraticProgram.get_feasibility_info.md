# qiskit.optimization.problems.QuadraticProgram.get\_feasibility\_info

`QuadraticProgram.get_feasibility_info(x)`

Returns whether a solution is feasible or not along with the violations. :type x: `Union`\[`List`\[`float`], `ndarray`] :param x: a solution value, such as returned in an optimizer result.

**Returns**

Whether the solution provided is feasible or not. List\[Variable]: List of variables which are violated. List\[Constraint]: List of constraints which are violated.

**Return type**

feasible

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If the input x is not same len as total vars
