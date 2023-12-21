# qiskit.algorithms.MaximumLikelihoodAmplitudeEstimation.compute\_confidence\_interval

`static MaximumLikelihoodAmplitudeEstimation.compute_confidence_interval(result, alpha, kind='fisher', apply_post_processing=False)`

Compute the alpha confidence interval using the method kind.

The confidence level is (1 - alpha) and supported kinds are ‘fisher’, ‘likelihood\_ratio’ and ‘observed\_fisher’ with shorthand notations ‘fi’, ‘lr’ and ‘oi’, respectively.

**Parameters**

*   **result** (`MaximumLikelihoodAmplitudeEstimationResult`) – A maximum likelihood amplitude estimation result.
*   **alpha** (`float`) – The confidence level.
*   **kind** (`str`) – The method to compute the confidence interval. Defaults to ‘fisher’, which computes the theoretical Fisher information.
*   **apply\_post\_processing** (`bool`) – If True, apply post-processing to the confidence interval.

**Return type**

`Tuple`\[`float`, `float`]

**Returns**

The specified confidence interval.

**Raises**

*   [**AlgorithmError**](qiskit.algorithms.AlgorithmError#qiskit.algorithms.AlgorithmError "qiskit.algorithms.AlgorithmError") – If run() hasn’t been called yet.
*   **NotImplementedError** – If the method kind is not supported.
