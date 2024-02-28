---
title: NumPyLSsolverResult
description: API reference for qiskit.aqua.algorithms.NumPyLSsolverResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.NumPyLSsolverResult
---

# qiskit.aqua.algorithms.NumPyLSsolverResult

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult" />

`NumPyLSsolverResult(a_dict=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/algorithms/linear_solvers/numpy_ls_solver.py "view source code")

Numpy LinearSystem Result.

### \_\_init\_\_

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.__init__" />

`__init__(a_dict=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                        |                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.NumPyLSsolverResult.__init__ "qiskit.aqua.algorithms.NumPyLSsolverResult.__init__")(\[a\_dict])   | Initialize self.                                                                                                                                                                                                     |
| [`clear`](#qiskit.aqua.algorithms.NumPyLSsolverResult.clear "qiskit.aqua.algorithms.NumPyLSsolverResult.clear")()                      | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](#qiskit.aqua.algorithms.NumPyLSsolverResult.combine "qiskit.aqua.algorithms.NumPyLSsolverResult.combine")(result)          | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| `copy`()                                                                                                                               |                                                                                                                                                                                                                      |
| [`from_dict`](#qiskit.aqua.algorithms.NumPyLSsolverResult.from_dict "qiskit.aqua.algorithms.NumPyLSsolverResult.from_dict")(a\_dict)   | create new object from a dictionary                                                                                                                                                                                  |
| `fromkeys`(iterable\[, value])                                                                                                         |                                                                                                                                                                                                                      |
| [`get`](#qiskit.aqua.algorithms.NumPyLSsolverResult.get "qiskit.aqua.algorithms.NumPyLSsolverResult.get")(k\[,d])                      |                                                                                                                                                                                                                      |
| [`items`](#qiskit.aqua.algorithms.NumPyLSsolverResult.items "qiskit.aqua.algorithms.NumPyLSsolverResult.items")()                      |                                                                                                                                                                                                                      |
| [`keys`](#qiskit.aqua.algorithms.NumPyLSsolverResult.keys "qiskit.aqua.algorithms.NumPyLSsolverResult.keys")()                         |                                                                                                                                                                                                                      |
| [`pop`](#qiskit.aqua.algorithms.NumPyLSsolverResult.pop "qiskit.aqua.algorithms.NumPyLSsolverResult.pop")(key\[, default])             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](#qiskit.aqua.algorithms.NumPyLSsolverResult.popitem "qiskit.aqua.algorithms.NumPyLSsolverResult.popitem")()                | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](#qiskit.aqua.algorithms.NumPyLSsolverResult.setdefault "qiskit.aqua.algorithms.NumPyLSsolverResult.setdefault")(k\[,d]) |                                                                                                                                                                                                                      |
| [`update`](#qiskit.aqua.algorithms.NumPyLSsolverResult.update "qiskit.aqua.algorithms.NumPyLSsolverResult.update")(\*args, \*\*kwargs) | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](#qiskit.aqua.algorithms.NumPyLSsolverResult.values "qiskit.aqua.algorithms.NumPyLSsolverResult.values")()                   |                                                                                                                                                                                                                      |

## Attributes

|                                                                                                                          |                 |
| ------------------------------------------------------------------------------------------------------------------------ | --------------- |
| [`eigvals`](#qiskit.aqua.algorithms.NumPyLSsolverResult.eigvals "qiskit.aqua.algorithms.NumPyLSsolverResult.eigvals")    | return eigvals  |
| [`solution`](#qiskit.aqua.algorithms.NumPyLSsolverResult.solution "qiskit.aqua.algorithms.NumPyLSsolverResult.solution") | return solution |

### clear

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.clear" />

`clear()`

**Return type**

`None`

### combine

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.combine" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### eigvals

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.eigvals" />

`property eigvals`

return eigvals

**Return type**

`ndarray`

### from\_dict

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.from_dict" />

`static from_dict(a_dict)`

create new object from a dictionary

**Return type**

`NumPyLSsolverResult`

### get

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.get" />

`get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

### items

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.items" />

`items() → a set-like object providing a view on D’s items`

### keys

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.keys" />

`keys() → a set-like object providing a view on D’s keys`

### pop

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.pop" />

`pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`

### popitem

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.popitem" />

`popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]

### setdefault

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.setdefault" />

`setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

### solution

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.solution" />

`property solution`

return solution

**Return type**

`ndarray`

### update

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.update" />

`update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

### values

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.values" />

`values() → an object providing a view on D’s values`

