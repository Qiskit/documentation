---
title: AlgorithmJob
description: API reference for qiskit.algorithms.AlgorithmJob
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.AlgorithmJob
---

# AlgorithmJob

<span id="qiskit.algorithms.AlgorithmJob" />

`qiskit.algorithms.AlgorithmJob(function, *args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/algorithms/algorithm_job.py "view source code")

Bases: `PrimitiveJob`

This empty class is introduced for typing purposes.

**Parameters**

**function** – a callable function to execute the job.

## Attributes

<span id="qiskit.algorithms.AlgorithmJob.version" />

### version

`= 1`

## Methods

### backend

<span id="qiskit.algorithms.AlgorithmJob.backend" />

`backend()`

Return the backend where this job was executed.

**Return type**

[*Backend*](qiskit.providers.Backend "qiskit.providers.backend.Backend")

### cancel

<span id="qiskit.algorithms.AlgorithmJob.cancel" />

`cancel()`

Attempt to cancel the job.

### cancelled

<span id="qiskit.algorithms.AlgorithmJob.cancelled" />

`cancelled()`

Return whether the job has been cancelled.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### done

<span id="qiskit.algorithms.AlgorithmJob.done" />

`done()`

Return whether the job has successfully run.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### in\_final\_state

<span id="qiskit.algorithms.AlgorithmJob.in_final_state" />

`in_final_state()`

Return whether the job is in a final job state such as `DONE` or `ERROR`.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### job\_id

<span id="qiskit.algorithms.AlgorithmJob.job_id" />

`job_id()`

Return a unique id identifying the job.

**Return type**

[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")

### result

<span id="qiskit.algorithms.AlgorithmJob.result" />

`result()`

Return the results of the job.

**Return type**

*T*

### running

<span id="qiskit.algorithms.AlgorithmJob.running" />

`running()`

Return whether the job is actively running.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### status

<span id="qiskit.algorithms.AlgorithmJob.status" />

`status()`

Return the status of the job, among the values of `JobStatus`.

### submit

<span id="qiskit.algorithms.AlgorithmJob.submit" />

`submit()`

Submit the job to the backend for execution.

### wait\_for\_final\_state

<span id="qiskit.algorithms.AlgorithmJob.wait_for_final_state" />

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

