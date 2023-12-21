# qiskit.providers.ibmq.IBMQFactory.get\_provider

`IBMQFactory.get_provider(hub=None, group=None, project=None)`

Return a provider for a single hub/group/project combination.

**Parameters**

*   **hub** (`Optional`\[`str`]) – Name of the hub.
*   **group** (`Optional`\[`str`]) – Name of the group.
*   **project** (`Optional`\[`str`]) – Name of the project.

**Return type**

`AccountProvider`

**Returns**

A provider that matches the specified criteria.

**Raises**

[**IBMQProviderError**](qiskit.providers.ibmq.IBMQProviderError#qiskit.providers.ibmq.IBMQProviderError "qiskit.providers.ibmq.IBMQProviderError") – If no provider matches the specified criteria, or more than one provider matches the specified criteria.
