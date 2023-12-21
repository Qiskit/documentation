# qiskit.providers.ibmq.AccountProvider.service

`AccountProvider.service(name)`

Return the specified service.

**Parameters**

**name** (`str`) – Name of the service.

**Return type**

`Any`

**Returns**

The specified service.

**Raises**

*   **IBMQInputValueError** – If an unknown service name is specified.
*   **IBMQNotAuthorizedError** – If the account is not authorized to use the service.
