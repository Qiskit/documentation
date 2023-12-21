# qiskit.providers.ibmq.IBMQBackend.active\_jobs

`IBMQBackend.active_jobs(limit=10)`

Return the unfinished jobs submitted to this backend.

Return the jobs submitted to this backend, with this provider, that are currently in an unfinished job status state. The unfinished `JobStatus` states include: `INITIALIZING`, `VALIDATING`, `QUEUED`, and `RUNNING`.

**Parameters**

**limit** (`int`) – Number of jobs to retrieve.

**Return type**

`List`\[`IBMQJob`]

**Returns**

A list of the unfinished jobs for this backend on this provider.
