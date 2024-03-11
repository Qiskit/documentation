---
title: ADMMState
description: API reference for qiskit.optimization.algorithms.ADMMState
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.algorithms.ADMMState
---

<span id="qiskit-optimization-algorithms-admmstate" />

# qiskit.optimization.algorithms.ADMMState

<span id="qiskit.optimization.algorithms.ADMMState" />

`ADMMState(op, rho_initial)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/optimization/algorithms/admm_optimizer.py "view source code")

Internal computation state of the ADMM implementation.

The state keeps track of various variables are stored that are being updated during problem solving. The values are relevant to the problem being solved. The state is recreated for each optimization problem. State is returned as the third value.

**Parameters**

*   **op** (`QuadraticProgram`) – The optimization problem being solved.
*   **rho\_initial** (`float`) – Initial value of the rho parameter.

### \_\_init\_\_

<span id="qiskit.optimization.algorithms.ADMMState.__init__" />

`__init__(op, rho_initial)`

**Parameters**

*   **op** (`QuadraticProgram`) – The optimization problem being solved.
*   **rho\_initial** (`float`) – Initial value of the rho parameter.

## Methods

|                                                                                                                                        |                               |
| -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| [`__init__`](#qiskit.optimization.algorithms.ADMMState.__init__ "qiskit.optimization.algorithms.ADMMState.__init__")(op, rho\_initial) | **type op**`QuadraticProgram` |

