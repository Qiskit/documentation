---
title: VQEResult
description: API reference for qiskit.algorithms.minimum_eigensolvers.VQEResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.minimum_eigensolvers.VQEResult
---

# VQEResult

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult" />

`VQEResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/algorithms/minimum_eigensolvers/vqe.py "view source code")

Bases: `qiskit.algorithms.variational_algorithm.VariationalResult`, [`qiskit.algorithms.minimum_eigensolvers.minimum_eigensolver.MinimumEigensolverResult`](qiskit.algorithms.minimum_eigensolvers.MinimumEigensolverResult "qiskit.algorithms.minimum_eigensolvers.minimum_eigensolver.MinimumEigensolverResult")

Variational quantum eigensolver result.

## Methods

### combine

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.combine" />

`VQEResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

## Attributes

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.aux_operators_evaluated" />

### aux\_operators\_evaluated

The aux operator expectation values.

These values are in fact tuples formatted as (mean, (variance, shots)).

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.cost_function_evals" />

### cost\_function\_evals

The number of cost optimizer evaluations.

**Return type**

int | None

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.eigenvalue" />

### eigenvalue

The computed minimum eigenvalue.

**Return type**

complex | None

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.optimal_circuit" />

### optimal\_circuit

The optimal circuits. Along with the optimal parameters, these can be used to retrieve the minimum eigenstate.

**Return type**

[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.optimal_parameters" />

### optimal\_parameters

Returns the optimal parameters in a dictionary

**Return type**

`Optional`\[`Dict`]

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.optimal_point" />

### optimal\_point

Returns optimal point

**Return type**

`Optional`\[`ndarray`]

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.optimal_value" />

### optimal\_value

Returns optimal value

**Return type**

`Optional`\[`float`]

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.optimizer_evals" />

### optimizer\_evals

Returns number of optimizer evaluations

**Return type**

`Optional`\[`int`]

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.optimizer_result" />

### optimizer\_result

Returns the optimizer result

**Return type**

`Optional`\[[`OptimizerResult`](qiskit.algorithms.optimizers.OptimizerResult "qiskit.algorithms.optimizers.optimizer.OptimizerResult")]

<span id="qiskit.algorithms.minimum_eigensolvers.VQEResult.optimizer_time" />

### optimizer\_time

Returns time taken for optimization

**Return type**

`Optional`\[`float`]

