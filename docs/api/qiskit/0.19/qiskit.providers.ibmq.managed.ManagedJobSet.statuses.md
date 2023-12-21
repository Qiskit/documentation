---
title: statuses
description: API reference for qiskit.providers.ibmq.managed.ManagedJobSet.statuses
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.managed.ManagedJobSet.statuses
---

# statuses

<span id="qiskit.providers.ibmq.managed.ManagedJobSet.statuses" />

`ManagedJobSet.statuses()`

Return the status of each job in this set.

**Return type**

`List`\[`Optional`\[[`JobStatus`](qiskit.providers.JobStatus "qiskit.providers.jobstatus.JobStatus")]]

**Returns**

A list of job statuses. An entry in the list is `None` if the job status could not be retrieved due to a server error.

