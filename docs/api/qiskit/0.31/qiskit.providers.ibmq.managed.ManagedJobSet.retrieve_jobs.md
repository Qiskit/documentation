# qiskit.providers.ibmq.managed.ManagedJobSet.retrieve\_jobs

`ManagedJobSet.retrieve_jobs(provider, refresh=False)`

Retrieve previously submitted jobs in this set.

**Parameters**

*   **provider** (`AccountProvider`) – Provider used for this job set.
*   **refresh** (`bool`) – If `True`, re-query the server for the job set. Otherwise return the cached value.

**Raises**

*   [**IBMQJobManagerUnknownJobSet**](qiskit.providers.ibmq.managed.IBMQJobManagerUnknownJobSet#qiskit.providers.ibmq.managed.IBMQJobManagerUnknownJobSet "qiskit.providers.ibmq.managed.IBMQJobManagerUnknownJobSet") – If the job set cannot be found.
*   [**IBMQJobManagerInvalidStateError**](qiskit.providers.ibmq.managed.IBMQJobManagerInvalidStateError#qiskit.providers.ibmq.managed.IBMQJobManagerInvalidStateError "qiskit.providers.ibmq.managed.IBMQJobManagerInvalidStateError") – If jobs for this job set are found but have unexpected attributes.

**Return type**

`None`
