# AmplitudeEstimationResult[¶](#amplitudeestimationresult "Permalink to this headline")

<span id="undefined" />

`AmplitudeEstimationResult`

Bases: `qiskit.algorithms.amplitude_estimators.amplitude_estimator.AmplitudeEstimatorResult`

The `AmplitudeEstimation` result object.

## Methods

|                                                                                                                                                                            |                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`combine`](qiskit.algorithms.AmplitudeEstimationResult.combine#qiskit.algorithms.AmplitudeEstimationResult.combine "qiskit.algorithms.AmplitudeEstimationResult.combine") | Any property from the argument that exists in the receiver is updated. |

## Attributes

<span id="undefined" />

### circuit\_results

Return the circuit results. Can be a statevector or counts dictionary.

**Return type**

`Union`\[`ndarray`, `Dict`\[`str`, `int`], `None`]

<span id="undefined" />

### confidence\_interval

Return the confidence interval for the amplitude (95% interval by default).

**Return type**

`Tuple`\[`float`, `float`]

<span id="undefined" />

### confidence\_interval\_processed

Return the post-processed confidence interval (95% interval by default).

**Return type**

`Tuple`\[`float`, `float`]

<span id="undefined" />

### estimation

Return the estimation for the amplitude in $[0, 1]$.

**Return type**

`float`

<span id="undefined" />

### estimation\_processed

Return the estimation for the amplitude after the post-processing has been applied.

**Return type**

`float`

<span id="undefined" />

### max\_probability

Return the maximum sampling probability.

**Return type**

`float`

<span id="undefined" />

### measurements

Return the measurements as integers with their measurement probability.

**Return type**

`Dict`\[`int`, `float`]

<span id="undefined" />

### mle

Return the MLE for the amplitude, in $\[0, 1]\$.

**Return type**

`float`

<span id="undefined" />

### mle\_processed

Return the post-processed MLE for the amplitude.

**Return type**

`float`

<span id="undefined" />

### num\_evaluation\_qubits

Returns the number of evaluation qubits.

**Return type**

`int`

<span id="undefined" />

### num\_oracle\_queries

Return the number of Grover oracle queries.

**Return type**

`int`

<span id="undefined" />

### post\_processing

Return a handle to the post processing function.

**Return type**

`Callable`\[\[`float`], `float`]

<span id="undefined" />

### samples

Return the measurement samples with their measurement probability.

**Return type**

`Dict`\[`float`, `float`]

<span id="undefined" />

### samples\_processed

Return the post-processed measurement samples with their measurement probability.

**Return type**

`Dict`\[`float`, `float`]

<span id="undefined" />

### shots

Return the number of shots used. Is 1 for statevector-based simulations.

**Return type**

`int`
