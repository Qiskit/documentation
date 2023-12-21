---
title: active_jobs
description: API reference for qiskit.providers.ibmq.IBMQBackend.active_jobs
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.IBMQBackend.active_jobs
---

# active\_jobs

<span id="qiskit.providers.ibmq.IBMQBackend.active_jobs" />

`IBMQBackend.active_jobs(limit=10)`

Return the unfinished jobs submitted to this backend.

Return the jobs submitted to this backend, with this provider, that are currently in an unfinished job status state. The unfinished [`JobStatus`](qiskit.providers.JobStatus "qiskit.providers.jobstatus.JobStatus") states include: `INITIALIZING`, `VALIDATING`, `QUEUED`, and `RUNNING`.

**Parameters**

**limit** (`int`) – Number of jobs to retrieve.

**Return type**

`List`\[[`IBMQJob`](qiskit.providers.ibmq.job.IBMQJob "qiskit.providers.ibmq.job.ibmqjob.IBMQJob")]

**Returns**

A list of the unfinished jobs for this backend on this provider.

