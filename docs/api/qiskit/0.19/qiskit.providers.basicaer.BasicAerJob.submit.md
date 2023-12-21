---
title: submit
description: API reference for qiskit.providers.basicaer.BasicAerJob.submit
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.basicaer.BasicAerJob.submit
---

# submit

<span id="qiskit.providers.basicaer.BasicAerJob.submit" />

`BasicAerJob.submit()`

Submit the job to the backend for execution.

**Raises**

*   **QobjValidationError** – if the JSON serialization of the Qobj passed
*   **during construction does not validate against the Qobj schema.** –
*   [**JobError**](qiskit.providers.JobError "qiskit.providers.JobError") – if trying to re-submit the job.

