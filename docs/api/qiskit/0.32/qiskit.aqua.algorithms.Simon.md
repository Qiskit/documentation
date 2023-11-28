# Simon

<span id="undefined" />

`Simon(oracle, quantum_instance=None)`

Bases: `qiskit.aqua.algorithms.quantum_algorithm.QuantumAlgorithm`

The Simon algorithm.

The Simon algorithm finds a hidden integer $s \in \{0,1\}^n$ from an oracle $f_s$ that satisfies $f_s(x) = f_s(y)$ if and only if $y=x \oplus s$ for all $x \in \{0,1\}^n$. Thus, if $s = 0\ldots 0$, i.e., the all-zero bitstring, then $f_s$ is a 1-to-1 (or, permutation) function. Otherwise, if $s \neq 0\ldots 0$, then $f_s$ is a 2-to-1 function.

Note: the [`TruthTableOracle`](qiskit.aqua.components.oracles.TruthTableOracle#qiskit.aqua.components.oracles.TruthTableOracle "qiskit.aqua.components.oracles.TruthTableOracle") may be the easiest to use to create one that can be used with the Simon algorithm.

**Parameters**

*   **oracle** (`Oracle`) – The oracle component
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

## Methods

|                                                                                                                                                                       |                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`construct_circuit`](qiskit.aqua.algorithms.Simon.construct_circuit#qiskit.aqua.algorithms.Simon.construct_circuit "qiskit.aqua.algorithms.Simon.construct_circuit") | Construct the quantum circuit                |
| [`run`](qiskit.aqua.algorithms.Simon.run#qiskit.aqua.algorithms.Simon.run "qiskit.aqua.algorithms.Simon.run")                                                         | Execute the algorithm with selected backend. |
| [`set_backend`](qiskit.aqua.algorithms.Simon.set_backend#qiskit.aqua.algorithms.Simon.set_backend "qiskit.aqua.algorithms.Simon.set_backend")                         | Sets backend with configuration.             |

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
