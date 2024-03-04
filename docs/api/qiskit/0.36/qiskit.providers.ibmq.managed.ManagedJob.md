---
title: ManagedJob
description: API reference for qiskit.providers.ibmq.managed.ManagedJob
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.managed.ManagedJob
---

# ManagedJob

<span id="qiskit.providers.ibmq.managed.ManagedJob" />

`ManagedJob(start_index, experiments_count, job=None)` [GitHub](https://github.com/qiskit/qiskit-ibmq-provider/tree/stable/0.19/qiskit/providers/ibmq/managed/managedjob.py "view source code")

Bases: `object`

Job managed by the Job Manager.

ManagedJob constructor.

**Parameters**

*   **start\_index** (`int`) – Starting index of the experiment set.
*   **experiments\_count** (`int`) – Number of experiments.
*   **job** (`Optional`\[`IBMQJob`]) – Job to be managed, or `None` if not already known.

## Methods

### cancel

<span id="qiskit.providers.ibmq.managed.ManagedJob.cancel" />

`ManagedJob.cancel()`

Attempt to cancel the job.

**Return type**

`None`

### error\_message

<span id="qiskit.providers.ibmq.managed.ManagedJob.error_message" />

`ManagedJob.error_message()`

Provide details about the reason of failure.

**Return type**

`Optional`\[`str`]

**Returns**

An error report if the job failed or `None` otherwise.

### qobj

<span id="qiskit.providers.ibmq.managed.ManagedJob.qobj" />

`ManagedJob.qobj()`

Return the Qobj for this job.

**Return type**

`Union`\[`QasmQobj`, `PulseQobj`, `None`]

**Returns**

The Qobj for this job or `None` if the Qobj could not be retrieved.

### result

<span id="qiskit.providers.ibmq.managed.ManagedJob.result" />

`ManagedJob.result(timeout=None, partial=False, refresh=False)`

Return the result of the job.

**Parameters**

*   **timeout** (`Optional`\[`float`]) – Number of seconds to wait for job.
*   **partial** (`bool`) – If `True`, attempt to retrieve partial job results.
*   **refresh** (`bool`) – If `True`, re-query the server for the result. Otherwise return the cached value.

**Return type**

`Optional`\[`Result`]

**Returns**

Job result or `None` if result could not be retrieved.

**Raises**

[**IBMQJobTimeoutError**](qiskit.providers.ibmq.job.IBMQJobTimeoutError "qiskit.providers.ibmq.job.IBMQJobTimeoutError") – If the job does not return results before a specified timeout.

### status

<span id="qiskit.providers.ibmq.managed.ManagedJob.status" />

`ManagedJob.status()`

Query the server for job status.

**Return type**

`Optional`\[`JobStatus`]

**Returns**

Current job status, or `None` if an error occurred.

### submit

<span id="qiskit.providers.ibmq.managed.ManagedJob.submit" />

`ManagedJob.submit(circuits, job_name, backend, executor, submit_lock, job_share_level=None, job_tags=None, **run_config)`

Submit the job.

**Parameters**

*   **circuits** (`Union`\[`QuantumCircuit`, `Schedule`, `List`\[`Union`\[`QuantumCircuit`, `Schedule`]]]) – Circuits to run.
*   **job\_name** (`str`) – Name of the job.
*   **backend** (`IBMQBackend`) – Backend to execute the experiments on.
*   **executor** (`ThreadPoolExecutor`) – The thread pool used to submit the job.
*   **submit\_lock** (`allocate_lock`) – Lock used to synchronize job submission.
*   **job\_share\_level** (`Optional`\[`ApiJobShareLevel`]) – Job share level.
*   **job\_tags** (`Optional`\[`List`\[`str`]]) – Tags to be assigned to the job.
*   **\*\*run\_config** – Extra arguments used to configure the run.

**Return type**

`None`

