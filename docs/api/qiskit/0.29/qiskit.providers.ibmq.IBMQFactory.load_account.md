# qiskit.providers.ibmq.IBMQFactory.load\_account

`IBMQFactory.load_account()`

Authenticate against IBM Quantum Experience from stored credentials.

**Return type**

`Optional`\[`AccountProvider`]

**Returns**

If the configuration file specifies a default provider, it is returned. Otherwise the provider for the open access project is returned.

**Raises**

*   [**IBMQAccountCredentialsInvalidFormat**](qiskit.providers.ibmq.IBMQAccountCredentialsInvalidFormat#qiskit.providers.ibmq.IBMQAccountCredentialsInvalidFormat "qiskit.providers.ibmq.IBMQAccountCredentialsInvalidFormat") – If the default provider stored on disk could not be parsed.
*   [**IBMQAccountCredentialsNotFound**](qiskit.providers.ibmq.IBMQAccountCredentialsNotFound#qiskit.providers.ibmq.IBMQAccountCredentialsNotFound "qiskit.providers.ibmq.IBMQAccountCredentialsNotFound") – If no IBM Quantum Experience credentials can be found.
*   [**IBMQAccountMultipleCredentialsFound**](qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound#qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound "qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound") – If multiple IBM Quantum Experience credentials are found.
*   [**IBMQAccountCredentialsInvalidUrl**](qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl#qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl "qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl") – If invalid IBM Quantum Experience credentials are found.
*   [**IBMQProviderError**](qiskit.providers.ibmq.IBMQProviderError#qiskit.providers.ibmq.IBMQProviderError "qiskit.providers.ibmq.IBMQProviderError") – If the default provider stored on disk could not be found.
