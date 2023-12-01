# JobV1

<span id="undefined" />

`JobV1(backend, job_id, **kwargs)`

Bases: `qiskit.providers.job.Job`, `abc.ABC`

Class to handle jobs

This first version of the Backend abstract class is written to be mostly backwards compatible with the legacy providers interface. This was done to ease the transition for users and provider maintainers to the new versioned providers. Expect, future versions of this abstract class to change the data model and interface.

Initializes the asynchronous job.

**Parameters**

*   **backend** (`Backend`) – the backend used to run the job.
*   **job\_id** (`str`) – a unique id in the context of the backend used to run the job.
*   **kwargs** – Any key value metadata to associate with this job.

## Methods

|                                                                                                                                                                 |                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`backend`](qiskit.providers.JobV1.backend#qiskit.providers.JobV1.backend "qiskit.providers.JobV1.backend")                                                     | Return the backend where this job was executed.                                     |
| [`cancel`](qiskit.providers.JobV1.cancel#qiskit.providers.JobV1.cancel "qiskit.providers.JobV1.cancel")                                                         | Attempt to cancel the job.                                                          |
| [`cancelled`](qiskit.providers.JobV1.cancelled#qiskit.providers.JobV1.cancelled "qiskit.providers.JobV1.cancelled")                                             | Return whether the job has been cancelled.                                          |
| [`done`](qiskit.providers.JobV1.done#qiskit.providers.JobV1.done "qiskit.providers.JobV1.done")                                                                 | Return whether the job has successfully run.                                        |
| [`in_final_state`](qiskit.providers.JobV1.in_final_state#qiskit.providers.JobV1.in_final_state "qiskit.providers.JobV1.in_final_state")                         | Return whether the job is in a final job state such as `DONE` or `ERROR`.           |
| [`job_id`](qiskit.providers.JobV1.job_id#qiskit.providers.JobV1.job_id "qiskit.providers.JobV1.job_id")                                                         | Return a unique id identifying the job.                                             |
| [`result`](qiskit.providers.JobV1.result#qiskit.providers.JobV1.result "qiskit.providers.JobV1.result")                                                         | Return the results of the job.                                                      |
| [`running`](qiskit.providers.JobV1.running#qiskit.providers.JobV1.running "qiskit.providers.JobV1.running")                                                     | Return whether the job is actively running.                                         |
| [`status`](qiskit.providers.JobV1.status#qiskit.providers.JobV1.status "qiskit.providers.JobV1.status")                                                         | Return the status of the job, among the values of `JobStatus`.                      |
| [`submit`](qiskit.providers.JobV1.submit#qiskit.providers.JobV1.submit "qiskit.providers.JobV1.submit")                                                         | Submit the job to the backend for execution.                                        |
| [`wait_for_final_state`](qiskit.providers.JobV1.wait_for_final_state#qiskit.providers.JobV1.wait_for_final_state "qiskit.providers.JobV1.wait_for_final_state") | Poll the job status until it progresses to a final state such as `DONE` or `ERROR`. |

## Attributes

<span id="undefined" />

### version

`= 1`
