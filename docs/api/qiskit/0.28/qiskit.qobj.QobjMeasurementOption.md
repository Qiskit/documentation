# qiskit.qobj.QobjMeasurementOption

<span id="undefined" />

`QobjMeasurementOption(name, params=None)`

An individual measurement option.

Instantiate a new QobjMeasurementOption object.

**Parameters**

*   **name** (*str*) – The name of the measurement option
*   **params** (*list*) – The parameters of the measurement option.

<span id="undefined" />

`__init__(name, params=None)`

Instantiate a new QobjMeasurementOption object.

**Parameters**

*   **name** (*str*) – The name of the measurement option
*   **params** (*list*) – The parameters of the measurement option.

## Methods

|                                                                                                                         |                                                                   |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [`__init__`](#qiskit.qobj.QobjMeasurementOption.__init__ "qiskit.qobj.QobjMeasurementOption.__init__")(name\[, params]) | Instantiate a new QobjMeasurementOption object.                   |
| [`from_dict`](#qiskit.qobj.QobjMeasurementOption.from_dict "qiskit.qobj.QobjMeasurementOption.from_dict")(data)         | Create a new QobjMeasurementOption object from a dictionary.      |
| [`to_dict`](#qiskit.qobj.QobjMeasurementOption.to_dict "qiskit.qobj.QobjMeasurementOption.to_dict")()                   | Return a dict format representation of the QobjMeasurementOption. |

<span id="undefined" />

`classmethod from_dict(data)`

Create a new QobjMeasurementOption object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary for the experiment config

**Returns**

The object from the input dictionary.

**Return type**

[QobjMeasurementOption](#qiskit.qobj.QobjMeasurementOption "qiskit.qobj.QobjMeasurementOption")

<span id="undefined" />

`to_dict()`

Return a dict format representation of the QobjMeasurementOption.

**Returns**

The dictionary form of the QasmMeasurementOption.

**Return type**

dict
