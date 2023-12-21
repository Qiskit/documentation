---
title: OptimizationAlgorithm
description: API reference for qiskit.optimization.algorithms.OptimizationAlgorithm
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.algorithms.OptimizationAlgorithm
---

# OptimizationAlgorithm

<span id="qiskit.optimization.algorithms.OptimizationAlgorithm" />

`OptimizationAlgorithm`

An abstract class for optimization algorithms in Qiskit’s optimization module.

## Methods

|                                                                                                                                                                                                                   |                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`OptimizationAlgorithm.get_compatibility_msg`](qiskit.optimization.algorithms.OptimizationAlgorithm.get_compatibility_msg "qiskit.optimization.algorithms.OptimizationAlgorithm.get_compatibility_msg")(problem) | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`OptimizationAlgorithm.is_compatible`](qiskit.optimization.algorithms.OptimizationAlgorithm.is_compatible "qiskit.optimization.algorithms.OptimizationAlgorithm.is_compatible")(problem)                         | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`OptimizationAlgorithm.solve`](qiskit.optimization.algorithms.OptimizationAlgorithm.solve "qiskit.optimization.algorithms.OptimizationAlgorithm.solve")(problem)                                                 | Tries to solves the given problem using the optimizer.                                    |

