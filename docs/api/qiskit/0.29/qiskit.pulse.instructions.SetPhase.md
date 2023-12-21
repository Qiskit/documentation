# SetPhase

`SetPhase(phase, channel, name=None)`

Bases: `qiskit.pulse.instructions.instruction.Instruction`

The set phase instruction sets the phase of the proceeding pulses on that channel to `phase` radians.

In particular, a PulseChannel creates pulses of the form

$$
Re[\exp(i 2\pi f jdt + \phi) d_j]
$$

The `SetPhase` instruction sets $\phi$ to the instruction’s `phase` operand.

Instantiate a set phase instruction, setting the output signal phase on `channel` to `phase` \[radians].

**Parameters**

*   **phase** (`Union`\[`complex`, `ParameterExpression`]) – The rotation angle in radians.
*   **channel** (`PulseChannel`) – The channel this instruction operates on.
*   **name** (`Optional`\[`str`]) – Display name for this instruction.

## Methods

|                                                                                                                                                                                         |                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`append`](qiskit.pulse.instructions.SetPhase.append#qiskit.pulse.instructions.SetPhase.append "qiskit.pulse.instructions.SetPhase.append")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`assign_parameters`](qiskit.pulse.instructions.SetPhase.assign_parameters#qiskit.pulse.instructions.SetPhase.assign_parameters "qiskit.pulse.instructions.SetPhase.assign_parameters") | Modify and return self with parameters assigned according to the input.                                                                                                                             |
| [`ch_duration`](qiskit.pulse.instructions.SetPhase.ch_duration#qiskit.pulse.instructions.SetPhase.ch_duration "qiskit.pulse.instructions.SetPhase.ch_duration")                         | Return duration of the supplied channels in this Instruction.                                                                                                                                       |
| [`ch_start_time`](qiskit.pulse.instructions.SetPhase.ch_start_time#qiskit.pulse.instructions.SetPhase.ch_start_time "qiskit.pulse.instructions.SetPhase.ch_start_time")                 | Return minimum start time for supplied channels.                                                                                                                                                    |
| [`ch_stop_time`](qiskit.pulse.instructions.SetPhase.ch_stop_time#qiskit.pulse.instructions.SetPhase.ch_stop_time "qiskit.pulse.instructions.SetPhase.ch_stop_time")                     | Return maximum start time for supplied channels.                                                                                                                                                    |
| [`draw`](qiskit.pulse.instructions.SetPhase.draw#qiskit.pulse.instructions.SetPhase.draw "qiskit.pulse.instructions.SetPhase.draw")                                                     | Plot the instruction.                                                                                                                                                                               |
| [`flatten`](qiskit.pulse.instructions.SetPhase.flatten#qiskit.pulse.instructions.SetPhase.flatten "qiskit.pulse.instructions.SetPhase.flatten")                                         | Return itself as already single instruction.                                                                                                                                                        |
| [`insert`](qiskit.pulse.instructions.SetPhase.insert#qiskit.pulse.instructions.SetPhase.insert "qiskit.pulse.instructions.SetPhase.insert")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`is_parameterized`](qiskit.pulse.instructions.SetPhase.is_parameterized#qiskit.pulse.instructions.SetPhase.is_parameterized "qiskit.pulse.instructions.SetPhase.is_parameterized")     | Return True iff the instruction is parameterized.                                                                                                                                                   |
| [`shift`](qiskit.pulse.instructions.SetPhase.shift#qiskit.pulse.instructions.SetPhase.shift "qiskit.pulse.instructions.SetPhase.shift")                                                 | Return a new schedule shifted forward by time.                                                                                                                                                      |

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

### phase

Return the rotation angle enacted by this instruction in radians.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

### start\_time

Relative begin time of this instruction.

**Return type**

`int`

### stop\_time

Relative end time of this instruction.

**Return type**

`int`
