# qiskit.providers.BackendV1.run

`abstract BackendV1.run(run_input, **options)`

Run on the backend.

This method that will return a [`Job`](qiskit.providers.Job#qiskit.providers.Job "qiskit.providers.Job") object that run circuits. Depending on the backend this may be either an async or sync call. It is the discretion of the provider to decide whether running should block until the execution is finished or not. The Job class can handle either situation.

**Parameters**

*   **run\_input** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")  *or*[*Schedule*](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") *or list*) – An individual or a list of `QuantumCircuit` or [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") objects to run on the backend. For legacy providers migrating to the new versioned providers, provider interface a [`QasmQobj`](qiskit.qobj.QasmQobj#qiskit.qobj.QasmQobj "qiskit.qobj.QasmQobj") or [`PulseQobj`](qiskit.qobj.PulseQobj#qiskit.qobj.PulseQobj "qiskit.qobj.PulseQobj") objects should probably be supported too (but deprecated) for backwards compatibility. Be sure to update the docstrings of subclasses implementing this method to document that. New provider implementations should not do this though as [`qiskit.qobj`](qobj#module-qiskit.qobj "qiskit.qobj") will be deprecated and removed along with the legacy providers interface.
*   **options** – Any kwarg options to pass to the backend for running the config. If a key is also present in the options attribute/object then the expectation is that the value specified will be used instead of what’s set in the options object.

**Returns**

The job object for the run

**Return type**

[Job](qiskit.providers.Job#qiskit.providers.Job "qiskit.providers.Job")
