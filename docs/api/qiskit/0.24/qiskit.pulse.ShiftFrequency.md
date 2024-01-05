---
title: ShiftFrequency
description: API reference for qiskit.pulse.ShiftFrequency
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.ShiftFrequency
---

<span id="qiskit-pulse-shiftfrequency" />

# qiskit.pulse.ShiftFrequency

<span id="qiskit.pulse.ShiftFrequency" />

`ShiftFrequency(frequency, channel, name=None)`

Shift the channel frequency away from the current frequency.

Creates a new shift frequency instruction.

**Parameters**

*   **frequency** (`Union`\[`float`, `ParameterExpression`]) – Frequency shift of the channel in Hz.
*   **channel** ([`PulseChannel`](qiskit.pulse.channels#PulseChannel "qiskit.pulse.channels.PulseChannel")) – The channel this instruction operates on.
*   **name** (`Optional`\[`str`]) – Name of this set channel frequency instruction.

### \_\_init\_\_

<span id="qiskit.pulse.ShiftFrequency.__init__" />

`__init__(frequency, channel, name=None)`

Creates a new shift frequency instruction.

**Parameters**

*   **frequency** (`Union`\[`float`, `ParameterExpression`]) – Frequency shift of the channel in Hz.
*   **channel** ([`PulseChannel`](qiskit.pulse.channels#PulseChannel "qiskit.pulse.channels.PulseChannel")) – The channel this instruction operates on.
*   **name** (`Optional`\[`str`]) – Name of this set channel frequency instruction.

## Methods

## Attributes

### append

<span id="qiskit.pulse.ShiftFrequency.append" />

`append(schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

**Parameters**

*   **schedule** (`ScheduleComponent`) – schedule to be appended
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

`Schedule`

### assign\_parameters

<span id="qiskit.pulse.ShiftFrequency.assign_parameters" />

`assign_parameters(value_dict)`

Modify and return self with parameters assigned according to the input.

**Parameters**

**value\_dict** (`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`, `int`]]) – A mapping from Parameters to either numeric values or another Parameter expression.

**Return type**

`Instruction`

**Returns**

Self with updated parameters.

### ch\_duration

<span id="qiskit.pulse.ShiftFrequency.ch_duration" />

`ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_start\_time

<span id="qiskit.pulse.ShiftFrequency.ch_start_time" />

`ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_stop\_time

<span id="qiskit.pulse.ShiftFrequency.ch_stop_time" />

`ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### channel

<span id="qiskit.pulse.ShiftFrequency.channel" />

`property channel`

Return the [`Channel`](qiskit.pulse.channels#Channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on.

**Return type**

[`PulseChannel`](qiskit.pulse.channels#PulseChannel "qiskit.pulse.channels.PulseChannel")

### channels

<span id="qiskit.pulse.ShiftFrequency.channels" />

`property channels`

Returns channels that this schedule uses.

**Return type**

`Tuple`\[[`Channel`](qiskit.pulse.channels#Channel "qiskit.pulse.channels.Channel")]

### command

<span id="qiskit.pulse.ShiftFrequency.command" />

`property command`

The associated command. Commands are deprecated, so this method will be deprecated shortly.

**Returns**

The deprecated command if available.

**Return type**

[Command](qiskit.providers.models.Command "qiskit.providers.models.Command")

### draw

<span id="qiskit.pulse.ShiftFrequency.draw" />

`draw(dt=1, style=None, filename=None, interp_method=None, scale=1, plot_all=False, plot_range=None, interactive=False, table=True, label=False, framechange=True, channels=None)`

Plot the instruction.

**Parameters**

*   **dt** (`float`) – Time interval of samples
*   **style** (*Optional\[*[*SchedStyle*](qiskit.visualization.pulse.qcstyle#SchedStyle "qiskit.visualization.pulse.qcstyle.SchedStyle")*]*) – A style sheet to configure plot appearance
*   **filename** (`Optional`\[`str`]) – Name required to save pulse image
*   **interp\_method** (`Optional`\[`Callable`]) – A function for interpolation
*   **scale** (`float`) – Relative visual scaling of waveform amplitudes
*   **plot\_all** (`bool`) – Plot empty channels
*   **plot\_range** (`Optional`\[`Tuple`\[`float`]]) – A tuple of time range to plot
*   **interactive** (`bool`) – When set true show the circuit in a new window (this depends on the matplotlib backend being used supporting this)
*   **table** (`bool`) – Draw event table for supported instructions
*   **label** (`bool`) – Label individual instructions
*   **framechange** (`bool`) – Add framechange indicators
*   **channels** (`Optional`\[`List`\[[`Channel`](qiskit.pulse.channels#Channel "qiskit.pulse.channels.Channel")]]) – A list of channel names to plot

**Returns**

A matplotlib figure object of the pulse schedule

**Return type**

matplotlib.figure

### duration

<span id="qiskit.pulse.ShiftFrequency.duration" />

`property duration`

Duration of this instruction.

**Return type**

`int`

### flatten

<span id="qiskit.pulse.ShiftFrequency.flatten" />

`flatten()`

Return itself as already single instruction.

**Return type**

`Instruction`

### frequency

<span id="qiskit.pulse.ShiftFrequency.frequency" />

`property frequency`

Frequency shift from the set frequency.

**Return type**

`Union`\[`float`, `ParameterExpression`]

### id

<span id="qiskit.pulse.ShiftFrequency.id" />

`property id`

Unique identifier for this instruction.

**Return type**

`int`

### insert

<span id="qiskit.pulse.ShiftFrequency.insert" />

`insert(start_time, schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.

**Parameters**

*   **start\_time** (`int`) – Time to insert the schedule schedule
*   **schedule** (`ScheduleComponent`) – Schedule to insert
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

`Schedule`

### instructions

<span id="qiskit.pulse.ShiftFrequency.instructions" />

`property instructions`

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, `Instruction`]]

### name

<span id="qiskit.pulse.ShiftFrequency.name" />

`property name`

Name of this instruction.

**Return type**

`str`

### operands

<span id="qiskit.pulse.ShiftFrequency.operands" />

`property operands`

Return instruction operands.

**Return type**

`Tuple`

### shift

<span id="qiskit.pulse.ShiftFrequency.shift" />

`shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** (`int`) – Time to shift by
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

`Schedule`

### start\_time

<span id="qiskit.pulse.ShiftFrequency.start_time" />

`property start_time`

Relative begin time of this instruction.

**Return type**

`int`

### stop\_time

<span id="qiskit.pulse.ShiftFrequency.stop_time" />

`property stop_time`

Relative end time of this instruction.

**Return type**

`int`

### timeslots

<span id="qiskit.pulse.ShiftFrequency.timeslots" />

`property timeslots`

Occupied time slots by this instruction.

**Return type**

`Dict`\[[`Channel`](qiskit.pulse.channels#Channel "qiskit.pulse.channels.Channel"), `List`\[`Tuple`\[`int`, `int`]]]

