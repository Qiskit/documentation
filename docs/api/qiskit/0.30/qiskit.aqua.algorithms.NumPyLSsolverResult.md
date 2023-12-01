# NumPyLSsolverResult

<span id="undefined" />

`NumPyLSsolverResult(a_dict=None)`

Bases: `qiskit.aqua.algorithms.linear_solvers.linear_solver_result.LinearsolverResult`

Numpy LinearSystem Result.

## Methods

|                                                                                                                                                                                     |                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`clear`](qiskit.aqua.algorithms.NumPyLSsolverResult.clear#qiskit.aqua.algorithms.NumPyLSsolverResult.clear "qiskit.aqua.algorithms.NumPyLSsolverResult.clear")                     | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](qiskit.aqua.algorithms.NumPyLSsolverResult.combine#qiskit.aqua.algorithms.NumPyLSsolverResult.combine "qiskit.aqua.algorithms.NumPyLSsolverResult.combine")             | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| [`copy`](qiskit.aqua.algorithms.NumPyLSsolverResult.copy#qiskit.aqua.algorithms.NumPyLSsolverResult.copy "qiskit.aqua.algorithms.NumPyLSsolverResult.copy")                         |                                                                                                                                                                                                                      |
| [`from_dict`](qiskit.aqua.algorithms.NumPyLSsolverResult.from_dict#qiskit.aqua.algorithms.NumPyLSsolverResult.from_dict "qiskit.aqua.algorithms.NumPyLSsolverResult.from_dict")     | create new object from a dictionary                                                                                                                                                                                  |
| [`fromkeys`](qiskit.aqua.algorithms.NumPyLSsolverResult.fromkeys#qiskit.aqua.algorithms.NumPyLSsolverResult.fromkeys "qiskit.aqua.algorithms.NumPyLSsolverResult.fromkeys")         |                                                                                                                                                                                                                      |
| [`get`](qiskit.aqua.algorithms.NumPyLSsolverResult.get#qiskit.aqua.algorithms.NumPyLSsolverResult.get "qiskit.aqua.algorithms.NumPyLSsolverResult.get")                             |                                                                                                                                                                                                                      |
| [`items`](qiskit.aqua.algorithms.NumPyLSsolverResult.items#qiskit.aqua.algorithms.NumPyLSsolverResult.items "qiskit.aqua.algorithms.NumPyLSsolverResult.items")                     |                                                                                                                                                                                                                      |
| [`keys`](qiskit.aqua.algorithms.NumPyLSsolverResult.keys#qiskit.aqua.algorithms.NumPyLSsolverResult.keys "qiskit.aqua.algorithms.NumPyLSsolverResult.keys")                         |                                                                                                                                                                                                                      |
| [`pop`](qiskit.aqua.algorithms.NumPyLSsolverResult.pop#qiskit.aqua.algorithms.NumPyLSsolverResult.pop "qiskit.aqua.algorithms.NumPyLSsolverResult.pop")                             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](qiskit.aqua.algorithms.NumPyLSsolverResult.popitem#qiskit.aqua.algorithms.NumPyLSsolverResult.popitem "qiskit.aqua.algorithms.NumPyLSsolverResult.popitem")             | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](qiskit.aqua.algorithms.NumPyLSsolverResult.setdefault#qiskit.aqua.algorithms.NumPyLSsolverResult.setdefault "qiskit.aqua.algorithms.NumPyLSsolverResult.setdefault") |                                                                                                                                                                                                                      |
| [`update`](qiskit.aqua.algorithms.NumPyLSsolverResult.update#qiskit.aqua.algorithms.NumPyLSsolverResult.update "qiskit.aqua.algorithms.NumPyLSsolverResult.update")                 | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](qiskit.aqua.algorithms.NumPyLSsolverResult.values#qiskit.aqua.algorithms.NumPyLSsolverResult.values "qiskit.aqua.algorithms.NumPyLSsolverResult.values")                 |                                                                                                                                                                                                                      |

## Attributes

<span id="undefined" />

### eigvals

return eigvals

**Return type**

`ndarray`

<span id="undefined" />

### solution

return solution

**Return type**

`ndarray`
