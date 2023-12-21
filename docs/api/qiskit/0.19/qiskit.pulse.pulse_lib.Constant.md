---
title: Constant
description: API reference for qiskit.pulse.pulse_lib.Constant
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.pulse_lib.Constant
---

# Constant

<span id="qiskit.pulse.pulse_lib.Constant" />

`Constant(duration, amp, name=None)`

A simple constant pulse, with an amplitude value and a duration:

$$
f(x) = amp    ,  0 <= x < duration
f(x) = 0      ,  elsewhere
$$

Initialize the constant-valued pulse.

**Parameters**

*   **duration** (`int`) – Pulse length in terms of the the sampling period dt.
*   **amp** (`complex`) – The amplitude of the constant square pulse.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.

## Attributes

|                                                                                                                  |                                                        |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [`Constant.amp`](qiskit.pulse.pulse_lib.Constant.amp "qiskit.pulse.pulse_lib.Constant.amp")                      | The constant value amplitude.                          |
| [`Constant.id`](qiskit.pulse.pulse_lib.Constant.id "qiskit.pulse.pulse_lib.Constant.id")                         | Unique identifier for this pulse.                      |
| [`Constant.parameters`](qiskit.pulse.pulse_lib.Constant.parameters "qiskit.pulse.pulse_lib.Constant.parameters") | Return a dictionary containing the pulse’s parameters. |

## Methods

|                                                                                                                                               |                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [`Constant.__call__`](qiskit.pulse.pulse_lib.Constant.__call__ "qiskit.pulse.pulse_lib.Constant.__call__")(channel)                           | Call self as a function.                                                                                                          |
| [`Constant.draw`](qiskit.pulse.pulse_lib.Constant.draw "qiskit.pulse.pulse_lib.Constant.draw")(\[dt, style, filename, …])                     | Plot the pulse.                                                                                                                   |
| [`Constant.get_sample_pulse`](qiskit.pulse.pulse_lib.Constant.get_sample_pulse "qiskit.pulse.pulse_lib.Constant.get_sample_pulse")()          | Return a SamplePulse with samples filled according to the formula that the pulse represents and the parameter values it contains. |
| [`Constant.validate_parameters`](qiskit.pulse.pulse_lib.Constant.validate_parameters "qiskit.pulse.pulse_lib.Constant.validate_parameters")() | Validate parameters.                                                                                                              |
| [`Constant.__call__`](qiskit.pulse.pulse_lib.Constant.__call__ "qiskit.pulse.pulse_lib.Constant.__call__")(channel)                           | Call self as a function.                                                                                                          |

