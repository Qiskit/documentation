# qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimation.confidence\_interval

`MaximumLikelihoodAmplitudeEstimation.confidence_interval(alpha, kind='fisher')`

Compute the alpha confidence interval using the method kind.

The confidence level is (1 - alpha) and supported kinds are ‘fisher’, ‘likelihood\_ratio’ and ‘observed\_fisher’ with shorthand notations ‘fi’, ‘lr’ and ‘oi’, respectively.

**Parameters**

*   **alpha** (`float`) – The confidence level.
*   **kind** (`str`) – The method to compute the confidence interval. Defaults to ‘fisher’, which computes the theoretical Fisher information.

**Return type**

`List`\[`float`]

**Returns**

The specified confidence interval.

**Raises**

*   [**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If run() hasn’t been called yet.
*   **NotImplementedError** – If the method kind is not supported.
