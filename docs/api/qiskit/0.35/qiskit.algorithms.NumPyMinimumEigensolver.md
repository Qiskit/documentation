# NumPyMinimumEigensolver

<span id="undefined" />

`NumPyMinimumEigensolver(filter_criterion=None)`

Bases: `qiskit.algorithms.minimum_eigen_solvers.minimum_eigen_solver.MinimumEigensolver`

The Numpy Minimum Eigensolver algorithm.

**Parameters**

**filter\_criterion** (`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Union`\[`List`\[`Optional`\[`float`]], `Dict`\[`str`, `float`], `None`]], `bool`]]) – callable that allows to filter eigenvalues/eigenstates. The minimum eigensolver is only searching over feasible states and returns an eigenstate that has the smallest eigenvalue among feasible states. The callable has the signature filter(eigenstate, eigenvalue, aux\_values) and must return a boolean to indicate whether to consider this value or not. If there is no feasible element, the result can even be empty.

## Methods

|                                                                                                                                                                                                                                                  |                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| [`compute_minimum_eigenvalue`](qiskit.algorithms.NumPyMinimumEigensolver.compute_minimum_eigenvalue#qiskit.algorithms.NumPyMinimumEigensolver.compute_minimum_eigenvalue "qiskit.algorithms.NumPyMinimumEigensolver.compute_minimum_eigenvalue") | Computes minimum eigenvalue.                                                 |
| [`supports_aux_operators`](qiskit.algorithms.NumPyMinimumEigensolver.supports_aux_operators#qiskit.algorithms.NumPyMinimumEigensolver.supports_aux_operators "qiskit.algorithms.NumPyMinimumEigensolver.supports_aux_operators")                 | Whether computing the expectation value of auxiliary operators is supported. |

## Attributes

<span id="undefined" />

### filter\_criterion

returns the filter criterion if set

**Return type**

`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Union`\[`List`\[`Optional`\[`float`]], `Dict`\[`str`, `float`], `None`]], `bool`]]
