# qiskit.providers.models.PulseBackendConfiguration.measure

`PulseBackendConfiguration.measure(qubit)`

Return the measure stimulus channel for the given qubit.

**Raises**

**BackendConfigurationError** – If the qubit is not a part of the system.

**Return type**

[`MeasureChannel`](qiskit.pulse.channels.MeasureChannel#qiskit.pulse.channels.MeasureChannel "qiskit.pulse.channels.MeasureChannel")

**Returns**

Qubit measurement stimulus line.
