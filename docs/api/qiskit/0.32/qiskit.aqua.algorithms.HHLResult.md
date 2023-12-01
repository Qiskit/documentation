# HHLResult

<span id="undefined" />

`HHLResult(a_dict=None)`

Bases: `qiskit.aqua.algorithms.linear_solvers.linear_solver_result.LinearsolverResult`

HHL Result.

## Methods

|                                                                                                                                                       |                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`clear`](qiskit.aqua.algorithms.HHLResult.clear#qiskit.aqua.algorithms.HHLResult.clear "qiskit.aqua.algorithms.HHLResult.clear")                     | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](qiskit.aqua.algorithms.HHLResult.combine#qiskit.aqua.algorithms.HHLResult.combine "qiskit.aqua.algorithms.HHLResult.combine")             | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| [`copy`](qiskit.aqua.algorithms.HHLResult.copy#qiskit.aqua.algorithms.HHLResult.copy "qiskit.aqua.algorithms.HHLResult.copy")                         |                                                                                                                                                                                                                      |
| [`from_dict`](qiskit.aqua.algorithms.HHLResult.from_dict#qiskit.aqua.algorithms.HHLResult.from_dict "qiskit.aqua.algorithms.HHLResult.from_dict")     | create new object from a dictionary                                                                                                                                                                                  |
| [`fromkeys`](qiskit.aqua.algorithms.HHLResult.fromkeys#qiskit.aqua.algorithms.HHLResult.fromkeys "qiskit.aqua.algorithms.HHLResult.fromkeys")         |                                                                                                                                                                                                                      |
| [`get`](qiskit.aqua.algorithms.HHLResult.get#qiskit.aqua.algorithms.HHLResult.get "qiskit.aqua.algorithms.HHLResult.get")                             |                                                                                                                                                                                                                      |
| [`items`](qiskit.aqua.algorithms.HHLResult.items#qiskit.aqua.algorithms.HHLResult.items "qiskit.aqua.algorithms.HHLResult.items")                     |                                                                                                                                                                                                                      |
| [`keys`](qiskit.aqua.algorithms.HHLResult.keys#qiskit.aqua.algorithms.HHLResult.keys "qiskit.aqua.algorithms.HHLResult.keys")                         |                                                                                                                                                                                                                      |
| [`pop`](qiskit.aqua.algorithms.HHLResult.pop#qiskit.aqua.algorithms.HHLResult.pop "qiskit.aqua.algorithms.HHLResult.pop")                             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](qiskit.aqua.algorithms.HHLResult.popitem#qiskit.aqua.algorithms.HHLResult.popitem "qiskit.aqua.algorithms.HHLResult.popitem")             | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](qiskit.aqua.algorithms.HHLResult.setdefault#qiskit.aqua.algorithms.HHLResult.setdefault "qiskit.aqua.algorithms.HHLResult.setdefault") |                                                                                                                                                                                                                      |
| [`update`](qiskit.aqua.algorithms.HHLResult.update#qiskit.aqua.algorithms.HHLResult.update "qiskit.aqua.algorithms.HHLResult.update")                 | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](qiskit.aqua.algorithms.HHLResult.values#qiskit.aqua.algorithms.HHLResult.values "qiskit.aqua.algorithms.HHLResult.values")                 |                                                                                                                                                                                                                      |

## Attributes

<span id="undefined" />

### circuit\_info

return circuit info

**Return type**

`DAGCircuit`

<span id="undefined" />

### matrix

return matrix

**Return type**

`ndarray`

<span id="undefined" />

### output

return output

**Return type**

`ndarray`

<span id="undefined" />

### probability\_result

return probability result

**Return type**

`Union`\[`ndarray`, `float`]

<span id="undefined" />

### solution

return solution

**Return type**

`ndarray`

<span id="undefined" />

### vector

return vector

**Return type**

`ndarray`
