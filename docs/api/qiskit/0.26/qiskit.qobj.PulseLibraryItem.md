# qiskit.qobj.PulseLibraryItem

<span id="undefined" />

`PulseLibraryItem(name, samples)`

An item in a pulse library.

Instantiate a pulse library item.

**Parameters**

*   **name** (*str*) – A name for the pulse.
*   **samples** (*list\[complex]*) – A list of complex values defining pulse shape.

<span id="undefined" />

`__init__(name, samples)`

Instantiate a pulse library item.

**Parameters**

*   **name** (*str*) – A name for the pulse.
*   **samples** (*list\[complex]*) – A list of complex values defining pulse shape.

## Methods

|                                                                                                             |                                                                      |
| ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`__init__`](#qiskit.qobj.PulseLibraryItem.__init__ "qiskit.qobj.PulseLibraryItem.__init__")(name, samples) | Instantiate a pulse library item.                                    |
| [`from_dict`](#qiskit.qobj.PulseLibraryItem.from_dict "qiskit.qobj.PulseLibraryItem.from_dict")(data)       | Create a new PulseLibraryItem object from a dictionary.              |
| [`to_dict`](#qiskit.qobj.PulseLibraryItem.to_dict "qiskit.qobj.PulseLibraryItem.to_dict")()                 | Return a dictionary format representation of the pulse library item. |

<span id="undefined" />

`classmethod from_dict(data)`

Create a new PulseLibraryItem object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary for the experiment config

**Returns**

The object from the input dictionary.

**Return type**

[PulseLibraryItem](#qiskit.qobj.PulseLibraryItem "qiskit.qobj.PulseLibraryItem")

<span id="undefined" />

`to_dict()`

Return a dictionary format representation of the pulse library item.

**Returns**

The dictionary form of the PulseLibraryItem.

**Return type**

dict
