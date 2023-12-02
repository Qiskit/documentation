<span id="qiskit-pulse-library-waveform" />

# qiskit.pulse.library.Waveform

<span id="undefined" />

`Waveform(samples, name=None, epsilon=1e-07)`

A pulse specified completely by complex-valued samples; each sample is played for the duration of the backend cycle-time, dt.

Create new sample pulse command.

**Parameters**

*   **samples** (`Union`\[`ndarray`, `List`\[`complex`]]) – Complex array of the samples in the pulse envelope.
*   **name** (`Optional`\[`str`]) – Unique name to identify the pulse.
*   **epsilon** (`float`) – Pulse sample norm tolerance for clipping. If any sample’s norm exceeds unity by less than or equal to epsilon it will be clipped to unit norm. If the sample norm is greater than 1+epsilon an error will be raised.

<span id="undefined" />

`__init__(samples, name=None, epsilon=1e-07)`

Create new sample pulse command.

**Parameters**

*   **samples** (`Union`\[`ndarray`, `List`\[`complex`]]) – Complex array of the samples in the pulse envelope.
*   **name** (`Optional`\[`str`]) – Unique name to identify the pulse.
*   **epsilon** (`float`) – Pulse sample norm tolerance for clipping. If any sample’s norm exceeds unity by less than or equal to epsilon it will be clipped to unit norm. If the sample norm is greater than 1+epsilon an error will be raised.

## Methods

|                                                                                                                                        |                                              |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`__init__`](#qiskit.pulse.library.Waveform.__init__ "qiskit.pulse.library.Waveform.__init__")(samples\[, name, epsilon])              | Create new sample pulse command.             |
| [`assign_parameters`](#qiskit.pulse.library.Waveform.assign_parameters "qiskit.pulse.library.Waveform.assign_parameters")(value\_dict) | Return a new pulse with parameters assigned. |
| [`draw`](#qiskit.pulse.library.Waveform.draw "qiskit.pulse.library.Waveform.draw")(\[dt, style, filename, interp\_method, …])          | Plot the interpolated envelope of pulse.     |

## Attributes

|                                                                                             |                                   |
| ------------------------------------------------------------------------------------------- | --------------------------------- |
| [`id`](#qiskit.pulse.library.Waveform.id "qiskit.pulse.library.Waveform.id")                | Unique identifier for this pulse. |
| [`samples`](#qiskit.pulse.library.Waveform.samples "qiskit.pulse.library.Waveform.samples") | Return sample values.             |

<span id="undefined" />

`assign_parameters(value_dict)`

Return a new pulse with parameters assigned.

**Parameters**

**value\_dict** (`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`, `int`]]) – A mapping from Parameters to either numeric values or another Parameter expression.

**Return type**

`Waveform`

**Returns**

New pulse with updated parameters.

<span id="undefined" />

`draw(dt=1, style=None, filename=None, interp_method=None, scale=1, interactive=False)`

Plot the interpolated envelope of pulse.

**Parameters**

*   **dt** (`float`) – Time interval of samples.
*   **style** (*Optional\[*[*PulseStyle*](qiskit.visualization.pulse.qcstyle#PulseStyle "qiskit.visualization.pulse.qcstyle.PulseStyle")*]*) – A style sheet to configure plot appearance.
*   **filename** (`Optional`\[`str`]) – Name required to save pulse image.
*   **interp\_method** (`Optional`\[`Callable`]) – A function for interpolation.
*   **scale** (`float`) – Relative visual scaling of waveform amplitudes.
*   **interactive** (`bool`) – When set true show the circuit in a new window. (This depends on the matplotlib backend being used.)

**Returns**

A matplotlib figure object of the pulse envelope

**Return type**

matplotlib.figure

<span id="undefined" />

`property id`

Unique identifier for this pulse.

**Return type**

`int`

<span id="undefined" />

`property samples`

Return sample values.

**Return type**

`ndarray`
