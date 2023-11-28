# qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult

<span id="undefined" />

`IterativeAmplitudeEstimationResult(a_dict=None)`

IterativeAmplitudeEstimation Result.

<span id="undefined" />

`__init__(a_dict=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                      |                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.__init__ "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.__init__")(\[a\_dict])   | Initialize self.                                                                                                                                                                                                     |
| [`clear`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.clear "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.clear")()                      | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.combine "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.combine")(result)          | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| `copy`()                                                                                                                                                             |                                                                                                                                                                                                                      |
| [`from_dict`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.from_dict "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.from_dict")(a\_dict)   | create new object from a dictionary                                                                                                                                                                                  |
| `fromkeys`(iterable\[, value])                                                                                                                                       |                                                                                                                                                                                                                      |
| [`get`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.get "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.get")(k\[,d])                      |                                                                                                                                                                                                                      |
| [`items`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.items "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.items")()                      |                                                                                                                                                                                                                      |
| [`keys`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.keys "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.keys")()                         |                                                                                                                                                                                                                      |
| [`pop`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.pop "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.pop")(key\[, default])             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.popitem "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.popitem")()                | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.setdefault "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.setdefault")(k\[,d]) |                                                                                                                                                                                                                      |
| [`update`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.update "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.update")(\*args, \*\*kwargs) | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.values "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.values")()                   |                                                                                                                                                                                                                      |

## Attributes

|                                                                                                                                                                                                           |                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`a_estimation`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.a_estimation "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.a_estimation")                                        | return a\_estimation               |
| [`a_intervals`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.a_intervals "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.a_intervals")                                           | return a\_intervals                |
| [`actual_epsilon`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.actual_epsilon "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.actual_epsilon")                                  | return mle                         |
| [`alpha`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.alpha "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.alpha")                                                             | return alpha                       |
| [`confidence_interval`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.confidence_interval "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.confidence_interval")                   | return confidence\_interval        |
| [`estimation`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.estimation "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.estimation")                                              | return estimation                  |
| [`num_oracle_queries`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.num_oracle_queries "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.num_oracle_queries")                      | return num\_oracle\_queries        |
| [`powers`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.powers "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.powers")                                                          | return powers                      |
| [`ratios`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.ratios "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.ratios")                                                          | return ratios                      |
| [`theta_intervals`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.theta_intervals "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.theta_intervals")                               | return theta\_intervals            |
| [`value_confidence_interval`](#qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.value_confidence_interval "qiskit.aqua.algorithms.IterativeAmplitudeEstimationResult.value_confidence_interval") | return value\_confidence\_interval |

<span id="undefined" />

`property a_estimation`

return a\_estimation

**Return type**

`float`

<span id="undefined" />

`property a_intervals`

return a\_intervals

**Return type**

`List`\[`List`\[`float`]]

<span id="undefined" />

`property actual_epsilon`

return mle

**Return type**

`float`

<span id="undefined" />

`property alpha`

return alpha

**Return type**

`float`

<span id="undefined" />

`clear()`

**Return type**

`None`

<span id="undefined" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

<span id="undefined" />

`property confidence_interval`

return confidence\_interval

**Return type**

`List`\[`float`]

<span id="undefined" />

`property estimation`

return estimation

**Return type**

`float`

<span id="undefined" />

`static from_dict(a_dict)`

create new object from a dictionary

**Return type**

`IterativeAmplitudeEstimationResult`

<span id="undefined" />

`get(k[, d]) → D[k] if k in D, else d. d defaults to None.`

<span id="undefined" />

`items() → a set-like object providing a view on D’s items`

<span id="undefined" />

`keys() → a set-like object providing a view on D’s keys`

<span id="undefined" />

`property num_oracle_queries`

return num\_oracle\_queries

**Return type**

`int`

<span id="undefined" />

`pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`

<span id="undefined" />

`popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]

<span id="undefined" />

`property powers`

return powers

**Return type**

`List`\[`int`]

<span id="undefined" />

`property ratios`

return ratios

**Return type**

`List`\[`float`]

<span id="undefined" />

`setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

<span id="undefined" />

`property theta_intervals`

return theta\_intervals

**Return type**

`List`\[`List`\[`float`]]

<span id="undefined" />

`update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

<span id="undefined" />

`property value_confidence_interval`

return value\_confidence\_interval

**Return type**

`List`\[`float`]

<span id="undefined" />

`values() → an object providing a view on D’s values`
