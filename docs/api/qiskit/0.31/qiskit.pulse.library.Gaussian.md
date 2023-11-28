# Gaussian

<span id="undefined" />

`Gaussian(duration, amp, sigma, name=None)`

Bases: `qiskit.pulse.library.parametric_pulses.ParametricPulse`

A truncated pulse envelope shaped according to the Gaussian function whose mean is centered at the center of the pulse (duration / 2):

$$
f(x) = amp * exp( -(1/2) * (x - duration/2)^2 / sigma^2) )  ,  0 <= x < duration
$$

Initialize the gaussian pulse.

**Parameters**

*   **duration** (`Union`\[`int`, `ParameterExpression`]) – Pulse length in terms of the the sampling period dt.
*   **amp** (`Union`\[`complex`, `ParameterExpression`]) – The amplitude of the Gaussian envelope.
*   **sigma** (`Union`\[`float`, `ParameterExpression`]) – A measure of how wide or narrow the Gaussian peak is; described mathematically in the class docstring.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.

## Methods

|                                                                                                                                                                                  |                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`assign`](qiskit.pulse.library.Gaussian.assign#qiskit.pulse.library.Gaussian.assign "qiskit.pulse.library.Gaussian.assign")                                                     | Assign one parameter to a value, which can either be numeric or another parameter expression.                                  |
| [`assign_parameters`](qiskit.pulse.library.Gaussian.assign_parameters#qiskit.pulse.library.Gaussian.assign_parameters "qiskit.pulse.library.Gaussian.assign_parameters")         | Return a new ParametricPulse with parameters assigned.                                                                         |
| [`draw`](qiskit.pulse.library.Gaussian.draw#qiskit.pulse.library.Gaussian.draw "qiskit.pulse.library.Gaussian.draw")                                                             | Plot the interpolated envelope of pulse.                                                                                       |
| [`get_waveform`](qiskit.pulse.library.Gaussian.get_waveform#qiskit.pulse.library.Gaussian.get_waveform "qiskit.pulse.library.Gaussian.get_waveform")                             | Return a Waveform with samples filled according to the formula that the pulse represents and the parameter values it contains. |
| [`is_parameterized`](qiskit.pulse.library.Gaussian.is_parameterized#qiskit.pulse.library.Gaussian.is_parameterized "qiskit.pulse.library.Gaussian.is_parameterized")             | Return True iff the instruction is parameterized.                                                                              |
| [`validate_parameters`](qiskit.pulse.library.Gaussian.validate_parameters#qiskit.pulse.library.Gaussian.validate_parameters "qiskit.pulse.library.Gaussian.validate_parameters") | Validate parameters.                                                                                                           |

## Attributes

<span id="undefined" />

### amp

The Gaussian amplitude.

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

<span id="undefined" />

### sigma

The Gaussian standard deviation of the pulse width.

**Return type**

`Union`\[`float`, `ParameterExpression`]
