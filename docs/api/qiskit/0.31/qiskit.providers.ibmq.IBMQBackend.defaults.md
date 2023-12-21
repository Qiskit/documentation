# qiskit.providers.ibmq.IBMQBackend.defaults

`IBMQBackend.defaults(refresh=False)`

Return the pulse defaults for the backend.

The schema for default pulse configuration can be found in [Qiskit/ibm-quantum-schemas](https://github.com/Qiskit/ibm-quantum-schemas/blob/main/schemas/default_pulse_configuration_schema.json).

**Parameters**

**refresh** (`bool`) – If `True`, re-query the server for the backend pulse defaults. Otherwise, return a cached version.

**Return type**

`Optional`\[`PulseDefaults`]

**Returns**

The backend pulse defaults or `None` if the backend does not support pulse.
