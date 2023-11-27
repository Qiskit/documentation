# Gaussian[¶](#gaussian "Permalink to this headline")

<span id="undefined" />

`Gaussian(duration, amp, sigma, name=None, limit_amplitude=None)`

Bases: `qiskit.pulse.library.parametric_pulses.ParametricPulse`

A lifted and truncated pulse envelope shaped according to the Gaussian function whose mean is centered at the center of the pulse (duration / 2):

$$
\begin{split}f'(x) &= \exp\Bigl( -\frac12 \frac{{(x - \text{duration}/2)}^2}{\text{sigma}^2} \Bigr)\\
f(x) &= \text{amp} \times \frac{f'(x) - f'(-1)}{1-f'(-1)}, \quad 0 \le x < \text{duration}\end{split}
$$

where $f'(x)$ is the gaussian waveform without lifting or amplitude scaling.

This pulse would be more accurately named as `LiftedGaussian`, however, for historical and practical DSP reasons it has the name `Gaussian`.

Initialize the gaussian pulse.

**Parameters**

*   **duration** (`Union`\[`int`, `ParameterExpression`]) – Pulse length in terms of the the sampling period dt.
*   **amp** (`Union`\[`complex`, `ParameterExpression`]) – The amplitude of the Gaussian envelope.
*   **sigma** (`Union`\[`float`, `ParameterExpression`]) – A measure of how wide or narrow the Gaussian peak is; described mathematically in the class docstring.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.
*   **limit\_amplitude** (`Optional`\[`bool`]) – If `True`, then limit the amplitude of the waveform to 1. The default is `True` and the amplitude is constrained to 1.

## Methods

|                                                                                                                                                                                  |                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
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
