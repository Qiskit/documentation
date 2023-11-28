# qiskit.algorithms.AmplitudeEstimatorResult

<span id="undefined" />

`AmplitudeEstimatorResult`

The results object for amplitude estimation algorithms.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                               |                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.AmplitudeEstimatorResult.__init__ "qiskit.algorithms.AmplitudeEstimatorResult.__init__")()    | Initialize self.                                                       |
| [`combine`](#qiskit.algorithms.AmplitudeEstimatorResult.combine "qiskit.algorithms.AmplitudeEstimatorResult.combine")(result) | Any property from the argument that exists in the receiver is updated. |

## Attributes

|                                                                                                                                                                                         |                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`circuit_results`](#qiskit.algorithms.AmplitudeEstimatorResult.circuit_results "qiskit.algorithms.AmplitudeEstimatorResult.circuit_results")                                           | Return the circuit results.                                                         |
| [`confidence_interval`](#qiskit.algorithms.AmplitudeEstimatorResult.confidence_interval "qiskit.algorithms.AmplitudeEstimatorResult.confidence_interval")                               | Return the confidence interval for the amplitude (95% interval by default).         |
| [`confidence_interval_processed`](#qiskit.algorithms.AmplitudeEstimatorResult.confidence_interval_processed "qiskit.algorithms.AmplitudeEstimatorResult.confidence_interval_processed") | Return the post-processed confidence interval (95% interval by default).            |
| [`estimation`](#qiskit.algorithms.AmplitudeEstimatorResult.estimation "qiskit.algorithms.AmplitudeEstimatorResult.estimation")                                                          | Return the estimation for the amplitude in $[0, 1]$.                                |
| [`estimation_processed`](#qiskit.algorithms.AmplitudeEstimatorResult.estimation_processed "qiskit.algorithms.AmplitudeEstimatorResult.estimation_processed")                            | Return the estimation for the amplitude after the post-processing has been applied. |
| [`num_oracle_queries`](#qiskit.algorithms.AmplitudeEstimatorResult.num_oracle_queries "qiskit.algorithms.AmplitudeEstimatorResult.num_oracle_queries")                                  | Return the number of Grover oracle queries.                                         |
| [`post_processing`](#qiskit.algorithms.AmplitudeEstimatorResult.post_processing "qiskit.algorithms.AmplitudeEstimatorResult.post_processing")                                           | Return a handle to the post processing function.                                    |
| [`shots`](#qiskit.algorithms.AmplitudeEstimatorResult.shots "qiskit.algorithms.AmplitudeEstimatorResult.shots")                                                                         | Return the number of shots used.                                                    |

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
