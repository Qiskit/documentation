---
title: IQXSimple
description: API reference for qiskit.visualization.pulse.IQXSimple
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.visualization.pulse.IQXSimple
---

# IQXSimple

<span id="qiskit.visualization.pulse.IQXSimple" />

`qiskit.visualization.pulse.IQXSimple(**kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/visualization/pulse_v2/stylesheet.py "view source code")

Bases: [`dict`](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")

Simple pulse stylesheet without channel notation.

*   Generate stepwise waveform envelope with latex pulse names.
*   Apply phase modulation to waveforms.
*   Do not show frame changes.
*   Show chart name.
*   Do not show snapshot and barrier.
*   Do not show acquire channels.
*   Channels are sorted by qubit index.

## Methods

### clear

<span id="qiskit.visualization.pulse.IQXSimple.clear" />

`clear() → None.  Remove all items from D.`

### copy

<span id="qiskit.visualization.pulse.IQXSimple.copy" />

`copy() → a shallow copy of D`

### fromkeys

<span id="qiskit.visualization.pulse.IQXSimple.fromkeys" />

`fromkeys(value=None, /)`

Create a new dictionary with keys from iterable and values set to value.

### get

<span id="qiskit.visualization.pulse.IQXSimple.get" />

`get(key, default=None, /)`

Return the value for key if key is in the dictionary, else default.

### items

<span id="qiskit.visualization.pulse.IQXSimple.items" />

`items() → a set-like object providing a view on D's items`

### keys

<span id="qiskit.visualization.pulse.IQXSimple.keys" />

`keys() → a set-like object providing a view on D's keys`

### pop

<span id="qiskit.visualization.pulse.IQXSimple.pop" />

`pop(k[, d]) → v, remove specified key and return the corresponding value.`

If key is not found, default is returned if given, otherwise KeyError is raised

### popitem

<span id="qiskit.visualization.pulse.IQXSimple.popitem" />

`popitem()`

Remove and return a (key, value) pair as a 2-tuple.

Pairs are returned in LIFO (last-in, first-out) order. Raises KeyError if the dict is empty.

### setdefault

<span id="qiskit.visualization.pulse.IQXSimple.setdefault" />

`setdefault(key, default=None, /)`

Insert key with a value of default if key is not in the dictionary.

Return the value for key if key is in the dictionary, else default.

### update

<span id="qiskit.visualization.pulse.IQXSimple.update" />

`update([E, ]**F) → None.  Update D from dict/iterable E and F.`

If E is present and has a .keys() method, then does: for k in E: D\[k] = E\[k] If E is present and lacks a .keys() method, then does: for k, v in E: D\[k] = v In either case, this is followed by: for k in F: D\[k] = F\[k]

### values

<span id="qiskit.visualization.pulse.IQXSimple.values" />

`values() → an object providing a view on D's values`

