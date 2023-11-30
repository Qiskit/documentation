# NumPyEigensolver

<span id="undefined" />

`NumPyEigensolver(operator=None, k=1, aux_operators=None, filter_criterion=None)`

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

|                                                                                                                                                                                                                            |                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`compute_eigenvalues`](qiskit.aqua.algorithms.NumPyEigensolver.compute_eigenvalues#qiskit.aqua.algorithms.NumPyEigensolver.compute_eigenvalues "qiskit.aqua.algorithms.NumPyEigensolver.compute_eigenvalues")             | Computes eigenvalues.                                                        |
| [`run`](qiskit.aqua.algorithms.NumPyEigensolver.run#qiskit.aqua.algorithms.NumPyEigensolver.run "qiskit.aqua.algorithms.NumPyEigensolver.run")                                                                             | Execute the classical algorithm.                                             |
| [`supports_aux_operators`](qiskit.aqua.algorithms.NumPyEigensolver.supports_aux_operators#qiskit.aqua.algorithms.NumPyEigensolver.supports_aux_operators "qiskit.aqua.algorithms.NumPyEigensolver.supports_aux_operators") | Whether computing the expectation value of auxiliary operators is supported. |

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

### k

returns k (number of eigenvalues requested)

**Return type**

`int`

<span id="undefined" />

### operator

**Return type**

`Optional`\[`OperatorBase`]

<span id="undefined" />

### random

Return a numpy random.
