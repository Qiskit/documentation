# Waveform



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

|                                                                                                                                                                          |                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| [`assign_parameters`](qiskit.pulse.library.Waveform.assign_parameters#qiskit.pulse.library.Waveform.assign_parameters "qiskit.pulse.library.Waveform.assign_parameters") | Return a new pulse with parameters assigned.      |
| [`draw`](qiskit.pulse.library.Waveform.draw#qiskit.pulse.library.Waveform.draw "qiskit.pulse.library.Waveform.draw")                                                     | Plot the interpolated envelope of pulse.          |
| [`is_parameterized`](qiskit.pulse.library.Waveform.is_parameterized#qiskit.pulse.library.Waveform.is_parameterized "qiskit.pulse.library.Waveform.is_parameterized")     | Return True iff the instruction is parameterized. |

## Attributes



### id

Unique identifier for this pulse.

**Return type**

`int`



### limit\_amplitude

`= True`



### parameters

Return a dictionary containing the pulse’s parameters.

**Return type**

`Dict`\[`str`, `Any`]



### samples

Return sample values.

**Return type**

`ndarray`
