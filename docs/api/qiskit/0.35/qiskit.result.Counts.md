# Counts

<span id="undefined" />

`Counts(data, time_taken=None, creg_sizes=None, memory_slots=None)`

Bases: `dict`

A class to store a counts result from a circuit execution.

Build a counts object

**Parameters**

*   **data** (*dict*) –

    The dictionary input for the counts. Where the keys represent a measured classical value and the value is an integer the number of shots with that result. The keys can be one of several formats:

    > *   A hexadecimal string of the form `"0x4a"`
    > *   A bit string prefixed with `0b` for example `'0b1011'`
    > *   A bit string formatted across register and memory slots. For example, `'00 10'`.
    > *   A dit string, for example `'02'`. Note for objects created with dit strings the `creg_sizes``and ``memory_slots` kwargs don’t work and [`hex_outcomes()`](qiskit.result.Counts.hex_outcomes#qiskit.result.Counts.hex_outcomes "qiskit.result.Counts.hex_outcomes") and [`int_outcomes()`](qiskit.result.Counts.int_outcomes#qiskit.result.Counts.int_outcomes "qiskit.result.Counts.int_outcomes") also do not work.

*   **time\_taken** (*float*) – The duration of the experiment that generated the counts

*   **creg\_sizes** (*list*) – a nested list where the inner element is a list of tuples containing both the classical register name and classical register size. For example, `[('c_reg', 2), ('my_creg', 4)]`.

*   **memory\_slots** (*int*) – The number of total `memory_slots` in the experiment.

**Raises**

*   **TypeError** – If the input key type is not an int or string
*   **QiskitError** – If a dit string key is input with creg\_sizes and/or memory\_slots

## Methods

|                                                                                                                               |                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`clear`](qiskit.result.Counts.clear#qiskit.result.Counts.clear "qiskit.result.Counts.clear")                                 |                                                                                                                                                                                                                               |
| [`copy`](qiskit.result.Counts.copy#qiskit.result.Counts.copy "qiskit.result.Counts.copy")                                     |                                                                                                                                                                                                                               |
| [`fromkeys`](qiskit.result.Counts.fromkeys#qiskit.result.Counts.fromkeys "qiskit.result.Counts.fromkeys")                     | Create a new dictionary with keys from iterable and values set to value.                                                                                                                                                      |
| [`get`](qiskit.result.Counts.get#qiskit.result.Counts.get "qiskit.result.Counts.get")                                         | Return the value for key if key is in the dictionary, else default.                                                                                                                                                           |
| [`hex_outcomes`](qiskit.result.Counts.hex_outcomes#qiskit.result.Counts.hex_outcomes "qiskit.result.Counts.hex_outcomes")     | Return a counts dictionary with hexadecimal string keys                                                                                                                                                                       |
| [`int_outcomes`](qiskit.result.Counts.int_outcomes#qiskit.result.Counts.int_outcomes "qiskit.result.Counts.int_outcomes")     | Build a counts dictionary with integer keys instead of count strings                                                                                                                                                          |
| [`items`](qiskit.result.Counts.items#qiskit.result.Counts.items "qiskit.result.Counts.items")                                 |                                                                                                                                                                                                                               |
| [`keys`](qiskit.result.Counts.keys#qiskit.result.Counts.keys "qiskit.result.Counts.keys")                                     |                                                                                                                                                                                                                               |
| [`most_frequent`](qiskit.result.Counts.most_frequent#qiskit.result.Counts.most_frequent "qiskit.result.Counts.most_frequent") | Return the most frequent count                                                                                                                                                                                                |
| [`pop`](qiskit.result.Counts.pop#qiskit.result.Counts.pop "qiskit.result.Counts.pop")                                         | If key is not found, d is returned if given, otherwise KeyError is raised                                                                                                                                                     |
| [`popitem`](qiskit.result.Counts.popitem#qiskit.result.Counts.popitem "qiskit.result.Counts.popitem")                         | Remove and return a (key, value) pair as a 2-tuple.                                                                                                                                                                           |
| [`setdefault`](qiskit.result.Counts.setdefault#qiskit.result.Counts.setdefault "qiskit.result.Counts.setdefault")             | Insert key with a value of default if key is not in the dictionary.                                                                                                                                                           |
| [`shots`](qiskit.result.Counts.shots#qiskit.result.Counts.shots "qiskit.result.Counts.shots")                                 | Return the number of shots                                                                                                                                                                                                    |
| [`update`](qiskit.result.Counts.update#qiskit.result.Counts.update "qiskit.result.Counts.update")                             | If E is present and has a .keys() method, then does: for k in E: D\[k] = E\[k] If E is present and lacks a .keys() method, then does: for k, v in E: D\[k] = v In either case, this is followed by: for k in F: D\[k] = F\[k] |
| [`values`](qiskit.result.Counts.values#qiskit.result.Counts.values "qiskit.result.Counts.values")                             |                                                                                                                                                                                                                               |

## Attributes

<span id="undefined" />

### bitstring\_regex

`= re.compile('^[01\\s]+$')`
