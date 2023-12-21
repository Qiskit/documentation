# qiskit.providers.aer.jobs.AerJobSet.worker\_job

`AerJobSet.worker_job(worker)`

Retrieve the job specified with job’s id

**Parameters**

**worker** (`Union`\[`None`, `int`, `Iterable`\[`int`]]) – retrive job used to submit with this job id.

**Return type**

`Union`\[`AerJob`, `List`\[`AerJob`]]

**Returns**

A list of `AerJob` instances that represents the submitted jobs.

**Raises**

[**JobError**](qiskit.providers.JobError#qiskit.providers.JobError "qiskit.providers.JobError") – If the job for the experiment could not be found.
