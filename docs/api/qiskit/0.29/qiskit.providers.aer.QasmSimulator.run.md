# qiskit.providers.aer.QasmSimulator.run

`QasmSimulator.run(circuits, backend_options=None, validate=False, **run_options)`

Run a qobj on the backend.

**Parameters**

*   **circuits** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") *or list*) – The QuantumCircuit (or list of QuantumCircuit objects) to run
*   **backend\_options** (*dict or None*) – DEPRECATED dictionary of backend options for the execution (default: None).
*   **validate** (*bool*) – validate the Qobj before running (default: False).
*   **run\_options** (*kwargs*) – additional run time backend options.

**Returns**

The simulation job.

**Return type**

[AerJob](qiskit.providers.aer.AerJob#qiskit.providers.aer.AerJob "qiskit.providers.aer.AerJob")

## Additional Information:

*   kwarg options specified in `run_options` will temporarily override any set options of the same name for the current run.
*   The entries in the `backend_options` will be combined with the `Qobj.config` dictionary with the values of entries in `backend_options` taking precedence. This kwarg is deprecated and direct kwarg’s should be used for options to pass them to `run_options`.
