# ShiftPhase



`ShiftPhase(phase, channel, name=None)`

Bases: `qiskit.pulse.instructions.instruction.Instruction`

The shift phase instruction updates the modulation phase of proceeding pulses played on the same `Channel`. It is a relative increase in phase determined by the `phase` operand.

In particular, a PulseChannel creates pulses of the form

$$
Re[\exp(i 2\pi f jdt + \phi) d_j].
$$

The `ShiftPhase` instruction causes $\phi$ to be increased by the instruction’s `phase` operand. This will affect all pulses following on the same channel.

The qubit phase is tracked in software, enabling instantaneous, nearly error-free Z-rotations by using a ShiftPhase to update the frame tracking the qubit state.

Instantiate a shift phase instruction, increasing the output signal phase on `channel` by `phase` \[radians].

**Parameters**

*   **phase** (`Union`\[`complex`, `ParameterExpression`]) – The rotation angle in radians.
*   **channel** (`PulseChannel`) – The channel this instruction operates on.
*   **name** (`Optional`\[`str`]) – Display name for this instruction.

## Methods

|                                                                                                                                                        |                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`append`](qiskit.pulse.ShiftPhase.append#qiskit.pulse.ShiftPhase.append "qiskit.pulse.ShiftPhase.append")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`assign_parameters`](qiskit.pulse.ShiftPhase.assign_parameters#qiskit.pulse.ShiftPhase.assign_parameters "qiskit.pulse.ShiftPhase.assign_parameters") | Modify and return self with parameters assigned according to the input.                                                                                                                             |
| [`ch_duration`](qiskit.pulse.ShiftPhase.ch_duration#qiskit.pulse.ShiftPhase.ch_duration "qiskit.pulse.ShiftPhase.ch_duration")                         | Return duration of the supplied channels in this Instruction.                                                                                                                                       |
| [`ch_start_time`](qiskit.pulse.ShiftPhase.ch_start_time#qiskit.pulse.ShiftPhase.ch_start_time "qiskit.pulse.ShiftPhase.ch_start_time")                 | Return minimum start time for supplied channels.                                                                                                                                                    |
| [`ch_stop_time`](qiskit.pulse.ShiftPhase.ch_stop_time#qiskit.pulse.ShiftPhase.ch_stop_time "qiskit.pulse.ShiftPhase.ch_stop_time")                     | Return maximum start time for supplied channels.                                                                                                                                                    |
| [`draw`](qiskit.pulse.ShiftPhase.draw#qiskit.pulse.ShiftPhase.draw "qiskit.pulse.ShiftPhase.draw")                                                     | Plot the instruction.                                                                                                                                                                               |
| [`flatten`](qiskit.pulse.ShiftPhase.flatten#qiskit.pulse.ShiftPhase.flatten "qiskit.pulse.ShiftPhase.flatten")                                         | Return itself as already single instruction.                                                                                                                                                        |
| [`insert`](qiskit.pulse.ShiftPhase.insert#qiskit.pulse.ShiftPhase.insert "qiskit.pulse.ShiftPhase.insert")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`is_parameterized`](qiskit.pulse.ShiftPhase.is_parameterized#qiskit.pulse.ShiftPhase.is_parameterized "qiskit.pulse.ShiftPhase.is_parameterized")     | Return True iff the instruction is parameterized.                                                                                                                                                   |
| [`shift`](qiskit.pulse.ShiftPhase.shift#qiskit.pulse.ShiftPhase.shift "qiskit.pulse.ShiftPhase.shift")                                                 | Return a new schedule shifted forward by time.                                                                                                                                                      |

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
