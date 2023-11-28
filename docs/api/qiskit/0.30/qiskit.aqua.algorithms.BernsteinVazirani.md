# BernsteinVazirani

<span id="undefined" />

`BernsteinVazirani(oracle, quantum_instance=None)`

Bases: `qiskit.aqua.algorithms.quantum_algorithm.QuantumAlgorithm`

The Bernstein-Vazirani algorithm.

The Bernstein-Vazirani algorithm is an extension / restriction of the Deutsch-Jozsa algorithm. The goal of the algorithm is to determine a secret string $s \in \{0,1\}^n$, given a black box oracle function, that maps $f:\{0,1\}^n \rightarrow \{0,1\}$ such that $f(x)=s \cdot x (\bmod 2)$.

**Parameters**

*   **oracle** (`Oracle`) – The oracle component
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

## Methods

|                                                                                                                                                                                                           |                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`construct_circuit`](qiskit.aqua.algorithms.BernsteinVazirani.construct_circuit#qiskit.aqua.algorithms.BernsteinVazirani.construct_circuit "qiskit.aqua.algorithms.BernsteinVazirani.construct_circuit") | Construct the quantum circuit                |
| [`run`](qiskit.aqua.algorithms.BernsteinVazirani.run#qiskit.aqua.algorithms.BernsteinVazirani.run "qiskit.aqua.algorithms.BernsteinVazirani.run")                                                         | Execute the algorithm with selected backend. |
| [`set_backend`](qiskit.aqua.algorithms.BernsteinVazirani.set_backend#qiskit.aqua.algorithms.BernsteinVazirani.set_backend "qiskit.aqua.algorithms.BernsteinVazirani.set_backend")                         | Sets backend with configuration.             |

## Attributes

<span id="undefined" />

### backend

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

<span id="undefined" />

### quantum\_instance

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

<span id="undefined" />

### random

Return a numpy random.
