---
title: UchannelLO
description: API reference for qiskit.providers.models.UchannelLO
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.models.UchannelLO
---

# UchannelLO

<span id="qiskit.providers.models.UchannelLO" />

`UchannelLO(q, scale)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/providers/models/backendconfiguration.py "view source code")

Bases: `object`

Class representing a U Channel LO

<span id="qiskit.providers.models.UchannelLO.q" />

### q

Qubit that scale corresponds too.

<span id="qiskit.providers.models.UchannelLO.scale" />

### scale

Scale factor for qubit frequency.

Initialize a UchannelLOSchema object

**Parameters**

*   **q** (*int*) – Qubit that scale corresponds too. Must be >= 0.
*   **scale** (*complex*) – Scale factor for qubit frequency.

**Raises**

**QiskitError** – If q is \< 0

## Methods

<span id="qiskit-providers-models-uchannello-from-dict" />

### from\_dict

<span id="qiskit.providers.models.UchannelLO.from_dict" />

`classmethod UchannelLO.from_dict(data)`

Create a new UchannelLO object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the UChannelLO to create. It will be in the same format as output by [`to_dict()`](qiskit.providers.models.UchannelLO#to_dict "qiskit.providers.models.UchannelLO.to_dict").

**Returns**

The UchannelLO from the input dictionary.

**Return type**

[UchannelLO](qiskit.providers.models.UchannelLO "qiskit.providers.models.UchannelLO")

<span id="qiskit-providers-models-uchannello-to-dict" />

### to\_dict

<span id="qiskit.providers.models.UchannelLO.to_dict" />

`UchannelLO.to_dict()`

Return a dictionary format representation of the UChannelLO.

**Returns**

The dictionary form of the UChannelLO.

**Return type**

dict

