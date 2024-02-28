---
title: BaseBackend
description: API reference for qiskit.providers.BaseBackend
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.BaseBackend
---

<span id="qiskit-providers-basebackend" />

# qiskit.providers.BaseBackend

<span id="qiskit.providers.BaseBackend" />

`BaseBackend(configuration, provider=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/providers/basebackend.py "view source code")

Legacy Base class for backends.

Base class for backends.

This method should initialize the module and its configuration, and raise an exception if a component of the module is not available.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **provider** ([*BaseProvider*](qiskit.providers.BaseProvider "qiskit.providers.BaseProvider")) – provider responsible for this backend

**Raises**

**QiskitError** – if an error occurred when instantiating the backend.

### \_\_init\_\_

<span id="qiskit.providers.BaseBackend.__init__" />

`abstract __init__(configuration, provider=None)`

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
| [`__init__`](#qiskit.providers.BaseBackend.__init__ "qiskit.providers.BaseBackend.__init__")(configuration\[, provider]) | Base class for backends.          |
| [`configuration`](#qiskit.providers.BaseBackend.configuration "qiskit.providers.BaseBackend.configuration")()            | Return the backend configuration. |
| [`name`](#qiskit.providers.BaseBackend.name "qiskit.providers.BaseBackend.name")()                                       | Return the backend name.          |
| [`properties`](#qiskit.providers.BaseBackend.properties "qiskit.providers.BaseBackend.properties")()                     | Return the backend properties.    |
| [`provider`](#qiskit.providers.BaseBackend.provider "qiskit.providers.BaseBackend.provider")()                           | Return the backend Provider.      |
| [`run`](#qiskit.providers.BaseBackend.run "qiskit.providers.BaseBackend.run")(qobj)                                      | Run a Qobj on the the backend.    |
| [`status`](#qiskit.providers.BaseBackend.status "qiskit.providers.BaseBackend.status")()                                 | Return the backend status.        |
| [`version`](#qiskit.providers.BaseBackend.version "qiskit.providers.BaseBackend.version")()                              | Return the backend version.       |

### configuration

<span id="qiskit.providers.BaseBackend.configuration" />

`configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### name

<span id="qiskit.providers.BaseBackend.name" />

`name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit.providers.BaseBackend.properties" />

`properties()`

Return the backend properties.

**Returns**

the configuration for the backend. If the backend does not support properties, it returns `None`.

**Return type**

[BackendProperties](qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")

### provider

<span id="qiskit.providers.BaseBackend.provider" />

`provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[BaseProvider](qiskit.providers.BaseProvider "qiskit.providers.BaseProvider")

### run

<span id="qiskit.providers.BaseBackend.run" />

`abstract run(qobj)`

Run a Qobj on the the backend.

**Parameters**

**qobj** ([*Qobj*](qiskit.qobj.Qobj "qiskit.qobj.Qobj")) – the Qobj to be executed.

### status

<span id="qiskit.providers.BaseBackend.status" />

`status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

### version

<span id="qiskit.providers.BaseBackend.version" />

`version()`

Return the backend version.

**Returns**

the X.X.X version of the backend.

**Return type**

str

