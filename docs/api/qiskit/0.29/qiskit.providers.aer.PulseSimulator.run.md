# qiskit.providers.aer.PulseSimulator.run

`PulseSimulator.run(schedules, *args, backend_options=None, validate=True, **run_options)`

Run a qobj on the backend.

**Parameters**

*   **schedules** ([*Schedule*](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") *or list*) – The pulse [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") (or list of `Schedule` objects) to be executed.
*   **backend\_options** (*dict or None*) – DEPRECATED dictionary of backend options for the execution (default: None).
*   **validate** (*bool*) – validate the Qobj before running (default: True).
*   **run\_options** (*kwargs*) – additional run time backend options.

**Returns**

The simulation job.

**Return type**

[AerJob](qiskit.providers.aer.AerJob#qiskit.providers.aer.AerJob "qiskit.providers.aer.AerJob")

## Additional Information:

*   kwarg options specified in `run_options` will override options of the same kwarg specified in the simulator options, the `backend_options` and the `Qobj.config`.
*   The entries in the `backend_options` will be combined with the `Qobj.config` dictionary with the values of entries in `backend_options` taking precedence. This kwarg is deprecated and direct kwarg’s should be used for options to pass them to `run_options`.
