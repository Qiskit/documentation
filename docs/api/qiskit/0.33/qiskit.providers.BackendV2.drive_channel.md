# qiskit.providers.BackendV2.drive\_channel

`BackendV2.drive_channel(qubit)`

Return the drive channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit drive channel

**Return type**

[DriveChannel](qiskit.pulse.channels.DriveChannel#qiskit.pulse.channels.DriveChannel "qiskit.pulse.channels.DriveChannel")

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the measurement mapping
