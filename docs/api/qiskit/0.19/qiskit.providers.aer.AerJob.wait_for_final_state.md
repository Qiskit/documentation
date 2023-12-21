---
title: wait_for_final_state
description: API reference for qiskit.providers.aer.AerJob.wait_for_final_state
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.AerJob.wait_for_final_state
---

# wait\_for\_final\_state

<span id="qiskit.providers.aer.AerJob.wait_for_final_state" />

`AerJob.wait_for_final_state(timeout=None, wait=5, callback=None)`

Poll the job status until it progresses to a final state such as `DONE` or `ERROR`.

**Parameters**

*   **timeout** (`Optional`\[`float`]) – Seconds to wait for the job. If `None`, wait indefinitely.

*   **wait** (`float`) – Seconds between queries.

*   **callback** (`Optional`\[`Callable`]) –

    Callback function invoked after each query. The following positional arguments are provided to the callback function:

    *   job\_id: Job ID
    *   job\_status: Status of the job from the last query
    *   job: This BaseJob instance

    Note: different subclass might provide different arguments to the callback function.

**Raises**

[**JobTimeoutError**](qiskit.providers.JobTimeoutError "qiskit.providers.JobTimeoutError") – If the job does not reach a final state before the specified timeout.

**Return type**

`None`

