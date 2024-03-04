---
title: ShiftPhase
description: API reference for qiskit.pulse.ShiftPhase
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.ShiftPhase
---

# qiskit.pulse.ShiftPhase

<span id="qiskit.pulse.ShiftPhase" />

`ShiftPhase(phase, channel, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/pulse/instructions/phase.py "view source code")

The shift phase instruction updates the modulation phase of proceeding pulses played on the same [`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel"). It is a relative increase in phase determined by the `phase` operand.

In particular, a PulseChannel creates pulses of the form

$$
Re[\exp(i 2\pi f jdt + \phi) d_j].
$$

The `ShiftPhase` instruction causes $\phi$ to be increased by the instruction’s `phase` operand. This will affect all pulses following on the same channel.

The qubit phase is tracked in software, enabling instantaneous, nearly error-free Z-rotations by using a ShiftPhase to update the frame tracking the qubit state.

Instantiate a shift phase instruction, increasing the output signal phase on `channel` by `phase` \[radians].

**Parameters**

*   **phase** (`Union`\[`complex`, `ParameterExpression`]) – The rotation angle in radians.
*   **channel** ([`PulseChannel`](qiskit.pulse.channels#pulsechannel "qiskit.pulse.channels.PulseChannel")) – The channel this instruction operates on.
*   **name** (`Optional`\[`str`]) – Display name for this instruction.

### \_\_init\_\_

<span id="qiskit.pulse.ShiftPhase.__init__" />

`__init__(phase, channel, name=None)`

Instantiate a shift phase instruction, increasing the output signal phase on `channel` by `phase` \[radians].

**Parameters**

*   **phase** (`Union`\[`complex`, `ParameterExpression`]) – The rotation angle in radians.
*   **channel** ([`PulseChannel`](qiskit.pulse.channels#pulsechannel "qiskit.pulse.channels.PulseChannel")) – The channel this instruction operates on.
*   **name** (`Optional`\[`str`]) – Display name for this instruction.

## Methods

|                                                                                                                            |                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.pulse.ShiftPhase.__init__ "qiskit.pulse.ShiftPhase.__init__")(phase, channel\[, name])                | Instantiate a shift phase instruction, increasing the output signal phase on `channel` by `phase` \[radians].                                                                 |
| [`append`](#qiskit.pulse.ShiftPhase.append "qiskit.pulse.ShiftPhase.append")(schedule\[, name])                            | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`assign_parameters`](#qiskit.pulse.ShiftPhase.assign_parameters "qiskit.pulse.ShiftPhase.assign_parameters")(value\_dict) | Modify and return self with parameters assigned according to the input.                                                                                                       |
| [`ch_duration`](#qiskit.pulse.ShiftPhase.ch_duration "qiskit.pulse.ShiftPhase.ch_duration")(\*channels)                    | Return duration of the supplied channels in this Instruction.                                                                                                                 |
| [`ch_start_time`](#qiskit.pulse.ShiftPhase.ch_start_time "qiskit.pulse.ShiftPhase.ch_start_time")(\*channels)              | Return minimum start time for supplied channels.                                                                                                                              |
| [`ch_stop_time`](#qiskit.pulse.ShiftPhase.ch_stop_time "qiskit.pulse.ShiftPhase.ch_stop_time")(\*channels)                 | Return maximum start time for supplied channels.                                                                                                                              |
| [`draw`](#qiskit.pulse.ShiftPhase.draw "qiskit.pulse.ShiftPhase.draw")(\[dt, style, filename, interp\_method, …])          | Plot the instruction.                                                                                                                                                         |
| [`flatten`](#qiskit.pulse.ShiftPhase.flatten "qiskit.pulse.ShiftPhase.flatten")()                                          | Return itself as already single instruction.                                                                                                                                  |
| [`insert`](#qiskit.pulse.ShiftPhase.insert "qiskit.pulse.ShiftPhase.insert")(start\_time, schedule\[, name])               | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`is_parameterized`](#qiskit.pulse.ShiftPhase.is_parameterized "qiskit.pulse.ShiftPhase.is_parameterized")()               | Return True iff the instruction is parameterized.                                                                                                                             |
| [`shift`](#qiskit.pulse.ShiftPhase.shift "qiskit.pulse.ShiftPhase.shift")(time\[, name])                                   | Return a new schedule shifted forward by time.                                                                                                                                |

## Attributes

|                                                                                                |                                                                                                                              |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [`channel`](#qiskit.pulse.ShiftPhase.channel "qiskit.pulse.ShiftPhase.channel")                | Return the [`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on. |
| [`channels`](#qiskit.pulse.ShiftPhase.channels "qiskit.pulse.ShiftPhase.channels")             | Returns the channels that this schedule uses.                                                                                |
| [`duration`](#qiskit.pulse.ShiftPhase.duration "qiskit.pulse.ShiftPhase.duration")             | Duration of this instruction.                                                                                                |
| [`id`](#qiskit.pulse.ShiftPhase.id "qiskit.pulse.ShiftPhase.id")                               | Unique identifier for this instruction.                                                                                      |
| [`instructions`](#qiskit.pulse.ShiftPhase.instructions "qiskit.pulse.ShiftPhase.instructions") | Iterable for getting instructions from Schedule tree.                                                                        |
| [`name`](#qiskit.pulse.ShiftPhase.name "qiskit.pulse.ShiftPhase.name")                         | Name of this instruction.                                                                                                    |
| [`operands`](#qiskit.pulse.ShiftPhase.operands "qiskit.pulse.ShiftPhase.operands")             | Return instruction operands.                                                                                                 |
| [`parameters`](#qiskit.pulse.ShiftPhase.parameters "qiskit.pulse.ShiftPhase.parameters")       | Parameters which determine the instruction behavior.                                                                         |
| [`phase`](#qiskit.pulse.ShiftPhase.phase "qiskit.pulse.ShiftPhase.phase")                      | Return the rotation angle enacted by this instruction in radians.                                                            |
| [`start_time`](#qiskit.pulse.ShiftPhase.start_time "qiskit.pulse.ShiftPhase.start_time")       | Relative begin time of this instruction.                                                                                     |
| [`stop_time`](#qiskit.pulse.ShiftPhase.stop_time "qiskit.pulse.ShiftPhase.stop_time")          | Relative end time of this instruction.                                                                                       |

### append

<span id="qiskit.pulse.ShiftPhase.append" />

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

<span id="qiskit.pulse.ShiftPhase.assign_parameters" />

`assign_parameters(value_dict)`

Modify and return self with parameters assigned according to the input.

**Parameters**

**value\_dict** (`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`]]) – A mapping from Parameters to either numeric values or another Parameter expression.

**Return type**

`Instruction`

**Returns**

Self with updated parameters.

### ch\_duration

<span id="qiskit.pulse.ShiftPhase.ch_duration" />

`ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_start\_time

<span id="qiskit.pulse.ShiftPhase.ch_start_time" />

`ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_stop\_time

<span id="qiskit.pulse.ShiftPhase.ch_stop_time" />

`ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### channel

<span id="qiskit.pulse.ShiftPhase.channel" />

`property channel`

Return the [`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on.

**Return type**

[`PulseChannel`](qiskit.pulse.channels#pulsechannel "qiskit.pulse.channels.PulseChannel")

### channels

<span id="qiskit.pulse.ShiftPhase.channels" />

`property channels`

Returns the channels that this schedule uses.

**Return type**

`Tuple`\[[`PulseChannel`](qiskit.pulse.channels#pulsechannel "qiskit.pulse.channels.PulseChannel")]

### draw

<span id="qiskit.pulse.ShiftPhase.draw" />

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

<span id="qiskit.pulse.ShiftPhase.duration" />

`property duration`

Duration of this instruction.

**Return type**

`int`

### flatten

<span id="qiskit.pulse.ShiftPhase.flatten" />

`flatten()`

Return itself as already single instruction.

**Return type**

`Instruction`

### id

<span id="qiskit.pulse.ShiftPhase.id" />

`property id`

Unique identifier for this instruction.

**Return type**

`int`

### insert

<span id="qiskit.pulse.ShiftPhase.insert" />

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

<span id="qiskit.pulse.ShiftPhase.instructions" />

`property instructions`

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, `Instruction`]]

### is\_parameterized

<span id="qiskit.pulse.ShiftPhase.is_parameterized" />

`is_parameterized()`

Return True iff the instruction is parameterized.

**Return type**

`bool`

### name

<span id="qiskit.pulse.ShiftPhase.name" />

`property name`

Name of this instruction.

**Return type**

`str`

### operands

<span id="qiskit.pulse.ShiftPhase.operands" />

`property operands`

Return instruction operands.

**Return type**

`Tuple`

### parameters

<span id="qiskit.pulse.ShiftPhase.parameters" />

`property parameters`

Parameters which determine the instruction behavior.

**Return type**

`Set`

### phase

<span id="qiskit.pulse.ShiftPhase.phase" />

`property phase`

Return the rotation angle enacted by this instruction in radians.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

### shift

<span id="qiskit.pulse.ShiftPhase.shift" />

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

<span id="qiskit.pulse.ShiftPhase.start_time" />

`property start_time`

Relative begin time of this instruction.

**Return type**

`int`

### stop\_time

<span id="qiskit.pulse.ShiftPhase.stop_time" />

`property stop_time`

Relative end time of this instruction.

**Return type**

`int`

