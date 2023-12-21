# qiskit.providers.ibmq.managed.IBMQJobManager.run

`IBMQJobManager.run(experiments, backend, name=None, max_experiments_per_job=None, job_share_level=None, job_tags=None, **run_config)`

Execute a set of circuits or pulse schedules on a backend.

The circuits or schedules will be split into multiple jobs. Circuits or schedules in a job will be executed together in each shot.

**Parameters**

*   **experiments** (`Union`\[`QuantumCircuit`, `Schedule`, `List`\[`QuantumCircuit`], `List`\[`Schedule`]]) – Circuit(s) or pulse schedule(s) to execute.

*   **backend** (`IBMQBackend`) – Backend to execute the experiments on.

*   **name** (`Optional`\[`str`]) – Name for this set of jobs. Each job within the set will have a job name that consists of the set name followed by a suffix. If not specified, the current date and time is used.

*   **max\_experiments\_per\_job** (`Optional`\[`int`]) – Maximum number of experiments to run in each job. If not specified, the default is to use the maximum allowed by the backend. If the specified value is greater the maximum allowed by the backend, the default is used.

*   **job\_share\_level** (`Optional`\[`str`]) – Allow sharing the jobs at the hub, group, project, or global level. The level can be one of: `global`, `hub`, `group`, `project`, and `none`.

*   **job\_tags** (`Optional`\[`List`\[`str`]]) – Tags to be assigned to the jobs. The tags can subsequently be used as a filter in the `IBMQBackend.jobs()` function call.

*   **run\_config** (`Any`) –

    Configuration of the runtime environment. Some examples of these configuration parameters include: `qobj_id`, `qobj_header`, `shots`, `memory`, `seed_simulator`, `qubit_lo_freq`, `meas_lo_freq`, `qubit_lo_range`, `meas_lo_range`, `schedule_los`, `meas_level`, `meas_return`, `meas_map`, `memory_slot_size`, `rep_time`, and `parameter_binds`.

    Refer to the documentation on [`qiskit.compiler.assemble()`](qiskit.compiler.assemble#qiskit.compiler.assemble "qiskit.compiler.assemble") for details on these arguments.

**Return type**

`ManagedJobSet`

**Returns**

A [`ManagedJobSet`](qiskit.providers.ibmq.managed.ManagedJobSet#qiskit.providers.ibmq.managed.ManagedJobSet "qiskit.providers.ibmq.managed.ManagedJobSet") instance representing the set of jobs for the experiments.

**Raises**

[**IBMQJobManagerInvalidStateError**](qiskit.providers.ibmq.managed.IBMQJobManagerInvalidStateError#qiskit.providers.ibmq.managed.IBMQJobManagerInvalidStateError "qiskit.providers.ibmq.managed.IBMQJobManagerInvalidStateError") – If an input parameter value is not valid.
