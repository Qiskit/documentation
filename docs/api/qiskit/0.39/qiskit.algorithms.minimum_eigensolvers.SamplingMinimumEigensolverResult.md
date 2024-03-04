---
title: SamplingMinimumEigensolverResult
description: API reference for qiskit.algorithms.minimum_eigensolvers.SamplingMinimumEigensolverResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.minimum_eigensolvers.SamplingMinimumEigensolverResult
---

# SamplingMinimumEigensolverResult

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingMinimumEigensolverResult" />

`SamplingMinimumEigensolverResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/algorithms/minimum_eigensolvers/sampling_mes.py "view source code")

Bases: `qiskit.algorithms.algorithm_result.AlgorithmResult`

Sampling Minimum Eigensolver Result.

In contrast to the result of a `MinimumEigenSolver`, this result also contains the best measurement of the overall optimization and the samples of the final state.

## Methods

### combine

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingMinimumEigensolverResult.combine" />

`SamplingMinimumEigensolverResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

## Attributes

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingMinimumEigensolverResult.aux_operators_evaluated" />

### aux\_operators\_evaluated

Return aux operator expectation values and metadata.

These are formatted as (mean, metadata).

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingMinimumEigensolverResult.best_measurement" />

### best\_measurement

Return the best measurement over the entire optimization.

Possesses keys: `state`, `bitstring`, `value`, `probability`.

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingMinimumEigensolverResult.eigenstate" />

### eigenstate

Return the quasi-distribution sampled from the final state.

The ansatz is sampled when parameterized with the optimal parameters that where obtained computing the minimum eigenvalue. The keys represent a measured classical value and the value is a float for the quasi-probability of that result.

**Return type**

[QuasiDistribution](qiskit.result.QuasiDistribution "qiskit.result.QuasiDistribution") | None

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingMinimumEigensolverResult.eigenvalue" />

### eigenvalue

Return the approximation to the eigenvalue.

**Return type**

complex | None

