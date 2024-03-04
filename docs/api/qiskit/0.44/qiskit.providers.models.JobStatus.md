---
title: JobStatus
description: API reference for qiskit.providers.models.JobStatus
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.models.JobStatus
---

# JobStatus

<span id="qiskit.providers.models.JobStatus" />

`qiskit.providers.models.JobStatus(job_id, status, status_msg, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/providers/models/jobstatus.py "view source code")

Bases: [`object`](https://docs.python.org/3/library/functions.html#object "(in Python v3.12)")

Model for JobStatus.

<span id="qiskit.providers.models.JobStatus.job_id" />

### job\_id

backend job\_id.

**Type**

[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")

<span id="qiskit.providers.models.JobStatus.status" />

### status

status of the job.

**Type**

[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")

<span id="qiskit.providers.models.JobStatus.status_msg" />

### status\_msg

status message.

**Type**

[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")

## Methods

### from\_dict

<span id="qiskit.providers.models.JobStatus.from_dict" />

`classmethod from_dict(data)`

Create a new JobStatus object from a dictionary.

**Parameters**

**data** ([*dict*](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")) – A dictionary representing the JobStatus to create. It will be in the same format as output by [`to_dict()`](#qiskit.providers.models.JobStatus.to_dict "qiskit.providers.models.JobStatus.to_dict").

**Returns**

**The `JobStatus` from the input**

dictionary.

**Return type**

qiskit.providers.model.JobStatus

### to\_dict

<span id="qiskit.providers.models.JobStatus.to_dict" />

`to_dict()`

Return a dictionary format representation of the JobStatus.

**Returns**

The dictionary form of the JobStatus.

**Return type**

[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")

