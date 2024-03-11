---
title: BaseBackend
description: API reference for qiskit.providers.BaseBackend
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.BaseBackend
---

# BaseBackend

<span id="qiskit.providers.BaseBackend" />

`BaseBackend(configuration, provider=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/providers/basebackend.py "view source code")

Bases: `abc.ABC`

Legacy Base class for backends.

DEPRECATED Legacy base class for backends.

This method should initialize the module and its configuration, and raise an exception if a component of the module is not available.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **provider** ([*BaseProvider*](qiskit.providers.BaseProvider "qiskit.providers.BaseProvider")) – provider responsible for this backend

**Raises**

**QiskitError** – if an error occurred when instantiating the backend.

## Methods

### configuration

<span id="qiskit.providers.BaseBackend.configuration" />

`BaseBackend.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### name

<span id="qiskit.providers.BaseBackend.name" />

`BaseBackend.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit.providers.BaseBackend.properties" />

`BaseBackend.properties()`

Return the backend properties.

**Returns**

the configuration for the backend. If the backend does not support properties, it returns `None`.

**Return type**

[BackendProperties](qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")

### provider

<span id="qiskit.providers.BaseBackend.provider" />

`BaseBackend.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[BaseProvider](qiskit.providers.BaseProvider "qiskit.providers.BaseProvider")

### run

<span id="qiskit.providers.BaseBackend.run" />

`abstract BaseBackend.run(qobj)`

Run a Qobj on the the backend.

**Parameters**

**qobj** ([*Qobj*](qiskit.qobj.Qobj "qiskit.qobj.Qobj")) – the Qobj to be executed.

### status

<span id="qiskit.providers.BaseBackend.status" />

`BaseBackend.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

### version

<span id="qiskit.providers.BaseBackend.version" />

`BaseBackend.version()`

Return the backend version.

**Returns**

the X.X.X version of the backend.

**Return type**

str

