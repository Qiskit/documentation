# SetFrequency



`SetFrequency(frequency, channel, name=None)`

Bases: `qiskit.pulse.instructions.instruction.Instruction`

Set the channel frequency. This instruction operates on `PulseChannel` s. A `PulseChannel` creates pulses of the form

$$
Re[\exp(i 2\pi f jdt + \phi) d_j].
$$

Here, $f$ is the frequency of the channel. The instruction `SetFrequency` allows the user to set the value of $f$. All pulses that are played on a channel after SetFrequency has been called will have the corresponding frequency.

The duration of SetFrequency is 0.

Creates a new set channel frequency instruction.

**Parameters**

*   **frequency** (`Union`\[`float`, `ParameterExpression`]) – New frequency of the channel in Hz.
*   **channel** (`PulseChannel`) – The channel this instruction operates on.
*   **name** (`Optional`\[`str`]) – Name of this set channel frequency instruction.

## Methods

|                                                                                                                                                              |                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`append`](qiskit.pulse.SetFrequency.append#qiskit.pulse.SetFrequency.append "qiskit.pulse.SetFrequency.append")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`assign_parameters`](qiskit.pulse.SetFrequency.assign_parameters#qiskit.pulse.SetFrequency.assign_parameters "qiskit.pulse.SetFrequency.assign_parameters") | Modify and return self with parameters assigned according to the input.                                                                                                                             |
| [`ch_duration`](qiskit.pulse.SetFrequency.ch_duration#qiskit.pulse.SetFrequency.ch_duration "qiskit.pulse.SetFrequency.ch_duration")                         | Return duration of the supplied channels in this Instruction.                                                                                                                                       |
| [`ch_start_time`](qiskit.pulse.SetFrequency.ch_start_time#qiskit.pulse.SetFrequency.ch_start_time "qiskit.pulse.SetFrequency.ch_start_time")                 | Return minimum start time for supplied channels.                                                                                                                                                    |
| [`ch_stop_time`](qiskit.pulse.SetFrequency.ch_stop_time#qiskit.pulse.SetFrequency.ch_stop_time "qiskit.pulse.SetFrequency.ch_stop_time")                     | Return maximum start time for supplied channels.                                                                                                                                                    |
| [`draw`](qiskit.pulse.SetFrequency.draw#qiskit.pulse.SetFrequency.draw "qiskit.pulse.SetFrequency.draw")                                                     | Plot the instruction.                                                                                                                                                                               |
| [`flatten`](qiskit.pulse.SetFrequency.flatten#qiskit.pulse.SetFrequency.flatten "qiskit.pulse.SetFrequency.flatten")                                         | Return itself as already single instruction.                                                                                                                                                        |
| [`insert`](qiskit.pulse.SetFrequency.insert#qiskit.pulse.SetFrequency.insert "qiskit.pulse.SetFrequency.insert")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`is_parameterized`](qiskit.pulse.SetFrequency.is_parameterized#qiskit.pulse.SetFrequency.is_parameterized "qiskit.pulse.SetFrequency.is_parameterized")     | Return True iff the instruction is parameterized.                                                                                                                                                   |
| [`shift`](qiskit.pulse.SetFrequency.shift#qiskit.pulse.SetFrequency.shift "qiskit.pulse.SetFrequency.shift")                                                 | Return a new schedule shifted forward by time.                                                                                                                                                      |

## Attributes



### channel

Return the `Channel` that this instruction is scheduled on.

**Return type**

`PulseChannel`



### channels

Returns the channels that this schedule uses.

**Return type**

`Tuple`\[`PulseChannel`]



### duration

Duration of this instruction.

**Return type**

`int`



### frequency

New frequency.

**Return type**

`Union`\[`float`, `ParameterExpression`]



### id

Unique identifier for this instruction.

**Return type**

`int`



### instructions

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, `Instruction`]]



### name

Name of this instruction.

**Return type**

`str`



### operands

Return instruction operands.

**Return type**

`Tuple`



### parameters

Parameters which determine the instruction behavior.

**Return type**

`Set`



### start\_time

Relative begin time of this instruction.

**Return type**

`int`



### stop\_time

Relative end time of this instruction.

**Return type**

`int`
