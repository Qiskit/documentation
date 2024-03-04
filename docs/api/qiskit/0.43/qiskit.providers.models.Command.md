---
title: Command
description: API reference for qiskit.providers.models.Command
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.models.Command
---

# Command

<span id="qiskit.providers.models.Command" />

`Command(name, qubits=None, sequence=None, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/providers/models/pulsedefaults.py "view source code")

Bases: `object`

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

<span id="qiskit-providers-models-command-from-dict" />

### from\_dict

<span id="qiskit.providers.models.Command.from_dict" />

`classmethod Command.from_dict(data)`

Create a new Command object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the `Command` to create. It will be in the same format as output by [`to_dict()`](qiskit.providers.models.Command#to_dict "qiskit.providers.models.Command.to_dict").

**Returns**

**The `Command` from the input**

dictionary.

**Return type**

qiskit.providers.model.Command

<span id="qiskit-providers-models-command-to-dict" />

### to\_dict

<span id="qiskit.providers.models.Command.to_dict" />

`Command.to_dict()`

Return a dictionary format representation of the Command.

**Returns**

The dictionary form of the Command.

**Return type**

dict

