---
title: UchannelLO
description: API reference for qiskit.providers.models.UchannelLO
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.models.UchannelLO
---

# UchannelLO

<span id="qiskit.providers.models.UchannelLO" />

`qiskit.providers.models.UchannelLO(q, scale)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/providers/models/backendconfiguration.py "view source code")

Bases: [`object`](https://docs.python.org/3/library/functions.html#object "(in Python v3.12)")

Class representing a U Channel LO

<span id="qiskit.providers.models.UchannelLO.q" />

### q

Qubit that scale corresponds too.

<span id="qiskit.providers.models.UchannelLO.scale" />

### scale

Scale factor for qubit frequency.

Initialize a UchannelLOSchema object

**Parameters**

*   **q** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Qubit that scale corresponds too. Must be >= 0.
*   **scale** ([*complex*](https://docs.python.org/3/library/functions.html#complex "(in Python v3.12)")) – Scale factor for qubit frequency.

**Raises**

[**QiskitError**](exceptions#qiskit.exceptions.QiskitError "qiskit.exceptions.QiskitError") – If q is \< 0

## Methods

### from\_dict

<span id="qiskit.providers.models.UchannelLO.from_dict" />

`classmethod from_dict(data)`

Create a new UchannelLO object from a dictionary.

**Parameters**

**data** ([*dict*](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")) – A dictionary representing the UChannelLO to create. It will be in the same format as output by [`to_dict()`](#qiskit.providers.models.UchannelLO.to_dict "qiskit.providers.models.UchannelLO.to_dict").

**Returns**

The UchannelLO from the input dictionary.

**Return type**

[UchannelLO](#qiskit.providers.models.UchannelLO "qiskit.providers.models.UchannelLO")

### to\_dict

<span id="qiskit.providers.models.UchannelLO.to_dict" />

`to_dict()`

Return a dictionary format representation of the UChannelLO.

**Returns**

The dictionary form of the UChannelLO.

**Return type**

[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")

