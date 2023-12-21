# qiskit.providers.ibmq.managed.ManagedJob.result

`ManagedJob.result(timeout=None, partial=False, refresh=False)`

Return the result of the job.

**Parameters**

*   **timeout** (`Optional`\[`float`]) – Number of seconds to wait for job.
*   **partial** (`bool`) – If `True`, attempt to retrieve partial job results.
*   **refresh** (`bool`) – If `True`, re-query the server for the result. Otherwise return the cached value.

**Return type**

`Optional`\[`Result`]

**Returns**

Job result or `None` if result could not be retrieved.

**Raises**

[**IBMQJobTimeoutError**](qiskit.providers.ibmq.job.IBMQJobTimeoutError#qiskit.providers.ibmq.job.IBMQJobTimeoutError "qiskit.providers.ibmq.job.IBMQJobTimeoutError") – If the job does not return results before a specified timeout.
