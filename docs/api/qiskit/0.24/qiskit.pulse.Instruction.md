---
title: Instruction
description: API reference for qiskit.pulse.Instruction
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.Instruction
---

<span id="qiskit-pulse-instruction" />

# qiskit.pulse.Instruction

<span id="qiskit.pulse.Instruction" />

`Instruction(operands, duration, channels, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/pulse/instructions/instruction.py "view source code")

The smallest schedulable unit: a single instruction. It has a fixed duration and specified channels.

Instruction initializer.

**Parameters**

*   **operands** (`Tuple`) – The argument list.
*   **duration** (`int`) – Length of time taken by the instruction in terms of dt.
*   **channels** (`Tuple`\[[`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel")]) – Tuple of pulse channels that this instruction operates on.
*   **name** (`Optional`\[`str`]) – Optional display name for this instruction.

**Raises**

*   [**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If duration is negative.
*   [**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the input `channels` are not all of type `Channel`.

### \_\_init\_\_

<span id="qiskit.pulse.Instruction.__init__" />

`__init__(operands, duration, channels, name=None)`

Instruction initializer.

**Parameters**

*   **operands** (`Tuple`) – The argument list.
*   **duration** (`int`) – Length of time taken by the instruction in terms of dt.
*   **channels** (`Tuple`\[[`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel")]) – Tuple of pulse channels that this instruction operates on.
*   **name** (`Optional`\[`str`]) – Optional display name for this instruction.

**Raises**

*   [**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If duration is negative.
*   [**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the input `channels` are not all of type `Channel`.

## Methods

|                                                                                                                              |                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.pulse.Instruction.__init__ "qiskit.pulse.Instruction.__init__")(operands, duration, channels\[, name])  | Instruction initializer.                                                                                                                                                      |
| [`append`](#qiskit.pulse.Instruction.append "qiskit.pulse.Instruction.append")(schedule\[, name])                            | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`assign_parameters`](#qiskit.pulse.Instruction.assign_parameters "qiskit.pulse.Instruction.assign_parameters")(value\_dict) | Modify and return self with parameters assigned according to the input.                                                                                                       |
| [`ch_duration`](#qiskit.pulse.Instruction.ch_duration "qiskit.pulse.Instruction.ch_duration")(\*channels)                    | Return duration of the supplied channels in this Instruction.                                                                                                                 |
| [`ch_start_time`](#qiskit.pulse.Instruction.ch_start_time "qiskit.pulse.Instruction.ch_start_time")(\*channels)              | Return minimum start time for supplied channels.                                                                                                                              |
| [`ch_stop_time`](#qiskit.pulse.Instruction.ch_stop_time "qiskit.pulse.Instruction.ch_stop_time")(\*channels)                 | Return maximum start time for supplied channels.                                                                                                                              |
| [`draw`](#qiskit.pulse.Instruction.draw "qiskit.pulse.Instruction.draw")(\[dt, style, filename, interp\_method, …])          | Plot the instruction.                                                                                                                                                         |
| [`flatten`](#qiskit.pulse.Instruction.flatten "qiskit.pulse.Instruction.flatten")()                                          | Return itself as already single instruction.                                                                                                                                  |
| [`insert`](#qiskit.pulse.Instruction.insert "qiskit.pulse.Instruction.insert")(start\_time, schedule\[, name])               | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`shift`](#qiskit.pulse.Instruction.shift "qiskit.pulse.Instruction.shift")(time\[, name])                                   | Return a new schedule shifted forward by time.                                                                                                                                |

## Attributes

|                                                                                                  |                                                       |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| [`channels`](#qiskit.pulse.Instruction.channels "qiskit.pulse.Instruction.channels")             | Returns channels that this schedule uses.             |
| [`command`](#qiskit.pulse.Instruction.command "qiskit.pulse.Instruction.command")                | The associated command.                               |
| [`duration`](#qiskit.pulse.Instruction.duration "qiskit.pulse.Instruction.duration")             | Duration of this instruction.                         |
| [`id`](#qiskit.pulse.Instruction.id "qiskit.pulse.Instruction.id")                               | Unique identifier for this instruction.               |
| [`instructions`](#qiskit.pulse.Instruction.instructions "qiskit.pulse.Instruction.instructions") | Iterable for getting instructions from Schedule tree. |
| [`name`](#qiskit.pulse.Instruction.name "qiskit.pulse.Instruction.name")                         | Name of this instruction.                             |
| [`operands`](#qiskit.pulse.Instruction.operands "qiskit.pulse.Instruction.operands")             | Return instruction operands.                          |
| [`start_time`](#qiskit.pulse.Instruction.start_time "qiskit.pulse.Instruction.start_time")       | Relative begin time of this instruction.              |
| [`stop_time`](#qiskit.pulse.Instruction.stop_time "qiskit.pulse.Instruction.stop_time")          | Relative end time of this instruction.                |
| [`timeslots`](#qiskit.pulse.Instruction.timeslots "qiskit.pulse.Instruction.timeslots")          | Occupied time slots by this instruction.              |

### append

<span id="qiskit.pulse.Instruction.append" />

`append(schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

**Parameters**

*   **schedule** (`ScheduleComponent`) – schedule to be appended
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

`Schedule`

### assign\_parameters

<span id="qiskit.pulse.Instruction.assign_parameters" />

`assign_parameters(value_dict)`

Modify and return self with parameters assigned according to the input.

**Parameters**

**value\_dict** (`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`, `int`]]) – A mapping from Parameters to either numeric values or another Parameter expression.

**Return type**

`Instruction`

**Returns**

Self with updated parameters.

### ch\_duration

<span id="qiskit.pulse.Instruction.ch_duration" />

`ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_start\_time

<span id="qiskit.pulse.Instruction.ch_start_time" />

`ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_stop\_time

<span id="qiskit.pulse.Instruction.ch_stop_time" />

`ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### channels

<span id="qiskit.pulse.Instruction.channels" />

`property channels`

Returns channels that this schedule uses.

**Return type**

`Tuple`\[[`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel")]

### command

<span id="qiskit.pulse.Instruction.command" />

`property command`

The associated command. Commands are deprecated, so this method will be deprecated shortly.

**Returns**

The deprecated command if available.

**Return type**

[Command](qiskit.providers.models.Command "qiskit.providers.models.Command")

### draw

<span id="qiskit.pulse.Instruction.draw" />

`draw(dt=1, style=None, filename=None, interp_method=None, scale=1, plot_all=False, plot_range=None, interactive=False, table=True, label=False, framechange=True, channels=None)`

Plot the instruction.

**Parameters**

*   **dt** (`float`) – Time interval of samples
*   **style** (*Optional\[*[*SchedStyle*](qiskit.visualization.pulse.qcstyle#schedstyle "qiskit.visualization.pulse.qcstyle.SchedStyle")*]*) – A style sheet to configure plot appearance
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

<span id="qiskit.pulse.Instruction.duration" />

`property duration`

Duration of this instruction.

**Return type**

`int`

### flatten

<span id="qiskit.pulse.Instruction.flatten" />

`flatten()`

Return itself as already single instruction.

**Return type**

`Instruction`

### id

<span id="qiskit.pulse.Instruction.id" />

`property id`

Unique identifier for this instruction.

**Return type**

`int`

### insert

<span id="qiskit.pulse.Instruction.insert" />

`insert(start_time, schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.

**Parameters**

*   **start\_time** (`int`) – Time to insert the schedule schedule
*   **schedule** (`ScheduleComponent`) – Schedule to insert
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

`Schedule`

### instructions

<span id="qiskit.pulse.Instruction.instructions" />

`property instructions`

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, `Instruction`]]

### name

<span id="qiskit.pulse.Instruction.name" />

`property name`

Name of this instruction.

**Return type**

`str`

### operands

<span id="qiskit.pulse.Instruction.operands" />

`property operands`

Return instruction operands.

**Return type**

`Tuple`

### shift

<span id="qiskit.pulse.Instruction.shift" />

`shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** (`int`) – Time to shift by
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

`Schedule`

### start\_time

<span id="qiskit.pulse.Instruction.start_time" />

`property start_time`

Relative begin time of this instruction.

**Return type**

`int`

### stop\_time

<span id="qiskit.pulse.Instruction.stop_time" />

`property stop_time`

Relative end time of this instruction.

**Return type**

`int`

### timeslots

<span id="qiskit.pulse.Instruction.timeslots" />

`property timeslots`

Occupied time slots by this instruction.

**Return type**

`Dict`\[[`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel"), `List`\[`Tuple`\[`int`, `int`]]]

