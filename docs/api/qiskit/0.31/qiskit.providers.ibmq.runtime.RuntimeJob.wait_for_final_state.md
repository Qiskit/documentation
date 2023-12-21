# qiskit.providers.ibmq.runtime.RuntimeJob.wait\_for\_final\_state

`RuntimeJob.wait_for_final_state(timeout=None, wait=5)`

Poll the job status until it progresses to a final state such as `DONE` or `ERROR`.

**Parameters**

*   **timeout** (`Optional`\[`float`]) – Seconds to wait for the job. If `None`, wait indefinitely.
*   **wait** (`float`) – Seconds between queries.

**Raises**

[**JobTimeoutError**](qiskit.providers.JobTimeoutError#qiskit.providers.JobTimeoutError "qiskit.providers.JobTimeoutError") – If the job does not reach a final state before the specified timeout.

**Return type**

`None`
