# qiskit.pulse.Schedule.initialize\_from

`classmethod Schedule.initialize_from(other_program, name=None)`

Create new schedule object with metadata of another schedule object.

**Parameters**

*   **other\_program** (`Any`) – Qiskit program that provides metadata to new object.
*   **name** (`Optional`\[`str`]) – Name of new schedule. Name of `schedule` is used by default.

**Return type**

`Schedule`

**Returns**

New schedule object with name and metadata.

**Raises**

[**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – When other\_program does not provide necessary information.
