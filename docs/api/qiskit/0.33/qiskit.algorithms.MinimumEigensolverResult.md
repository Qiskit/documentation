---
title: MinimumEigensolverResult
description: API reference for qiskit.algorithms.MinimumEigensolverResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.MinimumEigensolverResult
---

# MinimumEigensolverResult

<span id="qiskit.algorithms.MinimumEigensolverResult" />

`MinimumEigensolverResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/algorithms/minimum_eigen_solvers/minimum_eigen_solver.py "view source code")

Bases: `qiskit.algorithms.algorithm_result.AlgorithmResult`

Minimum Eigensolver Result.

## Methods

### combine

<span id="qiskit.algorithms.MinimumEigensolverResult.combine" />

`MinimumEigensolverResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

## Attributes

<span id="qiskit.algorithms.MinimumEigensolverResult.aux_operator_eigenvalues" />

### aux\_operator\_eigenvalues

Return aux operator expectation values.

These values are in fact tuples formatted as (mean, standard deviation).

**Return type**

`Union`\[`List`\[`Optional`\[`Tuple`\[`complex`, `complex`]]], `Dict`\[`str`, `Tuple`\[`complex`, `complex`]], `None`]

<span id="qiskit.algorithms.MinimumEigensolverResult.eigenstate" />

### eigenstate

return eigen state

**Return type**

`Optional`\[`ndarray`]

<span id="qiskit.algorithms.MinimumEigensolverResult.eigenvalue" />

### eigenvalue

returns eigen value

**Return type**

`Optional`\[`complex`]

