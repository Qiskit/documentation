---
title: NumPyMinimumEigensolverResult
description: API reference for qiskit.algorithms.minimum_eigensolvers.NumPyMinimumEigensolverResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.minimum_eigensolvers.NumPyMinimumEigensolverResult
---

# NumPyMinimumEigensolverResult

<span id="qiskit.algorithms.minimum_eigensolvers.NumPyMinimumEigensolverResult" />

`NumPyMinimumEigensolverResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/algorithms/minimum_eigensolvers/numpy_minimum_eigensolver.py "view source code")

Bases: [`MinimumEigensolverResult`](qiskit.algorithms.minimum_eigensolvers.MinimumEigensolverResult "qiskit.algorithms.minimum_eigensolvers.minimum_eigensolver.MinimumEigensolverResult")

NumPy minimum eigensolver result.

## Methods

<span id="qiskit-algorithms-minimum-eigensolvers-numpyminimumeigensolverresult-combine" />

### combine

<span id="qiskit.algorithms.minimum_eigensolvers.NumPyMinimumEigensolverResult.combine" />

`NumPyMinimumEigensolverResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

## Attributes

<span id="qiskit.algorithms.minimum_eigensolvers.NumPyMinimumEigensolverResult.aux_operators_evaluated" />

### aux\_operators\_evaluated

The aux operator expectation values.

These values are in fact tuples formatted as (mean, (variance, shots)).

<span id="qiskit.algorithms.minimum_eigensolvers.NumPyMinimumEigensolverResult.eigenstate" />

### eigenstate

Returns the eigenstate corresponding to the computed minimum eigenvalue.

<span id="qiskit.algorithms.minimum_eigensolvers.NumPyMinimumEigensolverResult.eigenvalue" />

### eigenvalue

The computed minimum eigenvalue.

