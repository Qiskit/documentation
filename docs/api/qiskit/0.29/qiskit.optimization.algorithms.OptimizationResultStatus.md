---
title: OptimizationResultStatus
description: API reference for qiskit.optimization.algorithms.OptimizationResultStatus
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.algorithms.OptimizationResultStatus
---

# OptimizationResultStatus

<span id="qiskit.optimization.algorithms.OptimizationResultStatus" />

`OptimizationResultStatus(value)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/optimization/algorithms/optimization_algorithm.py "view source code")

Bases: `enum.Enum`

Termination status of an optimization algorithm.

## Attributes

<span id="qiskit.optimization.algorithms.OptimizationResultStatus.FAILURE" />

### FAILURE

`= 1`

the optimization algorithm ended in a failure.

<span id="qiskit.optimization.algorithms.OptimizationResultStatus.INFEASIBLE" />

### INFEASIBLE

`= 2`

the optimization algorithm obtained an infeasible solution.

<span id="qiskit.optimization.algorithms.OptimizationResultStatus.SUCCESS" />

### SUCCESS

`= 0`

the optimization algorithm succeeded to find an optimal solution.

