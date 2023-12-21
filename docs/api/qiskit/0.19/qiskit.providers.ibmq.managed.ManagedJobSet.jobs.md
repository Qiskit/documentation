---
title: jobs
description: API reference for qiskit.providers.ibmq.managed.ManagedJobSet.jobs
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.managed.ManagedJobSet.jobs
---

# jobs

<span id="qiskit.providers.ibmq.managed.ManagedJobSet.jobs" />

`ManagedJobSet.jobs()`

Return jobs in this job set.

**Return type**

`List`\[`Optional`\[[`IBMQJob`](qiskit.providers.ibmq.job.IBMQJob "qiskit.providers.ibmq.job.ibmqjob.IBMQJob")]]

**Returns**

A list of [`IBMQJob`](qiskit.providers.ibmq.job.IBMQJob "qiskit.providers.ibmq.job.IBMQJob") instances that represents the submitted jobs. An entry in the list is `None` if the job failed to be submitted.

