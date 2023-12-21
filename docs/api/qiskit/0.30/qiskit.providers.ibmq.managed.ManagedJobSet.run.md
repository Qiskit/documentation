# qiskit.providers.ibmq.managed.ManagedJobSet.run

`ManagedJobSet.run(experiment_list, backend, executor, job_share_level=None, job_tags=None, **run_config)`

Execute a list of circuits or pulse schedules on a backend.

**Parameters**

*   **experiment\_list** (`Union`\[`List`\[`List`\[`QuantumCircuit`]], `List`\[`List`\[`Schedule`]]]) – Circuit(s) or pulse schedule(s) to execute.
*   **backend** (`IBMQBackend`) – Backend to execute the experiments on.
*   **executor** (`ThreadPoolExecutor`) – The thread pool used to submit jobs asynchronously.
*   **job\_share\_level** (`Optional`\[`ApiJobShareLevel`]) – Job share level.
*   **job\_tags** (`Optional`\[`List`\[`str`]]) – Tags to be assigned to the job.
*   **run\_config** (`Any`) – Additional arguments used to configure the Qobj assembly. Refer to the [`qiskit.compiler.assemble()`](qiskit.compiler.assemble#qiskit.compiler.assemble "qiskit.compiler.assemble") documentation for details on these arguments.

**Raises**

[**IBMQJobManagerInvalidStateError**](qiskit.providers.ibmq.managed.IBMQJobManagerInvalidStateError#qiskit.providers.ibmq.managed.IBMQJobManagerInvalidStateError "qiskit.providers.ibmq.managed.IBMQJobManagerInvalidStateError") – If the jobs were already submitted.

**Return type**

`None`
