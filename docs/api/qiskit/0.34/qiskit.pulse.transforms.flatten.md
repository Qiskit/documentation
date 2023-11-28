# qiskit.pulse.transforms.flatten[¶](#qiskit-pulse-transforms-flatten "Permalink to this headline")

<span id="undefined" />

`flatten(program)`

Flatten (inline) any called nodes into a Schedule tree with no nested children.

**Parameters**

**program** (`Schedule`) – Pulse program to remove nested structure.

**Return type**

`Schedule`

**Returns**

Flatten pulse program.

**Raises**

[**PulseError**](pulse#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – When invalid data format is given.
