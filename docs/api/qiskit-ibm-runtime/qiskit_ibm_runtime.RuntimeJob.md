---
title: RuntimeJob
description: API reference for qiskit_ibm_runtime.RuntimeJob
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.RuntimeJob
---

# RuntimeJob

<span id="qiskit_ibm_runtime.RuntimeJob" />

`RuntimeJob(backend, api_client, client_params, job_id, program_id, service, params=None, creation_date=None, user_callback=None, result_decoder=None, image='', session_id=None, tags=None)`[GitHub](https://github.com/qiskit/qiskit-ibm-runtime/tree/stable/0.17/qiskit_ibm_runtime/runtime_job.py "view source code")

Representation of a runtime program execution.

A new `RuntimeJob` instance is returned when you call [`QiskitRuntimeService.run`](qiskit_ibm_runtime.QiskitRuntimeService#run "qiskit_ibm_runtime.QiskitRuntimeService.run") to execute a runtime program, or [`QiskitRuntimeService.job`](qiskit_ibm_runtime.QiskitRuntimeService#job "qiskit_ibm_runtime.QiskitRuntimeService.job") to retrieve a previously executed job.

If the program execution is successful, you can inspect the job’s status by calling [`status()`](#qiskit_ibm_runtime.RuntimeJob.status "qiskit_ibm_runtime.RuntimeJob.status"). Job status can be one of the `JobStatus` members.

Some of the methods in this class are blocking, which means control may not be returned immediately. [`result()`](#qiskit_ibm_runtime.RuntimeJob.result "qiskit_ibm_runtime.RuntimeJob.result") is an example of a blocking method:

```python
job = service.run(...)

try:
    job_result = job.result()  # It will block until the job finishes.
    print("The job finished with result {}".format(job_result))
except RuntimeJobFailureError as ex:
    print("Job failed!: {}".format(ex))
```

If the program has any interim results, you can use the `callback` parameter of the [`run()`](qiskit_ibm_runtime.QiskitRuntimeService#run "qiskit_ibm_runtime.QiskitRuntimeService.run") method to stream the interim results along with the final result. Alternatively, you can use the [`stream_results()`](#qiskit_ibm_runtime.RuntimeJob.stream_results "qiskit_ibm_runtime.RuntimeJob.stream_results") method to stream the results at a later time, but before the job finishes.

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

<span id="qiskit_ibm_runtime.RuntimeJob.creation_date" />

### creation\_date

Job creation date in local time.

**Return type**

`Optional`\[`datetime`]

**Returns**

The job creation date as a datetime object, in local time, or `None` if creation date is not available.

<span id="qiskit_ibm_runtime.RuntimeJob.image" />

### image

Return the runtime image used for the job.

**Returns**

image\_name:tag or “” if the default image is used.

**Return type**

Runtime image

<span id="qiskit_ibm_runtime.RuntimeJob.inputs" />

### inputs

Job input parameters.

**Return type**

`Dict`

**Returns**

Input parameters used in this job.

<span id="qiskit_ibm_runtime.RuntimeJob.program_id" />

### program\_id

Program ID.

**Return type**

`str`

**Returns**

ID of the program this job is for.

<span id="qiskit_ibm_runtime.RuntimeJob.session_id" />

### session\_id

Session ID.

**Return type**

`str`

**Returns**

Job ID of the first job in a runtime session.

<span id="qiskit_ibm_runtime.RuntimeJob.tags" />

### tags

Job tags.

**Return type**

`List`

**Returns**

Tags assigned to the job that can be used for filtering.

<span id="qiskit_ibm_runtime.RuntimeJob.usage_estimation" />

### usage\_estimation

Return the usage estimation infromation for this job.

**Return type**

`Dict`\[`str`, `Any`]

**Returns**

`quantum_seconds` which is the estimated system execution time of the job in seconds. Quantum time represents the time that the system is dedicated to processing your job.

<span id="qiskit_ibm_runtime.RuntimeJob.version" />

### version

`= 1`

## Methods

### backend

<span id="qiskit_ibm_runtime.RuntimeJob.backend" />

`backend(timeout=None)`

Return the backend where this job was executed. Retrieve data again if backend is None.

**Raises**

**IBMRuntimeError** – If a network error occurred.

**Return type**

`Optional`\[`Backend`]

### cancel

<span id="qiskit_ibm_runtime.RuntimeJob.cancel" />

`cancel()`

Cancel the job.

**Raises**

*   **RuntimeInvalidStateError** – If the job is in a state that cannot be cancelled.
*   **IBMRuntimeError** – If unable to cancel job.

**Return type**

`None`

### cancel\_result\_streaming

<span id="qiskit_ibm_runtime.RuntimeJob.cancel_result_streaming" />

`cancel_result_streaming()`

Cancel result streaming.

**Return type**

`None`

### cancelled

<span id="qiskit_ibm_runtime.RuntimeJob.cancelled" />

`cancelled()`

Return whether the job has been cancelled.

**Return type**

`bool`

### done

<span id="qiskit_ibm_runtime.RuntimeJob.done" />

`done()`

Return whether the job has successfully run.

**Return type**

`bool`

### error\_message

<span id="qiskit_ibm_runtime.RuntimeJob.error_message" />

`error_message()`

Returns the reason if the job failed.

**Return type**

`Optional`\[`str`]

**Returns**

Error message string or `None`.

### in\_final\_state

<span id="qiskit_ibm_runtime.RuntimeJob.in_final_state" />

`in_final_state()`

Return whether the job is in a final job state such as `DONE` or `ERROR`.

**Return type**

`bool`

### interim\_results

<span id="qiskit_ibm_runtime.RuntimeJob.interim_results" />

`interim_results(decoder=None)`

Return the interim results of the job.

**Parameters**

**decoder** (`Optional`\[`Type`\[`ResultDecoder`]]) – A `ResultDecoder` subclass used to decode interim results.

**Return type**

`Any`

**Returns**

Runtime job interim results.

**Raises**

**RuntimeJobFailureError** – If the job failed.

### job\_id

<span id="qiskit_ibm_runtime.RuntimeJob.job_id" />

`job_id()`

Return a unique id identifying the job.

**Return type**

`str`

### logs

<span id="qiskit_ibm_runtime.RuntimeJob.logs" />

`logs()`

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

### metrics

<span id="qiskit_ibm_runtime.RuntimeJob.metrics" />

`metrics()`

Return job metrics.

**Return type**

`Dict`\[`str`, `Any`]

**Returns**

Job metrics, which includes timestamp information.

**Raises**

**IBMRuntimeError** – If a network error occurred.

### properties

<span id="qiskit_ibm_runtime.RuntimeJob.properties" />

`properties(refresh=False)`

Return the backend properties for this job.

**Parameters**

**refresh** (`bool`) – If `True`, re-query the server for the backend properties. Otherwise, return a cached version.

**Return type**

`Optional`\[`BackendProperties`]

**Returns**

The backend properties used for this job, at the time the job was run, or `None` if properties are not available.

### result

<span id="qiskit_ibm_runtime.RuntimeJob.result" />

`result(timeout=None, decoder=None)`

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

### running

<span id="qiskit_ibm_runtime.RuntimeJob.running" />

`running()`

Return whether the job is actively running.

**Return type**

`bool`

### status

<span id="qiskit_ibm_runtime.RuntimeJob.status" />

`status()`

Return the status of the job.

**Return type**

`JobStatus`

**Returns**

Status of this job.

### stream\_results

<span id="qiskit_ibm_runtime.RuntimeJob.stream_results" />

`stream_results(callback, decoder=None)`

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

### submit

<span id="qiskit_ibm_runtime.RuntimeJob.submit" />

`submit()`

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

### update\_tags

<span id="qiskit_ibm_runtime.RuntimeJob.update_tags" />

`update_tags(new_tags)`

Update the tags associated with this job.

**Parameters**

**new\_tags** (`List`\[`str`]) – New tags to assign to the job.

**Return type**

`List`\[`str`]

**Returns**

The new tags associated with this job.

**Raises**

**IBMApiError** – If an unexpected error occurred when communicating with the server or updating the job tags.

### wait\_for\_final\_state

<span id="qiskit_ibm_runtime.RuntimeJob.wait_for_final_state" />

`wait_for_final_state(timeout=None)`

Use the websocket server to wait for the final the state of a job.

The server will remain open if the job is still running and the connection will be terminated once the job completes. Then update and return the status of the job.

**Parameters**

**timeout** (`Optional`\[`float`]) – Seconds to wait for the job. If `None`, wait indefinitely.

**Raises**

**RuntimeJobTimeoutError** – If the job does not complete within given timeout.

**Return type**

`None`

