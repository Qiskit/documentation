---
title: MinimumEigensolver
description: API reference for qiskit.aqua.algorithms.MinimumEigensolver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.MinimumEigensolver
---

# MinimumEigensolver

<span id="qiskit.aqua.algorithms.MinimumEigensolver" />

`MinimumEigensolver` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/algorithms/minimum_eigen_solvers/minimum_eigen_solver.py "view source code")

The Minimum Eigensolver Interface.

Algorithms that can compute a minimum eigenvalue for an operator may implement this interface to allow different algorithms to be used interchangeably.

## Attributes

### aux\_operators

<span id="qiskit.aqua.algorithms.MinimumEigensolver.aux_operators" />

`abstract property : Optional[List[Optional[qiskit.aqua.operators.operator_base.OperatorBase]]]`

Returns the auxiliary operators.

**Return type**

`Optional`\[`List`\[`Optional`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")]]]

### operator

<span id="qiskit.aqua.algorithms.MinimumEigensolver.operator" />

`abstract property : Optional[Union[qiskit.aqua.operators.operator_base.OperatorBase, qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator]]`

Return the operator.

**Return type**

`Union`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), [`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator"), `None`]

## Methods

### compute\_minimum\_eigenvalue

<span id="qiskit.aqua.algorithms.MinimumEigensolver.compute_minimum_eigenvalue" />

`abstract MinimumEigensolver.compute_minimum_eigenvalue(operator=None, aux_operators=None)`

Computes minimum eigenvalue. Operator and aux\_operators can be supplied here and if not None will override any already set into algorithm so it can be reused with different operators. While an operator is required by algorithms, aux\_operators are optional. To ‘remove’ a previous aux\_operators array use an empty list here.

**Parameters**

*   **operator** (`Union`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), [`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator"), `None`]) – If not None replaces operator in algorithm
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), [`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator"), `None`]]]) – If not None replaces aux\_operators in algorithm

**Return type**

[`MinimumEigensolverResult`](qiskit.aqua.algorithms.MinimumEigensolverResult "qiskit.aqua.algorithms.minimum_eigen_solvers.minimum_eigen_solver.MinimumEigensolverResult")

**Returns**

MinimumEigensolverResult

### supports\_aux\_operators

<span id="qiskit.aqua.algorithms.MinimumEigensolver.supports_aux_operators" />

`MinimumEigensolver.supports_aux_operators()`

Whether computing the expectation value of auxiliary operators is supported.

If the minimum eigensolver computes an eigenstate of the main operator then it can compute the expectation value of the aux\_operators for that state. Otherwise they will be ignored.

**Return type**

`bool`

**Returns**

True if aux\_operator expectations can be evaluated, False otherwise

