---
title: SetFrequency
description: API reference for qiskit.pulse.SetFrequency
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.SetFrequency
---

# SetFrequency

<span id="qiskit.pulse.SetFrequency" />

`SetFrequency(frequency, channel, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/pulse/instructions/frequency.py "view source code")

Set the channel frequency. This command operates on `PulseChannel` s. A `PulseChannel` creates pulses of the form

$$
Re[\exp(i 2\pi f jdt + \phi) d_j].
$$

Here, $f$ is the frequency of the channel. The command `SetFrequency` allows the user to set the value of $f$. All pulses that are played on a channel after SetFrequency has been called will have the corresponding frequency.

The duration of SetFrequency is 0.

Creates a new set channel frequency instruction.

**Parameters**

*   **frequency** (`float`) – New frequency of the channel in Hz.
*   **channel** (`Optional`\[[`PulseChannel`](qiskit.pulse.channels#pulsechannel "qiskit.pulse.channels.PulseChannel")]) – The channel this instruction operates on.
*   **name** (`Optional`\[`str`]) – Name of this set channel frequency command.

## Attributes

### channel

<span id="qiskit.pulse.SetFrequency.channel" />

`qiskit.pulse.channels.PulseChannel`

Return the [`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on.

**Return type**

[`PulseChannel`](qiskit.pulse.channels#pulsechannel "qiskit.pulse.channels.PulseChannel")

### channels

<span id="qiskit.pulse.SetFrequency.channels" />

`Tuple[qiskit.pulse.channels.Channel]`

Returns channels that this schedule uses.

**Return type**

`Tuple`\[[`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel")]

### command

<span id="qiskit.pulse.SetFrequency.command" />

`qiskit.pulse.commands.command.Command`

The associated command. Commands are deprecated, so this method will be deprecated shortly.

**Return type**

`Command`

### duration

<span id="qiskit.pulse.SetFrequency.duration" />

`int`

Duration of this instruction.

**Return type**

`int`

### frequency

<span id="qiskit.pulse.SetFrequency.frequency" />

`float`

New frequency.

**Return type**

`float`

### id

<span id="qiskit.pulse.SetFrequency.id" />

`int`

Unique identifier for this instruction.

**Return type**

`int`

### instructions

<span id="qiskit.pulse.SetFrequency.instructions" />

`Tuple[Tuple[int, qiskit.pulse.instructions.instruction.Instruction]]`

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, [`Instruction`](qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")]]

### name

<span id="qiskit.pulse.SetFrequency.name" />

`str`

Name of this instruction.

**Return type**

`str`

### operands

<span id="qiskit.pulse.SetFrequency.operands" />

`Tuple`

Return instruction operands.

**Return type**

`Tuple`

### start\_time

<span id="qiskit.pulse.SetFrequency.start_time" />

`int`

Relative begin time of this instruction.

**Return type**

`int`

### stop\_time

<span id="qiskit.pulse.SetFrequency.stop_time" />

`int`

Relative end time of this instruction.

**Return type**

`int`

### timeslots

<span id="qiskit.pulse.SetFrequency.timeslots" />

`Dict[qiskit.pulse.channels.Channel, List[Tuple[int, int]]]`

Occupied time slots by this instruction.

**Return type**

`Dict`\[[`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel"), `List`\[`Tuple`\[`int`, `int`]]]

## Methods

### append

<span id="qiskit.pulse.SetFrequency.append" />

`SetFrequency.append(schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

**Parameters**

*   **schedule** (`ScheduleComponent`) – schedule to be appended
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

### ch\_duration

<span id="qiskit.pulse.SetFrequency.ch_duration" />

`SetFrequency.ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_start\_time

<span id="qiskit.pulse.SetFrequency.ch_start_time" />

`SetFrequency.ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_stop\_time

<span id="qiskit.pulse.SetFrequency.ch_stop_time" />

`SetFrequency.ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### draw

<span id="qiskit.pulse.SetFrequency.draw" />

`SetFrequency.draw(dt=1, style=None, filename=None, interp_method=None, scale=1, channels_to_plot=None, plot_all=False, plot_range=None, interactive=False, table=True, label=False, framechange=True, scaling=None, channels=None)`

Plot the instruction.

**Parameters**

*   **dt** (`float`) – Time interval of samples
*   **style** (*Optional\[*[*SchedStyle*](qiskit.visualization.pulse.qcstyle#schedstyle "qiskit.visualization.pulse.qcstyle.SchedStyle")*]*) – A style sheet to configure plot appearance
*   **filename** (`Optional`\[`str`]) – Name required to save pulse image
*   **interp\_method** (`Optional`\[`Callable`]) – A function for interpolation
*   **scale** (`float`) – Relative visual scaling of waveform amplitudes
*   **channels\_to\_plot** (`Optional`\[`List`\[[`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel")]]) – Deprecated, see channels
*   **plot\_all** (`bool`) – Plot empty channels
*   **plot\_range** (`Optional`\[`Tuple`\[`float`]]) – A tuple of time range to plot
*   **interactive** (`bool`) – When set true show the circuit in a new window (this depends on the matplotlib backend being used supporting this)
*   **table** (`bool`) – Draw event table for supported instructions
*   **label** (`bool`) – Label individual instructions
*   **framechange** (`bool`) – Add framechange indicators
*   **scaling** (`Optional`\[`float`]) – Deprecated, see scale
*   **channels** (`Optional`\[`List`\[[`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel")]]) – A list of channel names to plot

**Returns**

A matplotlib figure object of the pulse schedule

**Return type**

matplotlib.figure

### flatten

<span id="qiskit.pulse.SetFrequency.flatten" />

`SetFrequency.flatten()`

Return itself as already single instruction.

**Return type**

[`Instruction`](qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")

### insert

<span id="qiskit.pulse.SetFrequency.insert" />

`SetFrequency.insert(start_time, schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.

**Parameters**

*   **start\_time** (`int`) – Time to insert the schedule schedule
*   **schedule** (`ScheduleComponent`) – Schedule to insert
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

### shift

<span id="qiskit.pulse.SetFrequency.shift" />

`SetFrequency.shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** (`int`) – Time to shift by
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

### union

<span id="qiskit.pulse.SetFrequency.union" />

`SetFrequency.union(*schedules, name=None)`

Return a new schedule which is the union of self and schedule.

**Parameters**

*   **\*schedules** – Schedules to be take the union with this Instruction.
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

