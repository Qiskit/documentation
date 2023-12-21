# qiskit.quantum\_info.StabilizerState.measure

`StabilizerState.measure(qargs=None)`

Measure subsystems and return outcome and post-measure state.

Note that this function uses the QuantumStates internal random number generator for sampling the measurement outcome. The RNG seed can be set using the [`seed()`](qiskit.quantum_info.StabilizerState.seed#qiskit.quantum_info.StabilizerState.seed "qiskit.quantum_info.StabilizerState.seed") method.

**Parameters**

**qargs** (*list or None*) – subsystems to sample measurements for, if None sample measurement of all subsystems (Default: None).

**Returns**

**the pair `(outcome, state)` where `outcome` is the**

measurement outcome string label, and `state` is the collapsed post-measurement stabilizer state for the corresponding outcome.

**Return type**

tuple
