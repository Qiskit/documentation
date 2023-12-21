# qiskit.providers.ibmq.IBMQBackend.configuration

`IBMQBackend.configuration()`

Return the backend configuration.

Backend configuration contains fixed information about the backend, such as its name, number of qubits, basis gates, coupling map, quantum volume, etc.

The schema for backend configuration can be found in [Qiskit/ibm-quantum-schemas](https://github.com/Qiskit/ibm-quantum-schemas/blob/main/schemas/backend_configuration_schema.json).

**Return type**

`Union`\[`QasmBackendConfiguration`, `PulseBackendConfiguration`]

**Returns**

The configuration for the backend.
