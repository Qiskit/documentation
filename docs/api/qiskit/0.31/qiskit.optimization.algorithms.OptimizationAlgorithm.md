# OptimizationAlgorithm

<span id="undefined" />

`OptimizationAlgorithm`

Bases: `abc.ABC`

An abstract class for optimization algorithms in Qiskit’s optimization module.

## Methods

|                                                                                                                                                                                                                                                               |                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`get_compatibility_msg`](qiskit.optimization.algorithms.OptimizationAlgorithm.get_compatibility_msg#qiskit.optimization.algorithms.OptimizationAlgorithm.get_compatibility_msg "qiskit.optimization.algorithms.OptimizationAlgorithm.get_compatibility_msg") | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`is_compatible`](qiskit.optimization.algorithms.OptimizationAlgorithm.is_compatible#qiskit.optimization.algorithms.OptimizationAlgorithm.is_compatible "qiskit.optimization.algorithms.OptimizationAlgorithm.is_compatible")                                 | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`solve`](qiskit.optimization.algorithms.OptimizationAlgorithm.solve#qiskit.optimization.algorithms.OptimizationAlgorithm.solve "qiskit.optimization.algorithms.OptimizationAlgorithm.solve")                                                                 | Tries to solves the given problem using the optimizer.                                    |
