---
title: Delay
description: API reference for qiskit.pulse.instructions.Delay
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.instructions.Delay
---

# qiskit.pulse.instructions.Delay

<span id="qiskit.pulse.instructions.Delay" />

`Delay(duration, channel, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/pulse/instructions/delay.py "view source code")

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

*   **duration** (`Union`\[`int`, `ParameterExpression`]) – Length of time of the delay in terms of dt.
*   **channel** ([`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel")) – The channel that will have the delay.
*   **name** (`Optional`\[`str`]) – Name of the delay for display purposes.

### \_\_init\_\_

<span id="qiskit.pulse.instructions.Delay.__init__" />

`__init__(duration, channel, name=None)`

Create a new delay instruction.

No other instruction may be scheduled within a `Delay`.

**Parameters**

*   **duration** (`Union`\[`int`, `ParameterExpression`]) – Length of time of the delay in terms of dt.
*   **channel** ([`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel")) – The channel that will have the delay.
*   **name** (`Optional`\[`str`]) – Name of the delay for display purposes.

## Methods

|                                                                                                                                            |                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.pulse.instructions.Delay.__init__ "qiskit.pulse.instructions.Delay.__init__")(duration, channel\[, name])             | Create a new delay instruction.                                                                                                                                               |
| [`append`](#qiskit.pulse.instructions.Delay.append "qiskit.pulse.instructions.Delay.append")(schedule\[, name])                            | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`assign_parameters`](#qiskit.pulse.instructions.Delay.assign_parameters "qiskit.pulse.instructions.Delay.assign_parameters")(value\_dict) | Modify and return self with parameters assigned according to the input.                                                                                                       |
| [`ch_duration`](#qiskit.pulse.instructions.Delay.ch_duration "qiskit.pulse.instructions.Delay.ch_duration")(\*channels)                    | Return duration of the supplied channels in this Instruction.                                                                                                                 |
| [`ch_start_time`](#qiskit.pulse.instructions.Delay.ch_start_time "qiskit.pulse.instructions.Delay.ch_start_time")(\*channels)              | Return minimum start time for supplied channels.                                                                                                                              |
| [`ch_stop_time`](#qiskit.pulse.instructions.Delay.ch_stop_time "qiskit.pulse.instructions.Delay.ch_stop_time")(\*channels)                 | Return maximum start time for supplied channels.                                                                                                                              |
| [`draw`](#qiskit.pulse.instructions.Delay.draw "qiskit.pulse.instructions.Delay.draw")(\[dt, style, filename, interp\_method, …])          | Plot the instruction.                                                                                                                                                         |
| [`flatten`](#qiskit.pulse.instructions.Delay.flatten "qiskit.pulse.instructions.Delay.flatten")()                                          | Return itself as already single instruction.                                                                                                                                  |
| [`insert`](#qiskit.pulse.instructions.Delay.insert "qiskit.pulse.instructions.Delay.insert")(start\_time, schedule\[, name])               | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`is_parameterized`](#qiskit.pulse.instructions.Delay.is_parameterized "qiskit.pulse.instructions.Delay.is_parameterized")()               | Return `True` iff the instruction is parameterized.                                                                                                                           |
| [`shift`](#qiskit.pulse.instructions.Delay.shift "qiskit.pulse.instructions.Delay.shift")(time\[, name])                                   | Return a new schedule shifted forward by time.                                                                                                                                |

## Attributes

|                                                                                                                |                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [`channel`](#qiskit.pulse.instructions.Delay.channel "qiskit.pulse.instructions.Delay.channel")                | Return the [`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on. |
| [`channels`](#qiskit.pulse.instructions.Delay.channels "qiskit.pulse.instructions.Delay.channels")             | Returns the channels that this schedule uses.                                                                                |
| [`duration`](#qiskit.pulse.instructions.Delay.duration "qiskit.pulse.instructions.Delay.duration")             | Duration of this instruction.                                                                                                |
| [`id`](#qiskit.pulse.instructions.Delay.id "qiskit.pulse.instructions.Delay.id")                               | Unique identifier for this instruction.                                                                                      |
| [`instructions`](#qiskit.pulse.instructions.Delay.instructions "qiskit.pulse.instructions.Delay.instructions") | Iterable for getting instructions from Schedule tree.                                                                        |
| [`name`](#qiskit.pulse.instructions.Delay.name "qiskit.pulse.instructions.Delay.name")                         | Name of this instruction.                                                                                                    |
| [`operands`](#qiskit.pulse.instructions.Delay.operands "qiskit.pulse.instructions.Delay.operands")             | Return instruction operands.                                                                                                 |
| [`parameters`](#qiskit.pulse.instructions.Delay.parameters "qiskit.pulse.instructions.Delay.parameters")       | Parameters which determine the instruction behavior.                                                                         |
| [`start_time`](#qiskit.pulse.instructions.Delay.start_time "qiskit.pulse.instructions.Delay.start_time")       | Relative begin time of this instruction.                                                                                     |
| [`stop_time`](#qiskit.pulse.instructions.Delay.stop_time "qiskit.pulse.instructions.Delay.stop_time")          | Relative end time of this instruction.                                                                                       |

### append

<span id="qiskit.pulse.instructions.Delay.append" />

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

<span id="qiskit.pulse.instructions.Delay.assign_parameters" />

`assign_parameters(value_dict)`

Modify and return self with parameters assigned according to the input.

**Parameters**

**value\_dict** (`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`]]) – A mapping from Parameters to either numeric values or another Parameter expression.

**Return type**

`Instruction`

**Returns**

Self with updated parameters.

### ch\_duration

<span id="qiskit.pulse.instructions.Delay.ch_duration" />

`ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_start\_time

<span id="qiskit.pulse.instructions.Delay.ch_start_time" />

`ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_stop\_time

<span id="qiskit.pulse.instructions.Delay.ch_stop_time" />

`ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### channel

<span id="qiskit.pulse.instructions.Delay.channel" />

`property channel`

Return the [`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on.

**Return type**

[`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel")

### channels

<span id="qiskit.pulse.instructions.Delay.channels" />

`property channels`

Returns the channels that this schedule uses.

**Return type**

`Tuple`\[[`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel")]

### draw

<span id="qiskit.pulse.instructions.Delay.draw" />

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

<span id="qiskit.pulse.instructions.Delay.duration" />

`property duration`

Duration of this instruction.

**Return type**

`Union`\[`int`, `ParameterExpression`]

### flatten

<span id="qiskit.pulse.instructions.Delay.flatten" />

`flatten()`

Return itself as already single instruction.

**Return type**

`Instruction`

### id

<span id="qiskit.pulse.instructions.Delay.id" />

`property id`

Unique identifier for this instruction.

**Return type**

`int`

### insert

<span id="qiskit.pulse.instructions.Delay.insert" />

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

<span id="qiskit.pulse.instructions.Delay.instructions" />

`property instructions`

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, `Instruction`]]

### is\_parameterized

<span id="qiskit.pulse.instructions.Delay.is_parameterized" />

`is_parameterized()`

Return `True` iff the instruction is parameterized.

**Return type**

`bool`

### name

<span id="qiskit.pulse.instructions.Delay.name" />

`property name`

Name of this instruction.

**Return type**

`str`

### operands

<span id="qiskit.pulse.instructions.Delay.operands" />

`property operands`

Return instruction operands.

**Return type**

`Tuple`

### parameters

<span id="qiskit.pulse.instructions.Delay.parameters" />

`property parameters`

Parameters which determine the instruction behavior.

**Return type**

`Set`

### shift

<span id="qiskit.pulse.instructions.Delay.shift" />

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

<span id="qiskit.pulse.instructions.Delay.start_time" />

`property start_time`

Relative begin time of this instruction.

**Return type**

`int`

### stop\_time

<span id="qiskit.pulse.instructions.Delay.stop_time" />

`property stop_time`

Relative end time of this instruction.

**Return type**

`int`

