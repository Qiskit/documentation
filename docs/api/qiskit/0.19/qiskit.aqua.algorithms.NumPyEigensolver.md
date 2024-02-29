---
title: NumPyEigensolver
description: API reference for qiskit.aqua.algorithms.NumPyEigensolver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.NumPyEigensolver
---

# NumPyEigensolver

<span id="qiskit.aqua.algorithms.NumPyEigensolver" />

`NumPyEigensolver(operator=None, k=1, aux_operators=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/algorithms/eigen_solvers/numpy_eigen_solver.py "view source code")

The NumPy Eigensolver algorithm.

NumPy Eigensolver computes up to the first $k$ eigenvalues of a complex-valued square matrix of dimension $n \times n$, with $k \leq n$.

<Admonition title="Note" type="note">
  Operators are automatically converted to `MatrixOperator` as needed and this conversion can be costly in terms of memory and performance as the operator size, mostly in terms of number of qubits it represents, gets larger.
</Admonition>

**Parameters**

*   **operator** (`Union`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), [`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator"), `None`]) – Operator instance. If None is supplied it must be provided later before run() is called. Allowing None here permits the algorithm to be configured and used later when operator is available, say creating an instance an letting application stack use this algorithm with an operator it creates.
*   **k** (`int`) – How many eigenvalues are to be computed, has a min. value of 1.
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), [`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator"), `None`]]]) – Auxiliary operators to be evaluated at each eigenvalue

## Attributes

### aux\_operators

<span id="qiskit.aqua.algorithms.NumPyEigensolver.aux_operators" />

`Optional[List[Optional[qiskit.aqua.operators.operator_base.OperatorBase]]]`

returns aux operators

**Return type**

`Optional`\[`List`\[`Optional`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")]]]

### k

<span id="qiskit.aqua.algorithms.NumPyEigensolver.k" />

`int`

returns k (number of eigenvalues requested)

**Return type**

`int`

### operator

<span id="qiskit.aqua.algorithms.NumPyEigensolver.operator" />

`Optional[qiskit.aqua.operators.operator_base.OperatorBase]`

returns operator

**Return type**

`Optional`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")]

### random

Return a numpy random.

## Methods

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

`NumPyEigensolver.supports_aux_operators()`

If will process auxiliary operators or not

**Return type**

`bool`

