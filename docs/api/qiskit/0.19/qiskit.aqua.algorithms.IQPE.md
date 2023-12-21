---
title: IQPE
description: API reference for qiskit.aqua.algorithms.IQPE
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.IQPE
---

# IQPE

<span id="qiskit.aqua.algorithms.IQPE" />

`IQPE(operator=None, state_in=None, num_time_slices=1, num_iterations=1, expansion_mode='suzuki', expansion_order=2, shallow_circuit_concat=False, quantum_instance=None)`

The Iterative Quantum Phase Estimation algorithm.

IQPE, as its name suggests, iteratively computes the phase so as to require fewer qubits. It takes has the same set of parameters as [`QPE`](qiskit.aqua.algorithms.QPE "qiskit.aqua.algorithms.QPE"), except for the number of ancillary qubits *num\_ancillae*, being replaced by *num\_iterations* and that an Inverse Quantum Fourier Transform (IQFT) is not used for IQPE.

**Reference:**

**\[1]: Dobsicek et al. (2006), Arbitrary accuracy iterative phase estimation algorithm as a two**

qubit benchmark, [arxiv/quant-ph/0610214](https://arxiv.org/abs/quant-ph/0610214)

**Parameters**

*   **operator** (`Union`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), [`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator"), `None`]) – The hamiltonian Operator
*   **state\_in** (`Optional`\[[`InitialState`](qiskit.aqua.components.initial_states.InitialState "qiskit.aqua.components.initial_states.initial_state.InitialState")]) – An InitialState component representing an initial quantum state.
*   **num\_time\_slices** (`int`) – The number of time slices, has a minimum value of 1.
*   **num\_iterations** (`int`) – The number of iterations, has a minimum value of 1.
*   **expansion\_mode** (`str`) – The expansion mode (‘trotter’|’suzuki’)
*   **expansion\_order** (`int`) – The suzuki expansion order, has a min. value of 1.
*   **shallow\_circuit\_concat** (`bool`) – Set True to use shallow (cheap) mode for circuit concatenation of evolution slices. By default this is False.
*   **quantum\_instance** (`Union`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), [`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), `None`]) – Quantum Instance or Backend

## Attributes

|                                                                                                                        |                           |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [`IQPE.aux_operators`](qiskit.aqua.algorithms.IQPE.aux_operators "qiskit.aqua.algorithms.IQPE.aux_operators")          | Returns aux operators     |
| [`IQPE.backend`](qiskit.aqua.algorithms.IQPE.backend "qiskit.aqua.algorithms.IQPE.backend")                            | Returns backend.          |
| [`IQPE.operator`](qiskit.aqua.algorithms.IQPE.operator "qiskit.aqua.algorithms.IQPE.operator")                         | Returns operator          |
| [`IQPE.quantum_instance`](qiskit.aqua.algorithms.IQPE.quantum_instance "qiskit.aqua.algorithms.IQPE.quantum_instance") | Returns quantum instance. |
| [`IQPE.random`](qiskit.aqua.algorithms.IQPE.random "qiskit.aqua.algorithms.IQPE.random")                               | Return a numpy random.    |

## Methods

|                                                                                                                                                                      |                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`IQPE.compute_minimum_eigenvalue`](qiskit.aqua.algorithms.IQPE.compute_minimum_eigenvalue "qiskit.aqua.algorithms.IQPE.compute_minimum_eigenvalue")(\[operator, …]) | Computes minimum eigenvalue.                                                 |
| [`IQPE.construct_circuit`](qiskit.aqua.algorithms.IQPE.construct_circuit "qiskit.aqua.algorithms.IQPE.construct_circuit")(\[k, omega, measurement])                  | Construct the kth iteration Quantum Phase Estimation circuit.                |
| [`IQPE.run`](qiskit.aqua.algorithms.IQPE.run "qiskit.aqua.algorithms.IQPE.run")(\[quantum\_instance])                                                                | Execute the algorithm with selected backend.                                 |
| [`IQPE.set_backend`](qiskit.aqua.algorithms.IQPE.set_backend "qiskit.aqua.algorithms.IQPE.set_backend")(backend, \*\*kwargs)                                         | Sets backend with configuration.                                             |
| [`IQPE.supports_aux_operators`](qiskit.aqua.algorithms.IQPE.supports_aux_operators "qiskit.aqua.algorithms.IQPE.supports_aux_operators")()                           | Whether computing the expectation value of auxiliary operators is supported. |

