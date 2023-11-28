<span id="qiskit-aqua-algorithms-numpyminimumeigensolver" />

# qiskit.aqua.algorithms.NumPyMinimumEigensolver

<span id="undefined" />

`NumPyMinimumEigensolver(operator=None, aux_operators=None, filter_criterion=None)`

The Numpy Minimum Eigensolver algorithm.

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – Operator instance
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]]]) – Auxiliary operators to be evaluated at minimum eigenvalue
*   **filter\_criterion** (`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]) – callable that allows to filter eigenvalues/eigenstates. The minimum eigensolver is only searching over feasible states and returns an eigenstate that has the smallest eigenvalue among feasible states. The callable has the signature filter(eigenstate, eigenvalue, aux\_values) and must return a boolean to indicate whether to consider this value or not. If there is no feasible element, the result can even be empty.

<span id="undefined" />

`__init__(operator=None, aux_operators=None, filter_criterion=None)`

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – Operator instance
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]]]) – Auxiliary operators to be evaluated at minimum eigenvalue
*   **filter\_criterion** (`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]) – callable that allows to filter eigenvalues/eigenstates. The minimum eigensolver is only searching over feasible states and returns an eigenstate that has the smallest eigenvalue among feasible states. The callable has the signature filter(eigenstate, eigenvalue, aux\_values) and must return a boolean to indicate whether to consider this value or not. If there is no feasible element, the result can even be empty.

## Methods

|                                                                                                                                                                                                        |                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.NumPyMinimumEigensolver.__init__ "qiskit.aqua.algorithms.NumPyMinimumEigensolver.__init__")(\[operator, aux\_operators, …])                                       | **type operator**`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]      |
| [`compute_minimum_eigenvalue`](#qiskit.aqua.algorithms.NumPyMinimumEigensolver.compute_minimum_eigenvalue "qiskit.aqua.algorithms.NumPyMinimumEigensolver.compute_minimum_eigenvalue")(\[operator, …]) | Computes minimum eigenvalue.                                                 |
| [`run`](#qiskit.aqua.algorithms.NumPyMinimumEigensolver.run "qiskit.aqua.algorithms.NumPyMinimumEigensolver.run")()                                                                                    | Execute the classical algorithm.                                             |
| [`supports_aux_operators`](#qiskit.aqua.algorithms.NumPyMinimumEigensolver.supports_aux_operators "qiskit.aqua.algorithms.NumPyMinimumEigensolver.supports_aux_operators")()                           | Whether computing the expectation value of auxiliary operators is supported. |

## Attributes

|                                                                                                                                                          |                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`aux_operators`](#qiskit.aqua.algorithms.NumPyMinimumEigensolver.aux_operators "qiskit.aqua.algorithms.NumPyMinimumEigensolver.aux_operators")          | Returns the auxiliary operators.    |
| [`filter_criterion`](#qiskit.aqua.algorithms.NumPyMinimumEigensolver.filter_criterion "qiskit.aqua.algorithms.NumPyMinimumEigensolver.filter_criterion") | returns the filter criterion if set |
| [`operator`](#qiskit.aqua.algorithms.NumPyMinimumEigensolver.operator "qiskit.aqua.algorithms.NumPyMinimumEigensolver.operator")                         | Return the operator.                |
| [`random`](#qiskit.aqua.algorithms.NumPyMinimumEigensolver.random "qiskit.aqua.algorithms.NumPyMinimumEigensolver.random")                               | Return a numpy random.              |

<span id="undefined" />

`property aux_operators`

Returns the auxiliary operators.

**Return type**

`Optional`\[`List`\[`Optional`\[`OperatorBase`]]]

<span id="undefined" />

`compute_minimum_eigenvalue(operator=None, aux_operators=None)`

Computes minimum eigenvalue. Operator and aux\_operators can be supplied here and if not None will override any already set into algorithm so it can be reused with different operators. While an operator is required by algorithms, aux\_operators are optional. To ‘remove’ a previous aux\_operators array use an empty list here.

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – If not None replaces operator in algorithm
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]]]) – If not None replaces aux\_operators in algorithm

**Return type**

`MinimumEigensolverResult`

**Returns**

MinimumEigensolverResult

<span id="undefined" />

`property filter_criterion`

returns the filter criterion if set

**Return type**

`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]

<span id="undefined" />

`property operator`

Return the operator.

**Return type**

`Optional`\[`OperatorBase`]

<span id="undefined" />

`property random`

Return a numpy random.

<span id="undefined" />

`run()`

Execute the classical algorithm.

**Returns**

results of an algorithm.

**Return type**

dict

<span id="undefined" />

`classmethod supports_aux_operators()`

Whether computing the expectation value of auxiliary operators is supported.

If the minimum eigensolver computes an eigenstate of the main operator then it can compute the expectation value of the aux\_operators for that state. Otherwise they will be ignored.

**Return type**

`bool`

**Returns**

True if aux\_operator expectations can be evaluated, False otherwise
