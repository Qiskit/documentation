# BasicAerJob

<span id="undefined" />

`BasicAerJob(backend, job_id, result)`

Bases: `qiskit.providers.job.JobV1`

BasicAerJob class.

Initializes the asynchronous job.

**Parameters**

*   **backend** – the backend used to run the job.
*   **job\_id** – a unique id in the context of the backend used to run the job.
*   **kwargs** – Any key value metadata to associate with this job.

## Methods

|                                                                                                                                                                                                              |                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| [`backend`](qiskit.providers.basicaer.BasicAerJob.backend#qiskit.providers.basicaer.BasicAerJob.backend "qiskit.providers.basicaer.BasicAerJob.backend")                                                     | Return the instance of the backend used for this job.                               |
| [`cancel`](qiskit.providers.basicaer.BasicAerJob.cancel#qiskit.providers.basicaer.BasicAerJob.cancel "qiskit.providers.basicaer.BasicAerJob.cancel")                                                         | Attempt to cancel the job.                                                          |
| [`cancelled`](qiskit.providers.basicaer.BasicAerJob.cancelled#qiskit.providers.basicaer.BasicAerJob.cancelled "qiskit.providers.basicaer.BasicAerJob.cancelled")                                             | Return whether the job has been cancelled.                                          |
| [`done`](qiskit.providers.basicaer.BasicAerJob.done#qiskit.providers.basicaer.BasicAerJob.done "qiskit.providers.basicaer.BasicAerJob.done")                                                                 | Return whether the job has successfully run.                                        |
| [`in_final_state`](qiskit.providers.basicaer.BasicAerJob.in_final_state#qiskit.providers.basicaer.BasicAerJob.in_final_state "qiskit.providers.basicaer.BasicAerJob.in_final_state")                         | Return whether the job is in a final job state such as `DONE` or `ERROR`.           |
| [`job_id`](qiskit.providers.basicaer.BasicAerJob.job_id#qiskit.providers.basicaer.BasicAerJob.job_id "qiskit.providers.basicaer.BasicAerJob.job_id")                                                         | Return a unique id identifying the job.                                             |
| [`result`](qiskit.providers.basicaer.BasicAerJob.result#qiskit.providers.basicaer.BasicAerJob.result "qiskit.providers.basicaer.BasicAerJob.result")                                                         | Get job result .                                                                    |
| [`running`](qiskit.providers.basicaer.BasicAerJob.running#qiskit.providers.basicaer.BasicAerJob.running "qiskit.providers.basicaer.BasicAerJob.running")                                                     | Return whether the job is actively running.                                         |
| [`status`](qiskit.providers.basicaer.BasicAerJob.status#qiskit.providers.basicaer.BasicAerJob.status "qiskit.providers.basicaer.BasicAerJob.status")                                                         | Gets the status of the job by querying the Python’s future                          |
| [`submit`](qiskit.providers.basicaer.BasicAerJob.submit#qiskit.providers.basicaer.BasicAerJob.submit "qiskit.providers.basicaer.BasicAerJob.submit")                                                         | Submit the job to the backend for execution.                                        |
| [`wait_for_final_state`](qiskit.providers.basicaer.BasicAerJob.wait_for_final_state#qiskit.providers.basicaer.BasicAerJob.wait_for_final_state "qiskit.providers.basicaer.BasicAerJob.wait_for_final_state") | Poll the job status until it progresses to a final state such as `DONE` or `ERROR`. |

## Attributes

<span id="undefined" />

### version

`= 1`
