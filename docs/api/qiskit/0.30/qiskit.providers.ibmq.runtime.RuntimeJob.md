# RuntimeJob

<span id="undefined" />

`RuntimeJob(backend, api_client, credentials, job_id, program_id, params=None, creation_date=None, user_callback=None, result_decoder=<class 'qiskit.providers.ibmq.runtime.program.result_decoder.ResultDecoder'>)`

Bases: `object`

Representation of a runtime program execution.

A new `RuntimeJob` instance is returned when you call [`IBMRuntimeService.run`](qiskit.providers.ibmq.runtime.IBMRuntimeService.run#qiskit.providers.ibmq.runtime.IBMRuntimeService.run "qiskit.providers.ibmq.runtime.IBMRuntimeService.run") to execute a runtime program, or [`IBMRuntimeService.job`](qiskit.providers.ibmq.runtime.IBMRuntimeService.job#qiskit.providers.ibmq.runtime.IBMRuntimeService.job "qiskit.providers.ibmq.runtime.IBMRuntimeService.job") to retrieve a previously executed job.

If the program execution is successful, you can inspect the job’s status by calling [`status()`](qiskit.providers.ibmq.runtime.RuntimeJob.status#qiskit.providers.ibmq.runtime.RuntimeJob.status "qiskit.providers.ibmq.runtime.RuntimeJob.status"). Job status can be one of the [`JobStatus`](qiskit.providers.JobStatus#qiskit.providers.JobStatus "qiskit.providers.JobStatus") members.

Some of the methods in this class are blocking, which means control may not be returned immediately. [`result()`](qiskit.providers.ibmq.runtime.RuntimeJob.result#qiskit.providers.ibmq.runtime.RuntimeJob.result "qiskit.providers.ibmq.runtime.RuntimeJob.result") is an example of a blocking method:

```python
job = provider.runtime.run(...)

try:
    job_result = job.result()  # It will block until the job finishes.
    print("The job finished with result {}".format(job_result))
except RuntimeJobFailureError as ex:
    print("Job failed!: {}".format(ex))
```

If the program has any interim results, you can use the `callback` parameter of the [`run()`](qiskit.providers.ibmq.runtime.IBMRuntimeService.run#qiskit.providers.ibmq.runtime.IBMRuntimeService.run "qiskit.providers.ibmq.runtime.IBMRuntimeService.run") method to stream the interim results. Alternatively, you can use the [`stream_results()`](qiskit.providers.ibmq.runtime.RuntimeJob.stream_results#qiskit.providers.ibmq.runtime.RuntimeJob.stream_results "qiskit.providers.ibmq.runtime.RuntimeJob.stream_results") method to stream the results at a later time, but before the job finishes.

RuntimeJob constructor.

**Parameters**

*   **backend** (`Backend`) – The backend instance used to run this job.
*   **api\_client** (`RuntimeClient`) – Object for connecting to the server.
*   **credentials** (`Credentials`) – Account credentials.
*   **job\_id** (`str`) – Job ID.
*   **program\_id** (`str`) – ID of the program this job is for.
*   **params** (`Optional`\[`Dict`]) – Job parameters.
*   **creation\_date** (`Optional`\[`str`]) – Job creation date, in UTC.
*   **user\_callback** (`Optional`\[`Callable`]) – User callback function.
*   **result\_decoder** (`Type`\[`ResultDecoder`]) – A [`ResultDecoder`](qiskit.providers.ibmq.runtime.ResultDecoder#qiskit.providers.ibmq.runtime.ResultDecoder "qiskit.providers.ibmq.runtime.ResultDecoder") subclass used to decode job results.

## Methods

|                                                                                                                                                                                                                                   |                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`backend`](qiskit.providers.ibmq.runtime.RuntimeJob.backend#qiskit.providers.ibmq.runtime.RuntimeJob.backend "qiskit.providers.ibmq.runtime.RuntimeJob.backend")                                                                 | Return the backend where this job was executed.                                     |
| [`cancel`](qiskit.providers.ibmq.runtime.RuntimeJob.cancel#qiskit.providers.ibmq.runtime.RuntimeJob.cancel "qiskit.providers.ibmq.runtime.RuntimeJob.cancel")                                                                     | Cancel the job.                                                                     |
| [`cancel_result_streaming`](qiskit.providers.ibmq.runtime.RuntimeJob.cancel_result_streaming#qiskit.providers.ibmq.runtime.RuntimeJob.cancel_result_streaming "qiskit.providers.ibmq.runtime.RuntimeJob.cancel_result_streaming") | Cancel result streaming.                                                            |
| [`error_message`](qiskit.providers.ibmq.runtime.RuntimeJob.error_message#qiskit.providers.ibmq.runtime.RuntimeJob.error_message "qiskit.providers.ibmq.runtime.RuntimeJob.error_message")                                         | Returns the reason if the job failed.                                               |
| [`job_id`](qiskit.providers.ibmq.runtime.RuntimeJob.job_id#qiskit.providers.ibmq.runtime.RuntimeJob.job_id "qiskit.providers.ibmq.runtime.RuntimeJob.job_id")                                                                     | Return a unique ID identifying the job.                                             |
| [`logs`](qiskit.providers.ibmq.runtime.RuntimeJob.logs#qiskit.providers.ibmq.runtime.RuntimeJob.logs "qiskit.providers.ibmq.runtime.RuntimeJob.logs")                                                                             | Return job logs.                                                                    |
| [`result`](qiskit.providers.ibmq.runtime.RuntimeJob.result#qiskit.providers.ibmq.runtime.RuntimeJob.result "qiskit.providers.ibmq.runtime.RuntimeJob.result")                                                                     | Return the results of the job.                                                      |
| [`status`](qiskit.providers.ibmq.runtime.RuntimeJob.status#qiskit.providers.ibmq.runtime.RuntimeJob.status "qiskit.providers.ibmq.runtime.RuntimeJob.status")                                                                     | Return the status of the job.                                                       |
| [`stream_results`](qiskit.providers.ibmq.runtime.RuntimeJob.stream_results#qiskit.providers.ibmq.runtime.RuntimeJob.stream_results "qiskit.providers.ibmq.runtime.RuntimeJob.stream_results")                                     | Start streaming job results.                                                        |
| [`wait_for_final_state`](qiskit.providers.ibmq.runtime.RuntimeJob.wait_for_final_state#qiskit.providers.ibmq.runtime.RuntimeJob.wait_for_final_state "qiskit.providers.ibmq.runtime.RuntimeJob.wait_for_final_state")             | Poll the job status until it progresses to a final state such as `DONE` or `ERROR`. |

## Attributes

<span id="undefined" />

### creation\_date

Job creation date in local time.

**Return type**

`Optional`\[`datetime`]

**Returns**

The job creation date as a datetime object, in local time, or `None` if creation date is not available.

<span id="undefined" />

### inputs

Job input parameters.

**Return type**

`Dict`

**Returns**

Input parameters used in this job.

<span id="undefined" />

### program\_id

Program ID.

**Return type**

`str`

**Returns**

ID of the program this job is for.
