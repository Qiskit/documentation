---
title: ADMMState
description: API reference for qiskit.optimization.algorithms.ADMMState
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.algorithms.ADMMState
---

# ADMMState

<span id="qiskit.optimization.algorithms.ADMMState" />

`ADMMState(op, rho_initial)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/optimization/algorithms/admm_optimizer.py "view source code")

Bases: `object`

Internal computation state of the ADMM implementation.

The state keeps track of various variables are stored that are being updated during problem solving. The values are relevant to the problem being solved. The state is recreated for each optimization problem. State is returned as the third value.

**Parameters**

*   **op** (`QuadraticProgram`) – The optimization problem being solved.
*   **rho\_initial** (`float`) – Initial value of the rho parameter.

