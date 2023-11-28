# UchannelLO

<span id="undefined" />

`UchannelLO(q, scale)`

Bases: `object`

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

## Methods

|                                                                                                                                                         |                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`from_dict`](qiskit.providers.models.UchannelLO.from_dict#qiskit.providers.models.UchannelLO.from_dict "qiskit.providers.models.UchannelLO.from_dict") | Create a new UchannelLO object from a dictionary.            |
| [`to_dict`](qiskit.providers.models.UchannelLO.to_dict#qiskit.providers.models.UchannelLO.to_dict "qiskit.providers.models.UchannelLO.to_dict")         | Return a dictionary format representation of the UChannelLO. |
