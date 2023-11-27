# SetPhase[¶](#setphase "Permalink to this headline")

<span id="undefined" />

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

|                                                                                                                                                                                     |                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`append`](qiskit.pulse.instructions.SetPhase.append#qiskit.pulse.instructions.SetPhase.append "qiskit.pulse.instructions.SetPhase.append")                                         | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`ch_duration`](qiskit.pulse.instructions.SetPhase.ch_duration#qiskit.pulse.instructions.SetPhase.ch_duration "qiskit.pulse.instructions.SetPhase.ch_duration")                     | Return duration of the supplied channels in this Instruction.                                                                                                                                       |
| [`ch_start_time`](qiskit.pulse.instructions.SetPhase.ch_start_time#qiskit.pulse.instructions.SetPhase.ch_start_time "qiskit.pulse.instructions.SetPhase.ch_start_time")             | Return minimum start time for supplied channels.                                                                                                                                                    |
| [`ch_stop_time`](qiskit.pulse.instructions.SetPhase.ch_stop_time#qiskit.pulse.instructions.SetPhase.ch_stop_time "qiskit.pulse.instructions.SetPhase.ch_stop_time")                 | Return maximum start time for supplied channels.                                                                                                                                                    |
| [`draw`](qiskit.pulse.instructions.SetPhase.draw#qiskit.pulse.instructions.SetPhase.draw "qiskit.pulse.instructions.SetPhase.draw")                                                 | Plot the instruction.                                                                                                                                                                               |
| [`insert`](qiskit.pulse.instructions.SetPhase.insert#qiskit.pulse.instructions.SetPhase.insert "qiskit.pulse.instructions.SetPhase.insert")                                         | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`is_parameterized`](qiskit.pulse.instructions.SetPhase.is_parameterized#qiskit.pulse.instructions.SetPhase.is_parameterized "qiskit.pulse.instructions.SetPhase.is_parameterized") | Return True iff the instruction is parameterized.                                                                                                                                                   |
| [`shift`](qiskit.pulse.instructions.SetPhase.shift#qiskit.pulse.instructions.SetPhase.shift "qiskit.pulse.instructions.SetPhase.shift")                                             | Return a new schedule shifted forward by time.                                                                                                                                                      |

## Attributes

<span id="undefined" />

### channel

Return the [`Channel`](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on.

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

### phase

Return the rotation angle enacted by this instruction in radians.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

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
