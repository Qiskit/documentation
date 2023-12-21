---
title: queue_info
description: API reference for qiskit.providers.ibmq.job.IBMQJob.queue_info
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.job.IBMQJob.queue_info
---

# queue\_info

<span id="qiskit.providers.ibmq.job.IBMQJob.queue_info" />

`IBMQJob.queue_info()`

Return queue information for this job.

The queue information may include queue position, estimated start and end time, and dynamic priorities for the hub, group, and project. See [`QueueInfo`](qiskit.providers.ibmq.job.QueueInfo "qiskit.providers.ibmq.job.QueueInfo") for more information.

<Admonition title="Note" type="note">
  Even if the job is queued, some of its queue information may not be immediately available.
</Admonition>

**Return type**

`Optional`\[[`QueueInfo`](qiskit.providers.ibmq.job.QueueInfo "qiskit.providers.ibmq.job.queueinfo.QueueInfo")]

**Returns**

A [`QueueInfo`](qiskit.providers.ibmq.job.QueueInfo "qiskit.providers.ibmq.job.QueueInfo") instance that contains queue information for this job, or `None` if queue information is unknown or not applicable.

