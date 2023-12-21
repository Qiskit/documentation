# qiskit.providers.ibmq.job.IBMQJob.queue\_info

`IBMQJob.queue_info()`

Return queue information for this job.

The queue information may include queue position, estimated start and end time, and dynamic priorities for the hub, group, and project. See [`QueueInfo`](qiskit.providers.ibmq.job.QueueInfo#qiskit.providers.ibmq.job.QueueInfo "qiskit.providers.ibmq.job.QueueInfo") for more information.

<Admonition title="Note" type="note">
  The queue information is calculated after the job enters the queue. Therefore, some or all of the information may not be immediately available, and this method may return `None`.
</Admonition>

**Return type**

`Optional`\[`QueueInfo`]

**Returns**

A [`QueueInfo`](qiskit.providers.ibmq.job.QueueInfo#qiskit.providers.ibmq.job.QueueInfo "qiskit.providers.ibmq.job.QueueInfo") instance that contains queue information for this job, or `None` if queue information is unknown or not applicable.
