# qiskit.result.QuasiDistribution

<span id="undefined" />

`QuasiDistribution(data, shots=None)`

A dict-like class for representing qasi-probabilities.

Builds a quasiprobability distribution object.

**Parameters**

*   **data** (*dict*) –

    Input quasiprobability data. Where the keys represent a measured classical value and the value is a float for the quasiprobability of that result. The keys can be one of several formats:

    > *   A hexadecimal string of the form `"0x4a"`
    > *   A bit string e.g. `'0b1011'` or `"01011"`
    > *   An integer

*   **shots** (*int*) – Number of shots the distribution was derived from.

**Raises**

*   **TypeError** – If the input keys are not a string or int
*   **ValueError** – If the string format of the keys is incorrect

<span id="undefined" />

`__init__(data, shots=None)`

Builds a quasiprobability distribution object.

**Parameters**

*   **data** (*dict*) –

    Input quasiprobability data. Where the keys represent a measured classical value and the value is a float for the quasiprobability of that result. The keys can be one of several formats:

    > *   A hexadecimal string of the form `"0x4a"`
    > *   A bit string e.g. `'0b1011'` or `"01011"`
    > *   An integer

*   **shots** (*int*) – Number of shots the distribution was derived from.

**Raises**

*   **TypeError** – If the input keys are not a string or int
*   **ValueError** – If the string format of the keys is incorrect

## Methods

|                                                                                                                                                                                  |                                                                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.result.QuasiDistribution.__init__ "qiskit.result.QuasiDistribution.__init__")(data\[, shots])                                                               | Builds a quasiprobability distribution object.                                                                                                                                                                                |
| [`binary_probabilities`](#qiskit.result.QuasiDistribution.binary_probabilities "qiskit.result.QuasiDistribution.binary_probabilities")(\[num\_bits])                             | Build a quasi-probabilities dictionary with binary string keys                                                                                                                                                                |
| [`clear`](#qiskit.result.QuasiDistribution.clear "qiskit.result.QuasiDistribution.clear")()                                                                                      |                                                                                                                                                                                                                               |
| [`copy`](#qiskit.result.QuasiDistribution.copy "qiskit.result.QuasiDistribution.copy")()                                                                                         |                                                                                                                                                                                                                               |
| [`fromkeys`](#qiskit.result.QuasiDistribution.fromkeys "qiskit.result.QuasiDistribution.fromkeys")(\[value])                                                                     | Create a new dictionary with keys from iterable and values set to value.                                                                                                                                                      |
| [`get`](#qiskit.result.QuasiDistribution.get "qiskit.result.QuasiDistribution.get")(key\[, default])                                                                             | Return the value for key if key is in the dictionary, else default.                                                                                                                                                           |
| [`hex_probabilities`](#qiskit.result.QuasiDistribution.hex_probabilities "qiskit.result.QuasiDistribution.hex_probabilities")()                                                  | Build a quasi-probabilities dictionary with hexadecimal string keys                                                                                                                                                           |
| [`items`](#qiskit.result.QuasiDistribution.items "qiskit.result.QuasiDistribution.items")()                                                                                      |                                                                                                                                                                                                                               |
| [`keys`](#qiskit.result.QuasiDistribution.keys "qiskit.result.QuasiDistribution.keys")()                                                                                         |                                                                                                                                                                                                                               |
| [`nearest_probability_distribution`](#qiskit.result.QuasiDistribution.nearest_probability_distribution "qiskit.result.QuasiDistribution.nearest_probability_distribution")(\[…]) | Takes a quasiprobability distribution and maps it to the closest probability distribution as defined by the L2-norm.                                                                                                          |
| [`pop`](#qiskit.result.QuasiDistribution.pop "qiskit.result.QuasiDistribution.pop")(k\[,d])                                                                                      | If key is not found, d is returned if given, otherwise KeyError is raised                                                                                                                                                     |
| [`popitem`](#qiskit.result.QuasiDistribution.popitem "qiskit.result.QuasiDistribution.popitem")()                                                                                | 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                                    |
| [`setdefault`](#qiskit.result.QuasiDistribution.setdefault "qiskit.result.QuasiDistribution.setdefault")(key\[, default])                                                        | Insert key with a value of default if key is not in the dictionary.                                                                                                                                                           |
| [`update`](#qiskit.result.QuasiDistribution.update "qiskit.result.QuasiDistribution.update")(\[E, ]\*\*F)                                                                        | If E is present and has a .keys() method, then does: for k in E: D\[k] = E\[k] If E is present and lacks a .keys() method, then does: for k, v in E: D\[k] = v In either case, this is followed by: for k in F: D\[k] = F\[k] |
| [`values`](#qiskit.result.QuasiDistribution.values "qiskit.result.QuasiDistribution.values")()                                                                                   |                                                                                                                                                                                                                               |

<span id="undefined" />

`binary_probabilities(num_bits=None)`

Build a quasi-probabilities dictionary with binary string keys

**Parameters**

**num\_bits** (*int*) – number of bits in the binary bitstrings (leading zeros will be padded). If None, the length will be derived from the largest key present.

**Returns**

**A dictionary where the keys are binary strings in the format**

`"0110"`

**Return type**

dict

<span id="undefined" />

`clear() → None. Remove all items from D.`

<span id="undefined" />

`copy() → a shallow copy of D`

<span id="undefined" />

`fromkeys(value=None, /)`

Create a new dictionary with keys from iterable and values set to value.

<span id="undefined" />

`get(key, default=None, /)`

Return the value for key if key is in the dictionary, else default.

<span id="undefined" />

`hex_probabilities()`

Build a quasi-probabilities dictionary with hexadecimal string keys

**Returns**

**A dictionary where the keys are hexadecimal strings in the**

format `"0x1a"`

**Return type**

dict

<span id="undefined" />

`items() → a set-like object providing a view on D’s items`

<span id="undefined" />

`keys() → a set-like object providing a view on D’s keys`

<span id="undefined" />

`nearest_probability_distribution(return_distance=False)`

Takes a quasiprobability distribution and maps it to the closest probability distribution as defined by the L2-norm.

**Parameters**

**return\_distance** (*bool*) – Return the L2 distance between distributions.

**Returns**

Nearest probability distribution. float: Euclidean (L2) distance of distributions.

**Return type**

[ProbDistribution](qiskit.result.ProbDistribution#qiskit.result.ProbDistribution "qiskit.result.ProbDistribution")

## Notes

Method from Smolin et al., Phys. Rev. Lett. 108, 070502 (2012).

<span id="undefined" />

`pop(k[, d]) → v, remove specified key and return the corresponding value.`

If key is not found, d is returned if given, otherwise KeyError is raised

<span id="undefined" />

`popitem() → (k, v), remove and return some (key, value) pair as a`

2-tuple; but raise KeyError if D is empty.

<span id="undefined" />

`setdefault(key, default=None, /)`

Insert key with a value of default if key is not in the dictionary.

Return the value for key if key is in the dictionary, else default.

<span id="undefined" />

`update([E, ]**F) → None. Update D from dict/iterable E and F.`

If E is present and has a .keys() method, then does: for k in E: D\[k] = E\[k] If E is present and lacks a .keys() method, then does: for k, v in E: D\[k] = v In either case, this is followed by: for k in F: D\[k] = F\[k]

<span id="undefined" />

`values() → an object providing a view on D’s values`
