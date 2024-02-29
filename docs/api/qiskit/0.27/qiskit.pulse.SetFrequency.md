---
title: SetFrequency
description: API reference for qiskit.pulse.SetFrequency
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.SetFrequency
---

# qiskit.pulse.SetFrequency

<span id="qiskit.pulse.SetFrequency" />

`SetFrequency(frequency, channel, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.17/qiskit/pulse/instructions/frequency.py "view source code")

Set the channel frequency. This instruction operates on `PulseChannel` s. A `PulseChannel` creates pulses of the form

$$
Re[\exp(i 2\pi f jdt + \phi) d_j].
$$

Here, $f$ is the frequency of the channel. The instruction `SetFrequency` allows the user to set the value of $f$. All pulses that are played on a channel after SetFrequency has been called will have the corresponding frequency.

The duration of SetFrequency is 0.

Creates a new set channel frequency instruction.

**Parameters**

*   **frequency** (`Union`\[`float`, `ParameterExpression`]) – New frequency of the channel in Hz.
*   **channel** ([`PulseChannel`](qiskit.pulse.channels#pulsechannel "qiskit.pulse.channels.PulseChannel")) – The channel this instruction operates on.
*   **name** (`Optional`\[`str`]) – Name of this set channel frequency instruction.

### \_\_init\_\_

<span id="qiskit.pulse.SetFrequency.__init__" />

`__init__(frequency, channel, name=None)`

Creates a new set channel frequency instruction.

**Parameters**

*   **frequency** (`Union`\[`float`, `ParameterExpression`]) – New frequency of the channel in Hz.
*   **channel** ([`PulseChannel`](qiskit.pulse.channels#pulsechannel "qiskit.pulse.channels.PulseChannel")) – The channel this instruction operates on.
*   **name** (`Optional`\[`str`]) – Name of this set channel frequency instruction.

## Methods

|                                                                                                                                |                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.pulse.SetFrequency.__init__ "qiskit.pulse.SetFrequency.__init__")(frequency, channel\[, name])            | Creates a new set channel frequency instruction.                                                                                                                              |
| [`append`](#qiskit.pulse.SetFrequency.append "qiskit.pulse.SetFrequency.append")(schedule\[, name])                            | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`assign_parameters`](#qiskit.pulse.SetFrequency.assign_parameters "qiskit.pulse.SetFrequency.assign_parameters")(value\_dict) | Modify and return self with parameters assigned according to the input.                                                                                                       |
| [`ch_duration`](#qiskit.pulse.SetFrequency.ch_duration "qiskit.pulse.SetFrequency.ch_duration")(\*channels)                    | Return duration of the supplied channels in this Instruction.                                                                                                                 |
| [`ch_start_time`](#qiskit.pulse.SetFrequency.ch_start_time "qiskit.pulse.SetFrequency.ch_start_time")(\*channels)              | Return minimum start time for supplied channels.                                                                                                                              |
| [`ch_stop_time`](#qiskit.pulse.SetFrequency.ch_stop_time "qiskit.pulse.SetFrequency.ch_stop_time")(\*channels)                 | Return maximum start time for supplied channels.                                                                                                                              |
| [`draw`](#qiskit.pulse.SetFrequency.draw "qiskit.pulse.SetFrequency.draw")(\[dt, style, filename, interp\_method, …])          | Plot the instruction.                                                                                                                                                         |
| [`flatten`](#qiskit.pulse.SetFrequency.flatten "qiskit.pulse.SetFrequency.flatten")()                                          | Return itself as already single instruction.                                                                                                                                  |
| [`insert`](#qiskit.pulse.SetFrequency.insert "qiskit.pulse.SetFrequency.insert")(start\_time, schedule\[, name])               | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`is_parameterized`](#qiskit.pulse.SetFrequency.is_parameterized "qiskit.pulse.SetFrequency.is_parameterized")()               | Return True iff the instruction is parameterized.                                                                                                                             |
| [`shift`](#qiskit.pulse.SetFrequency.shift "qiskit.pulse.SetFrequency.shift")(time\[, name])                                   | Return a new schedule shifted forward by time.                                                                                                                                |

## Attributes

|                                                                                                    |                                                                                                                              |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [`channel`](#qiskit.pulse.SetFrequency.channel "qiskit.pulse.SetFrequency.channel")                | Return the [`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on. |
| [`channels`](#qiskit.pulse.SetFrequency.channels "qiskit.pulse.SetFrequency.channels")             | Returns the channels that this schedule uses.                                                                                |
| [`duration`](#qiskit.pulse.SetFrequency.duration "qiskit.pulse.SetFrequency.duration")             | Duration of this instruction.                                                                                                |
| [`frequency`](#qiskit.pulse.SetFrequency.frequency "qiskit.pulse.SetFrequency.frequency")          | New frequency.                                                                                                               |
| [`id`](#qiskit.pulse.SetFrequency.id "qiskit.pulse.SetFrequency.id")                               | Unique identifier for this instruction.                                                                                      |
| [`instructions`](#qiskit.pulse.SetFrequency.instructions "qiskit.pulse.SetFrequency.instructions") | Iterable for getting instructions from Schedule tree.                                                                        |
| [`name`](#qiskit.pulse.SetFrequency.name "qiskit.pulse.SetFrequency.name")                         | Name of this instruction.                                                                                                    |
| [`operands`](#qiskit.pulse.SetFrequency.operands "qiskit.pulse.SetFrequency.operands")             | Return instruction operands.                                                                                                 |
| [`parameters`](#qiskit.pulse.SetFrequency.parameters "qiskit.pulse.SetFrequency.parameters")       | Parameters which determine the instruction behavior.                                                                         |
| [`start_time`](#qiskit.pulse.SetFrequency.start_time "qiskit.pulse.SetFrequency.start_time")       | Relative begin time of this instruction.                                                                                     |
| [`stop_time`](#qiskit.pulse.SetFrequency.stop_time "qiskit.pulse.SetFrequency.stop_time")          | Relative end time of this instruction.                                                                                       |

### append

<span id="qiskit.pulse.SetFrequency.append" />

`append(schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

**Parameters**

*   **schedule** (*Union\['Schedule', 'Instruction']*) – Schedule or instruction to be appended
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Returns**

A new schedule with `schedule` a this instruction at t=0.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

### assign\_parameters

<span id="qiskit.pulse.SetFrequency.assign_parameters" />

`assign_parameters(value_dict)`

Modify and return self with parameters assigned according to the input.

**Parameters**

**value\_dict** (`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`, `int`]]) – A mapping from Parameters to either numeric values or another Parameter expression.

**Return type**

`Instruction`

**Returns**

Self with updated parameters.

### ch\_duration

<span id="qiskit.pulse.SetFrequency.ch_duration" />

`ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_start\_time

<span id="qiskit.pulse.SetFrequency.ch_start_time" />

`ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_stop\_time

<span id="qiskit.pulse.SetFrequency.ch_stop_time" />

`ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### channel

<span id="qiskit.pulse.SetFrequency.channel" />

`property channel`

Return the [`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on.

**Return type**

[`PulseChannel`](qiskit.pulse.channels#pulsechannel "qiskit.pulse.channels.PulseChannel")

### channels

<span id="qiskit.pulse.SetFrequency.channels" />

`property channels`

Returns the channels that this schedule uses.

**Return type**

`Tuple`\[[`PulseChannel`](qiskit.pulse.channels#pulsechannel "qiskit.pulse.channels.PulseChannel")]

### draw

<span id="qiskit.pulse.SetFrequency.draw" />

`draw(dt=1, style=None, filename=None, interp_method=None, scale=1, plot_all=False, plot_range=None, interactive=False, table=True, label=False, framechange=True, channels=None)`

Plot the instruction.

**Parameters**

*   **dt** (`float`) – Time interval of samples
*   **style** (*Optional\[SchedStyle]*) – A style sheet to configure plot appearance
*   **filename** (`Optional`\[`str`]) – Name required to save pulse image
*   **interp\_method** (`Optional`\[`Callable`]) – A function for interpolation
*   **scale** (`float`) – Relative visual scaling of waveform amplitudes
*   **plot\_all** (`bool`) – Plot empty channels
*   **plot\_range** (`Optional`\[`Tuple`\[`float`]]) – A tuple of time range to plot
*   **interactive** (`bool`) – When set true show the circuit in a new window (this depends on the matplotlib backend being used supporting this)
*   **table** (`bool`) – Draw event table for supported instructions
*   **label** (`bool`) – Label individual instructions
*   **framechange** (`bool`) – Add framechange indicators
*   **channels** (`Optional`\[`List`\[[`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel")]]) – A list of channel names to plot

**Returns**

A matplotlib figure object of the pulse schedule

**Return type**

matplotlib.figure

### duration

<span id="qiskit.pulse.SetFrequency.duration" />

`property duration`

Duration of this instruction.

**Return type**

`int`

### flatten

<span id="qiskit.pulse.SetFrequency.flatten" />

`flatten()`

Return itself as already single instruction.

**Return type**

`Instruction`

### frequency

<span id="qiskit.pulse.SetFrequency.frequency" />

`property frequency`

New frequency.

**Return type**

`Union`\[`float`, `ParameterExpression`]

### id

<span id="qiskit.pulse.SetFrequency.id" />

`property id`

Unique identifier for this instruction.

**Return type**

`int`

### insert

<span id="qiskit.pulse.SetFrequency.insert" />

`insert(start_time, schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.

**Parameters**

*   **start\_time** (`int`) – Time to insert the schedule schedule
*   **schedule** (*Union\['Schedule', 'Instruction']*) – Schedule or instruction to insert
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Returns**

A new schedule with `schedule` inserted with this instruction at t=0.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

### instructions

<span id="qiskit.pulse.SetFrequency.instructions" />

`property instructions`

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, `Instruction`]]

### is\_parameterized

<span id="qiskit.pulse.SetFrequency.is_parameterized" />

`is_parameterized()`

Return True iff the instruction is parameterized.

**Return type**

`bool`

### name

<span id="qiskit.pulse.SetFrequency.name" />

`property name`

Name of this instruction.

**Return type**

`str`

### operands

<span id="qiskit.pulse.SetFrequency.operands" />

`property operands`

Return instruction operands.

**Return type**

`Tuple`

### parameters

<span id="qiskit.pulse.SetFrequency.parameters" />

`property parameters`

Parameters which determine the instruction behavior.

**Return type**

`Set`

### shift

<span id="qiskit.pulse.SetFrequency.shift" />

`shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** (`int`) – Time to shift by
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Returns**

The shifted schedule.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

### start\_time

<span id="qiskit.pulse.SetFrequency.start_time" />

`property start_time`

Relative begin time of this instruction.

**Return type**

`int`

### stop\_time

<span id="qiskit.pulse.SetFrequency.stop_time" />

`property stop_time`

Relative end time of this instruction.

**Return type**

`int`

