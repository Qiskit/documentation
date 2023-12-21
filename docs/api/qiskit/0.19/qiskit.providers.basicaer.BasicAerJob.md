---
title: BasicAerJob
description: API reference for qiskit.providers.basicaer.BasicAerJob
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.basicaer.BasicAerJob
---

# BasicAerJob

<span id="qiskit.providers.basicaer.BasicAerJob" />

`BasicAerJob(backend, job_id, fn, qobj)`

BasicAerJob class.

<span id="qiskit.providers.basicaer.BasicAerJob._executor" />

### \_executor

executor to handle asynchronous jobs

**Type**

futures.Executor

Initializes the asynchronous job.

**Parameters**

*   **backend** – the backend used to run the job.
*   **job\_id** – a unique id in the context of the backend used to run the job.

## Methods

|                                                                                                                                                                              |                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`BasicAerJob.backend`](qiskit.providers.basicaer.BasicAerJob.backend "qiskit.providers.basicaer.BasicAerJob.backend")()                                                     | Return the instance of the backend used for this job.                               |
| [`BasicAerJob.cancel`](qiskit.providers.basicaer.BasicAerJob.cancel "qiskit.providers.basicaer.BasicAerJob.cancel")()                                                        | Attempt to cancel the job.                                                          |
| [`BasicAerJob.cancelled`](qiskit.providers.basicaer.BasicAerJob.cancelled "qiskit.providers.basicaer.BasicAerJob.cancelled")()                                               | Return whether the job has been cancelled.                                          |
| [`BasicAerJob.done`](qiskit.providers.basicaer.BasicAerJob.done "qiskit.providers.basicaer.BasicAerJob.done")()                                                              | Return whether the job has successfully run.                                        |
| [`BasicAerJob.in_final_state`](qiskit.providers.basicaer.BasicAerJob.in_final_state "qiskit.providers.basicaer.BasicAerJob.in_final_state")()                                | Return whether the job is in a final job state.                                     |
| [`BasicAerJob.job_id`](qiskit.providers.basicaer.BasicAerJob.job_id "qiskit.providers.basicaer.BasicAerJob.job_id")()                                                        | Return a unique id identifying the job.                                             |
| [`BasicAerJob.qobj`](qiskit.providers.basicaer.BasicAerJob.qobj "qiskit.providers.basicaer.BasicAerJob.qobj")()                                                              | Return the Qobj submitted for this job.                                             |
| [`BasicAerJob.result`](qiskit.providers.basicaer.BasicAerJob.result "qiskit.providers.basicaer.BasicAerJob.result")(\[timeout])                                              | Get job result.                                                                     |
| [`BasicAerJob.running`](qiskit.providers.basicaer.BasicAerJob.running "qiskit.providers.basicaer.BasicAerJob.running")()                                                     | Return whether the job is actively running.                                         |
| [`BasicAerJob.status`](qiskit.providers.basicaer.BasicAerJob.status "qiskit.providers.basicaer.BasicAerJob.status")()                                                        | Gets the status of the job by querying the Python’s future                          |
| [`BasicAerJob.submit`](qiskit.providers.basicaer.BasicAerJob.submit "qiskit.providers.basicaer.BasicAerJob.submit")()                                                        | Submit the job to the backend for execution.                                        |
| [`BasicAerJob.wait_for_final_state`](qiskit.providers.basicaer.BasicAerJob.wait_for_final_state "qiskit.providers.basicaer.BasicAerJob.wait_for_final_state")(\[timeout, …]) | Poll the job status until it progresses to a final state such as `DONE` or `ERROR`. |

