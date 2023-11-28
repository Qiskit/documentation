# ProbDistribution

<span id="undefined" />

`ProbDistribution(data, shots=None)`

Bases: `dict`

A generic dict-like class for probability distributions.

Builds a probability distribution object.

**Parameters**

*   **data** (*dict*) –

    Input probability data. Where the keys represent a measured classical value and the value is a float for the probability of that result. The keys can be one of several formats:

    > *   A hexadecimal string of the form `"0x4a"`
    > *   A bit string e.g. `'0b1011'` or `"01011"`
    > *   An integer

*   **shots** (*int*) – Number of shots the distribution was derived from.

**Raises**

*   **TypeError** – If the input keys are not a string or int
*   **ValueError** – If the string format of the keys is incorrect

## Methods

|                                                                                                                                                                                         |                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`binary_probabilities`](qiskit.result.ProbDistribution.binary_probabilities#qiskit.result.ProbDistribution.binary_probabilities "qiskit.result.ProbDistribution.binary_probabilities") | Build a probabilities dictionary with binary string keys                                                                                                                                                                      |
| [`clear`](qiskit.result.ProbDistribution.clear#qiskit.result.ProbDistribution.clear "qiskit.result.ProbDistribution.clear")                                                             |                                                                                                                                                                                                                               |
| [`copy`](qiskit.result.ProbDistribution.copy#qiskit.result.ProbDistribution.copy "qiskit.result.ProbDistribution.copy")                                                                 |                                                                                                                                                                                                                               |
| [`fromkeys`](qiskit.result.ProbDistribution.fromkeys#qiskit.result.ProbDistribution.fromkeys "qiskit.result.ProbDistribution.fromkeys")                                                 | Create a new dictionary with keys from iterable and values set to value.                                                                                                                                                      |
| [`get`](qiskit.result.ProbDistribution.get#qiskit.result.ProbDistribution.get "qiskit.result.ProbDistribution.get")                                                                     | Return the value for key if key is in the dictionary, else default.                                                                                                                                                           |
| [`hex_probabilities`](qiskit.result.ProbDistribution.hex_probabilities#qiskit.result.ProbDistribution.hex_probabilities "qiskit.result.ProbDistribution.hex_probabilities")             | Build a probabilities dictionary with hexadecimal string keys                                                                                                                                                                 |
| [`items`](qiskit.result.ProbDistribution.items#qiskit.result.ProbDistribution.items "qiskit.result.ProbDistribution.items")                                                             |                                                                                                                                                                                                                               |
| [`keys`](qiskit.result.ProbDistribution.keys#qiskit.result.ProbDistribution.keys "qiskit.result.ProbDistribution.keys")                                                                 |                                                                                                                                                                                                                               |
| [`pop`](qiskit.result.ProbDistribution.pop#qiskit.result.ProbDistribution.pop "qiskit.result.ProbDistribution.pop")                                                                     | If key is not found, d is returned if given, otherwise KeyError is raised                                                                                                                                                     |
| [`popitem`](qiskit.result.ProbDistribution.popitem#qiskit.result.ProbDistribution.popitem "qiskit.result.ProbDistribution.popitem")                                                     | 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                                    |
| [`setdefault`](qiskit.result.ProbDistribution.setdefault#qiskit.result.ProbDistribution.setdefault "qiskit.result.ProbDistribution.setdefault")                                         | Insert key with a value of default if key is not in the dictionary.                                                                                                                                                           |
| [`update`](qiskit.result.ProbDistribution.update#qiskit.result.ProbDistribution.update "qiskit.result.ProbDistribution.update")                                                         | If E is present and has a .keys() method, then does: for k in E: D\[k] = E\[k] If E is present and lacks a .keys() method, then does: for k, v in E: D\[k] = v In either case, this is followed by: for k in F: D\[k] = F\[k] |
| [`values`](qiskit.result.ProbDistribution.values#qiskit.result.ProbDistribution.values "qiskit.result.ProbDistribution.values")                                                         |                                                                                                                                                                                                                               |
