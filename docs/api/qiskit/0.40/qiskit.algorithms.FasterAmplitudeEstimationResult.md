---
title: FasterAmplitudeEstimationResult
description: API reference for qiskit.algorithms.FasterAmplitudeEstimationResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.FasterAmplitudeEstimationResult
---

# FasterAmplitudeEstimationResult

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult" />

`FasterAmplitudeEstimationResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/algorithms/amplitude_estimators/fae.py "view source code")

Bases: [`qiskit.algorithms.amplitude_estimators.amplitude_estimator.AmplitudeEstimatorResult`](qiskit.algorithms.AmplitudeEstimatorResult "qiskit.algorithms.amplitude_estimators.amplitude_estimator.AmplitudeEstimatorResult")

The result object for the Faster Amplitude Estimation algorithm.

## Methods

### combine

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.combine" />

`FasterAmplitudeEstimationResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

## Attributes

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.circuit_results" />

### circuit\_results

Return the circuit results. Can be a statevector or counts dictionary.

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.confidence_interval" />

### confidence\_interval

Return the confidence interval for the amplitude (95% interval by default).

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.confidence_interval_processed" />

### confidence\_interval\_processed

Return the post-processed confidence interval (95% interval by default).

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.estimation" />

### estimation

Return the estimation for the amplitude in $[0, 1]$.

**Return type**

`float`

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.estimation_processed" />

### estimation\_processed

Return the estimation for the amplitude after the post-processing has been applied.

**Return type**

`float`

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.num_first_state_steps" />

### num\_first\_state\_steps

Return the number of steps taken in the first step of algorithm.

**Return type**

`int`

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.num_oracle_queries" />

### num\_oracle\_queries

Return the number of Grover oracle queries.

**Return type**

`int`

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.num_steps" />

### num\_steps

Return the total number of steps taken in the algorithm.

**Return type**

`int`

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.post_processing" />

### post\_processing

Return a handle to the post processing function.

**Return type**

`Callable`\[\[`float`], `float`]

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.shots" />

### shots

Return the number of shots used. Is 1 for statevector-based simulations.

**Return type**

`int`

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.success_probability" />

### success\_probability

Return the success probability of the algorithm.

**Return type**

`int`

<span id="qiskit.algorithms.FasterAmplitudeEstimationResult.theta_intervals" />

### theta\_intervals

Return the confidence intervals for the angles in each iteration.

