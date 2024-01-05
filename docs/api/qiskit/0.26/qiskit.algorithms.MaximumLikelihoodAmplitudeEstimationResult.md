---
title: MaximumLikelihoodAmplitudeEstimationResult
description: API reference for qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult
---

# qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult

<span id="qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult" />

`MaximumLikelihoodAmplitudeEstimationResult`

The `MaximumLikelihoodAmplitudeEstimation` result object.

### \_\_init\_\_

<span id="qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

## Attributes

### circuit\_results

<span id="qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.circuit_results" />

`property circuit_results`

Return the circuit results. Can be a statevector or counts dictionary.

**Return type**

`Union`\[`ndarray`, `Dict`\[`str`, `int`], `None`]

### combine

<span id="qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.combine" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### confidence\_interval

<span id="qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.confidence_interval" />

`property confidence_interval`

Return the confidence interval for the amplitude (95% interval by default).

**Return type**

`Tuple`\[`float`, `float`]

### confidence\_interval\_processed

<span id="qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.confidence_interval_processed" />

`property confidence_interval_processed`

Return the post-processed confidence interval (95% interval by default).

**Return type**

`Tuple`\[`float`, `float`]

### estimation

<span id="qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.estimation" />

`property estimation`

Return the estimation for the amplitude in $[0, 1]$.

**Return type**

`float`

### estimation\_processed

<span id="qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.estimation_processed" />

`property estimation_processed`

Return the estimation for the amplitude after the post-processing has been applied.

**Return type**

`float`

### evaluation\_schedule

<span id="qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.evaluation_schedule" />

`property evaluation_schedule`

Return the evaluation schedule for the powers of the Grover operator.

**Return type**

`List`\[`int`]

### fisher\_information

<span id="qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.fisher_information" />

`property fisher_information`

Return the Fisher information for the estimated amplitude.

**Return type**

`float`

### good\_counts

<span id="qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.good_counts" />

`property good_counts`

Return the percentage of good counts per circuit power.

**Return type**

`List`\[`float`]

### minimizer

<span id="qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.minimizer" />

`property minimizer`

Return the minimizer used for the search of the likelihood function.

**Return type**

`callable`

### num\_oracle\_queries

<span id="qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.num_oracle_queries" />

`property num_oracle_queries`

Return the number of Grover oracle queries.

**Return type**

`int`

### post\_processing

<span id="qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.post_processing" />

`property post_processing`

Return a handle to the post processing function.

**Return type**

`Callable`\[\[`float`], `float`]

### shots

<span id="qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.shots" />

`property shots`

Return the number of shots used. Is 1 for statevector-based simulations.

**Return type**

`int`

### theta

<span id="qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.theta" />

`property theta`

Return the estimate for the angle $\theta$.

**Return type**

`float`

