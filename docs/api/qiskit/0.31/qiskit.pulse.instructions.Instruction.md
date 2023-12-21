# Instruction

`Instruction(operands, duration=None, channels=None, name=None)`

Bases: `abc.ABC`

The smallest schedulable unit: a single instruction. It has a fixed duration and specified channels.

Instruction initializer.

**Parameters**

*   **operands** (`Tuple`) – The argument list.
*   **duration** (`Optional`\[`int`]) – Deprecated.
*   **channels** (`Optional`\[`Tuple`\[`Channel`]]) – Deprecated.
*   **name** (`Optional`\[`str`]) – Optional display name for this instruction.

**Raises**

*   [**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If duration is negative.
*   [**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the input `channels` are not all of type `Channel`.

## Methods

|                                                                                                                                                                                                  |                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`append`](qiskit.pulse.instructions.Instruction.append#qiskit.pulse.instructions.Instruction.append "qiskit.pulse.instructions.Instruction.append")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`assign_parameters`](qiskit.pulse.instructions.Instruction.assign_parameters#qiskit.pulse.instructions.Instruction.assign_parameters "qiskit.pulse.instructions.Instruction.assign_parameters") | Modify and return self with parameters assigned according to the input.                                                                                                                             |
| [`ch_duration`](qiskit.pulse.instructions.Instruction.ch_duration#qiskit.pulse.instructions.Instruction.ch_duration "qiskit.pulse.instructions.Instruction.ch_duration")                         | Return duration of the supplied channels in this Instruction.                                                                                                                                       |
| [`ch_start_time`](qiskit.pulse.instructions.Instruction.ch_start_time#qiskit.pulse.instructions.Instruction.ch_start_time "qiskit.pulse.instructions.Instruction.ch_start_time")                 | Return minimum start time for supplied channels.                                                                                                                                                    |
| [`ch_stop_time`](qiskit.pulse.instructions.Instruction.ch_stop_time#qiskit.pulse.instructions.Instruction.ch_stop_time "qiskit.pulse.instructions.Instruction.ch_stop_time")                     | Return maximum start time for supplied channels.                                                                                                                                                    |
| [`draw`](qiskit.pulse.instructions.Instruction.draw#qiskit.pulse.instructions.Instruction.draw "qiskit.pulse.instructions.Instruction.draw")                                                     | Plot the instruction.                                                                                                                                                                               |
| [`flatten`](qiskit.pulse.instructions.Instruction.flatten#qiskit.pulse.instructions.Instruction.flatten "qiskit.pulse.instructions.Instruction.flatten")                                         | Return itself as already single instruction.                                                                                                                                                        |
| [`insert`](qiskit.pulse.instructions.Instruction.insert#qiskit.pulse.instructions.Instruction.insert "qiskit.pulse.instructions.Instruction.insert")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`is_parameterized`](qiskit.pulse.instructions.Instruction.is_parameterized#qiskit.pulse.instructions.Instruction.is_parameterized "qiskit.pulse.instructions.Instruction.is_parameterized")     | Return True iff the instruction is parameterized.                                                                                                                                                   |
| [`shift`](qiskit.pulse.instructions.Instruction.shift#qiskit.pulse.instructions.Instruction.shift "qiskit.pulse.instructions.Instruction.shift")                                                 | Return a new schedule shifted forward by time.                                                                                                                                                      |

## Attributes

### channels

Returns the channels that this schedule uses.

**Return type**

`Tuple`\[`Channel`]

### duration

Duration of this instruction.

**Return type**

`int`

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
