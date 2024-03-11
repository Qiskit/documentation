---
title: SamplingVQEResult
description: API reference for qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult
---

# SamplingVQEResult

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult" />

`SamplingVQEResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/algorithms/minimum_eigensolvers/sampling_vqe.py "view source code")

Bases: `VariationalResult`, [`SamplingMinimumEigensolverResult`](qiskit.algorithms.minimum_eigensolvers.SamplingMinimumEigensolverResult "qiskit.algorithms.minimum_eigensolvers.sampling_mes.SamplingMinimumEigensolverResult")

VQE Result.

## Methods

<span id="qiskit-algorithms-minimum-eigensolvers-samplingvqeresult-combine" />

### combine

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.combine" />

`SamplingVQEResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

## Attributes

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.aux_operators_evaluated" />

### aux\_operators\_evaluated

Return aux operator expectation values and metadata.

These are formatted as (mean, metadata).

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.best_measurement" />

### best\_measurement

Return the best measurement over the entire optimization.

Possesses keys: `state`, `bitstring`, `value`, `probability`.

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.cost_function_evals" />

### cost\_function\_evals

Returns number of cost optimizer evaluations

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.eigenstate" />

### eigenstate

Return the quasi-distribution sampled from the final state.

The ansatz is sampled when parameterized with the optimal parameters that where obtained computing the minimum eigenvalue. The keys represent a measured classical value and the value is a float for the quasi-probability of that result.

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.eigenvalue" />

### eigenvalue

Return the approximation to the eigenvalue.

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.optimal_circuit" />

### optimal\_circuit

The optimal circuits. Along with the optimal parameters, these can be used to retrieve the minimum eigenstate.

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.optimal_parameters" />

### optimal\_parameters

Returns the optimal parameters in a dictionary

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.optimal_point" />

### optimal\_point

Returns optimal point

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.optimal_value" />

### optimal\_value

Returns optimal value

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.optimizer_evals" />

### optimizer\_evals

Returns number of optimizer evaluations

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.optimizer_result" />

### optimizer\_result

Returns the optimizer result

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.optimizer_time" />

### optimizer\_time

Returns time taken for optimization

