# qiskit.aqua.algorithms.EigensolverResult

<span id="undefined" />

`EigensolverResult(a_dict=None)`

Eigensolver Result.

<span id="undefined" />

`__init__(a_dict=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                    |                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.EigensolverResult.__init__ "qiskit.aqua.algorithms.EigensolverResult.__init__")(\[a\_dict])   | Initialize self.                                                                                                                                                                                                     |
| [`clear`](#qiskit.aqua.algorithms.EigensolverResult.clear "qiskit.aqua.algorithms.EigensolverResult.clear")()                      | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](#qiskit.aqua.algorithms.EigensolverResult.combine "qiskit.aqua.algorithms.EigensolverResult.combine")(result)          | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| `copy`()                                                                                                                           |                                                                                                                                                                                                                      |
| [`from_dict`](#qiskit.aqua.algorithms.EigensolverResult.from_dict "qiskit.aqua.algorithms.EigensolverResult.from_dict")(a\_dict)   | create new object from a dictionary                                                                                                                                                                                  |
| `fromkeys`(iterable\[, value])                                                                                                     |                                                                                                                                                                                                                      |
| [`get`](#qiskit.aqua.algorithms.EigensolverResult.get "qiskit.aqua.algorithms.EigensolverResult.get")(k\[,d])                      |                                                                                                                                                                                                                      |
| [`items`](#qiskit.aqua.algorithms.EigensolverResult.items "qiskit.aqua.algorithms.EigensolverResult.items")()                      |                                                                                                                                                                                                                      |
| [`keys`](#qiskit.aqua.algorithms.EigensolverResult.keys "qiskit.aqua.algorithms.EigensolverResult.keys")()                         |                                                                                                                                                                                                                      |
| [`pop`](#qiskit.aqua.algorithms.EigensolverResult.pop "qiskit.aqua.algorithms.EigensolverResult.pop")(key\[, default])             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](#qiskit.aqua.algorithms.EigensolverResult.popitem "qiskit.aqua.algorithms.EigensolverResult.popitem")()                | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](#qiskit.aqua.algorithms.EigensolverResult.setdefault "qiskit.aqua.algorithms.EigensolverResult.setdefault")(k\[,d]) |                                                                                                                                                                                                                      |
| [`update`](#qiskit.aqua.algorithms.EigensolverResult.update "qiskit.aqua.algorithms.EigensolverResult.update")(\*args, \*\*kwargs) | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](#qiskit.aqua.algorithms.EigensolverResult.values "qiskit.aqua.algorithms.EigensolverResult.values")()                   |                                                                                                                                                                                                                      |

## Attributes

|                                                                                                                                                                      |                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`aux_operator_eigenvalues`](#qiskit.aqua.algorithms.EigensolverResult.aux_operator_eigenvalues "qiskit.aqua.algorithms.EigensolverResult.aux_operator_eigenvalues") | return aux operator eigen values |
| [`eigenstates`](#qiskit.aqua.algorithms.EigensolverResult.eigenstates "qiskit.aqua.algorithms.EigensolverResult.eigenstates")                                        | return eigen states              |
| [`eigenvalues`](#qiskit.aqua.algorithms.EigensolverResult.eigenvalues "qiskit.aqua.algorithms.EigensolverResult.eigenvalues")                                        | returns eigen values             |

<span id="undefined" />

`property aux_operator_eigenvalues`

return aux operator eigen values

**Return type**

`Optional`\[`ndarray`]

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

`property eigenstates`

return eigen states

**Return type**

`Optional`\[`ndarray`]

<span id="undefined" />

`property eigenvalues`

returns eigen values

**Return type**

`Optional`\[`ndarray`]

<span id="undefined" />

`static from_dict(a_dict)`

create new object from a dictionary

**Return type**

`EigensolverResult`

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

`update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

<span id="undefined" />

`values() → an object providing a view on D’s values`
