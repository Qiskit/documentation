---
title: status
description: API reference for qiskit.providers.basicaer.BasicAerJob.status
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.basicaer.BasicAerJob.status
---

# status

<span id="qiskit.providers.basicaer.BasicAerJob.status" />

`BasicAerJob.status()`

Gets the status of the job by querying the Python’s future

**Returns**

The current JobStatus

**Return type**

[qiskit.providers.JobStatus](qiskit.providers.JobStatus "qiskit.providers.JobStatus")

**Raises**

*   [**JobError**](qiskit.providers.JobError "qiskit.providers.JobError") – If the future is in unexpected state
*   **concurrent.futures.TimeoutError** – if timeout occurred.

