# CplexOptimizer

<span id="undefined" />

`CplexOptimizer(disp=False)`

Bases: `qiskit.optimization.algorithms.optimization_algorithm.OptimizationAlgorithm`

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

## Methods

|                                                                                                                                                                                                                                          |                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`get_compatibility_msg`](qiskit.optimization.algorithms.CplexOptimizer.get_compatibility_msg#qiskit.optimization.algorithms.CplexOptimizer.get_compatibility_msg "qiskit.optimization.algorithms.CplexOptimizer.get_compatibility_msg") | Checks whether a given problem can be solved with this optimizer.                         |
| [`is_compatible`](qiskit.optimization.algorithms.CplexOptimizer.is_compatible#qiskit.optimization.algorithms.CplexOptimizer.is_compatible "qiskit.optimization.algorithms.CplexOptimizer.is_compatible")                                 | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`is_cplex_installed`](qiskit.optimization.algorithms.CplexOptimizer.is_cplex_installed#qiskit.optimization.algorithms.CplexOptimizer.is_cplex_installed "qiskit.optimization.algorithms.CplexOptimizer.is_cplex_installed")             | Returns True if cplex is installed                                                        |
| [`solve`](qiskit.optimization.algorithms.CplexOptimizer.solve#qiskit.optimization.algorithms.CplexOptimizer.solve "qiskit.optimization.algorithms.CplexOptimizer.solve")                                                                 | Tries to solves the given problem using the optimizer.                                    |

## Attributes

<span id="undefined" />

### disp

Returns the display setting.

**Return type**

`bool`

**Returns**

Whether to print CPLEX information or not.
