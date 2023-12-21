---
title: Drag
description: API reference for qiskit.pulse.Drag
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.Drag
---

# Drag

<span id="qiskit.pulse.Drag" />

`Drag(duration, amp, sigma, beta, name=None)`

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

*   **duration** (`int`) – Pulse length in terms of the the sampling period dt.
*   **amp** (`complex`) – The amplitude of the Drag envelope.
*   **sigma** (`float`) – A measure of how wide or narrow the Gaussian peak is; described mathematically in the class docstring.
*   **beta** (`float`) – The correction amplitude.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.

## Attributes

|                                                                                  |                                                                            |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`Drag.amp`](qiskit.pulse.Drag.amp "qiskit.pulse.Drag.amp")                      | The Gaussian amplitude.                                                    |
| [`Drag.beta`](qiskit.pulse.Drag.beta "qiskit.pulse.Drag.beta")                   | The weighing factor for the Gaussian derivative component of the waveform. |
| [`Drag.id`](qiskit.pulse.Drag.id "qiskit.pulse.Drag.id")                         | Unique identifier for this pulse.                                          |
| [`Drag.parameters`](qiskit.pulse.Drag.parameters "qiskit.pulse.Drag.parameters") | Return a dictionary containing the pulse’s parameters.                     |
| [`Drag.sigma`](qiskit.pulse.Drag.sigma "qiskit.pulse.Drag.sigma")                | The Gaussian standard deviation of the pulse width.                        |

## Methods

|                                                                                                               |                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [`Drag.__call__`](qiskit.pulse.Drag.__call__ "qiskit.pulse.Drag.__call__")(channel)                           | Call self as a function.                                                                                                          |
| [`Drag.draw`](qiskit.pulse.Drag.draw "qiskit.pulse.Drag.draw")(\[dt, style, filename, …])                     | Plot the pulse.                                                                                                                   |
| [`Drag.get_sample_pulse`](qiskit.pulse.Drag.get_sample_pulse "qiskit.pulse.Drag.get_sample_pulse")()          | Return a SamplePulse with samples filled according to the formula that the pulse represents and the parameter values it contains. |
| [`Drag.validate_parameters`](qiskit.pulse.Drag.validate_parameters "qiskit.pulse.Drag.validate_parameters")() | Validate parameters.                                                                                                              |
| [`Drag.__call__`](qiskit.pulse.Drag.__call__ "qiskit.pulse.Drag.__call__")(channel)                           | Call self as a function.                                                                                                          |

