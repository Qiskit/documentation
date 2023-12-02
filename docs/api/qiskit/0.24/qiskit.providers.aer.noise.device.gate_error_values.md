<span id="qiskit-providers-aer-noise-device-gate-error-values" />

# qiskit.providers.aer.noise.device.gate\_error\_values

<span id="undefined" />

`gate_error_values(properties)`

Return gate error values from a devices BackendProperties.

**Parameters**

**properties** ([*BackendProperties*](qiskit.providers.models.BackendProperties#qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")) – device backend properties

**Returns**

A list of tuples `(name, qubits, value)`. If gate error information is not available `None` will be returned for value.

**Return type**

list
