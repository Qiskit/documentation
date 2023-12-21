# qiskit.providers.ibmq.job.IBMQJob.status

`IBMQJob.status()`

Query the server for the latest job status.

<Admonition title="Note" type="note">
  This method is not designed to be invoked repeatedly in a loop for an extended period of time. Doing so may cause the server to reject your request. Use [`wait_for_final_state()`](qiskit.providers.ibmq.job.IBMQJob.wait_for_final_state#qiskit.providers.ibmq.job.IBMQJob.wait_for_final_state "qiskit.providers.ibmq.job.IBMQJob.wait_for_final_state") if you want to wait for the job to finish.
</Admonition>

<Admonition title="Note" type="note">
  If the job failed, you can use [`error_message()`](qiskit.providers.ibmq.job.IBMQJob.error_message#qiskit.providers.ibmq.job.IBMQJob.error_message "qiskit.providers.ibmq.job.IBMQJob.error_message") to get more information.
</Admonition>

**Return type**

`JobStatus`

**Returns**

The status of the job.

**Raises**

[**IBMQJobApiError**](qiskit.providers.ibmq.job.IBMQJobApiError#qiskit.providers.ibmq.job.IBMQJobApiError "qiskit.providers.ibmq.job.IBMQJobApiError") – If an unexpected error occurred when communicating with the server.
