---
title: to_density_matrix
description: API reference for qiskit.aqua.operators.state_fns.CircuitStateFn.to_density_matrix
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.state_fns.CircuitStateFn.to_density_matrix
---

# to\_density\_matrix

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.to_density_matrix" />

`CircuitStateFn.to_density_matrix(massive=False)`

Return numpy matrix of density operator, warn if more than 16 qubits to force the user to set massive=True if they want such a large matrix. Generally big methods like this should require the use of a converter, but in this case a convenience method for quick hacking and access to classical tools is appropriate.

**Return type**

`ndarray`

