---
title: algorithms
description: API reference for qiskit.aqua.algorithms
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.aqua.algorithms
---

<span id="module-qiskit.aqua.algorithms" />

<span id="qiskit-aqua-algorithms" />

# Algorithms

<span id="module-qiskit.aqua.algorithms" />

`qiskit.aqua.algorithms`

Aqua contains a collection of quantum algorithms, for use with quantum computers, to carry out research and investigate how to solve problems in different domains on near-term quantum devices with short depth circuits.

Algorithms configuration includes the use of [`components`](qiskit.aqua.components#module-qiskit.aqua.components "qiskit.aqua.components") which were designed to be swappable sub-parts of an algorithm. Any component and may be exchanged for a different implementation of the same component type in order to potentially alter the behavior and outcome of the algorithm.

Quantum algorithms are run via a [`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance") which must be set with the desired backend where the algorithm’s circuits will be executed and be configured with a number of compile and runtime parameters controlling circuit compilation and execution. Aqua ultimately uses [Terra](https://www.qiskit.org/terra) for the actual compilation and execution of the quantum circuits created by the algorithm and its components.

# Algorithms Base Class

|                                                                                                               |                                      |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [`QuantumAlgorithm`](qiskit.aqua.algorithms.QuantumAlgorithm "qiskit.aqua.algorithms.QuantumAlgorithm")       | Base class for Quantum Algorithms.   |
| [`ClassicalAlgorithm`](qiskit.aqua.algorithms.ClassicalAlgorithm "qiskit.aqua.algorithms.ClassicalAlgorithm") | Base class for Classical Algorithms. |

# Algorithms

Aqua contains a variety of quantum algorithms and these have been grouped by logical function such as minimum eigensolvers and amplitude amplifiers.

Additionally Aqua includes some classical algorithms. While these algorithms do not use a quantum device or simulator, and rely on purely classical approaches, they may be useful in the near term to generate reference values while experimenting with, developing and testing quantum algorithms.

The classical algorithms are designed to take the same input data as the quantum algorithms so that behavior, data validity and output can be evaluated and compared to a quantum result.

## Amplitude Amplifiers

|                                                                                             |                            |
| ------------------------------------------------------------------------------------------- | -------------------------- |
| [`Grover`](qiskit.aqua.algorithms.Grover "qiskit.aqua.algorithms.Grover")                   | Grover’s Search algorithm. |
| [`GroverResult`](qiskit.aqua.algorithms.GroverResult "qiskit.aqua.algorithms.GroverResult") | Grover Result.             |

## Amplitude Estimators

Algorithms that estimate a value.

|                                                                                                                                                                                       |                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`AmplitudeEstimationAlgorithmResult`](qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult")                         | AmplitudeEstimationAlgorithm Result.                               |
| [`AmplitudeEstimation`](qiskit.aqua.algorithms.AmplitudeEstimation "qiskit.aqua.algorithms.AmplitudeEstimation")                                                                      | The Quantum Phase Estimation-based Amplitude Estimation algorithm. |
| [`AmplitudeEstimationResult`](qiskit.aqua.algorithms.AmplitudeEstimationResult "qiskit.aqua.algorithms.AmplitudeEstimationResult")                                                    | AmplitudeEstimation Result.                                        |
| [`IterativeAmplitudeEstimation`](qiskit.aqua.algorithms.IterativeAmplitudeEstimation "qiskit.aqua.algorithms.IterativeAmplitudeEstimation")                                           | The Iterative Amplitude Estimation algorithm.                      |
| [`IterativeAmplitudeEstimationResult`](qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult")                         | IterativeAmplitudeEstimation Result.                               |
| [`MaximumLikelihoodAmplitudeEstimation`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation")                   | The Maximum Likelihood Amplitude Estimation algorithm.             |
| [`MaximumLikelihoodAmplitudeEstimationResult`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult") | MaximumLikelihoodAmplitudeEstimation Result.                       |

## Classifiers

Algorithms for data classification.

|                                                                                       |                                               |
| ------------------------------------------------------------------------------------- | --------------------------------------------- |
| [`QSVM`](qiskit.aqua.algorithms.QSVM "qiskit.aqua.algorithms.QSVM")                   | Quantum SVM algorithm.                        |
| [`VQC`](qiskit.aqua.algorithms.VQC "qiskit.aqua.algorithms.VQC")                      | The Variational Quantum Classifier algorithm. |
| [`SklearnSVM`](qiskit.aqua.algorithms.SklearnSVM "qiskit.aqua.algorithms.SklearnSVM") | The Sklearn SVM algorithm (classical).        |

## Distribution Learners

|                                                                     |                                                       |
| ------------------------------------------------------------------- | ----------------------------------------------------- |
| [`QGAN`](qiskit.aqua.algorithms.QGAN "qiskit.aqua.algorithms.QGAN") | The Quantum Generative Adversarial Network algorithm. |

## Education

Algorithms whose main role is educational. These are provided as Aqua algorithms so they can be run in the same framework but their existence here is principally for educational reasons.

|                                                                                                            |                                                       |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`BernsteinVazirani`](qiskit.aqua.algorithms.BernsteinVazirani "qiskit.aqua.algorithms.BernsteinVazirani") | The Bernstein-Vazirani algorithm.                     |
| [`DeutschJozsa`](qiskit.aqua.algorithms.DeutschJozsa "qiskit.aqua.algorithms.DeutschJozsa")                | The Deutsch-Jozsa algorithm.                          |
| [`EOH`](qiskit.aqua.algorithms.EOH "qiskit.aqua.algorithms.EOH")                                           | The Quantum EOH (Evolution of Hamiltonian) algorithm. |
| [`Simon`](qiskit.aqua.algorithms.Simon "qiskit.aqua.algorithms.Simon")                                     | The Simon algorithm.                                  |

## Eigensolvers

Algorithms to find eigenvalues of an operator. For chemistry these can be used to find excited states of a molecule and qiskit.chemistry has some algorithms that leverage chemistry specific knowledge to do this in that application domain.

|                                                                                                            |                            |
| ---------------------------------------------------------------------------------------------------------- | -------------------------- |
| [`Eigensolver`](qiskit.aqua.algorithms.Eigensolver "qiskit.aqua.algorithms.Eigensolver")                   | The Eigensolver Interface. |
| [`EigensolverResult`](qiskit.aqua.algorithms.EigensolverResult "qiskit.aqua.algorithms.EigensolverResult") | Eigensolver Result.        |

|                                                                                                         |                                  |
| ------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`NumPyEigensolver`](qiskit.aqua.algorithms.NumPyEigensolver "qiskit.aqua.algorithms.NumPyEigensolver") | The NumPy Eigensolver algorithm. |

## Factorizers

Algorithms to find factors of a number.

|                                                                     |                             |
| ------------------------------------------------------------------- | --------------------------- |
| [`Shor`](qiskit.aqua.algorithms.Shor "qiskit.aqua.algorithms.Shor") | Shor’s factoring algorithm. |

## Linear Solvers

Algorithms to find solutions for linear equations of equations.

|                                                                                                                  |                                               |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| [`LinearsolverResult`](qiskit.aqua.algorithms.LinearsolverResult "qiskit.aqua.algorithms.LinearsolverResult")    | Linear solver Result.                         |
| [`HHL`](qiskit.aqua.algorithms.HHL "qiskit.aqua.algorithms.HHL")                                                 | The HHL algorithm.                            |
| [`HHLResult`](qiskit.aqua.algorithms.HHLResult "qiskit.aqua.algorithms.HHLResult")                               | HHL Result.                                   |
| [`NumPyLSsolver`](qiskit.aqua.algorithms.NumPyLSsolver "qiskit.aqua.algorithms.NumPyLSsolver")                   | The Numpy LinearSystem algorithm (classical). |
| [`NumPyLSsolverResult`](qiskit.aqua.algorithms.NumPyLSsolverResult "qiskit.aqua.algorithms.NumPyLSsolverResult") | Numpy LinearSystem Result.                    |

## Minimum Eigensolvers

Algorithms that can find the minimum eigenvalue of an operator.

Note: The [`ClassicalCPLEX`](qiskit.aqua.algorithms.ClassicalCPLEX "qiskit.aqua.algorithms.ClassicalCPLEX") algorithm requires [IBM ILOG CPLEX Optimization Studio](https://www.ibm.com/support/knowledgecenter/SSSA5P_12.10.0/COS_KC_home.html) and its Python API to be installed. See the following for more information:

*   [CPLEX Installation](qiskit.aqua.algorithms.minimum_eigen_solvers.cplex)

|                                                                                                                                 |                                    |
| ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`MinimumEigensolver`](qiskit.aqua.algorithms.MinimumEigensolver "qiskit.aqua.algorithms.MinimumEigensolver")                   | The Minimum Eigensolver Interface. |
| [`MinimumEigensolverResult`](qiskit.aqua.algorithms.MinimumEigensolverResult "qiskit.aqua.algorithms.MinimumEigensolverResult") | Minimum Eigensolver Result.        |

|                                                                                                                              |                                                   |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [`ClassicalCPLEX`](qiskit.aqua.algorithms.ClassicalCPLEX "qiskit.aqua.algorithms.ClassicalCPLEX")                            | The Classical CPLEX algorithm (classical).        |
| [`IQPE`](qiskit.aqua.algorithms.IQPE "qiskit.aqua.algorithms.IQPE")                                                          | The Iterative Quantum Phase Estimation algorithm. |
| [`NumPyMinimumEigensolver`](qiskit.aqua.algorithms.NumPyMinimumEigensolver "qiskit.aqua.algorithms.NumPyMinimumEigensolver") | The Numpy Minimum Eigensolver algorithm.          |
| [`QAOA`](qiskit.aqua.algorithms.QAOA "qiskit.aqua.algorithms.QAOA")                                                          | The Quantum Approximate Optimization Algorithm.   |
| [`QPE`](qiskit.aqua.algorithms.QPE "qiskit.aqua.algorithms.QPE")                                                             | The Quantum Phase Estimation algorithm.           |
| [`VQE`](qiskit.aqua.algorithms.VQE "qiskit.aqua.algorithms.VQE")                                                             | The Variational Quantum Eigensolver algorithm.    |

