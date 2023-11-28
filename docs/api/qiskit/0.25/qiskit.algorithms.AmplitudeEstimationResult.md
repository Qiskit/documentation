# qiskit.algorithms.AmplitudeEstimationResult

<span id="undefined" />

`AmplitudeEstimationResult`

The `AmplitudeEstimation` result object.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                 |                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.AmplitudeEstimationResult.__init__ "qiskit.algorithms.AmplitudeEstimationResult.__init__")()    | Initialize self.                                                       |
| [`combine`](#qiskit.algorithms.AmplitudeEstimationResult.combine "qiskit.algorithms.AmplitudeEstimationResult.combine")(result) | Any property from the argument that exists in the receiver is updated. |

## Attributes

|                                                                                                                                                                                           |                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`circuit_results`](#qiskit.algorithms.AmplitudeEstimationResult.circuit_results "qiskit.algorithms.AmplitudeEstimationResult.circuit_results")                                           | Return the circuit results.                                                         |
| [`confidence_interval`](#qiskit.algorithms.AmplitudeEstimationResult.confidence_interval "qiskit.algorithms.AmplitudeEstimationResult.confidence_interval")                               | Return the confidence interval for the amplitude (95% interval by default).         |
| [`confidence_interval_processed`](#qiskit.algorithms.AmplitudeEstimationResult.confidence_interval_processed "qiskit.algorithms.AmplitudeEstimationResult.confidence_interval_processed") | Return the post-processed confidence interval (95% interval by default).            |
| [`estimation`](#qiskit.algorithms.AmplitudeEstimationResult.estimation "qiskit.algorithms.AmplitudeEstimationResult.estimation")                                                          | Return the estimation for the amplitude in $[0, 1]$.                                |
| [`estimation_processed`](#qiskit.algorithms.AmplitudeEstimationResult.estimation_processed "qiskit.algorithms.AmplitudeEstimationResult.estimation_processed")                            | Return the estimation for the amplitude after the post-processing has been applied. |
| [`max_probability`](#qiskit.algorithms.AmplitudeEstimationResult.max_probability "qiskit.algorithms.AmplitudeEstimationResult.max_probability")                                           | Return the maximum sampling probability.                                            |
| [`measurements`](#qiskit.algorithms.AmplitudeEstimationResult.measurements "qiskit.algorithms.AmplitudeEstimationResult.measurements")                                                    | Return the measurements as integers with their measurement probability.             |
| [`mle`](#qiskit.algorithms.AmplitudeEstimationResult.mle "qiskit.algorithms.AmplitudeEstimationResult.mle")                                                                               | Return the MLE for the amplitude, in $\[0, 1]\$.                                    |
| [`mle_processed`](#qiskit.algorithms.AmplitudeEstimationResult.mle_processed "qiskit.algorithms.AmplitudeEstimationResult.mle_processed")                                                 | Return the post-processed MLE for the amplitude.                                    |
| [`num_evaluation_qubits`](#qiskit.algorithms.AmplitudeEstimationResult.num_evaluation_qubits "qiskit.algorithms.AmplitudeEstimationResult.num_evaluation_qubits")                         | Returns the number of evaluation qubits.                                            |
| [`num_oracle_queries`](#qiskit.algorithms.AmplitudeEstimationResult.num_oracle_queries "qiskit.algorithms.AmplitudeEstimationResult.num_oracle_queries")                                  | Return the number of Grover oracle queries.                                         |
| [`post_processing`](#qiskit.algorithms.AmplitudeEstimationResult.post_processing "qiskit.algorithms.AmplitudeEstimationResult.post_processing")                                           | Return a handle to the post processing function.                                    |
| [`samples`](#qiskit.algorithms.AmplitudeEstimationResult.samples "qiskit.algorithms.AmplitudeEstimationResult.samples")                                                                   | Return the measurement samples with their measurement probability.                  |
| [`samples_processed`](#qiskit.algorithms.AmplitudeEstimationResult.samples_processed "qiskit.algorithms.AmplitudeEstimationResult.samples_processed")                                     | Return the post-processed measurement samples with their measurement probability.   |
| [`shots`](#qiskit.algorithms.AmplitudeEstimationResult.shots "qiskit.algorithms.AmplitudeEstimationResult.shots")                                                                         | Return the number of shots used.                                                    |

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

`property max_probability`

Return the maximum sampling probability.

**Return type**

`float`

<span id="undefined" />

`property measurements`

Return the measurements as integers with their measurement probability.

**Return type**

`Dict`\[`int`, `float`]

<span id="undefined" />

`property mle`

Return the MLE for the amplitude, in $\[0, 1]\$.

**Return type**

`float`

<span id="undefined" />

`property mle_processed`

Return the post-processed MLE for the amplitude.

**Return type**

`float`

<span id="undefined" />

`property num_evaluation_qubits`

Returns the number of evaluation qubits.

**Return type**

`int`

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

`property samples`

Return the measurement samples with their measurement probability.

**Return type**

`Dict`\[`float`, `float`]

<span id="undefined" />

`property samples_processed`

Return the post-processed measurement samples with their measurement probability.

**Return type**

`Dict`\[`float`, `float`]

<span id="undefined" />

`property shots`

Return the number of shots used. Is 1 for statevector-based simulations.

**Return type**

`int`
