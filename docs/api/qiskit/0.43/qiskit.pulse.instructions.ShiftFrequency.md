---
title: ShiftFrequency
description: API reference for qiskit.pulse.instructions.ShiftFrequency
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.instructions.ShiftFrequency
---

# ShiftFrequency

<span id="qiskit.pulse.instructions.ShiftFrequency" />

`ShiftFrequency(frequency, channel, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/pulse/instructions/frequency.py "view source code")

Bases: [`Instruction`](pulse#qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")

Shift the channel frequency away from the current frequency.

Creates a new shift frequency instruction.

**Parameters**

*   **frequency** (*float |* [*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")) – Frequency shift of the channel in Hz.
*   **channel** (*PulseChannel*) – The channel this instruction operates on.
*   **name** (*str | None*) – Name of this set channel frequency instruction.

## Methods

<span id="qiskit-pulse-instructions-shiftfrequency-append" />

### append

<span id="qiskit.pulse.instructions.ShiftFrequency.append" />

`ShiftFrequency.append(schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

**Parameters**

*   **schedule** (*Union\['Schedule', 'Instruction']*) – Schedule or instruction to be appended
*   **name** (*str | None*) – Name of the new schedule. Defaults to name of self

**Returns**

A new schedule with `schedule` a this instruction at t=0.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

<span id="qiskit-pulse-instructions-shiftfrequency-ch-duration" />

### ch\_duration

<span id="qiskit.pulse.instructions.ShiftFrequency.ch_duration" />

`ShiftFrequency.ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** (*List\[*[*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")*]*) – Supplied channels

**Return type**

int

<span id="qiskit-pulse-instructions-shiftfrequency-ch-start-time" />

### ch\_start\_time

<span id="qiskit.pulse.instructions.ShiftFrequency.ch_start_time" />

`ShiftFrequency.ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** (*List\[*[*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")*]*) – Supplied channels

**Return type**

int

<span id="qiskit-pulse-instructions-shiftfrequency-ch-stop-time" />

### ch\_stop\_time

<span id="qiskit.pulse.instructions.ShiftFrequency.ch_stop_time" />

`ShiftFrequency.ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** (*List\[*[*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")*]*) – Supplied channels

**Return type**

int

<span id="qiskit-pulse-instructions-shiftfrequency-draw" />

### draw

<span id="qiskit.pulse.instructions.ShiftFrequency.draw" />

`ShiftFrequency.draw(dt=1, style=None, filename=None, interp_method=None, scale=1, plot_all=False, plot_range=None, interactive=False, table=True, label=False, framechange=True, channels=None)`

Plot the instruction.

<Admonition title="Deprecated since version 0.23.0" type="danger">
  The method `qiskit.pulse.instructions.instruction.Instruction.draw()` is deprecated as of qiskit-terra 0.23.0. It will be removed no earlier than 3 months after the release date. No direct alternative is being provided to drawing individual pulses. But, instructions can be visualized as part of a complete schedule using `qiskit.visualization.pulse_drawer`.
</Admonition>

**Parameters**

*   **dt** (*float*) – Time interval of samples
*   **style** (*Optional\[SchedStyle]*) – A style sheet to configure plot appearance
*   **filename** (*str | None*) – Name required to save pulse image
*   **interp\_method** (*Callable | None*) – A function for interpolation
*   **scale** (*float*) – Relative visual scaling of waveform amplitudes
*   **plot\_all** (*bool*) – Plot empty channels
*   **plot\_range** (*Tuple\[float] | None*) – A tuple of time range to plot
*   **interactive** (*bool*) – When set true show the circuit in a new window (this depends on the matplotlib backend being used supporting this)
*   **table** (*bool*) – Draw event table for supported instructions
*   **label** (*bool*) – Label individual instructions
*   **framechange** (*bool*) – Add framechange indicators
*   **channels** (*List\[*[*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")*] | None*) – A list of channel names to plot

**Returns**

A matplotlib figure object of the pulse schedule

**Return type**

matplotlib.figure

<span id="qiskit-pulse-instructions-shiftfrequency-insert" />

### insert

<span id="qiskit.pulse.instructions.ShiftFrequency.insert" />

`ShiftFrequency.insert(start_time, schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.

**Parameters**

*   **start\_time** (*int*) – Time to insert the schedule schedule
*   **schedule** (*Union\['Schedule', 'Instruction']*) – Schedule or instruction to insert
*   **name** (*str | None*) – Name of the new schedule. Defaults to name of self

**Returns**

A new schedule with `schedule` inserted with this instruction at t=0.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

<span id="qiskit-pulse-instructions-shiftfrequency-is-parameterized" />

### is\_parameterized

<span id="qiskit.pulse.instructions.ShiftFrequency.is_parameterized" />

`ShiftFrequency.is_parameterized()`

Return True iff the instruction is parameterized.

**Return type**

bool

<span id="qiskit-pulse-instructions-shiftfrequency-shift" />

### shift

<span id="qiskit.pulse.instructions.ShiftFrequency.shift" />

`ShiftFrequency.shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** (*int*) – Time to shift by
*   **name** (*str | None*) – Name of the new schedule. Defaults to name of self

**Returns**

The shifted schedule.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

## Attributes

<span id="qiskit.pulse.instructions.ShiftFrequency.channel" />

### channel

Return the [`Channel`](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on.

<span id="qiskit.pulse.instructions.ShiftFrequency.channels" />

### channels

Returns the channels that this schedule uses.

<span id="qiskit.pulse.instructions.ShiftFrequency.duration" />

### duration

Duration of this instruction.

<span id="qiskit.pulse.instructions.ShiftFrequency.frequency" />

### frequency

Frequency shift from the set frequency.

<span id="qiskit.pulse.instructions.ShiftFrequency.id" />

### id

Unique identifier for this instruction.

<span id="qiskit.pulse.instructions.ShiftFrequency.instructions" />

### instructions

Iterable for getting instructions from Schedule tree.

<span id="qiskit.pulse.instructions.ShiftFrequency.name" />

### name

Name of this instruction.

<span id="qiskit.pulse.instructions.ShiftFrequency.operands" />

### operands

Return instruction operands.

<span id="qiskit.pulse.instructions.ShiftFrequency.parameters" />

### parameters

Parameters which determine the instruction behavior.

<span id="qiskit.pulse.instructions.ShiftFrequency.start_time" />

### start\_time

Relative begin time of this instruction.

<span id="qiskit.pulse.instructions.ShiftFrequency.stop_time" />

### stop\_time

Relative end time of this instruction.

