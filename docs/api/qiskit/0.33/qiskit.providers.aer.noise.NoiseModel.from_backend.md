# qiskit.providers.aer.noise.NoiseModel.from\_backend

`classmethod NoiseModel.from_backend(backend, gate_error=True, readout_error=True, thermal_relaxation=True, temperature=0, gate_lengths=None, gate_length_units='ns', standard_gates=True, warnings=True)`

Return a noise model derived from a devices backend properties.

This function generates a noise model based on:

*   1 and 2 qubit gate errors consisting of a [`depolarizing_error()`](qiskit.providers.aer.noise.depolarizing_error#qiskit.providers.aer.noise.depolarizing_error "qiskit.providers.aer.noise.depolarizing_error") followed by a [`thermal_relaxation_error()`](qiskit.providers.aer.noise.thermal_relaxation_error#qiskit.providers.aer.noise.thermal_relaxation_error "qiskit.providers.aer.noise.thermal_relaxation_error").
*   Single qubit [`ReadoutError`](qiskit.providers.aer.noise.ReadoutError#qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError") on all measurements.

The Error error parameters are tuned for each individual qubit based on the $T_1$, $T_2$, frequency and readout error parameters for each qubit, and the gate error and gate time parameters for each gate obtained from the device backend properties.

**Additional Information**

The noise model includes the following errors:

*   If `readout_error=True` include single qubit readout errors on measurements.

*   If `gate_error=True` and `thermal_relaxation=True` include:

    > *   Single-qubit gate errors consisting of a [`depolarizing_error()`](qiskit.providers.aer.noise.depolarizing_error#qiskit.providers.aer.noise.depolarizing_error "qiskit.providers.aer.noise.depolarizing_error") followed by a [`thermal_relaxation_error()`](qiskit.providers.aer.noise.thermal_relaxation_error#qiskit.providers.aer.noise.thermal_relaxation_error "qiskit.providers.aer.noise.thermal_relaxation_error") for the qubit the gate acts on.
    > *   Two-qubit gate errors consisting of a 2-qubit [`depolarizing_error()`](qiskit.providers.aer.noise.depolarizing_error#qiskit.providers.aer.noise.depolarizing_error "qiskit.providers.aer.noise.depolarizing_error") followed by single qubit [`thermal_relaxation_error()`](qiskit.providers.aer.noise.thermal_relaxation_error#qiskit.providers.aer.noise.thermal_relaxation_error "qiskit.providers.aer.noise.thermal_relaxation_error") on each qubit participating in the gate.

*   If `gate_error=True` is `True` and `thermal_relaxation=False`:

    > *   An N-qubit [`depolarizing_error()`](qiskit.providers.aer.noise.depolarizing_error#qiskit.providers.aer.noise.depolarizing_error "qiskit.providers.aer.noise.depolarizing_error") on each N-qubit gate.

*   If `gate_error=False` and `thermal_relaxation=True` include single-qubit `thermal_relaxation_errors()` on each qubits participating in a multi-qubit gate.

For best practice in simulating a backend make sure that the circuit is compiled using the set of basis gates in the noise module by setting `basis_gates=noise_model.basis_gates` and using the device coupling map with `coupling_map=backend.configuration().coupling_map`

**Specifying custom gate times**

The `gate_lengths` kwarg can be used to specify custom gate times to add gate errors using the $T_1$ and $T_2$ values from the backend properties. This should be passed as a list of tuples `gate_lengths=[(name, value), ...]` where `name` is the gate name string, and `value` is the gate time in nanoseconds.

If a custom gate is specified that already exists in the backend properties, the `gate_lengths` value will override the gate time value from the backend properties. If non-default values are used gate\_lengths should be a list

**Parameters**

*   **backend** ([*Backend*](qiskit.providers.Backend#qiskit.providers.Backend "qiskit.providers.Backend")  *or*[*BackendProperties*](qiskit.providers.models.BackendProperties#qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")) – backend properties.
*   **gate\_error** (*bool*) – Include depolarizing gate errors (Default: True).
*   **readout\_error** (*Bool*) – Include readout errors in model (Default: True).
*   **thermal\_relaxation** (*Bool*) – Include thermal relaxation errors (Default: True).
*   **temperature** (*double*) – qubit temperature in milli-Kelvin (mK) for thermal relaxation errors (Default: 0).
*   **gate\_lengths** (*list*) – Custom gate times for thermal relaxation errors. Used to extend or override the gate times in the backend properties (Default: None))
*   **gate\_length\_units** (*str*) – Time units for gate length values in gate\_lengths. Can be ‘ns’, ‘ms’, ‘us’, or ‘s’ (Default: ‘ns’).
*   **standard\_gates** (*bool*) – If true return errors as standard qobj gates. If false return as unitary qobj instructions (Default: True)
*   **warnings** (*bool*) – Display warnings (Default: True).

**Returns**

An approximate noise model for the device backend.

**Return type**

[NoiseModel](qiskit.providers.aer.noise.NoiseModel#qiskit.providers.aer.noise.NoiseModel "qiskit.providers.aer.noise.NoiseModel")

**Raises**

**NoiseError** – If the input backend is not valid.
