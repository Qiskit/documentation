# qiskit.providers.ibmq.job.IBMQJob.scheduling\_mode

`IBMQJob.scheduling_mode()`

Return the scheduling mode the job is in.

The scheduling mode indicates how the job is scheduled to run. For example, `fairshare` indicates the job is scheduled using a fairshare algorithm.

This information is only available if the job status is `RUNNING` or `DONE`.

**Return type**

`Optional`\[`str`]

**Returns**

The scheduling mode the job is in or `None` if the information is not available.
