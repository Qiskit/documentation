# qiskit.providers.ibmq.managed.ManagedResults.combine\_results

`ManagedResults.combine_results()`

Combine results from all jobs into a single Result.

<Admonition title="Note" type="note">
  Since the order of the results must match the order of the initial experiments, job results can only be combined if all jobs succeeded.
</Admonition>

**Return type**

`Result`

**Returns**

**A [`Result`](qiskit.result.Result#qiskit.result.Result "qiskit.result.Result") object that contains results from**

all jobs.

**Raises**

[**IBMQManagedResultDataNotAvailable**](qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable#qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable "qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable") – If results cannot be combined because some jobs failed.
