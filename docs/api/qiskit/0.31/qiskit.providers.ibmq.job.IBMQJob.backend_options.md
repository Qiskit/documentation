# qiskit.providers.ibmq.job.IBMQJob.backend\_options

`IBMQJob.backend_options()`

Return the backend configuration options used for this job.

Options that are not applicable to the job execution are not returned. Some but not all of the options with default values are returned. You can use [`qiskit.providers.ibmq.IBMQBackend.options`](qiskit.providers.ibmq.IBMQBackend#qiskit.providers.ibmq.IBMQBackend.options "qiskit.providers.ibmq.IBMQBackend.options") to see all backend options.

**Return type**

`Dict`\[`str`, `Any`]

**Returns**

Backend options used for this job. An empty dictionary is returned if the options cannot be retrieved.
