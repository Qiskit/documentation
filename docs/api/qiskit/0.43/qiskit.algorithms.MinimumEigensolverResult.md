---
title: MinimumEigensolverResult
description: API reference for qiskit.algorithms.MinimumEigensolverResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.MinimumEigensolverResult
---

# MinimumEigensolverResult

<span id="qiskit.algorithms.MinimumEigensolverResult" />

`MinimumEigensolverResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/algorithms/minimum_eigen_solvers/minimum_eigen_solver.py "view source code")

Bases: `AlgorithmResult`

Deprecated: Minimum Eigensolver Result.

The MinimumEigensolverResult class has been superseded by the [`qiskit.algorithms.minimum_eigensolvers.MinimumEigensolverResult`](qiskit.algorithms.minimum_eigensolvers.MinimumEigensolverResult "qiskit.algorithms.minimum_eigensolvers.MinimumEigensolverResult") class. This class will be deprecated in a future release and subsequently removed after that.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.algorithms.minimum_eigen_solvers.minimum_eigen_solver.MinimumEigensolverResult` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. Instead, use the class `qiskit.algorithms.minimum_eigensolvers.MinimumEigensolverResult`. See [https://qisk.it/algo\_migration](https://qisk.it/algo_migration) for a migration guide.
</Admonition>

## Methods

<span id="qiskit-algorithms-minimumeigensolverresult-combine" />

### combine

<span id="qiskit.algorithms.MinimumEigensolverResult.combine" />

`MinimumEigensolverResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

## Attributes

<span id="qiskit.algorithms.MinimumEigensolverResult.aux_operator_eigenvalues" />

### aux\_operator\_eigenvalues

Return aux operator expectation values.

These values are in fact tuples formatted as (mean, standard deviation).

<span id="qiskit.algorithms.MinimumEigensolverResult.eigenstate" />

### eigenstate

return eigen state

<span id="qiskit.algorithms.MinimumEigensolverResult.eigenvalue" />

### eigenvalue

returns eigen value

