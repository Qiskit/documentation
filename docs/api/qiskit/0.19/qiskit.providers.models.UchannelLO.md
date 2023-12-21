---
title: UchannelLO
description: API reference for qiskit.providers.models.UchannelLO
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.models.UchannelLO
---

# UchannelLO

<span id="qiskit.providers.models.UchannelLO" />

`UchannelLO(q, scale)`

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

|                                                                                                                             |                                                              |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`UchannelLO.from_dict`](qiskit.providers.models.UchannelLO.from_dict "qiskit.providers.models.UchannelLO.from_dict")(data) | Create a new UchannelLO object from a dictionary.            |
| [`UchannelLO.to_dict`](qiskit.providers.models.UchannelLO.to_dict "qiskit.providers.models.UchannelLO.to_dict")()           | Return a dictionary format representation of the UChannelLO. |

