---
title: Reference
description: API reference for qiskit.pulse.instructions.Reference
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.instructions.Reference
---

# Reference

<span id="qiskit.pulse.instructions.Reference" />

`Reference(name, *extra_keys)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/pulse/instructions/reference.py "view source code")

Bases: [`Instruction`](pulse#qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")

Pulse compiler directive that refers to a subroutine.

If a pulse program uses the same subset of instructions multiple times, then using the [`Reference`](#qiskit.pulse.instructions.Reference "qiskit.pulse.instructions.Reference") class may significantly reduce the memory footprint of the program. This instruction only stores the set of strings to identify the subroutine.

The actual pulse program can be stored in the `ScheduleBlock.references` of the [`ScheduleBlock`](qiskit.pulse.ScheduleBlock "qiskit.pulse.ScheduleBlock") that this reference instruction belongs to.

You can later assign schedules with the `ScheduleBlock.assign_references()` method. This allows you to build the main program without knowing the actual subroutine, that is supplied at a later time.

Create new reference.

**Parameters**

*   **name** (*str*) – Name of subroutine.
*   **extra\_keys** (*str*) – Optional. A set of string keys that may be necessary to refer to a particular subroutine. For example, when we use “sx” as a name to refer to the subroutine of an sx pulse, this name might be used among schedules for different qubits. In this example, you may specify “q0” in the extra keys to distinguish the sx schedule for qubit 0 from others. The user can use an arbitrary number of extra string keys to uniquely determine the subroutine.

## Methods

<span id="qiskit-pulse-instructions-reference-append" />

### append

<span id="qiskit.pulse.instructions.Reference.append" />

`Reference.append(schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

**Parameters**

*   **schedule** (*Union\['Schedule', 'Instruction']*) – Schedule or instruction to be appended
*   **name** (*str | None*) – Name of the new schedule. Defaults to name of self

**Returns**

A new schedule with `schedule` a this instruction at t=0.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

<span id="qiskit-pulse-instructions-reference-ch-duration" />

### ch\_duration

<span id="qiskit.pulse.instructions.Reference.ch_duration" />

`Reference.ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** (*List\[*[*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")*]*) – Supplied channels

**Return type**

int

<span id="qiskit-pulse-instructions-reference-ch-start-time" />

### ch\_start\_time

<span id="qiskit.pulse.instructions.Reference.ch_start_time" />

`Reference.ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** (*List\[*[*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")*]*) – Supplied channels

**Return type**

int

<span id="qiskit-pulse-instructions-reference-ch-stop-time" />

### ch\_stop\_time

<span id="qiskit.pulse.instructions.Reference.ch_stop_time" />

`Reference.ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** (*List\[*[*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")*]*) – Supplied channels

**Return type**

int

<span id="qiskit-pulse-instructions-reference-draw" />

### draw

<span id="qiskit.pulse.instructions.Reference.draw" />

`Reference.draw(dt=1, style=None, filename=None, interp_method=None, scale=1, plot_all=False, plot_range=None, interactive=False, table=True, label=False, framechange=True, channels=None)`

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

<span id="qiskit-pulse-instructions-reference-insert" />

### insert

<span id="qiskit.pulse.instructions.Reference.insert" />

`Reference.insert(start_time, schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.

**Parameters**

*   **start\_time** (*int*) – Time to insert the schedule schedule
*   **schedule** (*Union\['Schedule', 'Instruction']*) – Schedule or instruction to insert
*   **name** (*str | None*) – Name of the new schedule. Defaults to name of self

**Returns**

A new schedule with `schedule` inserted with this instruction at t=0.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

<span id="qiskit-pulse-instructions-reference-is-parameterized" />

### is\_parameterized

<span id="qiskit.pulse.instructions.Reference.is_parameterized" />

`Reference.is_parameterized()`

Return True iff the instruction is parameterized.

**Return type**

bool

<span id="qiskit-pulse-instructions-reference-shift" />

### shift

<span id="qiskit.pulse.instructions.Reference.shift" />

`Reference.shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** (*int*) – Time to shift by
*   **name** (*str | None*) – Name of the new schedule. Defaults to name of self

**Returns**

The shifted schedule.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

## Attributes

<span id="qiskit.pulse.instructions.Reference.channels" />

### channels

Returns the channels that this schedule uses.

<span id="qiskit.pulse.instructions.Reference.duration" />

### duration

Duration of this instruction.

<span id="qiskit.pulse.instructions.Reference.id" />

### id

Unique identifier for this instruction.

<span id="qiskit.pulse.instructions.Reference.instructions" />

### instructions

Iterable for getting instructions from Schedule tree.

<span id="qiskit.pulse.instructions.Reference.key_delimiter" />

### key\_delimiter

`= ','`

<span id="qiskit.pulse.instructions.Reference.name" />

### name

Name of this instruction.

<span id="qiskit.pulse.instructions.Reference.operands" />

### operands

Return instruction operands.

<span id="qiskit.pulse.instructions.Reference.parameters" />

### parameters

Parameters which determine the instruction behavior.

<span id="qiskit.pulse.instructions.Reference.ref_keys" />

### ref\_keys

Returns unique key of the subroutine.

<span id="qiskit.pulse.instructions.Reference.scope_delimiter" />

### scope\_delimiter

`= '::'`

<span id="qiskit.pulse.instructions.Reference.start_time" />

### start\_time

Relative begin time of this instruction.

<span id="qiskit.pulse.instructions.Reference.stop_time" />

### stop\_time

Relative end time of this instruction.

