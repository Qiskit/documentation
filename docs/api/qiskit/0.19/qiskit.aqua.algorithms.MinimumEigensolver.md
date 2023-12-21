---
title: MinimumEigensolver
description: API reference for qiskit.aqua.algorithms.MinimumEigensolver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.MinimumEigensolver
---

# MinimumEigensolver

<span id="qiskit.aqua.algorithms.MinimumEigensolver" />

`MinimumEigensolver`

The Minimum Eigensolver Interface.

Algorithms that can compute a minimum eigenvalue for an operator may implement this interface to allow different algorithms to be used interchangeably.

## Attributes

|                                                                                                                                                         |                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`MinimumEigensolver.aux_operators`](qiskit.aqua.algorithms.MinimumEigensolver.aux_operators "qiskit.aqua.algorithms.MinimumEigensolver.aux_operators") | Returns the auxiliary operators. |
| [`MinimumEigensolver.operator`](qiskit.aqua.algorithms.MinimumEigensolver.operator "qiskit.aqua.algorithms.MinimumEigensolver.operator")                | Return the operator.             |

## Methods

|                                                                                                                                                                                                      |                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`MinimumEigensolver.compute_minimum_eigenvalue`](qiskit.aqua.algorithms.MinimumEigensolver.compute_minimum_eigenvalue "qiskit.aqua.algorithms.MinimumEigensolver.compute_minimum_eigenvalue")(\[…]) | Computes minimum eigenvalue.                                                 |
| [`MinimumEigensolver.supports_aux_operators`](qiskit.aqua.algorithms.MinimumEigensolver.supports_aux_operators "qiskit.aqua.algorithms.MinimumEigensolver.supports_aux_operators")()                 | Whether computing the expectation value of auxiliary operators is supported. |

