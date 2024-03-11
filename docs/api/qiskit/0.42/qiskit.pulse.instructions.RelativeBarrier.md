---
title: RelativeBarrier
description: API reference for qiskit.pulse.instructions.RelativeBarrier
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.instructions.RelativeBarrier
---

# RelativeBarrier

<span id="qiskit.pulse.instructions.RelativeBarrier" />

`RelativeBarrier(*channels, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/pulse/instructions/directives.py "view source code")

Bases: `qiskit.pulse.instructions.directives.Directive`

Pulse `RelativeBarrier` directive.

Create a relative barrier directive.

The barrier directive blocks instructions within the same schedule as the barrier on channels contained within this barrier from moving through the barrier in time.

**Parameters**

*   **channels** ([`Channel`](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")) – The channel that the barrier applies to.
*   **name** (`Optional`\[`str`]) – Name of the directive for display purposes.

## Methods

### append

<span id="qiskit.pulse.instructions.RelativeBarrier.append" />

`RelativeBarrier.append(schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

**Parameters**

*   **schedule** (*Union\['Schedule', 'Instruction']*) – Schedule or instruction to be appended
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Returns**

A new schedule with `schedule` a this instruction at t=0.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

### ch\_duration

<span id="qiskit.pulse.instructions.RelativeBarrier.ch_duration" />

`RelativeBarrier.ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_start\_time

<span id="qiskit.pulse.instructions.RelativeBarrier.ch_start_time" />

`RelativeBarrier.ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_stop\_time

<span id="qiskit.pulse.instructions.RelativeBarrier.ch_stop_time" />

`RelativeBarrier.ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### draw

<span id="qiskit.pulse.instructions.RelativeBarrier.draw" />

`RelativeBarrier.draw(dt=1, style=None, filename=None, interp_method=None, scale=1, plot_all=False, plot_range=None, interactive=False, table=True, label=False, framechange=True, channels=None)`

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

<span id="qiskit.pulse.instructions.RelativeBarrier.insert" />

`RelativeBarrier.insert(start_time, schedule, name=None)`

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

<span id="qiskit.pulse.instructions.RelativeBarrier.is_parameterized" />

`RelativeBarrier.is_parameterized()`

Return True iff the instruction is parameterized.

**Return type**

`bool`

### shift

<span id="qiskit.pulse.instructions.RelativeBarrier.shift" />

`RelativeBarrier.shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** (`int`) – Time to shift by
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Returns**

The shifted schedule.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

## Attributes

<span id="qiskit.pulse.instructions.RelativeBarrier.channels" />

### channels

Returns the channels that this schedule uses.

**Return type**

`Tuple`\[[`Channel`](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]

<span id="qiskit.pulse.instructions.RelativeBarrier.duration" />

### duration

Duration of this instruction.

**Return type**

`int`

<span id="qiskit.pulse.instructions.RelativeBarrier.id" />

### id

Unique identifier for this instruction.

**Return type**

`int`

<span id="qiskit.pulse.instructions.RelativeBarrier.instructions" />

### instructions

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, [`Instruction`](pulse#qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")]]

<span id="qiskit.pulse.instructions.RelativeBarrier.name" />

### name

Name of this instruction.

**Return type**

`str`

<span id="qiskit.pulse.instructions.RelativeBarrier.operands" />

### operands

Return instruction operands.

**Return type**

`Tuple`

<span id="qiskit.pulse.instructions.RelativeBarrier.parameters" />

### parameters

Parameters which determine the instruction behavior.

**Return type**

`Set`

<span id="qiskit.pulse.instructions.RelativeBarrier.start_time" />

### start\_time

Relative begin time of this instruction.

**Return type**

`int`

<span id="qiskit.pulse.instructions.RelativeBarrier.stop_time" />

### stop\_time

Relative end time of this instruction.

**Return type**

`int`

