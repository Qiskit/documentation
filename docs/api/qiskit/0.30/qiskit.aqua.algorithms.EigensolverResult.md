# EigensolverResult

<span id="undefined" />

`EigensolverResult(a_dict=None)`

Bases: `qiskit.aqua.algorithms.algorithm_result.AlgorithmResult`

Eigensolver Result.

## Methods

|                                                                                                                                                                               |                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`clear`](qiskit.aqua.algorithms.EigensolverResult.clear#qiskit.aqua.algorithms.EigensolverResult.clear "qiskit.aqua.algorithms.EigensolverResult.clear")                     | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](qiskit.aqua.algorithms.EigensolverResult.combine#qiskit.aqua.algorithms.EigensolverResult.combine "qiskit.aqua.algorithms.EigensolverResult.combine")             | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| [`copy`](qiskit.aqua.algorithms.EigensolverResult.copy#qiskit.aqua.algorithms.EigensolverResult.copy "qiskit.aqua.algorithms.EigensolverResult.copy")                         |                                                                                                                                                                                                                      |
| [`from_dict`](qiskit.aqua.algorithms.EigensolverResult.from_dict#qiskit.aqua.algorithms.EigensolverResult.from_dict "qiskit.aqua.algorithms.EigensolverResult.from_dict")     | create new object from a dictionary                                                                                                                                                                                  |
| [`fromkeys`](qiskit.aqua.algorithms.EigensolverResult.fromkeys#qiskit.aqua.algorithms.EigensolverResult.fromkeys "qiskit.aqua.algorithms.EigensolverResult.fromkeys")         |                                                                                                                                                                                                                      |
| [`get`](qiskit.aqua.algorithms.EigensolverResult.get#qiskit.aqua.algorithms.EigensolverResult.get "qiskit.aqua.algorithms.EigensolverResult.get")                             |                                                                                                                                                                                                                      |
| [`items`](qiskit.aqua.algorithms.EigensolverResult.items#qiskit.aqua.algorithms.EigensolverResult.items "qiskit.aqua.algorithms.EigensolverResult.items")                     |                                                                                                                                                                                                                      |
| [`keys`](qiskit.aqua.algorithms.EigensolverResult.keys#qiskit.aqua.algorithms.EigensolverResult.keys "qiskit.aqua.algorithms.EigensolverResult.keys")                         |                                                                                                                                                                                                                      |
| [`pop`](qiskit.aqua.algorithms.EigensolverResult.pop#qiskit.aqua.algorithms.EigensolverResult.pop "qiskit.aqua.algorithms.EigensolverResult.pop")                             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](qiskit.aqua.algorithms.EigensolverResult.popitem#qiskit.aqua.algorithms.EigensolverResult.popitem "qiskit.aqua.algorithms.EigensolverResult.popitem")             | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](qiskit.aqua.algorithms.EigensolverResult.setdefault#qiskit.aqua.algorithms.EigensolverResult.setdefault "qiskit.aqua.algorithms.EigensolverResult.setdefault") |                                                                                                                                                                                                                      |
| [`update`](qiskit.aqua.algorithms.EigensolverResult.update#qiskit.aqua.algorithms.EigensolverResult.update "qiskit.aqua.algorithms.EigensolverResult.update")                 | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](qiskit.aqua.algorithms.EigensolverResult.values#qiskit.aqua.algorithms.EigensolverResult.values "qiskit.aqua.algorithms.EigensolverResult.values")                 |                                                                                                                                                                                                                      |

## Attributes

<span id="undefined" />

### aux\_operator\_eigenvalues

return aux operator eigen values

**Return type**

`Optional`\[`ndarray`]

<span id="undefined" />

### eigenstates

return eigen states

**Return type**

`Optional`\[`ndarray`]

<span id="undefined" />

### eigenvalues

returns eigen values

**Return type**

`Optional`\[`ndarray`]
