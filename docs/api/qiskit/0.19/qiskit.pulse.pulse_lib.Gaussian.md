---
title: Gaussian
description: API reference for qiskit.pulse.pulse_lib.Gaussian
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.pulse_lib.Gaussian
---

# Gaussian

<span id="qiskit.pulse.pulse_lib.Gaussian" />

`Gaussian(duration, amp, sigma, name=None)`

A truncated pulse envelope shaped according to the Gaussian function whose mean is centered at the center of the pulse (duration / 2):

$$
f(x) = amp * exp( -(1/2) * (x - duration/2)^2 / sigma^2) )  ,  0 <= x < duration
$$

Initialize the gaussian pulse.

**Parameters**

*   **duration** (`int`) – Pulse length in terms of the the sampling period dt.
*   **amp** (`complex`) – The amplitude of the Gaussian envelope.
*   **sigma** (`float`) – A measure of how wide or narrow the Gaussian peak is; described mathematically in the class docstring.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.

## Attributes

|                                                                                                                  |                                                        |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [`Gaussian.amp`](qiskit.pulse.pulse_lib.Gaussian.amp "qiskit.pulse.pulse_lib.Gaussian.amp")                      | The Gaussian amplitude.                                |
| [`Gaussian.id`](qiskit.pulse.pulse_lib.Gaussian.id "qiskit.pulse.pulse_lib.Gaussian.id")                         | Unique identifier for this pulse.                      |
| [`Gaussian.parameters`](qiskit.pulse.pulse_lib.Gaussian.parameters "qiskit.pulse.pulse_lib.Gaussian.parameters") | Return a dictionary containing the pulse’s parameters. |
| [`Gaussian.sigma`](qiskit.pulse.pulse_lib.Gaussian.sigma "qiskit.pulse.pulse_lib.Gaussian.sigma")                | The Gaussian standard deviation of the pulse width.    |

## Methods

|                                                                                                                                               |                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [`Gaussian.__call__`](qiskit.pulse.pulse_lib.Gaussian.__call__ "qiskit.pulse.pulse_lib.Gaussian.__call__")(channel)                           | Call self as a function.                                                                                                          |
| [`Gaussian.draw`](qiskit.pulse.pulse_lib.Gaussian.draw "qiskit.pulse.pulse_lib.Gaussian.draw")(\[dt, style, filename, …])                     | Plot the pulse.                                                                                                                   |
| [`Gaussian.get_sample_pulse`](qiskit.pulse.pulse_lib.Gaussian.get_sample_pulse "qiskit.pulse.pulse_lib.Gaussian.get_sample_pulse")()          | Return a SamplePulse with samples filled according to the formula that the pulse represents and the parameter values it contains. |
| [`Gaussian.validate_parameters`](qiskit.pulse.pulse_lib.Gaussian.validate_parameters "qiskit.pulse.pulse_lib.Gaussian.validate_parameters")() | Validate parameters.                                                                                                              |
| [`Gaussian.__call__`](qiskit.pulse.pulse_lib.Gaussian.__call__ "qiskit.pulse.pulse_lib.Gaussian.__call__")(channel)                           | Call self as a function.                                                                                                          |

