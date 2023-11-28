# GroverResult

<span id="undefined" />

`GroverResult(a_dict=None)`

Bases: `qiskit.aqua.algorithms.algorithm_result.AlgorithmResult`

Grover Result.

## Methods

|                                                                                                                                                                |                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`clear`](qiskit.aqua.algorithms.GroverResult.clear#qiskit.aqua.algorithms.GroverResult.clear "qiskit.aqua.algorithms.GroverResult.clear")                     | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](qiskit.aqua.algorithms.GroverResult.combine#qiskit.aqua.algorithms.GroverResult.combine "qiskit.aqua.algorithms.GroverResult.combine")             | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| [`copy`](qiskit.aqua.algorithms.GroverResult.copy#qiskit.aqua.algorithms.GroverResult.copy "qiskit.aqua.algorithms.GroverResult.copy")                         |                                                                                                                                                                                                                      |
| [`from_dict`](qiskit.aqua.algorithms.GroverResult.from_dict#qiskit.aqua.algorithms.GroverResult.from_dict "qiskit.aqua.algorithms.GroverResult.from_dict")     | create new object from a dictionary                                                                                                                                                                                  |
| [`fromkeys`](qiskit.aqua.algorithms.GroverResult.fromkeys#qiskit.aqua.algorithms.GroverResult.fromkeys "qiskit.aqua.algorithms.GroverResult.fromkeys")         |                                                                                                                                                                                                                      |
| [`get`](qiskit.aqua.algorithms.GroverResult.get#qiskit.aqua.algorithms.GroverResult.get "qiskit.aqua.algorithms.GroverResult.get")                             |                                                                                                                                                                                                                      |
| [`items`](qiskit.aqua.algorithms.GroverResult.items#qiskit.aqua.algorithms.GroverResult.items "qiskit.aqua.algorithms.GroverResult.items")                     |                                                                                                                                                                                                                      |
| [`keys`](qiskit.aqua.algorithms.GroverResult.keys#qiskit.aqua.algorithms.GroverResult.keys "qiskit.aqua.algorithms.GroverResult.keys")                         |                                                                                                                                                                                                                      |
| [`pop`](qiskit.aqua.algorithms.GroverResult.pop#qiskit.aqua.algorithms.GroverResult.pop "qiskit.aqua.algorithms.GroverResult.pop")                             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](qiskit.aqua.algorithms.GroverResult.popitem#qiskit.aqua.algorithms.GroverResult.popitem "qiskit.aqua.algorithms.GroverResult.popitem")             | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](qiskit.aqua.algorithms.GroverResult.setdefault#qiskit.aqua.algorithms.GroverResult.setdefault "qiskit.aqua.algorithms.GroverResult.setdefault") |                                                                                                                                                                                                                      |
| [`update`](qiskit.aqua.algorithms.GroverResult.update#qiskit.aqua.algorithms.GroverResult.update "qiskit.aqua.algorithms.GroverResult.update")                 | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](qiskit.aqua.algorithms.GroverResult.values#qiskit.aqua.algorithms.GroverResult.values "qiskit.aqua.algorithms.GroverResult.values")                 |                                                                                                                                                                                                                      |

## Attributes

<span id="undefined" />

### assignment

return assignment

**Return type**

`List`\[`int`]

<span id="undefined" />

### circuit

return circuit

**Return type**

`Optional`\[`QuantumCircuit`]

<span id="undefined" />

### measurement

returns measurement

**Return type**

`Optional`\[`Dict`\[`str`, `int`]]

<span id="undefined" />

### oracle\_evaluation

return oracle evaluation

**Return type**

`bool`

<span id="undefined" />

### top\_measurement

return top measurement

**Return type**

`Optional`\[`str`]
