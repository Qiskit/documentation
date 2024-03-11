---
title: NumPyMinimumEigensolver
description: API reference for qiskit.aqua.algorithms.NumPyMinimumEigensolver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.NumPyMinimumEigensolver
---

# NumPyMinimumEigensolver

<span id="qiskit.aqua.algorithms.NumPyMinimumEigensolver" />

`NumPyMinimumEigensolver(operator=None, aux_operators=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/algorithms/minimum_eigen_solvers/numpy_minimum_eigen_solver.py "view source code")

The Numpy Minimum Eigensolver algorithm.

**Parameters**

*   **operator** (`Union`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), [`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator"), `None`]) – Operator instance
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), [`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator"), `None`]]]) – Auxiliary operators to be evaluated at minimum eigenvalue

## Attributes

### aux\_operators

<span id="qiskit.aqua.algorithms.NumPyMinimumEigensolver.aux_operators" />

`Optional[List[Optional[qiskit.aqua.operators.operator_base.OperatorBase]]]`

Returns the auxiliary operators.

**Return type**

`Optional`\[`List`\[`Optional`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")]]]

### operator

<span id="qiskit.aqua.algorithms.NumPyMinimumEigensolver.operator" />

`Optional[qiskit.aqua.operators.operator_base.OperatorBase]`

Return the operator.

**Return type**

`Optional`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")]

### random

Return a numpy random.

## Methods

### compute\_minimum\_eigenvalue

<span id="qiskit.aqua.algorithms.NumPyMinimumEigensolver.compute_minimum_eigenvalue" />

`NumPyMinimumEigensolver.compute_minimum_eigenvalue(operator=None, aux_operators=None)`

Computes minimum eigenvalue. Operator and aux\_operators can be supplied here and if not None will override any already set into algorithm so it can be reused with different operators. While an operator is required by algorithms, aux\_operators are optional. To ‘remove’ a previous aux\_operators array use an empty list here.

**Parameters**

*   **operator** (`Union`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), [`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator"), `None`]) – If not None replaces operator in algorithm
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), [`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator"), `None`]]]) – If not None replaces aux\_operators in algorithm

**Return type**

[`MinimumEigensolverResult`](qiskit.aqua.algorithms.MinimumEigensolverResult "qiskit.aqua.algorithms.minimum_eigen_solvers.minimum_eigen_solver.MinimumEigensolverResult")

**Returns**

MinimumEigensolverResult

### run

<span id="qiskit.aqua.algorithms.NumPyMinimumEigensolver.run" />

`NumPyMinimumEigensolver.run()`

Execute the classical algorithm.

**Returns**

results of an algorithm.

**Return type**

dict

### supports\_aux\_operators

<span id="qiskit.aqua.algorithms.NumPyMinimumEigensolver.supports_aux_operators" />

`NumPyMinimumEigensolver.supports_aux_operators()`

Whether computing the expectation value of auxiliary operators is supported.

If the minimum eigensolver computes an eigenstate of the main operator then it can compute the expectation value of the aux\_operators for that state. Otherwise they will be ignored.

**Return type**

`bool`

**Returns**

True if aux\_operator expectations can be evaluated, False otherwise

