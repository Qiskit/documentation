# AerJob[¶](#aerjob "Permalink to this headline")

<span id="undefined" />

`AerJob(backend, job_id, fn, qobj, executor=None)`

Bases: `qiskit.providers.job.JobV1`

AerJob class for Qiskit Aer Simulators.

Initializes the asynchronous job.

**Parameters**

*   **backend** (*AerBackend*) – the backend used to run the job.
*   **job\_id** (*str*) – a unique id in the context of the backend used to run the job.
*   **fn** (*function*) – a callable function to execute qobj on backend. This should usually be a bound `AerBackend._run()` method, with the signature (qobj: QasmQobj, job\_id: str) -> Result.
*   **qobj** ([*QasmQobj*](qiskit.qobj.QasmQobj#qiskit.qobj.QasmQobj "qiskit.qobj.QasmQobj")) – qobj to execute
*   **executor** (*ThreadPoolExecutor or dask.distributed.client*) – The executor to be used to submit the job.

## Methods

|                                                                                                                                                                                               |                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`backend`](qiskit.providers.aer.jobs.AerJob.backend#qiskit.providers.aer.jobs.AerJob.backend "qiskit.providers.aer.jobs.AerJob.backend")                                                     | Return the instance of the backend used for this job.                               |
| [`cancel`](qiskit.providers.aer.jobs.AerJob.cancel#qiskit.providers.aer.jobs.AerJob.cancel "qiskit.providers.aer.jobs.AerJob.cancel")                                                         | Attempt to cancel the job.                                                          |
| [`cancelled`](qiskit.providers.aer.jobs.AerJob.cancelled#qiskit.providers.aer.jobs.AerJob.cancelled "qiskit.providers.aer.jobs.AerJob.cancelled")                                             | Return whether the job has been cancelled.                                          |
| [`done`](qiskit.providers.aer.jobs.AerJob.done#qiskit.providers.aer.jobs.AerJob.done "qiskit.providers.aer.jobs.AerJob.done")                                                                 | Return whether the job has successfully run.                                        |
| [`executor`](qiskit.providers.aer.jobs.AerJob.executor#qiskit.providers.aer.jobs.AerJob.executor "qiskit.providers.aer.jobs.AerJob.executor")                                                 | Return the executor for this job                                                    |
| [`in_final_state`](qiskit.providers.aer.jobs.AerJob.in_final_state#qiskit.providers.aer.jobs.AerJob.in_final_state "qiskit.providers.aer.jobs.AerJob.in_final_state")                         | Return whether the job is in a final job state such as `DONE` or `ERROR`.           |
| [`job_id`](qiskit.providers.aer.jobs.AerJob.job_id#qiskit.providers.aer.jobs.AerJob.job_id "qiskit.providers.aer.jobs.AerJob.job_id")                                                         | Return a unique id identifying the job.                                             |
| [`qobj`](qiskit.providers.aer.jobs.AerJob.qobj#qiskit.providers.aer.jobs.AerJob.qobj "qiskit.providers.aer.jobs.AerJob.qobj")                                                                 | Return the Qobj submitted for this job.                                             |
| [`result`](qiskit.providers.aer.jobs.AerJob.result#qiskit.providers.aer.jobs.AerJob.result "qiskit.providers.aer.jobs.AerJob.result")                                                         | Get job result.                                                                     |
| [`running`](qiskit.providers.aer.jobs.AerJob.running#qiskit.providers.aer.jobs.AerJob.running "qiskit.providers.aer.jobs.AerJob.running")                                                     | Return whether the job is actively running.                                         |
| [`status`](qiskit.providers.aer.jobs.AerJob.status#qiskit.providers.aer.jobs.AerJob.status "qiskit.providers.aer.jobs.AerJob.status")                                                         | Gets the status of the job by querying the Python’s future                          |
| [`submit`](qiskit.providers.aer.jobs.AerJob.submit#qiskit.providers.aer.jobs.AerJob.submit "qiskit.providers.aer.jobs.AerJob.submit")                                                         | Submit the job to the backend for execution.                                        |
| [`wait_for_final_state`](qiskit.providers.aer.jobs.AerJob.wait_for_final_state#qiskit.providers.aer.jobs.AerJob.wait_for_final_state "qiskit.providers.aer.jobs.AerJob.wait_for_final_state") | Poll the job status until it progresses to a final state such as `DONE` or `ERROR`. |

## Attributes

<span id="undefined" />

### version

`= 1`
