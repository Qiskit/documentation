---
title: SamplePulse
description: API reference for qiskit.pulse.pulse_lib.SamplePulse
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.pulse_lib.SamplePulse
---

# SamplePulse

<span id="qiskit.pulse.pulse_lib.SamplePulse" />

`SamplePulse(samples, name=None, epsilon=1e-07)`

A pulse specified completely by complex-valued samples; each sample is played for the duration of the backend cycle-time, dt.

Create new sample pulse command.

**Parameters**

*   **samples** (`Union`\[`ndarray`, `List`\[`complex`]]) – Complex array of the samples in the pulse envelope.
*   **name** (`Optional`\[`str`]) – Unique name to identify the pulse.
*   **epsilon** (`float`) – Pulse sample norm tolerance for clipping. If any sample’s norm exceeds unity by less than or equal to epsilon it will be clipped to unit norm. If the sample norm is greater than 1+epsilon an error will be raised.

## Attributes

|                                                                                                                  |                                   |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [`SamplePulse.id`](qiskit.pulse.pulse_lib.SamplePulse.id "qiskit.pulse.pulse_lib.SamplePulse.id")                | Unique identifier for this pulse. |
| [`SamplePulse.samples`](qiskit.pulse.pulse_lib.SamplePulse.samples "qiskit.pulse.pulse_lib.SamplePulse.samples") | Return sample values.             |

## Methods

|                                                                                                                                    |                                          |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [`SamplePulse.__call__`](qiskit.pulse.pulse_lib.SamplePulse.__call__ "qiskit.pulse.pulse_lib.SamplePulse.__call__")(channel)       | Call self as a function.                 |
| [`SamplePulse.draw`](qiskit.pulse.pulse_lib.SamplePulse.draw "qiskit.pulse.pulse_lib.SamplePulse.draw")(\[dt, style, filename, …]) | Plot the interpolated envelope of pulse. |

