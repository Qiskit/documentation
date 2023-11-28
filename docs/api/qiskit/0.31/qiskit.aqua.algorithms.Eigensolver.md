# Eigensolver

<span id="undefined" />

`Eigensolver`

Bases: `abc.ABC`

The Eigensolver Interface.

Algorithms that can compute eigenvalues for an operator may implement this interface to allow different algorithms to be used interchangeably.

## Methods

|                                                                                                                                                                                                             |                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`compute_eigenvalues`](qiskit.aqua.algorithms.Eigensolver.compute_eigenvalues#qiskit.aqua.algorithms.Eigensolver.compute_eigenvalues "qiskit.aqua.algorithms.Eigensolver.compute_eigenvalues")             | Computes eigenvalues.                                                        |
| [`supports_aux_operators`](qiskit.aqua.algorithms.Eigensolver.supports_aux_operators#qiskit.aqua.algorithms.Eigensolver.supports_aux_operators "qiskit.aqua.algorithms.Eigensolver.supports_aux_operators") | Whether computing the expectation value of auxiliary operators is supported. |

## Attributes

<span id="undefined" />

### aux\_operators

Returns the auxiliary operators.

**Return type**

`Optional`\[`List`\[`Optional`\[`OperatorBase`]]]

<span id="undefined" />

### operator

Return the operator.

**Return type**

`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]
