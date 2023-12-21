# qiskit.providers.ibmq.job.IBMQJob.result

`IBMQJob.result(timeout=None, wait=5, partial=False, refresh=False)`

Return the result of the job.

<Admonition title="Note" type="note">
  Some IBM Quantum Experience job results can only be read once. A second attempt to query the server for the same job will fail, since the job has already been “consumed”.

  The first call to this method in an `IBMQJob` instance will query the server and consume any available job results. Subsequent calls to that instance’s `result()` will also return the results, since they are cached. However, attempting to retrieve the results again in another instance or session might fail due to the job results having been consumed.
</Admonition>

<Admonition title="Note" type="note">
  When partial=True, this method will attempt to retrieve partial results of failed jobs. In this case, precaution should be taken when accessing individual experiments, as doing so might cause an exception. The `success` attribute of the returned [`Result`](qiskit.result.Result#qiskit.result.Result "qiskit.result.Result") instance can be used to verify whether it contains partial results.

  For example, if one of the experiments in the job failed, trying to get the counts of the unsuccessful experiment would raise an exception since there are no counts to return:

  ```python
  try:
      counts = result.get_counts("failed_experiment")
  except QiskitError:
      print("Experiment failed!")
  ```
</Admonition>

If the job failed, you can use [`error_message()`](qiskit.providers.ibmq.job.IBMQJob.error_message#qiskit.providers.ibmq.job.IBMQJob.error_message "qiskit.providers.ibmq.job.IBMQJob.error_message") to get more information.

**Parameters**

*   **timeout** (`Optional`\[`float`]) – Number of seconds to wait for job.
*   **wait** (`float`) – Time in seconds between queries.
*   **partial** (`bool`) – If `True`, return partial results if possible.
*   **refresh** (`bool`) – If `True`, re-query the server for the result. Otherwise return the cached value.

**Return type**

`Result`

**Returns**

Job result.

**Raises**

*   [**IBMQJobInvalidStateError**](qiskit.providers.ibmq.job.IBMQJobInvalidStateError#qiskit.providers.ibmq.job.IBMQJobInvalidStateError "qiskit.providers.ibmq.job.IBMQJobInvalidStateError") – If the job was cancelled.
*   [**IBMQJobFailureError**](qiskit.providers.ibmq.job.IBMQJobFailureError#qiskit.providers.ibmq.job.IBMQJobFailureError "qiskit.providers.ibmq.job.IBMQJobFailureError") – If the job failed.
*   [**IBMQJobApiError**](qiskit.providers.ibmq.job.IBMQJobApiError#qiskit.providers.ibmq.job.IBMQJobApiError "qiskit.providers.ibmq.job.IBMQJobApiError") – If an unexpected error occurred when communicating with the server.
