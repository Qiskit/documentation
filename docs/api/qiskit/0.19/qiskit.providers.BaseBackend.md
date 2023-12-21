---
title: BaseBackend
description: API reference for qiskit.providers.BaseBackend
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.BaseBackend
---

# BaseBackend

<span id="qiskit.providers.BaseBackend" />

`BaseBackend(configuration, provider=None)`

Base class for backends.

Base class for backends.

This method should initialize the module and its configuration, and raise an exception if a component of the module is not available.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **provider** ([*BaseProvider*](qiskit.providers.BaseProvider "qiskit.providers.BaseProvider")) – provider responsible for this backend

**Raises**

**QiskitError** – if an error occurred when instantiating the backend.

## Methods

|                                                                                                                          |                                   |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| [`BaseBackend.configuration`](qiskit.providers.BaseBackend.configuration "qiskit.providers.BaseBackend.configuration")() | Return the backend configuration. |
| [`BaseBackend.name`](qiskit.providers.BaseBackend.name "qiskit.providers.BaseBackend.name")()                            | Return the backend name.          |
| [`BaseBackend.properties`](qiskit.providers.BaseBackend.properties "qiskit.providers.BaseBackend.properties")()          | Return the backend properties.    |
| [`BaseBackend.provider`](qiskit.providers.BaseBackend.provider "qiskit.providers.BaseBackend.provider")()                | Return the backend Provider.      |
| [`BaseBackend.run`](qiskit.providers.BaseBackend.run "qiskit.providers.BaseBackend.run")(qobj)                           | Run a Qobj on the the backend.    |
| [`BaseBackend.status`](qiskit.providers.BaseBackend.status "qiskit.providers.BaseBackend.status")()                      | Return the backend status.        |
| [`BaseBackend.version`](qiskit.providers.BaseBackend.version "qiskit.providers.BaseBackend.version")()                   | Return the backend version.       |

