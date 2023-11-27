# GaussianSquare[¶](#gaussiansquare "Permalink to this headline")

<span id="undefined" />

`GaussianSquare(duration, amp, sigma, width=None, risefall_sigma_ratio=None, name=None, limit_amplitude=None)`

Bases: `qiskit.pulse.library.parametric_pulses.ParametricPulse`

A square pulse with a Gaussian shaped risefall on both sides lifted such that its first sample is zero.

Either the `risefall_sigma_ratio` or `width` parameter has to be specified.

If `risefall_sigma_ratio` is not None and `width` is None:

$$
\begin{split}\text{risefall} &= \text{risefall_sigma_ratio} \times \text{sigma}\\
\text{width} &= \text{duration} - 2 \times \text{risefall}\end{split}
$$

If `width` is not None and `risefall_sigma_ratio` is None:

$$
\text{risefall} = \frac{\text{duration} - \text{width}}{2}
$$

In both cases, the lifted gaussian square pulse $f'(x)$ is defined as:

$$
\begin{split}f'(x) &= \begin{cases}            \exp\biggl(-\frac12 \frac{(x - \text{risefall})^2}{\text{sigma}^2}\biggr)                & x < \text{risefall}\\
    1                & \text{risefall} \le x < \text{risefall} + \text{width}\\
    \exp\biggl(-\frac12                    \frac{{\bigl(x - (\text{risefall} + \text{width})\bigr)}^2}                          {\text{sigma}^2}                    \biggr)                & \text{risefall} + \text{width} \le x        \end{cases}\\
f(x) &= \text{amp} \times \frac{f'(x) - f'(-1)}{1-f'(-1)},            \quad 0 \le x < \text{duration}\end{split}
$$

where $f'(x)$ is the gaussian square waveform without lifting or amplitude scaling.

This pulse would be more accurately named as `LiftedGaussianSquare`, however, for historical and practical DSP reasons it has the name `GaussianSquare`.

Initialize the gaussian square pulse.

**Parameters**

*   **duration** (`Union`\[`int`, `ParameterExpression`]) – Pulse length in terms of the the sampling period dt.
*   **amp** (`Union`\[`complex`, `ParameterExpression`]) – The amplitude of the Gaussian and of the square pulse.
*   **sigma** (`Union`\[`float`, `ParameterExpression`]) – A measure of how wide or narrow the Gaussian risefall is; see the class docstring for more details.
*   **width** (`Union`\[`float`, `ParameterExpression`, `None`]) – The duration of the embedded square pulse.
*   **risefall\_sigma\_ratio** (`Union`\[`float`, `ParameterExpression`, `None`]) – The ratio of each risefall duration to sigma.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.
*   **limit\_amplitude** (`Optional`\[`bool`]) – If `True`, then limit the amplitude of the waveform to 1. The default is `True` and the amplitude is constrained to 1.

## Methods

|                                                                                                                                                                                                    |                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`draw`](qiskit.pulse.library.GaussianSquare.draw#qiskit.pulse.library.GaussianSquare.draw "qiskit.pulse.library.GaussianSquare.draw")                                                             | Plot the interpolated envelope of pulse.                                                                                       |
| [`get_waveform`](qiskit.pulse.library.GaussianSquare.get_waveform#qiskit.pulse.library.GaussianSquare.get_waveform "qiskit.pulse.library.GaussianSquare.get_waveform")                             | Return a Waveform with samples filled according to the formula that the pulse represents and the parameter values it contains. |
| [`is_parameterized`](qiskit.pulse.library.GaussianSquare.is_parameterized#qiskit.pulse.library.GaussianSquare.is_parameterized "qiskit.pulse.library.GaussianSquare.is_parameterized")             | Return True iff the instruction is parameterized.                                                                              |
| [`validate_parameters`](qiskit.pulse.library.GaussianSquare.validate_parameters#qiskit.pulse.library.GaussianSquare.validate_parameters "qiskit.pulse.library.GaussianSquare.validate_parameters") | Validate parameters.                                                                                                           |

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

### risefall\_sigma\_ratio

The duration of each risefall in terms of sigma.

**Return type**

`Union`\[`float`, `ParameterExpression`]

<span id="undefined" />

### sigma

The Gaussian standard deviation of the pulse width.

**Return type**

`Union`\[`float`, `ParameterExpression`]

<span id="undefined" />

### width

The width of the square portion of the pulse.

**Return type**

`Union`\[`float`, `ParameterExpression`]
