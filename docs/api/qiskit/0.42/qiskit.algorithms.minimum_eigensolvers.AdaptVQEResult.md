---
title: AdaptVQEResult
description: API reference for qiskit.algorithms.minimum_eigensolvers.AdaptVQEResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.minimum_eigensolvers.AdaptVQEResult
---

# AdaptVQEResult

<span id="qiskit.algorithms.minimum_eigensolvers.AdaptVQEResult" />

`AdaptVQEResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/algorithms/minimum_eigensolvers/adapt_vqe.py "view source code")

Bases: [`qiskit.algorithms.minimum_eigensolvers.vqe.VQEResult`](qiskit.algorithms.minimum_eigensolvers.VQEResult "qiskit.algorithms.minimum_eigensolvers.vqe.VQEResult")

AdaptVQE Result.

## Methods

### combine

<span id="qiskit.algorithms.minimum_eigensolvers.AdaptVQEResult.combine" />

`AdaptVQEResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

## Attributes

<span id="qiskit.algorithms.minimum_eigensolvers.AdaptVQEResult.aux_operators_evaluated" />

### aux\_operators\_evaluated

The aux operator expectation values.

These values are in fact tuples formatted as (mean, (variance, shots)).

<span id="qiskit.algorithms.minimum_eigensolvers.AdaptVQEResult.cost_function_evals" />

### cost\_function\_evals

The number of cost optimizer evaluations.

**Return type**

int | None

<span id="qiskit.algorithms.minimum_eigensolvers.AdaptVQEResult.eigenvalue" />

### eigenvalue

The computed minimum eigenvalue.

**Return type**

complex | None

<span id="qiskit.algorithms.minimum_eigensolvers.AdaptVQEResult.eigenvalue_history" />

### eigenvalue\_history

Returns the history of computed eigenvalues.

The history’s length matches the number of iterations and includes the final computed value.

<span id="qiskit.algorithms.minimum_eigensolvers.AdaptVQEResult.final_max_gradient" />

### final\_max\_gradient

Returns the final maximum gradient.

**Return type**

`float`

<span id="qiskit.algorithms.minimum_eigensolvers.AdaptVQEResult.num_iterations" />

### num\_iterations

Returns the number of iterations.

**Return type**

`int`

<span id="qiskit.algorithms.minimum_eigensolvers.AdaptVQEResult.optimal_circuit" />

### optimal\_circuit

The optimal circuits. Along with the optimal parameters, these can be used to retrieve the minimum eigenstate.

**Return type**

[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")

<span id="qiskit.algorithms.minimum_eigensolvers.AdaptVQEResult.optimal_parameters" />

### optimal\_parameters

Returns the optimal parameters in a dictionary

**Return type**

`Optional`\[`Dict`]

<span id="qiskit.algorithms.minimum_eigensolvers.AdaptVQEResult.optimal_point" />

### optimal\_point

Returns optimal point

**Return type**

`Optional`\[`ndarray`]

<span id="qiskit.algorithms.minimum_eigensolvers.AdaptVQEResult.optimal_value" />

### optimal\_value

Returns optimal value

**Return type**

`Optional`\[`float`]

<span id="qiskit.algorithms.minimum_eigensolvers.AdaptVQEResult.optimizer_evals" />

### optimizer\_evals

Returns number of optimizer evaluations

**Return type**

`Optional`\[`int`]

<span id="qiskit.algorithms.minimum_eigensolvers.AdaptVQEResult.optimizer_result" />

### optimizer\_result

Returns the optimizer result

**Return type**

`Optional`\[[`OptimizerResult`](qiskit.algorithms.optimizers.OptimizerResult "qiskit.algorithms.optimizers.optimizer.OptimizerResult")]

<span id="qiskit.algorithms.minimum_eigensolvers.AdaptVQEResult.optimizer_time" />

### optimizer\_time

Returns time taken for optimization

**Return type**

`Optional`\[`float`]

<span id="qiskit.algorithms.minimum_eigensolvers.AdaptVQEResult.termination_criterion" />

### termination\_criterion

Returns the termination criterion.

**Return type**

`str`

