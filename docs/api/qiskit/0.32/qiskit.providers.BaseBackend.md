# BaseBackend

<span id="undefined" />

`BaseBackend(configuration, provider=None)`

Bases: `abc.ABC`

Legacy Base class for backends.

DEPRECATED Legacy base class for backends.

This method should initialize the module and its configuration, and raise an exception if a component of the module is not available.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration#qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **provider** ([*BaseProvider*](qiskit.providers.BaseProvider#qiskit.providers.BaseProvider "qiskit.providers.BaseProvider")) – provider responsible for this backend

**Raises**

**QiskitError** – if an error occurred when instantiating the backend.

## Methods

|                                                                                                                                                       |                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [`configuration`](qiskit.providers.BaseBackend.configuration#qiskit.providers.BaseBackend.configuration "qiskit.providers.BaseBackend.configuration") | Return the backend configuration. |
| [`name`](qiskit.providers.BaseBackend.name#qiskit.providers.BaseBackend.name "qiskit.providers.BaseBackend.name")                                     | Return the backend name.          |
| [`properties`](qiskit.providers.BaseBackend.properties#qiskit.providers.BaseBackend.properties "qiskit.providers.BaseBackend.properties")             | Return the backend properties.    |
| [`provider`](qiskit.providers.BaseBackend.provider#qiskit.providers.BaseBackend.provider "qiskit.providers.BaseBackend.provider")                     | Return the backend Provider.      |
| [`run`](qiskit.providers.BaseBackend.run#qiskit.providers.BaseBackend.run "qiskit.providers.BaseBackend.run")                                         | Run a Qobj on the the backend.    |
| [`status`](qiskit.providers.BaseBackend.status#qiskit.providers.BaseBackend.status "qiskit.providers.BaseBackend.status")                             | Return the backend status.        |
| [`version`](qiskit.providers.BaseBackend.version#qiskit.providers.BaseBackend.version "qiskit.providers.BaseBackend.version")                         | Return the backend version.       |
