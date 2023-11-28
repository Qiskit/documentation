# NumPyMinimumEigensolver

<span id="undefined" />

`NumPyMinimumEigensolver(operator=None, aux_operators=None, filter_criterion=None)`

Bases: `qiskit.aqua.algorithms.classical_algorithm.ClassicalAlgorithm`, `qiskit.aqua.algorithms.minimum_eigen_solvers.minimum_eigen_solver.MinimumEigensolver`

The Numpy Minimum Eigensolver algorithm.

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – Operator instance
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]]]) – Auxiliary operators to be evaluated at minimum eigenvalue
*   **filter\_criterion** (`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]) – callable that allows to filter eigenvalues/eigenstates. The minimum eigensolver is only searching over feasible states and returns an eigenstate that has the smallest eigenvalue among feasible states. The callable has the signature filter(eigenstate, eigenvalue, aux\_values) and must return a boolean to indicate whether to consider this value or not. If there is no feasible element, the result can even be empty.

## Methods

|                                                                                                                                                                                                                                                                 |                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`compute_minimum_eigenvalue`](qiskit.aqua.algorithms.NumPyMinimumEigensolver.compute_minimum_eigenvalue#qiskit.aqua.algorithms.NumPyMinimumEigensolver.compute_minimum_eigenvalue "qiskit.aqua.algorithms.NumPyMinimumEigensolver.compute_minimum_eigenvalue") | Computes minimum eigenvalue.                                                 |
| [`run`](qiskit.aqua.algorithms.NumPyMinimumEigensolver.run#qiskit.aqua.algorithms.NumPyMinimumEigensolver.run "qiskit.aqua.algorithms.NumPyMinimumEigensolver.run")                                                                                             | Execute the classical algorithm.                                             |
| [`supports_aux_operators`](qiskit.aqua.algorithms.NumPyMinimumEigensolver.supports_aux_operators#qiskit.aqua.algorithms.NumPyMinimumEigensolver.supports_aux_operators "qiskit.aqua.algorithms.NumPyMinimumEigensolver.supports_aux_operators")                 | Whether computing the expectation value of auxiliary operators is supported. |

## Attributes

<span id="undefined" />

### aux\_operators

**Return type**

`Optional`\[`List`\[`Optional`\[`OperatorBase`]]]

<span id="undefined" />

### filter\_criterion

returns the filter criterion if set

**Return type**

`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]

<span id="undefined" />

### operator

**Return type**

`Optional`\[`OperatorBase`]

<span id="undefined" />

### random

Return a numpy random.
