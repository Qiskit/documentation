---
title: BasicAerJob
description: API reference for qiskit.providers.basicaer.BasicAerJob
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.basicaer.BasicAerJob
---

# BasicAerJob

<span id="qiskit.providers.basicaer.BasicAerJob" />

`BasicAerJob(backend, job_id, fn, qobj)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/providers/basicaer/basicaerjob.py "view source code")

BasicAerJob class.

<span id="qiskit.providers.basicaer.BasicAerJob._executor" />

### \_executor

executor to handle asynchronous jobs

**Type**

futures.Executor

Initializes the asynchronous job.

**Parameters**

*   **backend** – the backend used to run the job.
*   **job\_id** – a unique id in the context of the backend used to run the job.

## Methods

### backend

<span id="qiskit.providers.basicaer.BasicAerJob.backend" />

`BasicAerJob.backend()`

Return the instance of the backend used for this job.

### cancel

<span id="qiskit.providers.basicaer.BasicAerJob.cancel" />

`BasicAerJob.cancel()`

Attempt to cancel the job.

### cancelled

<span id="qiskit.providers.basicaer.BasicAerJob.cancelled" />

`BasicAerJob.cancelled()`

Return whether the job has been cancelled.

**Return type**

`bool`

### done

<span id="qiskit.providers.basicaer.BasicAerJob.done" />

`BasicAerJob.done()`

Return whether the job has successfully run.

**Return type**

`bool`

### in\_final\_state

<span id="qiskit.providers.basicaer.BasicAerJob.in_final_state" />

`BasicAerJob.in_final_state()`

Return whether the job is in a final job state.

**Return type**

`bool`

### job\_id

<span id="qiskit.providers.basicaer.BasicAerJob.job_id" />

`BasicAerJob.job_id()`

Return a unique id identifying the job.

**Return type**

`str`

### qobj

<span id="qiskit.providers.basicaer.BasicAerJob.qobj" />

`BasicAerJob.qobj()`

Return the Qobj submitted for this job.

**Returns**

the Qobj submitted for this job.

**Return type**

[Qobj](qiskit.qobj.Qobj "qiskit.qobj.Qobj")

### result

<span id="qiskit.providers.basicaer.BasicAerJob.result" />

`BasicAerJob.result(timeout=None)`

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

### running

<span id="qiskit.providers.basicaer.BasicAerJob.running" />

`BasicAerJob.running()`

Return whether the job is actively running.

**Return type**

`bool`

### status

<span id="qiskit.providers.basicaer.BasicAerJob.status" />

`BasicAerJob.status()`

Gets the status of the job by querying the Python’s future

**Returns**

The current JobStatus

**Return type**

[qiskit.providers.JobStatus](qiskit.providers.JobStatus "qiskit.providers.JobStatus")

**Raises**

*   [**JobError**](qiskit.providers.JobError "qiskit.providers.JobError") – If the future is in unexpected state
*   **concurrent.futures.TimeoutError** – if timeout occurred.

### submit

<span id="qiskit.providers.basicaer.BasicAerJob.submit" />

`BasicAerJob.submit()`

Submit the job to the backend for execution.

**Raises**

*   **QobjValidationError** – if the JSON serialization of the Qobj passed
*   **during construction does not validate against the Qobj schema.** –
*   [**JobError**](qiskit.providers.JobError "qiskit.providers.JobError") – if trying to re-submit the job.

### wait\_for\_final\_state

<span id="qiskit.providers.basicaer.BasicAerJob.wait_for_final_state" />

`BasicAerJob.wait_for_final_state(timeout=None, wait=5, callback=None)`

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

[**JobTimeoutError**](qiskit.providers.JobTimeoutError "qiskit.providers.JobTimeoutError") – If the job does not reach a final state before the specified timeout.

**Return type**

`None`

