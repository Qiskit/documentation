# qiskit.aqua.algorithms.Eigensolver

<span id="undefined" />

`Eigensolver`

The Eigensolver Interface.

Algorithms that can compute eigenvalues for an operator may implement this interface to allow different algorithms to be used interchangeably.

<span id="undefined" />

`abstract __init__()`

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

<span id="undefined" />

`abstract property aux_operators`

Returns the auxiliary operators.

**Return type**

`Optional`\[`List`\[`Optional`\[`OperatorBase`]]]

<span id="undefined" />

`abstract compute_eigenvalues(operator=None, aux_operators=None)`

Computes eigenvalues. Operator and aux\_operators can be supplied here and if not None will override any already set into algorithm so it can be reused with different operators. While an operator is required by algorithms, aux\_operators are optional. To ‘remove’ a previous aux\_operators array use an empty list here.

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – If not None replaces operator in algorithm
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]]]) – If not None replaces aux\_operators in algorithm

**Return type**

`EigensolverResult`

**Returns**

EigensolverResult

<span id="undefined" />

`abstract property operator`

Return the operator.

**Return type**

`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]

<span id="undefined" />

`classmethod supports_aux_operators()`

Whether computing the expectation value of auxiliary operators is supported.

**Return type**

`bool`

**Returns**

True if aux\_operator expectations can be evaluated, False otherwise
