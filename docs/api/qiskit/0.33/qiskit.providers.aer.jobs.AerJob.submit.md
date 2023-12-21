# qiskit.providers.aer.jobs.AerJob.submit

`AerJob.submit()`

Submit the job to the backend for execution.

**Raises**

*   **QobjValidationError** – if the JSON serialization of the Qobj passed
*   **during construction does not validate against the Qobj schema.** –
*   [**JobError**](qiskit.providers.JobError#qiskit.providers.JobError "qiskit.providers.JobError") – if trying to re-submit the job.
