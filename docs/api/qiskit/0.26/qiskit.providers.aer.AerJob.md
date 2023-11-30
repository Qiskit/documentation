# qiskit.providers.aer.AerJob

<span id="undefined" />

`AerJob(backend, job_id, fn, qobj, *args)`

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

<span id="undefined" />

`__init__(backend, job_id, fn, qobj, *args)`

Initializes the asynchronous job.

**Parameters**

*   **backend** – the backend used to run the job.
*   **job\_id** – a unique id in the context of the backend used to run the job.
*   **kwargs** – Any key value metadata to associate with this job.

## Methods

|                                                                                                                                                            |                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.providers.aer.AerJob.__init__ "qiskit.providers.aer.AerJob.__init__")(backend, job\_id, fn, qobj, \*args)                             | Initializes the asynchronous job.                                                   |
| [`backend`](#qiskit.providers.aer.AerJob.backend "qiskit.providers.aer.AerJob.backend")()                                                                  | Return the instance of the backend used for this job.                               |
| [`cancel`](#qiskit.providers.aer.AerJob.cancel "qiskit.providers.aer.AerJob.cancel")()                                                                     | Attempt to cancel the job.                                                          |
| [`cancelled`](#qiskit.providers.aer.AerJob.cancelled "qiskit.providers.aer.AerJob.cancelled")()                                                            | Return whether the job has been cancelled.                                          |
| [`done`](#qiskit.providers.aer.AerJob.done "qiskit.providers.aer.AerJob.done")()                                                                           | Return whether the job has successfully run.                                        |
| [`in_final_state`](#qiskit.providers.aer.AerJob.in_final_state "qiskit.providers.aer.AerJob.in_final_state")()                                             | Return whether the job is in a final job state such as `DONE` or `ERROR`.           |
| [`job_id`](#qiskit.providers.aer.AerJob.job_id "qiskit.providers.aer.AerJob.job_id")()                                                                     | Return a unique id identifying the job.                                             |
| [`qobj`](#qiskit.providers.aer.AerJob.qobj "qiskit.providers.aer.AerJob.qobj")()                                                                           | Return the Qobj submitted for this job.                                             |
| [`result`](#qiskit.providers.aer.AerJob.result "qiskit.providers.aer.AerJob.result")(\[timeout])                                                           | Get job result.                                                                     |
| [`running`](#qiskit.providers.aer.AerJob.running "qiskit.providers.aer.AerJob.running")()                                                                  | Return whether the job is actively running.                                         |
| [`status`](#qiskit.providers.aer.AerJob.status "qiskit.providers.aer.AerJob.status")()                                                                     | Gets the status of the job by querying the Python’s future                          |
| [`submit`](#qiskit.providers.aer.AerJob.submit "qiskit.providers.aer.AerJob.submit")()                                                                     | Submit the job to the backend for execution.                                        |
| [`wait_for_final_state`](#qiskit.providers.aer.AerJob.wait_for_final_state "qiskit.providers.aer.AerJob.wait_for_final_state")(\[timeout, wait, callback]) | Poll the job status until it progresses to a final state such as `DONE` or `ERROR`. |

## Attributes

|           |   |
| --------- | - |
| `version` |   |

<span id="undefined" />

`backend()`

Return the instance of the backend used for this job.

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

`qobj()`

Return the Qobj submitted for this job.

**Returns**

the Qobj submitted for this job.

**Return type**

[Qobj](qiskit.qobj.Qobj#qiskit.qobj.Qobj "qiskit.qobj.Qobj")

<span id="undefined" />

`result(timeout=None)`

Get job result. The behavior is the same as the underlying concurrent Future objects,

[https://docs.python.org/3/library/concurrent.futures.html#future-objects](https://docs.python.org/3/library/concurrent.futures.html#future-objects)

**Parameters**

**timeout** (*float*) – number of seconds to wait for results.

**Returns**

Result object

**Return type**

qiskit.Result

**Raises**

*   **concurrent.futures.TimeoutError** – if timeout occurred.
*   **concurrent.futures.CancelledError** – if job cancelled before completed.

<span id="undefined" />

`running()`

Return whether the job is actively running.

**Return type**

`bool`

<span id="undefined" />

`status()`

Gets the status of the job by querying the Python’s future

**Returns**

The current JobStatus

**Return type**

[JobStatus](qiskit.providers.JobStatus#qiskit.providers.JobStatus "qiskit.providers.JobStatus")

**Raises**

*   [**JobError**](qiskit.providers.JobError#qiskit.providers.JobError "qiskit.providers.JobError") – If the future is in unexpected state
*   **concurrent.futures.TimeoutError** – if timeout occurred.

<span id="undefined" />

`submit()`

Submit the job to the backend for execution.

**Raises**

*   **QobjValidationError** – if the JSON serialization of the Qobj passed
*   **during construction does not validate against the Qobj schema.** –
*   [**JobError**](qiskit.providers.JobError#qiskit.providers.JobError "qiskit.providers.JobError") – if trying to re-submit the job.

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
