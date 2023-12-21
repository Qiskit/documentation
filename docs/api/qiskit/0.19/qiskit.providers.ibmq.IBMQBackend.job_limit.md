---
title: job_limit
description: API reference for qiskit.providers.ibmq.IBMQBackend.job_limit
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.IBMQBackend.job_limit
---

# job\_limit

<span id="qiskit.providers.ibmq.IBMQBackend.job_limit" />

`IBMQBackend.job_limit()`

Return the job limit for the backend.

The job limit information includes the current number of active jobs you have on the backend and the maximum number of active jobs you can have on it.

<Admonition title="Note" type="note">
  Job limit information for a backend is provider specific. For example, if you have access to the same backend via different providers, the job limit information might be different for each provider.
</Admonition>

If the method call was successful, you can inspect the job limit for the backend by accessing the `maximum_jobs` and `active_jobs` attributes of the [`BackendJobLimit`](qiskit.providers.ibmq.BackendJobLimit "qiskit.providers.ibmq.BackendJobLimit") instance returned. For example:

```python
backend_job_limit = backend.job_limit()
maximum_jobs = backend_job_limit.maximum_jobs
active_jobs = backend_job_limit.active_jobs
```

If `maximum_jobs` is equal to `None`, then there is no limit to the maximum number of active jobs you could have on the backend.

**Return type**

[`BackendJobLimit`](qiskit.providers.ibmq.BackendJobLimit "qiskit.providers.ibmq.backendjoblimit.BackendJobLimit")

**Returns**

The job limit for the backend, with this provider.

**Raises**

[**IBMQBackendApiProtocolError**](qiskit.providers.ibmq.IBMQBackendApiProtocolError "qiskit.providers.ibmq.IBMQBackendApiProtocolError") – If an unexpected value is received from the server.

