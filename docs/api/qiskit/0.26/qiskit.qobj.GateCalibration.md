# qiskit.qobj.GateCalibration

<span id="undefined" />

`GateCalibration(name, qubits, params, instructions)`

Each calibration specifies a unique gate by name, qubits and params, and contains the Pulse instructions to implement it.

Initialize a single gate calibration. Instructions may reference waveforms which should be made available in the pulse\_library.

**Parameters**

*   **name** (*str*) – Gate name.
*   **qubits** (*list(int)*) – Qubits the gate applies to.
*   **params** (*list(complex)*) – Gate parameter values, if any.
*   **instructions** (*list(*[*PulseQobjInstruction*](qiskit.qobj.PulseQobjInstruction#qiskit.qobj.PulseQobjInstruction "qiskit.qobj.PulseQobjInstruction")*)*) – The gate implementation.

<span id="undefined" />

`__init__(name, qubits, params, instructions)`

Initialize a single gate calibration. Instructions may reference waveforms which should be made available in the pulse\_library.

**Parameters**

*   **name** (*str*) – Gate name.
*   **qubits** (*list(int)*) – Qubits the gate applies to.
*   **params** (*list(complex)*) – Gate parameter values, if any.
*   **instructions** (*list(*[*PulseQobjInstruction*](qiskit.qobj.PulseQobjInstruction#qiskit.qobj.PulseQobjInstruction "qiskit.qobj.PulseQobjInstruction")*)*) – The gate implementation.

## Methods

|                                                                                                                                |                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [`__init__`](#qiskit.qobj.GateCalibration.__init__ "qiskit.qobj.GateCalibration.__init__")(name, qubits, params, instructions) | Initialize a single gate calibration.                              |
| [`from_dict`](#qiskit.qobj.GateCalibration.from_dict "qiskit.qobj.GateCalibration.from_dict")(data)                            | Create a new GateCalibration object from a dictionary.             |
| [`to_dict`](#qiskit.qobj.GateCalibration.to_dict "qiskit.qobj.GateCalibration.to_dict")()                                      | Return a dictionary format representation of the Gate Calibration. |

<span id="undefined" />

`classmethod from_dict(data)`

Create a new GateCalibration object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the GateCalibration to create. It will be in the same format as output by [`to_dict()`](#qiskit.qobj.GateCalibration.to_dict "qiskit.qobj.GateCalibration.to_dict").

**Returns**

The GateCalibration from the input dictionary.

**Return type**

[GateCalibration](#qiskit.qobj.GateCalibration "qiskit.qobj.GateCalibration")

<span id="undefined" />

`to_dict()`

Return a dictionary format representation of the Gate Calibration.

**Returns**

The dictionary form of the GateCalibration.

**Return type**

dict
