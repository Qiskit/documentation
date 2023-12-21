---
title: slopes
description: API reference for qiskit.circuit.library.PiecewiseLinearPauliRotations.slopes
in_page_toc_min_heading_level: 1
python_api_type: property
python_api_name: qiskit.circuit.library.PiecewiseLinearPauliRotations.slopes
---

# slopes

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.slopes" />

`List[int]`

The breakpoints of the piecewise linear function.

The function is linear in the intervals `[point_i, point_{i+1}]` where the last point implicitely is `2**(num_state_qubits + 1)`.

**Return type**

`List`\[`int`]

