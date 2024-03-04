---
title: NumPyEigensolver
description: API reference for qiskit.aqua.algorithms.NumPyEigensolver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.NumPyEigensolver
---

# NumPyEigensolver

<span id="qiskit.aqua.algorithms.NumPyEigensolver" />

`NumPyEigensolver(operator=None, k=1, aux_operators=None, filter_criterion=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/algorithms/eigen_solvers/numpy_eigen_solver.py "view source code")

Bases: `qiskit.aqua.algorithms.classical_algorithm.ClassicalAlgorithm`, `qiskit.aqua.algorithms.eigen_solvers.eigen_solver.Eigensolver`

The NumPy Eigensolver algorithm.

NumPy Eigensolver computes up to the first $k$ eigenvalues of a complex-valued square matrix of dimension $n \times n$, with $k \leq n$.

<Admonition title="Note" type="note">
  Operators are automatically converted to `MatrixOperator` as needed and this conversion can be costly in terms of memory and performance as the operator size, mostly in terms of number of qubits it represents, gets larger.
</Admonition>

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – Operator instance. If None is supplied it must be provided later before run() is called. Allowing None here permits the algorithm to be configured and used later when operator is available, say creating an instance an letting application stack use this algorithm with an operator it creates.
*   **k** (`int`) – How many eigenvalues are to be computed, has a min. value of 1.
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]]]) – Auxiliary operators to be evaluated at each eigenvalue
*   **filter\_criterion** (`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]) – callable that allows to filter eigenvalues/eigenstates, only feasible eigenstates are returned in the results. The callable has the signature filter(eigenstate, eigenvalue, aux\_values) and must return a boolean to indicate whether to keep this value in the final returned result or not. If the number of elements that satisfies the criterion is smaller than k then the returned list has fewer elements and can even be empty.

## Methods

### compute\_eigenvalues

<span id="qiskit.aqua.algorithms.NumPyEigensolver.compute_eigenvalues" />

`NumPyEigensolver.compute_eigenvalues(operator=None, aux_operators=None)`

Computes eigenvalues. Operator and aux\_operators can be supplied here and if not None will override any already set into algorithm so it can be reused with different operators. While an operator is required by algorithms, aux\_operators are optional. To ‘remove’ a previous aux\_operators array use an empty list here.

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – If not None replaces operator in algorithm
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]]]) – If not None replaces aux\_operators in algorithm

**Return type**

`EigensolverResult`

**Returns**

EigensolverResult

### run

<span id="qiskit.aqua.algorithms.NumPyEigensolver.run" />

`NumPyEigensolver.run()`

Execute the classical algorithm.

**Returns**

results of an algorithm.

**Return type**

dict

### supports\_aux\_operators

<span id="qiskit.aqua.algorithms.NumPyEigensolver.supports_aux_operators" />

`classmethod NumPyEigensolver.supports_aux_operators()`

Whether computing the expectation value of auxiliary operators is supported.

**Return type**

`bool`

**Returns**

True if aux\_operator expectations can be evaluated, False otherwise

## Attributes

<span id="qiskit.aqua.algorithms.NumPyEigensolver.aux_operators" />

### aux\_operators

**Return type**

`Optional`\[`List`\[`Optional`\[`OperatorBase`]]]

<span id="qiskit.aqua.algorithms.NumPyEigensolver.filter_criterion" />

### filter\_criterion

returns the filter criterion if set

**Return type**

`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]

<span id="qiskit.aqua.algorithms.NumPyEigensolver.k" />

### k

returns k (number of eigenvalues requested)

**Return type**

`int`

<span id="qiskit.aqua.algorithms.NumPyEigensolver.operator" />

### operator

**Return type**

`Optional`\[`OperatorBase`]

<span id="qiskit.aqua.algorithms.NumPyEigensolver.random" />

### random

Return a numpy random.

