<span id="qiskit-algorithms-gradients" />

# qiskit.algorithms.gradients[¶](#module-qiskit.algorithms.gradients "Permalink to this headline")

## Gradients ([`qiskit.algorithms.gradients`](#module-qiskit.algorithms.gradients "qiskit.algorithms.gradients"))[¶](#gradients-qiskit-algorithms-gradients "Permalink to this headline")

### Base Classes[¶](#base-classes "Permalink to this headline")

|                                                                                                                                                         |                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [`BaseSamplerGradient`](qiskit.algorithms.gradients.BaseSamplerGradient "qiskit.algorithms.gradients.BaseSamplerGradient")(sampler\[, options])         | Base class for a `SamplerGradient` to compute the gradients of the sampling probability. |
| [`BaseEstimatorGradient`](qiskit.algorithms.gradients.BaseEstimatorGradient "qiskit.algorithms.gradients.BaseEstimatorGradient")(estimator\[, options]) | Base class for an `EstimatorGradient` to compute the gradients of the expectation value. |

### Estimator Gradients[¶](#estimator-gradients "Permalink to this headline")

|                                                                                                                                                                            |                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`FiniteDiffEstimatorGradient`](qiskit.algorithms.gradients.FiniteDiffEstimatorGradient "qiskit.algorithms.gradients.FiniteDiffEstimatorGradient")(estimator, ...)         | Compute the gradients of the expectation values by finite difference method.                                     |
| [`LinCombEstimatorGradient`](qiskit.algorithms.gradients.LinCombEstimatorGradient "qiskit.algorithms.gradients.LinCombEstimatorGradient")(estimator, \*\*options)          | Compute the gradients of the expectation values.                                                                 |
| [`ParamShiftEstimatorGradient`](qiskit.algorithms.gradients.ParamShiftEstimatorGradient "qiskit.algorithms.gradients.ParamShiftEstimatorGradient")(estimator, \*\*options) | Compute the gradients of the expectation values by the parameter shift rule                                      |
| [`SPSAEstimatorGradient`](qiskit.algorithms.gradients.SPSAEstimatorGradient "qiskit.algorithms.gradients.SPSAEstimatorGradient")(estimator, epsilon\[, ...])               | Compute the gradients of the expectation value by the Simultaneous Perturbation Stochastic Approximation (SPSA). |

### Sampler Gradients[¶](#sampler-gradients "Permalink to this headline")

|                                                                                                                                                                     |                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [`FiniteDiffSamplerGradient`](qiskit.algorithms.gradients.FiniteDiffSamplerGradient "qiskit.algorithms.gradients.FiniteDiffSamplerGradient")(sampler, epsilon, ...) | Compute the gradients of the sampling probability by finite difference method.                                      |
| [`LinCombSamplerGradient`](qiskit.algorithms.gradients.LinCombSamplerGradient "qiskit.algorithms.gradients.LinCombSamplerGradient")(sampler, \*\*options)           | Compute the gradients of the sampling probability.                                                                  |
| [`ParamShiftSamplerGradient`](qiskit.algorithms.gradients.ParamShiftSamplerGradient "qiskit.algorithms.gradients.ParamShiftSamplerGradient")(sampler, \*\*options)  | Compute the gradients of the sampling probability by the parameter shift rule.                                      |
| [`SPSASamplerGradient`](qiskit.algorithms.gradients.SPSASamplerGradient "qiskit.algorithms.gradients.SPSASamplerGradient")(sampler, epsilon\[, ...])                | Compute the gradients of the sampling probability by the Simultaneous Perturbation Stochastic Approximation (SPSA). |

### Results[¶](#results "Permalink to this headline")

|                                                                                                                                                                  |                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| [`EstimatorGradientResult`](qiskit.algorithms.gradients.EstimatorGradientResult "qiskit.algorithms.gradients.EstimatorGradientResult")(gradients, metadata, ...) | Result of EstimatorGradient. |
| [`SamplerGradientResult`](qiskit.algorithms.gradients.SamplerGradientResult "qiskit.algorithms.gradients.SamplerGradientResult")(gradients, metadata, ...)       | Result of SamplerGradient.   |
