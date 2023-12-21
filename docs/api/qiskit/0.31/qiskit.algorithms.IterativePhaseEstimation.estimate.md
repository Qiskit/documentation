# qiskit.algorithms.IterativePhaseEstimation.estimate

`IterativePhaseEstimation.estimate(unitary, state_preparation)`

Estimate the eigenphase of the input unitary and initial-state pair.

**Parameters**

*   **unitary** (`QuantumCircuit`) – The circuit representing the unitary operator whose eigenvalue (via phase) will be measured.
*   **state\_preparation** (`QuantumCircuit`) – The circuit that prepares the state whose eigenphase will be measured. If this parameter is omitted, no preparation circuit will be run and input state will be the all-zero state in the computational basis.

**Return type**

`IterativePhaseEstimationResult`

**Returns**

Estimated phase in an IterativePhaseEstimationResult object.
