---
title: NumPyMinimumEigensolver
description: API reference for qiskit.aqua.algorithms.NumPyMinimumEigensolver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.NumPyMinimumEigensolver
---

# NumPyMinimumEigensolver

<span id="qiskit.aqua.algorithms.NumPyMinimumEigensolver" />

`NumPyMinimumEigensolver(operator=None, aux_operators=None)`

The Numpy Minimum Eigensolver algorithm.

**Parameters**

*   **operator** (`Union`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), [`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator"), `None`]) – Operator instance
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), [`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator"), `None`]]]) – Auxiliary operators to be evaluated at minimum eigenvalue

## Attributes

|                                                                                                                                                                        |                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`NumPyMinimumEigensolver.aux_operators`](qiskit.aqua.algorithms.NumPyMinimumEigensolver.aux_operators "qiskit.aqua.algorithms.NumPyMinimumEigensolver.aux_operators") | Returns the auxiliary operators. |
| [`NumPyMinimumEigensolver.operator`](qiskit.aqua.algorithms.NumPyMinimumEigensolver.operator "qiskit.aqua.algorithms.NumPyMinimumEigensolver.operator")                | Return the operator.             |
| [`NumPyMinimumEigensolver.random`](qiskit.aqua.algorithms.NumPyMinimumEigensolver.random "qiskit.aqua.algorithms.NumPyMinimumEigensolver.random")                      | Return a numpy random.           |

## Methods

|                                                                                                                                                                                                                     |                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`NumPyMinimumEigensolver.compute_minimum_eigenvalue`](qiskit.aqua.algorithms.NumPyMinimumEigensolver.compute_minimum_eigenvalue "qiskit.aqua.algorithms.NumPyMinimumEigensolver.compute_minimum_eigenvalue")(\[…]) | Computes minimum eigenvalue.                                                 |
| [`NumPyMinimumEigensolver.run`](qiskit.aqua.algorithms.NumPyMinimumEigensolver.run "qiskit.aqua.algorithms.NumPyMinimumEigensolver.run")()                                                                          | Execute the classical algorithm.                                             |
| [`NumPyMinimumEigensolver.supports_aux_operators`](qiskit.aqua.algorithms.NumPyMinimumEigensolver.supports_aux_operators "qiskit.aqua.algorithms.NumPyMinimumEigensolver.supports_aux_operators")()                 | Whether computing the expectation value of auxiliary operators is supported. |

