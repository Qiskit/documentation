# qiskit.chemistry.algorithms.NumPyEigensolverFactory

<span id="undefined" />

`NumPyEigensolverFactory(filter_criterion=None, k=100, use_default_filter_criterion=False)`

A factory to construct a NumPyEigensolver.

**Parameters**

*   **filter\_criterion** (`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]) – callable that allows to filter eigenvalues/eigenstates. The minimum eigensolver is only searching over feasible states and returns an eigenstate that has the smallest eigenvalue among feasible states. The callable has the signature filter(eigenstate, eigenvalue, aux\_values) and must return a boolean to indicate whether to consider this value or not. If there is no feasible element, the result can even be empty.
*   **use\_default\_filter\_criterion** (`bool`) – Whether to use default filter criteria or not
*   **k** (`int`) – How many eigenvalues are to be computed, has a min. value of 1.
*   **use\_default\_filter\_criterion** – whether to use the transformation’s default filter criterion if `filter_criterion` is `None`.

<span id="undefined" />

`__init__(filter_criterion=None, k=100, use_default_filter_criterion=False)`

**Parameters**

*   **filter\_criterion** (`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]) – callable that allows to filter eigenvalues/eigenstates. The minimum eigensolver is only searching over feasible states and returns an eigenstate that has the smallest eigenvalue among feasible states. The callable has the signature filter(eigenstate, eigenvalue, aux\_values) and must return a boolean to indicate whether to consider this value or not. If there is no feasible element, the result can even be empty.
*   **use\_default\_filter\_criterion** (`bool`) – Whether to use default filter criteria or not
*   **k** (`int`) – How many eigenvalues are to be computed, has a min. value of 1.
*   **use\_default\_filter\_criterion** – whether to use the transformation’s default filter criterion if `filter_criterion` is `None`.

## Methods

|                                                                                                                                                                        |                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.algorithms.NumPyEigensolverFactory.__init__ "qiskit.chemistry.algorithms.NumPyEigensolverFactory.__init__")(\[filter\_criterion, k, …]) | **type filter\_criterion**`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]] |
| [`get_solver`](#qiskit.chemistry.algorithms.NumPyEigensolverFactory.get_solver "qiskit.chemistry.algorithms.NumPyEigensolverFactory.get_solver")(transformation)       | Returns a NumPyEigensolver with the desired filter                                                                                 |

## Attributes

|                                                                                                                                                                                                        |                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| [`filter_criterion`](#qiskit.chemistry.algorithms.NumPyEigensolverFactory.filter_criterion "qiskit.chemistry.algorithms.NumPyEigensolverFactory.filter_criterion")                                     | returns filter criterion                            |
| [`k`](#qiskit.chemistry.algorithms.NumPyEigensolverFactory.k "qiskit.chemistry.algorithms.NumPyEigensolverFactory.k")                                                                                  | returns k (number of eigenvalues requested)         |
| [`use_default_filter_criterion`](#qiskit.chemistry.algorithms.NumPyEigensolverFactory.use_default_filter_criterion "qiskit.chemistry.algorithms.NumPyEigensolverFactory.use_default_filter_criterion") | returns whether to use the default filter criterion |

<span id="undefined" />

`property filter_criterion`

returns filter criterion

**Return type**

`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]

<span id="undefined" />

`get_solver(transformation)`

Returns a NumPyEigensolver with the desired filter

**Parameters**

**transformation** (`Transformation`) – a fermionic/bosonic qubit operator transformation.

**Return type**

`Eigensolver`

**Returns**

A NumPyEigensolver suitable to compute the ground state of the molecule transformed by `transformation`.

<span id="undefined" />

`property k`

returns k (number of eigenvalues requested)

**Return type**

`int`

<span id="undefined" />

`property use_default_filter_criterion`

returns whether to use the default filter criterion

**Return type**

`bool`
