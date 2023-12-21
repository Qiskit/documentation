# qiskit.providers.ibmq.IBMQFactory.stored\_account

`static IBMQFactory.stored_account()`

List the account stored on disk.

**Return type**

`Dict`\[`str`, `str`]

**Returns**

A dictionary with information about the account stored on disk.

**Raises**

*   [**IBMQAccountMultipleCredentialsFound**](qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound#qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound "qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound") – If multiple IBM Quantum Experience credentials are found on disk.
*   [**IBMQAccountCredentialsInvalidUrl**](qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl#qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl "qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl") – If invalid IBM Quantum Experience credentials are found on disk.
