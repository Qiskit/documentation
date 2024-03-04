---
title: Delay
description: API reference for qiskit.pulse.instructions.Delay
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.instructions.Delay
---

# Delay

<span id="qiskit.pulse.instructions.Delay" />

`Delay(duration, channel, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/pulse/instructions/delay.py "view source code")

Bases: `qiskit.pulse.instructions.instruction.Instruction`

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
*   **channel** (`Channel`) – The channel that will have the delay.
*   **name** (`Optional`\[`str`]) – Name of the delay for display purposes.

## Methods

### append

<span id="qiskit.pulse.instructions.Delay.append" />

`Delay.append(schedule, name=None)`

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

`Delay.assign_parameters(value_dict)`

Modify and return self with parameters assigned according to the input.

**Parameters**

**value\_dict** (`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`]]) – A mapping from Parameters to either numeric values or another Parameter expression.

**Return type**

`Instruction`

**Returns**

Self with updated parameters.

### ch\_duration

<span id="qiskit.pulse.instructions.Delay.ch_duration" />

`Delay.ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_start\_time

<span id="qiskit.pulse.instructions.Delay.ch_start_time" />

`Delay.ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_stop\_time

<span id="qiskit.pulse.instructions.Delay.ch_stop_time" />

`Delay.ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### draw

<span id="qiskit.pulse.instructions.Delay.draw" />

`Delay.draw(dt=1, style=None, filename=None, interp_method=None, scale=1, plot_all=False, plot_range=None, interactive=False, table=True, label=False, framechange=True, channels=None)`

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
*   **channels** (`Optional`\[`List`\[`Channel`]]) – A list of channel names to plot

**Returns**

A matplotlib figure object of the pulse schedule

**Return type**

matplotlib.figure

### flatten

<span id="qiskit.pulse.instructions.Delay.flatten" />

`Delay.flatten()`

Return itself as already single instruction.

**Return type**

`Instruction`

### insert

<span id="qiskit.pulse.instructions.Delay.insert" />

`Delay.insert(start_time, schedule, name=None)`

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

<span id="qiskit.pulse.instructions.Delay.is_parameterized" />

`Delay.is_parameterized()`

Return `True` iff the instruction is parameterized.

**Return type**

`bool`

### shift

<span id="qiskit.pulse.instructions.Delay.shift" />

`Delay.shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** (`int`) – Time to shift by
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Returns**

The shifted schedule.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

## Attributes

<span id="qiskit.pulse.instructions.Delay.channel" />

### channel

Return the `Channel` that this instruction is scheduled on.

**Return type**

`Channel`

<span id="qiskit.pulse.instructions.Delay.channels" />

### channels

Returns the channels that this schedule uses.

**Return type**

`Tuple`\[`Channel`]

<span id="qiskit.pulse.instructions.Delay.duration" />

### duration

Duration of this instruction.

**Return type**

`Union`\[`int`, `ParameterExpression`]

<span id="qiskit.pulse.instructions.Delay.id" />

### id

Unique identifier for this instruction.

**Return type**

`int`

<span id="qiskit.pulse.instructions.Delay.instructions" />

### instructions

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, `Instruction`]]

<span id="qiskit.pulse.instructions.Delay.name" />

### name

Name of this instruction.

**Return type**

`str`

<span id="qiskit.pulse.instructions.Delay.operands" />

### operands

Return instruction operands.

**Return type**

`Tuple`

<span id="qiskit.pulse.instructions.Delay.parameters" />

### parameters

Parameters which determine the instruction behavior.

**Return type**

`Set`

<span id="qiskit.pulse.instructions.Delay.start_time" />

### start\_time

Relative begin time of this instruction.

**Return type**

`int`

<span id="qiskit.pulse.instructions.Delay.stop_time" />

### stop\_time

Relative end time of this instruction.

**Return type**

`int`

