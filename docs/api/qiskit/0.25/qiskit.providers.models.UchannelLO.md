# qiskit.providers.models.UchannelLO

<span id="undefined" />

`UchannelLO(q, scale)`

Class representing a U Channel LO

<span id="undefined" />

### q

Qubit that scale corresponds too.

<span id="undefined" />

### scale

Scale factor for qubit frequency.

Initialize a UchannelLOSchema object

**Parameters**

*   **q** (*int*) – Qubit that scale corresponds too. Must be >= 0.
*   **scale** (*complex*) – Scale factor for qubit frequency.

**Raises**

**QiskitError** – If q is \< 0

<span id="undefined" />

`__init__(q, scale)`

Initialize a UchannelLOSchema object

**Parameters**

*   **q** (*int*) – Qubit that scale corresponds too. Must be >= 0.
*   **scale** (*complex*) – Scale factor for qubit frequency.

**Raises**

**QiskitError** – If q is \< 0

## Methods

|                                                                                                                    |                                                              |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| [`__init__`](#qiskit.providers.models.UchannelLO.__init__ "qiskit.providers.models.UchannelLO.__init__")(q, scale) | Initialize a UchannelLOSchema object                         |
| [`from_dict`](#qiskit.providers.models.UchannelLO.from_dict "qiskit.providers.models.UchannelLO.from_dict")(data)  | Create a new UchannelLO object from a dictionary.            |
| [`to_dict`](#qiskit.providers.models.UchannelLO.to_dict "qiskit.providers.models.UchannelLO.to_dict")()            | Return a dictionary format representation of the UChannelLO. |

<span id="undefined" />

`classmethod from_dict(data)`

Create a new UchannelLO object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the UChannelLO to create. It will be in the same format as output by [`to_dict()`](#qiskit.providers.models.UchannelLO.to_dict "qiskit.providers.models.UchannelLO.to_dict").

**Returns**

The UchannelLO from the input dictionary.

**Return type**

[UchannelLO](#qiskit.providers.models.UchannelLO "qiskit.providers.models.UchannelLO")

<span id="undefined" />

`to_dict()`

Return a dictionary format representation of the UChannelLO.

**Returns**

The dictionary form of the UChannelLO.

**Return type**

dict
