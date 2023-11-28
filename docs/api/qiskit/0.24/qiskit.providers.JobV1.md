<span id="qiskit-providers-jobv1" />

# qiskit.providers.JobV1

<span id="undefined" />

`JobV1(backend, job_id, **kwargs)`

Class to handle jobs

This first version of the Backend abstract class is written to be mostly backwards compatible with the legacy providers interface. This was done to ease the transition for users and provider maintainers to the new versioned providers. Expect, future versions of this abstract class to change the data model and interface.

Initializes the asynchronous job.

**Parameters**

*   **backend** (`Backend`) – the backend used to run the job.
*   **job\_id** (`str`) – a unique id in the context of the backend used to run the job.
*   **kwargs** – Any key value metadata to associate with this job.

<span id="undefined" />

`__init__(backend, job_id, **kwargs)`

Initializes the asynchronous job.

**Parameters**

*   **backend** (`Backend`) – the backend used to run the job.
*   **job\_id** (`str`) – a unique id in the context of the backend used to run the job.
*   **kwargs** – Any key value metadata to associate with this job.

## Methods

|                                                                                                                                                  |                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.providers.JobV1.__init__ "qiskit.providers.JobV1.__init__")(backend, job\_id, \*\*kwargs)                                   | Initializes the asynchronous job.                                                   |
| [`backend`](#qiskit.providers.JobV1.backend "qiskit.providers.JobV1.backend")()                                                                  | Return the backend where this job was executed.                                     |
| [`cancel`](#qiskit.providers.JobV1.cancel "qiskit.providers.JobV1.cancel")()                                                                     | Attempt to cancel the job.                                                          |
| [`cancelled`](#qiskit.providers.JobV1.cancelled "qiskit.providers.JobV1.cancelled")()                                                            | Return whether the job has been cancelled.                                          |
| [`done`](#qiskit.providers.JobV1.done "qiskit.providers.JobV1.done")()                                                                           | Return whether the job has successfully run.                                        |
| [`in_final_state`](#qiskit.providers.JobV1.in_final_state "qiskit.providers.JobV1.in_final_state")()                                             | Return whether the job is in a final job state such as `DONE` or `ERROR`.           |
| [`job_id`](#qiskit.providers.JobV1.job_id "qiskit.providers.JobV1.job_id")()                                                                     | Return a unique id identifying the job.                                             |
| [`result`](#qiskit.providers.JobV1.result "qiskit.providers.JobV1.result")()                                                                     | Return the results of the job.                                                      |
| [`running`](#qiskit.providers.JobV1.running "qiskit.providers.JobV1.running")()                                                                  | Return whether the job is actively running.                                         |
| [`status`](#qiskit.providers.JobV1.status "qiskit.providers.JobV1.status")()                                                                     | Return the status of the job, among the values of `JobStatus`.                      |
| [`submit`](#qiskit.providers.JobV1.submit "qiskit.providers.JobV1.submit")()                                                                     | Submit the job to the backend for execution.                                        |
| [`wait_for_final_state`](#qiskit.providers.JobV1.wait_for_final_state "qiskit.providers.JobV1.wait_for_final_state")(\[timeout, wait, callback]) | Poll the job status until it progresses to a final state such as `DONE` or `ERROR`. |

## Attributes

|           |   |
| --------- | - |
| `version` |   |

<span id="undefined" />

`backend()`

Return the backend where this job was executed.

**Return type**

`Backend`

<span id="undefined" />

`cancel()`

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

Return whether the job is in a final job state such as `DONE` or `ERROR`.

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
