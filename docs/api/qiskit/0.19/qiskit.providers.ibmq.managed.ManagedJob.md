---
title: ManagedJob
description: API reference for qiskit.providers.ibmq.managed.ManagedJob
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.managed.ManagedJob
---

# ManagedJob

<span id="qiskit.providers.ibmq.managed.ManagedJob" />

`ManagedJob(start_index, experiments_count, job=None)`

Job managed by the Job Manager.

ManagedJob constructor.

**Parameters**

*   **start\_index** (`int`) – Starting index of the experiment set.
*   **experiments\_count** (`int`) – Number of experiments.
*   **job** (`Optional`\[[`IBMQJob`](qiskit.providers.ibmq.job.IBMQJob "qiskit.providers.ibmq.job.ibmqjob.IBMQJob")]) – Job to be managed, or `None` if not already known.

## Methods

|                                                                                                                                                       |                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`ManagedJob.cancel`](qiskit.providers.ibmq.managed.ManagedJob.cancel "qiskit.providers.ibmq.managed.ManagedJob.cancel")()                            | Attempt to cancel the job.                   |
| [`ManagedJob.error_message`](qiskit.providers.ibmq.managed.ManagedJob.error_message "qiskit.providers.ibmq.managed.ManagedJob.error_message")()       | Provide details about the reason of failure. |
| [`ManagedJob.qobj`](qiskit.providers.ibmq.managed.ManagedJob.qobj "qiskit.providers.ibmq.managed.ManagedJob.qobj")()                                  | Return the Qobj for this job.                |
| [`ManagedJob.result`](qiskit.providers.ibmq.managed.ManagedJob.result "qiskit.providers.ibmq.managed.ManagedJob.result")(\[timeout, partial])         | Return the result of the job.                |
| [`ManagedJob.status`](qiskit.providers.ibmq.managed.ManagedJob.status "qiskit.providers.ibmq.managed.ManagedJob.status")()                            | Query the server for job status.             |
| [`ManagedJob.submit`](qiskit.providers.ibmq.managed.ManagedJob.submit "qiskit.providers.ibmq.managed.ManagedJob.submit")(qobj, job\_name, backend, …) | Submit the job.                              |

