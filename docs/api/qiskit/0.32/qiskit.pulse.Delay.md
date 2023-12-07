# Delay



`Delay(duration, channel, name=None)`

Bases: `qiskit.pulse.instructions.instruction.Instruction`

A blocking instruction with no other effect. The delay is used for aligning and scheduling other instructions.

## Example

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

|                                                                                                                                         |                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`append`](qiskit.pulse.Delay.append#qiskit.pulse.Delay.append "qiskit.pulse.Delay.append")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`assign_parameters`](qiskit.pulse.Delay.assign_parameters#qiskit.pulse.Delay.assign_parameters "qiskit.pulse.Delay.assign_parameters") | Modify and return self with parameters assigned according to the input.                                                                                                                             |
| [`ch_duration`](qiskit.pulse.Delay.ch_duration#qiskit.pulse.Delay.ch_duration "qiskit.pulse.Delay.ch_duration")                         | Return duration of the supplied channels in this Instruction.                                                                                                                                       |
| [`ch_start_time`](qiskit.pulse.Delay.ch_start_time#qiskit.pulse.Delay.ch_start_time "qiskit.pulse.Delay.ch_start_time")                 | Return minimum start time for supplied channels.                                                                                                                                                    |
| [`ch_stop_time`](qiskit.pulse.Delay.ch_stop_time#qiskit.pulse.Delay.ch_stop_time "qiskit.pulse.Delay.ch_stop_time")                     | Return maximum start time for supplied channels.                                                                                                                                                    |
| [`draw`](qiskit.pulse.Delay.draw#qiskit.pulse.Delay.draw "qiskit.pulse.Delay.draw")                                                     | Plot the instruction.                                                                                                                                                                               |
| [`flatten`](qiskit.pulse.Delay.flatten#qiskit.pulse.Delay.flatten "qiskit.pulse.Delay.flatten")                                         | Return itself as already single instruction.                                                                                                                                                        |
| [`insert`](qiskit.pulse.Delay.insert#qiskit.pulse.Delay.insert "qiskit.pulse.Delay.insert")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`is_parameterized`](qiskit.pulse.Delay.is_parameterized#qiskit.pulse.Delay.is_parameterized "qiskit.pulse.Delay.is_parameterized")     | Return `True` iff the instruction is parameterized.                                                                                                                                                 |
| [`shift`](qiskit.pulse.Delay.shift#qiskit.pulse.Delay.shift "qiskit.pulse.Delay.shift")                                                 | Return a new schedule shifted forward by time.                                                                                                                                                      |

## Attributes



### channel

Return the `Channel` that this instruction is scheduled on.

**Return type**

`Channel`



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
