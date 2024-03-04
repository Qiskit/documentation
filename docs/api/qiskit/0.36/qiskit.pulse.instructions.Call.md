---
title: Call
description: API reference for qiskit.pulse.instructions.Call
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.instructions.Call
---

# Call

<span id="qiskit.pulse.instructions.Call" />

`Call(subroutine, value_dict=None, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/pulse/instructions/call.py "view source code")

Bases: `qiskit.pulse.instructions.instruction.Instruction`

Pulse `Call` instruction.

The `Call` instruction represents the calling of a referenced subroutine (schedule). It enables code reuse both within the pulse representation and hardware (if supported).

Define new subroutine.

<Admonition title="Note" type="note">
  Inline subroutine is mutable. This requires special care for modification.
</Admonition>

**Parameters**

*   **subroutine** (*Union\[*[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.Schedule")*,* [*ScheduleBlock*](qiskit.pulse.ScheduleBlock "qiskit.pulse.ScheduleBlock")*]*) – A program subroutine to be referred to.
*   **value\_dict** (`Optional`\[`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`]]]) – Mapping of parameter object to assigned value.
*   **name** (`Optional`\[`str`]) – Unique ID of this subroutine. If not provided, this is generated based on the subroutine name.

**Raises**

[**PulseError**](pulse#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If subroutine is not valid data format.

## Methods

### append

<span id="qiskit.pulse.instructions.Call.append" />

`Call.append(schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

**Parameters**

*   **schedule** (*Union\['Schedule', 'Instruction']*) – Schedule or instruction to be appended
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Returns**

A new schedule with `schedule` a this instruction at t=0.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

### assigned\_subroutine

<span id="qiskit.pulse.instructions.Call.assigned_subroutine" />

`Call.assigned_subroutine()`

Returns this subroutine with the parameters assigned.

<Admonition title="Note" type="note">
  This function may be often called internally for class equality check despite its overhead of parameter assignment. The subroutine with parameter assigned is cached based on `.argument` hash. Once this argument is updated, new assigned instance will be returned. Note that this update is not mutable operation.
</Admonition>

**Returns**

Attached program.

**Return type**

program (Union\[[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule"), [ScheduleBlock](qiskit.pulse.ScheduleBlock "qiskit.pulse.ScheduleBlock")])

### ch\_duration

<span id="qiskit.pulse.instructions.Call.ch_duration" />

`Call.ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_start\_time

<span id="qiskit.pulse.instructions.Call.ch_start_time" />

`Call.ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_stop\_time

<span id="qiskit.pulse.instructions.Call.ch_stop_time" />

`Call.ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### draw

<span id="qiskit.pulse.instructions.Call.draw" />

`Call.draw(dt=1, style=None, filename=None, interp_method=None, scale=1, plot_all=False, plot_range=None, interactive=False, table=True, label=False, framechange=True, channels=None)`

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

<span id="qiskit.pulse.instructions.Call.insert" />

`Call.insert(start_time, schedule, name=None)`

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

<span id="qiskit.pulse.instructions.Call.is_parameterized" />

`Call.is_parameterized()`

Return True iff the instruction is parameterized.

**Return type**

`bool`

### shift

<span id="qiskit.pulse.instructions.Call.shift" />

`Call.shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** (`int`) – Time to shift by
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Returns**

The shifted schedule.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

## Attributes

<span id="qiskit.pulse.instructions.Call.arguments" />

### arguments

Parameters dictionary to be assigned to subroutine.

**Return type**

`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`]]

<span id="qiskit.pulse.instructions.Call.channels" />

### channels

Returns the channels that this schedule uses.

**Return type**

`Tuple`\[[`Channel`](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]

<span id="qiskit.pulse.instructions.Call.duration" />

### duration

Duration of this instruction.

**Return type**

`Union`\[`int`, `ParameterExpression`]

<span id="qiskit.pulse.instructions.Call.id" />

### id

Unique identifier for this instruction.

**Return type**

`int`

<span id="qiskit.pulse.instructions.Call.instructions" />

### instructions

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, `Instruction`]]

<span id="qiskit.pulse.instructions.Call.name" />

### name

Name of this instruction.

**Return type**

`str`

<span id="qiskit.pulse.instructions.Call.operands" />

### operands

Return instruction operands.

**Return type**

`Tuple`

<span id="qiskit.pulse.instructions.Call.parameters" />

### parameters

Unassigned parameters which determine the instruction behavior.

**Return type**

`Set`

<span id="qiskit.pulse.instructions.Call.prefix" />

### prefix

`= 'call'`

<span id="qiskit.pulse.instructions.Call.start_time" />

### start\_time

Relative begin time of this instruction.

**Return type**

`int`

<span id="qiskit.pulse.instructions.Call.stop_time" />

### stop\_time

Relative end time of this instruction.

**Return type**

`int`

<span id="qiskit.pulse.instructions.Call.subroutine" />

### subroutine

Return attached subroutine.

**Returns**

The program referenced by the call.

**Return type**

program (Union\[[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule"), [ScheduleBlock](qiskit.pulse.ScheduleBlock "qiskit.pulse.ScheduleBlock")])

