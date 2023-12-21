---
title: CplexOptimizer
description: API reference for qiskit.optimization.algorithms.CplexOptimizer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.algorithms.CplexOptimizer
---

# CplexOptimizer

<span id="qiskit.optimization.algorithms.CplexOptimizer" />

`CplexOptimizer(disp=False)`

The CPLEX optimizer wrapped as an Qiskit [`OptimizationAlgorithm`](qiskit.optimization.algorithms.OptimizationAlgorithm "qiskit.optimization.algorithms.OptimizationAlgorithm").

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

**disp** (`Optional`\[`bool`]) – Whether to print CPLEX output or not.

**Raises**

**NameError** – CPLEX is not installed.

## Attributes

|                                                                                                                                  |                              |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| [`CplexOptimizer.disp`](qiskit.optimization.algorithms.CplexOptimizer.disp "qiskit.optimization.algorithms.CplexOptimizer.disp") | Returns the display setting. |

## Methods

|                                                                                                                                                                                              |                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`CplexOptimizer.get_compatibility_msg`](qiskit.optimization.algorithms.CplexOptimizer.get_compatibility_msg "qiskit.optimization.algorithms.CplexOptimizer.get_compatibility_msg")(problem) | Checks whether a given problem can be solved with this optimizer.                         |
| [`CplexOptimizer.is_compatible`](qiskit.optimization.algorithms.CplexOptimizer.is_compatible "qiskit.optimization.algorithms.CplexOptimizer.is_compatible")(problem)                         | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`CplexOptimizer.is_cplex_installed`](qiskit.optimization.algorithms.CplexOptimizer.is_cplex_installed "qiskit.optimization.algorithms.CplexOptimizer.is_cplex_installed")()                 | Returns True if cplex is installed                                                        |
| [`CplexOptimizer.solve`](qiskit.optimization.algorithms.CplexOptimizer.solve "qiskit.optimization.algorithms.CplexOptimizer.solve")(problem)                                                 | Tries to solves the given problem using the optimizer.                                    |

