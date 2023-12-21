---
title: AerJob
description: API reference for qiskit.providers.aer.AerJob
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.AerJob
---

# AerJob

<span id="qiskit.providers.aer.AerJob" />

`AerJob(backend, job_id, fn, qobj, *args)`

AerJob class.

<span id="qiskit.providers.aer.AerJob._executor" />

### \_executor

executor to handle asynchronous jobs

**Type**

futures.Executor

Initializes the asynchronous job.

**Parameters**

*   **backend** – the backend used to run the job.
*   **job\_id** – a unique id in the context of the backend used to run the job.

## Methods

|                                                                                                                                                           |                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`AerJob.backend`](qiskit.providers.aer.AerJob.backend "qiskit.providers.aer.AerJob.backend")()                                                           | Return the instance of the backend used for this job.                               |
| [`AerJob.cancel`](qiskit.providers.aer.AerJob.cancel "qiskit.providers.aer.AerJob.cancel")()                                                              | Attempt to cancel the job.                                                          |
| [`AerJob.cancelled`](qiskit.providers.aer.AerJob.cancelled "qiskit.providers.aer.AerJob.cancelled")()                                                     | Return whether the job has been cancelled.                                          |
| [`AerJob.done`](qiskit.providers.aer.AerJob.done "qiskit.providers.aer.AerJob.done")()                                                                    | Return whether the job has successfully run.                                        |
| [`AerJob.in_final_state`](qiskit.providers.aer.AerJob.in_final_state "qiskit.providers.aer.AerJob.in_final_state")()                                      | Return whether the job is in a final job state.                                     |
| [`AerJob.job_id`](qiskit.providers.aer.AerJob.job_id "qiskit.providers.aer.AerJob.job_id")()                                                              | Return a unique id identifying the job.                                             |
| [`AerJob.qobj`](qiskit.providers.aer.AerJob.qobj "qiskit.providers.aer.AerJob.qobj")()                                                                    | Return the Qobj submitted for this job.                                             |
| [`AerJob.result`](qiskit.providers.aer.AerJob.result "qiskit.providers.aer.AerJob.result")(\[timeout])                                                    | Get job result.                                                                     |
| [`AerJob.running`](qiskit.providers.aer.AerJob.running "qiskit.providers.aer.AerJob.running")()                                                           | Return whether the job is actively running.                                         |
| [`AerJob.status`](qiskit.providers.aer.AerJob.status "qiskit.providers.aer.AerJob.status")()                                                              | Gets the status of the job by querying the Python’s future                          |
| [`AerJob.submit`](qiskit.providers.aer.AerJob.submit "qiskit.providers.aer.AerJob.submit")()                                                              | Submit the job to the backend for execution.                                        |
| [`AerJob.wait_for_final_state`](qiskit.providers.aer.AerJob.wait_for_final_state "qiskit.providers.aer.AerJob.wait_for_final_state")(\[timeout, wait, …]) | Poll the job status until it progresses to a final state such as `DONE` or `ERROR`. |

