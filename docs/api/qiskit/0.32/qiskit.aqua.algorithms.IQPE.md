# IQPE

<span id="undefined" />

`IQPE(operator=None, state_in=None, num_time_slices=1, num_iterations=1, expansion_mode='suzuki', expansion_order=2, shallow_circuit_concat=False, quantum_instance=None)`

Bases: `qiskit.aqua.algorithms.quantum_algorithm.QuantumAlgorithm`, `qiskit.aqua.algorithms.minimum_eigen_solvers.minimum_eigen_solver.MinimumEigensolver`

The Iterative Quantum Phase Estimation algorithm.

IQPE, as its name suggests, iteratively computes the phase so as to require fewer qubits. It has the same set of parameters as [`QPE`](qiskit.aqua.algorithms.QPE#qiskit.aqua.algorithms.QPE "qiskit.aqua.algorithms.QPE"), except for the number of ancillary qubits *num\_ancillae*, being replaced by *num\_iterations* and that an Inverse Quantum Fourier Transform (IQFT) is not used for IQPE.

**Reference:**

**\[1]: Dobsicek et al. (2006), Arbitrary accuracy iterative phase estimation algorithm as a two**

qubit benchmark, [arxiv/quant-ph/0610214](https://arxiv.org/abs/quant-ph/0610214)

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – The hamiltonian Operator
*   **state\_in** (`Union`\[`QuantumCircuit`, `InitialState`, `None`]) – An InitialState component representing an initial quantum state.
*   **num\_time\_slices** (`int`) – The number of time slices, has a minimum value of 1.
*   **num\_iterations** (`int`) – The number of iterations, has a minimum value of 1.
*   **expansion\_mode** (`str`) – The expansion mode (‘trotter’|’suzuki’)
*   **expansion\_order** (`int`) – The suzuki expansion order, has a min. value of 1.
*   **shallow\_circuit\_concat** (`bool`) – Set True to use shallow (cheap) mode for circuit concatenation of evolution slices. By default this is False.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

## Methods

|                                                                                                                                                                                                        |                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| [`compute_minimum_eigenvalue`](qiskit.aqua.algorithms.IQPE.compute_minimum_eigenvalue#qiskit.aqua.algorithms.IQPE.compute_minimum_eigenvalue "qiskit.aqua.algorithms.IQPE.compute_minimum_eigenvalue") | Computes minimum eigenvalue.                                                 |
| [`construct_circuit`](qiskit.aqua.algorithms.IQPE.construct_circuit#qiskit.aqua.algorithms.IQPE.construct_circuit "qiskit.aqua.algorithms.IQPE.construct_circuit")                                     | Construct the kth iteration Quantum Phase Estimation circuit.                |
| [`run`](qiskit.aqua.algorithms.IQPE.run#qiskit.aqua.algorithms.IQPE.run "qiskit.aqua.algorithms.IQPE.run")                                                                                             | Execute the algorithm with selected backend.                                 |
| [`set_backend`](qiskit.aqua.algorithms.IQPE.set_backend#qiskit.aqua.algorithms.IQPE.set_backend "qiskit.aqua.algorithms.IQPE.set_backend")                                                             | Sets backend with configuration.                                             |
| [`supports_aux_operators`](qiskit.aqua.algorithms.IQPE.supports_aux_operators#qiskit.aqua.algorithms.IQPE.supports_aux_operators "qiskit.aqua.algorithms.IQPE.supports_aux_operators")                 | Whether computing the expectation value of auxiliary operators is supported. |

## Attributes

<span id="undefined" />

### aux\_operators

Returns aux operators

**Return type**

`Optional`\[`List`\[`Union`\[`OperatorBase`, `LegacyBaseOperator`]]]

<span id="undefined" />

### backend

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

<span id="undefined" />

### operator

Returns operator

**Return type**

`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]

<span id="undefined" />

### quantum\_instance

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

<span id="undefined" />

### random

Return a numpy random.
