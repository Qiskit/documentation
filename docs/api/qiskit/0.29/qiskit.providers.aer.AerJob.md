# AerJob

<span id="undefined" />

`AerJob(backend, job_id, fn, qobj, *args)`

Bases: `qiskit.providers.job.JobV1`

AerJob class.

<span id="undefined" />

### \_executor

executor to handle asynchronous jobs

**Type**

futures.Executor

Initializes the asynchronous job.

**Parameters**

*   **backend** – the backend used to run the job.
*   **job\_id** – a unique id in the context of the backend used to run the job.
*   **kwargs** – Any key value metadata to associate with this job.

## Methods

|                                                                                                                                                                                |                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| [`backend`](qiskit.providers.aer.AerJob.backend#qiskit.providers.aer.AerJob.backend "qiskit.providers.aer.AerJob.backend")                                                     | Return the instance of the backend used for this job.                               |
| [`cancel`](qiskit.providers.aer.AerJob.cancel#qiskit.providers.aer.AerJob.cancel "qiskit.providers.aer.AerJob.cancel")                                                         | Attempt to cancel the job.                                                          |
| [`cancelled`](qiskit.providers.aer.AerJob.cancelled#qiskit.providers.aer.AerJob.cancelled "qiskit.providers.aer.AerJob.cancelled")                                             | Return whether the job has been cancelled.                                          |
| [`done`](qiskit.providers.aer.AerJob.done#qiskit.providers.aer.AerJob.done "qiskit.providers.aer.AerJob.done")                                                                 | Return whether the job has successfully run.                                        |
| [`in_final_state`](qiskit.providers.aer.AerJob.in_final_state#qiskit.providers.aer.AerJob.in_final_state "qiskit.providers.aer.AerJob.in_final_state")                         | Return whether the job is in a final job state such as `DONE` or `ERROR`.           |
| [`job_id`](qiskit.providers.aer.AerJob.job_id#qiskit.providers.aer.AerJob.job_id "qiskit.providers.aer.AerJob.job_id")                                                         | Return a unique id identifying the job.                                             |
| [`qobj`](qiskit.providers.aer.AerJob.qobj#qiskit.providers.aer.AerJob.qobj "qiskit.providers.aer.AerJob.qobj")                                                                 | Return the Qobj submitted for this job.                                             |
| [`result`](qiskit.providers.aer.AerJob.result#qiskit.providers.aer.AerJob.result "qiskit.providers.aer.AerJob.result")                                                         | Get job result.                                                                     |
| [`running`](qiskit.providers.aer.AerJob.running#qiskit.providers.aer.AerJob.running "qiskit.providers.aer.AerJob.running")                                                     | Return whether the job is actively running.                                         |
| [`status`](qiskit.providers.aer.AerJob.status#qiskit.providers.aer.AerJob.status "qiskit.providers.aer.AerJob.status")                                                         | Gets the status of the job by querying the Python’s future                          |
| [`submit`](qiskit.providers.aer.AerJob.submit#qiskit.providers.aer.AerJob.submit "qiskit.providers.aer.AerJob.submit")                                                         | Submit the job to the backend for execution.                                        |
| [`wait_for_final_state`](qiskit.providers.aer.AerJob.wait_for_final_state#qiskit.providers.aer.AerJob.wait_for_final_state "qiskit.providers.aer.AerJob.wait_for_final_state") | Poll the job status until it progresses to a final state such as `DONE` or `ERROR`. |

## Attributes

<span id="undefined" />

### version

`= 1`
