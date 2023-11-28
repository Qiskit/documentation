<span id="qiskit-aqua-algorithms-groverresult" />

# qiskit.aqua.algorithms.GroverResult

<span id="undefined" />

`GroverResult(a_dict=None)`

Grover Result.

<span id="undefined" />

`__init__(a_dict=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                          |                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.GroverResult.__init__ "qiskit.aqua.algorithms.GroverResult.__init__")(\[a\_dict])   | Initialize self.                                                                                                                                                                                                     |
| [`clear`](#qiskit.aqua.algorithms.GroverResult.clear "qiskit.aqua.algorithms.GroverResult.clear")()                      | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](#qiskit.aqua.algorithms.GroverResult.combine "qiskit.aqua.algorithms.GroverResult.combine")(result)          | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| `copy`()                                                                                                                 |                                                                                                                                                                                                                      |
| [`from_dict`](#qiskit.aqua.algorithms.GroverResult.from_dict "qiskit.aqua.algorithms.GroverResult.from_dict")(a\_dict)   | create new object from a dictionary                                                                                                                                                                                  |
| `fromkeys`(iterable\[, value])                                                                                           |                                                                                                                                                                                                                      |
| [`get`](#qiskit.aqua.algorithms.GroverResult.get "qiskit.aqua.algorithms.GroverResult.get")(k\[,d])                      |                                                                                                                                                                                                                      |
| [`items`](#qiskit.aqua.algorithms.GroverResult.items "qiskit.aqua.algorithms.GroverResult.items")()                      |                                                                                                                                                                                                                      |
| [`keys`](#qiskit.aqua.algorithms.GroverResult.keys "qiskit.aqua.algorithms.GroverResult.keys")()                         |                                                                                                                                                                                                                      |
| [`pop`](#qiskit.aqua.algorithms.GroverResult.pop "qiskit.aqua.algorithms.GroverResult.pop")(key\[, default])             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](#qiskit.aqua.algorithms.GroverResult.popitem "qiskit.aqua.algorithms.GroverResult.popitem")()                | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](#qiskit.aqua.algorithms.GroverResult.setdefault "qiskit.aqua.algorithms.GroverResult.setdefault")(k\[,d]) |                                                                                                                                                                                                                      |
| [`update`](#qiskit.aqua.algorithms.GroverResult.update "qiskit.aqua.algorithms.GroverResult.update")(\*args, \*\*kwargs) | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](#qiskit.aqua.algorithms.GroverResult.values "qiskit.aqua.algorithms.GroverResult.values")()                   |                                                                                                                                                                                                                      |

## Attributes

|                                                                                                                                       |                          |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| [`assignment`](#qiskit.aqua.algorithms.GroverResult.assignment "qiskit.aqua.algorithms.GroverResult.assignment")                      | return assignment        |
| [`circuit`](#qiskit.aqua.algorithms.GroverResult.circuit "qiskit.aqua.algorithms.GroverResult.circuit")                               | return circuit           |
| [`measurement`](#qiskit.aqua.algorithms.GroverResult.measurement "qiskit.aqua.algorithms.GroverResult.measurement")                   | returns measurement      |
| [`oracle_evaluation`](#qiskit.aqua.algorithms.GroverResult.oracle_evaluation "qiskit.aqua.algorithms.GroverResult.oracle_evaluation") | return oracle evaluation |
| [`top_measurement`](#qiskit.aqua.algorithms.GroverResult.top_measurement "qiskit.aqua.algorithms.GroverResult.top_measurement")       | return top measurement   |

<span id="undefined" />

`property assignment`

return assignment

**Return type**

`List`\[`int`]

<span id="undefined" />

`property circuit`

return circuit

**Return type**

`Optional`\[`QuantumCircuit`]

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

`GroverResult`

<span id="undefined" />

`get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

<span id="undefined" />

`items() → a set-like object providing a view on D’s items`

<span id="undefined" />

`keys() → a set-like object providing a view on D’s keys`

<span id="undefined" />

`property measurement`

returns measurement

**Return type**

`Optional`\[`Dict`\[`str`, `int`]]

<span id="undefined" />

`property oracle_evaluation`

return oracle evaluation

**Return type**

`bool`

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

`property top_measurement`

return top measurement

**Return type**

`Optional`\[`str`]

<span id="undefined" />

`update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

<span id="undefined" />

`values() → an object providing a view on D’s values`
