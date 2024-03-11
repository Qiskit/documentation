---
title: QuasiDistribution
description: API reference for qiskit.result.QuasiDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.result.QuasiDistribution
---

# QuasiDistribution

<span id="qiskit.result.QuasiDistribution" />

`QuasiDistribution(data, shots=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/result/distributions/quasi.py "view source code")

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

**Raises**

*   **TypeError** – If the input keys are not a string or int
*   **ValueError** – If the string format of the keys is incorrect

## Methods

### binary\_probabilities

<span id="qiskit.result.QuasiDistribution.binary_probabilities" />

`QuasiDistribution.binary_probabilities(num_bits=None)`

Build a quasi-probabilities dictionary with binary string keys

**Parameters**

**num\_bits** (*int*) – number of bits in the binary bitstrings (leading zeros will be padded). If None, the length will be derived from the largest key present.

**Returns**

**A dictionary where the keys are binary strings in the format**

`"0110"`

**Return type**

dict

### clear

<span id="qiskit.result.QuasiDistribution.clear" />

`QuasiDistribution.clear() → None. Remove all items from D.`

### copy

<span id="qiskit.result.QuasiDistribution.copy" />

`QuasiDistribution.copy() → a shallow copy of D`

### fromkeys

<span id="qiskit.result.QuasiDistribution.fromkeys" />

`QuasiDistribution.fromkeys(value=None, /)`

Create a new dictionary with keys from iterable and values set to value.

### get

<span id="qiskit.result.QuasiDistribution.get" />

`QuasiDistribution.get(key, default=None, /)`

Return the value for key if key is in the dictionary, else default.

### hex\_probabilities

<span id="qiskit.result.QuasiDistribution.hex_probabilities" />

`QuasiDistribution.hex_probabilities()`

Build a quasi-probabilities dictionary with hexadecimal string keys

**Returns**

**A dictionary where the keys are hexadecimal strings in the**

format `"0x1a"`

**Return type**

dict

### items

<span id="qiskit.result.QuasiDistribution.items" />

`QuasiDistribution.items() → a set-like object providing a view on D’s items`

### keys

<span id="qiskit.result.QuasiDistribution.keys" />

`QuasiDistribution.keys() → a set-like object providing a view on D’s keys`

### nearest\_probability\_distribution

<span id="qiskit.result.QuasiDistribution.nearest_probability_distribution" />

`QuasiDistribution.nearest_probability_distribution(return_distance=False)`

Takes a quasiprobability distribution and maps it to the closest probability distribution as defined by the L2-norm.

**Parameters**

**return\_distance** (*bool*) – Return the L2 distance between distributions.

**Returns**

Nearest probability distribution. float: Euclidean (L2) distance of distributions.

**Return type**

[ProbDistribution](qiskit.result.ProbDistribution "qiskit.result.ProbDistribution")

**Notes**

Method from Smolin et al., Phys. Rev. Lett. 108, 070502 (2012).

### pop

<span id="qiskit.result.QuasiDistribution.pop" />

`QuasiDistribution.pop(k[, d]) → v, remove specified key and return the corresponding value.`

If key is not found, d is returned if given, otherwise KeyError is raised

### popitem

<span id="qiskit.result.QuasiDistribution.popitem" />

`QuasiDistribution.popitem() → (k, v), remove and return some (key, value) pair as a`

2-tuple; but raise KeyError if D is empty.

### setdefault

<span id="qiskit.result.QuasiDistribution.setdefault" />

`QuasiDistribution.setdefault(key, default=None, /)`

Insert key with a value of default if key is not in the dictionary.

Return the value for key if key is in the dictionary, else default.

### update

<span id="qiskit.result.QuasiDistribution.update" />

`QuasiDistribution.update([E, ]**F) → None. Update D from dict/iterable E and F.`

If E is present and has a .keys() method, then does: for k in E: D\[k] = E\[k] If E is present and lacks a .keys() method, then does: for k, v in E: D\[k] = v In either case, this is followed by: for k in F: D\[k] = F\[k]

### values

<span id="qiskit.result.QuasiDistribution.values" />

`QuasiDistribution.values() → an object providing a view on D’s values`

