---
title: Simon
description: API reference for qiskit.aqua.algorithms.Simon
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.Simon
---

# Simon

<span id="qiskit.aqua.algorithms.Simon" />

`Simon(oracle, quantum_instance=None)`

The Simon algorithm.

The Simon algorithm finds a hidden integer $s \in \{0,1\}^n$ from an oracle $f_s$ that satisfies $f_s(x) = f_s(y)$ if and only if $y=x \oplus s$ for all $x \in \{0,1\}^n$. Thus, if $s = 0\ldots 0$, i.e., the all-zero bitstring, then $f_s$ is a 1-to-1 (or, permutation) function. Otherwise, if $s \neq 0\ldots 0$, then $f_s$ is a 2-to-1 function.

Note: the [`TruthTableOracle`](qiskit.aqua.components.oracles.TruthTableOracle "qiskit.aqua.components.oracles.TruthTableOracle") may be the easiest to use to create one that can be used with the Simon algorithm.

**Parameters**

*   **oracle** ([`Oracle`](qiskit.aqua.components.oracles.Oracle "qiskit.aqua.components.oracles.oracle.Oracle")) – The oracle component
*   **quantum\_instance** (`Union`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), [`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), `None`]) – Quantum Instance or Backend

## Attributes

|                                                                                                                           |                           |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [`Simon.backend`](qiskit.aqua.algorithms.Simon.backend "qiskit.aqua.algorithms.Simon.backend")                            | Returns backend.          |
| [`Simon.quantum_instance`](qiskit.aqua.algorithms.Simon.quantum_instance "qiskit.aqua.algorithms.Simon.quantum_instance") | Returns quantum instance. |
| [`Simon.random`](qiskit.aqua.algorithms.Simon.random "qiskit.aqua.algorithms.Simon.random")                               | Return a numpy random.    |

## Methods

|                                                                                                                                              |                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`Simon.construct_circuit`](qiskit.aqua.algorithms.Simon.construct_circuit "qiskit.aqua.algorithms.Simon.construct_circuit")(\[measurement]) | Construct the quantum circuit                |
| [`Simon.run`](qiskit.aqua.algorithms.Simon.run "qiskit.aqua.algorithms.Simon.run")(\[quantum\_instance])                                     | Execute the algorithm with selected backend. |
| [`Simon.set_backend`](qiskit.aqua.algorithms.Simon.set_backend "qiskit.aqua.algorithms.Simon.set_backend")(backend, \*\*kwargs)              | Sets backend with configuration.             |

