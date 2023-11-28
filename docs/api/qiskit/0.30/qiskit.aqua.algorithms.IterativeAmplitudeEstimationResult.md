# IterativeAmplitudeEstimationResult

<span id="undefined" />

`IterativeAmplitudeEstimationResult(a_dict=None)`

Bases: `qiskit.aqua.algorithms.amplitude_estimators.ae_algorithm.AmplitudeEstimationAlgorithmResult`

IterativeAmplitudeEstimation Result.

## Methods

|                                                                                                                                                                                                                                  |                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`clear`](qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.clear#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.clear "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.clear")                     | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.combine#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.combine "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.combine")             | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| [`copy`](qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.copy#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.copy "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.copy")                         |                                                                                                                                                                                                                      |
| [`from_dict`](qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.from_dict#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.from_dict "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.from_dict")     | create new object from a dictionary                                                                                                                                                                                  |
| [`fromkeys`](qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.fromkeys#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.fromkeys "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.fromkeys")         |                                                                                                                                                                                                                      |
| [`get`](qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.get#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.get "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.get")                             |                                                                                                                                                                                                                      |
| [`items`](qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.items#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.items "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.items")                     |                                                                                                                                                                                                                      |
| [`keys`](qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.keys#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.keys "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.keys")                         |                                                                                                                                                                                                                      |
| [`pop`](qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.pop#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.pop "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.pop")                             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.popitem#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.popitem "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.popitem")             | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.setdefault#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.setdefault "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.setdefault") |                                                                                                                                                                                                                      |
| [`update`](qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.update#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.update "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.update")                 | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.values#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.values "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.values")                 |                                                                                                                                                                                                                      |

## Attributes

<span id="undefined" />

### a\_estimation

return a\_estimation

**Return type**

`float`

<span id="undefined" />

### a\_intervals

return a\_intervals

**Return type**

`List`\[`List`\[`float`]]

<span id="undefined" />

### actual\_epsilon

return mle

**Return type**

`float`

<span id="undefined" />

### alpha

return alpha

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

<span id="undefined" />

### powers

return powers

**Return type**

`List`\[`int`]

<span id="undefined" />

### ratios

return ratios

**Return type**

`List`\[`float`]

<span id="undefined" />

### theta\_intervals

return theta\_intervals

**Return type**

`List`\[`List`\[`float`]]

<span id="undefined" />

### value\_confidence\_interval

return value\_confidence\_interval

**Return type**

`List`\[`float`]
