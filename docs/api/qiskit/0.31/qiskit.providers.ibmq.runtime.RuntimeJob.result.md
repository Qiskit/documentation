# qiskit.providers.ibmq.runtime.RuntimeJob.result

`RuntimeJob.result(timeout=None, wait=5, decoder=None)`

Return the results of the job.

**Parameters**

*   **timeout** (`Optional`\[`float`]) – Number of seconds to wait for job.
*   **wait** (`float`) – Seconds between queries.
*   **decoder** (`Optional`\[`Type`\[`ResultDecoder`]]) – A [`ResultDecoder`](qiskit.providers.ibmq.runtime.ResultDecoder#qiskit.providers.ibmq.runtime.ResultDecoder "qiskit.providers.ibmq.runtime.ResultDecoder") subclass used to decode job results.

**Return type**

`Any`

**Returns**

Runtime job result.

**Raises**

**RuntimeJobFailureError** – If the job failed.
