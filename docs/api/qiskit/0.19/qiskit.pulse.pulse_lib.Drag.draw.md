---
title: draw
description: API reference for qiskit.pulse.pulse_lib.Drag.draw
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.pulse_lib.Drag.draw
---

# draw

<span id="qiskit.pulse.pulse_lib.Drag.draw" />

`Drag.draw(dt=1, style=None, filename=None, interp_method=None, scale=1, interactive=False, scaling=None)`

Plot the pulse.

**Parameters**

*   **dt** (`float`) – Time interval of samples.
*   **style** (*Optional\[*[*PulseStyle*](qiskit.visualization.pulse.qcstyle#qiskit.visualization.pulse.qcstyle.PulseStyle "qiskit.visualization.pulse.qcstyle.PulseStyle")*]*) – A style sheet to configure plot appearance
*   **filename** (`Optional`\[`str`]) – Name required to save pulse image
*   **interp\_method** (`Optional`\[`Callable`]) – A function for interpolation
*   **scale** (`float`) – Relative visual scaling of waveform amplitudes
*   **interactive** (`bool`) – When set true show the circuit in a new window (this depends on the matplotlib backend being used supporting this)
*   **scaling** (`Optional`\[`float`]) – Deprecated, see scale

**Returns**

A matplotlib figure object of the pulse envelope

**Return type**

matplotlib.figure

