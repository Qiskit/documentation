# qiskit.optimization.algorithms.CplexOptimizer

<span id="undefined" />

`CplexOptimizer(disp=False)`

The CPLEX optimizer wrapped as an Qiskit [`OptimizationAlgorithm`](qiskit.optimization.algorithms.OptimizationAlgorithm#qiskit.optimization.algorithms.OptimizationAlgorithm "qiskit.optimization.algorithms.OptimizationAlgorithm").

This class provides a wrapper for `cplex.Cplex` ([https://pypi.org/project/cplex/](https://pypi.org/project/cplex/)) to be used within the optimization module.

## Examples

```python
>>> from qiskit.optimization.problems import QuadraticProgram
>>> from qiskit.optimization.algorithms import CplexOptimizer
>>> problem = QuadraticProgram()
>>> # specify problem here, if cplex is installed
>>> optimizer = CplexOptimizer() if CplexOptimizer.is_cplex_installed() else None
>>> if optimizer: result = optimizer.solve(problem)
```

Initializes the CplexOptimizer.

**Parameters**

**disp** (`bool`) – Whether to print CPLEX output or not.

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – CPLEX is not installed.

<span id="undefined" />

`__init__(disp=False)`

Initializes the CplexOptimizer.

**Parameters**

**disp** (`bool`) – Whether to print CPLEX output or not.

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – CPLEX is not installed.

## Methods

|                                                                                                                                                                                |                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.optimization.algorithms.CplexOptimizer.__init__ "qiskit.optimization.algorithms.CplexOptimizer.__init__")(\[disp])                                        | Initializes the CplexOptimizer.                                                           |
| [`get_compatibility_msg`](#qiskit.optimization.algorithms.CplexOptimizer.get_compatibility_msg "qiskit.optimization.algorithms.CplexOptimizer.get_compatibility_msg")(problem) | Checks whether a given problem can be solved with this optimizer.                         |
| [`is_compatible`](#qiskit.optimization.algorithms.CplexOptimizer.is_compatible "qiskit.optimization.algorithms.CplexOptimizer.is_compatible")(problem)                         | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`is_cplex_installed`](#qiskit.optimization.algorithms.CplexOptimizer.is_cplex_installed "qiskit.optimization.algorithms.CplexOptimizer.is_cplex_installed")()                 | Returns True if cplex is installed                                                        |
| [`solve`](#qiskit.optimization.algorithms.CplexOptimizer.solve "qiskit.optimization.algorithms.CplexOptimizer.solve")(problem)                                                 | Tries to solves the given problem using the optimizer.                                    |

## Attributes

|                                                                                                                    |                              |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| [`disp`](#qiskit.optimization.algorithms.CplexOptimizer.disp "qiskit.optimization.algorithms.CplexOptimizer.disp") | Returns the display setting. |

<span id="undefined" />

`property disp`

Returns the display setting.

**Return type**

`bool`

**Returns**

Whether to print CPLEX information or not.

<span id="undefined" />

`get_compatibility_msg(problem)`

Checks whether a given problem can be solved with this optimizer.

Returns `''` since CPLEX accepts all problems that can be modeled using the `QuadraticProgram`. CPLEX may throw an exception in case the problem is determined to be non-convex.

**Parameters**

**problem** (`QuadraticProgram`) – The optimization problem to check compatibility.

**Return type**

`str`

**Returns**

An empty string.

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

`static is_cplex_installed()`

Returns True if cplex is installed

<span id="undefined" />

`solve(problem)`

Tries to solves the given problem using the optimizer.

Runs the optimizer to try to solve the optimization problem. If problem is not convex, this optimizer may raise an exception due to incompatibility, depending on the settings.

**Parameters**

**problem** (`QuadraticProgram`) – The problem to be solved.

**Return type**

`OptimizationResult`

**Returns**

The result of the optimizer applied to the problem.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If the problem is incompatible with the optimizer.
