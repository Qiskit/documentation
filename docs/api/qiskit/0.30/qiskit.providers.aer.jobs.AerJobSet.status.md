# qiskit.providers.aer.jobs.AerJobSet.status

`AerJobSet.status(worker)`

Return the status of each job in this set.

## Args

worker: Worker id. When None, all workers’ statuses are returned.

**Return type**

`Union`\[`JobStatus`, `List`\[`JobStatus`]]

**Returns**

A list of job statuses.
