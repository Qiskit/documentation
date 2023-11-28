# qiskit.visualization.pulse\_v2.IQXStandard

<span id="undefined" />

`IQXStandard(**kwargs)`

Standard pulse stylesheet.

*   Generate stepwise waveform envelope with latex pulse names.
*   Apply phase modulation to waveforms.
*   Plot frame change symbol with formatted operand values.
*   Show chart name with scaling factor.
*   Show snapshot and barrier.
*   Do not show acquire channels.
*   Channels are sorted by index and control channels are added to the end.

<span id="undefined" />

`__init__(**kwargs)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                               |                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.visualization.pulse_v2.IQXStandard.__init__ "qiskit.visualization.pulse_v2.IQXStandard.__init__")(\*\*kwargs)            | Initialize self.                                                                                                                                                                                                              |
| [`clear`](#qiskit.visualization.pulse_v2.IQXStandard.clear "qiskit.visualization.pulse_v2.IQXStandard.clear")()                               |                                                                                                                                                                                                                               |
| [`copy`](#qiskit.visualization.pulse_v2.IQXStandard.copy "qiskit.visualization.pulse_v2.IQXStandard.copy")()                                  |                                                                                                                                                                                                                               |
| [`fromkeys`](#qiskit.visualization.pulse_v2.IQXStandard.fromkeys "qiskit.visualization.pulse_v2.IQXStandard.fromkeys")(\[value])              | Create a new dictionary with keys from iterable and values set to value.                                                                                                                                                      |
| [`get`](#qiskit.visualization.pulse_v2.IQXStandard.get "qiskit.visualization.pulse_v2.IQXStandard.get")(key\[, default])                      | Return the value for key if key is in the dictionary, else default.                                                                                                                                                           |
| [`items`](#qiskit.visualization.pulse_v2.IQXStandard.items "qiskit.visualization.pulse_v2.IQXStandard.items")()                               |                                                                                                                                                                                                                               |
| [`keys`](#qiskit.visualization.pulse_v2.IQXStandard.keys "qiskit.visualization.pulse_v2.IQXStandard.keys")()                                  |                                                                                                                                                                                                                               |
| [`pop`](#qiskit.visualization.pulse_v2.IQXStandard.pop "qiskit.visualization.pulse_v2.IQXStandard.pop")(k\[,d])                               | If key is not found, d is returned if given, otherwise KeyError is raised                                                                                                                                                     |
| [`popitem`](#qiskit.visualization.pulse_v2.IQXStandard.popitem "qiskit.visualization.pulse_v2.IQXStandard.popitem")()                         | 2-tuple; but raise KeyError if D is empty.                                                                                                                                                                                    |
| [`setdefault`](#qiskit.visualization.pulse_v2.IQXStandard.setdefault "qiskit.visualization.pulse_v2.IQXStandard.setdefault")(key\[, default]) | Insert key with a value of default if key is not in the dictionary.                                                                                                                                                           |
| [`update`](#qiskit.visualization.pulse_v2.IQXStandard.update "qiskit.visualization.pulse_v2.IQXStandard.update")(\[E, ]\*\*F)                 | If E is present and has a .keys() method, then does: for k in E: D\[k] = E\[k] If E is present and lacks a .keys() method, then does: for k, v in E: D\[k] = v In either case, this is followed by: for k in F: D\[k] = F\[k] |
| [`values`](#qiskit.visualization.pulse_v2.IQXStandard.values "qiskit.visualization.pulse_v2.IQXStandard.values")()                            |                                                                                                                                                                                                                               |

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

`items() → a set-like object providing a view on D’s items`

<span id="undefined" />

`keys() → a set-like object providing a view on D’s keys`

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
