---
title: LinearsolverResult
description: API reference for qiskit.aqua.algorithms.LinearsolverResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.LinearsolverResult
---

# LinearsolverResult

<span id="qiskit.aqua.algorithms.LinearsolverResult" />

`LinearsolverResult(a_dict=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/algorithms/linear_solvers/linear_solver_result.py "view source code")

Bases: `qiskit.aqua.algorithms.algorithm_result.AlgorithmResult`

Linear solver Result.

## Methods

### clear

<span id="qiskit.aqua.algorithms.LinearsolverResult.clear" />

`LinearsolverResult.clear()`

**Return type**

`None`

### combine

<span id="qiskit.aqua.algorithms.LinearsolverResult.combine" />

`LinearsolverResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### copy

<span id="qiskit.aqua.algorithms.LinearsolverResult.copy" />

`LinearsolverResult.copy()`

### from\_dict

<span id="qiskit.aqua.algorithms.LinearsolverResult.from_dict" />

`static LinearsolverResult.from_dict(a_dict)`

create new object from a dictionary

**Return type**

`LinearsolverResult`

### fromkeys

<span id="qiskit.aqua.algorithms.LinearsolverResult.fromkeys" />

`classmethod LinearsolverResult.fromkeys(iterable, value=None)`

### get

<span id="qiskit.aqua.algorithms.LinearsolverResult.get" />

`LinearsolverResult.get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

### items

<span id="qiskit.aqua.algorithms.LinearsolverResult.items" />

`LinearsolverResult.items() → a set-like object providing a view on D’s items`

### keys

<span id="qiskit.aqua.algorithms.LinearsolverResult.keys" />

`LinearsolverResult.keys() → a set-like object providing a view on D’s keys`

### pop

<span id="qiskit.aqua.algorithms.LinearsolverResult.pop" />

`LinearsolverResult.pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`

### popitem

<span id="qiskit.aqua.algorithms.LinearsolverResult.popitem" />

`LinearsolverResult.popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]

### setdefault

<span id="qiskit.aqua.algorithms.LinearsolverResult.setdefault" />

`LinearsolverResult.setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

### update

<span id="qiskit.aqua.algorithms.LinearsolverResult.update" />

`LinearsolverResult.update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

### values

<span id="qiskit.aqua.algorithms.LinearsolverResult.values" />

`LinearsolverResult.values() → an object providing a view on D’s values`

## Attributes

<span id="qiskit.aqua.algorithms.LinearsolverResult.solution" />

### solution

return solution

**Return type**

`ndarray`

