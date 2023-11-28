# MinimumEigensolver

<span id="undefined" />

`MinimumEigensolver`

Bases: `abc.ABC`

The Minimum Eigensolver Interface.

Algorithms that can compute a minimum eigenvalue for an operator may implement this interface to allow different algorithms to be used interchangeably.

## Methods

|                                                                                                                                                                                                                                   |                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`compute_minimum_eigenvalue`](qiskit.algorithms.MinimumEigensolver.compute_minimum_eigenvalue#qiskit.algorithms.MinimumEigensolver.compute_minimum_eigenvalue "qiskit.algorithms.MinimumEigensolver.compute_minimum_eigenvalue") | Computes minimum eigenvalue.                                                 |
| [`supports_aux_operators`](qiskit.algorithms.MinimumEigensolver.supports_aux_operators#qiskit.algorithms.MinimumEigensolver.supports_aux_operators "qiskit.algorithms.MinimumEigensolver.supports_aux_operators")                 | Whether computing the expectation value of auxiliary operators is supported. |
