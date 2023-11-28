# qiskit.providers.basicaer.BasicAerJob

<span id="undefined" />

`BasicAerJob(backend, job_id, result)`

BasicAerJob class.

Initializes the asynchronous job.

**Parameters**

*   **backend** – the backend used to run the job.
*   **job\_id** – a unique id in the context of the backend used to run the job.
*   **kwargs** – Any key value metadata to associate with this job.

<span id="undefined" />

`__init__(backend, job_id, result)`

Initializes the asynchronous job.

**Parameters**

*   **backend** – the backend used to run the job.
*   **job\_id** – a unique id in the context of the backend used to run the job.
*   **kwargs** – Any key value metadata to associate with this job.

## Methods

|                                                                                                                                                                                |                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.providers.basicaer.BasicAerJob.__init__ "qiskit.providers.basicaer.BasicAerJob.__init__")(backend, job\_id, result)                                       | Initializes the asynchronous job.                                                   |
| [`backend`](#qiskit.providers.basicaer.BasicAerJob.backend "qiskit.providers.basicaer.BasicAerJob.backend")()                                                                  | Return the instance of the backend used for this job.                               |
| [`cancel`](#qiskit.providers.basicaer.BasicAerJob.cancel "qiskit.providers.basicaer.BasicAerJob.cancel")()                                                                     | Attempt to cancel the job.                                                          |
| [`cancelled`](#qiskit.providers.basicaer.BasicAerJob.cancelled "qiskit.providers.basicaer.BasicAerJob.cancelled")()                                                            | Return whether the job has been cancelled.                                          |
| [`done`](#qiskit.providers.basicaer.BasicAerJob.done "qiskit.providers.basicaer.BasicAerJob.done")()                                                                           | Return whether the job has successfully run.                                        |
| [`in_final_state`](#qiskit.providers.basicaer.BasicAerJob.in_final_state "qiskit.providers.basicaer.BasicAerJob.in_final_state")()                                             | Return whether the job is in a final job state such as `DONE` or `ERROR`.           |
| [`job_id`](#qiskit.providers.basicaer.BasicAerJob.job_id "qiskit.providers.basicaer.BasicAerJob.job_id")()                                                                     | Return a unique id identifying the job.                                             |
| [`result`](#qiskit.providers.basicaer.BasicAerJob.result "qiskit.providers.basicaer.BasicAerJob.result")(\[timeout])                                                           | Get job result .                                                                    |
| [`running`](#qiskit.providers.basicaer.BasicAerJob.running "qiskit.providers.basicaer.BasicAerJob.running")()                                                                  | Return whether the job is actively running.                                         |
| [`status`](#qiskit.providers.basicaer.BasicAerJob.status "qiskit.providers.basicaer.BasicAerJob.status")()                                                                     | Gets the status of the job by querying the Python’s future                          |
| [`submit`](#qiskit.providers.basicaer.BasicAerJob.submit "qiskit.providers.basicaer.BasicAerJob.submit")()                                                                     | Submit the job to the backend for execution.                                        |
| [`wait_for_final_state`](#qiskit.providers.basicaer.BasicAerJob.wait_for_final_state "qiskit.providers.basicaer.BasicAerJob.wait_for_final_state")(\[timeout, wait, callback]) | Poll the job status until it progresses to a final state such as `DONE` or `ERROR`. |

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

`result(timeout=None)`

Get job result .

**Returns**

Result object

**Return type**

qiskit.Result

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

[qiskit.providers.JobStatus](qiskit.providers.JobStatus#qiskit.providers.JobStatus "qiskit.providers.JobStatus")

<span id="undefined" />

`submit()`

Submit the job to the backend for execution.

**Raises**

[**JobError**](qiskit.providers.JobError#qiskit.providers.JobError "qiskit.providers.JobError") – if trying to re-submit the job.

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
