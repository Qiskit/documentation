# ADMMOptimizer

<span id="undefined" />

`ADMMOptimizer(qubo_optimizer=None, continuous_optimizer=None, params=None)`

Bases: `qiskit.optimization.algorithms.optimization_algorithm.OptimizationAlgorithm`

An implementation of the ADMM-based heuristic.

This algorithm is introduced in \[1].

**References:**

**\[1] Gambella, C., & Simonetto, A. (2020). Multi-block ADMM Heuristics for Mixed-Binary**

Optimization on Classical and Quantum Computers. arXiv preprint arXiv:2001.02069.

**Parameters**

*   **qubo\_optimizer** (`Optional`\[`OptimizationAlgorithm`]) – An instance of OptimizationAlgorithm that can effectively solve QUBO problems. If not specified then [`MinimumEigenOptimizer`](qiskit.optimization.algorithms.MinimumEigenOptimizer#qiskit.optimization.algorithms.MinimumEigenOptimizer "qiskit.optimization.algorithms.MinimumEigenOptimizer") initialized with an instance of `NumPyMinimumEigensolver` will be used.
*   **continuous\_optimizer** (`Optional`\[`OptimizationAlgorithm`]) – An instance of OptimizationAlgorithm that can solve continuous problems. If not specified then [`SlsqpOptimizer`](qiskit.optimization.algorithms.SlsqpOptimizer#qiskit.optimization.algorithms.SlsqpOptimizer "qiskit.optimization.algorithms.SlsqpOptimizer") will be used.
*   **params** (`Optional`\[`ADMMParameters`]) – An instance of ADMMParameters.

## Methods

|                                                                                                                                                                                                                                       |                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`get_compatibility_msg`](qiskit.optimization.algorithms.ADMMOptimizer.get_compatibility_msg#qiskit.optimization.algorithms.ADMMOptimizer.get_compatibility_msg "qiskit.optimization.algorithms.ADMMOptimizer.get_compatibility_msg") | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`is_compatible`](qiskit.optimization.algorithms.ADMMOptimizer.is_compatible#qiskit.optimization.algorithms.ADMMOptimizer.is_compatible "qiskit.optimization.algorithms.ADMMOptimizer.is_compatible")                                 | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`solve`](qiskit.optimization.algorithms.ADMMOptimizer.solve#qiskit.optimization.algorithms.ADMMOptimizer.solve "qiskit.optimization.algorithms.ADMMOptimizer.solve")                                                                 | Tries to solves the given problem using ADMM algorithm.                                   |

## Attributes

<span id="undefined" />

### parameters

Returns current parameters of the optimizer.

**Return type**

`ADMMParameters`

**Returns**

The parameters.
