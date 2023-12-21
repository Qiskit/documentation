# qiskit.providers.BackendV2.control\_channel

`BackendV2.control_channel(qubits)`

Return the secondary drive channel for the given qubit

This is typically utilized for controlling multiqubit interactions. This channel is derived from other channels.

This is required to be implemented if the backend supports Pulse scheduling.

**Parameters**

**qubits** (`Iterable`\[`int`]) – Tuple or list of qubits of the form `(control_qubit, target_qubit)`.

**Returns**

The Qubit measurement acquisition line.

**Return type**

List\[[ControlChannel](qiskit.pulse.channels.ControlChannel#qiskit.pulse.channels.ControlChannel "qiskit.pulse.channels.ControlChannel")]

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the measurement mapping
