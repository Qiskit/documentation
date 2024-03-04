---
title: Waveform
description: API reference for qiskit.pulse.Waveform
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.Waveform
---

<span id="qiskit-pulse-waveform" />

# qiskit.pulse.Waveform

<span id="qiskit.pulse.Waveform" />

`Waveform(samples, name=None, epsilon=1e-07)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/pulse/library/waveform.py "view source code")

A pulse specified completely by complex-valued samples; each sample is played for the duration of the backend cycle-time, dt.

Create new sample pulse command.

**Parameters**

*   **samples** (`Union`\[`ndarray`, `List`\[`complex`]]) – Complex array of the samples in the pulse envelope.
*   **name** (`Optional`\[`str`]) – Unique name to identify the pulse.
*   **epsilon** (`float`) – Pulse sample norm tolerance for clipping. If any sample’s norm exceeds unity by less than or equal to epsilon it will be clipped to unit norm. If the sample norm is greater than 1+epsilon an error will be raised.

### \_\_init\_\_

<span id="qiskit.pulse.Waveform.__init__" />

`__init__(samples, name=None, epsilon=1e-07)`

Create new sample pulse command.

**Parameters**

*   **samples** (`Union`\[`ndarray`, `List`\[`complex`]]) – Complex array of the samples in the pulse envelope.
*   **name** (`Optional`\[`str`]) – Unique name to identify the pulse.
*   **epsilon** (`float`) – Pulse sample norm tolerance for clipping. If any sample’s norm exceeds unity by less than or equal to epsilon it will be clipped to unit norm. If the sample norm is greater than 1+epsilon an error will be raised.

## Methods

|                                                                                                                        |                                              |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`__init__`](#qiskit.pulse.Waveform.__init__ "qiskit.pulse.Waveform.__init__")(samples\[, name, epsilon])              | Create new sample pulse command.             |
| [`assign_parameters`](#qiskit.pulse.Waveform.assign_parameters "qiskit.pulse.Waveform.assign_parameters")(value\_dict) | Return a new pulse with parameters assigned. |
| [`draw`](#qiskit.pulse.Waveform.draw "qiskit.pulse.Waveform.draw")(\[dt, style, filename, interp\_method, …])          | Plot the interpolated envelope of pulse.     |

## Attributes

|                                                                             |                                   |
| --------------------------------------------------------------------------- | --------------------------------- |
| [`id`](#qiskit.pulse.Waveform.id "qiskit.pulse.Waveform.id")                | Unique identifier for this pulse. |
| [`samples`](#qiskit.pulse.Waveform.samples "qiskit.pulse.Waveform.samples") | Return sample values.             |

### assign\_parameters

<span id="qiskit.pulse.Waveform.assign_parameters" />

`assign_parameters(value_dict)`

Return a new pulse with parameters assigned.

**Parameters**

**value\_dict** (`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`, `int`]]) – A mapping from Parameters to either numeric values or another Parameter expression.

**Return type**

`Waveform`

**Returns**

New pulse with updated parameters.

### draw

<span id="qiskit.pulse.Waveform.draw" />

`draw(dt=1, style=None, filename=None, interp_method=None, scale=1, interactive=False)`

Plot the interpolated envelope of pulse.

**Parameters**

*   **dt** (`float`) – Time interval of samples.
*   **style** (*Optional\[*[*PulseStyle*](qiskit.visualization.pulse.qcstyle#pulsestyle "qiskit.visualization.pulse.qcstyle.PulseStyle")*]*) – A style sheet to configure plot appearance.
*   **filename** (`Optional`\[`str`]) – Name required to save pulse image.
*   **interp\_method** (`Optional`\[`Callable`]) – A function for interpolation.
*   **scale** (`float`) – Relative visual scaling of waveform amplitudes.
*   **interactive** (`bool`) – When set true show the circuit in a new window. (This depends on the matplotlib backend being used.)

**Returns**

A matplotlib figure object of the pulse envelope

**Return type**

matplotlib.figure

### id

<span id="qiskit.pulse.Waveform.id" />

`property id`

Unique identifier for this pulse.

**Return type**

`int`

### samples

<span id="qiskit.pulse.Waveform.samples" />

`property samples`

Return sample values.

**Return type**

`ndarray`

