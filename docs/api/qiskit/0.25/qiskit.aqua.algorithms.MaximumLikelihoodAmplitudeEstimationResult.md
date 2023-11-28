# qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult

<span id="undefined" />

`MaximumLikelihoodAmplitudeEstimationResult(a_dict=None)`

MaximumLikelihoodAmplitudeEstimation Result.

<span id="undefined" />

`__init__(a_dict=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                                      |                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.__init__ "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.__init__")(\[a\_dict])   | Initialize self.                                                                                                                                                                                                     |
| [`clear`](#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.clear "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.clear")()                      | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.combine "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.combine")(result)          | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| `copy`()                                                                                                                                                                             |                                                                                                                                                                                                                      |
| [`from_dict`](#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.from_dict "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.from_dict")(a\_dict)   | create new object from a dictionary                                                                                                                                                                                  |
| `fromkeys`(iterable\[, value])                                                                                                                                                       |                                                                                                                                                                                                                      |
| [`get`](#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.get "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.get")(k\[,d])                      |                                                                                                                                                                                                                      |
| [`items`](#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.items "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.items")()                      |                                                                                                                                                                                                                      |
| [`keys`](#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.keys "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.keys")()                         |                                                                                                                                                                                                                      |
| [`pop`](#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.pop "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.pop")(key\[, default])             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.popitem "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.popitem")()                | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.setdefault "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.setdefault")(k\[,d]) |                                                                                                                                                                                                                      |
| [`update`](#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.update "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.update")(\*args, \*\*kwargs) | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.values "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.values")()                   |                                                                                                                                                                                                                      |

## Attributes

|                                                                                                                                                                                                         |                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| [`a_estimation`](#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.a_estimation "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.a_estimation")                      | return a\_estimation        |
| [`circuit_results`](#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.circuit_results "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.circuit_results")             | return circuit results      |
| [`confidence_interval`](#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.confidence_interval "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.confidence_interval") | return confidence\_interval |
| [`estimation`](#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.estimation "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.estimation")                            | return estimation           |
| [`fisher_information`](#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.fisher_information "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.fisher_information")    | return fisher\_information  |
| [`num_oracle_queries`](#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.num_oracle_queries "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.num_oracle_queries")    | return num\_oracle\_queries |
| [`theta`](#qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.theta "qiskit.aqua.algorithms.MaximumLikelihoodAmplitudeEstimationResult.theta")                                           | returns theta               |

<span id="undefined" />

`property a_estimation`

return a\_estimation

**Return type**

`float`

<span id="undefined" />

`property circuit_results`

return circuit results

**Return type**

`Union`\[`List`\[`ndarray`], `List`\[`Dict`\[`str`, `int`]], `None`]

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

`property fisher_information`

return fisher\_information

**Return type**

`float`

<span id="undefined" />

`static from_dict(a_dict)`

create new object from a dictionary

**Return type**

`MaximumLikelihoodAmplitudeEstimationResult`

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

`setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`

<span id="undefined" />

`property theta`

returns theta

**Return type**

`float`

<span id="undefined" />

`update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

<span id="undefined" />

`values() → an object providing a view on D’s values`
