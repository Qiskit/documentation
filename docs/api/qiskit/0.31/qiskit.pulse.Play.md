# Play

<span id="undefined" />

`Play(pulse, channel, name=None)`

Bases: `qiskit.pulse.instructions.instruction.Instruction`

This instruction is responsible for applying a pulse on a channel.

The pulse specifies the exact time dynamics of the output signal envelope for a limited time. The output is modulated by a phase and frequency which are controlled by separate instructions. The pulse duration must be fixed, and is implicitly given in terms of the cycle time, dt, of the backend.

Create a new pulse instruction.

**Parameters**

*   **pulse** (`Pulse`) – A pulse waveform description, such as [`Waveform`](qiskit.pulse.library.Waveform#qiskit.pulse.library.Waveform "qiskit.pulse.library.Waveform").
*   **channel** (`PulseChannel`) – The channel to which the pulse is applied.
*   **name** (`Optional`\[`str`]) – Name of the instruction for display purposes. Defaults to `pulse.name`.

**Raises**

[**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If pulse is not a Pulse type.

## Methods

|                                                                                                                                      |                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`append`](qiskit.pulse.Play.append#qiskit.pulse.Play.append "qiskit.pulse.Play.append")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`assign_parameters`](qiskit.pulse.Play.assign_parameters#qiskit.pulse.Play.assign_parameters "qiskit.pulse.Play.assign_parameters") | Modify and return self with parameters assigned according to the input.                                                                                                                             |
| [`ch_duration`](qiskit.pulse.Play.ch_duration#qiskit.pulse.Play.ch_duration "qiskit.pulse.Play.ch_duration")                         | Return duration of the supplied channels in this Instruction.                                                                                                                                       |
| [`ch_start_time`](qiskit.pulse.Play.ch_start_time#qiskit.pulse.Play.ch_start_time "qiskit.pulse.Play.ch_start_time")                 | Return minimum start time for supplied channels.                                                                                                                                                    |
| [`ch_stop_time`](qiskit.pulse.Play.ch_stop_time#qiskit.pulse.Play.ch_stop_time "qiskit.pulse.Play.ch_stop_time")                     | Return maximum start time for supplied channels.                                                                                                                                                    |
| [`draw`](qiskit.pulse.Play.draw#qiskit.pulse.Play.draw "qiskit.pulse.Play.draw")                                                     | Plot the instruction.                                                                                                                                                                               |
| [`flatten`](qiskit.pulse.Play.flatten#qiskit.pulse.Play.flatten "qiskit.pulse.Play.flatten")                                         | Return itself as already single instruction.                                                                                                                                                        |
| [`insert`](qiskit.pulse.Play.insert#qiskit.pulse.Play.insert "qiskit.pulse.Play.insert")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`is_parameterized`](qiskit.pulse.Play.is_parameterized#qiskit.pulse.Play.is_parameterized "qiskit.pulse.Play.is_parameterized")     | Return True iff the instruction is parameterized.                                                                                                                                                   |
| [`shift`](qiskit.pulse.Play.shift#qiskit.pulse.Play.shift "qiskit.pulse.Play.shift")                                                 | Return a new schedule shifted forward by time.                                                                                                                                                      |

## Attributes

<span id="undefined" />

### channel

Return the `Channel` that this instruction is scheduled on.

**Return type**

`PulseChannel`

<span id="undefined" />

### channels

Returns the channels that this schedule uses.

**Return type**

`Tuple`\[`PulseChannel`]

<span id="undefined" />

### duration

Duration of this instruction.

**Return type**

`Union`\[`int`, `ParameterExpression`]

<span id="undefined" />

### id

Unique identifier for this instruction.

**Return type**

`int`

<span id="undefined" />

### instructions

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, `Instruction`]]

<span id="undefined" />

### name

Name of this instruction.

**Return type**

`str`

<span id="undefined" />

### operands

Return instruction operands.

**Return type**

`Tuple`

<span id="undefined" />

### parameters

Parameters which determine the instruction behavior.

**Return type**

`Set`

<span id="undefined" />

### pulse

A description of the samples that will be played.

**Return type**

`Pulse`

<span id="undefined" />

### start\_time

Relative begin time of this instruction.

**Return type**

`int`

<span id="undefined" />

### stop\_time

Relative end time of this instruction.

**Return type**

`int`
