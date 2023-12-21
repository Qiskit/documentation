---
title: Command
description: API reference for qiskit.providers.models.Command
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.models.Command
---

# Command

<span id="qiskit.providers.models.Command" />

`Command(name, qubits=None, sequence=None, **kwargs)`

Class representing a Command.

<span id="qiskit.providers.models.Command.name" />

### name

Pulse command name.

Initialize a Command object

**Parameters**

*   **name** (*str*) – The name of the command
*   **qubits** – The qubits for the command
*   **sequence** ([*PulseQobjInstruction*](qiskit.qobj.PulseQobjInstruction "qiskit.qobj.PulseQobjInstruction")) – The sequence for the Command
*   **kwargs** – Optional additional fields

## Methods

|                                                                                                                    |                                                           |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| [`Command.from_dict`](qiskit.providers.models.Command.from_dict "qiskit.providers.models.Command.from_dict")(data) | Create a new Command object from a dictionary.            |
| [`Command.to_dict`](qiskit.providers.models.Command.to_dict "qiskit.providers.models.Command.to_dict")()           | Return a dictionary format representation of the Command. |

