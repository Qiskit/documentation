# qiskit.aqua.algorithms.AmplitudeEstimation.confidence\_interval

`AmplitudeEstimation.confidence_interval(alpha, kind='likelihood_ratio')`

Compute the (1 - alpha) confidence interval.

**Parameters**

*   **alpha** (`float`) – Confidence level: compute the (1 - alpha) confidence interval.
*   **kind** (`str`) – The method to compute the confidence interval, can be ‘fisher’, ‘observed\_fisher’ or ‘likelihood\_ratio’ (default)

**Return type**

`List`\[`float`]

**Returns**

The (1 - alpha) confidence interval of the specified kind.

**Raises**

*   [**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If ‘mle’ is not in self.\_ret.keys() (i.e. run was not called yet).
*   **NotImplementedError** – If the confidence interval method kind is not implemented.
