# qiskit.aqua.algorithms.AmplitudeEstimationResult



`AmplitudeEstimationResult(a_dict=None)`

AmplitudeEstimation Result.



`__init__(a_dict=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                    |                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.__init__ "qiskit.aqua.algorithms.AmplitudeEstimationResult.__init__")(\[a\_dict])   | Initialize self.                                                                                                                                                                                                     |
| [`clear`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.clear "qiskit.aqua.algorithms.AmplitudeEstimationResult.clear")()                      | **rtype**`None`                                                                                                                                                                                                      |
| [`combine`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.combine "qiskit.aqua.algorithms.AmplitudeEstimationResult.combine")(result)          | Any property from the argument that exists in the receiver is updated.                                                                                                                                               |
| `copy`()                                                                                                                                           |                                                                                                                                                                                                                      |
| [`from_dict`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.from_dict "qiskit.aqua.algorithms.AmplitudeEstimationResult.from_dict")(a\_dict)   | create new object from a dictionary                                                                                                                                                                                  |
| `fromkeys`(iterable\[, value])                                                                                                                     |                                                                                                                                                                                                                      |
| [`get`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.get "qiskit.aqua.algorithms.AmplitudeEstimationResult.get")(k\[,d])                      |                                                                                                                                                                                                                      |
| [`items`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.items "qiskit.aqua.algorithms.AmplitudeEstimationResult.items")()                      |                                                                                                                                                                                                                      |
| [`keys`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.keys "qiskit.aqua.algorithms.AmplitudeEstimationResult.keys")()                         |                                                                                                                                                                                                                      |
| [`pop`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.pop "qiskit.aqua.algorithms.AmplitudeEstimationResult.pop")(key\[, default])             | If key is not found, d is returned if given, otherwise KeyError is raised.                                                                                                                                           |
| [`popitem`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.popitem "qiskit.aqua.algorithms.AmplitudeEstimationResult.popitem")()                | as a 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                      |
| [`setdefault`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.setdefault "qiskit.aqua.algorithms.AmplitudeEstimationResult.setdefault")(k\[,d]) |                                                                                                                                                                                                                      |
| [`update`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.update "qiskit.aqua.algorithms.AmplitudeEstimationResult.update")(\*args, \*\*kwargs) | If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v |
| [`values`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.values "qiskit.aqua.algorithms.AmplitudeEstimationResult.values")()                   |                                                                                                                                                                                                                      |

## Attributes

|                                                                                                                                                                       |                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| [`a_estimation`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.a_estimation "qiskit.aqua.algorithms.AmplitudeEstimationResult.a_estimation")                      | return a\_estimation        |
| [`a_samples`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.a_samples "qiskit.aqua.algorithms.AmplitudeEstimationResult.a_samples")                               | return a\_samples           |
| [`circuit_result`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.circuit_result "qiskit.aqua.algorithms.AmplitudeEstimationResult.circuit_result")                | return circuit result       |
| [`confidence_interval`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.confidence_interval "qiskit.aqua.algorithms.AmplitudeEstimationResult.confidence_interval") | return confidence\_interval |
| [`estimation`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.estimation "qiskit.aqua.algorithms.AmplitudeEstimationResult.estimation")                            | return estimation           |
| [`mapped_a_samples`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.mapped_a_samples "qiskit.aqua.algorithms.AmplitudeEstimationResult.mapped_a_samples")          | return mapped\_a\_samples   |
| [`mapped_values`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.mapped_values "qiskit.aqua.algorithms.AmplitudeEstimationResult.mapped_values")                   | return mapped\_values       |
| [`max_probability`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.max_probability "qiskit.aqua.algorithms.AmplitudeEstimationResult.max_probability")             | return max\_probability     |
| [`ml_value`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.ml_value "qiskit.aqua.algorithms.AmplitudeEstimationResult.ml_value")                                  | returns ml\_value           |
| [`mle`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.mle "qiskit.aqua.algorithms.AmplitudeEstimationResult.mle")                                                 | return mle                  |
| [`num_oracle_queries`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.num_oracle_queries "qiskit.aqua.algorithms.AmplitudeEstimationResult.num_oracle_queries")    | return num\_oracle\_queries |
| [`probabilities`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.probabilities "qiskit.aqua.algorithms.AmplitudeEstimationResult.probabilities")                   | return probabilities        |
| [`shots`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.shots "qiskit.aqua.algorithms.AmplitudeEstimationResult.shots")                                           | return shots                |
| [`y_measurements`](#qiskit.aqua.algorithms.AmplitudeEstimationResult.y_measurements "qiskit.aqua.algorithms.AmplitudeEstimationResult.y_measurements")                | return y\_measurements      |



`property a_estimation`

return a\_estimation

**Return type**

`float`



`property a_samples`

return a\_samples

**Return type**

`List`\[`Tuple`\[`float`, `float`]]



`property circuit_result`

return circuit result

**Return type**

`Union`\[`ndarray`, `Dict`\[`str`, `int`], `None`]



`clear()`

**Return type**

`None`



`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`



`property confidence_interval`

return confidence\_interval

**Return type**

`List`\[`float`]



`property estimation`

return estimation

**Return type**

`float`



`static from_dict(a_dict)`

create new object from a dictionary

**Return type**

`AmplitudeEstimationResult`



`get(k[, d]) → D[k] if k in D, else d. d defaults to None.`



`items() → a set-like object providing a view on D’s items`



`keys() → a set-like object providing a view on D’s keys`



`property mapped_a_samples`

return mapped\_a\_samples

**Return type**

`List`\[`float`]



`property mapped_values`

return mapped\_values

**Return type**

`List`\[`float`]



`property max_probability`

return max\_probability

**Return type**

`float`



`property ml_value`

returns ml\_value

**Return type**

`float`



`property mle`

return mle

**Return type**

`float`



`property num_oracle_queries`

return num\_oracle\_queries

**Return type**

`int`



`pop(key, default=None)`

If key is not found, d is returned if given, otherwise KeyError is raised.

**Return type**

`object`



`popitem()`

as a 2-tuple; but raise KeyError if D is empty.

**Return type**

`Tuple`\[`object`, `object`]



`property probabilities`

return probabilities

**Return type**

`List`\[`float`]



`setdefault(k[, d]) → D.get(k,d), also set D[k]=d if k not in D`



`property shots`

return shots

**Return type**

`int`



`update(*args, **kwargs)`

If E present and has a .keys() method, does: for k in E: D\[k] = E\[k] If E present and lacks .keys() method, does: for (k, v) in E: D\[k] = v In either case, this is followed by: for k, v in F.items(): D\[k] = v

**Return type**

`None`



`values() → an object providing a view on D’s values`



`property y_measurements`

return y\_measurements

**Return type**

`List`\[`Tuple`\[`int`, `float`]]
