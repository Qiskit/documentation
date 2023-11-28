# Delay

<span id="undefined" />

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

|                                                                                                                                                                                |                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`append`](qiskit.pulse.instructions.Delay.append#qiskit.pulse.instructions.Delay.append "qiskit.pulse.instructions.Delay.append")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`assign_parameters`](qiskit.pulse.instructions.Delay.assign_parameters#qiskit.pulse.instructions.Delay.assign_parameters "qiskit.pulse.instructions.Delay.assign_parameters") | Modify and return self with parameters assigned according to the input.                                                                                                                             |
| [`ch_duration`](qiskit.pulse.instructions.Delay.ch_duration#qiskit.pulse.instructions.Delay.ch_duration "qiskit.pulse.instructions.Delay.ch_duration")                         | Return duration of the supplied channels in this Instruction.                                                                                                                                       |
| [`ch_start_time`](qiskit.pulse.instructions.Delay.ch_start_time#qiskit.pulse.instructions.Delay.ch_start_time "qiskit.pulse.instructions.Delay.ch_start_time")                 | Return minimum start time for supplied channels.                                                                                                                                                    |
| [`ch_stop_time`](qiskit.pulse.instructions.Delay.ch_stop_time#qiskit.pulse.instructions.Delay.ch_stop_time "qiskit.pulse.instructions.Delay.ch_stop_time")                     | Return maximum start time for supplied channels.                                                                                                                                                    |
| [`draw`](qiskit.pulse.instructions.Delay.draw#qiskit.pulse.instructions.Delay.draw "qiskit.pulse.instructions.Delay.draw")                                                     | Plot the instruction.                                                                                                                                                                               |
| [`flatten`](qiskit.pulse.instructions.Delay.flatten#qiskit.pulse.instructions.Delay.flatten "qiskit.pulse.instructions.Delay.flatten")                                         | Return itself as already single instruction.                                                                                                                                                        |
| [`insert`](qiskit.pulse.instructions.Delay.insert#qiskit.pulse.instructions.Delay.insert "qiskit.pulse.instructions.Delay.insert")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`is_parameterized`](qiskit.pulse.instructions.Delay.is_parameterized#qiskit.pulse.instructions.Delay.is_parameterized "qiskit.pulse.instructions.Delay.is_parameterized")     | Return `True` iff the instruction is parameterized.                                                                                                                                                 |
| [`shift`](qiskit.pulse.instructions.Delay.shift#qiskit.pulse.instructions.Delay.shift "qiskit.pulse.instructions.Delay.shift")                                                 | Return a new schedule shifted forward by time.                                                                                                                                                      |

## Attributes

<span id="undefined" />

### channel

Return the `Channel` that this instruction is scheduled on.

**Return type**

`Channel`

<span id="undefined" />

### channels

Returns the channels that this schedule uses.

**Return type**

`Tuple`\[`Channel`]

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

### start\_time

Relative begin time of this instruction.

**Return type**

`int`

<span id="undefined" />

### stop\_time

Relative end time of this instruction.

**Return type**

`int`
