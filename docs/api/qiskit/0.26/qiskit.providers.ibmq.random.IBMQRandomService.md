# qiskit.providers.ibmq.random.IBMQRandomService

<span id="undefined" />

`IBMQRandomService(provider)`

Random number services for an IBM Quantum Experience account provider.

Represent a namespace for random number services available to this provider. An instance of this class is used as an attribute to the [`AccountProvider`](qiskit.providers.ibmq.AccountProvider#qiskit.providers.ibmq.AccountProvider "qiskit.providers.ibmq.AccountProvider") class. This allows a convenient way to query for all services or to access a specific one:

```python
random_services = provider.random.services()
extractor = provider.random.get_extractor('cqc_extractor')
extractor = provider.random.cqc_extractor  # Short hand for above.
```

IBMQRandomService constructor.

**Parameters**

**provider** (`AccountProvider`) – IBM Quantum Experience account provider.

<span id="undefined" />

`__init__(provider)`

IBMQRandomService constructor.

**Parameters**

**provider** (`AccountProvider`) – IBM Quantum Experience account provider.

## Methods

|                                                                                                                                                 |                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`__init__`](#qiskit.providers.ibmq.random.IBMQRandomService.__init__ "qiskit.providers.ibmq.random.IBMQRandomService.__init__")(provider)      | IBMQRandomService constructor.                               |
| [`get_service`](#qiskit.providers.ibmq.random.IBMQRandomService.get_service "qiskit.providers.ibmq.random.IBMQRandomService.get_service")(name) | Return the random number service with the given name.        |
| [`services`](#qiskit.providers.ibmq.random.IBMQRandomService.services "qiskit.providers.ibmq.random.IBMQRandomService.services")()              | Return all random number services available to this account. |

<span id="undefined" />

`get_service(name)`

Return the random number service with the given name.

**Parameters**

**name** (`str`) – Name of the service.

**Return type**

`BaseRandomService`

**Returns**

Service with the given name.

**Raises**

[**IBMQError**](qiskit.providers.ibmq.IBMQError#qiskit.providers.ibmq.IBMQError "qiskit.providers.ibmq.IBMQError") – If the service cannot be found.

<span id="undefined" />

`services()`

Return all random number services available to this account.

**Return type**

`List`\[`BaseRandomService`]
