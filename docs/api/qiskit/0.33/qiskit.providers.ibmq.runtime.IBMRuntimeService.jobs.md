# qiskit.providers.ibmq.runtime.IBMRuntimeService.jobs

`IBMRuntimeService.jobs(limit=10, skip=0, pending=None, program_id=None)`

Retrieve all runtime jobs, subject to optional filtering.

**Parameters**

*   **limit** (`Optional`\[`int`]) – Number of jobs to retrieve. `None` means no limit.
*   **skip** (`int`) – Starting index for the job retrieval.
*   **pending** (`Optional`\[`bool`]) – Filter by job pending state. If `True`, ‘QUEUED’ and ‘RUNNING’ jobs are included. If `False`, ‘DONE’, ‘CANCELLED’ and ‘ERROR’ jobs are included.
*   **program\_id** (`Optional`\[`str`]) – Filter by Program ID.

**Return type**

`List`\[`RuntimeJob`]

**Returns**

A list of runtime jobs.
