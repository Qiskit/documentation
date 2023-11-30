# qiskit.providers.BaseBackend

<span id="undefined" />

`BaseBackend(configuration, provider=None)`

Legacy Base class for backends.

Base class for backends.

This method should initialize the module and its configuration, and raise an exception if a component of the module is not available.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration#qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **provider** ([*BaseProvider*](qiskit.providers.BaseProvider#qiskit.providers.BaseProvider "qiskit.providers.BaseProvider")) – provider responsible for this backend

**Raises**

**QiskitError** – if an error occurred when instantiating the backend.

<span id="undefined" />

`abstract __init__(configuration, provider=None)`

Base class for backends.

This method should initialize the module and its configuration, and raise an exception if a component of the module is not available.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration#qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **provider** ([*BaseProvider*](qiskit.providers.BaseProvider#qiskit.providers.BaseProvider "qiskit.providers.BaseProvider")) – provider responsible for this backend

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

<span id="undefined" />

`configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration#qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

<span id="undefined" />

`name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

<span id="undefined" />

`properties()`

Return the backend properties.

**Returns**

the configuration for the backend. If the backend does not support properties, it returns `None`.

**Return type**

[BackendProperties](qiskit.providers.models.BackendProperties#qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")

<span id="undefined" />

`provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[BaseProvider](qiskit.providers.BaseProvider#qiskit.providers.BaseProvider "qiskit.providers.BaseProvider")

<span id="undefined" />

`abstract run(qobj)`

Run a Qobj on the the backend.

**Parameters**

**qobj** ([*Qobj*](qiskit.qobj.Qobj#qiskit.qobj.Qobj "qiskit.qobj.Qobj")) – the Qobj to be executed.

<span id="undefined" />

`status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus#qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

<span id="undefined" />

`version()`

Return the backend version.

**Returns**

the X.X.X version of the backend.

**Return type**

str
