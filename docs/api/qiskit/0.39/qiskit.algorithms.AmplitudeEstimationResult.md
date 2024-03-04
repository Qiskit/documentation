---
title: AmplitudeEstimationResult
description: API reference for qiskit.algorithms.AmplitudeEstimationResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.AmplitudeEstimationResult
---

# AmplitudeEstimationResult

<span id="qiskit.algorithms.AmplitudeEstimationResult" />

`AmplitudeEstimationResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/algorithms/amplitude_estimators/ae.py "view source code")

Bases: [`qiskit.algorithms.amplitude_estimators.amplitude_estimator.AmplitudeEstimatorResult`](qiskit.algorithms.AmplitudeEstimatorResult "qiskit.algorithms.amplitude_estimators.amplitude_estimator.AmplitudeEstimatorResult")

The `AmplitudeEstimation` result object.

## Methods

### combine

<span id="qiskit.algorithms.AmplitudeEstimationResult.combine" />

`AmplitudeEstimationResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

## Attributes

<span id="qiskit.algorithms.AmplitudeEstimationResult.circuit_results" />

### circuit\_results

Return the circuit results. Can be a statevector or counts dictionary.

<span id="qiskit.algorithms.AmplitudeEstimationResult.confidence_interval" />

### confidence\_interval

Return the confidence interval for the amplitude (95% interval by default).

<span id="qiskit.algorithms.AmplitudeEstimationResult.confidence_interval_processed" />

### confidence\_interval\_processed

Return the post-processed confidence interval (95% interval by default).

<span id="qiskit.algorithms.AmplitudeEstimationResult.estimation" />

### estimation

Return the estimation for the amplitude in $[0, 1]$.

**Return type**

`float`

<span id="qiskit.algorithms.AmplitudeEstimationResult.estimation_processed" />

### estimation\_processed

Return the estimation for the amplitude after the post-processing has been applied.

**Return type**

`float`

<span id="qiskit.algorithms.AmplitudeEstimationResult.max_probability" />

### max\_probability

Return the maximum sampling probability.

**Return type**

`float`

<span id="qiskit.algorithms.AmplitudeEstimationResult.measurements" />

### measurements

Return the measurements as integers with their measurement probability.

<span id="qiskit.algorithms.AmplitudeEstimationResult.mle" />

### mle

Return the MLE for the amplitude, in $\[0, 1]\$.

**Return type**

`float`

<span id="qiskit.algorithms.AmplitudeEstimationResult.mle_processed" />

### mle\_processed

Return the post-processed MLE for the amplitude.

**Return type**

`float`

<span id="qiskit.algorithms.AmplitudeEstimationResult.num_evaluation_qubits" />

### num\_evaluation\_qubits

Returns the number of evaluation qubits.

**Return type**

`int`

<span id="qiskit.algorithms.AmplitudeEstimationResult.num_oracle_queries" />

### num\_oracle\_queries

Return the number of Grover oracle queries.

**Return type**

`int`

<span id="qiskit.algorithms.AmplitudeEstimationResult.post_processing" />

### post\_processing

Return a handle to the post processing function.

**Return type**

`Callable`\[\[`float`], `float`]

<span id="qiskit.algorithms.AmplitudeEstimationResult.samples" />

### samples

Return the measurement samples with their measurement probability.

<span id="qiskit.algorithms.AmplitudeEstimationResult.samples_processed" />

### samples\_processed

Return the post-processed measurement samples with their measurement probability.

<span id="qiskit.algorithms.AmplitudeEstimationResult.shots" />

### shots

Return the number of shots used. Is 1 for statevector-based simulations.

**Return type**

`int`

