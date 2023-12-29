# MaximumLikelihoodAmplitudeEstimationResult

`MaximumLikelihoodAmplitudeEstimationResult`

Bases: `qiskit.algorithms.amplitude_estimators.amplitude_estimator.AmplitudeEstimatorResult`

The `MaximumLikelihoodAmplitudeEstimation` result object.

## Methods

|                                                                                                                                                                                                                               |                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`combine`](qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.combine#qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.combine "qiskit.algorithms.MaximumLikelihoodAmplitudeEstimationResult.combine") | Any property from the argument that exists in the receiver is updated. |

## Attributes

### circuit\_results

Return the circuit results. Can be a statevector or counts dictionary.

**Return type**

`Union`\[`ndarray`, `Dict`\[`str`, `int`], `None`]

### confidence\_interval

Return the confidence interval for the amplitude (95% interval by default).

**Return type**

`Tuple`\[`float`, `float`]

### confidence\_interval\_processed

Return the post-processed confidence interval (95% interval by default).

**Return type**

`Tuple`\[`float`, `float`]

### estimation

Return the estimation for the amplitude in $[0, 1]$.

**Return type**

`float`

### estimation\_processed

Return the estimation for the amplitude after the post-processing has been applied.

**Return type**

`float`

### evaluation\_schedule

Return the evaluation schedule for the powers of the Grover operator.

**Return type**

`List`\[`int`]

### fisher\_information

Return the Fisher information for the estimated amplitude.

**Return type**

`float`

### good\_counts

Return the percentage of good counts per circuit power.

**Return type**

`List`\[`float`]

### minimizer

Return the minimizer used for the search of the likelihood function.

**Return type**

`callable`

### num\_oracle\_queries

Return the number of Grover oracle queries.

**Return type**

`int`

### post\_processing

Return a handle to the post processing function.

**Return type**

`Callable`\[\[`float`], `float`]

### shots

Return the number of shots used. Is 1 for statevector-based simulations.

**Return type**

`int`

### theta

Return the estimate for the angle $\theta$.

**Return type**

`float`
