---
title: gradients
description: API reference for qiskit.algorithms.gradients
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.algorithms.gradients
---

<span id="module-qiskit.algorithms.gradients" />

<span id="qiskit-algorithms-gradients" />

# qiskit.algorithms.gradients

<span id="gradients-qiskit-algorithms-gradients" />

## Gradients

<span id="module-qiskit.algorithms.gradients" />

`qiskit.algorithms.gradients`

### Base Classes

|                                                                                                                                                                  |                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [`BaseEstimatorGradient`](qiskit.algorithms.gradients.BaseEstimatorGradient "qiskit.algorithms.gradients.BaseEstimatorGradient")(estimator\[, options, ...])     | Base class for an `EstimatorGradient` to compute the gradients of the expectation value.             |
| [`BaseQGT`](qiskit.algorithms.gradients.BaseQGT "qiskit.algorithms.gradients.BaseQGT")(estimator\[, phase\_fix, ...])                                            | Base class to computes the Quantum Geometric Tensor (QGT) given a pure, parameterized quantum state. |
| [`BaseSamplerGradient`](qiskit.algorithms.gradients.BaseSamplerGradient "qiskit.algorithms.gradients.BaseSamplerGradient")(sampler\[, options])                  | Base class for a `SamplerGradient` to compute the gradients of the sampling probability.             |
| [`EstimatorGradientResult`](qiskit.algorithms.gradients.EstimatorGradientResult "qiskit.algorithms.gradients.EstimatorGradientResult")(gradients, metadata, ...) | Result of EstimatorGradient.                                                                         |
| [`SamplerGradientResult`](qiskit.algorithms.gradients.SamplerGradientResult "qiskit.algorithms.gradients.SamplerGradientResult")(gradients, metadata, ...)       | Result of SamplerGradient.                                                                           |
| [`QGTResult`](qiskit.algorithms.gradients.QGTResult "qiskit.algorithms.gradients.QGTResult")(qgts, derivative\_type, metadata, ...)                              | Result of QGT.                                                                                       |

### Finite Differences

|                                                                                                                                                                        |                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`FiniteDiffEstimatorGradient`](qiskit.algorithms.gradients.FiniteDiffEstimatorGradient "qiskit.algorithms.gradients.FiniteDiffEstimatorGradient")(estimator, epsilon) | Compute the gradients of the expectation values by finite difference method \[1].   |
| [`FiniteDiffSamplerGradient`](qiskit.algorithms.gradients.FiniteDiffSamplerGradient "qiskit.algorithms.gradients.FiniteDiffSamplerGradient")(sampler, epsilon)         | Compute the gradients of the sampling probability by finite difference method \[1]. |

### Linear Combination of Unitaries

|                                                                                                                                                              |                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| [`LinCombEstimatorGradient`](qiskit.algorithms.gradients.LinCombEstimatorGradient "qiskit.algorithms.gradients.LinCombEstimatorGradient")(estimator\[, ...]) | Compute the gradients of the expectation values.                                       |
| [`LinCombSamplerGradient`](qiskit.algorithms.gradients.LinCombSamplerGradient "qiskit.algorithms.gradients.LinCombSamplerGradient")(sampler\[, options])     | Compute the gradients of the sampling probability.                                     |
| [`LinCombQGT`](qiskit.algorithms.gradients.LinCombQGT "qiskit.algorithms.gradients.LinCombQGT")(estimator\[, phase\_fix, ...])                               | Computes the Quantum Geometric Tensor (QGT) given a pure, parameterized quantum state. |

### Parameter Shift Rules

|                                                                                                                                                                       |                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`ParamShiftEstimatorGradient`](qiskit.algorithms.gradients.ParamShiftEstimatorGradient "qiskit.algorithms.gradients.ParamShiftEstimatorGradient")(estimator\[, ...]) | Compute the gradients of the expectation values by the parameter shift rule \[1].   |
| [`ParamShiftSamplerGradient`](qiskit.algorithms.gradients.ParamShiftSamplerGradient "qiskit.algorithms.gradients.ParamShiftSamplerGradient")(sampler\[, options])     | Compute the gradients of the sampling probability by the parameter shift rule \[1]. |

### Quantum Fisher Information

|                                                                                                                       |                                                                                          |
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [`QFIResult`](qiskit.algorithms.gradients.QFIResult "qiskit.algorithms.gradients.QFIResult")(qfis, metadata, options) | Result of QFI.                                                                           |
| [`QFI`](qiskit.algorithms.gradients.QFI "qiskit.algorithms.gradients.QFI")(qgt\[, options])                           | Computes the Quantum Fisher Information (QFI) given a pure, parameterized quantum state. |

### Classical Methods

|                                                                                                                                                                |                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [`ReverseEstimatorGradient`](qiskit.algorithms.gradients.ReverseEstimatorGradient "qiskit.algorithms.gradients.ReverseEstimatorGradient")(\[derivative\_type]) | Estimator gradients with the classically efficient reverse mode. |
| [`ReverseQGT`](qiskit.algorithms.gradients.ReverseQGT "qiskit.algorithms.gradients.ReverseQGT")(\[phase\_fix, derivative\_type])                               | QGT calculation with the classically efficient reverse mode.     |

### Simultaneous Perturbation Stochastic Approximation

|                                                                                                                                                              |                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| [`SPSAEstimatorGradient`](qiskit.algorithms.gradients.SPSAEstimatorGradient "qiskit.algorithms.gradients.SPSAEstimatorGradient")(estimator, epsilon\[, ...]) | Compute the gradients of the expectation value by the Simultaneous Perturbation Stochastic Approximation (SPSA) \[1].    |
| [`SPSASamplerGradient`](qiskit.algorithms.gradients.SPSASamplerGradient "qiskit.algorithms.gradients.SPSASamplerGradient")(sampler, epsilon\[, ...])         | Compute the gradients of the sampling probability by the Simultaneous Perturbation Stochastic Approximation (SPSA) \[1]. |

