# MaximumLikelihoodAmplitudeEstimationResult

<span id="undefined" />

`MaximumLikelihoodAmplitudeEstimationResult(a_dict=None)`

Bases: `qiskit.aqua.algorithms.amplitude_estimators.ae_algorithm.AmplitudeEstimationAlgorithmResult`

MaximumLikelihoodAmplitudeEstimation Result.

## Methods

|                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`clear`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.clear#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.clear "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.clear")                     | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.combine#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.combine "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.combine")             | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| [`copy`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.copy#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.copy "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.copy")                         |                                                                                                                                                                                                                      |
| [`from_dict`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.from_dict#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.from_dict "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.from_dict")     | create new object from a dictionary                                                                                                                                                                                  |
| [`fromkeys`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.fromkeys#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.fromkeys "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.fromkeys")         |                                                                                                                                                                                                                      |
| [`get`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.get#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.get "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.get")                             |                                                                                                                                                                                                                      |
| [`items`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.items#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.items "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.items")                     |                                                                                                                                                                                                                      |
| [`keys`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.keys#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.keys "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.keys")                         |                                                                                                                                                                                                                      |
| [`pop`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.pop#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.pop "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.pop")                             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.popitem#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.popitem "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.popitem")             | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.setdefault#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.setdefault "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.setdefault") |                                                                                                                                                                                                                      |
| [`update`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.update#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.update "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.update")                 | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.values#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.values "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.values")                 |                                                                                                                                                                                                                      |

## Attributes

<span id="undefined" />

### a\_estimation

return a\_estimation

**Return type**

`float`

<span id="undefined" />

### circuit\_results

return circuit results

**Return type**

`Union`\[`List`\[`ndarray`], `List`\[`Dict`\[`str`, `int`]], `None`]

<span id="undefined" />

### confidence\_interval

return confidence\_interval

**Return type**

`List`\[`float`]

<span id="undefined" />

### estimation

return estimation

**Return type**

`float`

<span id="undefined" />

### fisher\_information

return fisher\_information

**Return type**

`float`

<span id="undefined" />

### num\_oracle\_queries

return num\_oracle\_queries

**Return type**

`int`

<span id="undefined" />

### theta

returns theta

**Return type**

`float`
