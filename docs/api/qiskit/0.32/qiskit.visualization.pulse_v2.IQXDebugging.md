---
title: IQXDebugging
description: API reference for qiskit.visualization.pulse_v2.IQXDebugging
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.visualization.pulse_v2.IQXDebugging
---

# IQXDebugging

<span id="qiskit.visualization.pulse_v2.IQXDebugging" />

`IQXDebugging(**kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/visualization/pulse_v2/stylesheet.py "view source code")

Bases: `dict`

Pulse stylesheet for pulse programmers. Show details of instructions.

\# TODO: add more generators

*   Generate stepwise waveform envelope with latex pulse names.
*   Generate annotation for waveform height.
*   Apply phase modulation to waveforms.
*   Plot frame change symbol with raw operand values.
*   Show chart name and channel frequency.
*   Show snapshot and barrier.
*   Show acquire channels.
*   Channels are sorted by index and control channels are added to the end.

## Methods

### clear

<span id="qiskit.visualization.pulse_v2.IQXDebugging.clear" />

`IQXDebugging.clear() → None. Remove all items from D.`

### copy

<span id="qiskit.visualization.pulse_v2.IQXDebugging.copy" />

`IQXDebugging.copy() → a shallow copy of D`

### fromkeys

<span id="qiskit.visualization.pulse_v2.IQXDebugging.fromkeys" />

`IQXDebugging.fromkeys(value=None, /)`

Create a new dictionary with keys from iterable and values set to value.

### get

<span id="qiskit.visualization.pulse_v2.IQXDebugging.get" />

`IQXDebugging.get(key, default=None, /)`

Return the value for key if key is in the dictionary, else default.

### items

<span id="qiskit.visualization.pulse_v2.IQXDebugging.items" />

`IQXDebugging.items() → a set-like object providing a view on D’s items`

### keys

<span id="qiskit.visualization.pulse_v2.IQXDebugging.keys" />

`IQXDebugging.keys() → a set-like object providing a view on D’s keys`

### pop

<span id="qiskit.visualization.pulse_v2.IQXDebugging.pop" />

`IQXDebugging.pop(k[, d]) → v, remove specified key and return the corresponding value.`

If key is not found, d is returned if given, otherwise KeyError is raised

### popitem

<span id="qiskit.visualization.pulse_v2.IQXDebugging.popitem" />

`IQXDebugging.popitem() → (k, v), remove and return some (key, value) pair as a`

2-tuple; but raise KeyError if D is empty.

### setdefault

<span id="qiskit.visualization.pulse_v2.IQXDebugging.setdefault" />

`IQXDebugging.setdefault(key, default=None, /)`

Insert key with a value of default if key is not in the dictionary.

Return the value for key if key is in the dictionary, else default.

### update

<span id="qiskit.visualization.pulse_v2.IQXDebugging.update" />

`IQXDebugging.update([E, ]**F) → None. Update D from dict/iterable E and F.`

If E is present and has a .keys() method, then does: for k in E: D\[k] = E\[k] If E is present and lacks a .keys() method, then does: for k, v in E: D\[k] = v In either case, this is followed by: for k in F: D\[k] = F\[k]

### values

<span id="qiskit.visualization.pulse_v2.IQXDebugging.values" />

`IQXDebugging.values() → an object providing a view on D’s values`

