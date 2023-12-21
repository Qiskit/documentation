# qiskit.providers.ibmq.runtime.IBMRuntimeService.delete\_job

`IBMRuntimeService.delete_job(job_id)`

Delete a runtime job.

Note that this operation cannot be reversed.

**Parameters**

**job\_id** (`str`) – ID of the job to delete.

**Raises**

*   **RuntimeJobNotFound** – If the job doesn’t exist.
*   **QiskitRuntimeError** – If the request failed.

**Return type**

`None`
