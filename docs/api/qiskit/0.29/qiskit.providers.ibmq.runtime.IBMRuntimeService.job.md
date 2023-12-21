# qiskit.providers.ibmq.runtime.IBMRuntimeService.job

`IBMRuntimeService.job(job_id)`

Retrieve a runtime job.

**Parameters**

**job\_id** (`str`) – Job ID.

**Return type**

`RuntimeJob`

**Returns**

Runtime job retrieved.

**Raises**

*   **RuntimeJobNotFound** – If the job doesn’t exist.
*   **QiskitRuntimeError** – If the request failed.
