---
title: EigensolverResult
description: API reference for qiskit.algorithms.EigensolverResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.EigensolverResult
---

# EigensolverResult

<span id="qiskit.algorithms.EigensolverResult" />

`EigensolverResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/algorithms/eigen_solvers/eigen_solver.py "view source code")

Bases: `qiskit.algorithms.algorithm_result.AlgorithmResult`

Eigensolver Result.

## Methods

### combine

<span id="qiskit.algorithms.EigensolverResult.combine" />

`EigensolverResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

## Attributes

<span id="qiskit.algorithms.EigensolverResult.aux_operator_eigenvalues" />

### aux\_operator\_eigenvalues

return aux operator eigen values

**Return type**

`Optional`\[`ndarray`]

<span id="qiskit.algorithms.EigensolverResult.eigenstates" />

### eigenstates

return eigen states

**Return type**

`Optional`\[`ndarray`]

<span id="qiskit.algorithms.EigensolverResult.eigenvalues" />

### eigenvalues

returns eigen values

**Return type**

`Optional`\[`ndarray`]

