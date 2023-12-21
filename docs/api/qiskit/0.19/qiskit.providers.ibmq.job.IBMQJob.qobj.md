---
title: qobj
description: API reference for qiskit.providers.ibmq.job.IBMQJob.qobj
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.job.IBMQJob.qobj
---

# qobj

<span id="qiskit.providers.ibmq.job.IBMQJob.qobj" />

`IBMQJob.qobj()`

Return the Qobj for this job.

**Return type**

`Union`\[[`QasmQobj`](qiskit.qobj.QasmQobj "qiskit.qobj.qasm_qobj.QasmQobj"), [`PulseQobj`](qiskit.qobj.PulseQobj "qiskit.qobj.pulse_qobj.PulseQobj"), `None`]

**Returns**

The Qobj for this job, or `None` if the job does not have a Qobj.

**Raises**

[**IBMQJobApiError**](qiskit.providers.ibmq.job.IBMQJobApiError "qiskit.providers.ibmq.job.IBMQJobApiError") – If an unexpected error occurred when retrieving job information from the server.

