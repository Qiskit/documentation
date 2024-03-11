---
title: AmplitudeEstimationAlgorithmResult
description: API reference for qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult
---

<span id="qiskit-aqua-algorithms-amplitudeestimationalgorithmresult" />

# qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult

<span id="qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult" />

`AmplitudeEstimationAlgorithmResult(a_dict=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/aqua/algorithms/amplitude_estimators/ae_algorithm.py "view source code")

AmplitudeEstimationAlgorithm Result.

### \_\_init\_\_

<span id="qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.__init__" />

`__init__(a_dict=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                      |                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.__init__ "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.__init__")(\[a\_dict])   | Initialize self.                                                                                                                                                                                                     |
| [`clear`](#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.clear "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.clear")()                      | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.combine "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.combine")(result)          | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| `copy`()                                                                                                                                                             |                                                                                                                                                                                                                      |
| [`from_dict`](#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.from_dict "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.from_dict")(a\_dict)   | create new object from a dictionary                                                                                                                                                                                  |
| `fromkeys`(iterable\[, value])                                                                                                                                       |                                                                                                                                                                                                                      |
| [`get`](#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.get "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.get")(k\[,d])                      |                                                                                                                                                                                                                      |
| [`items`](#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.items "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.items")()                      |                                                                                                                                                                                                                      |
| [`keys`](#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.keys "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.keys")()                         |                                                                                                                                                                                                                      |
| [`pop`](#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.pop "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.pop")(key\[, default])             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.popitem "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.popitem")()                | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.setdefault "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.setdefault")(k\[,d]) |                                                                                                                                                                                                                      |
| [`update`](#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.update "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.update")(\*args, \*\*kwargs) | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.values "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.values")()                   |                                                                                                                                                                                                                      |

## Attributes

|                                                                                                                                                                                         |                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| [`a_estimation`](#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.a_estimation "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.a_estimation")                      | return a\_estimation        |
| [`confidence_interval`](#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.confidence_interval "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.confidence_interval") | return confidence\_interval |
| [`estimation`](#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.estimation "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.estimation")                            | return estimation           |
| [`num_oracle_queries`](#qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.num_oracle_queries "qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.num_oracle_queries")    | return num\_oracle\_queries |

### a\_estimation

<span id="qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.a_estimation" />

`property a_estimation`

return a\_estimation

**Return type**

`float`

### clear

<span id="qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.clear" />

`clear()`

**Return type**

`None`

### combine

<span id="qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.combine" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### confidence\_interval

<span id="qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.confidence_interval" />

`property confidence_interval`

return confidence\_interval

**Return type**

`List`\[`float`]

### estimation

<span id="qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.estimation" />

`property estimation`

return estimation

**Return type**

`float`

### from\_dict

<span id="qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.from_dict" />

`static from_dict(a_dict)`

create new object from a dictionary

**Return type**

`AmplitudeEstimationAlgorithmResult`

### get

<span id="qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.get" />

`get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

### items

<span id="qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.items" />

`items() → a set-like object providing a view on D’s items`

### keys

<span id="qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.keys" />

`keys() → a set-like object providing a view on D’s keys`

### num\_oracle\_queries

<span id="qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.num_oracle_queries" />

`property num_oracle_queries`

return num\_oracle\_queries

**Return type**

`int`

### pop

<span id="qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.pop" />

`pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`

### popitem

<span id="qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.popitem" />

`popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]

### setdefault

<span id="qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.setdefault" />

`setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

### update

<span id="qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.update" />

`update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

### values

<span id="qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult.values" />

`values() → an object providing a view on D’s values`

