# AccountProvider[¶](#accountprovider "Permalink to this headline")

<span id="undefined" />

`AccountProvider(credentials, factory)`

Bases: `qiskit.providers.provider.ProviderV1`

Provider for a single IBM Quantum Experience account.

The account provider class provides access to the IBM Quantum Experience services available to this account.

You can access a provider by enabling an account with the [`IBMQ.enable_account()`](qiskit.providers.ibmq.IBMQFactory.enable_account#qiskit.providers.ibmq.IBMQFactory.enable_account "qiskit.providers.ibmq.IBMQFactory.enable_account") method, which returns the default provider you have access to:

```python
from qiskit import IBMQ
provider = IBMQ.enable_account(<INSERT_IBM_QUANTUM_EXPERIENCE_TOKEN>)
```

To select a different provider, use the [`IBMQ.get_provider()`](qiskit.providers.ibmq.IBMQFactory.get_provider#qiskit.providers.ibmq.IBMQFactory.get_provider "qiskit.providers.ibmq.IBMQFactory.get_provider") method and specify the hub, group, or project name of the desired provider.

Each provider may offer different services. The main service, `IBMQBackendService`, is available to all providers and gives access to IBM Quantum Experience devices and simulators.

You can obtain an instance of a service using the [`service()`](qiskit.providers.ibmq.AccountProvider.service#qiskit.providers.ibmq.AccountProvider.service "qiskit.providers.ibmq.AccountProvider.service") method or as an attribute of this `AccountProvider` instance. For example:

```python
backend_service = provider.service('backend')
backend_service = provider.service.backend
```

Since `IBMQBackendService` is the main service, some of the backend-related methods are available through this class for convenience.

The [`backends()`](qiskit.providers.ibmq.AccountProvider.backends#qiskit.providers.ibmq.AccountProvider.backends "qiskit.providers.ibmq.AccountProvider.backends") method returns all the backends available to this account:

```python
backends = provider.backends()
```

The [`get_backend()`](qiskit.providers.ibmq.AccountProvider.get_backend#qiskit.providers.ibmq.AccountProvider.get_backend "qiskit.providers.ibmq.AccountProvider.get_backend") method returns a backend that matches the filters passed as argument. An example of retrieving a backend that matches a specified name:

```python
simulator_backend = provider.get_backend('ibmq_qasm_simulator')
```

It is also possible to use the `backend` attribute to reference a backend. As an example, to retrieve the same backend from the example above:

```python
simulator_backend = provider.backend.ibmq_qasm_simulator
```

<Admonition title="Note" type="note">
  The `backend` attribute can be used to autocomplete the names of backends available to this provider. To autocomplete, press `tab` after `provider.backend.`. This feature may not be available if an error occurs during backend discovery. Also note that this feature is only available in interactive sessions, such as in Jupyter Notebook and the Python interpreter.
</Admonition>

AccountProvider constructor.

**Parameters**

*   **credentials** (`Credentials`) – IBM Quantum Experience credentials.
*   **factory** (`IBMQFactory`) – IBM Quantum account.

## Methods

|                                                                                                                                                                              |                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`backends`](qiskit.providers.ibmq.AccountProvider.backends#qiskit.providers.ibmq.AccountProvider.backends "qiskit.providers.ibmq.AccountProvider.backends")                 | Return all backends accessible via this provider, subject to optional filtering. |
| [`get_backend`](qiskit.providers.ibmq.AccountProvider.get_backend#qiskit.providers.ibmq.AccountProvider.get_backend "qiskit.providers.ibmq.AccountProvider.get_backend")     | Return a single backend matching the specified filtering.                        |
| [`has_service`](qiskit.providers.ibmq.AccountProvider.has_service#qiskit.providers.ibmq.AccountProvider.has_service "qiskit.providers.ibmq.AccountProvider.has_service")     | Check if this provider has access to the service.                                |
| [`run_circuits`](qiskit.providers.ibmq.AccountProvider.run_circuits#qiskit.providers.ibmq.AccountProvider.run_circuits "qiskit.providers.ibmq.AccountProvider.run_circuits") | Execute the input circuit(s) on a backend using the runtime service.             |
| [`service`](qiskit.providers.ibmq.AccountProvider.service#qiskit.providers.ibmq.AccountProvider.service "qiskit.providers.ibmq.AccountProvider.service")                     | Return the specified service.                                                    |
| [`services`](qiskit.providers.ibmq.AccountProvider.services#qiskit.providers.ibmq.AccountProvider.services "qiskit.providers.ibmq.AccountProvider.services")                 | Return all available services.                                                   |

## Attributes

<span id="undefined" />

### backend

Return the backend service.

**Return type**

`IBMQBackendService`

**Returns**

The backend service instance.

<span id="undefined" />

### experiment

Return the experiment service.

**Return type**

`IBMExperimentService`

**Returns**

The experiment service instance.

**Raises**

**IBMQNotAuthorizedError** – If the account is not authorized to use the experiment service.

<span id="undefined" />

### random

Return the random number service.

**Return type**

`IBMQRandomService`

**Returns**

The random number service instance.

**Raises**

**IBMQNotAuthorizedError** – If the account is not authorized to use the service.

<span id="undefined" />

### runtime

Return the runtime service.

**Return type**

`IBMRuntimeService`

**Returns**

The runtime service instance.

**Raises**

**IBMQNotAuthorizedError** – If the account is not authorized to use the service.

<span id="undefined" />

### version

`= 1`
