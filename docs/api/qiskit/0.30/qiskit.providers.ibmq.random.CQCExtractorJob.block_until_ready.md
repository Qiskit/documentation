# qiskit.providers.ibmq.random.CQCExtractorJob.block\_until\_ready

`CQCExtractorJob.block_until_ready(timeout=None, wait=10)`

Wait for the job to finish and return the result.

**Parameters**

*   **timeout** (`Optional`\[`float`]) – Seconds to wait for the job. If `None`, wait indefinitely.
*   **wait** (`float`) – Seconds between queries. Use a larger number if the job is expected to run for a long time.

**Return type**

`List`\[`int`]

**Returns**

Extractor output.

**Raises**

[**JobTimeoutError**](qiskit.providers.JobTimeoutError#qiskit.providers.JobTimeoutError "qiskit.providers.JobTimeoutError") – If the job does not finish before the specified timeout.
