# DeutschJozsa

<span id="undefined" />

`DeutschJozsa(oracle, quantum_instance=None)`

Bases: `qiskit.aqua.algorithms.quantum_algorithm.QuantumAlgorithm`

The Deutsch-Jozsa algorithm.

The Deutsch-Jozsa algorithm was one of the first known quantum algorithms that showed an exponential speedup compared to a deterministic (non-probabilistic) classical algorithm, given a black box oracle function. The algorithm determines whether the given function $f:\{0,1\}^n \rightarrow \{0,1\}$ is constant or balanced. A constant function maps all inputs to 0 or 1, and a balanced function maps half of its inputs to 0 and the other half to 1.

Note: the [`TruthTableOracle`](qiskit.aqua.components.oracles.TruthTableOracle#qiskit.aqua.components.oracles.TruthTableOracle "qiskit.aqua.components.oracles.TruthTableOracle") facilitates creating a constant or balanced function but any oracle can be used as long as the boolean function implemented by the oracle indeed satisfies the constraint of being either constant or balanced.

**Parameters**

*   **oracle** (`Oracle`) – The oracle component
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

## Methods

|                                                                                                                                                                                            |                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| [`construct_circuit`](qiskit.aqua.algorithms.DeutschJozsa.construct_circuit#qiskit.aqua.algorithms.DeutschJozsa.construct_circuit "qiskit.aqua.algorithms.DeutschJozsa.construct_circuit") | Construct the quantum circuit                |
| [`run`](qiskit.aqua.algorithms.DeutschJozsa.run#qiskit.aqua.algorithms.DeutschJozsa.run "qiskit.aqua.algorithms.DeutschJozsa.run")                                                         | Execute the algorithm with selected backend. |
| [`set_backend`](qiskit.aqua.algorithms.DeutschJozsa.set_backend#qiskit.aqua.algorithms.DeutschJozsa.set_backend "qiskit.aqua.algorithms.DeutschJozsa.set_backend")                         | Sets backend with configuration.             |

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
