# qiskit.providers.ibmq.IBMQBackend.run

`IBMQBackend.run(circuits, job_name=None, job_share_level=None, job_tags=None, experiment_id=None, header=None, shots=None, memory=None, qubit_lo_freq=None, meas_lo_freq=None, schedule_los=None, meas_level=None, meas_return=None, memory_slots=None, memory_slot_size=None, rep_time=None, rep_delay=None, init_qubits=None, parameter_binds=None, use_measure_esp=None, **run_config)`

Run on the backend.

If a keyword specified here is also present in the `options` attribute/object, the value specified here will be used for this run.

**Parameters**

*   **circuits** (`Union`\[`QasmQobj`, `PulseQobj`, `QuantumCircuit`, `Schedule`, `List`\[`Union`\[`QuantumCircuit`, `Schedule`]]]) – An individual or a list of `QuantumCircuit` or [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") objects to run on the backend. A [`QasmQobj`](qiskit.qobj.QasmQobj#qiskit.qobj.QasmQobj "qiskit.qobj.QasmQobj") or a [`PulseQobj`](qiskit.qobj.PulseQobj#qiskit.qobj.PulseQobj "qiskit.qobj.PulseQobj") object is also supported but is deprecated.

*   **job\_name** (`Optional`\[`str`]) – Custom name to be assigned to the job. This job name can subsequently be used as a filter in the [`jobs()`](qiskit.providers.ibmq.IBMQBackend.jobs#qiskit.providers.ibmq.IBMQBackend.jobs "qiskit.providers.ibmq.IBMQBackend.jobs") method. Job names do not need to be unique.

*   **job\_share\_level** (`Optional`\[`str`]) –

    Allows sharing a job at the hub, group, project, or global level. The possible job share levels are: `global`, `hub`, `group`, `project`, and `none`.

    > *   global: The job is public to any user.
    > *   hub: The job is shared between the users in the same hub.
    > *   group: The job is shared between the users in the same group.
    > *   project: The job is shared between the users in the same project.
    > *   none: The job is not shared at any level.

    If the job share level is not specified, the job is not shared at any level.

*   **job\_tags** (`Optional`\[`List`\[`str`]]) – Tags to be assigned to the job. The tags can subsequently be used as a filter in the [`jobs()`](qiskit.providers.ibmq.IBMQBackend.jobs#qiskit.providers.ibmq.IBMQBackend.jobs "qiskit.providers.ibmq.IBMQBackend.jobs") function call.

*   **experiment\_id** (`Optional`\[`str`]) – Used to add a job to an “experiment”, which is a collection of jobs and additional metadata.

*   **following arguments are NOT applicable if a Qobj is passed in.** (*The*) –

*   **header** (`Optional`\[`Dict`]) – User input that will be attached to the job and will be copied to the corresponding result header. Headers do not affect the run. This replaces the old `Qobj` header.

*   **shots** (`Optional`\[`int`]) – Number of repetitions of each circuit, for sampling. Default: 4000 or `max_shots` from the backend configuration, whichever is smaller.

*   **memory** (`Optional`\[`bool`]) – If `True`, per-shot measurement bitstrings are returned as well (provided the backend supports it). For OpenPulse jobs, only measurement level 2 supports this option.

*   **qubit\_lo\_freq** (`Optional`\[`List`\[`int`]]) – List of default qubit LO frequencies in Hz. Will be overridden by `schedule_los` if set.

*   **meas\_lo\_freq** (`Optional`\[`List`\[`int`]]) – List of default measurement LO frequencies in Hz. Will be overridden by `schedule_los` if set.

*   **schedule\_los** (`Union`\[`List`\[`Union`\[`Dict`\[`PulseChannel`, `float`], `LoConfig`]], `Dict`\[`PulseChannel`, `float`], `LoConfig`, `None`]) – Experiment LO configurations, frequencies are given in Hz.

*   **meas\_level** (`Union`\[`int`, `MeasLevel`, `None`]) – Set the appropriate level of the measurement output for pulse experiments.

*   **meas\_return** (`Union`\[`str`, `MeasReturnType`, `None`]) –

    Level of measurement data for the backend to return.

    **For `meas_level` 0 and 1:**

    *   `single` returns information from every shot.
    *   `avg` returns average measurement output (averaged over number of shots).

*   **memory\_slots** (`Optional`\[`int`]) – Number of classical memory slots to use.

*   **memory\_slot\_size** (`Optional`\[`int`]) – Size of each memory slot if the output is Level 0.

*   **rep\_time** (`Optional`\[`int`]) – Time per program execution in seconds. Must be from the list provided by the backend (`backend.configuration().rep_times`). Defaults to the first entry.

*   **rep\_delay** (`Optional`\[`float`]) – Delay between programs in seconds. Only supported on certain backends (if `backend.configuration().dynamic_reprate_enabled=True`). If supported, `rep_delay` will be used instead of `rep_time` and must be from the range supplied by the backend (`backend.configuration().rep_delay_range`). Default is given by `backend.configuration().default_rep_delay`.

*   **init\_qubits** (`Optional`\[`bool`]) – Whether to reset the qubits to the ground state for each shot. Default: `True`.

*   **parameter\_binds** (`Optional`\[`List`\[`Dict`\[`Parameter`, `float`]]]) – List of Parameter bindings over which the set of experiments will be executed. Each list element (bind) should be of the form \{Parameter1: value1, Parameter2: value2, …}. All binds will be executed across all experiments; e.g., if parameter\_binds is a length-n list, and there are m experiments, a total of m x n experiments will be run (one for each experiment/bind pair).

*   **use\_measure\_esp** (`Optional`\[`bool`]) – Whether to use excited state promoted (ESP) readout for measurements which are the terminal instruction to a qubit. ESP readout can offer higher fidelity than standard measurement sequences. See [here](https://arxiv.org/pdf/2008.08571.pdf). Default: `True` if backend supports ESP readout, else `False`. Backend support for ESP readout is determined by the flag `measure_esp_enabled` in `backend.configuration()`.

*   **\*\*run\_config** – Extra arguments used to configure the run.

**Return type**

`IBMQJob`

**Returns**

The job to be executed.

**Raises**

*   [**IBMQBackendApiError**](qiskit.providers.ibmq.IBMQBackendApiError#qiskit.providers.ibmq.IBMQBackendApiError "qiskit.providers.ibmq.IBMQBackendApiError") – If an unexpected error occurred while submitting the job.

*   [**IBMQBackendApiProtocolError**](qiskit.providers.ibmq.IBMQBackendApiProtocolError#qiskit.providers.ibmq.IBMQBackendApiProtocolError "qiskit.providers.ibmq.IBMQBackendApiProtocolError") – If an unexpected value received from the server.

*   [**IBMQBackendValueError**](qiskit.providers.ibmq.IBMQBackendValueError#qiskit.providers.ibmq.IBMQBackendValueError "qiskit.providers.ibmq.IBMQBackendValueError") –

    *   If an input parameter value is not valid. - If ESP readout is used and the backend does not support this.
