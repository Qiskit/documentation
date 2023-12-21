---
title: BackendStatus
description: API reference for qiskit.providers.models.BackendStatus
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.models.BackendStatus
---

# BackendStatus

<span id="qiskit.providers.models.BackendStatus" />

`BackendStatus(backend_name, backend_version, operational, pending_jobs, status_msg)`

Class representing Backend Status.

Initialize a BackendStatus object

**Parameters**

*   **backend\_name** (*str*) – The backend’s name
*   **backend\_version** (*str*) – The backend’s version of the form X.Y.Z
*   **operational** (*bool*) – True if the backend is operational
*   **pending\_jobs** (*int*) – The number of pending jobs on the backend
*   **status\_msg** (*str*) – The status msg for the backend

**Raises**

**QiskitError** – If the backend version is in an invalid format

## Attributes

|                                                                                                                                            |   |
| ------------------------------------------------------------------------------------------------------------------------------------------ | - |
| [`BackendStatus.version_regex`](qiskit.providers.models.BackendStatus.version_regex "qiskit.providers.models.BackendStatus.version_regex") |   |

## Methods

|                                                                                                                                      |                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| [`BackendStatus.from_dict`](qiskit.providers.models.BackendStatus.from_dict "qiskit.providers.models.BackendStatus.from_dict")(data) | Create a new BackendStatus object from a dictionary.            |
| [`BackendStatus.to_dict`](qiskit.providers.models.BackendStatus.to_dict "qiskit.providers.models.BackendStatus.to_dict")()           | Return a dictionary format representation of the BackendStatus. |

