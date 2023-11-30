# PhaseEstimationCircuit

<span id="undefined" />

`PhaseEstimationCircuit(operator=None, state_in=None, iqft=None, num_time_slices=1, num_ancillae=1, expansion_mode='trotter', expansion_order=1, evo_time=6.283185307179586, state_in_circuit_factory=None, unitary_circuit_factory=None, shallow_circuit_concat=False, pauli_list=None)`

Bases: `object`

Quantum Phase Estimation Circuit.

**Parameters**

*   **operator** (`Optional`\[`WeightedPauliOperator`]) – the hamiltonian Operator object
*   **state\_in** (`Union`\[`QuantumCircuit`, `InitialState`, `None`]) – the InitialState component or a quantum circuit
*   **the initial quantum state** (*representing*) –
*   **iqft** (`Optional`\[`QuantumCircuit`]) – the Inverse Quantum Fourier Transform as circuit or Aqua component
*   **num\_time\_slices** (`int`) – the number of time slices
*   **num\_ancillae** (`int`) – the number of ancillary qubits to use for the measurement
*   **expansion\_mode** (`str`) – the expansion mode (trotter|suzuki)
*   **expansion\_order** (`int`) – the suzuki expansion order
*   **evo\_time** (`float`) – the evolution time
*   **state\_in\_circuit\_factory** (`Optional`\[`CircuitFactory`]) – the initial state represented by a CircuitFactory object
*   **unitary\_circuit\_factory** (`Optional`\[`CircuitFactory`]) – the problem unitary represented by a CircuitFactory object
*   **shallow\_circuit\_concat** (`bool`) – indicate whether to use shallow (cheap) mode for circuit concatenation
*   **pauli\_list** (`Optional`\[`List`\[`Pauli`]]) – the flat list of paulis for the operator

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Missing input

## Methods

|                                                                                                                                                                                                                    |                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- |
| [`construct_circuit`](qiskit.aqua.circuits.PhaseEstimationCircuit.construct_circuit#qiskit.aqua.circuits.PhaseEstimationCircuit.construct_circuit "qiskit.aqua.circuits.PhaseEstimationCircuit.construct_circuit") | Construct the Phase Estimation circuit |

## Attributes

<span id="undefined" />

### ancillary\_register

returns ancillary register

<span id="undefined" />

### auxiliary\_register

returns auxiliary register

<span id="undefined" />

### state\_register

returns state register
