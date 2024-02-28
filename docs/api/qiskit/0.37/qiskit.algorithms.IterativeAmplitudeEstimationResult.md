---
title: IterativeAmplitudeEstimationResult
description: API reference for qiskit.algorithms.IterativeAmplitudeEstimationResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.IterativeAmplitudeEstimationResult
---

# IterativeAmplitudeEstimationResult

<span id="qiskit.algorithms.IterativeAmplitudeEstimationResult" />

`IterativeAmplitudeEstimationResult` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.21/qiskit/algorithms/amplitude_estimators/iae.py "view source code")

Bases: [`qiskit.algorithms.amplitude_estimators.amplitude_estimator.AmplitudeEstimatorResult`](qiskit.algorithms.AmplitudeEstimatorResult "qiskit.algorithms.amplitude_estimators.amplitude_estimator.AmplitudeEstimatorResult")

The `IterativeAmplitudeEstimation` result object.

## Methods

### combine

<span id="qiskit.algorithms.IterativeAmplitudeEstimationResult.combine" />

`IterativeAmplitudeEstimationResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

## Attributes

<span id="qiskit.algorithms.IterativeAmplitudeEstimationResult.alpha" />

### alpha

Return the confidence level $\alpha$.

**Return type**

`float`

<span id="qiskit.algorithms.IterativeAmplitudeEstimationResult.circuit_results" />

### circuit\_results

Return the circuit results. Can be a statevector or counts dictionary.

**Return type**

`Union`\[`ndarray`, `Dict`\[`str`, `int`], `None`]

<span id="qiskit.algorithms.IterativeAmplitudeEstimationResult.confidence_interval" />

### confidence\_interval

Return the confidence interval for the amplitude (95% interval by default).

**Return type**

`Tuple`\[`float`, `float`]

<span id="qiskit.algorithms.IterativeAmplitudeEstimationResult.confidence_interval_processed" />

### confidence\_interval\_processed

Return the post-processed confidence interval.

**Return type**

`Tuple`\[`float`, `float`]

<span id="qiskit.algorithms.IterativeAmplitudeEstimationResult.epsilon_estimated" />

### epsilon\_estimated

Return the estimated half-width of the confidence interval.

**Return type**

`float`

<span id="qiskit.algorithms.IterativeAmplitudeEstimationResult.epsilon_estimated_processed" />

### epsilon\_estimated\_processed

Return the post-processed estimated half-width of the confidence interval.

**Return type**

`float`

<span id="qiskit.algorithms.IterativeAmplitudeEstimationResult.epsilon_target" />

### epsilon\_target

Return the target half-width of the confidence interval.

**Return type**

`float`

<span id="qiskit.algorithms.IterativeAmplitudeEstimationResult.estimate_intervals" />

### estimate\_intervals

Return the confidence intervals for the estimate in each iteration.

**Return type**

`List`\[`List`\[`float`]]

<span id="qiskit.algorithms.IterativeAmplitudeEstimationResult.estimation" />

### estimation

Return the estimation for the amplitude in $[0, 1]$.

**Return type**

`float`

<span id="qiskit.algorithms.IterativeAmplitudeEstimationResult.estimation_processed" />

### estimation\_processed

Return the estimation for the amplitude after the post-processing has been applied.

**Return type**

`float`

<span id="qiskit.algorithms.IterativeAmplitudeEstimationResult.num_oracle_queries" />

### num\_oracle\_queries

Return the number of Grover oracle queries.

**Return type**

`int`

<span id="qiskit.algorithms.IterativeAmplitudeEstimationResult.post_processing" />

### post\_processing

Return a handle to the post processing function.

**Return type**

`Callable`\[\[`float`], `float`]

<span id="qiskit.algorithms.IterativeAmplitudeEstimationResult.powers" />

### powers

Return the powers of the Grover operator in each iteration.

**Return type**

`List`\[`int`]

<span id="qiskit.algorithms.IterativeAmplitudeEstimationResult.ratios" />

### ratios

Return the ratios $K_{i+1}/K_{i}$ for each iteration $i$.

**Return type**

`List`\[`float`]

<span id="qiskit.algorithms.IterativeAmplitudeEstimationResult.shots" />

### shots

Return the number of shots used. Is 1 for statevector-based simulations.

**Return type**

`int`

<span id="qiskit.algorithms.IterativeAmplitudeEstimationResult.theta_intervals" />

### theta\_intervals

Return the confidence intervals for the angles in each iteration.

**Return type**

`List`\[`List`\[`float`]]

