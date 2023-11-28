# AerJobSet[¶](#aerjobset "Permalink to this headline")

<span id="undefined" />

`AerJobSet(backend, job_id, fn, experiments, executor=None)`

Bases: `qiskit.providers.job.JobV1`

A set of [`AerJob`](qiskit.providers.aer.jobs.AerJob#qiskit.providers.aer.jobs.AerJob "qiskit.providers.aer.jobs.AerJob") classes for Qiskit Aer simulators.

An instance of this class is returned when you submit experiments with executor option. It provides methods that allow you to interact with the jobs as a single entity. For example, you can retrieve the results for all of the jobs using [`result()`](qiskit.providers.aer.jobs.AerJobSet.result#qiskit.providers.aer.jobs.AerJobSet.result "qiskit.providers.aer.jobs.AerJobSet.result") and cancel all jobs using [`cancel()`](qiskit.providers.aer.jobs.AerJobSet.cancel#qiskit.providers.aer.jobs.AerJobSet.cancel "qiskit.providers.aer.jobs.AerJobSet.cancel").

AerJobSet constructor.

**Parameters**

*   **backend** (*Aerbackend*) – Aerbackend.
*   **job\_id** (*int*) – Job Id.
*   **fn** (*function*) – a callable function to execute qobj on backend. This should usually be a bound `AerBackend._run()` method, with the signature (qobj: QasmQobj, job\_id: str) -> Result.
*   **experiments** (*List\[*[*QasmQobj*](qiskit.qobj.QasmQobj#qiskit.qobj.QasmQobj "qiskit.qobj.QasmQobj")*]*) – List\[QasmQobjs] to execute.
*   **executor** (*ThreadPoolExecutor or dask.distributed.client*) – The executor to be used to submit the job.

## Methods

|                                                                                                                                                                                                        |                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| [`backend`](qiskit.providers.aer.jobs.AerJobSet.backend#qiskit.providers.aer.jobs.AerJobSet.backend "qiskit.providers.aer.jobs.AerJobSet.backend")                                                     | Return the backend where this job was executed.                                     |
| [`cancel`](qiskit.providers.aer.jobs.AerJobSet.cancel#qiskit.providers.aer.jobs.AerJobSet.cancel "qiskit.providers.aer.jobs.AerJobSet.cancel")                                                         | Cancel all jobs in this job set.                                                    |
| [`cancelled`](qiskit.providers.aer.jobs.AerJobSet.cancelled#qiskit.providers.aer.jobs.AerJobSet.cancelled "qiskit.providers.aer.jobs.AerJobSet.cancelled")                                             | Return whether the job has been cancelled.                                          |
| [`done`](qiskit.providers.aer.jobs.AerJobSet.done#qiskit.providers.aer.jobs.AerJobSet.done "qiskit.providers.aer.jobs.AerJobSet.done")                                                                 | Return whether the job has successfully run.                                        |
| [`executor`](qiskit.providers.aer.jobs.AerJobSet.executor#qiskit.providers.aer.jobs.AerJobSet.executor "qiskit.providers.aer.jobs.AerJobSet.executor")                                                 | Return the executor for this job                                                    |
| [`in_final_state`](qiskit.providers.aer.jobs.AerJobSet.in_final_state#qiskit.providers.aer.jobs.AerJobSet.in_final_state "qiskit.providers.aer.jobs.AerJobSet.in_final_state")                         | Return whether the job is in a final job state such as `DONE` or `ERROR`.           |
| [`job`](qiskit.providers.aer.jobs.AerJobSet.job#qiskit.providers.aer.jobs.AerJobSet.job "qiskit.providers.aer.jobs.AerJobSet.job")                                                                     | Retrieve the job used to submit the specified experiment and its index.             |
| [`job_id`](qiskit.providers.aer.jobs.AerJobSet.job_id#qiskit.providers.aer.jobs.AerJobSet.job_id "qiskit.providers.aer.jobs.AerJobSet.job_id")                                                         | Return a unique id identifying the job.                                             |
| [`result`](qiskit.providers.aer.jobs.AerJobSet.result#qiskit.providers.aer.jobs.AerJobSet.result "qiskit.providers.aer.jobs.AerJobSet.result")                                                         | Return the results of the jobs as a single Result object.                           |
| [`running`](qiskit.providers.aer.jobs.AerJobSet.running#qiskit.providers.aer.jobs.AerJobSet.running "qiskit.providers.aer.jobs.AerJobSet.running")                                                     | Return whether the job is actively running.                                         |
| [`status`](qiskit.providers.aer.jobs.AerJobSet.status#qiskit.providers.aer.jobs.AerJobSet.status "qiskit.providers.aer.jobs.AerJobSet.status")                                                         | Return the status of each job in this set.                                          |
| [`submit`](qiskit.providers.aer.jobs.AerJobSet.submit#qiskit.providers.aer.jobs.AerJobSet.submit "qiskit.providers.aer.jobs.AerJobSet.submit")                                                         | Execute this set of jobs on an executor.                                            |
| [`wait_for_final_state`](qiskit.providers.aer.jobs.AerJobSet.wait_for_final_state#qiskit.providers.aer.jobs.AerJobSet.wait_for_final_state "qiskit.providers.aer.jobs.AerJobSet.wait_for_final_state") | Poll the job status until it progresses to a final state such as `DONE` or `ERROR`. |
| [`worker`](qiskit.providers.aer.jobs.AerJobSet.worker#qiskit.providers.aer.jobs.AerJobSet.worker "qiskit.providers.aer.jobs.AerJobSet.worker")                                                         | Retrieve the index of job.                                                          |
| [`worker_job`](qiskit.providers.aer.jobs.AerJobSet.worker_job#qiskit.providers.aer.jobs.AerJobSet.worker_job "qiskit.providers.aer.jobs.AerJobSet.worker_job")                                         | Retrieve the job specified with job’s id                                            |
| [`worker_results`](qiskit.providers.aer.jobs.AerJobSet.worker_results#qiskit.providers.aer.jobs.AerJobSet.worker_results "qiskit.providers.aer.jobs.AerJobSet.worker_results")                         | Return the result of the jobs specified with worker\_id.                            |

## Attributes

<span id="undefined" />

### version

`= 1`
