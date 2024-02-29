---
title: JobV1
description: API reference for qiskit.providers.JobV1
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.JobV1
---

# JobV1

<span id="qiskit.providers.JobV1" />

`qiskit.providers.JobV1(backend, job_id, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/main/qiskit/providers/job.py "view source code")

Bases: [`Job`](qiskit.providers.Job "qiskit.providers.job.Job"), [`ABC`](https://docs.python.org/3/library/abc.html#abc.ABC "(in Python v3.12)")

Class to handle jobs

This first version of the Backend abstract class is written to be mostly backwards compatible with the legacy providers interface. This was done to ease the transition for users and provider maintainers to the new versioned providers. Expect, future versions of this abstract class to change the data model and interface.

Initializes the asynchronous job.

**Parameters**

*   **backend** (*Optional\[*[*Backend*](qiskit.providers.Backend "qiskit.providers.Backend")*]*) – the backend used to run the job.
*   **job\_id** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – a unique id in the context of the backend used to run the job.
*   **kwargs** – Any key value metadata to associate with this job.

## Attributes

<span id="qiskit.providers.JobV1.version" />

### version

`= 1`

## Methods

### backend

<span id="qiskit.providers.JobV1.backend" />

`backend()`

Return the backend where this job was executed.

**Return type**

[*Backend*](qiskit.providers.Backend "qiskit.providers.backend.Backend")

### cancel

<span id="qiskit.providers.JobV1.cancel" />

`cancel()`

Attempt to cancel the job.

### cancelled

<span id="qiskit.providers.JobV1.cancelled" />

`cancelled()`

Return whether the job has been cancelled.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### done

<span id="qiskit.providers.JobV1.done" />

`done()`

Return whether the job has successfully run.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### in\_final\_state

<span id="qiskit.providers.JobV1.in_final_state" />

`in_final_state()`

Return whether the job is in a final job state such as `DONE` or `ERROR`.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### job\_id

<span id="qiskit.providers.JobV1.job_id" />

`job_id()`

Return a unique id identifying the job.

**Return type**

[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")

### result

<span id="qiskit.providers.JobV1.result" />

`abstract result()`

Return the results of the job.

**Return type**

[Result](qiskit.result.Result "qiskit.result.Result")

### running

<span id="qiskit.providers.JobV1.running" />

`running()`

Return whether the job is actively running.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### status

<span id="qiskit.providers.JobV1.status" />

`abstract status()`

Return the status of the job, among the values of `JobStatus`.

**Return type**

[*JobStatus*](qiskit.providers.JobStatus "qiskit.providers.jobstatus.JobStatus")

### submit

<span id="qiskit.providers.JobV1.submit" />

`abstract submit()`

Submit the job to the backend for execution.

### wait\_for\_final\_state

<span id="qiskit.providers.JobV1.wait_for_final_state" />

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

