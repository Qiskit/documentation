---
title: result
description: API reference for qiskit.providers.ibmq.managed.ManagedJob.result
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.managed.ManagedJob.result
---

# result

<span id="qiskit.providers.ibmq.managed.ManagedJob.result" />

`ManagedJob.result(timeout=None, partial=False)`

Return the result of the job.

**Parameters**

*   **timeout** (`Optional`\[`float`]) – Number of seconds to wait for job.
*   **partial** (`bool`) – If `True`, attempt to retrieve partial job results.

**Return type**

`Optional`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result")]

**Returns**

Job result or `None` if result could not be retrieved.

**Raises**

[**IBMQJobTimeoutError**](qiskit.providers.ibmq.job.IBMQJobTimeoutError "qiskit.providers.ibmq.job.IBMQJobTimeoutError") – If the job does not return results before a specified timeout.

