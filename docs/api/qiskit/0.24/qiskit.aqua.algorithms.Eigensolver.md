---
title: Eigensolver
description: API reference for qiskit.aqua.algorithms.Eigensolver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.Eigensolver
---

<span id="qiskit-aqua-algorithms-eigensolver" />

# qiskit.aqua.algorithms.Eigensolver

<span id="qiskit.aqua.algorithms.Eigensolver" />

`Eigensolver` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/aqua/algorithms/eigen_solvers/eigen_solver.py "view source code")

The Eigensolver Interface.

Algorithms that can compute eigenvalues for an operator may implement this interface to allow different algorithms to be used interchangeably.

### \_\_init\_\_

<span id="qiskit.aqua.algorithms.Eigensolver.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                        |                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.Eigensolver.__init__ "qiskit.aqua.algorithms.Eigensolver.__init__")()                                                             | Initialize self.                                                             |
| [`compute_eigenvalues`](#qiskit.aqua.algorithms.Eigensolver.compute_eigenvalues "qiskit.aqua.algorithms.Eigensolver.compute_eigenvalues")(\[operator, aux\_operators]) | Computes eigenvalues.                                                        |
| [`supports_aux_operators`](#qiskit.aqua.algorithms.Eigensolver.supports_aux_operators "qiskit.aqua.algorithms.Eigensolver.supports_aux_operators")()                   | Whether computing the expectation value of auxiliary operators is supported. |

## Attributes

|                                                                                                                         |                                  |
| ----------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`aux_operators`](#qiskit.aqua.algorithms.Eigensolver.aux_operators "qiskit.aqua.algorithms.Eigensolver.aux_operators") | Returns the auxiliary operators. |
| [`operator`](#qiskit.aqua.algorithms.Eigensolver.operator "qiskit.aqua.algorithms.Eigensolver.operator")                | Return the operator.             |

### aux\_operators

<span id="qiskit.aqua.algorithms.Eigensolver.aux_operators" />

`abstract property aux_operators`

Returns the auxiliary operators.

**Return type**

`Optional`\[`List`\[`Optional`\[`OperatorBase`]]]

### compute\_eigenvalues

<span id="qiskit.aqua.algorithms.Eigensolver.compute_eigenvalues" />

`abstract compute_eigenvalues(operator=None, aux_operators=None)`

Computes eigenvalues. Operator and aux\_operators can be supplied here and if not None will override any already set into algorithm so it can be reused with different operators. While an operator is required by algorithms, aux\_operators are optional. To ‘remove’ a previous aux\_operators array use an empty list here.

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – If not None replaces operator in algorithm
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]]]) – If not None replaces aux\_operators in algorithm

**Return type**

`EigensolverResult`

**Returns**

EigensolverResult

### operator

<span id="qiskit.aqua.algorithms.Eigensolver.operator" />

`abstract property operator`

Return the operator.

**Return type**

`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]

### supports\_aux\_operators

<span id="qiskit.aqua.algorithms.Eigensolver.supports_aux_operators" />

`classmethod supports_aux_operators()`

Whether computing the expectation value of auxiliary operators is supported.

**Return type**

`bool`

**Returns**

True if aux\_operator expectations can be evaluated, False otherwise

