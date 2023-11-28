# qiskit.aqua.algorithms.MinimumEigensolver

<span id="undefined" />

`MinimumEigensolver`

The Minimum Eigensolver Interface.

Algorithms that can compute a minimum eigenvalue for an operator may implement this interface to allow different algorithms to be used interchangeably.

<span id="undefined" />

`abstract __init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                                              |                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.MinimumEigensolver.__init__ "qiskit.aqua.algorithms.MinimumEigensolver.__init__")()                                                                     | Initialize self.                                                             |
| [`compute_minimum_eigenvalue`](#qiskit.aqua.algorithms.MinimumEigensolver.compute_minimum_eigenvalue "qiskit.aqua.algorithms.MinimumEigensolver.compute_minimum_eigenvalue")(\[operator, …]) | Computes minimum eigenvalue.                                                 |
| [`supports_aux_operators`](#qiskit.aqua.algorithms.MinimumEigensolver.supports_aux_operators "qiskit.aqua.algorithms.MinimumEigensolver.supports_aux_operators")()                           | Whether computing the expectation value of auxiliary operators is supported. |

## Attributes

|                                                                                                                                       |                                  |
| ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`aux_operators`](#qiskit.aqua.algorithms.MinimumEigensolver.aux_operators "qiskit.aqua.algorithms.MinimumEigensolver.aux_operators") | Returns the auxiliary operators. |
| [`operator`](#qiskit.aqua.algorithms.MinimumEigensolver.operator "qiskit.aqua.algorithms.MinimumEigensolver.operator")                | Return the operator.             |

<span id="undefined" />

`abstract property aux_operators`

Returns the auxiliary operators.

**Return type**

`Optional`\[`List`\[`Optional`\[`OperatorBase`]]]

<span id="undefined" />

`abstract compute_minimum_eigenvalue(operator=None, aux_operators=None)`

Computes minimum eigenvalue. Operator and aux\_operators can be supplied here and if not None will override any already set into algorithm so it can be reused with different operators. While an operator is required by algorithms, aux\_operators are optional. To ‘remove’ a previous aux\_operators array use an empty list here.

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – If not None replaces operator in algorithm
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]]]) – If not None replaces aux\_operators in algorithm

**Return type**

`MinimumEigensolverResult`

**Returns**

MinimumEigensolverResult

<span id="undefined" />

`abstract property operator`

Return the operator.

**Return type**

`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]

<span id="undefined" />

`classmethod supports_aux_operators()`

Whether computing the expectation value of auxiliary operators is supported.

If the minimum eigensolver computes an eigenstate of the main operator then it can compute the expectation value of the aux\_operators for that state. Otherwise they will be ignored.

**Return type**

`bool`

**Returns**

True if aux\_operator expectations can be evaluated, False otherwise
