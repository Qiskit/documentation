# qiskit.providers.aer.jobs.AerJobSet.worker\_results

`AerJobSet.worker_results(worker, timeout=None)`

Return the result of the jobs specified with worker\_id.

When the worker is None, this call return all worker’s result.

**Parameters**

*   **worker** (`Union`\[`None`, `int`, `Iterable`\[`int`]]) – Worker id to wait for job result.
*   **timeout** (`Optional`\[`float`]) – Number of seconds to wait for job results.

**Returns**

Result object instance that can be used to retrieve results for individual experiments.

**Return type**

qiskit.Result

**Raises**

[**JobError**](qiskit.providers.JobError#qiskit.providers.JobError "qiskit.providers.JobError") – if unable to retrieve all job results before the specified timeout.
