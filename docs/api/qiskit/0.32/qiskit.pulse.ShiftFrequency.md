# ShiftFrequency



`ShiftFrequency(frequency, channel, name=None)`

Bases: `qiskit.pulse.instructions.instruction.Instruction`

Shift the channel frequency away from the current frequency.

Creates a new shift frequency instruction.

**Parameters**

*   **frequency** (`Union`\[`float`, `ParameterExpression`]) – Frequency shift of the channel in Hz.
*   **channel** (`PulseChannel`) – The channel this instruction operates on.
*   **name** (`Optional`\[`str`]) – Name of this set channel frequency instruction.

## Methods

|                                                                                                                                                                    |                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`append`](qiskit.pulse.ShiftFrequency.append#qiskit.pulse.ShiftFrequency.append "qiskit.pulse.ShiftFrequency.append")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`assign_parameters`](qiskit.pulse.ShiftFrequency.assign_parameters#qiskit.pulse.ShiftFrequency.assign_parameters "qiskit.pulse.ShiftFrequency.assign_parameters") | Modify and return self with parameters assigned according to the input.                                                                                                                             |
| [`ch_duration`](qiskit.pulse.ShiftFrequency.ch_duration#qiskit.pulse.ShiftFrequency.ch_duration "qiskit.pulse.ShiftFrequency.ch_duration")                         | Return duration of the supplied channels in this Instruction.                                                                                                                                       |
| [`ch_start_time`](qiskit.pulse.ShiftFrequency.ch_start_time#qiskit.pulse.ShiftFrequency.ch_start_time "qiskit.pulse.ShiftFrequency.ch_start_time")                 | Return minimum start time for supplied channels.                                                                                                                                                    |
| [`ch_stop_time`](qiskit.pulse.ShiftFrequency.ch_stop_time#qiskit.pulse.ShiftFrequency.ch_stop_time "qiskit.pulse.ShiftFrequency.ch_stop_time")                     | Return maximum start time for supplied channels.                                                                                                                                                    |
| [`draw`](qiskit.pulse.ShiftFrequency.draw#qiskit.pulse.ShiftFrequency.draw "qiskit.pulse.ShiftFrequency.draw")                                                     | Plot the instruction.                                                                                                                                                                               |
| [`flatten`](qiskit.pulse.ShiftFrequency.flatten#qiskit.pulse.ShiftFrequency.flatten "qiskit.pulse.ShiftFrequency.flatten")                                         | Return itself as already single instruction.                                                                                                                                                        |
| [`insert`](qiskit.pulse.ShiftFrequency.insert#qiskit.pulse.ShiftFrequency.insert "qiskit.pulse.ShiftFrequency.insert")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`is_parameterized`](qiskit.pulse.ShiftFrequency.is_parameterized#qiskit.pulse.ShiftFrequency.is_parameterized "qiskit.pulse.ShiftFrequency.is_parameterized")     | Return True iff the instruction is parameterized.                                                                                                                                                   |
| [`shift`](qiskit.pulse.ShiftFrequency.shift#qiskit.pulse.ShiftFrequency.shift "qiskit.pulse.ShiftFrequency.shift")                                                 | Return a new schedule shifted forward by time.                                                                                                                                                      |

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

Frequency shift from the set frequency.

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
