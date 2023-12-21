# qiskit.providers.aer.StatevectorSimulator.run

`StatevectorSimulator.run(circuits, validate=False, parameter_binds=None, **run_options)`

Run a qobj on the backend.

**Parameters**

*   **circuits** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") *or list*) – The QuantumCircuit (or list of QuantumCircuit objects) to run
*   **validate** (*bool*) – validate the Qobj before running (default: False).
*   **parameter\_binds** (*list*) – A list of parameter binding dictionaries. See additional information (default: None).
*   **run\_options** (*kwargs*) – additional run time backend options.

**Returns**

The simulation job.

**Return type**

[AerJob](qiskit.providers.aer.jobs.AerJob#qiskit.providers.aer.jobs.AerJob "qiskit.providers.aer.jobs.AerJob")

**Raises**

[**AerError**](qiskit.providers.aer.AerError#qiskit.providers.aer.AerError "qiskit.providers.aer.AerError") – If `parameter_binds` is specified with a qobj input or has a length mismatch with the number of circuits.

## Additional Information:

*   Each parameter binding dictionary is of the form:

    ```python
    {
        param_a: [val_1, val_2],
        param_b: [val_3, val_1],
    }
    ```

    for all parameters in that circuit. The length of the value list must be the same for all parameters, and the number of parameter dictionaries in the list must match the length of `circuits` (if `circuits` is a single `QuantumCircuit` object it should a list of length 1).

*   kwarg options specified in `run_options` will temporarily override any set options of the same name for the current run.

**Raises**

**ValueError** – if run is not implemented
