---
title: QuantumAlgorithm
description: API reference for qiskit.aqua.algorithms.QuantumAlgorithm
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.QuantumAlgorithm
---

# QuantumAlgorithm

<span id="qiskit.aqua.algorithms.QuantumAlgorithm" />

`QuantumAlgorithm(quantum_instance)`

Base class for Quantum Algorithms.

This method should initialize the module and use an exception if a component of the module is available.

## Attributes

|                                                                                                                                                            |                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [`QuantumAlgorithm.backend`](qiskit.aqua.algorithms.QuantumAlgorithm.backend "qiskit.aqua.algorithms.QuantumAlgorithm.backend")                            | Returns backend.          |
| [`QuantumAlgorithm.quantum_instance`](qiskit.aqua.algorithms.QuantumAlgorithm.quantum_instance "qiskit.aqua.algorithms.QuantumAlgorithm.quantum_instance") | Returns quantum instance. |
| [`QuantumAlgorithm.random`](qiskit.aqua.algorithms.QuantumAlgorithm.random "qiskit.aqua.algorithms.QuantumAlgorithm.random")                               | Return a numpy random.    |

## Methods

|                                                                                                                                                                  |                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`QuantumAlgorithm.run`](qiskit.aqua.algorithms.QuantumAlgorithm.run "qiskit.aqua.algorithms.QuantumAlgorithm.run")(\[quantum\_instance])                        | Execute the algorithm with selected backend. |
| [`QuantumAlgorithm.set_backend`](qiskit.aqua.algorithms.QuantumAlgorithm.set_backend "qiskit.aqua.algorithms.QuantumAlgorithm.set_backend")(backend, \*\*kwargs) | Sets backend with configuration.             |

