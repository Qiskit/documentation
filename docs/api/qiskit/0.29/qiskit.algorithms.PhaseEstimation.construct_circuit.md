# qiskit.algorithms.PhaseEstimation.construct\_circuit

`PhaseEstimation.construct_circuit(unitary, state_preparation=None)`

Return the circuit to be executed to estimate phases.

This circuit includes as sub-circuits the core phase estimation circuit, with the addition of the state-preparation circuit and possibly measurement instructions.

**Return type**

`QuantumCircuit`
