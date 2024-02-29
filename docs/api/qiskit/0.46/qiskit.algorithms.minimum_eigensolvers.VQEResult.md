---
title: VQEResult
description: API reference for qiskit.algorithms.minimum_eigensolvers.VQEResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.minimum_eigensolvers.VQEResult
---

# VQEResult

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult" />

`qiskit.algorithms.minimum_eigensolvers.VQEResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/algorithms/minimum_eigensolvers/vqe.py "view source code")

Bases: `VariationalResult`, [`MinimumEigensolverResult`](qiskit.algorithms.minimum_eigensolvers.MinimumEigensolverResult "qiskit.algorithms.minimum_eigensolvers.minimum_eigensolver.MinimumEigensolverResult")

Variational quantum eigensolver result.

## Attributes

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.aux_operators_evaluated" />

### aux\_operators\_evaluated

The aux operator expectation values.

These values are in fact tuples formatted as (mean, (variance, shots)).

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.cost_function_evals" />

### cost\_function\_evals

The number of cost optimizer evaluations.

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.eigenvalue" />

### eigenvalue

The computed minimum eigenvalue.

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.optimal_circuit" />

### optimal\_circuit

The optimal circuits. Along with the optimal parameters, these can be used to retrieve the minimum eigenstate.

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.optimal_parameters" />

### optimal\_parameters

Returns the optimal parameters in a dictionary

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.optimal_point" />

### optimal\_point

Returns optimal point

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.optimal_value" />

### optimal\_value

Returns optimal value

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.optimizer_evals" />

### optimizer\_evals

Returns number of optimizer evaluations

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.optimizer_result" />

### optimizer\_result

Returns the optimizer result

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.optimizer_time" />

### optimizer\_time

Returns time taken for optimization

## Methods

### combine

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.combine" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :param result: Argument result with properties to be set.

**Raises**

[**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError "(in Python v3.12)") – Argument is None

