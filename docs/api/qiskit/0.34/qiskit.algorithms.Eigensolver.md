# Eigensolver[¶](#eigensolver "Permalink to this headline")

<span id="undefined" />

`Eigensolver`

Bases: `abc.ABC`

The Eigensolver Interface.

Algorithms that can compute eigenvalues for an operator may implement this interface to allow different algorithms to be used interchangeably.

## Methods

|                                                                                                                                                                                              |                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`compute_eigenvalues`](qiskit.algorithms.Eigensolver.compute_eigenvalues#qiskit.algorithms.Eigensolver.compute_eigenvalues "qiskit.algorithms.Eigensolver.compute_eigenvalues")             | Computes eigenvalues.                                                        |
| [`supports_aux_operators`](qiskit.algorithms.Eigensolver.supports_aux_operators#qiskit.algorithms.Eigensolver.supports_aux_operators "qiskit.algorithms.Eigensolver.supports_aux_operators") | Whether computing the expectation value of auxiliary operators is supported. |
