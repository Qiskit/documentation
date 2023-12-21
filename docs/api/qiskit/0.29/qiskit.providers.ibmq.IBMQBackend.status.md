# qiskit.providers.ibmq.IBMQBackend.status

`IBMQBackend.status()`

Return the backend status.

<Admonition title="Note" type="note">
  If the returned [`BackendStatus`](qiskit.providers.models.BackendStatus#qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus") instance has `operational=True` but `status_msg="internal"`, then the backend is accepting jobs but not processing them.
</Admonition>

**Return type**

`BackendStatus`

**Returns**

The status of the backend.

**Raises**

[**IBMQBackendApiProtocolError**](qiskit.providers.ibmq.IBMQBackendApiProtocolError#qiskit.providers.ibmq.IBMQBackendApiProtocolError "qiskit.providers.ibmq.IBMQBackendApiProtocolError") – If the status for the backend cannot be formatted properly.
