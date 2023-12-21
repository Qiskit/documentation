---
title: BaseJob
description: API reference for qiskit.providers.BaseJob
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.BaseJob
---

# BaseJob

<span id="qiskit.providers.BaseJob" />

`BaseJob(backend, job_id)`

Class to handle asynchronous jobs

Initializes the asynchronous job.

**Parameters**

*   **backend** ([`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend")) – the backend used to run the job.
*   **job\_id** (`str`) – a unique id in the context of the backend used to run the job.

## Methods

|                                                                                                                                                |                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`BaseJob.backend`](qiskit.providers.BaseJob.backend "qiskit.providers.BaseJob.backend")()                                                     | Return the backend where this job was executed.                                     |
| [`BaseJob.cancel`](qiskit.providers.BaseJob.cancel "qiskit.providers.BaseJob.cancel")()                                                        | Attempt to cancel the job.                                                          |
| [`BaseJob.cancelled`](qiskit.providers.BaseJob.cancelled "qiskit.providers.BaseJob.cancelled")()                                               | Return whether the job has been cancelled.                                          |
| [`BaseJob.done`](qiskit.providers.BaseJob.done "qiskit.providers.BaseJob.done")()                                                              | Return whether the job has successfully run.                                        |
| [`BaseJob.in_final_state`](qiskit.providers.BaseJob.in_final_state "qiskit.providers.BaseJob.in_final_state")()                                | Return whether the job is in a final job state.                                     |
| [`BaseJob.job_id`](qiskit.providers.BaseJob.job_id "qiskit.providers.BaseJob.job_id")()                                                        | Return a unique id identifying the job.                                             |
| [`BaseJob.result`](qiskit.providers.BaseJob.result "qiskit.providers.BaseJob.result")()                                                        | Return the results of the job.                                                      |
| [`BaseJob.running`](qiskit.providers.BaseJob.running "qiskit.providers.BaseJob.running")()                                                     | Return whether the job is actively running.                                         |
| [`BaseJob.status`](qiskit.providers.BaseJob.status "qiskit.providers.BaseJob.status")()                                                        | Return the status of the job, among the values of `JobStatus`.                      |
| [`BaseJob.submit`](qiskit.providers.BaseJob.submit "qiskit.providers.BaseJob.submit")()                                                        | Submit the job to the backend for execution.                                        |
| [`BaseJob.wait_for_final_state`](qiskit.providers.BaseJob.wait_for_final_state "qiskit.providers.BaseJob.wait_for_final_state")(\[timeout, …]) | Poll the job status until it progresses to a final state such as `DONE` or `ERROR`. |

