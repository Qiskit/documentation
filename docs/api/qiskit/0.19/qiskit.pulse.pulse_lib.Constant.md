---
title: Constant
description: API reference for qiskit.pulse.pulse_lib.Constant
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.pulse_lib.Constant
---

# Constant

<span id="qiskit.pulse.pulse_lib.Constant" />

`Constant(duration, amp, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/pulse/pulse_lib/parametric_pulses.py "view source code")

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

### amp

<span id="qiskit.pulse.pulse_lib.Constant.amp" />

`complex`

The constant value amplitude.

**Return type**

`complex`

### id

<span id="qiskit.pulse.pulse_lib.Constant.id" />

`int`

Unique identifier for this pulse.

**Return type**

`int`

### parameters

<span id="qiskit.pulse.pulse_lib.Constant.parameters" />

`Dict[str, Any]`

Return a dictionary containing the pulse’s parameters.

**Return type**

`Dict`\[`str`, `Any`]

## Methods

### \_\_call\_\_

<span id="qiskit.pulse.pulse_lib.Constant.__call__" />

`Constant.__call__(channel)`

Call self as a function.

### draw

<span id="qiskit.pulse.pulse_lib.Constant.draw" />

`Constant.draw(dt=1, style=None, filename=None, interp_method=None, scale=1, interactive=False, scaling=None)`

Plot the pulse.

**Parameters**

*   **dt** (`float`) – Time interval of samples.
*   **style** (*Optional\[*[*PulseStyle*](qiskit.visualization.pulse.qcstyle#pulsestyle "qiskit.visualization.pulse.qcstyle.PulseStyle")*]*) – A style sheet to configure plot appearance
*   **filename** (`Optional`\[`str`]) – Name required to save pulse image
*   **interp\_method** (`Optional`\[`Callable`]) – A function for interpolation
*   **scale** (`float`) – Relative visual scaling of waveform amplitudes
*   **interactive** (`bool`) – When set true show the circuit in a new window (this depends on the matplotlib backend being used supporting this)
*   **scaling** (`Optional`\[`float`]) – Deprecated, see scale

**Returns**

A matplotlib figure object of the pulse envelope

**Return type**

matplotlib.figure

### get\_sample\_pulse

<span id="qiskit.pulse.pulse_lib.Constant.get_sample_pulse" />

`Constant.get_sample_pulse()`

Return a SamplePulse with samples filled according to the formula that the pulse represents and the parameter values it contains.

**Return type**

[`SamplePulse`](qiskit.pulse.pulse_lib.SamplePulse "qiskit.pulse.pulse_lib.sample_pulse.SamplePulse")

### validate\_parameters

<span id="qiskit.pulse.pulse_lib.Constant.validate_parameters" />

`Constant.validate_parameters()`

Validate parameters.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the parameters passed are not valid.

**Return type**

`None`

