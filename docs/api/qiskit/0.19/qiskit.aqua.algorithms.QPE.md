---
title: QPE
description: API reference for qiskit.aqua.algorithms.QPE
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.QPE
---

# QPE

<span id="qiskit.aqua.algorithms.QPE" />

`QPE(operator=None, state_in=None, iqft=None, num_time_slices=1, num_ancillae=1, expansion_mode='trotter', expansion_order=1, shallow_circuit_concat=False, quantum_instance=None)`

The Quantum Phase Estimation algorithm.

QPE (also sometimes abbreviated as PEA, for Phase Estimation Algorithm), has two quantum registers, **control** and **target**, where the control consists of several qubits initially put in uniform superposition, and the target a set of qubits prepared in an eigenstate (often a guess of the eigenstate) of the unitary operator of a quantum system. QPE then evolves the target under the control using dynamics on the unitary operator. The information of the corresponding eigenvalue is then ‘kicked-back’ into the phases of the control register, which can then be deconvoluted by an Inverse Quantum Fourier Transform (IQFT), and measured for read-out in binary decimal format. QPE also requires a reasonably good estimate of the eigen wave function to start the process. For example, when estimating molecular ground energies in chemistry, the Hartree-Fock method could be used to provide such trial eigen wave functions.

**Parameters**

*   **operator** (`Union`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), [`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator"), `None`]) – The Hamiltonian Operator
*   **state\_in** (`Optional`\[[`InitialState`](qiskit.aqua.components.initial_states.InitialState "qiskit.aqua.components.initial_states.initial_state.InitialState")]) – An optional InitialState component representing an initial quantum state. `None` may be supplied.
*   **iqft** (`Union`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`IQFT`](qiskit.aqua.components.iqfts.IQFT "qiskit.aqua.components.iqfts.iqft.IQFT"), `None`]) – A Inverse Quantum Fourier Transform component
*   **num\_time\_slices** (`int`) – The number of time slices, has a minimum value of 1.
*   **num\_ancillae** (`int`) – The number of ancillary qubits to use for the measurement, has a min. value of 1.
*   **expansion\_mode** (`str`) – The expansion mode (‘trotter’|’suzuki’)
*   **expansion\_order** (`int`) – The suzuki expansion order, has a min. value of 1.
*   **shallow\_circuit\_concat** (`bool`) – Set True to use shallow (cheap) mode for circuit concatenation of evolution slices. By default this is False. See `qiskit.aqua.operators.common.evolution_instruction()` for more information.
*   **quantum\_instance** (`Union`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), [`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), `None`]) – Quantum Instance or Backend

## Attributes

|                                                                                                                     |                           |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [`QPE.aux_operators`](qiskit.aqua.algorithms.QPE.aux_operators "qiskit.aqua.algorithms.QPE.aux_operators")          | Returns aux operators     |
| [`QPE.backend`](qiskit.aqua.algorithms.QPE.backend "qiskit.aqua.algorithms.QPE.backend")                            | Returns backend.          |
| [`QPE.operator`](qiskit.aqua.algorithms.QPE.operator "qiskit.aqua.algorithms.QPE.operator")                         | Returns operator          |
| [`QPE.quantum_instance`](qiskit.aqua.algorithms.QPE.quantum_instance "qiskit.aqua.algorithms.QPE.quantum_instance") | Returns quantum instance. |
| [`QPE.random`](qiskit.aqua.algorithms.QPE.random "qiskit.aqua.algorithms.QPE.random")                               | Return a numpy random.    |

## Methods

|                                                                                                                                                                   |                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`QPE.compute_minimum_eigenvalue`](qiskit.aqua.algorithms.QPE.compute_minimum_eigenvalue "qiskit.aqua.algorithms.QPE.compute_minimum_eigenvalue")(\[operator, …]) | Computes minimum eigenvalue.                                                 |
| [`QPE.construct_circuit`](qiskit.aqua.algorithms.QPE.construct_circuit "qiskit.aqua.algorithms.QPE.construct_circuit")(\[measurement])                            | Construct circuit.                                                           |
| [`QPE.run`](qiskit.aqua.algorithms.QPE.run "qiskit.aqua.algorithms.QPE.run")(\[quantum\_instance])                                                                | Execute the algorithm with selected backend.                                 |
| [`QPE.set_backend`](qiskit.aqua.algorithms.QPE.set_backend "qiskit.aqua.algorithms.QPE.set_backend")(backend, \*\*kwargs)                                         | Sets backend with configuration.                                             |
| [`QPE.supports_aux_operators`](qiskit.aqua.algorithms.QPE.supports_aux_operators "qiskit.aqua.algorithms.QPE.supports_aux_operators")()                           | Whether computing the expectation value of auxiliary operators is supported. |

