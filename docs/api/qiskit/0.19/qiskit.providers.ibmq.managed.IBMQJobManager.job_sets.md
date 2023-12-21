---
title: job_sets
description: API reference for qiskit.providers.ibmq.managed.IBMQJobManager.job_sets
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.managed.IBMQJobManager.job_sets
---

# job\_sets

<span id="qiskit.providers.ibmq.managed.IBMQJobManager.job_sets" />

`IBMQJobManager.job_sets(name=None)`

Return job sets being managed in this session, subject to optional filtering.

**Parameters**

**name** (`Optional`\[`str`]) – Name of the managed job sets.

**Return type**

`List`\[[`ManagedJobSet`](qiskit.providers.ibmq.managed.ManagedJobSet "qiskit.providers.ibmq.managed.managedjobset.ManagedJobSet")]

**Returns**

A list of managed job sets that match the filter.

