---
title: Delay
description: API reference for qiskit.pulse.Delay
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.Delay
---

# Delay

<span id="qiskit.pulse.Delay" />

`Delay(duration, channel=None, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/pulse/instructions/delay.py "view source code")

A blocking instruction with no other effect. The delay is used for aligning and scheduling other instructions.

**Example**

To schedule an instruction at time = 10, on a channel assigned to the variable `channel`, the following could be used:

```python
sched = Schedule(name="Delay instruction example")
sched += Delay(10, channel)
sched += Gaussian(duration, amp, sigma, channel)
```

The `channel` will output no signal from time=0 up until time=10.

Create a new delay instruction.

No other instruction may be scheduled within a `Delay`.

**Parameters**

*   **duration** (`int`) – Length of time of the delay in terms of dt.
*   **channel** (`Optional`\[[`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel")]) – The channel that will have the delay.
*   **name** (`Optional`\[`str`]) – Name of the delay for display purposes.

## Attributes

### channel

<span id="qiskit.pulse.Delay.channel" />

`qiskit.pulse.channels.Channel`

Return the [`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on.

**Return type**

[`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel")

### channels

<span id="qiskit.pulse.Delay.channels" />

`Tuple[qiskit.pulse.channels.Channel]`

Returns channels that this schedule uses.

**Return type**

`Tuple`\[[`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel")]

### command

<span id="qiskit.pulse.Delay.command" />

`qiskit.pulse.commands.command.Command`

The associated command. Commands are deprecated, so this method will be deprecated shortly.

**Return type**

`Command`

### duration

<span id="qiskit.pulse.Delay.duration" />

`int`

Duration of this instruction.

**Return type**

`int`

### id

<span id="qiskit.pulse.Delay.id" />

`int`

Unique identifier for this instruction.

**Return type**

`int`

### instructions

<span id="qiskit.pulse.Delay.instructions" />

`Tuple[Tuple[int, qiskit.pulse.instructions.instruction.Instruction]]`

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, [`Instruction`](qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")]]

### name

<span id="qiskit.pulse.Delay.name" />

`str`

Name of this instruction.

**Return type**

`str`

### operands

<span id="qiskit.pulse.Delay.operands" />

`Tuple`

Return instruction operands.

**Return type**

`Tuple`

### start\_time

<span id="qiskit.pulse.Delay.start_time" />

`int`

Relative begin time of this instruction.

**Return type**

`int`

### stop\_time

<span id="qiskit.pulse.Delay.stop_time" />

`int`

Relative end time of this instruction.

**Return type**

`int`

### timeslots

<span id="qiskit.pulse.Delay.timeslots" />

`Dict[qiskit.pulse.channels.Channel, List[Tuple[int, int]]]`

Occupied time slots by this instruction.

**Return type**

`Dict`\[[`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel"), `List`\[`Tuple`\[`int`, `int`]]]

## Methods

### \_\_call\_\_

<span id="qiskit.pulse.Delay.__call__" />

`Delay.__call__(channel)`

Return new `Delay` that is fully instantiated with both `duration` and a `channel`.

**Parameters**

**channel** ([`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel")) – The channel that will have the delay.

**Return type**

[`Delay`](qiskit.pulse.instructions.Delay "qiskit.pulse.instructions.delay.Delay")

**Returns**

Complete and ready to schedule `Delay`.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If `channel` has already been set.

### append

<span id="qiskit.pulse.Delay.append" />

`Delay.append(schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

**Parameters**

*   **schedule** (`ScheduleComponent`) – schedule to be appended
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

### ch\_duration

<span id="qiskit.pulse.Delay.ch_duration" />

`Delay.ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_start\_time

<span id="qiskit.pulse.Delay.ch_start_time" />

`Delay.ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_stop\_time

<span id="qiskit.pulse.Delay.ch_stop_time" />

`Delay.ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### draw

<span id="qiskit.pulse.Delay.draw" />

`Delay.draw(dt=1, style=None, filename=None, interp_method=None, scale=1, channels_to_plot=None, plot_all=False, plot_range=None, interactive=False, table=True, label=False, framechange=True, scaling=None, channels=None)`

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

<span id="qiskit.pulse.Delay.flatten" />

`Delay.flatten()`

Return itself as already single instruction.

**Return type**

[`Instruction`](qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")

### insert

<span id="qiskit.pulse.Delay.insert" />

`Delay.insert(start_time, schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.

**Parameters**

*   **start\_time** (`int`) – Time to insert the schedule schedule
*   **schedule** (`ScheduleComponent`) – Schedule to insert
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

### shift

<span id="qiskit.pulse.Delay.shift" />

`Delay.shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** (`int`) – Time to shift by
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

### union

<span id="qiskit.pulse.Delay.union" />

`Delay.union(*schedules, name=None)`

Return a new schedule which is the union of self and schedule.

**Parameters**

*   **\*schedules** – Schedules to be take the union with this Instruction.
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

