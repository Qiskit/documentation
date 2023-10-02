---
title: RuntimeJob
description: API reference for qiskit_ibm_runtime.RuntimeJob
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.RuntimeJob
---

# RuntimeJob[¶](#runtimejob "Link to this heading")

<span id="qiskit_ibm_runtime.RuntimeJob" />

`RuntimeJob(backend, api_client, client_params, job_id, program_id, service, params=None, creation_date=None, user_callback=None, result_decoder=None, image='', session_id=None, tags=None)¶`

Representation of a runtime program execution.

A new `RuntimeJob` instance is returned when you call [`QiskitRuntimeService.run`](qiskit_ibm_runtime.QiskitRuntimeService#run "qiskit_ibm_runtime.QiskitRuntimeService.run") to execute a runtime program, or [`QiskitRuntimeService.job`](qiskit_ibm_runtime.QiskitRuntimeService#job "qiskit_ibm_runtime.QiskitRuntimeService.job") to retrieve a previously executed job.

If the program execution is successful, you can inspect the job’s status by calling [`status()`](qiskit_ibm_runtime.RuntimeJob#status "qiskit_ibm_runtime.RuntimeJob.status"). Job status can be one of the `JobStatus` members.

Some of the methods in this class are blocking, which means control may not be returned immediately. [`result()`](qiskit_ibm_runtime.RuntimeJob#result "qiskit_ibm_runtime.RuntimeJob.result") is an example of a blocking method:

```python
job = service.run(...)

try:
    job_result = job.result()  # It will block until the job finishes.
    print("The job finished with result {}".format(job_result))
except RuntimeJobFailureError as ex:
    print("Job failed!: {}".format(ex))
```

If the program has any interim results, you can use the `callback` parameter of the [`run()`](qiskit_ibm_runtime.QiskitRuntimeService#run "qiskit_ibm_runtime.QiskitRuntimeService.run") method to stream the interim results along with the final result. Alternatively, you can use the [`stream_results()`](qiskit_ibm_runtime.RuntimeJob#stream_results "qiskit_ibm_runtime.RuntimeJob.stream_results") method to stream the results at a later time, but before the job finishes.

RuntimeJob constructor.

**Parameters**

*   **backend** (`Backend`) – The backend instance used to run this job.
*   **api\_client** (`RuntimeClient`) – Object for connecting to the server.
*   **client\_params** (`ClientParameters`) – Parameters used for server connection.
*   **job\_id** (`str`) – Job ID.
*   **program\_id** (`str`) – ID of the program this job is for.
*   **params** (`Optional`\[`Dict`]) – Job parameters.
*   **creation\_date** (`Optional`\[`str`]) – Job creation date, in UTC.
*   **user\_callback** (`Optional`\[`Callable`]) – User callback function.
*   **result\_decoder** (`Union`\[`Type`\[`ResultDecoder`], `Sequence`\[`Type`\[`ResultDecoder`]], `None`]) – A `ResultDecoder` subclass used to decode job results.
*   **image** (`Optional`\[`str`]) – Runtime image used for this job: image\_name:tag.
*   **service** ([`QiskitRuntimeService`](qiskit_ibm_runtime.QiskitRuntimeService "qiskit_ibm_runtime.qiskit_runtime_service.QiskitRuntimeService")) – Runtime service.
*   **session\_id** (`Optional`\[`str`]) – Job ID of the first job in a runtime session.
*   **tags** (`Optional`\[`List`]) – Tags assigned to the job.

## Attributes

<span id="runtimejob-creation-date" />

### creation\_date

<span id="qiskit_ibm_runtime.RuntimeJob.creation_date" />

`datetime | None`

Job creation date in local time.

**Return type**

`Optional`\[`datetime`]

**Returns**

The job creation date as a datetime object, in local time, or `None` if creation date is not available.

<span id="runtimejob-image" />

### image

<span id="qiskit_ibm_runtime.RuntimeJob.image" />

`str`

Return the runtime image used for the job.

**Returns**

image\_name:tag or “” if the default image is used.

**Return type**

Runtime image

<span id="runtimejob-inputs" />

### inputs

<span id="qiskit_ibm_runtime.RuntimeJob.inputs" />

`Dict`

Job input parameters.

**Return type**

`Dict`

**Returns**

Input parameters used in this job.

<span id="runtimejob-program-id" />

### program\_id

<span id="qiskit_ibm_runtime.RuntimeJob.program_id" />

`str`

Program ID.

**Return type**

`str`

**Returns**

ID of the program this job is for.

<span id="runtimejob-session-id" />

### session\_id

<span id="qiskit_ibm_runtime.RuntimeJob.session_id" />

`str`

Session ID.

**Return type**

`str`

**Returns**

Job ID of the first job in a runtime session.

<span id="runtimejob-tags" />

### tags

<span id="qiskit_ibm_runtime.RuntimeJob.tags" />

`List`

Job tags.

**Return type**

`List`

**Returns**

Tags assigned to the job that can be used for filtering.

<span id="runtimejob-usage-estimation" />

### usage\_estimation

<span id="qiskit_ibm_runtime.RuntimeJob.usage_estimation" />

`Dict[str, Any]`

Return the usage estimation infromation for this job.

**Return type**

`Dict`\[`str`, `Any`]

**Returns**

`quantum_seconds` which is the estimated system execution time of the job in seconds. Quantum time represents the time that the system is dedicated to processing your job.

<span id="runtimejob-version" />

### version

<span id="qiskit_ibm_runtime.RuntimeJob.version" />

`= 1`

## Methods

<span id="runtimejob-backend" />

### backend

<span id="qiskit_ibm_runtime.RuntimeJob.backend" />

`RuntimeJob.backend(timeout=None)¶`

Return the backend where this job was executed. Retrieve data again if backend is None.

**Raises**

**IBMRuntimeError** – If a network error occurred.

**Return type**

`Optional`\[`Backend`]

<span id="runtimejob-cancel" />

### cancel

<span id="qiskit_ibm_runtime.RuntimeJob.cancel" />

`RuntimeJob.cancel()¶`

Cancel the job.

**Raises**

*   **RuntimeInvalidStateError** – If the job is in a state that cannot be cancelled.
*   **IBMRuntimeError** – If unable to cancel job.

**Return type**

`None`

<span id="runtimejob-cancel-result-streaming" />

### cancel\_result\_streaming

<span id="qiskit_ibm_runtime.RuntimeJob.cancel_result_streaming" />

`RuntimeJob.cancel_result_streaming()¶`

Cancel result streaming.

**Return type**

`None`

<span id="runtimejob-cancelled" />

### cancelled

<span id="qiskit_ibm_runtime.RuntimeJob.cancelled" />

`RuntimeJob.cancelled()¶`

Return whether the job has been cancelled.

**Return type**

`bool`

<span id="runtimejob-done" />

### done

<span id="qiskit_ibm_runtime.RuntimeJob.done" />

`RuntimeJob.done()¶`

Return whether the job has successfully run.

**Return type**

`bool`

<span id="runtimejob-error-message" />

### error\_message

<span id="qiskit_ibm_runtime.RuntimeJob.error_message" />

`RuntimeJob.error_message()¶`

Returns the reason if the job failed.

**Return type**

`Optional`\[`str`]

**Returns**

Error message string or `None`.

<span id="runtimejob-in-final-state" />

### in\_final\_state

<span id="qiskit_ibm_runtime.RuntimeJob.in_final_state" />

`RuntimeJob.in_final_state()¶`

Return whether the job is in a final job state such as `DONE` or `ERROR`.

**Return type**

`bool`

<span id="runtimejob-interim-results" />

### interim\_results

<span id="qiskit_ibm_runtime.RuntimeJob.interim_results" />

`RuntimeJob.interim_results(decoder=None)¶`

Return the interim results of the job.

**Parameters**

**decoder** (`Optional`\[`Type`\[`ResultDecoder`]]) – A `ResultDecoder` subclass used to decode interim results.

**Return type**

`Any`

**Returns**

Runtime job interim results.

**Raises**

**RuntimeJobFailureError** – If the job failed.

<span id="runtimejob-job-id" />

### job\_id

<span id="qiskit_ibm_runtime.RuntimeJob.job_id" />

`RuntimeJob.job_id()¶`

Return a unique id identifying the job.

**Return type**

`str`

<span id="runtimejob-logs" />

### logs

<span id="qiskit_ibm_runtime.RuntimeJob.logs" />

`RuntimeJob.logs()¶`

Return job logs.

<Admonition title="Note" type="note">
  Job logs are only available after the job finishes.
</Admonition>

**Return type**

`str`

**Returns**

Job logs, including standard output and error.

**Raises**

**IBMRuntimeError** – If a network error occurred.

<span id="runtimejob-metrics" />

### metrics

<span id="qiskit_ibm_runtime.RuntimeJob.metrics" />

`RuntimeJob.metrics()¶`

Return job metrics.

**Return type**

`Dict`\[`str`, `Any`]

**Returns**

Job metrics, which includes timestamp information.

**Raises**

**IBMRuntimeError** – If a network error occurred.

<span id="runtimejob-result" />

### result

<span id="qiskit_ibm_runtime.RuntimeJob.result" />

`RuntimeJob.result(timeout=None, decoder=None)¶`

Return the results of the job.

**Parameters**

*   **timeout** (`Optional`\[`float`]) – Number of seconds to wait for job.
*   **decoder** (`Optional`\[`Type`\[`ResultDecoder`]]) – A `ResultDecoder` subclass used to decode job results.

**Return type**

`Any`

**Returns**

Runtime job result.

**Raises**

*   **RuntimeJobFailureError** – If the job failed.
*   **RuntimeJobMaxTimeoutError** – If the job does not complete within given timeout.
*   **RuntimeInvalidStateError** – If the job was cancelled, and attempting to retrieve result.

<span id="runtimejob-running" />

### running

<span id="qiskit_ibm_runtime.RuntimeJob.running" />

`RuntimeJob.running()¶`

Return whether the job is actively running.

**Return type**

`bool`

<span id="runtimejob-status" />

### status

<span id="qiskit_ibm_runtime.RuntimeJob.status" />

`RuntimeJob.status()¶`

Return the status of the job.

**Return type**

`JobStatus`

**Returns**

Status of this job.

<span id="runtimejob-stream-results" />

### stream\_results

<span id="qiskit_ibm_runtime.RuntimeJob.stream_results" />

`RuntimeJob.stream_results(callback, decoder=None)¶`

Start streaming job results.

**Parameters**

*   **callback** (`Callable`) –

    Callback function to be invoked for any interim results and final result. The callback function will receive 2 positional parameters:

    > 1.  Job ID
    > 2.  Job result.

*   **decoder** (`Optional`\[`Type`\[`ResultDecoder`]]) – A `ResultDecoder` subclass used to decode job results.

**Raises**

**RuntimeInvalidStateError** – If a callback function is already streaming results or if the job already finished.

**Return type**

`None`

<span id="runtimejob-submit" />

### submit

<span id="qiskit_ibm_runtime.RuntimeJob.submit" />

`RuntimeJob.submit()¶`

Unsupported method. .. note:

```python
This method is not supported, please use
:meth:`~qiskit_ibm_runtime.QiskitRuntimeService.run`
to submit a job.
```

**Raises**

**NotImplementedError** – Upon invocation.

**Return type**

`None`

<span id="runtimejob-update-tags" />

### update\_tags

<span id="qiskit_ibm_runtime.RuntimeJob.update_tags" />

`RuntimeJob.update_tags(new_tags)¶`

Update the tags associated with this job.

**Parameters**

**new\_tags** (`List`\[`str`]) – New tags to assign to the job.

**Return type**

`List`\[`str`]

**Returns**

The new tags associated with this job.

**Raises**

**IBMApiError** – If an unexpected error occurred when communicating with the server or updating the job tags.

<span id="runtimejob-wait-for-final-state" />

### wait\_for\_final\_state

<span id="qiskit_ibm_runtime.RuntimeJob.wait_for_final_state" />

`RuntimeJob.wait_for_final_state(timeout=None)¶`

Use the websocket server to wait for the final the state of a job.

The server will remain open if the job is still running and the connection will be terminated once the job completes. Then update and return the status of the job.

**Parameters**

**timeout** (`Optional`\[`float`]) – Seconds to wait for the job. If `None`, wait indefinitely.

**Raises**

**RuntimeJobTimeoutError** – If the job does not complete within given timeout.

**Return type**

`None`

