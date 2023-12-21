---
title: cancel
description: API reference for qiskit.providers.ibmq.job.IBMQJob.cancel
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.job.IBMQJob.cancel
---

# cancel

<span id="qiskit.providers.ibmq.job.IBMQJob.cancel" />

`IBMQJob.cancel()`

Attempt to cancel the job.

<Admonition title="Note" type="note">
  Depending on the state the job is in, it might be impossible to cancel the job.
</Admonition>

**Return type**

`bool`

**Returns**

`True` if the job is cancelled, else `False`.

**Raises**

[**IBMQJobApiError**](qiskit.providers.ibmq.job.IBMQJobApiError "qiskit.providers.ibmq.job.IBMQJobApiError") – If an unexpected error occurred when communicating with the server.

