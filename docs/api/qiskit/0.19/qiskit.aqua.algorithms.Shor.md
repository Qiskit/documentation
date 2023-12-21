---
title: Shor
description: API reference for qiskit.aqua.algorithms.Shor
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.Shor
---

# Shor

<span id="qiskit.aqua.algorithms.Shor" />

`Shor(N=15, a=2, quantum_instance=None)`

Shor’s factoring algorithm.

Shor’s Factoring algorithm is one of the most well-known quantum algorithms and finds the prime factors for input integer $N$ in polynomial time.

The input integer $N$ to be factored is expected to be odd and greater than 2. Even though this implementation is general, its capability will be limited by the capacity of the simulator/hardware. Another input integer $a$ can also be supplied, which needs to be a co-prime smaller than $N$ .

Adapted from [https://github.com/ttlion/ShorAlgQiskit](https://github.com/ttlion/ShorAlgQiskit)

See also [https://arxiv.org/abs/quant-ph/0205095](https://arxiv.org/abs/quant-ph/0205095)

**Parameters**

*   **N** (`int`) – The integer to be factored, has a min. value of 3.

*   **a** (`int`) – A random integer that satisfies a \< N and gcd(a, N) = 1, has a min. value of 2.

*   **quantum\_instance** (`Union`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), [`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), `None`]) –

    Quantum Instance or Backend

    **Raises:**

    ValueError: Invalid input

## Attributes

|                                                                                                                        |                           |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [`Shor.backend`](qiskit.aqua.algorithms.Shor.backend "qiskit.aqua.algorithms.Shor.backend")                            | Returns backend.          |
| [`Shor.quantum_instance`](qiskit.aqua.algorithms.Shor.quantum_instance "qiskit.aqua.algorithms.Shor.quantum_instance") | Returns quantum instance. |
| [`Shor.random`](qiskit.aqua.algorithms.Shor.random "qiskit.aqua.algorithms.Shor.random")                               | Return a numpy random.    |

## Methods

|                                                                                                                                           |                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`Shor.construct_circuit`](qiskit.aqua.algorithms.Shor.construct_circuit "qiskit.aqua.algorithms.Shor.construct_circuit")(\[measurement]) | Construct circuit.                           |
| [`Shor.run`](qiskit.aqua.algorithms.Shor.run "qiskit.aqua.algorithms.Shor.run")(\[quantum\_instance])                                     | Execute the algorithm with selected backend. |
| [`Shor.set_backend`](qiskit.aqua.algorithms.Shor.set_backend "qiskit.aqua.algorithms.Shor.set_backend")(backend, \*\*kwargs)              | Sets backend with configuration.             |

