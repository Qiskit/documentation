---
title: algorithms
description: API reference for qiskit.algorithms
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.algorithms
---

<span id="module-qiskit.algorithms" />

<span id="qiskit-algorithms" />

# Algorithms

<span id="module-qiskit.algorithms" />

`qiskit.algorithms`

It contains a collection of quantum algorithms, for use with quantum computers, to carry out research and investigate how to solve problems in different domains on near-term quantum devices with short depth circuits.

Algorithms configuration includes the use of [`optimizers`](qiskit.algorithms.optimizers#module-qiskit.algorithms.optimizers "qiskit.algorithms.optimizers") which were designed to be swappable sub-parts of an algorithm. Any component and may be exchanged for a different implementation of the same component type in order to potentially alter the behavior and outcome of the algorithm.

Quantum algorithms are run via a `QuantumInstance` which must be set with the desired backend where the algorithm’s circuits will be executed and be configured with a number of compile and runtime parameters controlling circuit compilation and execution. It ultimately uses [Terra](https://www.qiskit.org/terra) for the actual compilation and execution of the quantum circuits created by the algorithm and its components.

# Algorithms

It contains a variety of quantum algorithms and these have been grouped by logical function such as minimum eigensolvers and amplitude amplifiers.

## Amplitude Amplifiers

|                                                                                                           |                                                                                            |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [`AmplificationProblem`](qiskit.algorithms.AmplificationProblem "qiskit.algorithms.AmplificationProblem") | The amplification problem is the input to amplitude amplification algorithms, like Grover. |
| [`Grover`](qiskit.algorithms.Grover "qiskit.algorithms.Grover")                                           | Grover’s Search algorithm.                                                                 |
| [`GroverResult`](qiskit.algorithms.GroverResult "qiskit.algorithms.GroverResult")                         | Grover Result.                                                                             |

## Amplitude Estimators

|                                                                                                                                                                             |                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`AmplitudeEstimator`](qiskit.algorithms.AmplitudeEstimator "qiskit.algorithms.AmplitudeEstimator")                                                                         | The Amplitude Estimation interface.                                    |
| [`AmplitudeEstimatorResult`](qiskit.algorithms.AmplitudeEstimatorResult "qiskit.algorithms.AmplitudeEstimatorResult")                                                       | The results object for amplitude estimation algorithms.                |
| [`AmplitudeEstimation`](qiskit.algorithms.AmplitudeEstimation "qiskit.algorithms.AmplitudeEstimation")                                                                      | The Quantum Phase Estimation-based Amplitude Estimation algorithm.     |
| [`AmplitudeEstimationResult`](qiskit.algorithms.AmplitudeEstimationResult "qiskit.algorithms.AmplitudeEstimationResult")                                                    | The `AmplitudeEstimation` result object.                               |
| [`EstimationProblem`](qiskit.algorithms.EstimationProblem "qiskit.algorithms.EstimationProblem")                                                                            | The estimation problem is the input to amplitude estimation algorithm. |
| [`FasterAmplitudeEstimation`](qiskit.algorithms.FasterAmplitudeEstimation "qiskit.algorithms.FasterAmplitudeEstimation")                                                    | The Faster Amplitude Estimation algorithm.                             |
| [`FasterAmplitudeEstimationResult`](qiskit.algorithms.FasterAmplitudeEstimationResult "qiskit.algorithms.FasterAmplitudeEstimationResult")                                  | The result object for the Faster Amplitude Estimation algorithm.       |
| [`IterativeAmplitudeEstimation`](qiskit.algorithms.IterativeAmplitudeEstimation "qiskit.algorithms.IterativeAmplitudeEstimation")                                           | The Iterative Amplitude Estimation algorithm.                          |
| [`IterativeAmplitudeEstimationResult`](qiskit.algorithms.IterativeAmplitudeEstimationResult "qiskit.algorithms.IterativeAmplitudeEstimationResult")                         | The `IterativeAmplitudeEstimation` result object.                      |
| [`MaximumLikelihoodAmplitudeEstimation`](qiskit.algorithms.MaximumLikelihoodAmplitudeEstimation "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimation")                   | The Maximum Likelihood Amplitude Estimation algorithm.                 |
| [`MaximumLikelihoodAmplitudeEstimationResult`](qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult") | The `MaximumLikelihoodAmplitudeEstimation` result object.              |

## Eigensolvers

Algorithms to find eigenvalues of an operator. For chemistry these can be used to find excited states of a molecule and qiskit.chemistry has some algorithms that leverage chemistry specific knowledge to do this in that application domain.

|                                                                                                  |                            |
| ------------------------------------------------------------------------------------------------ | -------------------------- |
| [`Eigensolver`](qiskit.algorithms.Eigensolver "qiskit.algorithms.Eigensolver")                   | The Eigensolver Interface. |
| [`EigensolverResult`](qiskit.algorithms.EigensolverResult "qiskit.algorithms.EigensolverResult") | Eigensolver Result.        |

|                                                                                               |                                  |
| --------------------------------------------------------------------------------------------- | -------------------------------- |
| [`NumPyEigensolver`](qiskit.algorithms.NumPyEigensolver "qiskit.algorithms.NumPyEigensolver") | The NumPy Eigensolver algorithm. |

## Factorizers

Algorithms to find factors of a number.

|                                                                             |                             |
| --------------------------------------------------------------------------- | --------------------------- |
| [`Shor`](qiskit.algorithms.Shor "qiskit.algorithms.Shor")                   | Shor’s factoring algorithm. |
| [`ShorResult`](qiskit.algorithms.ShorResult "qiskit.algorithms.ShorResult") | Shor Result.                |

## Linear Solvers

Algorithms to solve linear systems of equations.

|                                                                                                     |                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HHL`](qiskit.algorithms.HHL "qiskit.algorithms.HHL")                                              | Systems of linear equations arise naturally in many real-life applications in a wide range of areas, such as in the solution of Partial Differential Equations, the calibration of financial models, fluid simulation or numerical field calculation. |
| [`NumPyLinearSolver`](qiskit.algorithms.NumPyLinearSolver "qiskit.algorithms.NumPyLinearSolver")    | The Numpy Linear Solver algorithm (classical).                                                                                                                                                                                                        |
| [`LinearSolver`](qiskit.algorithms.LinearSolver "qiskit.algorithms.LinearSolver")                   | An abstract class for linear system solvers in Qiskit.                                                                                                                                                                                                |
| [`LinearSolverResult`](qiskit.algorithms.LinearSolverResult "qiskit.algorithms.LinearSolverResult") | A base class for linear systems results.                                                                                                                                                                                                              |

## Minimum Eigensolvers

Algorithms that can find the minimum eigenvalue of an operator.

|                                                                                                                       |                                    |
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`MinimumEigensolver`](qiskit.algorithms.MinimumEigensolver "qiskit.algorithms.MinimumEigensolver")                   | The Minimum Eigensolver Interface. |
| [`MinimumEigensolverResult`](qiskit.algorithms.MinimumEigensolverResult "qiskit.algorithms.MinimumEigensolverResult") | Minimum Eigensolver Result.        |

|                                                                                                                    |                                                 |
| ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| [`NumPyMinimumEigensolver`](qiskit.algorithms.NumPyMinimumEigensolver "qiskit.algorithms.NumPyMinimumEigensolver") | The Numpy Minimum Eigensolver algorithm.        |
| [`QAOA`](qiskit.algorithms.QAOA "qiskit.algorithms.QAOA")                                                          | The Quantum Approximate Optimization Algorithm. |
| [`VQE`](qiskit.algorithms.VQE "qiskit.algorithms.VQE")                                                             | The Variational Quantum Eigensolver algorithm.  |

## Optimizers

Classical optimizers for use by quantum variational algorithms.

|                                                                                                                 |                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| [`optimizers`](qiskit.algorithms.optimizers#module-qiskit.algorithms.optimizers "qiskit.algorithms.optimizers") | Optimizers ([`qiskit.algorithms.optimizers`](qiskit.algorithms.optimizers#module-qiskit.algorithms.optimizers "qiskit.algorithms.optimizers")) |

## Phase Estimators

Algorithms that estimate the phases of eigenstates of a unitary.

|                                                                                                                                               |                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HamiltonianPhaseEstimation`](qiskit.algorithms.HamiltonianPhaseEstimation "qiskit.algorithms.HamiltonianPhaseEstimation")                   | Run the Quantum Phase Estimation algorithm to find the eigenvalues of a Hermitian operator.                                                                     |
| [`HamiltonianPhaseEstimationResult`](qiskit.algorithms.HamiltonianPhaseEstimationResult "qiskit.algorithms.HamiltonianPhaseEstimationResult") | Store and manipulate results from running HamiltonianPhaseEstimation.                                                                                           |
| [`PhaseEstimationScale`](qiskit.algorithms.PhaseEstimationScale "qiskit.algorithms.PhaseEstimationScale")                                     | Set and use a bound on eigenvalues of a Hermitian operator in order to ensure phases are in the desired range and to convert measured phases into eigenvectors. |
| [`PhaseEstimation`](qiskit.algorithms.PhaseEstimation "qiskit.algorithms.PhaseEstimation")                                                    | Run the Quantum Phase Estimation (QPE) algorithm.                                                                                                               |
| [`PhaseEstimationResult`](qiskit.algorithms.PhaseEstimationResult "qiskit.algorithms.PhaseEstimationResult")                                  | Store and manipulate results from running PhaseEstimation.                                                                                                      |

# Exceptions

|                                                                                                    |                                |
| -------------------------------------------------------------------------------------------------- | ------------------------------ |
| [`AlgorithmError`](qiskit.algorithms.AlgorithmError "qiskit.algorithms.AlgorithmError")(\*message) | For Algorithm specific errors. |

