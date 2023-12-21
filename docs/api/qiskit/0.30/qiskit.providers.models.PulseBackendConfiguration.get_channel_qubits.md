# qiskit.providers.models.PulseBackendConfiguration.get\_channel\_qubits

`PulseBackendConfiguration.get_channel_qubits(channel)`

Return a list of indices for qubits which are operated on directly by the given `channel`.

**Raises**

**BackendConfigurationError** – If `channel` is not a found or if the backend does not provide channels information in its configuration.

**Return type**

`List`\[`int`]

**Returns**

List of qubits operated on my the given `channel`.
