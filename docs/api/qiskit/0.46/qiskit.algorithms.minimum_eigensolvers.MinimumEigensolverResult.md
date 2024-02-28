---
title: MinimumEigensolverResult
description: API reference for qiskit.algorithms.minimum_eigensolvers.MinimumEigensolverResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.minimum_eigensolvers.MinimumEigensolverResult
---

# MinimumEigensolverResult

<span id="qiskit.algorithms.minimum_eigensolvers.MinimumEigensolverResult" />

`qiskit.algorithms.minimum_eigensolvers.MinimumEigensolverResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/algorithms/minimum_eigensolvers/minimum_eigensolver.py "view source code")

Bases: `AlgorithmResult`

Minimum eigensolver result.

## Attributes

<span id="qiskit.algorithms.minimum_eigensolvers.MinimumEigensolverResult.aux_operators_evaluated" />

### aux\_operators\_evaluated

The aux operator expectation values.

These values are in fact tuples formatted as (mean, (variance, shots)).

<span id="qiskit.algorithms.minimum_eigensolvers.MinimumEigensolverResult.eigenvalue" />

### eigenvalue

The computed minimum eigenvalue.

## Methods

### combine

<span id="qiskit.algorithms.minimum_eigensolvers.MinimumEigensolverResult.combine" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :param result: Argument result with properties to be set.

**Raises**

[**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError "(in Python v3.12)") – Argument is None

