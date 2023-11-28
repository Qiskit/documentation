# Drag

<span id="undefined" />

`Drag(duration, amp, sigma, beta, name=None)`

Bases: `qiskit.pulse.library.parametric_pulses.ParametricPulse`

The Derivative Removal by Adiabatic Gate (DRAG) pulse is a standard Gaussian pulse with an additional Gaussian derivative component. It is designed to reduce the frequency spectrum of a normal gaussian pulse near the $|1\rangle$ - $|2\rangle$ transition, reducing the chance of leakage to the $|2\rangle$ state.

$$
f(x) = Gaussian + 1j * beta * d/dx [Gaussian]
     = Gaussian + 1j * beta * (-(x - duration/2) / sigma^2) [Gaussian]
$$

where ‘Gaussian’ is:

$$
Gaussian(x, amp, sigma) = amp * exp( -(1/2) * (x - duration/2)^2 / sigma^2) )
$$

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

## Methods

|                                                                                                                                                                      |                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`assign`](qiskit.pulse.library.Drag.assign#qiskit.pulse.library.Drag.assign "qiskit.pulse.library.Drag.assign")                                                     | Assign one parameter to a value, which can either be numeric or another parameter expression.                                  |
| [`assign_parameters`](qiskit.pulse.library.Drag.assign_parameters#qiskit.pulse.library.Drag.assign_parameters "qiskit.pulse.library.Drag.assign_parameters")         | Return a new ParametricPulse with parameters assigned.                                                                         |
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
