# qiskit.providers.ibmq.job.IBMQJob.qobj

`IBMQJob.qobj()`

Return the Qobj for this job.

**Return type**

`Union`\[`QasmQobj`, `PulseQobj`, `None`]

**Returns**

The Qobj for this job, or `None` if the job does not have a Qobj.

**Raises**

[**IBMQJobApiError**](qiskit.providers.ibmq.job.IBMQJobApiError#qiskit.providers.ibmq.job.IBMQJobApiError "qiskit.providers.ibmq.job.IBMQJobApiError") – If an unexpected error occurred when retrieving job information from the server.
