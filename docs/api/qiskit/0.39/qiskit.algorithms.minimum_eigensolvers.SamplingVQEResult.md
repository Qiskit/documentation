---
title: SamplingVQEResult
description: API reference for qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult
---

# SamplingVQEResult

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult" />

`SamplingVQEResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/algorithms/minimum_eigensolvers/sampling_vqe.py "view source code")

Bases: `qiskit.algorithms.variational_algorithm.VariationalResult`, [`qiskit.algorithms.minimum_eigensolvers.sampling_mes.SamplingMinimumEigensolverResult`](qiskit.algorithms.minimum_eigensolvers.SamplingMinimumEigensolverResult "qiskit.algorithms.minimum_eigensolvers.sampling_mes.SamplingMinimumEigensolverResult")

VQE Result.

## Methods

### combine

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.combine" />

`SamplingVQEResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

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

**Return type**

int | None

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.eigenstate" />

### eigenstate

Return the quasi-distribution sampled from the final state.

The ansatz is sampled when parameterized with the optimal parameters that where obtained computing the minimum eigenvalue. The keys represent a measured classical value and the value is a float for the quasi-probability of that result.

**Return type**

[QuasiDistribution](qiskit.result.QuasiDistribution "qiskit.result.QuasiDistribution") | None

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.eigenvalue" />

### eigenvalue

Return the approximation to the eigenvalue.

**Return type**

complex | None

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.optimal_circuit" />

### optimal\_circuit

The optimal circuits. Along with the optimal parameters, these can be used to retrieve the minimum eigenstate.

**Return type**

[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.optimal_parameters" />

### optimal\_parameters

Returns the optimal parameters in a dictionary

**Return type**

`Optional`\[`Dict`]

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.optimal_point" />

### optimal\_point

Returns optimal point

**Return type**

`Optional`\[`ndarray`]

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.optimal_value" />

### optimal\_value

Returns optimal value

**Return type**

`Optional`\[`float`]

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.optimizer_evals" />

### optimizer\_evals

Returns number of optimizer evaluations

**Return type**

`Optional`\[`int`]

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.optimizer_result" />

### optimizer\_result

Returns the optimizer result

**Return type**

`Optional`\[[`OptimizerResult`](qiskit.algorithms.optimizers.OptimizerResult "qiskit.algorithms.optimizers.optimizer.OptimizerResult")]

<span id="qiskit.algorithms.minimum_eigensolvers.SamplingVQEResult.optimizer_time" />

### optimizer\_time

Returns time taken for optimization

**Return type**

`Optional`\[`float`]

