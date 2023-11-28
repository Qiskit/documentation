# Instruction

<span id="undefined" />

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

|                                                                                                                                                           |                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`append`](qiskit.pulse.Instruction.append#qiskit.pulse.Instruction.append "qiskit.pulse.Instruction.append")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`assign_parameters`](qiskit.pulse.Instruction.assign_parameters#qiskit.pulse.Instruction.assign_parameters "qiskit.pulse.Instruction.assign_parameters") | Modify and return self with parameters assigned according to the input.                                                                                                                             |
| [`ch_duration`](qiskit.pulse.Instruction.ch_duration#qiskit.pulse.Instruction.ch_duration "qiskit.pulse.Instruction.ch_duration")                         | Return duration of the supplied channels in this Instruction.                                                                                                                                       |
| [`ch_start_time`](qiskit.pulse.Instruction.ch_start_time#qiskit.pulse.Instruction.ch_start_time "qiskit.pulse.Instruction.ch_start_time")                 | Return minimum start time for supplied channels.                                                                                                                                                    |
| [`ch_stop_time`](qiskit.pulse.Instruction.ch_stop_time#qiskit.pulse.Instruction.ch_stop_time "qiskit.pulse.Instruction.ch_stop_time")                     | Return maximum start time for supplied channels.                                                                                                                                                    |
| [`draw`](qiskit.pulse.Instruction.draw#qiskit.pulse.Instruction.draw "qiskit.pulse.Instruction.draw")                                                     | Plot the instruction.                                                                                                                                                                               |
| [`flatten`](qiskit.pulse.Instruction.flatten#qiskit.pulse.Instruction.flatten "qiskit.pulse.Instruction.flatten")                                         | Return itself as already single instruction.                                                                                                                                                        |
| [`insert`](qiskit.pulse.Instruction.insert#qiskit.pulse.Instruction.insert "qiskit.pulse.Instruction.insert")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`is_parameterized`](qiskit.pulse.Instruction.is_parameterized#qiskit.pulse.Instruction.is_parameterized "qiskit.pulse.Instruction.is_parameterized")     | Return True iff the instruction is parameterized.                                                                                                                                                   |
| [`shift`](qiskit.pulse.Instruction.shift#qiskit.pulse.Instruction.shift "qiskit.pulse.Instruction.shift")                                                 | Return a new schedule shifted forward by time.                                                                                                                                                      |

## Attributes

<span id="undefined" />

### channels

Returns the channels that this schedule uses.

**Return type**

`Tuple`\[`Channel`]

<span id="undefined" />

### duration

Duration of this instruction.

**Return type**

`int`

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

### start\_time

Relative begin time of this instruction.

**Return type**

`int`

<span id="undefined" />

### stop\_time

Relative end time of this instruction.

**Return type**

`int`
