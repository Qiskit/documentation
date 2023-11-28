# Drag[¶](#drag "Permalink to this headline")

<span id="undefined" />

`Drag(duration, amp, sigma, beta, name=None, limit_amplitude=None)`

Bases: `qiskit.pulse.library.parametric_pulses.ParametricPulse`

The Derivative Removal by Adiabatic Gate (DRAG) pulse is a standard Gaussian pulse with an additional Gaussian derivative component and lifting applied.

It is designed to reduce the frequency spectrum of a normal gaussian pulse near the $|1\rangle\leftrightarrow|2\rangle$ transition, reducing the chance of leakage to the $|2\rangle$ state.

$$
\begin{split}g(x) &= \exp\Bigl(-\frac12 \frac{(x - \text{duration}/2)^2}{\text{sigma}^2}\Bigr)\\
f'(x) &= g(x) + 1j \times \text{beta} \times \frac{\mathrm d}{\mathrm{d}x} g(x)\\
      &= g(x) + 1j \times \text{beta} \times                    \Bigl(-\frac{x - \text{duration}/2}{\text{sigma}^2}\Bigr)g(x)\\
f(x) &= \text{amp}\times\frac{f'(x)-f'(-1)}{1-f'(-1)}, \quad 0 \le x < \text{duration}\end{split}
$$

where $g(x)$ is a standard unlifted gaussian waveform and $f'(x)$ is the DRAG waveform without lifting or amplitude scaling.

This pulse would be more accurately named as `LiftedDrag`, however, for historical and practical DSP reasons it has the name `Drag`.

## References

1.  [*Gambetta, J. M., Motzoi, F., Merkel, S. T. & Wilhelm, F. K. Analytic control methods for high-fidelity unitary operations in a weakly nonlinear oscillator. Phys. Rev. A 83, 012308 (2011).*](https://link.aps.org/doi/10.1103/PhysRevA.83.012308)

2.  [*F. Motzoi, J. M. Gambetta, P. Rebentrost, and F. K. Wilhelm Phys. Rev. Lett. 103, 110501 – Published 8 September 2009.*](https://link.aps.org/doi/10.1103/PhysRevLett.103.110501)

Initialize the drag pulse.

**Parameters**

*   **duration** (`Union`\[`int`, `ParameterExpression`]) – Pulse length in terms of the the sampling period dt.
*   **amp** (`Union`\[`complex`, `ParameterExpression`]) – The amplitude of the Drag envelope.
*   **sigma** (`Union`\[`float`, `ParameterExpression`]) – A measure of how wide or narrow the Gaussian peak is; described mathematically in the class docstring.
*   **beta** (`Union`\[`float`, `ParameterExpression`]) – The correction amplitude.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.
*   **limit\_amplitude** (`Optional`\[`bool`]) – If `True`, then limit the amplitude of the waveform to 1. The default is `True` and the amplitude is constrained to 1.

## Methods

|                                                                                                                                                                      |                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`draw`](qiskit.pulse.library.Drag.draw#qiskit.pulse.library.Drag.draw "qiskit.pulse.library.Drag.draw")                                                             | Plot the interpolated envelope of pulse.                                                                                       |
| [`get_waveform`](qiskit.pulse.library.Drag.get_waveform#qiskit.pulse.library.Drag.get_waveform "qiskit.pulse.library.Drag.get_waveform")                             | Return a Waveform with samples filled according to the formula that the pulse represents and the parameter values it contains. |
| [`is_parameterized`](qiskit.pulse.library.Drag.is_parameterized#qiskit.pulse.library.Drag.is_parameterized "qiskit.pulse.library.Drag.is_parameterized")             | Return True iff the instruction is parameterized.                                                                              |
| [`validate_parameters`](qiskit.pulse.library.Drag.validate_parameters#qiskit.pulse.library.Drag.validate_parameters "qiskit.pulse.library.Drag.validate_parameters") | Validate parameters.                                                                                                           |

## Attributes

<span id="undefined" />

### amp

The Gaussian amplitude.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

<span id="undefined" />

### beta

The weighing factor for the Gaussian derivative component of the waveform.

**Return type**

`Union`\[`float`, `ParameterExpression`]

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
