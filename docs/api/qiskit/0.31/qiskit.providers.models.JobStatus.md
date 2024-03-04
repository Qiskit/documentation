---
title: JobStatus
description: API reference for qiskit.providers.models.JobStatus
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.models.JobStatus
---

# JobStatus

<span id="qiskit.providers.models.JobStatus" />

`JobStatus(job_id, status, status_msg, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/providers/models/jobstatus.py "view source code")

Bases: `object`

Model for JobStatus.

<span id="qiskit.providers.models.JobStatus.job_id" />

### job\_id

backend job\_id.

**Type**

str

<span id="qiskit.providers.models.JobStatus.status" />

### status

status of the job.

**Type**

str

<span id="qiskit.providers.models.JobStatus.status_msg" />

### status\_msg

status message.

**Type**

str

## Methods

### from\_dict

<span id="qiskit.providers.models.JobStatus.from_dict" />

`classmethod JobStatus.from_dict(data)`

Create a new JobStatus object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the JobStatus to create. It will be in the same format as output by [`to_dict()`](qiskit.providers.models.JobStatus#to_dict "qiskit.providers.models.JobStatus.to_dict").

**Returns**

**The `JobStatus` from the input**

dictionary.

**Return type**

qiskit.providers.model.JobStatus

### to\_dict

<span id="qiskit.providers.models.JobStatus.to_dict" />

`JobStatus.to_dict()`

Return a dictionary format representation of the JobStatus.

**Returns**

The dictionary form of the JobStatus.

**Return type**

dict

