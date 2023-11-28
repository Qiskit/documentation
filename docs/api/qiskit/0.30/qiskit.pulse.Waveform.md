# Waveform

<span id="undefined" />

`Waveform(samples, name=None, epsilon=1e-07, limit_amplitude=None)`

Bases: `qiskit.pulse.library.pulse.Pulse`

A pulse specified completely by complex-valued samples; each sample is played for the duration of the backend cycle-time, dt.

Create new sample pulse command.

**Parameters**

*   **samples** (`Union`\[`ndarray`, `List`\[`complex`]]) – Complex array of the samples in the pulse envelope.
*   **name** (`Optional`\[`str`]) – Unique name to identify the pulse.
*   **epsilon** (`float`) – Pulse sample norm tolerance for clipping. If any sample’s norm exceeds unity by less than or equal to epsilon it will be clipped to unit norm. If the sample norm is greater than 1+epsilon an error will be raised.
*   **limit\_amplitude** (`Optional`\[`bool`]) – Passed to parent Pulse

## Methods

|                                                                                                                                                  |                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| [`assign_parameters`](qiskit.pulse.Waveform.assign_parameters#qiskit.pulse.Waveform.assign_parameters "qiskit.pulse.Waveform.assign_parameters") | Return a new pulse with parameters assigned.      |
| [`draw`](qiskit.pulse.Waveform.draw#qiskit.pulse.Waveform.draw "qiskit.pulse.Waveform.draw")                                                     | Plot the interpolated envelope of pulse.          |
| [`is_parameterized`](qiskit.pulse.Waveform.is_parameterized#qiskit.pulse.Waveform.is_parameterized "qiskit.pulse.Waveform.is_parameterized")     | Return True iff the instruction is parameterized. |

## Attributes

<span id="undefined" />

### id

Unique identifier for this pulse.

**Return type**

`int`

<span id="undefined" />

### limit\_amplitude

`= True`

<span id="undefined" />

### parameters

Return a dictionary containing the pulse’s parameters.

**Return type**

`Dict`\[`str`, `Any`]

<span id="undefined" />

### samples

Return sample values.

**Return type**

`ndarray`
