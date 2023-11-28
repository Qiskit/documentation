# CQCExtractorJob[¶](#cqcextractorjob "Permalink to this headline")

<span id="undefined" />

`CQCExtractorJob(job_id, client, parameters=None)`

Bases: `object`

Representation of an asynchronous call to the CQC extractor.

An instance of this class is returned when you call [`run_async_ext1()`](qiskit.providers.ibmq.random.CQCExtractor.run_async_ext1#qiskit.providers.ibmq.random.CQCExtractor.run_async_ext1 "qiskit.providers.ibmq.random.CQCExtractor.run_async_ext1"), [`run_async_ext2()`](qiskit.providers.ibmq.random.CQCExtractor.run_async_ext2#qiskit.providers.ibmq.random.CQCExtractor.run_async_ext2 "qiskit.providers.ibmq.random.CQCExtractor.run_async_ext2"), or [`retrieve_job()`](qiskit.providers.ibmq.random.CQCExtractor.retrieve_job#qiskit.providers.ibmq.random.CQCExtractor.retrieve_job "qiskit.providers.ibmq.random.CQCExtractor.retrieve_job") method of the [`CQCExtractor`](qiskit.providers.ibmq.random.CQCExtractor#qiskit.providers.ibmq.random.CQCExtractor "qiskit.providers.ibmq.random.CQCExtractor") class.

If the job is successfully submitted, you can inspect the job’s status by calling [`status()`](qiskit.providers.ibmq.random.CQCExtractorJob.status#qiskit.providers.ibmq.random.CQCExtractorJob.status "qiskit.providers.ibmq.random.CQCExtractorJob.status").

Some of the methods in this class are blocking, which means control may not be returned immediately. [`block_until_ready()`](qiskit.providers.ibmq.random.CQCExtractorJob.block_until_ready#qiskit.providers.ibmq.random.CQCExtractorJob.block_until_ready "qiskit.providers.ibmq.random.CQCExtractorJob.block_until_ready") is an example of a blocking method, which waits until the job completes:

```python
job = extractor.run_async_ext1(...)
random_bits = job.block_until_ready()
```

<Admonition title="Note" type="note">
  An error may occur when querying the remote server to get job information. The most common errors are temporary network failures and server errors, in which case an `RequestsApiError` is raised. These errors usually clear quickly, so retrying the operation is likely to succeed.
</Admonition>

CQCExtractorJob constructor.

**Parameters**

*   **job\_id** (`str`) – Job ID.
*   **client** (`RandomClient`) – Object for connecting to the server.
*   **parameters** (`Optional`\[`Dict`]) – Parameters used for this job.

## Methods

|                                                                                                                                                                                                                       |                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [`block_until_ready`](qiskit.providers.ibmq.random.CQCExtractorJob.block_until_ready#qiskit.providers.ibmq.random.CQCExtractorJob.block_until_ready "qiskit.providers.ibmq.random.CQCExtractorJob.block_until_ready") | Wait for the job to finish and return the result. |
| [`status`](qiskit.providers.ibmq.random.CQCExtractorJob.status#qiskit.providers.ibmq.random.CQCExtractorJob.status "qiskit.providers.ibmq.random.CQCExtractorJob.status")                                             | Query the server for the latest job status.       |

## Attributes

<span id="undefined" />

### extractor\_method

Return the extractor method used.

**Return type**

`str`

**Returns**

Extractor method used.

<span id="undefined" />

### parameters

Return the parameters passed to the extractor.

**Return type**

`Dict`

**Returns**

Parameters passed to the extractor.
