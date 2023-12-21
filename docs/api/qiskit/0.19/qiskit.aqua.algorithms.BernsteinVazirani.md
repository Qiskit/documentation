---
title: BernsteinVazirani
description: API reference for qiskit.aqua.algorithms.BernsteinVazirani
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.BernsteinVazirani
---

# BernsteinVazirani

<span id="qiskit.aqua.algorithms.BernsteinVazirani" />

`BernsteinVazirani(oracle, quantum_instance=None)`

The Bernstein-Vazirani algorithm.

The Bernstein-Vazirani algorithm is an extension / restriction of the Deutsch-Jozsa algorithm. The goal of the algorithm is to determine a secret string $s \in \{0,1\}^n$, given a black box oracle function, that maps $f:\{0,1\}^n \rightarrow \{0,1\}$ such that $f(x)=s \cdot x (\bmod 2)$.

**Parameters**

*   **oracle** ([`Oracle`](qiskit.aqua.components.oracles.Oracle "qiskit.aqua.components.oracles.oracle.Oracle")) – The oracle component
*   **quantum\_instance** (`Union`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), [`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), `None`]) – Quantum Instance or Backend

## Attributes

|                                                                                                                                                               |                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [`BernsteinVazirani.backend`](qiskit.aqua.algorithms.BernsteinVazirani.backend "qiskit.aqua.algorithms.BernsteinVazirani.backend")                            | Returns backend.          |
| [`BernsteinVazirani.quantum_instance`](qiskit.aqua.algorithms.BernsteinVazirani.quantum_instance "qiskit.aqua.algorithms.BernsteinVazirani.quantum_instance") | Returns quantum instance. |
| [`BernsteinVazirani.random`](qiskit.aqua.algorithms.BernsteinVazirani.random "qiskit.aqua.algorithms.BernsteinVazirani.random")                               | Return a numpy random.    |

## Methods

|                                                                                                                                                                        |                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`BernsteinVazirani.construct_circuit`](qiskit.aqua.algorithms.BernsteinVazirani.construct_circuit "qiskit.aqua.algorithms.BernsteinVazirani.construct_circuit")(\[…]) | Construct the quantum circuit                |
| [`BernsteinVazirani.run`](qiskit.aqua.algorithms.BernsteinVazirani.run "qiskit.aqua.algorithms.BernsteinVazirani.run")(\[quantum\_instance])                           | Execute the algorithm with selected backend. |
| [`BernsteinVazirani.set_backend`](qiskit.aqua.algorithms.BernsteinVazirani.set_backend "qiskit.aqua.algorithms.BernsteinVazirani.set_backend")(backend, \*\*kwargs)    | Sets backend with configuration.             |

