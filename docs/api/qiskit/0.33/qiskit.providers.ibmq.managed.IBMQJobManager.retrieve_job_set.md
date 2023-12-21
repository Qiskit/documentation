# qiskit.providers.ibmq.managed.IBMQJobManager.retrieve\_job\_set

`IBMQJobManager.retrieve_job_set(job_set_id, provider, refresh=False)`

Retrieve a previously submitted job set.

**Parameters**

*   **job\_set\_id** (`str`) – Job set ID.
*   **provider** (`AccountProvider`) – Provider used for this job set.
*   **refresh** (`bool`) – If `True`, re-query the server for the job set information. Otherwise return the cached value.

**Return type**

`ManagedJobSet`

**Returns**

Retrieved job set.

**Raises**

*   [**IBMQJobManagerUnknownJobSet**](qiskit.providers.ibmq.managed.IBMQJobManagerUnknownJobSet#qiskit.providers.ibmq.managed.IBMQJobManagerUnknownJobSet "qiskit.providers.ibmq.managed.IBMQJobManagerUnknownJobSet") – If the job set cannot be found.
*   [**IBMQJobManagerInvalidStateError**](qiskit.providers.ibmq.managed.IBMQJobManagerInvalidStateError#qiskit.providers.ibmq.managed.IBMQJobManagerInvalidStateError "qiskit.providers.ibmq.managed.IBMQJobManagerInvalidStateError") – If jobs for this job set are found but have unexpected attributes.
