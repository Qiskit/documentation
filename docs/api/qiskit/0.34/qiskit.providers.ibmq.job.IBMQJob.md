# IBMQJob[¶](#ibmqjob "Permalink to this headline")

<span id="undefined" />

`IBMQJob(backend, api_client, job_id, creation_date, status, kind=None, name=None, time_per_step=None, result=None, qobj=None, error=None, tags=None, run_mode=None, share_level=None, client_info=None, experiment_id=None, **kwargs)`

Bases: `qiskit.providers.job.JobV1`

Representation of a job that executes on an IBM Quantum Experience backend.

The job may be executed on a simulator or a real device. A new `IBMQJob` instance is returned when you call `IBMQBackend.run()` to submit a job to a particular backend.

If the job is successfully submitted, you can inspect the job’s status by calling [`status()`](qiskit.providers.ibmq.job.IBMQJob.status#qiskit.providers.ibmq.job.IBMQJob.status "qiskit.providers.ibmq.job.IBMQJob.status"). Job status can be one of the [`JobStatus`](qiskit.providers.JobStatus#qiskit.providers.JobStatus "qiskit.providers.JobStatus") members. For example:

```python
from qiskit.providers.jobstatus import JobStatus

job = backend.run(...)

try:
    job_status = job.status()  # Query the backend server for job status.
    if job_status is JobStatus.RUNNING:
        print("The job is still running")
except IBMQJobApiError as ex:
    print("Something wrong happened!: {}".format(ex))
```

<Admonition title="Note" type="note">
  An error may occur when querying the remote server to get job information. The most common errors are temporary network failures and server errors, in which case an [`IBMQJobApiError`](qiskit.providers.ibmq.job.IBMQJobApiError#qiskit.providers.ibmq.job.IBMQJobApiError "qiskit.providers.ibmq.job.IBMQJobApiError") is raised. These errors usually clear quickly, so retrying the operation is likely to succeed.
</Admonition>

Some of the methods in this class are blocking, which means control may not be returned immediately. [`result()`](qiskit.providers.ibmq.job.IBMQJob.result#qiskit.providers.ibmq.job.IBMQJob.result "qiskit.providers.ibmq.job.IBMQJob.result") is an example of a blocking method:

```python
job = backend.run(...)

try:
    job_result = job.result()  # It will block until the job finishes.
    print("The job finished with result {}".format(job_result))
except JobError as ex:
    print("Something wrong happened!: {}".format(ex))
```

Job information retrieved from the server is attached to the `IBMQJob` instance as attributes. Given that Qiskit and the server can be updated independently, some of these attributes might be deprecated or experimental. Supported attributes can be retrieved via methods. For example, you can use [`creation_date()`](qiskit.providers.ibmq.job.IBMQJob.creation_date#qiskit.providers.ibmq.job.IBMQJob.creation_date "qiskit.providers.ibmq.job.IBMQJob.creation_date") to retrieve the job creation date, which is a supported attribute.

IBMQJob constructor.

**Parameters**

*   **backend** (`IBMQBackend`) – The backend instance used to run this job.
*   **api\_client** (`AccountClient`) – Object for connecting to the server.
*   **job\_id** (`str`) – Job ID.
*   **creation\_date** (`str`) – Job creation date.
*   **status** (`str`) – Job status returned by the server.
*   **kind** (`Optional`\[`str`]) – Job type.
*   **name** (`Optional`\[`str`]) – Job name.
*   **time\_per\_step** (`Optional`\[`dict`]) – Time spent for each processing step.
*   **result** (`Optional`\[`dict`]) – Job result.
*   **qobj** (`Union`\[`dict`, `QasmQobj`, `PulseQobj`, `None`]) – Qobj for this job.
*   **error** (`Optional`\[`dict`]) – Job error.
*   **tags** (`Optional`\[`List`\[`str`]]) – Job tags.
*   **run\_mode** (`Optional`\[`str`]) – Scheduling mode the job runs in.
*   **share\_level** (`Optional`\[`str`]) – Level the job can be shared with.
*   **client\_info** (`Optional`\[`Dict`\[`str`, `str`]]) – Client version.
*   **experiment\_id** (`Optional`\[`str`]) – ID of the experiment this job is part of.
*   **kwargs** (`Any`) – Additional job attributes.

## Methods

|                                                                                                                                                                                                  |                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| [`backend`](qiskit.providers.ibmq.job.IBMQJob.backend#qiskit.providers.ibmq.job.IBMQJob.backend "qiskit.providers.ibmq.job.IBMQJob.backend")                                                     | Return the backend where this job was executed.                           |
| [`backend_options`](qiskit.providers.ibmq.job.IBMQJob.backend_options#qiskit.providers.ibmq.job.IBMQJob.backend_options "qiskit.providers.ibmq.job.IBMQJob.backend_options")                     | Return the backend configuration options used for this job.               |
| [`cancel`](qiskit.providers.ibmq.job.IBMQJob.cancel#qiskit.providers.ibmq.job.IBMQJob.cancel "qiskit.providers.ibmq.job.IBMQJob.cancel")                                                         | Attempt to cancel the job.                                                |
| [`cancelled`](qiskit.providers.ibmq.job.IBMQJob.cancelled#qiskit.providers.ibmq.job.IBMQJob.cancelled "qiskit.providers.ibmq.job.IBMQJob.cancelled")                                             | Return whether the job has been cancelled.                                |
| [`circuits`](qiskit.providers.ibmq.job.IBMQJob.circuits#qiskit.providers.ibmq.job.IBMQJob.circuits "qiskit.providers.ibmq.job.IBMQJob.circuits")                                                 | Return the circuits or pulse schedules for this job.                      |
| [`creation_date`](qiskit.providers.ibmq.job.IBMQJob.creation_date#qiskit.providers.ibmq.job.IBMQJob.creation_date "qiskit.providers.ibmq.job.IBMQJob.creation_date")                             | Return job creation date, in local time.                                  |
| [`done`](qiskit.providers.ibmq.job.IBMQJob.done#qiskit.providers.ibmq.job.IBMQJob.done "qiskit.providers.ibmq.job.IBMQJob.done")                                                                 | Return whether the job has successfully run.                              |
| [`error_message`](qiskit.providers.ibmq.job.IBMQJob.error_message#qiskit.providers.ibmq.job.IBMQJob.error_message "qiskit.providers.ibmq.job.IBMQJob.error_message")                             | Provide details about the reason of failure.                              |
| [`header`](qiskit.providers.ibmq.job.IBMQJob.header#qiskit.providers.ibmq.job.IBMQJob.header "qiskit.providers.ibmq.job.IBMQJob.header")                                                         | Return the user header specified for this job.                            |
| [`in_final_state`](qiskit.providers.ibmq.job.IBMQJob.in_final_state#qiskit.providers.ibmq.job.IBMQJob.in_final_state "qiskit.providers.ibmq.job.IBMQJob.in_final_state")                         | Return whether the job is in a final job state such as `DONE` or `ERROR`. |
| [`job_id`](qiskit.providers.ibmq.job.IBMQJob.job_id#qiskit.providers.ibmq.job.IBMQJob.job_id "qiskit.providers.ibmq.job.IBMQJob.job_id")                                                         | Return the job ID assigned by the server.                                 |
| [`name`](qiskit.providers.ibmq.job.IBMQJob.name#qiskit.providers.ibmq.job.IBMQJob.name "qiskit.providers.ibmq.job.IBMQJob.name")                                                                 | Return the name assigned to this job.                                     |
| [`properties`](qiskit.providers.ibmq.job.IBMQJob.properties#qiskit.providers.ibmq.job.IBMQJob.properties "qiskit.providers.ibmq.job.IBMQJob.properties")                                         | Return the backend properties for this job.                               |
| [`qobj`](qiskit.providers.ibmq.job.IBMQJob.qobj#qiskit.providers.ibmq.job.IBMQJob.qobj "qiskit.providers.ibmq.job.IBMQJob.qobj")                                                                 | Return the Qobj for this job.                                             |
| [`queue_info`](qiskit.providers.ibmq.job.IBMQJob.queue_info#qiskit.providers.ibmq.job.IBMQJob.queue_info "qiskit.providers.ibmq.job.IBMQJob.queue_info")                                         | Return queue information for this job.                                    |
| [`queue_position`](qiskit.providers.ibmq.job.IBMQJob.queue_position#qiskit.providers.ibmq.job.IBMQJob.queue_position "qiskit.providers.ibmq.job.IBMQJob.queue_position")                         | Return the position of the job in the server queue.                       |
| [`refresh`](qiskit.providers.ibmq.job.IBMQJob.refresh#qiskit.providers.ibmq.job.IBMQJob.refresh "qiskit.providers.ibmq.job.IBMQJob.refresh")                                                     | Obtain the latest job information from the server.                        |
| [`result`](qiskit.providers.ibmq.job.IBMQJob.result#qiskit.providers.ibmq.job.IBMQJob.result "qiskit.providers.ibmq.job.IBMQJob.result")                                                         | Return the result of the job.                                             |
| [`running`](qiskit.providers.ibmq.job.IBMQJob.running#qiskit.providers.ibmq.job.IBMQJob.running "qiskit.providers.ibmq.job.IBMQJob.running")                                                     | Return whether the job is actively running.                               |
| [`scheduling_mode`](qiskit.providers.ibmq.job.IBMQJob.scheduling_mode#qiskit.providers.ibmq.job.IBMQJob.scheduling_mode "qiskit.providers.ibmq.job.IBMQJob.scheduling_mode")                     | Return the scheduling mode the job is in.                                 |
| [`share_level`](qiskit.providers.ibmq.job.IBMQJob.share_level#qiskit.providers.ibmq.job.IBMQJob.share_level "qiskit.providers.ibmq.job.IBMQJob.share_level")                                     | Return the share level of the job.                                        |
| [`status`](qiskit.providers.ibmq.job.IBMQJob.status#qiskit.providers.ibmq.job.IBMQJob.status "qiskit.providers.ibmq.job.IBMQJob.status")                                                         | Query the server for the latest job status.                               |
| [`submit`](qiskit.providers.ibmq.job.IBMQJob.submit#qiskit.providers.ibmq.job.IBMQJob.submit "qiskit.providers.ibmq.job.IBMQJob.submit")                                                         | Unsupported method.                                                       |
| [`tags`](qiskit.providers.ibmq.job.IBMQJob.tags#qiskit.providers.ibmq.job.IBMQJob.tags "qiskit.providers.ibmq.job.IBMQJob.tags")                                                                 | Return the tags assigned to this job.                                     |
| [`time_per_step`](qiskit.providers.ibmq.job.IBMQJob.time_per_step#qiskit.providers.ibmq.job.IBMQJob.time_per_step "qiskit.providers.ibmq.job.IBMQJob.time_per_step")                             | Return the date and time information on each step of the job processing.  |
| [`update_name`](qiskit.providers.ibmq.job.IBMQJob.update_name#qiskit.providers.ibmq.job.IBMQJob.update_name "qiskit.providers.ibmq.job.IBMQJob.update_name")                                     | Update the name associated with this job.                                 |
| [`update_tags`](qiskit.providers.ibmq.job.IBMQJob.update_tags#qiskit.providers.ibmq.job.IBMQJob.update_tags "qiskit.providers.ibmq.job.IBMQJob.update_tags")                                     | Update the tags associated with this job.                                 |
| [`wait_for_final_state`](qiskit.providers.ibmq.job.IBMQJob.wait_for_final_state#qiskit.providers.ibmq.job.IBMQJob.wait_for_final_state "qiskit.providers.ibmq.job.IBMQJob.wait_for_final_state") | Wait until the job progresses to a final state such as `DONE` or `ERROR`. |

## Attributes

<span id="undefined" />

### client\_version

Return version of the client used for this job.

**Return type**

`Dict`\[`str`, `str`]

**Returns**

**Client version in dictionary format, where the key is the name**

of the client and the value is the version.

<span id="undefined" />

### experiment\_id

Return the experiment ID.

**Return type**

`str`

**Returns**

ID of the experiment this job is part of.

<span id="undefined" />

### version

`= 1`
