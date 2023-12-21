# qiskit.providers.aer.PulseSimulator.run

`PulseSimulator.run(schedules, validate=True, **run_options)`

Run a qobj on the backend.

**Parameters**

*   **schedules** ([*Schedule*](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") *or list*) – The pulse [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") (or list of `Schedule` objects) to be executed.
*   **validate** (*bool*) – validate the Qobj before running (default: True).
*   **run\_options** (*kwargs*) – additional run time backend options.

**Returns**

The simulation job.

**Return type**

[AerJob](qiskit.providers.aer.jobs.AerJob#qiskit.providers.aer.jobs.AerJob "qiskit.providers.aer.jobs.AerJob")

## Additional Information:

*   kwarg options specified in `run_options` will override options of the same kwarg specified in the simulator options, the `backend_options` and the `Qobj.config`.
