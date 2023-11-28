# Constant

<span id="undefined" />

`Constant(duration, amp, name=None)`

Bases: `qiskit.pulse.library.parametric_pulses.ParametricPulse`

A simple constant pulse, with an amplitude value and a duration:

$$
f(x) = amp    ,  0 <= x < duration
f(x) = 0      ,  elsewhere
$$

Initialize the constant-valued pulse.

**Parameters**

*   **duration** (`Union`\[`int`, `ParameterExpression`]) – Pulse length in terms of the the sampling period dt.
*   **amp** (`Union`\[`complex`, `ParameterExpression`]) – The amplitude of the constant square pulse.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.

## Methods

|                                                                                                                                                                                  |                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`assign`](qiskit.pulse.library.Constant.assign#qiskit.pulse.library.Constant.assign "qiskit.pulse.library.Constant.assign")                                                     | Assign one parameter to a value, which can either be numeric or another parameter expression.                                  |
| [`assign_parameters`](qiskit.pulse.library.Constant.assign_parameters#qiskit.pulse.library.Constant.assign_parameters "qiskit.pulse.library.Constant.assign_parameters")         | Return a new ParametricPulse with parameters assigned.                                                                         |
| [`draw`](qiskit.pulse.library.Constant.draw#qiskit.pulse.library.Constant.draw "qiskit.pulse.library.Constant.draw")                                                             | Plot the interpolated envelope of pulse.                                                                                       |
| [`get_waveform`](qiskit.pulse.library.Constant.get_waveform#qiskit.pulse.library.Constant.get_waveform "qiskit.pulse.library.Constant.get_waveform")                             | Return a Waveform with samples filled according to the formula that the pulse represents and the parameter values it contains. |
| [`is_parameterized`](qiskit.pulse.library.Constant.is_parameterized#qiskit.pulse.library.Constant.is_parameterized "qiskit.pulse.library.Constant.is_parameterized")             | Return True iff the instruction is parameterized.                                                                              |
| [`validate_parameters`](qiskit.pulse.library.Constant.validate_parameters#qiskit.pulse.library.Constant.validate_parameters "qiskit.pulse.library.Constant.validate_parameters") | Validate parameters.                                                                                                           |

## Attributes

<span id="undefined" />

### amp

The constant value amplitude.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

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

**Return type**

`Dict`\[`str`, `Any`]
