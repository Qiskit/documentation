---
title: DeutschJozsa
description: API reference for qiskit.aqua.algorithms.DeutschJozsa
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.DeutschJozsa
---

# DeutschJozsa

<span id="qiskit.aqua.algorithms.DeutschJozsa" />

`DeutschJozsa(oracle, quantum_instance=None)`

The Deutsch-Jozsa algorithm.

The Deutsch-Jozsa algorithm was one of the first known quantum algorithms that showed an exponential speedup compared to a deterministic (non-probabilistic) classical algorithm, given a black box oracle function. The algorithm determines whether the given function $f:\{0,1\}^n \rightarrow \{0,1\}$ is constant or balanced. A constant function maps all inputs to 0 or 1, and a balanced function maps half of its inputs to 0 and the other half to 1.

Note: the [`TruthTableOracle`](qiskit.aqua.components.oracles.TruthTableOracle "qiskit.aqua.components.oracles.TruthTableOracle") facilitates creating a constant or balanced function but any oracle can be used as long as the boolean function implemented by the oracle indeed satisfies the constraint of being either constant or balanced.

**Parameters**

*   **oracle** ([`Oracle`](qiskit.aqua.components.oracles.Oracle "qiskit.aqua.components.oracles.oracle.Oracle")) – The oracle component
*   **quantum\_instance** (`Union`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), [`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), `None`]) – Quantum Instance or Backend

## Attributes

|                                                                                                                                                |                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [`DeutschJozsa.backend`](qiskit.aqua.algorithms.DeutschJozsa.backend "qiskit.aqua.algorithms.DeutschJozsa.backend")                            | Returns backend.          |
| [`DeutschJozsa.quantum_instance`](qiskit.aqua.algorithms.DeutschJozsa.quantum_instance "qiskit.aqua.algorithms.DeutschJozsa.quantum_instance") | Returns quantum instance. |
| [`DeutschJozsa.random`](qiskit.aqua.algorithms.DeutschJozsa.random "qiskit.aqua.algorithms.DeutschJozsa.random")                               | Return a numpy random.    |

## Methods

|                                                                                                                                                                   |                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`DeutschJozsa.construct_circuit`](qiskit.aqua.algorithms.DeutschJozsa.construct_circuit "qiskit.aqua.algorithms.DeutschJozsa.construct_circuit")(\[measurement]) | Construct the quantum circuit                |
| [`DeutschJozsa.run`](qiskit.aqua.algorithms.DeutschJozsa.run "qiskit.aqua.algorithms.DeutschJozsa.run")(\[quantum\_instance])                                     | Execute the algorithm with selected backend. |
| [`DeutschJozsa.set_backend`](qiskit.aqua.algorithms.DeutschJozsa.set_backend "qiskit.aqua.algorithms.DeutschJozsa.set_backend")(backend, \*\*kwargs)              | Sets backend with configuration.             |

