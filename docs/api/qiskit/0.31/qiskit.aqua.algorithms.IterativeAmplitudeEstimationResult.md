---
title: IterativeAmplitudeEstimationResult
description: API reference for qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult
---

# IterativeAmplitudeEstimationResult

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult" />

`IterativeAmplitudeEstimationResult(a_dict=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/algorithms/amplitude_estimators/iqae.py "view source code")

Bases: `qiskit.aqua.algorithms.amplitude_estimators.ae_algorithm.AmplitudeEstimationAlgorithmResult`

IterativeAmplitudeEstimation Result.

## Methods

### clear

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.clear" />

`IterativeAmplitudeEstimationResult.clear()`

**Return type**

`None`

### combine

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.combine" />

`IterativeAmplitudeEstimationResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### copy

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.copy" />

`IterativeAmplitudeEstimationResult.copy()`

### from\_dict

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.from_dict" />

`static IterativeAmplitudeEstimationResult.from_dict(a_dict)`

create new object from a dictionary

**Return type**

`IterativeAmplitudeEstimationResult`

### fromkeys

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.fromkeys" />

`classmethod IterativeAmplitudeEstimationResult.fromkeys(iterable, value=None)`

### get

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.get" />

`IterativeAmplitudeEstimationResult.get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

### items

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.items" />

`IterativeAmplitudeEstimationResult.items() → a set-like object providing a view on D’s items`

### keys

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.keys" />

`IterativeAmplitudeEstimationResult.keys() → a set-like object providing a view on D’s keys`

### pop

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.pop" />

`IterativeAmplitudeEstimationResult.pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`

### popitem

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.popitem" />

`IterativeAmplitudeEstimationResult.popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]

### setdefault

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.setdefault" />

`IterativeAmplitudeEstimationResult.setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

### update

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.update" />

`IterativeAmplitudeEstimationResult.update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

### values

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.values" />

`IterativeAmplitudeEstimationResult.values() → an object providing a view on D’s values`

## Attributes

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.a_estimation" />

### a\_estimation

return a\_estimation

**Return type**

`float`

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.a_intervals" />

### a\_intervals

return a\_intervals

**Return type**

`List`\[`List`\[`float`]]

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.actual_epsilon" />

### actual\_epsilon

return mle

**Return type**

`float`

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.alpha" />

### alpha

return alpha

**Return type**

`float`

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.confidence_interval" />

### confidence\_interval

return confidence\_interval

**Return type**

`List`\[`float`]

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.estimation" />

### estimation

return estimation

**Return type**

`float`

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.num_oracle_queries" />

### num\_oracle\_queries

return num\_oracle\_queries

**Return type**

`int`

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.powers" />

### powers

return powers

**Return type**

`List`\[`int`]

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.ratios" />

### ratios

return ratios

**Return type**

`List`\[`float`]

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.theta_intervals" />

### theta\_intervals

return theta\_intervals

**Return type**

`List`\[`List`\[`float`]]

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.value_confidence_interval" />

### value\_confidence\_interval

return value\_confidence\_interval

**Return type**

`List`\[`float`]

