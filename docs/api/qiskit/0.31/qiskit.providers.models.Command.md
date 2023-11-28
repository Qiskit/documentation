# Command

<span id="undefined" />

`Command(name, qubits=None, sequence=None, **kwargs)`

Bases: `object`

Class representing a Command.

<span id="undefined" />

### name

Pulse command name.

Initialize a Command object

**Parameters**

*   **name** (*str*) – The name of the command
*   **qubits** – The qubits for the command
*   **sequence** ([*PulseQobjInstruction*](qiskit.qobj.PulseQobjInstruction#qiskit.qobj.PulseQobjInstruction "qiskit.qobj.PulseQobjInstruction")) – The sequence for the Command
*   **kwargs** – Optional additional fields

## Methods

|                                                                                                                                                |                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [`from_dict`](qiskit.providers.models.Command.from_dict#qiskit.providers.models.Command.from_dict "qiskit.providers.models.Command.from_dict") | Create a new Command object from a dictionary.            |
| [`to_dict`](qiskit.providers.models.Command.to_dict#qiskit.providers.models.Command.to_dict "qiskit.providers.models.Command.to_dict")         | Return a dictionary format representation of the Command. |
