---
title: reset
description: API reference for qiskit.quantum_info.Statevector.reset
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Statevector.reset
---

# reset

<span id="qiskit.quantum_info.Statevector.reset" />

`Statevector.reset(qargs=None)`

Reset state or subsystems to the 0-state.

**Parameters**

**qargs** (*list or None*) – subsystems to reset, if None all subsystems will be reset to their 0-state (Default: None).

**Returns**

the reset state.

**Return type**

[Statevector](qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")

## Additional Information:

If all subsystems are reset this will return the ground state on all subsystems. If only a some subsystems are reset this function will perform a measurement on those subsystems and evolve the subsystems so that the collapsed post-measurement states are rotated to the 0-state. The RNG seed for this sampling can be set using the [`seed()`](qiskit.quantum_info.Statevector.seed "qiskit.quantum_info.Statevector.seed") method.

