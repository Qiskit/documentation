# GateCalibration

<span id="undefined" />

`GateCalibration(name, qubits, params, instructions)`

Bases: `object`

Each calibration specifies a unique gate by name, qubits and params, and contains the Pulse instructions to implement it.

Initialize a single gate calibration. Instructions may reference waveforms which should be made available in the pulse\_library.

**Parameters**

*   **name** (*str*) – Gate name.
*   **qubits** (*list(int)*) – Qubits the gate applies to.
*   **params** (*list(complex)*) – Gate parameter values, if any.
*   **instructions** (*list(*[*PulseQobjInstruction*](qiskit.qobj.PulseQobjInstruction#qiskit.qobj.PulseQobjInstruction "qiskit.qobj.PulseQobjInstruction")*)*) – The gate implementation.

## Methods

|                                                                                                                                    |                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`from_dict`](qiskit.qobj.GateCalibration.from_dict#qiskit.qobj.GateCalibration.from_dict "qiskit.qobj.GateCalibration.from_dict") | Create a new GateCalibration object from a dictionary.             |
| [`to_dict`](qiskit.qobj.GateCalibration.to_dict#qiskit.qobj.GateCalibration.to_dict "qiskit.qobj.GateCalibration.to_dict")         | Return a dictionary format representation of the Gate Calibration. |
