# MinimumEigensolverResult

<span id="undefined" />

`MinimumEigensolverResult(a_dict=None)`

Bases: `qiskit.aqua.algorithms.algorithm_result.AlgorithmResult`

Minimum Eigensolver Result.

## Methods

|                                                                                                                                                                                                    |                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`clear`](qiskit.aqua.algorithms.MinimumEigensolverResult.clear#qiskit.aqua.algorithms.MinimumEigensolverResult.clear "qiskit.aqua.algorithms.MinimumEigensolverResult.clear")                     | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](qiskit.aqua.algorithms.MinimumEigensolverResult.combine#qiskit.aqua.algorithms.MinimumEigensolverResult.combine "qiskit.aqua.algorithms.MinimumEigensolverResult.combine")             | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| [`copy`](qiskit.aqua.algorithms.MinimumEigensolverResult.copy#qiskit.aqua.algorithms.MinimumEigensolverResult.copy "qiskit.aqua.algorithms.MinimumEigensolverResult.copy")                         |                                                                                                                                                                                                                      |
| [`from_dict`](qiskit.aqua.algorithms.MinimumEigensolverResult.from_dict#qiskit.aqua.algorithms.MinimumEigensolverResult.from_dict "qiskit.aqua.algorithms.MinimumEigensolverResult.from_dict")     | create new object from a dictionary                                                                                                                                                                                  |
| [`fromkeys`](qiskit.aqua.algorithms.MinimumEigensolverResult.fromkeys#qiskit.aqua.algorithms.MinimumEigensolverResult.fromkeys "qiskit.aqua.algorithms.MinimumEigensolverResult.fromkeys")         |                                                                                                                                                                                                                      |
| [`get`](qiskit.aqua.algorithms.MinimumEigensolverResult.get#qiskit.aqua.algorithms.MinimumEigensolverResult.get "qiskit.aqua.algorithms.MinimumEigensolverResult.get")                             |                                                                                                                                                                                                                      |
| [`items`](qiskit.aqua.algorithms.MinimumEigensolverResult.items#qiskit.aqua.algorithms.MinimumEigensolverResult.items "qiskit.aqua.algorithms.MinimumEigensolverResult.items")                     |                                                                                                                                                                                                                      |
| [`keys`](qiskit.aqua.algorithms.MinimumEigensolverResult.keys#qiskit.aqua.algorithms.MinimumEigensolverResult.keys "qiskit.aqua.algorithms.MinimumEigensolverResult.keys")                         |                                                                                                                                                                                                                      |
| [`pop`](qiskit.aqua.algorithms.MinimumEigensolverResult.pop#qiskit.aqua.algorithms.MinimumEigensolverResult.pop "qiskit.aqua.algorithms.MinimumEigensolverResult.pop")                             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](qiskit.aqua.algorithms.MinimumEigensolverResult.popitem#qiskit.aqua.algorithms.MinimumEigensolverResult.popitem "qiskit.aqua.algorithms.MinimumEigensolverResult.popitem")             | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](qiskit.aqua.algorithms.MinimumEigensolverResult.setdefault#qiskit.aqua.algorithms.MinimumEigensolverResult.setdefault "qiskit.aqua.algorithms.MinimumEigensolverResult.setdefault") |                                                                                                                                                                                                                      |
| [`update`](qiskit.aqua.algorithms.MinimumEigensolverResult.update#qiskit.aqua.algorithms.MinimumEigensolverResult.update "qiskit.aqua.algorithms.MinimumEigensolverResult.update")                 | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](qiskit.aqua.algorithms.MinimumEigensolverResult.values#qiskit.aqua.algorithms.MinimumEigensolverResult.values "qiskit.aqua.algorithms.MinimumEigensolverResult.values")                 |                                                                                                                                                                                                                      |

## Attributes

<span id="undefined" />

### aux\_operator\_eigenvalues

return aux operator eigen values

**Return type**

`Optional`\[`ndarray`]

<span id="undefined" />

### eigenstate

return eigen state

**Return type**

`Optional`\[`ndarray`]

<span id="undefined" />

### eigenvalue

returns eigen value

**Return type**

`Optional`\[`complex`]
