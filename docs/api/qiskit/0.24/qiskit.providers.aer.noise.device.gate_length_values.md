<span id="qiskit-providers-aer-noise-device-gate-length-values" />

# qiskit.providers.aer.noise.device.gate\_length\_values

<span id="undefined" />

`gate_length_values(properties)`

Return gate length values from a devices BackendProperties.

**Parameters**

**properties** ([*BackendProperties*](qiskit.providers.models.BackendProperties#qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")) – device backend properties

**Returns**

A list of tuples `(name, qubits, value)`. If gate length information is not available `None` will be returned for value.

**Return type**

list

## Additional Information:

Gate length values are returned in nanosecond (ns) units.
