# InstructionProperties[¶](#instructionproperties "Permalink to this headline")

<span id="undefined" />

`InstructionProperties(duration=None, error=None, calibration=None)`

Bases: `object`

A representation of the properties of a gate implementation.

This class provides the optional properties that a backend can provide about an instruction. These represent the set that the transpiler can currently work with if present. However, if your backend provides additional properties for instructions you should subclass this to add additional custom attributes for those custom/additional properties by the backend.

Create a new `InstructionProperties` object

**Parameters**

*   **duration** (`Optional`\[`float`]) – The duration, in seconds, of the instruction on the specified set of qubits
*   **error** (`Optional`\[`float`]) – The average error rate for the instruction on the specified set of qubits.
*   **calibration** (*Union\["qiskit.pulse.Schedule", "qiskit.pulse.ScheduleBlock"]*) – The pulse representation of the instruction

## Attributes

<span id="undefined" />

### calibration

<span id="undefined" />

### duration

<span id="undefined" />

### error
