---
title: NumPyEigensolverResult
description: API reference for qiskit.algorithms.eigensolvers.NumPyEigensolverResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.eigensolvers.NumPyEigensolverResult
---

# NumPyEigensolverResult

<span id="qiskit.algorithms.eigensolvers.NumPyEigensolverResult" />

`NumPyEigensolverResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/algorithms/eigensolvers/numpy_eigensolver.py "view source code")

Bases: [`EigensolverResult`](qiskit.algorithms.eigensolvers.EigensolverResult "qiskit.algorithms.eigensolvers.eigensolver.EigensolverResult")

NumPy eigensolver result.

## Methods

<span id="qiskit-algorithms-eigensolvers-numpyeigensolverresult-combine" />

### combine

<span id="qiskit.algorithms.eigensolvers.NumPyEigensolverResult.combine" />

`NumPyEigensolverResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

## Attributes

<span id="qiskit.algorithms.eigensolvers.NumPyEigensolverResult.aux_operators_evaluated" />

### aux\_operators\_evaluated

Return the aux operator expectation values.

These values are in fact tuples formatted as (mean, metadata).

<span id="qiskit.algorithms.eigensolvers.NumPyEigensolverResult.eigenstates" />

### eigenstates

Return eigenstates.

<span id="qiskit.algorithms.eigensolvers.NumPyEigensolverResult.eigenvalues" />

### eigenvalues

Return the eigenvalues.

