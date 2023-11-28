# AmplitudeEstimationResult

<span id="undefined" />

`AmplitudeEstimationResult(a_dict=None)`

Bases: `qiskit.aqua.algorithms.amplitude_estimators.ae_algorithm.AmplitudeEstimationAlgorithmResult`

AmplitudeEstimation Result.

## Methods

|                                                                                                                                                                                                       |                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`clear`](qiskit.aqua.algorithms.AmplitudeEstimationResult.clear#qiskit.aqua.algorithms.AmplitudeEstimationResult.clear "qiskit.aqua.algorithms.AmplitudeEstimationResult.clear")                     | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](qiskit.aqua.algorithms.AmplitudeEstimationResult.combine#qiskit.aqua.algorithms.AmplitudeEstimationResult.combine "qiskit.aqua.algorithms.AmplitudeEstimationResult.combine")             | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| [`copy`](qiskit.aqua.algorithms.AmplitudeEstimationResult.copy#qiskit.aqua.algorithms.AmplitudeEstimationResult.copy "qiskit.aqua.algorithms.AmplitudeEstimationResult.copy")                         |                                                                                                                                                                                                                      |
| [`from_dict`](qiskit.aqua.algorithms.AmplitudeEstimationResult.from_dict#qiskit.aqua.algorithms.AmplitudeEstimationResult.from_dict "qiskit.aqua.algorithms.AmplitudeEstimationResult.from_dict")     | create new object from a dictionary                                                                                                                                                                                  |
| [`fromkeys`](qiskit.aqua.algorithms.AmplitudeEstimationResult.fromkeys#qiskit.aqua.algorithms.AmplitudeEstimationResult.fromkeys "qiskit.aqua.algorithms.AmplitudeEstimationResult.fromkeys")         |                                                                                                                                                                                                                      |
| [`get`](qiskit.aqua.algorithms.AmplitudeEstimationResult.get#qiskit.aqua.algorithms.AmplitudeEstimationResult.get "qiskit.aqua.algorithms.AmplitudeEstimationResult.get")                             |                                                                                                                                                                                                                      |
| [`items`](qiskit.aqua.algorithms.AmplitudeEstimationResult.items#qiskit.aqua.algorithms.AmplitudeEstimationResult.items "qiskit.aqua.algorithms.AmplitudeEstimationResult.items")                     |                                                                                                                                                                                                                      |
| [`keys`](qiskit.aqua.algorithms.AmplitudeEstimationResult.keys#qiskit.aqua.algorithms.AmplitudeEstimationResult.keys "qiskit.aqua.algorithms.AmplitudeEstimationResult.keys")                         |                                                                                                                                                                                                                      |
| [`pop`](qiskit.aqua.algorithms.AmplitudeEstimationResult.pop#qiskit.aqua.algorithms.AmplitudeEstimationResult.pop "qiskit.aqua.algorithms.AmplitudeEstimationResult.pop")                             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](qiskit.aqua.algorithms.AmplitudeEstimationResult.popitem#qiskit.aqua.algorithms.AmplitudeEstimationResult.popitem "qiskit.aqua.algorithms.AmplitudeEstimationResult.popitem")             | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](qiskit.aqua.algorithms.AmplitudeEstimationResult.setdefault#qiskit.aqua.algorithms.AmplitudeEstimationResult.setdefault "qiskit.aqua.algorithms.AmplitudeEstimationResult.setdefault") |                                                                                                                                                                                                                      |
| [`update`](qiskit.aqua.algorithms.AmplitudeEstimationResult.update#qiskit.aqua.algorithms.AmplitudeEstimationResult.update "qiskit.aqua.algorithms.AmplitudeEstimationResult.update")                 | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](qiskit.aqua.algorithms.AmplitudeEstimationResult.values#qiskit.aqua.algorithms.AmplitudeEstimationResult.values "qiskit.aqua.algorithms.AmplitudeEstimationResult.values")                 |                                                                                                                                                                                                                      |

## Attributes

<span id="undefined" />

### a\_estimation

return a\_estimation

**Return type**

`float`

<span id="undefined" />

### a\_samples

return a\_samples

**Return type**

`List`\[`Tuple`\[`float`, `float`]]

<span id="undefined" />

### circuit\_result

return circuit result

**Return type**

`Union`\[`ndarray`, `Dict`\[`str`, `int`], `None`]

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

### mapped\_a\_samples

return mapped\_a\_samples

**Return type**

`List`\[`float`]

<span id="undefined" />

### mapped\_values

return mapped\_values

**Return type**

`List`\[`float`]

<span id="undefined" />

### max\_probability

return max\_probability

**Return type**

`float`

<span id="undefined" />

### ml\_value

returns ml\_value

**Return type**

`float`

<span id="undefined" />

### mle

return mle

**Return type**

`float`

<span id="undefined" />

### num\_oracle\_queries

return num\_oracle\_queries

**Return type**

`int`

<span id="undefined" />

### probabilities

return probabilities

**Return type**

`List`\[`float`]

<span id="undefined" />

### shots

return shots

**Return type**

`int`

<span id="undefined" />

### y\_measurements

return y\_measurements

**Return type**

`List`\[`Tuple`\[`int`, `float`]]
