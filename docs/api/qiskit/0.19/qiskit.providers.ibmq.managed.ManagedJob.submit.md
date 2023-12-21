---
title: submit
description: API reference for qiskit.providers.ibmq.managed.ManagedJob.submit
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.managed.ManagedJob.submit
---

# submit

<span id="qiskit.providers.ibmq.managed.ManagedJob.submit" />

`ManagedJob.submit(qobj, job_name, backend, executor, submit_lock, job_share_level, job_tags=None)`

Submit the job.

**Parameters**

*   **qobj** (`Union`\[[`QasmQobj`](qiskit.qobj.QasmQobj "qiskit.qobj.qasm_qobj.QasmQobj"), [`PulseQobj`](qiskit.qobj.PulseQobj "qiskit.qobj.pulse_qobj.PulseQobj")]) – Qobj to run.
*   **job\_name** (`str`) – Name of the job.
*   **backend** ([`IBMQBackend`](qiskit.providers.ibmq.IBMQBackend "qiskit.providers.ibmq.ibmqbackend.IBMQBackend")) – Backend to execute the experiments on.
*   **executor** (`ThreadPoolExecutor`) – The thread pool used to submit the job.
*   **submit\_lock** (`allocate_lock`) – Lock used to synchronize job submission.
*   **job\_share\_level** (`ApiJobShareLevel`) – Job share level.
*   **job\_tags** (`Optional`\[`List`\[`str`]]) – Tags to be assigned to the job.

**Return type**

`None`

