# ManagedJob

<span id="undefined" />

`ManagedJob(start_index, experiments_count, job=None)`

Bases: `object`

Job managed by the Job Manager.

ManagedJob constructor.

**Parameters**

*   **start\_index** (`int`) – Starting index of the experiment set.
*   **experiments\_count** (`int`) – Number of experiments.
*   **job** (`Optional`\[`IBMQJob`]) – Job to be managed, or `None` if not already known.

## Methods

|                                                                                                                                                                                           |                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`cancel`](qiskit.providers.ibmq.managed.ManagedJob.cancel#qiskit.providers.ibmq.managed.ManagedJob.cancel "qiskit.providers.ibmq.managed.ManagedJob.cancel")                             | Attempt to cancel the job.                   |
| [`error_message`](qiskit.providers.ibmq.managed.ManagedJob.error_message#qiskit.providers.ibmq.managed.ManagedJob.error_message "qiskit.providers.ibmq.managed.ManagedJob.error_message") | Provide details about the reason of failure. |
| [`qobj`](qiskit.providers.ibmq.managed.ManagedJob.qobj#qiskit.providers.ibmq.managed.ManagedJob.qobj "qiskit.providers.ibmq.managed.ManagedJob.qobj")                                     | Return the Qobj for this job.                |
| [`result`](qiskit.providers.ibmq.managed.ManagedJob.result#qiskit.providers.ibmq.managed.ManagedJob.result "qiskit.providers.ibmq.managed.ManagedJob.result")                             | Return the result of the job.                |
| [`status`](qiskit.providers.ibmq.managed.ManagedJob.status#qiskit.providers.ibmq.managed.ManagedJob.status "qiskit.providers.ibmq.managed.ManagedJob.status")                             | Query the server for job status.             |
| [`submit`](qiskit.providers.ibmq.managed.ManagedJob.submit#qiskit.providers.ibmq.managed.ManagedJob.submit "qiskit.providers.ibmq.managed.ManagedJob.submit")                             | Submit the job.                              |
