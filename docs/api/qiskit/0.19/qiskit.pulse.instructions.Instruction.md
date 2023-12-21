---
title: Instruction
description: API reference for qiskit.pulse.instructions.Instruction
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.instructions.Instruction
---

# Instruction

<span id="qiskit.pulse.instructions.Instruction" />

`Instruction(operands, duration, channels, name=None)`

The smallest schedulable unit: a single instruction. It has a fixed duration and specified channels.

Instruction initializer.

**Parameters**

*   **operands** (`Tuple`) – The argument list.
*   **duration** (`Union`\[`Command`, `int`]) – Length of time taken by the instruction in terms of dt. Deprecated: the first argument used to be the Command.
*   **channels** (`Tuple`\[[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]) – Tuple of pulse channels that this instruction operates on.
*   **name** (`Optional`\[`str`]) – Optional display name for this instruction.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If duration is negative.

## Attributes

|                                                                                                                                       |                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`Instruction.channels`](qiskit.pulse.instructions.Instruction.channels "qiskit.pulse.instructions.Instruction.channels")             | Returns channels that this schedule uses.             |
| [`Instruction.command`](qiskit.pulse.instructions.Instruction.command "qiskit.pulse.instructions.Instruction.command")                | The associated command.                               |
| [`Instruction.duration`](qiskit.pulse.instructions.Instruction.duration "qiskit.pulse.instructions.Instruction.duration")             | Duration of this instruction.                         |
| [`Instruction.id`](qiskit.pulse.instructions.Instruction.id "qiskit.pulse.instructions.Instruction.id")                               | Unique identifier for this instruction.               |
| [`Instruction.instructions`](qiskit.pulse.instructions.Instruction.instructions "qiskit.pulse.instructions.Instruction.instructions") | Iterable for getting instructions from Schedule tree. |
| [`Instruction.name`](qiskit.pulse.instructions.Instruction.name "qiskit.pulse.instructions.Instruction.name")                         | Name of this instruction.                             |
| [`Instruction.operands`](qiskit.pulse.instructions.Instruction.operands "qiskit.pulse.instructions.Instruction.operands")             | Return instruction operands.                          |
| [`Instruction.start_time`](qiskit.pulse.instructions.Instruction.start_time "qiskit.pulse.instructions.Instruction.start_time")       | Relative begin time of this instruction.              |
| [`Instruction.stop_time`](qiskit.pulse.instructions.Instruction.stop_time "qiskit.pulse.instructions.Instruction.stop_time")          | Relative end time of this instruction.                |
| [`Instruction.timeslots`](qiskit.pulse.instructions.Instruction.timeslots "qiskit.pulse.instructions.Instruction.timeslots")          | Occupied time slots by this instruction.              |

## Methods

|                                                                                                                                                      |                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Instruction.append`](qiskit.pulse.instructions.Instruction.append "qiskit.pulse.instructions.Instruction.append")(schedule\[, name])               | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`Instruction.ch_duration`](qiskit.pulse.instructions.Instruction.ch_duration "qiskit.pulse.instructions.Instruction.ch_duration")(\*channels)       | Return duration of the supplied channels in this Instruction.                                                                                                                 |
| [`Instruction.ch_start_time`](qiskit.pulse.instructions.Instruction.ch_start_time "qiskit.pulse.instructions.Instruction.ch_start_time")(\*channels) | Return minimum start time for supplied channels.                                                                                                                              |
| [`Instruction.ch_stop_time`](qiskit.pulse.instructions.Instruction.ch_stop_time "qiskit.pulse.instructions.Instruction.ch_stop_time")(\*channels)    | Return maximum start time for supplied channels.                                                                                                                              |
| [`Instruction.draw`](qiskit.pulse.instructions.Instruction.draw "qiskit.pulse.instructions.Instruction.draw")(\[dt, style, filename, …])             | Plot the instruction.                                                                                                                                                         |
| [`Instruction.flatten`](qiskit.pulse.instructions.Instruction.flatten "qiskit.pulse.instructions.Instruction.flatten")()                             | Return itself as already single instruction.                                                                                                                                  |
| [`Instruction.insert`](qiskit.pulse.instructions.Instruction.insert "qiskit.pulse.instructions.Instruction.insert")(start\_time, schedule\[, name])  | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`Instruction.shift`](qiskit.pulse.instructions.Instruction.shift "qiskit.pulse.instructions.Instruction.shift")(time\[, name])                      | Return a new schedule shifted forward by time.                                                                                                                                |
| [`Instruction.union`](qiskit.pulse.instructions.Instruction.union "qiskit.pulse.instructions.Instruction.union")(\*schedules\[, name])               | Return a new schedule which is the union of self and schedule.                                                                                                                |

