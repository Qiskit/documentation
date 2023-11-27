# qiskit.providers.aer.noise.device.gate\_param\_values[¶](#qiskit-providers-aer-noise-device-gate-param-values "Permalink to this headline")

<span id="undefined" />

`gate_param_values(properties)`

Return parameter error values from a devices BackendProperties.

**Parameters**

**properties** ([*BackendProperties*](qiskit.providers.models.BackendProperties#qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")) – device backend properties

**Returns**

A list of tuples `(name, qubits, time, error)`. If gate error or gate\_length information is not available `None` will be returned for value.

**Return type**

list
