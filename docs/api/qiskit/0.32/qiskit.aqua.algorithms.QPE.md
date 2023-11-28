# QPE

<span id="undefined" />

`QPE(operator=None, state_in=None, iqft=None, num_time_slices=1, num_ancillae=1, expansion_mode='trotter', expansion_order=1, shallow_circuit_concat=False, quantum_instance=None)`

Bases: `qiskit.aqua.algorithms.quantum_algorithm.QuantumAlgorithm`, `qiskit.aqua.algorithms.minimum_eigen_solvers.minimum_eigen_solver.MinimumEigensolver`

The Quantum Phase Estimation algorithm.

QPE (also sometimes abbreviated as PEA, for Phase Estimation Algorithm), has two quantum registers, **control** and **target**, where the control consists of several qubits initially put in uniform superposition, and the target a set of qubits prepared in an eigenstate (often a guess of the eigenstate) of the unitary operator of a quantum system. QPE then evolves the target under the control using dynamics on the unitary operator. The information of the corresponding eigenvalue is then ‘kicked-back’ into the phases of the control register, which can then be deconvoluted by an Inverse Quantum Fourier Transform (IQFT), and measured for read-out in binary decimal format. QPE also requires a reasonably good estimate of the eigen wave function to start the process. For example, when estimating molecular ground energies in chemistry, the Hartree-Fock method could be used to provide such trial eigen wave functions.

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – The Hamiltonian Operator
*   **state\_in** (`Union`\[`QuantumCircuit`, `InitialState`, `None`]) – An optional InitialState component representing an initial quantum state. `None` may be supplied.
*   **iqft** (`Optional`\[`QuantumCircuit`]) – A Inverse Quantum Fourier Transform component
*   **num\_time\_slices** (`int`) – The number of time slices, has a minimum value of 1.
*   **num\_ancillae** (`int`) – The number of ancillary qubits to use for the measurement, has a min. value of 1.
*   **expansion\_mode** (`str`) – The expansion mode (‘trotter’|’suzuki’)
*   **expansion\_order** (`int`) – The suzuki expansion order, has a min. value of 1.
*   **shallow\_circuit\_concat** (`bool`) – Set True to use shallow (cheap) mode for circuit concatenation of evolution slices. By default this is False. See `qiskit.aqua.operators.common.evolution_instruction()` for more information.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

## Methods

|                                                                                                                                                                                                     |                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`compute_minimum_eigenvalue`](qiskit.aqua.algorithms.QPE.compute_minimum_eigenvalue#qiskit.aqua.algorithms.QPE.compute_minimum_eigenvalue "qiskit.aqua.algorithms.QPE.compute_minimum_eigenvalue") | Computes minimum eigenvalue.                                                 |
| [`construct_circuit`](qiskit.aqua.algorithms.QPE.construct_circuit#qiskit.aqua.algorithms.QPE.construct_circuit "qiskit.aqua.algorithms.QPE.construct_circuit")                                     | Construct circuit.                                                           |
| [`run`](qiskit.aqua.algorithms.QPE.run#qiskit.aqua.algorithms.QPE.run "qiskit.aqua.algorithms.QPE.run")                                                                                             | Execute the algorithm with selected backend.                                 |
| [`set_backend`](qiskit.aqua.algorithms.QPE.set_backend#qiskit.aqua.algorithms.QPE.set_backend "qiskit.aqua.algorithms.QPE.set_backend")                                                             | Sets backend with configuration.                                             |
| [`supports_aux_operators`](qiskit.aqua.algorithms.QPE.supports_aux_operators#qiskit.aqua.algorithms.QPE.supports_aux_operators "qiskit.aqua.algorithms.QPE.supports_aux_operators")                 | Whether computing the expectation value of auxiliary operators is supported. |

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

`Optional`\[`LegacyBaseOperator`]

<span id="undefined" />

### quantum\_instance

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

<span id="undefined" />

### random

Return a numpy random.
