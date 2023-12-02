<span id="qiskit-aqua-algorithms-linearsolverresult" />

# qiskit.aqua.algorithms.LinearsolverResult

<span id="undefined" />

`LinearsolverResult(a_dict=None)`

Linear solver Result.

<span id="undefined" />

`__init__(a_dict=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                      |                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.LinearsolverResult.__init__ "qiskit.aqua.algorithms.LinearsolverResult.__init__")(\[a\_dict])   | Initialize self.                                                                                                                                                                                                     |
| [`clear`](#qiskit.aqua.algorithms.LinearsolverResult.clear "qiskit.aqua.algorithms.LinearsolverResult.clear")()                      | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](#qiskit.aqua.algorithms.LinearsolverResult.combine "qiskit.aqua.algorithms.LinearsolverResult.combine")(result)          | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| `copy`()                                                                                                                             |                                                                                                                                                                                                                      |
| [`from_dict`](#qiskit.aqua.algorithms.LinearsolverResult.from_dict "qiskit.aqua.algorithms.LinearsolverResult.from_dict")(a\_dict)   | create new object from a dictionary                                                                                                                                                                                  |
| `fromkeys`(iterable\[, value])                                                                                                       |                                                                                                                                                                                                                      |
| [`get`](#qiskit.aqua.algorithms.LinearsolverResult.get "qiskit.aqua.algorithms.LinearsolverResult.get")(k\[,d])                      |                                                                                                                                                                                                                      |
| [`items`](#qiskit.aqua.algorithms.LinearsolverResult.items "qiskit.aqua.algorithms.LinearsolverResult.items")()                      |                                                                                                                                                                                                                      |
| [`keys`](#qiskit.aqua.algorithms.LinearsolverResult.keys "qiskit.aqua.algorithms.LinearsolverResult.keys")()                         |                                                                                                                                                                                                                      |
| [`pop`](#qiskit.aqua.algorithms.LinearsolverResult.pop "qiskit.aqua.algorithms.LinearsolverResult.pop")(key\[, default])             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](#qiskit.aqua.algorithms.LinearsolverResult.popitem "qiskit.aqua.algorithms.LinearsolverResult.popitem")()                | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](#qiskit.aqua.algorithms.LinearsolverResult.setdefault "qiskit.aqua.algorithms.LinearsolverResult.setdefault")(k\[,d]) |                                                                                                                                                                                                                      |
| [`update`](#qiskit.aqua.algorithms.LinearsolverResult.update "qiskit.aqua.algorithms.LinearsolverResult.update")(\*args, \*\*kwargs) | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](#qiskit.aqua.algorithms.LinearsolverResult.values "qiskit.aqua.algorithms.LinearsolverResult.values")()                   |                                                                                                                                                                                                                      |

## Attributes

|                                                                                                                        |                 |
| ---------------------------------------------------------------------------------------------------------------------- | --------------- |
| [`solution`](#qiskit.aqua.algorithms.LinearsolverResult.solution "qiskit.aqua.algorithms.LinearsolverResult.solution") | return solution |

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

`LinearsolverResult`

<span id="undefined" />

`get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

<span id="undefined" />

`items() → a set-like object providing a view on D’s items`

<span id="undefined" />

`keys() → a set-like object providing a view on D’s keys`

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
