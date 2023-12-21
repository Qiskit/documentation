# qiskit.providers.ibmq.managed.ManagedJob.submit

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
