# qiskit.providers.BackendV2.acquire\_channel

`BackendV2.acquire_channel(qubit)`

Return the acquisition channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit measurement acquisition line.

**Return type**

[AcquireChannel](qiskit.pulse.channels.AcquireChannel#qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the measurement mapping
