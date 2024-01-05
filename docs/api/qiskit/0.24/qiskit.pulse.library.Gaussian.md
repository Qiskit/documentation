---
title: Gaussian
description: API reference for qiskit.pulse.library.Gaussian
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.library.Gaussian
---

<span id="qiskit-pulse-library-gaussian" />

# qiskit.pulse.library.Gaussian

<span id="qiskit.pulse.library.Gaussian" />

`Gaussian(duration, amp, sigma, name=None)`

A truncated pulse envelope shaped according to the Gaussian function whose mean is centered at the center of the pulse (duration / 2):

$$
f(x) = amp * exp( -(1/2) * (x - duration/2)^2 / sigma^2) )  ,  0 <= x < duration
$$

Initialize the gaussian pulse.

**Parameters**

*   **duration** (`int`) – Pulse length in terms of the the sampling period dt.
*   **amp** (`Union`\[`complex`, `ParameterExpression`]) – The amplitude of the Gaussian envelope.
*   **sigma** (`Union`\[`float`, `ParameterExpression`]) – A measure of how wide or narrow the Gaussian peak is; described mathematically in the class docstring.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.

### \_\_init\_\_

<span id="qiskit.pulse.library.Gaussian.__init__" />

`__init__(duration, amp, sigma, name=None)`

Initialize the gaussian pulse.

**Parameters**

*   **duration** (`int`) – Pulse length in terms of the the sampling period dt.
*   **amp** (`Union`\[`complex`, `ParameterExpression`]) – The amplitude of the Gaussian envelope.
*   **sigma** (`Union`\[`float`, `ParameterExpression`]) – A measure of how wide or narrow the Gaussian peak is; described mathematically in the class docstring.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.

## Methods

## Attributes

### amp

<span id="qiskit.pulse.library.Gaussian.amp" />

`property amp`

The Gaussian amplitude.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

### assign\_parameters

<span id="qiskit.pulse.library.Gaussian.assign_parameters" />

`assign_parameters(value_dict)`

Return a new ParametricPulse with parameters assigned.

**Parameters**

**value\_dict** (`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`, `int`]]) – A mapping from Parameters to either numeric values or another Parameter expression.

**Return type**

`ParametricPulse`

**Returns**

New pulse with updated parameters.

### draw

<span id="qiskit.pulse.library.Gaussian.draw" />

`draw(dt=1, style=None, filename=None, interp_method=None, scale=1, interactive=False)`

Plot the pulse.

**Parameters**

*   **dt** (`float`) – Time interval of samples.
*   **style** (*Optional\[*[*PulseStyle*](qiskit.visualization.pulse.qcstyle#PulseStyle "qiskit.visualization.pulse.qcstyle.PulseStyle")*]*) – A style sheet to configure plot appearance
*   **filename** (`Optional`\[`str`]) – Name required to save pulse image
*   **interp\_method** (`Optional`\[`Callable`]) – A function for interpolation
*   **scale** (`float`) – Relative visual scaling of waveform amplitudes
*   **interactive** (`bool`) – When set true show the circuit in a new window (this depends on the matplotlib backend being used supporting this)

**Returns**

A matplotlib figure object of the pulse envelope

**Return type**

matplotlib.figure

### get\_sample\_pulse

<span id="qiskit.pulse.library.Gaussian.get_sample_pulse" />

`get_sample_pulse()`

Deprecated.

**Return type**

`Waveform`

### get\_waveform

<span id="qiskit.pulse.library.Gaussian.get_waveform" />

`get_waveform()`

Return a Waveform with samples filled according to the formula that the pulse represents and the parameter values it contains.

**Return type**

`Waveform`

### id

<span id="qiskit.pulse.library.Gaussian.id" />

`property id`

Unique identifier for this pulse.

**Return type**

`int`

### parameters

<span id="qiskit.pulse.library.Gaussian.parameters" />

`property parameters`

Return a dictionary containing the pulse’s parameters.

**Return type**

`Dict`\[`str`, `Any`]

### sigma

<span id="qiskit.pulse.library.Gaussian.sigma" />

`property sigma`

The Gaussian standard deviation of the pulse width.

**Return type**

`Union`\[`float`, `ParameterExpression`]

### validate\_parameters

<span id="qiskit.pulse.library.Gaussian.validate_parameters" />

`validate_parameters()`

Validate parameters.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the parameters passed are not valid.

**Return type**

`None`

