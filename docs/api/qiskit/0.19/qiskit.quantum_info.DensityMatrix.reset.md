---
title: reset
description: API reference for qiskit.quantum_info.DensityMatrix.reset
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.DensityMatrix.reset
---

# reset

<span id="qiskit.quantum_info.DensityMatrix.reset" />

`DensityMatrix.reset(qargs=None)`

Reset state or subsystems to the 0-state.

**Parameters**

**qargs** (*list or None*) – subsystems to reset, if None all subsystems will be reset to their 0-state (Default: None).

**Returns**

the reset state.

**Return type**

[DensityMatrix](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")

## Additional Information:

If all subsystems are reset this will return the ground state on all subsystems. If only a some subsystems are reset this function will perform evolution by the reset [`SuperOp`](qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") of the reset subsystems.

