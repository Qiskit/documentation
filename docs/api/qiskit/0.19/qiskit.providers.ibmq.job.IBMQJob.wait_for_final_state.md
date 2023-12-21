---
title: wait_for_final_state
description: API reference for qiskit.providers.ibmq.job.IBMQJob.wait_for_final_state
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.job.IBMQJob.wait_for_final_state
---

# wait\_for\_final\_state

<span id="qiskit.providers.ibmq.job.IBMQJob.wait_for_final_state" />

`IBMQJob.wait_for_final_state(timeout=None, wait=None, callback=None)`

Wait until the job progresses to a final state such as `DONE` or `ERROR`.

**Parameters**

*   **timeout** (`Optional`\[`float`]) – Seconds to wait for the job. If `None`, wait indefinitely.

*   **wait** (`Optional`\[`float`]) – Seconds to wait between invoking the callback function. If `None`, the callback function is invoked only if job status or queue position has changed.

*   **callback** (`Optional`\[`Callable`]) –

    Callback function invoked after each querying iteration. The following positional arguments are provided to the callback function:

    > *   job\_id: Job ID
    > *   job\_status: Status of the job from the last query.
    > *   job: This `IBMQJob` instance.

    In addition, the following keyword arguments are also provided:

    > *   queue\_info: A [`QueueInfo`](qiskit.providers.ibmq.job.QueueInfo "qiskit.providers.ibmq.job.QueueInfo") instance with job queue information, or `None` if queue information is unknown or not applicable. You can use the `to_dict()` method to convert the [`QueueInfo`](qiskit.providers.ibmq.job.QueueInfo "qiskit.providers.ibmq.job.QueueInfo") instance to a dictionary, if desired.

**Raises**

[**IBMQJobTimeoutError**](qiskit.providers.ibmq.job.IBMQJobTimeoutError "qiskit.providers.ibmq.job.IBMQJobTimeoutError") – if the job does not reach a final state before the specified timeout.

**Return type**

`None`

