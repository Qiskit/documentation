# qiskit.providers.models.PulseBackendConfiguration.get\_qubit\_channels

`PulseBackendConfiguration.get_qubit_channels(qubit)`

Return a list of channels which operate on the given `qubit`.

**Raises**

**BackendConfigurationError** – If `qubit` is not a found or if the backend does not provide channels information in its configuration.

**Return type**

`List`\[`Channel`]

**Returns**

List of `Channel`s operated on my the given `qubit`.
