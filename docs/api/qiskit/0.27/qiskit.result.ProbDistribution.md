---
title: ProbDistribution
description: API reference for qiskit.result.ProbDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.result.ProbDistribution
---

# qiskit.result.ProbDistribution

<span id="qiskit.result.ProbDistribution" />

`ProbDistribution(data, shots=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.17/qiskit/result/distributions/probability.py "view source code")

A generic dict-like class for probability distributions.

<Admonition title="Warning" type="caution">
  This is an unsupported class in the current 0.17.x release series. It is present for compatibility with the qiskit-ibmq-provider’s beta qiskit runtime support, but this interface isn’t guaranteed to be stable when moving to >=0.18.0 and likely will change.
</Admonition>

Builds a probability distribution object.

**Parameters**

*   **data** (*dict*) – Input probability data.
*   **shots** (*int*) – Number of shots the distribution was derived from.

### \_\_init\_\_

<span id="qiskit.result.ProbDistribution.__init__" />

`__init__(data, shots=None)`

Builds a probability distribution object.

**Parameters**

*   **data** (*dict*) – Input probability data.
*   **shots** (*int*) – Number of shots the distribution was derived from.

## Methods

|                                                                                                                         |                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.result.ProbDistribution.__init__ "qiskit.result.ProbDistribution.__init__")(data\[, shots])        | Builds a probability distribution object.                                                                                                                                                                                     |
| [`clear`](#qiskit.result.ProbDistribution.clear "qiskit.result.ProbDistribution.clear")()                               |                                                                                                                                                                                                                               |
| [`copy`](#qiskit.result.ProbDistribution.copy "qiskit.result.ProbDistribution.copy")()                                  |                                                                                                                                                                                                                               |
| [`fromkeys`](#qiskit.result.ProbDistribution.fromkeys "qiskit.result.ProbDistribution.fromkeys")(\[value])              | Create a new dictionary with keys from iterable and values set to value.                                                                                                                                                      |
| [`get`](#qiskit.result.ProbDistribution.get "qiskit.result.ProbDistribution.get")(key\[, default])                      | Return the value for key if key is in the dictionary, else default.                                                                                                                                                           |
| [`items`](#qiskit.result.ProbDistribution.items "qiskit.result.ProbDistribution.items")()                               |                                                                                                                                                                                                                               |
| [`keys`](#qiskit.result.ProbDistribution.keys "qiskit.result.ProbDistribution.keys")()                                  |                                                                                                                                                                                                                               |
| [`pop`](#qiskit.result.ProbDistribution.pop "qiskit.result.ProbDistribution.pop")(k\[,d])                               | If key is not found, d is returned if given, otherwise KeyError is raised                                                                                                                                                     |
| [`popitem`](#qiskit.result.ProbDistribution.popitem "qiskit.result.ProbDistribution.popitem")()                         | 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                                    |
| [`setdefault`](#qiskit.result.ProbDistribution.setdefault "qiskit.result.ProbDistribution.setdefault")(key\[, default]) | Insert key with a value of default if key is not in the dictionary.                                                                                                                                                           |
| [`update`](#qiskit.result.ProbDistribution.update "qiskit.result.ProbDistribution.update")(\[E, ]\*\*F)                 | If E is present and has a .keys() method, then does: for k in E: D\[k] = E\[k] If E is present and lacks a .keys() method, then does: for k, v in E: D\[k] = v In either case, this is followed by: for k in F: D\[k] = F\[k] |
| [`values`](#qiskit.result.ProbDistribution.values "qiskit.result.ProbDistribution.values")()                            |                                                                                                                                                                                                                               |

### clear

<span id="qiskit.result.ProbDistribution.clear" />

`clear() → None. Remove all items from D.`

### copy

<span id="qiskit.result.ProbDistribution.copy" />

`copy() → a shallow copy of D`

### fromkeys

<span id="qiskit.result.ProbDistribution.fromkeys" />

`fromkeys(value=None, /)`

Create a new dictionary with keys from iterable and values set to value.

### get

<span id="qiskit.result.ProbDistribution.get" />

`get(key, default=None, /)`

Return the value for key if key is in the dictionary, else default.

### items

<span id="qiskit.result.ProbDistribution.items" />

`items() → a set-like object providing a view on D’s items`

### keys

<span id="qiskit.result.ProbDistribution.keys" />

`keys() → a set-like object providing a view on D’s keys`

### pop

<span id="qiskit.result.ProbDistribution.pop" />

`pop(k[, d]) → v, remove specified key and return the corresponding value.`

If key is not found, d is returned if given, otherwise KeyError is raised

### popitem

<span id="qiskit.result.ProbDistribution.popitem" />

`popitem() → (k, v), remove and return some (key, value) pair as a`

2-tuple; but raise KeyError if D is empty.

### setdefault

<span id="qiskit.result.ProbDistribution.setdefault" />

`setdefault(key, default=None, /)`

Insert key with a value of default if key is not in the dictionary.

Return the value for key if key is in the dictionary, else default.

### update

<span id="qiskit.result.ProbDistribution.update" />

`update([E, ]**F) → None. Update D from dict/iterable E and F.`

If E is present and has a .keys() method, then does: for k in E: D\[k] = E\[k] If E is present and lacks a .keys() method, then does: for k, v in E: D\[k] = v In either case, this is followed by: for k in F: D\[k] = F\[k]

### values

<span id="qiskit.result.ProbDistribution.values" />

`values() → an object providing a view on D’s values`

