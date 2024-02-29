---
title: BasicProviderJob
description: API reference for qiskit.providers.basic_provider.BasicProviderJob
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.basic_provider.BasicProviderJob
---

# BasicProviderJob

<span id="qiskit.providers.basic_provider.BasicProviderJob" />

`qiskit.providers.basic_provider.BasicProviderJob(backend, job_id, result)` [GitHub](https://github.com/qiskit/qiskit/tree/main/qiskit/providers/basic_provider/basic_provider_job.py "view source code")

Bases: [`JobV1`](qiskit.providers.JobV1 "qiskit.providers.job.JobV1")

BasicProviderJob class.

Initializes the asynchronous job.

**Parameters**

*   **backend** – the backend used to run the job.
*   **job\_id** – a unique id in the context of the backend used to run the job.
*   **kwargs** – Any key value metadata to associate with this job.

## Attributes

<span id="qiskit.providers.basic_provider.BasicProviderJob.version" />

### version

`= 1`

## Methods

### backend

<span id="qiskit.providers.basic_provider.BasicProviderJob.backend" />

`backend()`

Return the instance of the backend used for this job.

### cancel

<span id="qiskit.providers.basic_provider.BasicProviderJob.cancel" />

`cancel()`

Attempt to cancel the job.

### cancelled

<span id="qiskit.providers.basic_provider.BasicProviderJob.cancelled" />

`cancelled()`

Return whether the job has been cancelled.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### done

<span id="qiskit.providers.basic_provider.BasicProviderJob.done" />

`done()`

Return whether the job has successfully run.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### in\_final\_state

<span id="qiskit.providers.basic_provider.BasicProviderJob.in_final_state" />

`in_final_state()`

Return whether the job is in a final job state such as `DONE` or `ERROR`.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### job\_id

<span id="qiskit.providers.basic_provider.BasicProviderJob.job_id" />

`job_id()`

Return a unique id identifying the job.

**Return type**

[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")

### result

<span id="qiskit.providers.basic_provider.BasicProviderJob.result" />

`result(timeout=None)`

Get job result .

**Returns**

Result object

**Return type**

[qiskit.result.Result](qiskit.result.Result "qiskit.result.Result")

### running

<span id="qiskit.providers.basic_provider.BasicProviderJob.running" />

`running()`

Return whether the job is actively running.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### status

<span id="qiskit.providers.basic_provider.BasicProviderJob.status" />

`status()`

Gets the status of the job by querying the Python’s future

**Returns**

The current JobStatus

**Return type**

[qiskit.providers.JobStatus](qiskit.providers.JobStatus "qiskit.providers.JobStatus")

### submit

<span id="qiskit.providers.basic_provider.BasicProviderJob.submit" />

`submit()`

Submit the job to the backend for execution.

**Raises**

[**JobError**](providers#qiskit.providers.JobError "qiskit.providers.JobError") – if trying to re-submit the job.

### wait\_for\_final\_state

<span id="qiskit.providers.basic_provider.BasicProviderJob.wait_for_final_state" />

`wait_for_final_state(timeout=None, wait=5, callback=None)`

Poll the job status until it progresses to a final state such as `DONE` or `ERROR`.

**Parameters**

*   **timeout** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)") *| None*) – Seconds to wait for the job. If `None`, wait indefinitely.

*   **wait** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Seconds between queries.

*   **callback** ([*Callable*](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.12)") *| None*) –

    Callback function invoked after each query. The following positional arguments are provided to the callback function:

    *   job\_id: Job ID
    *   job\_status: Status of the job from the last query
    *   job: This BaseJob instance

    Note: different subclass might provide different arguments to the callback function.

**Raises**

[**JobTimeoutError**](providers#qiskit.providers.JobTimeoutError "qiskit.providers.JobTimeoutError") – If the job does not reach a final state before the specified timeout.

