# qiskit.providers.BackendV2.measure\_channel

`BackendV2.measure_channel(qubit)`

Return the measure stimulus channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit measurement stimulus line

**Return type**

[MeasureChannel](qiskit.pulse.channels.MeasureChannel#qiskit.pulse.channels.MeasureChannel "qiskit.pulse.channels.MeasureChannel")

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the measurement mapping
