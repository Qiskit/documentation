---
title: MinimumEigensolverResult
description: API reference for qiskit.aqua.algorithms.MinimumEigensolverResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.MinimumEigensolverResult
---

# MinimumEigensolverResult

<span id="qiskit.aqua.algorithms.MinimumEigensolverResult" />

`MinimumEigensolverResult(a_dict=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/algorithms/minimum_eigen_solvers/minimum_eigen_solver.py "view source code")

Bases: `qiskit.aqua.algorithms.algorithm_result.AlgorithmResult`

Minimum Eigensolver Result.

## Methods

### clear

<span id="qiskit.aqua.algorithms.MinimumEigensolverResult.clear" />

`MinimumEigensolverResult.clear()`

**Return type**

`None`

### combine

<span id="qiskit.aqua.algorithms.MinimumEigensolverResult.combine" />

`MinimumEigensolverResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### copy

<span id="qiskit.aqua.algorithms.MinimumEigensolverResult.copy" />

`MinimumEigensolverResult.copy()`

### from\_dict

<span id="qiskit.aqua.algorithms.MinimumEigensolverResult.from_dict" />

`static MinimumEigensolverResult.from_dict(a_dict)`

create new object from a dictionary

**Return type**

`MinimumEigensolverResult`

### fromkeys

<span id="qiskit.aqua.algorithms.MinimumEigensolverResult.fromkeys" />

`classmethod MinimumEigensolverResult.fromkeys(iterable, value=None)`

### get

<span id="qiskit.aqua.algorithms.MinimumEigensolverResult.get" />

`MinimumEigensolverResult.get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

### items

<span id="qiskit.aqua.algorithms.MinimumEigensolverResult.items" />

`MinimumEigensolverResult.items() → a set-like object providing a view on D’s items`

### keys

<span id="qiskit.aqua.algorithms.MinimumEigensolverResult.keys" />

`MinimumEigensolverResult.keys() → a set-like object providing a view on D’s keys`

### pop

<span id="qiskit.aqua.algorithms.MinimumEigensolverResult.pop" />

`MinimumEigensolverResult.pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`

### popitem

<span id="qiskit.aqua.algorithms.MinimumEigensolverResult.popitem" />

`MinimumEigensolverResult.popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]

### setdefault

<span id="qiskit.aqua.algorithms.MinimumEigensolverResult.setdefault" />

`MinimumEigensolverResult.setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

### update

<span id="qiskit.aqua.algorithms.MinimumEigensolverResult.update" />

`MinimumEigensolverResult.update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

### values

<span id="qiskit.aqua.algorithms.MinimumEigensolverResult.values" />

`MinimumEigensolverResult.values() → an object providing a view on D’s values`

## Attributes

<span id="qiskit.aqua.algorithms.MinimumEigensolverResult.aux_operator_eigenvalues" />

### aux\_operator\_eigenvalues

return aux operator eigen values

**Return type**

`Optional`\[`ndarray`]

<span id="qiskit.aqua.algorithms.MinimumEigensolverResult.eigenstate" />

### eigenstate

return eigen state

**Return type**

`Optional`\[`ndarray`]

<span id="qiskit.aqua.algorithms.MinimumEigensolverResult.eigenvalue" />

### eigenvalue

returns eigen value

**Return type**

`Optional`\[`complex`]

