# qiskit.providers.ibmq.IBMQBackend.remaining\_jobs\_count

`IBMQBackend.remaining_jobs_count()`

Return the number of remaining jobs that could be submitted to the backend.

<Admonition title="Note" type="note">
  The number of remaining jobs for a backend is provider specific. For example, if you have access to the same backend via different providers, the number of remaining jobs might be different for each. See [`BackendJobLimit`](qiskit.providers.ibmq.BackendJobLimit#qiskit.providers.ibmq.BackendJobLimit "qiskit.providers.ibmq.BackendJobLimit") for the job limit information of a backend.
</Admonition>

If `None` is returned, there are no limits to the maximum number of active jobs you could have on the backend.

**Return type**

`Optional`\[`int`]

**Returns**

The remaining number of jobs a user could submit to the backend, with this provider, before the maximum limit on active jobs is reached.

**Raises**

[**IBMQBackendApiProtocolError**](qiskit.providers.ibmq.IBMQBackendApiProtocolError#qiskit.providers.ibmq.IBMQBackendApiProtocolError "qiskit.providers.ibmq.IBMQBackendApiProtocolError") – If an unexpected value is received from the server.
