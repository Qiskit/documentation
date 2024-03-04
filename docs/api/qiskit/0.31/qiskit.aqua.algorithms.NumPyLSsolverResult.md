---
title: NumPyLSsolverResult
description: API reference for qiskit.aqua.algorithms.NumPyLSsolverResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.NumPyLSsolverResult
---

# NumPyLSsolverResult

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult" />

`NumPyLSsolverResult(a_dict=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/algorithms/linear_solvers/numpy_ls_solver.py "view source code")

Bases: `qiskit.aqua.algorithms.linear_solvers.linear_solver_result.LinearsolverResult`

Numpy LinearSystem Result.

## Methods

### clear

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.clear" />

`NumPyLSsolverResult.clear()`

**Return type**

`None`

### combine

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.combine" />

`NumPyLSsolverResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### copy

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.copy" />

`NumPyLSsolverResult.copy()`

### from\_dict

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.from_dict" />

`static NumPyLSsolverResult.from_dict(a_dict)`

create new object from a dictionary

**Return type**

`NumPyLSsolverResult`

### fromkeys

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.fromkeys" />

`classmethod NumPyLSsolverResult.fromkeys(iterable, value=None)`

### get

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.get" />

`NumPyLSsolverResult.get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

### items

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.items" />

`NumPyLSsolverResult.items() → a set-like object providing a view on D’s items`

### keys

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.keys" />

`NumPyLSsolverResult.keys() → a set-like object providing a view on D’s keys`

### pop

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.pop" />

`NumPyLSsolverResult.pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`

### popitem

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.popitem" />

`NumPyLSsolverResult.popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]

### setdefault

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.setdefault" />

`NumPyLSsolverResult.setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

### update

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.update" />

`NumPyLSsolverResult.update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

### values

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.values" />

`NumPyLSsolverResult.values() → an object providing a view on D’s values`

## Attributes

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.eigvals" />

### eigvals

return eigvals

**Return type**

`ndarray`

<span id="qiskit.aqua.algorithms.NumPyLSsolverResult.solution" />

### solution

return solution

**Return type**

`ndarray`

