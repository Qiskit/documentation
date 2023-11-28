# qiskit.aqua.algorithms.HHLResult

<span id="undefined" />

`HHLResult(a_dict=None)`

HHL Result.

<span id="undefined" />

`__init__(a_dict=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                    |                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.HHLResult.__init__ "qiskit.aqua.algorithms.HHLResult.__init__")(\[a\_dict])   | Initialize self.                                                                                                                                                                                                     |
| [`clear`](#qiskit.aqua.algorithms.HHLResult.clear "qiskit.aqua.algorithms.HHLResult.clear")()                      | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](#qiskit.aqua.algorithms.HHLResult.combine "qiskit.aqua.algorithms.HHLResult.combine")(result)          | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| `copy`()                                                                                                           |                                                                                                                                                                                                                      |
| [`from_dict`](#qiskit.aqua.algorithms.HHLResult.from_dict "qiskit.aqua.algorithms.HHLResult.from_dict")(a\_dict)   | create new object from a dictionary                                                                                                                                                                                  |
| `fromkeys`(iterable\[, value])                                                                                     |                                                                                                                                                                                                                      |
| [`get`](#qiskit.aqua.algorithms.HHLResult.get "qiskit.aqua.algorithms.HHLResult.get")(k\[,d])                      |                                                                                                                                                                                                                      |
| [`items`](#qiskit.aqua.algorithms.HHLResult.items "qiskit.aqua.algorithms.HHLResult.items")()                      |                                                                                                                                                                                                                      |
| [`keys`](#qiskit.aqua.algorithms.HHLResult.keys "qiskit.aqua.algorithms.HHLResult.keys")()                         |                                                                                                                                                                                                                      |
| [`pop`](#qiskit.aqua.algorithms.HHLResult.pop "qiskit.aqua.algorithms.HHLResult.pop")(key\[, default])             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](#qiskit.aqua.algorithms.HHLResult.popitem "qiskit.aqua.algorithms.HHLResult.popitem")()                | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](#qiskit.aqua.algorithms.HHLResult.setdefault "qiskit.aqua.algorithms.HHLResult.setdefault")(k\[,d]) |                                                                                                                                                                                                                      |
| [`update`](#qiskit.aqua.algorithms.HHLResult.update "qiskit.aqua.algorithms.HHLResult.update")(\*args, \*\*kwargs) | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](#qiskit.aqua.algorithms.HHLResult.values "qiskit.aqua.algorithms.HHLResult.values")()                   |                                                                                                                                                                                                                      |

## Attributes

|                                                                                                                                    |                           |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [`circuit_info`](#qiskit.aqua.algorithms.HHLResult.circuit_info "qiskit.aqua.algorithms.HHLResult.circuit_info")                   | return circuit info       |
| [`matrix`](#qiskit.aqua.algorithms.HHLResult.matrix "qiskit.aqua.algorithms.HHLResult.matrix")                                     | return matrix             |
| [`output`](#qiskit.aqua.algorithms.HHLResult.output "qiskit.aqua.algorithms.HHLResult.output")                                     | return output             |
| [`probability_result`](#qiskit.aqua.algorithms.HHLResult.probability_result "qiskit.aqua.algorithms.HHLResult.probability_result") | return probability result |
| [`solution`](#qiskit.aqua.algorithms.HHLResult.solution "qiskit.aqua.algorithms.HHLResult.solution")                               | return solution           |
| [`vector`](#qiskit.aqua.algorithms.HHLResult.vector "qiskit.aqua.algorithms.HHLResult.vector")                                     | return vector             |

<span id="undefined" />

`property circuit_info`

return circuit info

**Return type**

`DAGCircuit`

<span id="undefined" />

`clear()`

**Return type**

`None`

<span id="undefined" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

<span id="undefined" />

`static from_dict(a_dict)`

create new object from a dictionary

**Return type**

`HHLResult`

<span id="undefined" />

`get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

<span id="undefined" />

`items() → a set-like object providing a view on D’s items`

<span id="undefined" />

`keys() → a set-like object providing a view on D’s keys`

<span id="undefined" />

`property matrix`

return matrix

**Return type**

`ndarray`

<span id="undefined" />

`property output`

return output

**Return type**

`ndarray`

<span id="undefined" />

`pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`

<span id="undefined" />

`popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]

<span id="undefined" />

`property probability_result`

return probability result

**Return type**

`Union`\[`ndarray`, `float`]

<span id="undefined" />

`setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

<span id="undefined" />

`property solution`

return solution

**Return type**

`ndarray`

<span id="undefined" />

`update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

<span id="undefined" />

`values() → an object providing a view on D’s values`

<span id="undefined" />

`property vector`

return vector

**Return type**

`ndarray`
