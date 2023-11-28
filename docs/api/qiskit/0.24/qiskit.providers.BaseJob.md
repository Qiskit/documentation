<span id="qiskit-providers-basejob" />

# qiskit.providers.BaseJob

<span id="undefined" />

`BaseJob(backend, job_id)`

Legacy Class to handle asynchronous jobs

Initializes the asynchronous job.

**Parameters**

*   **backend** (`BaseBackend`) – the backend used to run the job.
*   **job\_id** (`str`) – a unique id in the context of the backend used to run the job.

<span id="undefined" />

`__init__(backend, job_id)`

Initializes the asynchronous job.

**Parameters**

*   **backend** (`BaseBackend`) – the backend used to run the job.
*   **job\_id** (`str`) – a unique id in the context of the backend used to run the job.

## Methods

|                                                                                                                                                      |                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.providers.BaseJob.__init__ "qiskit.providers.BaseJob.__init__")(backend, job\_id)                                               | Initializes the asynchronous job.                                                   |
| [`backend`](#qiskit.providers.BaseJob.backend "qiskit.providers.BaseJob.backend")()                                                                  | Return the backend where this job was executed.                                     |
| [`cancel`](#qiskit.providers.BaseJob.cancel "qiskit.providers.BaseJob.cancel")()                                                                     | Attempt to cancel the job.                                                          |
| [`cancelled`](#qiskit.providers.BaseJob.cancelled "qiskit.providers.BaseJob.cancelled")()                                                            | Return whether the job has been cancelled.                                          |
| [`done`](#qiskit.providers.BaseJob.done "qiskit.providers.BaseJob.done")()                                                                           | Return whether the job has successfully run.                                        |
| [`in_final_state`](#qiskit.providers.BaseJob.in_final_state "qiskit.providers.BaseJob.in_final_state")()                                             | Return whether the job is in a final job state.                                     |
| [`job_id`](#qiskit.providers.BaseJob.job_id "qiskit.providers.BaseJob.job_id")()                                                                     | Return a unique id identifying the job.                                             |
| [`result`](#qiskit.providers.BaseJob.result "qiskit.providers.BaseJob.result")()                                                                     | Return the results of the job.                                                      |
| [`running`](#qiskit.providers.BaseJob.running "qiskit.providers.BaseJob.running")()                                                                  | Return whether the job is actively running.                                         |
| [`status`](#qiskit.providers.BaseJob.status "qiskit.providers.BaseJob.status")()                                                                     | Return the status of the job, among the values of `JobStatus`.                      |
| [`submit`](#qiskit.providers.BaseJob.submit "qiskit.providers.BaseJob.submit")()                                                                     | Submit the job to the backend for execution.                                        |
| [`wait_for_final_state`](#qiskit.providers.BaseJob.wait_for_final_state "qiskit.providers.BaseJob.wait_for_final_state")(\[timeout, wait, callback]) | Poll the job status until it progresses to a final state such as `DONE` or `ERROR`. |

<span id="undefined" />

`backend()`

Return the backend where this job was executed.

**Return type**

`BaseBackend`

<span id="undefined" />

`abstract cancel()`

Attempt to cancel the job.

<span id="undefined" />

`cancelled()`

Return whether the job has been cancelled.

**Return type**

`bool`

<span id="undefined" />

`done()`

Return whether the job has successfully run.

**Return type**

`bool`

<span id="undefined" />

`in_final_state()`

Return whether the job is in a final job state.

**Return type**

`bool`

<span id="undefined" />

`job_id()`

Return a unique id identifying the job.

**Return type**

`str`

<span id="undefined" />

`abstract result()`

Return the results of the job.

<span id="undefined" />

`running()`

Return whether the job is actively running.

**Return type**

`bool`

<span id="undefined" />

`abstract status()`

Return the status of the job, among the values of `JobStatus`.

<span id="undefined" />

`abstract submit()`

Submit the job to the backend for execution.

<span id="undefined" />

`wait_for_final_state(timeout=None, wait=5, callback=None)`

Poll the job status until it progresses to a final state such as `DONE` or `ERROR`.

**Parameters**

*   **timeout** (`Optional`\[`float`]) – Seconds to wait for the job. If `None`, wait indefinitely.

*   **wait** (`float`) – Seconds between queries.

*   **callback** (`Optional`\[`Callable`]) –

    Callback function invoked after each query. The following positional arguments are provided to the callback function:

    *   job\_id: Job ID
    *   job\_status: Status of the job from the last query
    *   job: This BaseJob instance

    Note: different subclass might provide different arguments to the callback function.

**Raises**

[**JobTimeoutError**](qiskit.providers.JobTimeoutError#qiskit.providers.JobTimeoutError "qiskit.providers.JobTimeoutError") – If the job does not reach a final state before the specified timeout.

**Return type**

`None`
