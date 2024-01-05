---
title: MaximumLikelihoodAmplitudeEstimationResult
description: API reference for qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult
---

# qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult" />

`MaximumLikelihoodAmplitudeEstimationResult(a_dict=None)`

MaximumLikelihoodAmplitudeEstimation Result.

### \_\_init\_\_

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.__init__" />

`__init__(a_dict=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

## Attributes

### a\_estimation

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.a_estimation" />

`property a_estimation`

return a\_estimation

**Return type**

`float`

### circuit\_results

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.circuit_results" />

`property circuit_results`

return circuit results

**Return type**

`Union`\[`List`\[`ndarray`], `List`\[`Dict`\[`str`, `int`]], `None`]

### clear

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.clear" />

`clear()`

**Return type**

`None`

### combine

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.combine" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### confidence\_interval

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.confidence_interval" />

`property confidence_interval`

return confidence\_interval

**Return type**

`List`\[`float`]

### estimation

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.estimation" />

`property estimation`

return estimation

**Return type**

`float`

### fisher\_information

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.fisher_information" />

`property fisher_information`

return fisher\_information

**Return type**

`float`

### from\_dict

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.from_dict" />

`static from_dict(a_dict)`

create new object from a dictionary

**Return type**

`MaximumLikelihoodAmplitudeEstimationResult`

### get

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.get" />

`get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

### items

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.items" />

`items() → a set-like object providing a view on D’s items`

### keys

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.keys" />

`keys() → a set-like object providing a view on D’s keys`

### num\_oracle\_queries

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.num_oracle_queries" />

`property num_oracle_queries`

return num\_oracle\_queries

**Return type**

`int`

### pop

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.pop" />

`pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`

### popitem

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.popitem" />

`popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]

### setdefault

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.setdefault" />

`setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

### theta

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.theta" />

`property theta`

returns theta

**Return type**

`float`

### update

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.update" />

`update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

### values

<span id="qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.values" />

`values() → an object providing a view on D’s values`

