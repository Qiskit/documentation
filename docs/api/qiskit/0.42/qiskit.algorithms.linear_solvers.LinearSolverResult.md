---
title: LinearSolverResult
description: API reference for qiskit.algorithms.linear_solvers.LinearSolverResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.linear_solvers.LinearSolverResult
---

# LinearSolverResult

<span id="qiskit.algorithms.linear_solvers.LinearSolverResult" />

`LinearSolverResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/algorithms/linear_solvers/linear_solver.py "view source code")

Bases: `qiskit.algorithms.algorithm_result.AlgorithmResult`

The deprecated base class for linear systems results.

The linear systems algorithms return an object of the type `LinearSystemsResult` with the information about the solution obtained.

## Methods

### combine

<span id="qiskit.algorithms.linear_solvers.LinearSolverResult.combine" />

`LinearSolverResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

## Attributes

<span id="qiskit.algorithms.linear_solvers.LinearSolverResult.circuit_results" />

### circuit\_results

return the results from the circuits

**Return type**

`Union`\[`List`\[`float`], `List`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result")]]

<span id="qiskit.algorithms.linear_solvers.LinearSolverResult.euclidean_norm" />

### euclidean\_norm

return the euclidean norm if the algorithm knows how to calculate it

**Return type**

`float`

<span id="qiskit.algorithms.linear_solvers.LinearSolverResult.observable" />

### observable

return the (list of) calculated observable(s)

**Return type**

`Union`\[`float`, `List`\[`float`]]

<span id="qiskit.algorithms.linear_solvers.LinearSolverResult.state" />

### state

return either the circuit that prepares the solution or the solution as a vector

**Return type**

`Union`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), `ndarray`]

