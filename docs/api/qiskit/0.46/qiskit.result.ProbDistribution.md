---
title: ProbDistribution
description: API reference for qiskit.result.ProbDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.result.ProbDistribution
---

# ProbDistribution

<span id="qiskit.result.ProbDistribution" />

`qiskit.result.ProbDistribution(data, shots=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/result/distributions/probability.py "view source code")

Bases: [`dict`](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")

A generic dict-like class for probability distributions.

Builds a probability distribution object.

**Parameters**

*   **data** ([*dict*](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")) –

    Input probability data. Where the keys represent a measured classical value and the value is a float for the probability of that result. The keys can be one of several formats:

    > *   A hexadecimal string of the form `"0x4a"`
    > *   A bit string e.g. `'0b1011'` or `"01011"`
    > *   An integer

*   **shots** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Number of shots the distribution was derived from.

**Raises**

*   [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError "(in Python v3.12)") – If the input keys are not a string or int
*   [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError "(in Python v3.12)") – If the string format of the keys is incorrect

## Methods

### binary\_probabilities

<span id="qiskit.result.ProbDistribution.binary_probabilities" />

`binary_probabilities(num_bits=None)`

Build a probabilities dictionary with binary string keys

**Parameters**

**num\_bits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – number of bits in the binary bitstrings (leading zeros will be padded). If None, a default value will be used. If keys are given as integers or strings with binary or hex prefix, the default value will be derived from the largest key present. If keys are given as bitstrings without prefix, the default value will be derived from the largest key length.

**Returns**

**A dictionary where the keys are binary strings in the format**

`"0110"`

**Return type**

[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")

### clear

<span id="qiskit.result.ProbDistribution.clear" />

`clear() → None.  Remove all items from D.`

### copy

<span id="qiskit.result.ProbDistribution.copy" />

`copy() → a shallow copy of D`

### fromkeys

<span id="qiskit.result.ProbDistribution.fromkeys" />

`fromkeys(value=None, /)`

Create a new dictionary with keys from iterable and values set to value.

### get

<span id="qiskit.result.ProbDistribution.get" />

`get(key, default=None, /)`

Return the value for key if key is in the dictionary, else default.

### hex\_probabilities

<span id="qiskit.result.ProbDistribution.hex_probabilities" />

`hex_probabilities()`

Build a probabilities dictionary with hexadecimal string keys

**Returns**

**A dictionary where the keys are hexadecimal strings in the**

format `"0x1a"`

**Return type**

[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")

### items

<span id="qiskit.result.ProbDistribution.items" />

`items() → a set-like object providing a view on D's items`

### keys

<span id="qiskit.result.ProbDistribution.keys" />

`keys() → a set-like object providing a view on D's keys`

### pop

<span id="qiskit.result.ProbDistribution.pop" />

`pop(k[, d]) → v, remove specified key and return the corresponding value.`

If key is not found, default is returned if given, otherwise KeyError is raised

### popitem

<span id="qiskit.result.ProbDistribution.popitem" />

`popitem()`

Remove and return a (key, value) pair as a 2-tuple.

Pairs are returned in LIFO (last-in, first-out) order. Raises KeyError if the dict is empty.

### setdefault

<span id="qiskit.result.ProbDistribution.setdefault" />

`setdefault(key, default=None, /)`

Insert key with a value of default if key is not in the dictionary.

Return the value for key if key is in the dictionary, else default.

### update

<span id="qiskit.result.ProbDistribution.update" />

`update([E, ]**F) → None.  Update D from dict/iterable E and F.`

If E is present and has a .keys() method, then does: for k in E: D\[k] = E\[k] If E is present and lacks a .keys() method, then does: for k, v in E: D\[k] = v In either case, this is followed by: for k in F: D\[k] = F\[k]

### values

<span id="qiskit.result.ProbDistribution.values" />

`values() → an object providing a view on D's values`

