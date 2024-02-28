---
title: FasterAmplitudeEstimationResult
description: API reference for qiskit.algorithms.FasterAmplitudeEstimationResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.FasterAmplitudeEstimationResult
---

# qiskit.algorithms.FasterAmplitudeEstimationResult

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult" />

`FasterAmplitudeEstimationResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/algorithms/amplitude_estimators/fae.py "view source code")

The result object for the Faster Amplitude Estimation algorithm.

### \_\_init\_\_

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                             |                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.FasterAmplitudeEstimationResult.__init__ "qiskit.algorithms.FasterAmplitudeEstimationResult.__init__")()    | Initialize self.                                                       |
| [`combine`](#qiskit.algorithms.FasterAmplitudeEstimationResult.combine "qiskit.algorithms.FasterAmplitudeEstimationResult.combine")(result) | Any property from the argument that exists in the receiver is updated. |

## Attributes

|                                                                                                                                                                                                       |                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`circuit_results`](#qiskit.algorithms.FasterAmplitudeEstimationResult.circuit_results "qiskit.algorithms.FasterAmplitudeEstimationResult.circuit_results")                                           | Return the circuit results.                                                         |
| [`confidence_interval`](#qiskit.algorithms.FasterAmplitudeEstimationResult.confidence_interval "qiskit.algorithms.FasterAmplitudeEstimationResult.confidence_interval")                               | Return the confidence interval for the amplitude (95% interval by default).         |
| [`confidence_interval_processed`](#qiskit.algorithms.FasterAmplitudeEstimationResult.confidence_interval_processed "qiskit.algorithms.FasterAmplitudeEstimationResult.confidence_interval_processed") | Return the post-processed confidence interval (95% interval by default).            |
| [`estimation`](#qiskit.algorithms.FasterAmplitudeEstimationResult.estimation "qiskit.algorithms.FasterAmplitudeEstimationResult.estimation")                                                          | Return the estimation for the amplitude in $[0, 1]$.                                |
| [`estimation_processed`](#qiskit.algorithms.FasterAmplitudeEstimationResult.estimation_processed "qiskit.algorithms.FasterAmplitudeEstimationResult.estimation_processed")                            | Return the estimation for the amplitude after the post-processing has been applied. |
| [`num_first_state_steps`](#qiskit.algorithms.FasterAmplitudeEstimationResult.num_first_state_steps "qiskit.algorithms.FasterAmplitudeEstimationResult.num_first_state_steps")                         | Return the number of steps taken in the first step of algorithm.                    |
| [`num_oracle_queries`](#qiskit.algorithms.FasterAmplitudeEstimationResult.num_oracle_queries "qiskit.algorithms.FasterAmplitudeEstimationResult.num_oracle_queries")                                  | Return the number of Grover oracle queries.                                         |
| [`num_steps`](#qiskit.algorithms.FasterAmplitudeEstimationResult.num_steps "qiskit.algorithms.FasterAmplitudeEstimationResult.num_steps")                                                             | Return the total number of steps taken in the algorithm.                            |
| [`post_processing`](#qiskit.algorithms.FasterAmplitudeEstimationResult.post_processing "qiskit.algorithms.FasterAmplitudeEstimationResult.post_processing")                                           | Return a handle to the post processing function.                                    |
| [`shots`](#qiskit.algorithms.FasterAmplitudeEstimationResult.shots "qiskit.algorithms.FasterAmplitudeEstimationResult.shots")                                                                         | Return the number of shots used.                                                    |
| [`success_probability`](#qiskit.algorithms.FasterAmplitudeEstimationResult.success_probability "qiskit.algorithms.FasterAmplitudeEstimationResult.success_probability")                               | Return the success probability of the algorithm.                                    |
| [`theta_intervals`](#qiskit.algorithms.FasterAmplitudeEstimationResult.theta_intervals "qiskit.algorithms.FasterAmplitudeEstimationResult.theta_intervals")                                           | Return the confidence intervals for the angles in each iteration.                   |

### circuit\_results

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.circuit_results" />

`property circuit_results`

Return the circuit results. Can be a statevector or counts dictionary.

**Return type**

`Union`\[`ndarray`, `Dict`\[`str`, `int`], `None`]

### combine

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.combine" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### confidence\_interval

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.confidence_interval" />

`property confidence_interval`

Return the confidence interval for the amplitude (95% interval by default).

**Return type**

`Tuple`\[`float`, `float`]

### confidence\_interval\_processed

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.confidence_interval_processed" />

`property confidence_interval_processed`

Return the post-processed confidence interval (95% interval by default).

**Return type**

`Tuple`\[`float`, `float`]

### estimation

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.estimation" />

`property estimation`

Return the estimation for the amplitude in $[0, 1]$.

**Return type**

`float`

### estimation\_processed

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.estimation_processed" />

`property estimation_processed`

Return the estimation for the amplitude after the post-processing has been applied.

**Return type**

`float`

### num\_first\_state\_steps

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.num_first_state_steps" />

`property num_first_state_steps`

Return the number of steps taken in the first step of algorithm.

**Return type**

`int`

### num\_oracle\_queries

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.num_oracle_queries" />

`property num_oracle_queries`

Return the number of Grover oracle queries.

**Return type**

`int`

### num\_steps

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.num_steps" />

`property num_steps`

Return the total number of steps taken in the algorithm.

**Return type**

`int`

### post\_processing

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.post_processing" />

`property post_processing`

Return a handle to the post processing function.

**Return type**

`Callable`\[\[`float`], `float`]

### shots

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.shots" />

`property shots`

Return the number of shots used. Is 1 for statevector-based simulations.

**Return type**

`int`

### success\_probability

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.success_probability" />

`property success_probability`

Return the success probability of the algorithm.

**Return type**

`int`

### theta\_intervals

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.theta_intervals" />

`property theta_intervals`

Return the confidence intervals for the angles in each iteration.

**Return type**

`List`\[`List`\[`float`]]

