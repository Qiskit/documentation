<span id="qiskit-pulse-instructions-instruction" />

# qiskit.pulse.instructions.Instruction

<span id="undefined" />

`Instruction(operands, duration, channels, name=None)`

The smallest schedulable unit: a single instruction. It has a fixed duration and specified channels.

Instruction initializer.

**Parameters**

*   **operands** (`Tuple`) – The argument list.
*   **duration** (`int`) – Length of time taken by the instruction in terms of dt.
*   **channels** (`Tuple`\[[`Channel`](qiskit.pulse.channels#Channel "qiskit.pulse.channels.Channel")]) – Tuple of pulse channels that this instruction operates on.
*   **name** (`Optional`\[`str`]) – Optional display name for this instruction.

**Raises**

*   [**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If duration is negative.
*   [**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the input `channels` are not all of type `Channel`.

<span id="undefined" />

`__init__(operands, duration, channels, name=None)`

Instruction initializer.

**Parameters**

*   **operands** (`Tuple`) – The argument list.
*   **duration** (`int`) – Length of time taken by the instruction in terms of dt.
*   **channels** (`Tuple`\[[`Channel`](qiskit.pulse.channels#Channel "qiskit.pulse.channels.Channel")]) – Tuple of pulse channels that this instruction operates on.
*   **name** (`Optional`\[`str`]) – Optional display name for this instruction.

**Raises**

*   [**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If duration is negative.
*   [**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the input `channels` are not all of type `Channel`.

## Methods

|                                                                                                                                                        |                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.pulse.instructions.Instruction.__init__ "qiskit.pulse.instructions.Instruction.__init__")(operands, duration, channels\[, name])  | Instruction initializer.                                                                                                                                                                            |
| [`append`](#qiskit.pulse.instructions.Instruction.append "qiskit.pulse.instructions.Instruction.append")(schedule\[, name])                            | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`assign_parameters`](#qiskit.pulse.instructions.Instruction.assign_parameters "qiskit.pulse.instructions.Instruction.assign_parameters")(value\_dict) | Modify and return self with parameters assigned according to the input.                                                                                                                             |
| [`ch_duration`](#qiskit.pulse.instructions.Instruction.ch_duration "qiskit.pulse.instructions.Instruction.ch_duration")(\*channels)                    | Return duration of the supplied channels in this Instruction.                                                                                                                                       |
| [`ch_start_time`](#qiskit.pulse.instructions.Instruction.ch_start_time "qiskit.pulse.instructions.Instruction.ch_start_time")(\*channels)              | Return minimum start time for supplied channels.                                                                                                                                                    |
| [`ch_stop_time`](#qiskit.pulse.instructions.Instruction.ch_stop_time "qiskit.pulse.instructions.Instruction.ch_stop_time")(\*channels)                 | Return maximum start time for supplied channels.                                                                                                                                                    |
| [`draw`](#qiskit.pulse.instructions.Instruction.draw "qiskit.pulse.instructions.Instruction.draw")(\[dt, style, filename, interp\_method, …])          | Plot the instruction.                                                                                                                                                                               |
| [`flatten`](#qiskit.pulse.instructions.Instruction.flatten "qiskit.pulse.instructions.Instruction.flatten")()                                          | Return itself as already single instruction.                                                                                                                                                        |
| [`insert`](#qiskit.pulse.instructions.Instruction.insert "qiskit.pulse.instructions.Instruction.insert")(start\_time, schedule\[, name])               | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`shift`](#qiskit.pulse.instructions.Instruction.shift "qiskit.pulse.instructions.Instruction.shift")(time\[, name])                                   | Return a new schedule shifted forward by time.                                                                                                                                                      |

## Attributes

|                                                                                                                            |                                                       |
| -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`channels`](#qiskit.pulse.instructions.Instruction.channels "qiskit.pulse.instructions.Instruction.channels")             | Returns channels that this schedule uses.             |
| [`command`](#qiskit.pulse.instructions.Instruction.command "qiskit.pulse.instructions.Instruction.command")                | The associated command.                               |
| [`duration`](#qiskit.pulse.instructions.Instruction.duration "qiskit.pulse.instructions.Instruction.duration")             | Duration of this instruction.                         |
| [`id`](#qiskit.pulse.instructions.Instruction.id "qiskit.pulse.instructions.Instruction.id")                               | Unique identifier for this instruction.               |
| [`instructions`](#qiskit.pulse.instructions.Instruction.instructions "qiskit.pulse.instructions.Instruction.instructions") | Iterable for getting instructions from Schedule tree. |
| [`name`](#qiskit.pulse.instructions.Instruction.name "qiskit.pulse.instructions.Instruction.name")                         | Name of this instruction.                             |
| [`operands`](#qiskit.pulse.instructions.Instruction.operands "qiskit.pulse.instructions.Instruction.operands")             | Return instruction operands.                          |
| [`start_time`](#qiskit.pulse.instructions.Instruction.start_time "qiskit.pulse.instructions.Instruction.start_time")       | Relative begin time of this instruction.              |
| [`stop_time`](#qiskit.pulse.instructions.Instruction.stop_time "qiskit.pulse.instructions.Instruction.stop_time")          | Relative end time of this instruction.                |
| [`timeslots`](#qiskit.pulse.instructions.Instruction.timeslots "qiskit.pulse.instructions.Instruction.timeslots")          | Occupied time slots by this instruction.              |

<span id="undefined" />

`append(schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

**Parameters**

*   **schedule** (`ScheduleComponent`) – schedule to be appended
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

`Schedule`

<span id="undefined" />

`assign_parameters(value_dict)`

Modify and return self with parameters assigned according to the input.

**Parameters**

**value\_dict** (`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`, `int`]]) – A mapping from Parameters to either numeric values or another Parameter expression.

**Return type**

`Instruction`

**Returns**

Self with updated parameters.

<span id="undefined" />

`ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

<span id="undefined" />

`ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

<span id="undefined" />

`ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

<span id="undefined" />

`property channels`

Returns channels that this schedule uses.

**Return type**

`Tuple`\[[`Channel`](qiskit.pulse.channels#Channel "qiskit.pulse.channels.Channel")]

<span id="undefined" />

`property command`

The associated command. Commands are deprecated, so this method will be deprecated shortly.

**Returns**

The deprecated command if available.

**Return type**

[Command](qiskit.providers.models.Command#qiskit.providers.models.Command "qiskit.providers.models.Command")

<span id="undefined" />

`draw(dt=1, style=None, filename=None, interp_method=None, scale=1, plot_all=False, plot_range=None, interactive=False, table=True, label=False, framechange=True, channels=None)`

Plot the instruction.

**Parameters**

*   **dt** (`float`) – Time interval of samples
*   **style** (*Optional\[*[*SchedStyle*](qiskit.visualization.pulse.qcstyle#SchedStyle "qiskit.visualization.pulse.qcstyle.SchedStyle")*]*) – A style sheet to configure plot appearance
*   **filename** (`Optional`\[`str`]) – Name required to save pulse image
*   **interp\_method** (`Optional`\[`Callable`]) – A function for interpolation
*   **scale** (`float`) – Relative visual scaling of waveform amplitudes
*   **plot\_all** (`bool`) – Plot empty channels
*   **plot\_range** (`Optional`\[`Tuple`\[`float`]]) – A tuple of time range to plot
*   **interactive** (`bool`) – When set true show the circuit in a new window (this depends on the matplotlib backend being used supporting this)
*   **table** (`bool`) – Draw event table for supported instructions
*   **label** (`bool`) – Label individual instructions
*   **framechange** (`bool`) – Add framechange indicators
*   **channels** (`Optional`\[`List`\[[`Channel`](qiskit.pulse.channels#Channel "qiskit.pulse.channels.Channel")]]) – A list of channel names to plot

**Returns**

A matplotlib figure object of the pulse schedule

**Return type**

matplotlib.figure

<span id="undefined" />

`property duration`

Duration of this instruction.

**Return type**

`int`

<span id="undefined" />

`flatten()`

Return itself as already single instruction.

**Return type**

`Instruction`

<span id="undefined" />

`property id`

Unique identifier for this instruction.

**Return type**

`int`

<span id="undefined" />

`insert(start_time, schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.

**Parameters**

*   **start\_time** (`int`) – Time to insert the schedule schedule
*   **schedule** (`ScheduleComponent`) – Schedule to insert
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

`Schedule`

<span id="undefined" />

`property instructions`

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, `Instruction`]]

<span id="undefined" />

`property name`

Name of this instruction.

**Return type**

`str`

<span id="undefined" />

`property operands`

Return instruction operands.

**Return type**

`Tuple`

<span id="undefined" />

`shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** (`int`) – Time to shift by
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

`Schedule`

<span id="undefined" />

`property start_time`

Relative begin time of this instruction.

**Return type**

`int`

<span id="undefined" />

`property stop_time`

Relative end time of this instruction.

**Return type**

`int`

<span id="undefined" />

`property timeslots`

Occupied time slots by this instruction.

**Return type**

`Dict`\[[`Channel`](qiskit.pulse.channels#Channel "qiskit.pulse.channels.Channel"), `List`\[`Tuple`\[`int`, `int`]]]
