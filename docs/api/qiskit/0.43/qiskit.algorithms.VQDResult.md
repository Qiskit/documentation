---
title: VQDResult
description: API reference for qiskit.algorithms.VQDResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.VQDResult
---

# VQDResult

<span id="qiskit.algorithms.VQDResult" />

`VQDResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/algorithms/eigen_solvers/vqd.py "view source code")

Bases: `VariationalResult`, [`EigensolverResult`](qiskit.algorithms.EigensolverResult "qiskit.algorithms.eigen_solvers.eigen_solver.EigensolverResult")

Deprecated: VQD Result.

The VQDResult class has been superseded by the [`qiskit.algorithms.eigensolvers.VQDResult`](qiskit.algorithms.eigensolvers.VQDResult "qiskit.algorithms.eigensolvers.VQDResult") class. This class will be deprecated in a future release and subsequently removed after that.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.algorithms.eigen_solvers.vqd.VQDResult` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. Instead, use the class `qiskit.algorithms.eigensolvers.VQDResult`.See [https://qisk.it/algo\_migration](https://qisk.it/algo_migration) for a migration guide.
</Admonition>

## Methods

<span id="qiskit-algorithms-vqdresult-combine" />

### combine

<span id="qiskit.algorithms.VQDResult.combine" />

`VQDResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

## Attributes

<span id="qiskit.algorithms.VQDResult.aux_operator_eigenvalues" />

### aux\_operator\_eigenvalues

Return aux operator expectation values.

These values are in fact tuples formatted as (mean, standard deviation).

<span id="qiskit.algorithms.VQDResult.cost_function_evals" />

### cost\_function\_evals

Returns number of cost optimizer evaluations

<span id="qiskit.algorithms.VQDResult.eigenstates" />

### eigenstates

return eigen state

<span id="qiskit.algorithms.VQDResult.eigenvalues" />

### eigenvalues

returns eigen values

<span id="qiskit.algorithms.VQDResult.optimal_circuit" />

### optimal\_circuit

The optimal circuits. Along with the optimal parameters, these can be used to retrieve the minimum eigenstate.

<span id="qiskit.algorithms.VQDResult.optimal_parameters" />

### optimal\_parameters

Returns the optimal parameters in a dictionary

<span id="qiskit.algorithms.VQDResult.optimal_point" />

### optimal\_point

Returns optimal point

<span id="qiskit.algorithms.VQDResult.optimal_value" />

### optimal\_value

Returns optimal value

<span id="qiskit.algorithms.VQDResult.optimizer_evals" />

### optimizer\_evals

Returns number of optimizer evaluations

<span id="qiskit.algorithms.VQDResult.optimizer_result" />

### optimizer\_result

Returns the optimizer result

<span id="qiskit.algorithms.VQDResult.optimizer_time" />

### optimizer\_time

Returns time taken for optimization

