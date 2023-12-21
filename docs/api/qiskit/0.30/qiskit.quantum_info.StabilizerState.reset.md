# qiskit.quantum\_info.StabilizerState.reset

`StabilizerState.reset(qargs=None)`

Reset state or subsystems to the 0-state.

**Parameters**

**qargs** (*list or None*) – subsystems to reset, if None all subsystems will be reset to their 0-state (Default: None).

**Returns**

the reset state.

**Return type**

[StabilizerState](qiskit.quantum_info.StabilizerState#qiskit.quantum_info.StabilizerState "qiskit.quantum_info.StabilizerState")

## Additional Information:

If all subsystems are reset this will return the ground state on all subsystems. If only some subsystems are reset this function will perform a measurement on those subsystems and evolve the subsystems so that the collapsed post-measurement states are rotated to the 0-state. The RNG seed for this sampling can be set using the [`seed()`](qiskit.quantum_info.StabilizerState.seed#qiskit.quantum_info.StabilizerState.seed "qiskit.quantum_info.StabilizerState.seed") method.
