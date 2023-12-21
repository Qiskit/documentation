# qiskit.providers.models.PulseBackendConfiguration.acquire

`PulseBackendConfiguration.acquire(qubit)`

Return the acquisition channel for the given qubit.

**Raises**

**BackendConfigurationError** – If the qubit is not a part of the system.

**Return type**

[`AcquireChannel`](qiskit.pulse.channels.AcquireChannel#qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")

**Returns**

Qubit measurement acquisition line.
