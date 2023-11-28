# NumPyEigensolverFactory

<span id="undefined" />

`NumPyEigensolverFactory(filter_criterion=None, k=100, use_default_filter_criterion=False)`

Bases: `qiskit.chemistry.algorithms.excited_states_solvers.eigensolver_factories.eigensolver_factory.EigensolverFactory`

A factory to construct a NumPyEigensolver.

**Parameters**

*   **filter\_criterion** (`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]) – callable that allows to filter eigenvalues/eigenstates. The minimum eigensolver is only searching over feasible states and returns an eigenstate that has the smallest eigenvalue among feasible states. The callable has the signature filter(eigenstate, eigenvalue, aux\_values) and must return a boolean to indicate whether to consider this value or not. If there is no feasible element, the result can even be empty.
*   **use\_default\_filter\_criterion** (`bool`) – Whether to use default filter criteria or not
*   **k** (`int`) – How many eigenvalues are to be computed, has a min. value of 1.
*   **use\_default\_filter\_criterion** – whether to use the transformation’s default filter criterion if `filter_criterion` is `None`.

## Methods

|                                                                                                                                                                                                                |                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [`get_solver`](qiskit.chemistry.algorithms.NumPyEigensolverFactory.get_solver#qiskit.chemistry.algorithms.NumPyEigensolverFactory.get_solver "qiskit.chemistry.algorithms.NumPyEigensolverFactory.get_solver") | Returns a NumPyEigensolver with the desired filter |

## Attributes

<span id="undefined" />

### filter\_criterion

returns filter criterion

**Return type**

`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]

<span id="undefined" />

### k

returns k (number of eigenvalues requested)

**Return type**

`int`

<span id="undefined" />

### use\_default\_filter\_criterion

returns whether to use the default filter criterion

**Return type**

`bool`
