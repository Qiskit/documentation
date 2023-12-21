# qiskit.providers.models.PulseBackendConfiguration.control

`PulseBackendConfiguration.control(qubits=None, channel=None)`

Return the secondary drive channel for the given qubit – typically utilized for controlling multiqubit interactions. This channel is derived from other channels.

**Parameters**

*   **qubits** (`Optional`\[`Iterable`\[`int`]]) – Tuple or list of qubits of the form (control\_qubit, target\_qubit).
*   **channel** (`Optional`\[`int`]) – Deprecated.

**Raises**

**BackendConfigurationError** – If the `qubits` is not a part of the system or if the backend does not provide channels information in its configuration.

**Return type**

`List`\[[`ControlChannel`](qiskit.pulse.channels.ControlChannel#qiskit.pulse.channels.ControlChannel "qiskit.pulse.channels.ControlChannel")]

**Returns**

List of control channels.
