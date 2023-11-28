# QuasiDistribution

<span id="undefined" />

`QuasiDistribution(data, shots=None, stddev_upper_bound=None)`

Bases: `dict`

A dict-like class for representing qasi-probabilities.

Builds a quasiprobability distribution object.

**Parameters**

*   **data** (*dict*) –

    Input quasiprobability data. Where the keys represent a measured classical value and the value is a float for the quasiprobability of that result. The keys can be one of several formats:

    > *   A hexadecimal string of the form `"0x4a"`
    > *   A bit string e.g. `'0b1011'` or `"01011"`
    > *   An integer

*   **shots** (*int*) – Number of shots the distribution was derived from.

*   **stddev\_upper\_bound** (*float*) – An upper bound for the standard deviation

**Raises**

*   **TypeError** – If the input keys are not a string or int
*   **ValueError** – If the string format of the keys is incorrect

## Methods

|                                                                                                                                                                                                                                            |                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`binary_probabilities`](qiskit.result.QuasiDistribution.binary_probabilities#qiskit.result.QuasiDistribution.binary_probabilities "qiskit.result.QuasiDistribution.binary_probabilities")                                                 | Build a quasi-probabilities dictionary with binary string keys                                                                                                                                                                |
| [`clear`](qiskit.result.QuasiDistribution.clear#qiskit.result.QuasiDistribution.clear "qiskit.result.QuasiDistribution.clear")                                                                                                             |                                                                                                                                                                                                                               |
| [`copy`](qiskit.result.QuasiDistribution.copy#qiskit.result.QuasiDistribution.copy "qiskit.result.QuasiDistribution.copy")                                                                                                                 |                                                                                                                                                                                                                               |
| [`fromkeys`](qiskit.result.QuasiDistribution.fromkeys#qiskit.result.QuasiDistribution.fromkeys "qiskit.result.QuasiDistribution.fromkeys")                                                                                                 | Create a new dictionary with keys from iterable and values set to value.                                                                                                                                                      |
| [`get`](qiskit.result.QuasiDistribution.get#qiskit.result.QuasiDistribution.get "qiskit.result.QuasiDistribution.get")                                                                                                                     | Return the value for key if key is in the dictionary, else default.                                                                                                                                                           |
| [`hex_probabilities`](qiskit.result.QuasiDistribution.hex_probabilities#qiskit.result.QuasiDistribution.hex_probabilities "qiskit.result.QuasiDistribution.hex_probabilities")                                                             | Build a quasi-probabilities dictionary with hexadecimal string keys                                                                                                                                                           |
| [`items`](qiskit.result.QuasiDistribution.items#qiskit.result.QuasiDistribution.items "qiskit.result.QuasiDistribution.items")                                                                                                             |                                                                                                                                                                                                                               |
| [`keys`](qiskit.result.QuasiDistribution.keys#qiskit.result.QuasiDistribution.keys "qiskit.result.QuasiDistribution.keys")                                                                                                                 |                                                                                                                                                                                                                               |
| [`nearest_probability_distribution`](qiskit.result.QuasiDistribution.nearest_probability_distribution#qiskit.result.QuasiDistribution.nearest_probability_distribution "qiskit.result.QuasiDistribution.nearest_probability_distribution") | Takes a quasiprobability distribution and maps it to the closest probability distribution as defined by the L2-norm.                                                                                                          |
| [`pop`](qiskit.result.QuasiDistribution.pop#qiskit.result.QuasiDistribution.pop "qiskit.result.QuasiDistribution.pop")                                                                                                                     | If key is not found, d is returned if given, otherwise KeyError is raised                                                                                                                                                     |
| [`popitem`](qiskit.result.QuasiDistribution.popitem#qiskit.result.QuasiDistribution.popitem "qiskit.result.QuasiDistribution.popitem")                                                                                                     | Remove and return a (key, value) pair as a 2-tuple.                                                                                                                                                                           |
| [`setdefault`](qiskit.result.QuasiDistribution.setdefault#qiskit.result.QuasiDistribution.setdefault "qiskit.result.QuasiDistribution.setdefault")                                                                                         | Insert key with a value of default if key is not in the dictionary.                                                                                                                                                           |
| [`update`](qiskit.result.QuasiDistribution.update#qiskit.result.QuasiDistribution.update "qiskit.result.QuasiDistribution.update")                                                                                                         | If E is present and has a .keys() method, then does: for k in E: D\[k] = E\[k] If E is present and lacks a .keys() method, then does: for k, v in E: D\[k] = v In either case, this is followed by: for k in F: D\[k] = F\[k] |
| [`values`](qiskit.result.QuasiDistribution.values#qiskit.result.QuasiDistribution.values "qiskit.result.QuasiDistribution.values")                                                                                                         |                                                                                                                                                                                                                               |

## Attributes

<span id="undefined" />

### stddev\_upper\_bound

Return an upper bound on standard deviation of expval estimator.
