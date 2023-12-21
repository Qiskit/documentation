---
title: GaussianSquare
description: API reference for qiskit.pulse.GaussianSquare
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.GaussianSquare
---

# GaussianSquare

<span id="qiskit.pulse.GaussianSquare" />

`GaussianSquare(duration, amp, sigma, width, name=None)`

A square pulse with a Gaussian shaped risefall on either side:

$$
 \begin{align}\begin{aligned}risefall = (duration - width) / 2\\0 <= x < risefall\\f(x) = amp * exp( -(1/2) * (x - risefall/2)^2 / sigma^2) )\\risefall <= x < risefall + width\\f(x) = amp\\risefall + width <= x < duration\\f(x) = amp * exp( -(1/2) * (x - (risefall + width)/2)^2 / sigma^2) )\end{aligned}\end{align} 
$$

Initialize the gaussian square pulse.

**Parameters**

*   **duration** (`int`) – Pulse length in terms of the the sampling period dt.
*   **amp** (`complex`) – The amplitude of the Gaussian and of the square pulse.
*   **sigma** (`float`) – A measure of how wide or narrow the Gaussian risefall is; see the class docstring for more details.
*   **width** (`float`) – The duration of the embedded square pulse.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.

## Attributes

|                                                                                                                |                                                        |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [`GaussianSquare.amp`](qiskit.pulse.GaussianSquare.amp "qiskit.pulse.GaussianSquare.amp")                      | The Gaussian amplitude.                                |
| [`GaussianSquare.id`](qiskit.pulse.GaussianSquare.id "qiskit.pulse.GaussianSquare.id")                         | Unique identifier for this pulse.                      |
| [`GaussianSquare.parameters`](qiskit.pulse.GaussianSquare.parameters "qiskit.pulse.GaussianSquare.parameters") | Return a dictionary containing the pulse’s parameters. |
| [`GaussianSquare.sigma`](qiskit.pulse.GaussianSquare.sigma "qiskit.pulse.GaussianSquare.sigma")                | The Gaussian standard deviation of the pulse width.    |
| [`GaussianSquare.width`](qiskit.pulse.GaussianSquare.width "qiskit.pulse.GaussianSquare.width")                | The width of the square portion of the pulse.          |

## Methods

|                                                                                                                                             |                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [`GaussianSquare.__call__`](qiskit.pulse.GaussianSquare.__call__ "qiskit.pulse.GaussianSquare.__call__")(channel)                           | Call self as a function.                                                                                                          |
| [`GaussianSquare.draw`](qiskit.pulse.GaussianSquare.draw "qiskit.pulse.GaussianSquare.draw")(\[dt, style, filename, …])                     | Plot the pulse.                                                                                                                   |
| [`GaussianSquare.get_sample_pulse`](qiskit.pulse.GaussianSquare.get_sample_pulse "qiskit.pulse.GaussianSquare.get_sample_pulse")()          | Return a SamplePulse with samples filled according to the formula that the pulse represents and the parameter values it contains. |
| [`GaussianSquare.validate_parameters`](qiskit.pulse.GaussianSquare.validate_parameters "qiskit.pulse.GaussianSquare.validate_parameters")() | Validate parameters.                                                                                                              |
| [`GaussianSquare.__call__`](qiskit.pulse.GaussianSquare.__call__ "qiskit.pulse.GaussianSquare.__call__")(channel)                           | Call self as a function.                                                                                                          |

