---
title: GroverOptimizer
description: API reference for qiskit.optimization.algorithms.GroverOptimizer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.algorithms.GroverOptimizer
---

# GroverOptimizer

<span id="qiskit.optimization.algorithms.GroverOptimizer" />

`GroverOptimizer(num_value_qubits, num_iterations=3, quantum_instance=None)`

Uses Grover Adaptive Search (GAS) to find the minimum of a QUBO function.

**Parameters**

*   **num\_value\_qubits** (`int`) – The number of value qubits.
*   **num\_iterations** (`int`) – The number of iterations the algorithm will search with no improvement.
*   **quantum\_instance** (`Union`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), [`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), `None`]) – Instance of selected backend, defaults to Aer’s statevector simulator.

## Attributes

|                                                                                                                                                                         |                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [`GroverOptimizer.quantum_instance`](qiskit.optimization.algorithms.GroverOptimizer.quantum_instance "qiskit.optimization.algorithms.GroverOptimizer.quantum_instance") | The quantum instance to run the circuits. |

## Methods

|                                                                                                                                                                                                 |                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`GroverOptimizer.get_compatibility_msg`](qiskit.optimization.algorithms.GroverOptimizer.get_compatibility_msg "qiskit.optimization.algorithms.GroverOptimizer.get_compatibility_msg")(problem) | Checks whether a given problem can be solved with this optimizer.                         |
| [`GroverOptimizer.is_compatible`](qiskit.optimization.algorithms.GroverOptimizer.is_compatible "qiskit.optimization.algorithms.GroverOptimizer.is_compatible")(problem)                         | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`GroverOptimizer.solve`](qiskit.optimization.algorithms.GroverOptimizer.solve "qiskit.optimization.algorithms.GroverOptimizer.solve")(problem)                                                 | Tries to solves the given problem using the grover optimizer.                             |

