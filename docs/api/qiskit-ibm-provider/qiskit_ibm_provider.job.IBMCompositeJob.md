---
title: IBMCompositeJob
description: API reference for qiskit_ibm_provider.job.IBMCompositeJob
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_provider.job.IBMCompositeJob
---

# IBMCompositeJob

<span id="qiskit_ibm_provider.job.IBMCompositeJob" />

`IBMCompositeJob(backend, api_client, job_id=None, creation_date=None, jobs=None, circuits_list=None, run_config=None, name=None, tags=None, client_version=None)` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L72-L1317 "view source code")

Representation of a set of jobs that execute on an IBM Quantum backend.

An `IBMCompositeJob` instance is returned when you call `IBMBackend.run()` to submit a list of circuits whose length exceeds the maximum allowed by the backend or by the `max_circuits_per_job` parameter.

This `IBMCompositeJob` instance manages all the sub-jobs for you and can be used like a traditional job instance. For example, you can continue to use methods like [`status()`](#qiskit_ibm_provider.job.IBMCompositeJob.status "qiskit_ibm_provider.job.IBMCompositeJob.status") and [`result()`](#qiskit_ibm_provider.job.IBMCompositeJob.result "qiskit_ibm_provider.job.IBMCompositeJob.result") to get the job status and result, respectively.

You can also retrieve a previously executed `IBMCompositeJob` using the `job()` and [`jobs()`](qiskit_ibm_provider.IBMBackendService#jobs "qiskit_ibm_provider.IBMBackendService.jobs") methods, like you would with traditional jobs.

`IBMCompositeJob` also allows you to re-run failed jobs, using the [`rerun_failed()`](#qiskit_ibm_provider.job.IBMCompositeJob.rerun_failed "qiskit_ibm_provider.job.IBMCompositeJob.rerun_failed") method. This method will re-submit all failed or cancelled sub-jobs. Any circuits that failed to be submitted (e.g. due to server error) will only be re-submitted if the circuits are known. That is, if this `IBMCompositeJob` was returned by [`qiskit_ibm_provider.IBMBackend.run()`](qiskit_ibm_provider.IBMBackend#run "qiskit_ibm_provider.IBMBackend.run") and not retrieved from the server.

Some of the methods in this class are blocking, which means control may not be returned immediately. [`result()`](#qiskit_ibm_provider.job.IBMCompositeJob.result "qiskit_ibm_provider.job.IBMCompositeJob.result") is an example of a blocking method, and control will return only after all sub-jobs finish.

`IBMCompositeJob` uses job tags to identify sub-jobs. It is therefore important to preserve these tags. All tags used internally by `IBMCompositeJob` start with `ibm_composite_job_`.

IBMCompositeJob constructor.

**Parameters**

*   **backend** ([`IBMBackend`](qiskit_ibm_provider.IBMBackend "qiskit_ibm_provider.ibm_backend.IBMBackend")) – The backend instance used to run this job.
*   **api\_client** (`AccountClient`) – Object for connecting to the server.
*   **job\_id** (`Optional`\[`str`]) – Job ID.
*   **creation\_date** (`Optional`\[`datetime`]) – Job creation date.
*   **jobs** (`Optional`\[`List`\[[`IBMCircuitJob`](qiskit_ibm_provider.job.IBMCircuitJob "qiskit_ibm_provider.job.ibm_circuit_job.IBMCircuitJob")]]) – A list of sub-jobs.
*   **circuits\_list** (`Optional`\[`List`\[`List`\[[`QuantumCircuit`](/api/qiskit/qiskit.circuit.QuantumCircuit "(in Qiskit v1.0)")]]]) – Circuits for this job.
*   **run\_config** (`Optional`\[`Dict`]) – Runtime configuration for this job.
*   **name** (`Optional`\[`str`]) – Job name.
*   **tags** (`Optional`\[`List`\[`str`]]) – Job tags.
*   **client\_version** (`Optional`\[`Dict`]) – Client used for the job.

**Raises**

[**IBMJobInvalidStateError**](qiskit_ibm_provider.job.IBMJobInvalidStateError "qiskit_ibm_provider.job.IBMJobInvalidStateError") – If one or more subjobs is missing.

## Attributes

<span id="qiskit_ibm_provider.job.IBMCompositeJob.client_version" />

### client\_version

Return version of the client used for this job.

**Return type**

`Dict`\[`str`, `str`]

**Returns**

**Client version in dictionary format, where the key is the name**

of the client and the value is the version. An empty dictionary is returned if the information is not yet known.

<span id="qiskit_ibm_provider.job.IBMCompositeJob.version" />

### version

`= 1`

## Methods

### backend

<span id="qiskit_ibm_provider.job.IBMCompositeJob.backend" />

`backend()`

Return the backend where this job was executed.

**Return type**

[`Backend`](/api/qiskit/qiskit.providers.Backend "(in Qiskit v1.0)")

### backend\_options

<span id="qiskit_ibm_provider.job.IBMCompositeJob.backend_options" />

`backend_options()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L891-L904 "view source code")

Return the backend configuration options used for this job.

Options that are not applicable to the job execution are not returned. Some but not all of the options with default values are returned. You can use [`qiskit_ibm_provider.IBMBackend.options`](qiskit_ibm_provider.IBMBackend#options "qiskit_ibm_provider.IBMBackend.options") to see all backend options.

**Return type**

`Dict`\[`str`, `Any`]

**Returns**

Backend options used for this job.

### block\_for\_submit

<span id="qiskit_ibm_provider.job.IBMCompositeJob.block_for_submit" />

`block_for_submit()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L1050-L1054 "view source code")

Block until all sub-jobs are submitted.

**Return type**

`None`

### cancel

<span id="qiskit_ibm_provider.job.IBMCompositeJob.cancel" />

`cancel()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L497-L524 "view source code")

Attempt to cancel the job.

<Admonition title="Note" type="note">
  Depending on the state the job is in, it might be impossible to cancel the job.
</Admonition>

**Return type**

`bool`

**Returns**

`True` if the job is cancelled, else `False`.

**Raises**

[**IBMJobApiError**](qiskit_ibm_provider.job.IBMJobApiError "qiskit_ibm_provider.job.IBMJobApiError") – If an unexpected error occurred when communicating with the server.

### cancelled

<span id="qiskit_ibm_provider.job.IBMCompositeJob.cancelled" />

`cancelled()`

Return whether the job has been cancelled.

**Return type**

`bool`

### circuits

<span id="qiskit_ibm_provider.job.IBMCompositeJob.circuits" />

`circuits()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L879-L889 "view source code")

Return the circuits for this job.

**Return type**

`List`\[[`QuantumCircuit`](/api/qiskit/qiskit.circuit.QuantumCircuit "(in Qiskit v1.0)")]

**Returns**

The circuits for this job.

### creation\_date

<span id="qiskit_ibm_provider.job.IBMCompositeJob.creation_date" />

`creation_date()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L761-L773 "view source code")

Return job creation date, in local time.

**Return type**

`Optional`\[`datetime`]

**Returns**

The job creation date as a datetime object, in local time, or `None` if job submission hasn’t finished or failed.

### done

<span id="qiskit_ibm_provider.job.IBMCompositeJob.done" />

`done()`

Return whether the job has successfully run.

**Return type**

`bool`

### error\_message

<span id="qiskit_ibm_provider.job.IBMCompositeJob.error_message" />

`error_message()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L694-L710 "view source code")

Provide details about the reason of failure.

<Admonition title="Note" type="note">
  This method blocks until the job finishes.
</Admonition>

**Return type**

`Optional`\[`str`]

**Returns**

An error report if the job failed or `None` otherwise.

### from\_jobs

<span id="qiskit_ibm_provider.job.IBMCompositeJob.from_jobs" />

`classmethod from_jobs(job_id, jobs, api_client)` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L224-L255 "view source code")

Return an instance of this class.

The input job ID is used to query for sub-job information from the server.

**Parameters**

*   **job\_id** (`str`) – Job ID.
*   **jobs** (`List`\[[`IBMCircuitJob`](qiskit_ibm_provider.job.IBMCircuitJob "qiskit_ibm_provider.job.ibm_circuit_job.IBMCircuitJob")]) – A list of circuit jobs that belong to this composite job.
*   **api\_client** (`AccountClient`) – Client to use to communicate with the server.

**Return type**

[`IBMCompositeJob`](#qiskit_ibm_provider.job.IBMCompositeJob "qiskit_ibm_provider.job.ibm_composite_job.IBMCompositeJob")

**Returns**

An instance of this class.

### header

<span id="qiskit_ibm_provider.job.IBMCompositeJob.header" />

`header()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L906-L915 "view source code")

Return the user header specified for this job.

**Return type**

`Dict`

**Returns**

User header specified for this job. An empty dictionary is returned if the header cannot be retrieved.

### in\_final\_state

<span id="qiskit_ibm_provider.job.IBMCompositeJob.in_final_state" />

`in_final_state()`

Return whether the job is in a final job state such as `DONE` or `ERROR`.

**Return type**

`bool`

### job\_id

<span id="qiskit_ibm_provider.job.IBMCompositeJob.job_id" />

`job_id()`

Return a unique id identifying the job.

**Return type**

`str`

### name

<span id="qiskit_ibm_provider.job.IBMCompositeJob.name" />

`name()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_job.py#L232-L238 "view source code")

Return the name assigned to this job.

**Return type**

`Optional`\[`str`]

**Returns**

Job name or `None` if no name was assigned to this job.

### properties

<span id="qiskit_ibm_provider.job.IBMCompositeJob.properties" />

`properties(refresh=False)` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L375-L410 "view source code")

Return the backend properties for this job.

> **Args:**
>
> **refresh: If `True`, re-query the server for the backend properties.**
>
> Otherwise, return a cached version.

<Admonition title="Note" type="note">
  This method blocks until all sub-jobs are submitted.
</Admonition>

**Return type**

`Union`\[`List`\[[`BackendProperties`](/api/qiskit/qiskit.providers.models.BackendProperties "(in Qiskit v1.0)")], [`BackendProperties`](/api/qiskit/qiskit.providers.models.BackendProperties "(in Qiskit v1.0)"), `None`]

**Returns**

The backend properties used for this job, or `None` if properties are not available. A list of backend properties is returned if the sub-jobs used different properties.

**Raises**

[**IBMJobApiError**](qiskit_ibm_provider.job.IBMJobApiError "qiskit_ibm_provider.job.IBMJobApiError") – If an unexpected error occurred when communicating with the server.

### queue\_info

<span id="qiskit_ibm_provider.job.IBMCompositeJob.queue_info" />

`queue_info()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L736-L759 "view source code")

Return queue information for this job.

This method returns the queue information of the sub-job that is last in queue.

The queue information may include queue position, estimated start and end time, and dynamic priorities for the hub, group, and project. See [`QueueInfo`](qiskit_ibm_provider.job.QueueInfo "qiskit_ibm_provider.job.QueueInfo") for more information.

<Admonition title="Note" type="note">
  The queue information is calculated after the job enters the queue. Therefore, some or all of the information may not be immediately available, and this method may return `None`.
</Admonition>

**Return type**

`Optional`\[[`QueueInfo`](qiskit_ibm_provider.job.QueueInfo "qiskit_ibm_provider.job.queueinfo.QueueInfo")]

**Returns**

A [`QueueInfo`](qiskit_ibm_provider.job.QueueInfo "qiskit_ibm_provider.job.QueueInfo") instance that contains queue information for this job, or `None` if queue information is unknown or not applicable.

### queue\_position

<span id="qiskit_ibm_provider.job.IBMCompositeJob.queue_position" />

`queue_position(refresh=False)` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L712-L734 "view source code")

Return the position of the job in the server queue.

This method returns the queue position of the sub-job that is last in queue.

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

<span id="qiskit_ibm_provider.job.IBMCompositeJob.refresh" />

`refresh()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L865-L877 "view source code")

Obtain the latest job information from the server.

This method may add additional attributes to this job instance, if new information becomes available.

**Raises**

[**IBMJobApiError**](qiskit_ibm_provider.job.IBMJobApiError "qiskit_ibm_provider.job.IBMJobApiError") – If an unexpected error occurred when communicating with the server.

**Return type**

`None`

### report

<span id="qiskit_ibm_provider.job.IBMCompositeJob.report" />

`report(detailed=True)` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L625-L692 "view source code")

Return a report on current sub-job statuses.

**Parameters**

**detailed** (`bool`) – If `True`, return a detailed report. Otherwise return a summary report.

**Return type**

`str`

**Returns**

A report on sub-job statuses.

### rerun\_failed

<span id="qiskit_ibm_provider.job.IBMCompositeJob.rerun_failed" />

`rerun_failed()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L1020-L1048 "view source code")

Re-submit all failed sub-jobs.

<Admonition title="Note" type="note">
  All sub-jobs that are in “ERROR” or “CANCELLED” states will be re-submitted. Sub-jobs that failed to be submitted will only be re-submitted if the circuits are known. That is, if this `IBMCompositeJob` was returned by [`qiskit_ibm_provider.IBMBackend.run()`](qiskit_ibm_provider.IBMBackend#run "qiskit_ibm_provider.IBMBackend.run") and not retrieved from the server.
</Admonition>

**Return type**

`None`

### result

<span id="qiskit_ibm_provider.job.IBMCompositeJob.result" />

`result(timeout=None, wait=5, partial=False, refresh=False)` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L412-L495 "view source code")

Return the result of the job.

<Admonition title="Note" type="note">
  This method blocks until all sub-jobs finish.
</Admonition>

<Admonition title="Note" type="note">
  Some IBM Quantum job results can only be read once. A second attempt to query the server for the same job will fail, since the job has already been “consumed”.

  The first call to this method in an `IBMCompositeJob` instance will query the server and consume any available job results. Subsequent calls to that instance’s `result()` will also return the results, since they are cached. However, attempting to retrieve the results again in another instance or session might fail due to the job results having been consumed.
</Admonition>

<Admonition title="Note" type="note">
  When partial=True, this method will attempt to retrieve partial results of failed jobs. In this case, precaution should be taken when accessing individual experiments, as doing so might cause an exception. The `success` attribute of the returned [`Result`](/api/qiskit/qiskit.result.Result "(in Qiskit v1.0)") instance can be used to verify whether it contains partial results.

  For example, if one of the circuits in the job failed, trying to get the counts of the unsuccessful circuit would raise an exception since there are no counts to return:

  ```python
  try:
      counts = result.get_counts("failed_circuit")
  except QiskitError:
      print("Circuit execution failed!")
  ```
</Admonition>

If the job failed, you can use [`error_message()`](#qiskit_ibm_provider.job.IBMCompositeJob.error_message "qiskit_ibm_provider.job.IBMCompositeJob.error_message") to get more information.

**Parameters**

*   **timeout** (`Optional`\[`float`]) – Number of seconds to wait for job.
*   **wait** (`float`) – Time in seconds between queries.
*   **partial** (`bool`) – If `True`, return partial results if possible. Partial results refer to experiments within a sub-job, not individual sub-jobs. That is, this method will still block until all sub-jobs finish even if partial is set to `True`.
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

<span id="qiskit_ibm_provider.job.IBMCompositeJob.running" />

`running()`

Return whether the job is actively running.

**Return type**

`bool`

### scheduling\_mode

<span id="qiskit_ibm_provider.job.IBMCompositeJob.scheduling_mode" />

`scheduling_mode()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L823-L848 "view source code")

Return the scheduling mode the job is in.

The scheduling mode indicates how the job is scheduled to run. For example, `fairshare` indicates the job is scheduled using a fairshare algorithm.

`fairshare` is returned if any of the sub-jobs has scheduling mode of `fairshare`.

This information is only available if the job status is `RUNNING` or `DONE`.

**Return type**

`Optional`\[`str`]

**Returns**

The scheduling mode the job is in or `None` if the information is not available.

### status

<span id="qiskit_ibm_provider.job.IBMCompositeJob.status" />

`status()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L590-L623 "view source code")

Query the server for the latest job status.

<Admonition title="Note" type="note">
  This method is not designed to be invoked repeatedly in a loop for an extended period of time. Doing so may cause the server to reject your request. Use [`wait_for_final_state()`](#qiskit_ibm_provider.job.IBMCompositeJob.wait_for_final_state "qiskit_ibm_provider.job.IBMCompositeJob.wait_for_final_state") if you want to wait for the job to finish.
</Admonition>

<Admonition title="Note" type="note">
  If the job failed, you can use [`error_message()`](#qiskit_ibm_provider.job.IBMCompositeJob.error_message "qiskit_ibm_provider.job.IBMCompositeJob.error_message") to get more information.
</Admonition>

<Admonition title="Note" type="note">
  Since this job contains multiple sub-jobs, the returned status is mapped in the following order:

  > *   INITIALIZING - if any sub-job is being initialized.
  > *   VALIDATING - if any sub-job is being validated.
  > *   QUEUED - if any sub-job is queued.
  > *   RUNNING - if any sub-job is still running.
  > *   ERROR - if any sub-job incurred an error.
  > *   CANCELLED - if any sub-job is cancelled.
  > *   DONE - if all sub-jobs finished.
</Admonition>

**Return type**

[`JobStatus`](/api/qiskit/qiskit.providers.JobStatus "(in Qiskit v1.0)")

**Returns**

The status of the job.

**Raises**

[**IBMJobApiError**](qiskit_ibm_provider.job.IBMJobApiError "qiskit_ibm_provider.job.IBMJobApiError") – If an unexpected error occurred when communicating with the server.

### sub\_job

<span id="qiskit_ibm_provider.job.IBMCompositeJob.sub_job" />

`sub_job(circuit_index)` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L995-L1018 "view source code")

Retrieve the job used to submit the specified circuit.

**Parameters**

**circuit\_index** (`int`) – Index of the circuit whose job is to be returned.

**Return type**

`Optional`\[[`IBMCircuitJob`](qiskit_ibm_provider.job.IBMCircuitJob "qiskit_ibm_provider.job.ibm_circuit_job.IBMCircuitJob")]

**Returns**

The Job submitted for the circuit, or `None` if the job has not been submitted or the submit failed.

**Raises**

[**IBMJobInvalidStateError**](qiskit_ibm_provider.job.IBMJobInvalidStateError "qiskit_ibm_provider.job.IBMJobInvalidStateError") – If the circuit index is out of range.

### sub\_jobs

<span id="qiskit_ibm_provider.job.IBMCompositeJob.sub_jobs" />

`sub_jobs(block_for_submit=True)` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L980-L993 "view source code")

Return all submitted sub-jobs.

**Parameters**

**block\_for\_submit** (`bool`) – `True` if this method should block until all sub-jobs are submitted. `False` if the method should return immediately with submitted sub-jobs, if any.

**Return type**

`List`\[[`IBMCircuitJob`](qiskit_ibm_provider.job.IBMCircuitJob "qiskit_ibm_provider.job.ibm_circuit_job.IBMCircuitJob")]

**Returns**

All submitted sub-jobs.

### submit

<span id="qiskit_ibm_provider.job.IBMCompositeJob.submit" />

`submit()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L1303-L1317 "view source code")

Unsupported method.

<Admonition title="Note" type="note">
  This method is not supported, please use `run()` to submit a job.
</Admonition>

**Raises**

**NotImplementedError** – Upon invocation.

**Return type**

`None`

### tags

<span id="qiskit_ibm_provider.job.IBMCompositeJob.tags" />

`tags()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_job.py#L240-L246 "view source code")

Return the tags assigned to this job.

**Return type**

`List`\[`str`]

**Returns**

Tags assigned to this job.

### time\_per\_step

<span id="qiskit_ibm_provider.job.IBMCompositeJob.time_per_step" />

`time_per_step()` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L775-L821 "view source code")

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

<span id="qiskit_ibm_provider.job.IBMCompositeJob.update_name" />

`update_name(name)` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L526-L554 "view source code")

Update the name associated with this job.

<Admonition title="Note" type="note">
  This method blocks until all sub-jobs are submitted.
</Admonition>

**Parameters**

**name** (`str`) – The new name for this job.

**Return type**

`str`

**Returns**

The new name associated with this job.

**Raises**

*   [**IBMJobApiError**](qiskit_ibm_provider.job.IBMJobApiError "qiskit_ibm_provider.job.IBMJobApiError") – If an unexpected error occurred when communicating with the server or updating the job name.
*   [**IBMJobInvalidStateError**](qiskit_ibm_provider.job.IBMJobInvalidStateError "qiskit_ibm_provider.job.IBMJobInvalidStateError") – If the input job name is not a string.

### update\_tags

<span id="qiskit_ibm_provider.job.IBMCompositeJob.update_tags" />

`update_tags(new_tags)` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L556-L588 "view source code")

Update the tags associated with this job.

<Admonition title="Note" type="note">
  This method blocks until all sub-jobs are submitted.
</Admonition>

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

<span id="qiskit_ibm_provider.job.IBMCompositeJob.wait_for_final_state" />

`wait_for_final_state(timeout=None, wait=None, callback=None)` [GitHub](https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/job/ibm_composite_job.py#L917-L978 "view source code")

Wait until the job progresses to a final state such as `DONE` or `ERROR`.

**Parameters**

*   **timeout** (`Optional`\[`float`]) – Seconds to wait for the job. If `None`, wait indefinitely.

*   **wait** (`Optional`\[`float`]) – Seconds to wait between invoking the callback function. If `None`, the callback function is invoked only if job status or queue position has changed.

*   **callback** (`Optional`\[`Callable`]) –

    Callback function invoked after each querying iteration. The following positional arguments are provided to the callback function:

    > *   job\_id: Job ID
    > *   job\_status: Status of the job from the last query.
    > *   job: This `IBMCompositeJob` instance.

    In addition, the following keyword arguments are also provided:

    > *   queue\_info: A [`QueueInfo`](qiskit_ibm_provider.job.QueueInfo "qiskit_ibm_provider.job.QueueInfo") instance with job queue information, or `None` if queue information is unknown or not applicable. You can use the `to_dict()` method to convert the [`QueueInfo`](qiskit_ibm_provider.job.QueueInfo "qiskit_ibm_provider.job.QueueInfo") instance to a dictionary, if desired.

**Raises**

[**IBMJobTimeoutError**](qiskit_ibm_provider.job.IBMJobTimeoutError "qiskit_ibm_provider.job.IBMJobTimeoutError") – if the job does not reach a final state before the specified timeout.

**Return type**

`None`

