# qiskit.algorithms.PhaseEstimation.estimate

`PhaseEstimation.estimate(unitary=None, state_preparation=None, pe_circuit=None, num_unitary_qubits=None)`

Build a phase estimation circuit and run the corresponding algorithm.

**Parameters**

*   **unitary** (`Optional`\[`QuantumCircuit`]) – The circuit representing the unitary operator whose eigenvalues (via phase) will be measured.
*   **state\_preparation** (`Optional`\[`QuantumCircuit`]) – The circuit that prepares the state whose eigenphase will be measured. If this parameter is omitted, no preparation circuit will be run and input state will be the all-zero state in the computational basis.

**Return type**

`PhaseEstimationResult`

**Returns**

An instance of qiskit.algorithms.phase\_estimator\_result.PhaseEstimationResult.
