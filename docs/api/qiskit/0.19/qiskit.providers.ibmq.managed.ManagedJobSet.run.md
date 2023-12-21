---
title: run
description: API reference for qiskit.providers.ibmq.managed.ManagedJobSet.run
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.managed.ManagedJobSet.run
---

# run

<span id="qiskit.providers.ibmq.managed.ManagedJobSet.run" />

`ManagedJobSet.run(experiment_list, backend, executor, job_share_level, job_tags=None, **assemble_config)`

Execute a list of circuits or pulse schedules on a backend.

**Parameters**

*   **experiment\_list** (`Union`\[`List`\[`List`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")]], `List`\[`List`\[[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")]]]) – Circuit(s) or pulse schedule(s) to execute.
*   **backend** ([`IBMQBackend`](qiskit.providers.ibmq.IBMQBackend "qiskit.providers.ibmq.ibmqbackend.IBMQBackend")) – Backend to execute the experiments on.
*   **executor** (`ThreadPoolExecutor`) – The thread pool used to submit jobs asynchronously.
*   **job\_share\_level** (`ApiJobShareLevel`) – Job share level.
*   **job\_tags** (`Optional`\[`List`\[`str`]]) – Tags to be assigned to the job.
*   **assemble\_config** (`Any`) – Additional arguments used to configure the Qobj assembly. Refer to the [`qiskit.compiler.assemble()`](qiskit.compiler.assemble "qiskit.compiler.assemble") documentation for details on these arguments.

**Raises**

[**IBMQJobManagerInvalidStateError**](qiskit.providers.ibmq.managed.IBMQJobManagerInvalidStateError "qiskit.providers.ibmq.managed.IBMQJobManagerInvalidStateError") – If the jobs were already submitted.

**Return type**

`None`

