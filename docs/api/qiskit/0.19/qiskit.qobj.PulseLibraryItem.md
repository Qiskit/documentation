---
title: PulseLibraryItem
description: API reference for qiskit.qobj.PulseLibraryItem
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qobj.PulseLibraryItem
---

# PulseLibraryItem

<span id="qiskit.qobj.PulseLibraryItem" />

`PulseLibraryItem(name, samples)`

An item in a pulse library.

Instantiate a pulse library item.

**Parameters**

*   **name** (*str*) – A name for the pulse.
*   **samples** (*list\[complex]*) – A list of complex values defining pulse shape.

## Methods

|                                                                                                                       |                                                                      |
| --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`PulseLibraryItem.from_dict`](qiskit.qobj.PulseLibraryItem.from_dict "qiskit.qobj.PulseLibraryItem.from_dict")(data) | Create a new PulseLibraryItem object from a dictionary.              |
| [`PulseLibraryItem.to_dict`](qiskit.qobj.PulseLibraryItem.to_dict "qiskit.qobj.PulseLibraryItem.to_dict")()           | Return a dictionary format representation of the pulse library item. |

