# AmplitudeEstimationAlgorithmResult

<span id="undefined" />

`AmplitudeEstimationAlgorithmResult(a_dict=None)`

Bases: `qiskit.aqua.algorithms.algorithm_result.AlgorithmResult`

AmplitudeEstimationAlgorithm Result.

## Methods

|                                                                                                                                                                                                                                  |                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`clear`](qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.clear#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.clear "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.clear")                     | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.combine#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.combine "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.combine")             | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| [`copy`](qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.copy#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.copy "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.copy")                         |                                                                                                                                                                                                                      |
| [`from_dict`](qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.from_dict#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.from_dict "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.from_dict")     | create new object from a dictionary                                                                                                                                                                                  |
| [`fromkeys`](qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.fromkeys#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.fromkeys "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.fromkeys")         |                                                                                                                                                                                                                      |
| [`get`](qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.get#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.get "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.get")                             |                                                                                                                                                                                                                      |
| [`items`](qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.items#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.items "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.items")                     |                                                                                                                                                                                                                      |
| [`keys`](qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.keys#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.keys "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.keys")                         |                                                                                                                                                                                                                      |
| [`pop`](qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.pop#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.pop "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.pop")                             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.popitem#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.popitem "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.popitem")             | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.setdefault#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.setdefault "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.setdefault") |                                                                                                                                                                                                                      |
| [`update`](qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.update#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.update "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.update")                 | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.values#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.values "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.values")                 |                                                                                                                                                                                                                      |

## Attributes

<span id="undefined" />

### a\_estimation

return a\_estimation

**Return type**

`float`

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

### num\_oracle\_queries

return num\_oracle\_queries

**Return type**

`int`
