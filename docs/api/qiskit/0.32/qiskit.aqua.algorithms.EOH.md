# EOH

<span id="undefined" />

`EOH(operator, initial_state, evo_operator, evo_time=1, num_time_slices=1, expansion_mode='trotter', expansion_order=1, quantum_instance=None)`

Bases: `qiskit.aqua.algorithms.quantum_algorithm.QuantumAlgorithm`

The Quantum EOH (Evolution of Hamiltonian) algorithm.

EOH provides the lower-level building blocks for simulating universal quantum systems. For any given quantum system that can be decomposed into local interactions (for example, a global hamiltonian as the weighted sum of several Pauli spin operators), the local interactions can then be used to approximate the global quantum system via, for example, Lloyd’s method or Trotter-Suzuki decomposition.

**Parameters**

*   **operator** (`LegacyBaseOperator`) – Operator to evaluate
*   **initial\_state** (`Union`\[`InitialState`, `QuantumCircuit`]) – Initial state for evolution
*   **evo\_operator** (`LegacyBaseOperator`) – Operator to evolve
*   **evo\_time** (`float`) – Evolution time, has min value of 0
*   **num\_time\_slices** (`int`) – Number of time slices, has minimum value of 1
*   **expansion\_mode** (`str`) – Either `"trotter"` (Lloyd’s method) or `"suzuki"` (for Trotter-Suzuki expansion)
*   **expansion\_order** (`int`) – The Trotter-Suzuki expansion order.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

## Methods

|                                                                                                                                                                 |                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`construct_circuit`](qiskit.aqua.algorithms.EOH.construct_circuit#qiskit.aqua.algorithms.EOH.construct_circuit "qiskit.aqua.algorithms.EOH.construct_circuit") | Construct the circuit.                       |
| [`run`](qiskit.aqua.algorithms.EOH.run#qiskit.aqua.algorithms.EOH.run "qiskit.aqua.algorithms.EOH.run")                                                         | Execute the algorithm with selected backend. |
| [`set_backend`](qiskit.aqua.algorithms.EOH.set_backend#qiskit.aqua.algorithms.EOH.set_backend "qiskit.aqua.algorithms.EOH.set_backend")                         | Sets backend with configuration.             |

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
