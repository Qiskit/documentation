---
title: AlgorithmJob
description: API reference for qiskit.algorithms.AlgorithmJob
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.AlgorithmJob
---

# AlgorithmJob

<span id="qiskit.algorithms.AlgorithmJob" />

`AlgorithmJob(function, *args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/algorithms/algorithm_job.py "view source code")

Bases: `PrimitiveJob`

This empty class is introduced for typing purposes.

**Parameters**

**function** – a callable function to execute the job.

## Methods

<span id="qiskit-algorithms-algorithmjob-backend" />

### backend

<span id="qiskit.algorithms.AlgorithmJob.backend" />

`AlgorithmJob.backend()`

Return the backend where this job was executed.

**Return type**

[*Backend*](qiskit.providers.Backend "qiskit.providers.backend.Backend")

<span id="qiskit-algorithms-algorithmjob-cancel" />

### cancel

<span id="qiskit.algorithms.AlgorithmJob.cancel" />

`AlgorithmJob.cancel()`

Attempt to cancel the job.

<span id="qiskit-algorithms-algorithmjob-cancelled" />

### cancelled

<span id="qiskit.algorithms.AlgorithmJob.cancelled" />

`AlgorithmJob.cancelled()`

Return whether the job has been cancelled.

**Return type**

bool

<span id="qiskit-algorithms-algorithmjob-done" />

### done

<span id="qiskit.algorithms.AlgorithmJob.done" />

`AlgorithmJob.done()`

Return whether the job has successfully run.

**Return type**

bool

<span id="qiskit-algorithms-algorithmjob-in-final-state" />

### in\_final\_state

<span id="qiskit.algorithms.AlgorithmJob.in_final_state" />

`AlgorithmJob.in_final_state()`

Return whether the job is in a final job state such as `DONE` or `ERROR`.

**Return type**

bool

<span id="qiskit-algorithms-algorithmjob-job-id" />

### job\_id

<span id="qiskit.algorithms.AlgorithmJob.job_id" />

`AlgorithmJob.job_id()`

Return a unique id identifying the job.

**Return type**

str

<span id="qiskit-algorithms-algorithmjob-result" />

### result

<span id="qiskit.algorithms.AlgorithmJob.result" />

`AlgorithmJob.result()`

Return the results of the job.

**Return type**

*T*

<span id="qiskit-algorithms-algorithmjob-running" />

### running

<span id="qiskit.algorithms.AlgorithmJob.running" />

`AlgorithmJob.running()`

Return whether the job is actively running.

**Return type**

bool

<span id="qiskit-algorithms-algorithmjob-status" />

### status

<span id="qiskit.algorithms.AlgorithmJob.status" />

`AlgorithmJob.status()`

Return the status of the job, among the values of `JobStatus`.

<span id="qiskit-algorithms-algorithmjob-submit" />

### submit

<span id="qiskit.algorithms.AlgorithmJob.submit" />

`AlgorithmJob.submit()`

Submit the job to the backend for execution.

<span id="qiskit-algorithms-algorithmjob-wait-for-final-state" />

### wait\_for\_final\_state

<span id="qiskit.algorithms.AlgorithmJob.wait_for_final_state" />

`AlgorithmJob.wait_for_final_state(timeout=None, wait=5, callback=None)`

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

<span id="qiskit.algorithms.AlgorithmJob.version" />

### version

`= 1`

