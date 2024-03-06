---
title: IBMCircuitJob
description: API reference for qiskit_ibm_provider.job.IBMCircuitJob
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_provider.job.IBMCircuitJob
---

# IBMCircuitJob

<span id="qiskit_ibm_provider.job.IBMCircuitJob" />

`IBMCircuitJob(backend, api_client, job_id, creation_date=None, status=None, runtime_client=None, kind=None, name=None, time_per_step=None, result=None, error=None, session_id=None, tags=None, run_mode=None, client_info=None, **kwargs)` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_circuit_job.py#L59-L860 "view source code")

Representation of a job that executes on an IBM Quantum backend.

The job may be executed on a simulator or a real device. A new `IBMCircuitJob` instance is returned when you call `IBMBackend.run()` to submit a job to a particular backend.

If the job is successfully submitted, you can inspect the job’s status by calling [`status()`](#qiskit_ibm_provider.job.IBMCircuitJob.status "qiskit_ibm_provider.job.IBMCircuitJob.status"). Job status can be one of the [`JobStatus`](/api/qiskit/qiskit.providers.JobStatus "(in Qiskit v1.0)") members. For example:

```python
from qiskit.providers.jobstatus import JobStatus

job = backend.run(...)

try:
    job_status = job.status()  # Query the backend server for job status.
    if job_status is JobStatus.RUNNING:
        print("The job is still running")
except IBMJobApiError as ex:
    print("Something wrong happened!: {}".format(ex))
```

<Admonition title="Note" type="note">
  An error may occur when querying the remote server to get job information. The most common errors are temporary network failures and server errors, in which case an [`IBMJobApiError`](qiskit_ibm_provider.job.IBMJobApiError "qiskit_ibm_provider.job.IBMJobApiError") is raised. These errors usually clear quickly, so retrying the operation is likely to succeed.
</Admonition>

Some of the methods in this class are blocking, which means control may not be returned immediately. [`result()`](#qiskit_ibm_provider.job.IBMCircuitJob.result "qiskit_ibm_provider.job.IBMCircuitJob.result") is an example of a blocking method:

```python
job = backend.run(...)

try:
    job_result = job.result()  # It will block until the job finishes.
    print("The job finished with result {}".format(job_result))
except JobError as ex:
    print("Something wrong happened!: {}".format(ex))
```

Job information retrieved from the server is attached to the `IBMCircuitJob` instance as attributes. Given that Qiskit and the server can be updated independently, some of these attributes might be deprecated or experimental. Supported attributes can be retrieved via methods. For example, you can use [`creation_date()`](#qiskit_ibm_provider.job.IBMCircuitJob.creation_date "qiskit_ibm_provider.job.IBMCircuitJob.creation_date") to retrieve the job creation date, which is a supported attribute.

IBMCircuitJob constructor.

**Parameters**

*   **backend** ([`IBMBackend`](qiskit_ibm_provider.IBMBackend "qiskit_ibm_provider.ibm_backend.IBMBackend")) – The backend instance used to run this job.
*   **api\_client** (`AccountClient`) – Object for connecting to the server.
*   **job\_id** (`str`) – Job ID.
*   **creation\_date** (`Optional`\[`str`]) – Job creation date.
*   **status** (`Optional`\[`str`]) – Job status returned by the server.
*   **runtime\_client** (`Optional`\[`RuntimeClient`]) – Object for connecting to the runtime server
*   **kind** (`Optional`\[`str`]) – Job type.
*   **name** (`Optional`\[`str`]) – Job name.
*   **time\_per\_step** (`Optional`\[`dict`]) – Time spent for each processing step.
*   **result** (`Optional`\[`dict`]) – Job result.
*   **error** (`Optional`\[`dict`]) – Job error.
*   **tags** (`Optional`\[`List`\[`str`]]) – Job tags.
*   **run\_mode** (`Optional`\[`str`]) – Scheduling mode the job runs in.
*   **client\_info** (`Optional`\[`Dict`\[`str`, `str`]]) – Client information from the API.
*   **kwargs** (`Any`) – Additional job attributes.

## Attributes

<span id="qiskit_ibm_provider.job.IBMCircuitJob.client_version" />

### client\_version

Return version of the client used for this job.

**Return type**

`Dict`\[`str`, `str`]

**Returns**

**Client version in dictionary format, where the key is the name**

of the client and the value is the version.

<span id="qiskit_ibm_provider.job.IBMCircuitJob.usage_estimation" />

### usage\_estimation

Return usage estimation information for this job.

**Return type**

`Dict`\[`str`, `Any`]

**Returns**

`quantum_seconds` which is the estimated quantum time of the job in seconds. Quantum time represents the time that the QPU complex is occupied exclusively by the job.

<span id="qiskit_ibm_provider.job.IBMCircuitJob.version" />

### version

`= 1`

## Methods

### backend

<span id="qiskit_ibm_provider.job.IBMCircuitJob.backend" />

`backend()`

Return the backend where this job was executed.

**Return type**

[`Backend`](/api/qiskit/qiskit.providers.Backend "(in Qiskit v1.0)")

### backend\_options

<span id="qiskit_ibm_provider.job.IBMCircuitJob.backend_options" />

`backend_options()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_circuit_job.py#L580-L599 "view source code")

Return the backend configuration options used for this job.

Options that are not applicable to the job execution are not returned. Some but not all of the options with default values are returned. You can use [`qiskit_ibm_provider.IBMBackend.options`](qiskit_ibm_provider.IBMBackend#options "qiskit_ibm_provider.IBMBackend.options") to see all backend options.

**Return type**

`Dict`

**Returns**

Backend options used for this job. An empty dictionary is returned if the options cannot be retrieved.

### cancel

<span id="qiskit_ibm_provider.job.IBMCircuitJob.cancel" />

`cancel()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_circuit_job.py#L260-L290 "view source code")

Attempt to cancel the job.

<Admonition title="Note" type="note">
  Depending on the state the job is in, it might be impossible to cancel the job.
</Admonition>

**Return type**

`bool`

**Returns**

`True` if the job is cancelled, else `False`.

**Raises**

*   [**IBMJobInvalidStateError**](qiskit_ibm_provider.job.IBMJobInvalidStateError "qiskit_ibm_provider.job.IBMJobInvalidStateError") – If the job is in a state that cannot be cancelled.
*   [**IBMJobError**](qiskit_ibm_provider.job.IBMJobError "qiskit_ibm_provider.job.IBMJobError") – If unable to cancel job.

### cancelled

<span id="qiskit_ibm_provider.job.IBMCircuitJob.cancelled" />

`cancelled()`

Return whether the job has been cancelled.

**Return type**

`bool`

### circuits

<span id="qiskit_ibm_provider.job.IBMCircuitJob.circuits" />

`circuits()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_circuit_job.py#L613-L627 "view source code")

Return the circuits for this job.

**Return type**

`List`\[[`QuantumCircuit`](/api/qiskit/qiskit.circuit.QuantumCircuit "(in Qiskit v1.0)")]

**Returns**

The circuits or for this job. An empty list is returned if the circuits cannot be retrieved (for example, if the job uses an old format that is no longer supported).

### creation\_date

<span id="qiskit_ibm_provider.job.IBMCircuitJob.creation_date" />

`creation_date()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_circuit_job.py#L464-L473 "view source code")

Return job creation date, in local time.

**Return type**

`datetime`

**Returns**

The job creation date as a datetime object, in local time.

### done

<span id="qiskit_ibm_provider.job.IBMCircuitJob.done" />

`done()`

Return whether the job has successfully run.

**Return type**

`bool`

### error\_message

<span id="qiskit_ibm_provider.job.IBMCircuitJob.error_message" />

`error_message()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_circuit_job.py#L364-L401 "view source code")

Provide details about the reason of failure.

**Return type**

`Optional`\[`str`]

**Returns**

An error report if the job failed or `None` otherwise.

### header

<span id="qiskit_ibm_provider.job.IBMCircuitJob.header" />

`header()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_circuit_job.py#L601-L611 "view source code")

Return the user header specified for this job.

**Return type**

`Dict`

**Returns**

User header specified for this job. An empty dictionary is returned if the header cannot be retrieved.

### in\_final\_state

<span id="qiskit_ibm_provider.job.IBMCircuitJob.in_final_state" />

`in_final_state()`

Return whether the job is in a final job state such as `DONE` or `ERROR`.

**Return type**

`bool`

### job\_id

<span id="qiskit_ibm_provider.job.IBMCircuitJob.job_id" />

`job_id()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_circuit_job.py#L475-L481 "view source code")

Return the job ID assigned by the server.

**Return type**

`str`

**Returns**

Job ID.

### name

<span id="qiskit_ibm_provider.job.IBMCircuitJob.name" />

`name()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_job.py#L232-L238 "view source code")

Return the name assigned to this job.

**Return type**

`Optional`\[`str`]

**Returns**

Job name or `None` if no name was assigned to this job.

### properties

<span id="qiskit_ibm_provider.job.IBMCircuitJob.properties" />

`properties(refresh=False)` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_job.py#L71-L82 "view source code")

Return the backend properties for this job.

**Parameters**

**refresh** (`bool`) – If `True`, re-query the server for the backend properties. Otherwise, return a cached version.

**Return type**

`Optional`\[[`BackendProperties`](/api/qiskit/qiskit.providers.models.BackendProperties "(in Qiskit v1.0)")]

**Returns**

The backend properties used for this job, at the time the job was run, or `None` if properties are not available.

### queue\_info

<span id="qiskit_ibm_provider.job.IBMCircuitJob.queue_info" />

`queue_info()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_circuit_job.py#L430-L462 "view source code")

Return queue information for this job.

The queue information may include queue position, estimated start and end time, and dynamic priorities for the hub, group, and project. See [`QueueInfo`](qiskit_ibm_provider.job.QueueInfo "qiskit_ibm_provider.job.QueueInfo") for more information.

<Admonition title="Note" type="note">
  The queue information is calculated after the job enters the queue. Therefore, some or all of the information may not be immediately available, and this method may return `None`.
</Admonition>

**Return type**

`Optional`\[[`QueueInfo`](qiskit_ibm_provider.job.QueueInfo "qiskit_ibm_provider.job.queueinfo.QueueInfo")]

**Returns**

A [`QueueInfo`](qiskit_ibm_provider.job.QueueInfo "qiskit_ibm_provider.job.QueueInfo") instance that contains queue information for this job, or `None` if queue information is unknown or not applicable.

### queue\_position

<span id="qiskit_ibm_provider.job.IBMCircuitJob.queue_position" />

`queue_position(refresh=False)` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_circuit_job.py#L403-L428 "view source code")

Return the position of the job in the server queue.

<Admonition title="Note" type="note">
  The position returned is within the scope of the provider and may differ from the global queue position.
</Admonition>

**Parameters**

**refresh** (`bool`) – If `True`, re-query the server to get the latest value. Otherwise return the cached value.

**Return type**

`Optional`\[`int`]

**Returns**

Position in the queue or `None` if position is unknown or not applicable.

### refresh

<span id="qiskit_ibm_provider.job.IBMCircuitJob.refresh" />

`refresh()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_circuit_job.py#L540-L578 "view source code")

Obtain the latest job information from the server.

This method may add additional attributes to this job instance, if new information becomes available.

**Raises**

[**IBMJobApiError**](qiskit_ibm_provider.job.IBMJobApiError "qiskit_ibm_provider.job.IBMJobApiError") – If an unexpected error occurred when communicating with the server.

**Return type**

`None`

### result

<span id="qiskit_ibm_provider.job.IBMCircuitJob.result" />

`result(timeout=None, refresh=False)` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_circuit_job.py#L194-L258 "view source code")

Return the result of the job.

<Admonition title="Note" type="note">
  Some IBM Quantum job results can only be read once. A second attempt to query the server for the same job will fail, since the job has already been “consumed”.

  The first call to this method in an `IBMCircuitJob` instance will query the server and consume any available job results. Subsequent calls to that instance’s `result()` will also return the results, since they are cached. However, attempting to retrieve the results again in another instance or session might fail due to the job results having been consumed.
</Admonition>

<Admonition title="Note" type="note">
  When partial=True, this method will attempt to retrieve partial results of failed jobs. In this case, precaution should be taken when accessing individual experiments, as doing so might cause an exception. The `success` attribute of the returned [`Result`](/api/qiskit/qiskit.result.Result "(in Qiskit v1.0)") instance can be used to verify whether it contains partial results.

  For example, if one of the experiments in the job failed, trying to get the counts of the unsuccessful experiment would raise an exception since there are no counts to return:

  ```python
  try:
      counts = result.get_counts("failed_experiment")
  except QiskitError:
      print("Experiment failed!")
  ```
</Admonition>

If the job failed, you can use [`error_message()`](#qiskit_ibm_provider.job.IBMCircuitJob.error_message "qiskit_ibm_provider.job.IBMCircuitJob.error_message") to get more information.

**Parameters**

*   **timeout** (`Optional`\[`float`]) – Number of seconds to wait for job.
*   **refresh** (`bool`) – If `True`, re-query the server for the result. Otherwise return the cached value.

**Return type**

[`Result`](/api/qiskit/qiskit.result.Result "(in Qiskit v1.0)")

**Returns**

Job result.

**Raises**

*   [**IBMJobInvalidStateError**](qiskit_ibm_provider.job.IBMJobInvalidStateError "qiskit_ibm_provider.job.IBMJobInvalidStateError") – If the job was cancelled.
*   [**IBMJobFailureError**](qiskit_ibm_provider.job.IBMJobFailureError "qiskit_ibm_provider.job.IBMJobFailureError") – If the job failed.
*   [**IBMJobApiError**](qiskit_ibm_provider.job.IBMJobApiError "qiskit_ibm_provider.job.IBMJobApiError") – If an unexpected error occurred when communicating with the server.

### running

<span id="qiskit_ibm_provider.job.IBMCircuitJob.running" />

`running()`

Return whether the job is actively running.

**Return type**

`bool`

### scheduling\_mode

<span id="qiskit_ibm_provider.job.IBMCircuitJob.scheduling_mode" />

`scheduling_mode()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_job.py#L190-L197 "view source code")

Return the scheduling mode the job is in.

**Return type**

`Optional`\[`str`]

**Returns**

The scheduling mode the job is in or `None` if the information is not available.

### status

<span id="qiskit_ibm_provider.job.IBMCircuitJob.status" />

`status()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_circuit_job.py#L332-L362 "view source code")

Query the server for the latest job status.

<Admonition title="Note" type="note">
  This method is not designed to be invoked repeatedly in a loop for an extended period of time. Doing so may cause the server to reject your request. Use [`wait_for_final_state()`](#qiskit_ibm_provider.job.IBMCircuitJob.wait_for_final_state "qiskit_ibm_provider.job.IBMCircuitJob.wait_for_final_state") if you want to wait for the job to finish.
</Admonition>

<Admonition title="Note" type="note">
  If the job failed, you can use [`error_message()`](#qiskit_ibm_provider.job.IBMCircuitJob.error_message "qiskit_ibm_provider.job.IBMCircuitJob.error_message") to get more information.
</Admonition>

**Return type**

[`JobStatus`](/api/qiskit/qiskit.providers.JobStatus "(in Qiskit v1.0)")

**Returns**

The status of the job.

**Raises**

[**IBMJobApiError**](qiskit_ibm_provider.job.IBMJobApiError "qiskit_ibm_provider.job.IBMJobApiError") – If an unexpected error occurred when communicating with the server.

### submit

<span id="qiskit_ibm_provider.job.IBMCircuitJob.submit" />

`submit()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_circuit_job.py#L846-L860 "view source code")

Unsupported method.

<Admonition title="Note" type="note">
  This method is not supported, please use `run()` to submit a job.
</Admonition>

**Raises**

**NotImplementedError** – Upon invocation.

**Return type**

`None`

### tags

<span id="qiskit_ibm_provider.job.IBMCircuitJob.tags" />

`tags()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_job.py#L240-L246 "view source code")

Return the tags assigned to this job.

**Return type**

`List`\[`str`]

**Returns**

Tags assigned to this job.

### time\_per\_step

<span id="qiskit_ibm_provider.job.IBMCircuitJob.time_per_step" />

`time_per_step()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_circuit_job.py#L483-L512 "view source code")

Return the date and time information on each step of the job processing.

The output dictionary contains the date and time information on each step of the job processing, in local time. The keys of the dictionary are the names of the steps, and the values are the date and time data, as a datetime object with local timezone info. For example:

```python
{'CREATING': datetime(2020, 2, 13, 15, 19, 25, 717000, tzinfo=tzlocal(),
 'CREATED': datetime(2020, 2, 13, 15, 19, 26, 467000, tzinfo=tzlocal(),
 'VALIDATING': datetime(2020, 2, 13, 15, 19, 26, 527000, tzinfo=tzlocal()}
```

**Return type**

`Optional`\[`Dict`]

**Returns**

Date and time information on job processing steps, in local time, or `None` if the information is not yet available.

### update\_name

<span id="qiskit_ibm_provider.job.IBMCircuitJob.update_name" />

`update_name(name)` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_job.py#L116-L125 "view source code")

Update the name associated with this job.

**Parameters**

**name** (`str`) – The new name for this job.

**Return type**

`str`

**Returns**

The new name associated with this job.

### update\_tags

<span id="qiskit_ibm_provider.job.IBMCircuitJob.update_tags" />

`update_tags(new_tags)` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_circuit_job.py#L292-L330 "view source code")

Update the tags associated with this job.

**Parameters**

**new\_tags** (`List`\[`str`]) – New tags to assign to the job.

**Return type**

`List`\[`str`]

**Returns**

The new tags associated with this job.

**Raises**

*   [**IBMJobApiError**](qiskit_ibm_provider.job.IBMJobApiError "qiskit_ibm_provider.job.IBMJobApiError") – If an unexpected error occurred when communicating with the server or updating the job tags.
*   [**IBMJobInvalidStateError**](qiskit_ibm_provider.job.IBMJobInvalidStateError "qiskit_ibm_provider.job.IBMJobInvalidStateError") – If none of the input parameters are specified or if any of the input parameters are invalid.

### wait\_for\_final\_state

<span id="qiskit_ibm_provider.job.IBMCircuitJob.wait_for_final_state" />

`wait_for_final_state(timeout=None, wait=3)` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_circuit_job.py#L641-L674 "view source code")

**Use the websocket server to wait for the final the state of a job. The server**

will remain open if the job is still running and the connection will be terminated once the job completes. Then update and return the status of the job.

**Parameters**

**timeout** (`Optional`\[`float`]) – Seconds to wait for the job. If `None`, wait indefinitely.

**Raises**

[**IBMJobTimeoutError**](qiskit_ibm_provider.job.IBMJobTimeoutError "qiskit_ibm_provider.job.IBMJobTimeoutError") – If the job does not complete within given timeout.

**Return type**

`None`

