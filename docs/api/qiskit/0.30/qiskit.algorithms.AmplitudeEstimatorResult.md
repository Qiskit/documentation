# AmplitudeEstimatorResult



`AmplitudeEstimatorResult`

Bases: `qiskit.algorithms.algorithm_result.AlgorithmResult`

The results object for amplitude estimation algorithms.

## Methods

|                                                                                                                                                                         |                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`combine`](qiskit.algorithms.AmplitudeEstimatorResult.combine#qiskit.algorithms.AmplitudeEstimatorResult.combine "qiskit.algorithms.AmplitudeEstimatorResult.combine") | Any property from the argument that exists in the receiver is updated. |

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
