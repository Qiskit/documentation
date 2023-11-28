<span id="qiskit-aqua-algorithms-amplitudeestimationalgorithmresult" />

# qiskit.aqua.algorithms.AmplitudeEstimationAlgorithmResult

<span id="undefined" />

`AmplitudeEstimationAlgorithmResult(a_dict=None)`

AmplitudeEstimationAlgorithm Result.

<span id="undefined" />

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

<span id="undefined" />

`property a_estimation`

return a\_estimation

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

`AmplitudeEstimationAlgorithmResult`

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

`update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`

<span id="undefined" />

`values() → an object providing a view on D’s values`
