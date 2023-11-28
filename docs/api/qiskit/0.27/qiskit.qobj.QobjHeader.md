# qiskit.qobj.QobjHeader

<span id="undefined" />

`QobjHeader(**kwargs)`

A class used to represent a dictionary header in Qobj objects.

Instantiate a new Qobj dict field object.

**Parameters**

**kwargs** – arbitrary keyword arguments that can be accessed as attributes of the object.

<span id="undefined" />

`__init__(**kwargs)`

Instantiate a new Qobj dict field object.

**Parameters**

**kwargs** – arbitrary keyword arguments that can be accessed as attributes of the object.

## Methods

|                                                                                              |                                                             |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`__init__`](#qiskit.qobj.QobjHeader.__init__ "qiskit.qobj.QobjHeader.__init__")(\*\*kwargs) | Instantiate a new Qobj dict field object.                   |
| [`from_dict`](#qiskit.qobj.QobjHeader.from_dict "qiskit.qobj.QobjHeader.from_dict")(data)    | Create a new QobjHeader object from a dictionary.           |
| [`to_dict`](#qiskit.qobj.QobjHeader.to_dict "qiskit.qobj.QobjHeader.to_dict")()              | Return a dictionary format representation of the QASM Qobj. |

<span id="undefined" />

`classmethod from_dict(data)`

Create a new QobjHeader object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the QobjHeader to create. It will be in the same format as output by [`to_dict()`](#qiskit.qobj.QobjHeader.to_dict "qiskit.qobj.QobjHeader.to_dict").

**Returns**

The QobjDictField from the input dictionary.

**Return type**

QobjDictFieldr

<span id="undefined" />

`to_dict()`

Return a dictionary format representation of the QASM Qobj.

**Returns**

The dictionary form of the QobjHeader.

**Return type**

dict
