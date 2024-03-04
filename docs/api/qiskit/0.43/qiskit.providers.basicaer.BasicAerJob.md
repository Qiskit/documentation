---
title: BasicAerJob
description: API reference for qiskit.providers.basicaer.BasicAerJob
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.basicaer.BasicAerJob
---

# BasicAerJob

<span id="qiskit.providers.basicaer.BasicAerJob" />

`BasicAerJob(backend, job_id, result)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/providers/basicaer/basicaerjob.py "view source code")

Bases: [`JobV1`](qiskit.providers.JobV1 "qiskit.providers.job.JobV1")

BasicAerJob class.

Initializes the asynchronous job.

**Parameters**

*   **backend** – the backend used to run the job.
*   **job\_id** – a unique id in the context of the backend used to run the job.
*   **kwargs** – Any key value metadata to associate with this job.

## Methods

<span id="qiskit-providers-basicaer-basicaerjob-backend" />

### backend

<span id="qiskit.providers.basicaer.BasicAerJob.backend" />

`BasicAerJob.backend()`

Return the instance of the backend used for this job.

<span id="qiskit-providers-basicaer-basicaerjob-cancel" />

### cancel

<span id="qiskit.providers.basicaer.BasicAerJob.cancel" />

`BasicAerJob.cancel()`

Attempt to cancel the job.

<span id="qiskit-providers-basicaer-basicaerjob-cancelled" />

### cancelled

<span id="qiskit.providers.basicaer.BasicAerJob.cancelled" />

`BasicAerJob.cancelled()`

Return whether the job has been cancelled.

**Return type**

bool

<span id="qiskit-providers-basicaer-basicaerjob-done" />

### done

<span id="qiskit.providers.basicaer.BasicAerJob.done" />

`BasicAerJob.done()`

Return whether the job has successfully run.

**Return type**

bool

<span id="qiskit-providers-basicaer-basicaerjob-in-final-state" />

### in\_final\_state

<span id="qiskit.providers.basicaer.BasicAerJob.in_final_state" />

`BasicAerJob.in_final_state()`

Return whether the job is in a final job state such as `DONE` or `ERROR`.

**Return type**

bool

<span id="qiskit-providers-basicaer-basicaerjob-job-id" />

### job\_id

<span id="qiskit.providers.basicaer.BasicAerJob.job_id" />

`BasicAerJob.job_id()`

Return a unique id identifying the job.

**Return type**

str

<span id="qiskit-providers-basicaer-basicaerjob-result" />

### result

<span id="qiskit.providers.basicaer.BasicAerJob.result" />

`BasicAerJob.result(timeout=None)`

Get job result .

**Returns**

Result object

**Return type**

qiskit.Result

<span id="qiskit-providers-basicaer-basicaerjob-running" />

### running

<span id="qiskit.providers.basicaer.BasicAerJob.running" />

`BasicAerJob.running()`

Return whether the job is actively running.

**Return type**

bool

<span id="qiskit-providers-basicaer-basicaerjob-status" />

### status

<span id="qiskit.providers.basicaer.BasicAerJob.status" />

`BasicAerJob.status()`

Gets the status of the job by querying the Python’s future

**Returns**

The current JobStatus

**Return type**

[qiskit.providers.JobStatus](qiskit.providers.JobStatus "qiskit.providers.JobStatus")

<span id="qiskit-providers-basicaer-basicaerjob-submit" />

### submit

<span id="qiskit.providers.basicaer.BasicAerJob.submit" />

`BasicAerJob.submit()`

Submit the job to the backend for execution.

**Raises**

[**JobError**](qiskit.providers.JobError "qiskit.providers.JobError") – if trying to re-submit the job.

<span id="qiskit-providers-basicaer-basicaerjob-wait-for-final-state" />

### wait\_for\_final\_state

<span id="qiskit.providers.basicaer.BasicAerJob.wait_for_final_state" />

`BasicAerJob.wait_for_final_state(timeout=None, wait=5, callback=None)`

Poll the job status until it progresses to a final state such as `DONE` or `ERROR`.

**Parameters**

*   **timeout** (*float | None*) – Seconds to wait for the job. If `None`, wait indefinitely.

*   **wait** (*float*) – Seconds between queries.

*   **callback** (*Callable | None*) –

    Callback function invoked after each query. The following positional arguments are provided to the callback function:

    *   job\_id: Job ID
    *   job\_status: Status of the job from the last query
    *   job: This BaseJob instance

    Note: different subclass might provide different arguments to the callback function.

**Raises**

[**JobTimeoutError**](qiskit.providers.JobTimeoutError "qiskit.providers.JobTimeoutError") – If the job does not reach a final state before the specified timeout.

## Attributes

<span id="qiskit.providers.basicaer.BasicAerJob.version" />

### version

`= 1`

