# Call

`Call(subroutine, value_dict=None, name=None)`

Bases: `qiskit.pulse.instructions.instruction.Instruction`

Pulse `Call` instruction.

The `Call` instruction represents the calling of a referenced subroutine (schedule). It enables code reuse both within the pulse representation and hardware (if supported).

Define new subroutine.

<Admonition title="Note" type="note">
  Inline subroutine is mutable. This requires special care for modification.
</Admonition>

**Parameters**

*   **subroutine** (*Union\[*[*Schedule*](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule")*,* [*ScheduleBlock*](qiskit.pulse.ScheduleBlock#qiskit.pulse.ScheduleBlock "qiskit.pulse.ScheduleBlock")*]*) – A program subroutine to be referred to.
*   **value\_dict** (`Optional`\[`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`]]]) – Mapping of parameter object to assigned value.
*   **name** (`Optional`\[`str`]) – Unique ID of this subroutine. If not provided, this is generated based on the subroutine name.

**Raises**

[**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If subroutine is not valid data format.

## Methods

|                                                                                                                                              |                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`append`](qiskit.pulse.Call.append#qiskit.pulse.Call.append "qiskit.pulse.Call.append")                                                     | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`assign_parameters`](qiskit.pulse.Call.assign_parameters#qiskit.pulse.Call.assign_parameters "qiskit.pulse.Call.assign_parameters")         | Store parameters which will be later assigned to the subroutine.                                                                                                                                    |
| [`assigned_subroutine`](qiskit.pulse.Call.assigned_subroutine#qiskit.pulse.Call.assigned_subroutine "qiskit.pulse.Call.assigned_subroutine") | Returns this subroutine with the parameters assigned.                                                                                                                                               |
| [`ch_duration`](qiskit.pulse.Call.ch_duration#qiskit.pulse.Call.ch_duration "qiskit.pulse.Call.ch_duration")                                 | Return duration of the supplied channels in this Instruction.                                                                                                                                       |
| [`ch_start_time`](qiskit.pulse.Call.ch_start_time#qiskit.pulse.Call.ch_start_time "qiskit.pulse.Call.ch_start_time")                         | Return minimum start time for supplied channels.                                                                                                                                                    |
| [`ch_stop_time`](qiskit.pulse.Call.ch_stop_time#qiskit.pulse.Call.ch_stop_time "qiskit.pulse.Call.ch_stop_time")                             | Return maximum start time for supplied channels.                                                                                                                                                    |
| [`draw`](qiskit.pulse.Call.draw#qiskit.pulse.Call.draw "qiskit.pulse.Call.draw")                                                             | Plot the instruction.                                                                                                                                                                               |
| [`flatten`](qiskit.pulse.Call.flatten#qiskit.pulse.Call.flatten "qiskit.pulse.Call.flatten")                                                 | Return itself as already single instruction.                                                                                                                                                        |
| [`insert`](qiskit.pulse.Call.insert#qiskit.pulse.Call.insert "qiskit.pulse.Call.insert")                                                     | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`is_parameterized`](qiskit.pulse.Call.is_parameterized#qiskit.pulse.Call.is_parameterized "qiskit.pulse.Call.is_parameterized")             | Return True iff the instruction is parameterized.                                                                                                                                                   |
| [`shift`](qiskit.pulse.Call.shift#qiskit.pulse.Call.shift "qiskit.pulse.Call.shift")                                                         | Return a new schedule shifted forward by time.                                                                                                                                                      |

## Attributes

### arguments

Parameters dictionary to be assigned to subroutine.

**Return type**

`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`]]

### channels

Returns the channels that this schedule uses.

**Return type**

`Tuple`\[`Channel`]

### duration

Duration of this instruction.

**Return type**

`Union`\[`int`, `ParameterExpression`]

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

Unassigned parameters which determine the instruction behavior.

**Return type**

`Set`

### prefix

`= 'call'`

### start\_time

Relative begin time of this instruction.

**Return type**

`int`

### stop\_time

Relative end time of this instruction.

**Return type**

`int`

### subroutine

Return attached subroutine.

**Returns**

The program referenced by the call.

**Return type**

program (Union\[[Schedule](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule"), [ScheduleBlock](qiskit.pulse.ScheduleBlock#qiskit.pulse.ScheduleBlock "qiskit.pulse.ScheduleBlock")])
