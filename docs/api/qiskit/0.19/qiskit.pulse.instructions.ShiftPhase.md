---
title: ShiftPhase
description: API reference for qiskit.pulse.instructions.ShiftPhase
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.instructions.ShiftPhase
---

# ShiftPhase

<span id="qiskit.pulse.instructions.ShiftPhase" />

`ShiftPhase(phase, channel=None, name=None)`

The shift phase instruction updates the modulation phase of proceeding pulses played on the same [`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel"). It is a relative increase in phase determined by the `phase` operand.

In particular, a PulseChannel creates pulses of the form

$$
Re[\exp(i 2\pi f jdt + \phi) d_j].
$$

The `ShiftPhase` instruction causes $\phi$ to be increased by the instruction’s `phase` operand. This will affect all pulses following on the same channel.

The qubit phase is tracked in software, enabling instantaneous, nearly error-free Z-rotations by using a ShiftPhase to update the frame tracking the qubit state.

Instantiate a shift phase instruction, increasing the output signal phase on `channel` by `phase` \[radians].

**Parameters**

*   **phase** (`complex`) – The rotation angle in radians.
*   **channel** (`Optional`\[[`PulseChannel`](qiskit.pulse.channels#qiskit.pulse.channels.PulseChannel "qiskit.pulse.channels.PulseChannel")]) – The channel this instruction operates on.
*   **name** (`Optional`\[`str`]) – Display name for this instruction.

## Attributes

|                                                                                                                                    |                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`ShiftPhase.channel`](qiskit.pulse.instructions.ShiftPhase.channel "qiskit.pulse.instructions.ShiftPhase.channel")                | Return the [`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on. |
| [`ShiftPhase.channels`](qiskit.pulse.instructions.ShiftPhase.channels "qiskit.pulse.instructions.ShiftPhase.channels")             | Returns channels that this schedule uses.                                                                                                          |
| [`ShiftPhase.command`](qiskit.pulse.instructions.ShiftPhase.command "qiskit.pulse.instructions.ShiftPhase.command")                | The associated command.                                                                                                                            |
| [`ShiftPhase.duration`](qiskit.pulse.instructions.ShiftPhase.duration "qiskit.pulse.instructions.ShiftPhase.duration")             | Duration of this instruction.                                                                                                                      |
| [`ShiftPhase.id`](qiskit.pulse.instructions.ShiftPhase.id "qiskit.pulse.instructions.ShiftPhase.id")                               | Unique identifier for this instruction.                                                                                                            |
| [`ShiftPhase.instructions`](qiskit.pulse.instructions.ShiftPhase.instructions "qiskit.pulse.instructions.ShiftPhase.instructions") | Iterable for getting instructions from Schedule tree.                                                                                              |
| [`ShiftPhase.name`](qiskit.pulse.instructions.ShiftPhase.name "qiskit.pulse.instructions.ShiftPhase.name")                         | Name of this instruction.                                                                                                                          |
| [`ShiftPhase.operands`](qiskit.pulse.instructions.ShiftPhase.operands "qiskit.pulse.instructions.ShiftPhase.operands")             | Return instruction operands.                                                                                                                       |
| [`ShiftPhase.phase`](qiskit.pulse.instructions.ShiftPhase.phase "qiskit.pulse.instructions.ShiftPhase.phase")                      | Return the rotation angle enacted by this instruction in radians.                                                                                  |
| [`ShiftPhase.start_time`](qiskit.pulse.instructions.ShiftPhase.start_time "qiskit.pulse.instructions.ShiftPhase.start_time")       | Relative begin time of this instruction.                                                                                                           |
| [`ShiftPhase.stop_time`](qiskit.pulse.instructions.ShiftPhase.stop_time "qiskit.pulse.instructions.ShiftPhase.stop_time")          | Relative end time of this instruction.                                                                                                             |
| [`ShiftPhase.timeslots`](qiskit.pulse.instructions.ShiftPhase.timeslots "qiskit.pulse.instructions.ShiftPhase.timeslots")          | Occupied time slots by this instruction.                                                                                                           |

## Methods

|                                                                                                                                                   |                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`ShiftPhase.__call__`](qiskit.pulse.instructions.ShiftPhase.__call__ "qiskit.pulse.instructions.ShiftPhase.__call__")(channel)                   | Return a new ShiftPhase instruction supporting the deprecated syntax of FrameChange.                                                                                          |
| [`ShiftPhase.append`](qiskit.pulse.instructions.ShiftPhase.append "qiskit.pulse.instructions.ShiftPhase.append")(schedule\[, name])               | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`ShiftPhase.ch_duration`](qiskit.pulse.instructions.ShiftPhase.ch_duration "qiskit.pulse.instructions.ShiftPhase.ch_duration")(\*channels)       | Return duration of the supplied channels in this Instruction.                                                                                                                 |
| [`ShiftPhase.ch_start_time`](qiskit.pulse.instructions.ShiftPhase.ch_start_time "qiskit.pulse.instructions.ShiftPhase.ch_start_time")(\*channels) | Return minimum start time for supplied channels.                                                                                                                              |
| [`ShiftPhase.ch_stop_time`](qiskit.pulse.instructions.ShiftPhase.ch_stop_time "qiskit.pulse.instructions.ShiftPhase.ch_stop_time")(\*channels)    | Return maximum start time for supplied channels.                                                                                                                              |
| [`ShiftPhase.draw`](qiskit.pulse.instructions.ShiftPhase.draw "qiskit.pulse.instructions.ShiftPhase.draw")(\[dt, style, filename, …])             | Plot the instruction.                                                                                                                                                         |
| [`ShiftPhase.flatten`](qiskit.pulse.instructions.ShiftPhase.flatten "qiskit.pulse.instructions.ShiftPhase.flatten")()                             | Return itself as already single instruction.                                                                                                                                  |
| [`ShiftPhase.insert`](qiskit.pulse.instructions.ShiftPhase.insert "qiskit.pulse.instructions.ShiftPhase.insert")(start\_time, schedule\[, name])  | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`ShiftPhase.shift`](qiskit.pulse.instructions.ShiftPhase.shift "qiskit.pulse.instructions.ShiftPhase.shift")(time\[, name])                      | Return a new schedule shifted forward by time.                                                                                                                                |
| [`ShiftPhase.union`](qiskit.pulse.instructions.ShiftPhase.union "qiskit.pulse.instructions.ShiftPhase.union")(\*schedules\[, name])               | Return a new schedule which is the union of self and schedule.                                                                                                                |

