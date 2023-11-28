---
title: interpolation
description: API reference for qiskit.visualization.pulse.interpolation
in_page_toc_min_heading_level: 1
python_api_type: module
python_api_name: qiskit.visualization.pulse.interpolation
---

<span id="module-qiskit.visualization.pulse.interpolation" />

<span id="qiskit-visualization-pulse-interpolation" />

# qiskit.visualization.pulse.interpolation

interpolation module for pulse visualization.

## Functions

|                                                                                                                                                   |                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| [`interp1d`](#qiskit.visualization.pulse.interpolation.interp1d "qiskit.visualization.pulse.interpolation.interp1d")(time, samples, nop\[, kind]) | Scipy interpolation wrapper.                  |
| [`step_wise`](#qiskit.visualization.pulse.interpolation.step_wise "qiskit.visualization.pulse.interpolation.step_wise")(time, samples, nop)       | Keep uniform variation between sample values. |

<span id="undefined" />

`cubic_spline(time: numpy.ndarray, samples: numpy.ndarray, nop: int, *, kind: str = 'cubic') → Tuple[numpy.ndarray, numpy.ndarray, numpy.ndarray]`

Apply cubic interpolation between sampling points.

**Parameters**

*   **time** – Time vector with length of `samples` + 1.
*   **samples** – Complex pulse envelope.
*   **nop** – Number of data points for interpolation.

**Returns**

Interpolated time vector and real and imaginary part of waveform.

<span id="undefined" />

`interp1d(time, samples, nop, kind='linear')`

Scipy interpolation wrapper.

**Parameters**

*   **time** (`ndarray`) – Time vector with length of `samples` + 1.
*   **samples** (`ndarray`) – Complex pulse envelope.
*   **nop** (`int`) – Number of data points for interpolation.
*   **kind** (`str`) – Scipy interpolation type. See `scipy.interpolate.interp1d` documentation for more information.

**Return type**

`Tuple`\[`ndarray`, `ndarray`, `ndarray`]

**Returns**

Interpolated time vector and real and imaginary part of waveform.

<span id="undefined" />

`linear(time: numpy.ndarray, samples: numpy.ndarray, nop: int, *, kind: str = 'linear') → Tuple[numpy.ndarray, numpy.ndarray, numpy.ndarray]`

Apply linear interpolation between sampling points.

**Parameters**

*   **time** – Time vector with length of `samples` + 1.
*   **samples** – Complex pulse envelope.
*   **nop** – Number of data points for interpolation.

**Returns**

Interpolated time vector and real and imaginary part of waveform.

<span id="undefined" />

`step_wise(time, samples, nop)`

Keep uniform variation between sample values. No interpolation is applied. :type time: `ndarray` :param time: Time vector with length of `samples` + 1. :type samples: `ndarray` :param samples: Complex pulse envelope. :type nop: `int` :param nop: This argument is not used.

**Return type**

`Tuple`\[`ndarray`, `ndarray`, `ndarray`]

**Returns**

Time vector and real and imaginary part of waveform.

