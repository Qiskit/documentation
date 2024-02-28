---
title: PulseLibraryItem
description: API reference for qiskit.qobj.PulseLibraryItem
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qobj.PulseLibraryItem
---

# PulseLibraryItem

<span id="qiskit.qobj.PulseLibraryItem" />

`qiskit.qobj.PulseLibraryItem(name, samples)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/qobj/pulse_qobj.py "view source code")

Bases: [`object`](https://docs.python.org/3/library/functions.html#object "(in Python v3.12)")

An item in a pulse library.

Instantiate a pulse library item.

**Parameters**

*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – A name for the pulse.
*   **samples** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")*\[*[*complex*](https://docs.python.org/3/library/functions.html#complex "(in Python v3.12)")*]*) – A list of complex values defining pulse shape.

## Methods

### from\_dict

<span id="qiskit.qobj.PulseLibraryItem.from_dict" />

`classmethod from_dict(data)`

Create a new PulseLibraryItem object from a dictionary.

**Parameters**

**data** ([*dict*](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")) – A dictionary for the experiment config

**Returns**

The object from the input dictionary.

**Return type**

[PulseLibraryItem](#qiskit.qobj.PulseLibraryItem "qiskit.qobj.PulseLibraryItem")

### to\_dict

<span id="qiskit.qobj.PulseLibraryItem.to_dict" />

`to_dict()`

Return a dictionary format representation of the pulse library item.

**Returns**

The dictionary form of the PulseLibraryItem.

**Return type**

[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")

