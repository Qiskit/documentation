# qiskit.providers.aer.jobs.AerJobSet.result

`AerJobSet.result(timeout=None)`

Return the results of the jobs as a single Result object.

This call will block until all job results become available or the timeout is reached.

**Parameters**

**timeout** (`Optional`\[`float`]) – Number of seconds to wait for job results.

**Returns**

Result object

**Return type**

qiskit.Result

**Raises**

[**JobError**](qiskit.providers.JobError#qiskit.providers.JobError "qiskit.providers.JobError") – if unable to retrieve all job results before the specified timeout.
