# qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult

<span id="undefined" />

`MaximumLikelihoodAmplitudeEstimationResult`

The `MaximumLikelihoodAmplitudeEstimation` result object.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                   |                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.__init__ "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.__init__")()    | Initialize self.                                                       |
| [`combine`](#qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.combine "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.combine")(result) | Any property from the argument that exists in the receiver is updated. |

## Attributes

|                                                                                                                                                                                                                             |                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`circuit_results`](#qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.circuit_results "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.circuit_results")                                           | Return the circuit results.                                                         |
| [`confidence_interval`](#qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.confidence_interval "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.confidence_interval")                               | Return the confidence interval for the amplitude (95% interval by default).         |
| [`confidence_interval_processed`](#qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.confidence_interval_processed "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.confidence_interval_processed") | Return the post-processed confidence interval (95% interval by default).            |
| [`estimation`](#qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.estimation "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.estimation")                                                          | Return the estimation for the amplitude in $[0, 1]$.                                |
| [`estimation_processed`](#qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.estimation_processed "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.estimation_processed")                            | Return the estimation for the amplitude after the post-processing has been applied. |
| [`evaluation_schedule`](#qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.evaluation_schedule "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.evaluation_schedule")                               | Return the evaluation schedule for the powers of the Grover operator.               |
| [`fisher_information`](#qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.fisher_information "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.fisher_information")                                  | Return the Fisher information for the estimated amplitude.                          |
| [`good_counts`](#qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.good_counts "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.good_counts")                                                       | Return the percentage of good counts per circuit power.                             |
| [`minimizer`](#qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.minimizer "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.minimizer")                                                             | Return the minimizer used for the search of the likelihood function.                |
| [`num_oracle_queries`](#qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.num_oracle_queries "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.num_oracle_queries")                                  | Return the number of Grover oracle queries.                                         |
| [`post_processing`](#qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.post_processing "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.post_processing")                                           | Return a handle to the post processing function.                                    |
| [`shots`](#qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.shots "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.shots")                                                                         | Return the number of shots used.                                                    |
| [`theta`](#qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.theta "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.theta")                                                                         | Return the estimate for the angle $\theta$.                                         |

<span id="undefined" />

`property circuit_results`

Return the circuit results. Can be a statevector or counts dictionary.

**Return type**

`Union`\[`ndarray`, `Dict`\[`str`, `int`], `None`]

<span id="undefined" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

<span id="undefined" />

`property confidence_interval`

Return the confidence interval for the amplitude (95% interval by default).

**Return type**

`Tuple`\[`float`, `float`]

<span id="undefined" />

`property confidence_interval_processed`

Return the post-processed confidence interval (95% interval by default).

**Return type**

`Tuple`\[`float`, `float`]

<span id="undefined" />

`property estimation`

Return the estimation for the amplitude in $[0, 1]$.

**Return type**

`float`

<span id="undefined" />

`property estimation_processed`

Return the estimation for the amplitude after the post-processing has been applied.

**Return type**

`float`

<span id="undefined" />

`property evaluation_schedule`

Return the evaluation schedule for the powers of the Grover operator.

**Return type**

`List`\[`int`]

<span id="undefined" />

`property fisher_information`

Return the Fisher information for the estimated amplitude.

**Return type**

`float`

<span id="undefined" />

`property good_counts`

Return the percentage of good counts per circuit power.

**Return type**

`List`\[`float`]

<span id="undefined" />

`property minimizer`

Return the minimizer used for the search of the likelihood function.

**Return type**

`callable`

<span id="undefined" />

`property num_oracle_queries`

Return the number of Grover oracle queries.

**Return type**

`int`

<span id="undefined" />

`property post_processing`

Return a handle to the post processing function.

**Return type**

`Callable`\[\[`float`], `float`]

<span id="undefined" />

`property shots`

Return the number of shots used. Is 1 for statevector-based simulations.

**Return type**

`int`

<span id="undefined" />

`property theta`

Return the estimate for the angle $\theta$.

**Return type**

`float`
