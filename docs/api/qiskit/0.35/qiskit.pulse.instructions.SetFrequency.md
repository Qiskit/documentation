---
title: SetFrequency
description: API reference for qiskit.pulse.instructions.SetFrequency
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.instructions.SetFrequency
---

# SetFrequency

<span id="qiskit.pulse.instructions.SetFrequency" />

`SetFrequency(frequency, channel, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/pulse/instructions/frequency.py "view source code")

Bases: `qiskit.pulse.instructions.instruction.Instruction`

Set the channel frequency. This instruction operates on `PulseChannel` s. A `PulseChannel` creates pulses of the form

$$
Re[\exp(i 2\pi f jdt + \phi) d_j].
$$

Here, $f$ is the frequency of the channel. The instruction `SetFrequency` allows the user to set the value of $f$. All pulses that are played on a channel after SetFrequency has been called will have the corresponding frequency.

The duration of SetFrequency is 0.

Creates a new set channel frequency instruction.

**Parameters**

*   **frequency** (`Union`\[`float`, `ParameterExpression`]) – New frequency of the channel in Hz.
*   **channel** (`PulseChannel`) – The channel this instruction operates on.
*   **name** (`Optional`\[`str`]) – Name of this set channel frequency instruction.

## Methods

### append

<span id="qiskit.pulse.instructions.SetFrequency.append" />

`SetFrequency.append(schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

**Parameters**

*   **schedule** (*Union\['Schedule', 'Instruction']*) – Schedule or instruction to be appended
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Returns**

A new schedule with `schedule` a this instruction at t=0.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

### ch\_duration

<span id="qiskit.pulse.instructions.SetFrequency.ch_duration" />

`SetFrequency.ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_start\_time

<span id="qiskit.pulse.instructions.SetFrequency.ch_start_time" />

`SetFrequency.ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_stop\_time

<span id="qiskit.pulse.instructions.SetFrequency.ch_stop_time" />

`SetFrequency.ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### draw

<span id="qiskit.pulse.instructions.SetFrequency.draw" />

`SetFrequency.draw(dt=1, style=None, filename=None, interp_method=None, scale=1, plot_all=False, plot_range=None, interactive=False, table=True, label=False, framechange=True, channels=None)`

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
*   **channels** (`Optional`\[`List`\[[`Channel`](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]]) – A list of channel names to plot

**Returns**

A matplotlib figure object of the pulse schedule

**Return type**

matplotlib.figure

### insert

<span id="qiskit.pulse.instructions.SetFrequency.insert" />

`SetFrequency.insert(start_time, schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.

**Parameters**

*   **start\_time** (`int`) – Time to insert the schedule schedule
*   **schedule** (*Union\['Schedule', 'Instruction']*) – Schedule or instruction to insert
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Returns**

A new schedule with `schedule` inserted with this instruction at t=0.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

### is\_parameterized

<span id="qiskit.pulse.instructions.SetFrequency.is_parameterized" />

`SetFrequency.is_parameterized()`

Return True iff the instruction is parameterized.

**Return type**

`bool`

### shift

<span id="qiskit.pulse.instructions.SetFrequency.shift" />

`SetFrequency.shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** (`int`) – Time to shift by
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Returns**

The shifted schedule.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

## Attributes

<span id="qiskit.pulse.instructions.SetFrequency.channel" />

### channel

Return the [`Channel`](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on.

**Return type**

`PulseChannel`

<span id="qiskit.pulse.instructions.SetFrequency.channels" />

### channels

Returns the channels that this schedule uses.

**Return type**

`Tuple`\[`PulseChannel`]

<span id="qiskit.pulse.instructions.SetFrequency.duration" />

### duration

Duration of this instruction.

**Return type**

`int`

<span id="qiskit.pulse.instructions.SetFrequency.frequency" />

### frequency

New frequency.

**Return type**

`Union`\[`float`, `ParameterExpression`]

<span id="qiskit.pulse.instructions.SetFrequency.id" />

### id

Unique identifier for this instruction.

**Return type**

`int`

<span id="qiskit.pulse.instructions.SetFrequency.instructions" />

### instructions

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, `Instruction`]]

<span id="qiskit.pulse.instructions.SetFrequency.name" />

### name

Name of this instruction.

**Return type**

`str`

<span id="qiskit.pulse.instructions.SetFrequency.operands" />

### operands

Return instruction operands.

**Return type**

`Tuple`

<span id="qiskit.pulse.instructions.SetFrequency.parameters" />

### parameters

Parameters which determine the instruction behavior.

**Return type**

`Set`

<span id="qiskit.pulse.instructions.SetFrequency.start_time" />

### start\_time

Relative begin time of this instruction.

**Return type**

`int`

<span id="qiskit.pulse.instructions.SetFrequency.stop_time" />

### stop\_time

Relative end time of this instruction.

**Return type**

`int`

