# BaseJob[¶](#basejob "Permalink to this headline")

<span id="undefined" />

`BaseJob(backend, job_id)`

Bases: `abc.ABC`

DEPRECATED Legacy Class to handle asynchronous jobs

Initializes the asynchronous job.

**Parameters**

*   **backend** (`BaseBackend`) – the backend used to run the job.
*   **job\_id** (`str`) – a unique id in the context of the backend used to run the job.

## Methods

|                                                                                                                                                                       |                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`backend`](qiskit.providers.BaseJob.backend#qiskit.providers.BaseJob.backend "qiskit.providers.BaseJob.backend")                                                     | Return the backend where this job was executed.                                     |
| [`cancel`](qiskit.providers.BaseJob.cancel#qiskit.providers.BaseJob.cancel "qiskit.providers.BaseJob.cancel")                                                         | Attempt to cancel the job.                                                          |
| [`cancelled`](qiskit.providers.BaseJob.cancelled#qiskit.providers.BaseJob.cancelled "qiskit.providers.BaseJob.cancelled")                                             | Return whether the job has been cancelled.                                          |
| [`done`](qiskit.providers.BaseJob.done#qiskit.providers.BaseJob.done "qiskit.providers.BaseJob.done")                                                                 | Return whether the job has successfully run.                                        |
| [`in_final_state`](qiskit.providers.BaseJob.in_final_state#qiskit.providers.BaseJob.in_final_state "qiskit.providers.BaseJob.in_final_state")                         | Return whether the job is in a final job state.                                     |
| [`job_id`](qiskit.providers.BaseJob.job_id#qiskit.providers.BaseJob.job_id "qiskit.providers.BaseJob.job_id")                                                         | Return a unique id identifying the job.                                             |
| [`result`](qiskit.providers.BaseJob.result#qiskit.providers.BaseJob.result "qiskit.providers.BaseJob.result")                                                         | Return the results of the job.                                                      |
| [`running`](qiskit.providers.BaseJob.running#qiskit.providers.BaseJob.running "qiskit.providers.BaseJob.running")                                                     | Return whether the job is actively running.                                         |
| [`status`](qiskit.providers.BaseJob.status#qiskit.providers.BaseJob.status "qiskit.providers.BaseJob.status")                                                         | Return the status of the job, among the values of `JobStatus`.                      |
| [`submit`](qiskit.providers.BaseJob.submit#qiskit.providers.BaseJob.submit "qiskit.providers.BaseJob.submit")                                                         | Submit the job to the backend for execution.                                        |
| [`wait_for_final_state`](qiskit.providers.BaseJob.wait_for_final_state#qiskit.providers.BaseJob.wait_for_final_state "qiskit.providers.BaseJob.wait_for_final_state") | Poll the job status until it progresses to a final state such as `DONE` or `ERROR`. |
