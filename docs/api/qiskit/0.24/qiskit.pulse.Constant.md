<span id="qiskit-pulse-constant" />

# qiskit.pulse.Constant

<span id="undefined" />

`Constant(duration, amp, name=None)`

A simple constant pulse, with an amplitude value and a duration:

$$
f(x) = amp    ,  0 <= x < duration
f(x) = 0      ,  elsewhere
$$

Initialize the constant-valued pulse.

**Parameters**

*   **duration** (`int`) – Pulse length in terms of the the sampling period dt.
*   **amp** (`Union`\[`complex`, `ParameterExpression`]) – The amplitude of the constant square pulse.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.

<span id="undefined" />

`__init__(duration, amp, name=None)`

Initialize the constant-valued pulse.

**Parameters**

*   **duration** (`int`) – Pulse length in terms of the the sampling period dt.
*   **amp** (`Union`\[`complex`, `ParameterExpression`]) – The amplitude of the constant square pulse.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.

## Methods

|                                                                                                                        |                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`__init__`](#qiskit.pulse.Constant.__init__ "qiskit.pulse.Constant.__init__")(duration, amp\[, name])                 | Initialize the constant-valued pulse.                                                                                          |
| [`assign_parameters`](#qiskit.pulse.Constant.assign_parameters "qiskit.pulse.Constant.assign_parameters")(value\_dict) | Return a new ParametricPulse with parameters assigned.                                                                         |
| [`draw`](#qiskit.pulse.Constant.draw "qiskit.pulse.Constant.draw")(\[dt, style, filename, interp\_method, …])          | Plot the pulse.                                                                                                                |
| [`get_sample_pulse`](#qiskit.pulse.Constant.get_sample_pulse "qiskit.pulse.Constant.get_sample_pulse")()               | Deprecated.                                                                                                                    |
| [`get_waveform`](#qiskit.pulse.Constant.get_waveform "qiskit.pulse.Constant.get_waveform")()                           | Return a Waveform with samples filled according to the formula that the pulse represents and the parameter values it contains. |
| [`validate_parameters`](#qiskit.pulse.Constant.validate_parameters "qiskit.pulse.Constant.validate_parameters")()      | Validate parameters.                                                                                                           |

## Attributes

|                                                                                      |                                                        |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| [`amp`](#qiskit.pulse.Constant.amp "qiskit.pulse.Constant.amp")                      | The constant value amplitude.                          |
| [`id`](#qiskit.pulse.Constant.id "qiskit.pulse.Constant.id")                         | Unique identifier for this pulse.                      |
| [`parameters`](#qiskit.pulse.Constant.parameters "qiskit.pulse.Constant.parameters") | Return a dictionary containing the pulse’s parameters. |

<span id="undefined" />

`property amp`

The constant value amplitude.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

<span id="undefined" />

`assign_parameters(value_dict)`

Return a new ParametricPulse with parameters assigned.

**Parameters**

**value\_dict** (`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`, `int`]]) – A mapping from Parameters to either numeric values or another Parameter expression.

**Return type**

`ParametricPulse`

**Returns**

New pulse with updated parameters.

<span id="undefined" />

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

<span id="undefined" />

`get_sample_pulse()`

Deprecated.

**Return type**

`Waveform`

<span id="undefined" />

`get_waveform()`

Return a Waveform with samples filled according to the formula that the pulse represents and the parameter values it contains.

**Return type**

`Waveform`

<span id="undefined" />

`property id`

Unique identifier for this pulse.

**Return type**

`int`

<span id="undefined" />

`property parameters`

Return a dictionary containing the pulse’s parameters.

**Return type**

`Dict`\[`str`, `Any`]

<span id="undefined" />

`validate_parameters()`

Validate parameters.

**Raises**

[**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the parameters passed are not valid.

**Return type**

`None`
