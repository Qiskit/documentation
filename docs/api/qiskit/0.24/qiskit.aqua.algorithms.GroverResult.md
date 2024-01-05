---
title: GroverResult
description: API reference for qiskit.aqua.algorithms.GroverResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.GroverResult
---

<span id="qiskit-aqua-algorithms-groverresult" />

# qiskit.aqua.algorithms.GroverResult

<span id="qiskit.aqua.algorithms.GroverResult" />

`GroverResult(a_dict=None)`

Grover Result.

### \_\_init\_\_

<span id="qiskit.aqua.algorithms.GroverResult.__init__" />

`__init__(a_dict=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

## Attributes

### assignment

<span id="qiskit.aqua.algorithms.GroverResult.assignment" />

`property assignment`

return assignment

**Return type**

`List`\[`int`]

### circuit

<span id="qiskit.aqua.algorithms.GroverResult.circuit" />

`property circuit`

return circuit

**Return type**

`Optional`\[`QuantumCircuit`]

### clear

<span id="qiskit.aqua.algorithms.GroverResult.clear" />

`clear()`

**Return type**

`None`

### combine

<span id="qiskit.aqua.algorithms.GroverResult.combine" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### from\_dict

<span id="qiskit.aqua.algorithms.GroverResult.from_dict" />

`static from_dict(a_dict)`

create new object from a dictionary

**Return type**

`GroverResult`

### get

<span id="qiskit.aqua.algorithms.GroverResult.get" />

`get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

### items

<span id="qiskit.aqua.algorithms.GroverResult.items" />

`items() → a set-like object providing a view on D’s items`

### keys

<span id="qiskit.aqua.algorithms.GroverResult.keys" />

`keys() → a set-like object providing a view on D’s keys`

### measurement

<span id="qiskit.aqua.algorithms.GroverResult.measurement" />

`property measurement`

returns measurement

**Return type**

`Optional`\[`Dict`\[`str`, `int`]]

### oracle\_evaluation

<span id="qiskit.aqua.algorithms.GroverResult.oracle_evaluation" />

`property oracle_evaluation`

return oracle evaluation

**Return type**

`bool`

### pop

<span id="qiskit.aqua.algorithms.GroverResult.pop" />

`pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`

### popitem

<span id="qiskit.aqua.algorithms.GroverResult.popitem" />

`popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]

### setdefault

<span id="qiskit.aqua.algorithms.GroverResult.setdefault" />

`setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

### top\_measurement

<span id="qiskit.aqua.algorithms.GroverResult.top_measurement" />

`property top_measurement`

return top measurement

**Return type**

`Optional`\[`str`]

### update

<span id="qiskit.aqua.algorithms.GroverResult.update" />

`update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

### values

<span id="qiskit.aqua.algorithms.GroverResult.values" />

`values() → an object providing a view on D’s values`

