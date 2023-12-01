# qiskit.optimization.algorithms.OptimizationAlgorithm

<span id="undefined" />

`OptimizationAlgorithm`

An abstract class for optimization algorithms in Qiskit’s optimization module.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                                              |                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.optimization.algorithms.OptimizationAlgorithm.__init__ "qiskit.optimization.algorithms.OptimizationAlgorithm.__init__")()                                               | Initialize self.                                                                          |
| [`get_compatibility_msg`](#qiskit.optimization.algorithms.OptimizationAlgorithm.get_compatibility_msg "qiskit.optimization.algorithms.OptimizationAlgorithm.get_compatibility_msg")(problem) | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`is_compatible`](#qiskit.optimization.algorithms.OptimizationAlgorithm.is_compatible "qiskit.optimization.algorithms.OptimizationAlgorithm.is_compatible")(problem)                         | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`solve`](#qiskit.optimization.algorithms.OptimizationAlgorithm.solve "qiskit.optimization.algorithms.OptimizationAlgorithm.solve")(problem)                                                 | Tries to solves the given problem using the optimizer.                                    |

<span id="undefined" />

`abstract get_compatibility_msg(problem)`

Checks whether a given problem can be solved with the optimizer implementing this method.

**Parameters**

**problem** (`QuadraticProgram`) – The optimization problem to check compatibility.

**Return type**

`str`

**Returns**

Returns the incompatibility message. If the message is empty no issues were found.

<span id="undefined" />

`is_compatible(problem)`

Checks whether a given problem can be solved with the optimizer implementing this method.

**Parameters**

**problem** (`QuadraticProgram`) – The optimization problem to check compatibility.

**Return type**

`bool`

**Returns**

Returns True if the problem is compatible, False otherwise.

<span id="undefined" />

`abstract solve(problem)`

Tries to solves the given problem using the optimizer.

Runs the optimizer to try to solve the optimization problem.

**Parameters**

**problem** (`QuadraticProgram`) – The problem to be solved.

**Return type**

`OptimizationResult`

**Returns**

The result of the optimizer applied to the problem.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If the problem is incompatible with the optimizer.
