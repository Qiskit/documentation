# qiskit.providers.BackendV2.run

`abstract BackendV2.run(run_input, **options)`

Run on the backend.

This method that will return a [`Job`](qiskit.providers.Job#qiskit.providers.Job "qiskit.providers.Job") object that run circuits. Depending on the backend this may be either an async or sync call. It is the discretion of the provider to decide whether running should block until the execution is finished or not. The Job class can handle either situation.

**Parameters**

*   **run\_input** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")  *or*[*Schedule*](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule")  *or*[*ScheduleBlock*](qiskit.pulse.ScheduleBlock#qiskit.pulse.ScheduleBlock "qiskit.pulse.ScheduleBlock") *or list*) – An individual or a list of `ScheduleBlock`, or [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") objects to run on the backend.
*   **options** – Any kwarg options to pass to the backend for running the config. If a key is also present in the options attribute/object then the expectation is that the value specified will be used instead of what’s set in the options object.

**Returns**

The job object for the run

**Return type**

[Job](qiskit.providers.Job#qiskit.providers.Job "qiskit.providers.Job")
