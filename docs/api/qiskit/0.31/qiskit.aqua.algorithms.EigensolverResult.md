---
title: EigensolverResult
description: API reference for qiskit.aqua.algorithms.EigensolverResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.EigensolverResult
---

# EigensolverResult

<span id="qiskit.aqua.algorithms.EigensolverResult" />

`EigensolverResult(a_dict=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/algorithms/eigen_solvers/eigen_solver.py "view source code")

Bases: `qiskit.aqua.algorithms.algorithm_result.AlgorithmResult`

Eigensolver Result.

## Methods

### clear

<span id="qiskit.aqua.algorithms.EigensolverResult.clear" />

`EigensolverResult.clear()`

**Return type**

`None`

### combine

<span id="qiskit.aqua.algorithms.EigensolverResult.combine" />

`EigensolverResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### copy

<span id="qiskit.aqua.algorithms.EigensolverResult.copy" />

`EigensolverResult.copy()`

### from\_dict

<span id="qiskit.aqua.algorithms.EigensolverResult.from_dict" />

`static EigensolverResult.from_dict(a_dict)`

create new object from a dictionary

**Return type**

`EigensolverResult`

### fromkeys

<span id="qiskit.aqua.algorithms.EigensolverResult.fromkeys" />

`classmethod EigensolverResult.fromkeys(iterable, value=None)`

### get

<span id="qiskit.aqua.algorithms.EigensolverResult.get" />

`EigensolverResult.get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

### items

<span id="qiskit.aqua.algorithms.EigensolverResult.items" />

`EigensolverResult.items() → a set-like object providing a view on D’s items`

### keys

<span id="qiskit.aqua.algorithms.EigensolverResult.keys" />

`EigensolverResult.keys() → a set-like object providing a view on D’s keys`

### pop

<span id="qiskit.aqua.algorithms.EigensolverResult.pop" />

`EigensolverResult.pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`

### popitem

<span id="qiskit.aqua.algorithms.EigensolverResult.popitem" />

`EigensolverResult.popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]

### setdefault

<span id="qiskit.aqua.algorithms.EigensolverResult.setdefault" />

`EigensolverResult.setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

### update

<span id="qiskit.aqua.algorithms.EigensolverResult.update" />

`EigensolverResult.update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

### values

<span id="qiskit.aqua.algorithms.EigensolverResult.values" />

`EigensolverResult.values() → an object providing a view on D’s values`

## Attributes

<span id="qiskit.aqua.algorithms.EigensolverResult.aux_operator_eigenvalues" />

### aux\_operator\_eigenvalues

return aux operator eigen values

**Return type**

`Optional`\[`ndarray`]

<span id="qiskit.aqua.algorithms.EigensolverResult.eigenstates" />

### eigenstates

return eigen states

**Return type**

`Optional`\[`ndarray`]

<span id="qiskit.aqua.algorithms.EigensolverResult.eigenvalues" />

### eigenvalues

returns eigen values

**Return type**

`Optional`\[`ndarray`]

