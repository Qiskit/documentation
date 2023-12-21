# qiskit.providers.aer.jobs.AerJob.status

`AerJob.status()`

Gets the status of the job by querying the Python’s future

**Returns**

The current JobStatus

**Return type**

[JobStatus](qiskit.providers.JobStatus#qiskit.providers.JobStatus "qiskit.providers.JobStatus")

**Raises**

*   [**JobError**](qiskit.providers.JobError#qiskit.providers.JobError "qiskit.providers.JobError") – If the future is in unexpected state
*   **concurrent.futures.TimeoutError** – if timeout occurred.
