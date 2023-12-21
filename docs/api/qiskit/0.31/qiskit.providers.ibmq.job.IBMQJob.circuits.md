# qiskit.providers.ibmq.job.IBMQJob.circuits

`IBMQJob.circuits()`

Return the circuits or pulse schedules for this job.

**Return type**

`List`\[`Union`\[`QuantumCircuit`, `Schedule`]]

**Returns**

The circuits or pulse schedules for this job. An empty list is returned if the circuits cannot be retrieved (for example, if the job uses an old format that is no longer supported).
