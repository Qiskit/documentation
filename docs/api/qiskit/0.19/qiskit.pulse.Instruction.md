---
title: Instruction
description: API reference for qiskit.pulse.Instruction
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.Instruction
---

# Instruction

<span id="qiskit.pulse.Instruction" />

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

|                                                                                                             |                                                       |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`Instruction.channels`](qiskit.pulse.Instruction.channels "qiskit.pulse.Instruction.channels")             | Returns channels that this schedule uses.             |
| [`Instruction.command`](qiskit.pulse.Instruction.command "qiskit.pulse.Instruction.command")                | The associated command.                               |
| [`Instruction.duration`](qiskit.pulse.Instruction.duration "qiskit.pulse.Instruction.duration")             | Duration of this instruction.                         |
| [`Instruction.id`](qiskit.pulse.Instruction.id "qiskit.pulse.Instruction.id")                               | Unique identifier for this instruction.               |
| [`Instruction.instructions`](qiskit.pulse.Instruction.instructions "qiskit.pulse.Instruction.instructions") | Iterable for getting instructions from Schedule tree. |
| [`Instruction.name`](qiskit.pulse.Instruction.name "qiskit.pulse.Instruction.name")                         | Name of this instruction.                             |
| [`Instruction.operands`](qiskit.pulse.Instruction.operands "qiskit.pulse.Instruction.operands")             | Return instruction operands.                          |
| [`Instruction.start_time`](qiskit.pulse.Instruction.start_time "qiskit.pulse.Instruction.start_time")       | Relative begin time of this instruction.              |
| [`Instruction.stop_time`](qiskit.pulse.Instruction.stop_time "qiskit.pulse.Instruction.stop_time")          | Relative end time of this instruction.                |
| [`Instruction.timeslots`](qiskit.pulse.Instruction.timeslots "qiskit.pulse.Instruction.timeslots")          | Occupied time slots by this instruction.              |

## Methods

|                                                                                                                            |                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Instruction.append`](qiskit.pulse.Instruction.append "qiskit.pulse.Instruction.append")(schedule\[, name])               | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`Instruction.ch_duration`](qiskit.pulse.Instruction.ch_duration "qiskit.pulse.Instruction.ch_duration")(\*channels)       | Return duration of the supplied channels in this Instruction.                                                                                                                 |
| [`Instruction.ch_start_time`](qiskit.pulse.Instruction.ch_start_time "qiskit.pulse.Instruction.ch_start_time")(\*channels) | Return minimum start time for supplied channels.                                                                                                                              |
| [`Instruction.ch_stop_time`](qiskit.pulse.Instruction.ch_stop_time "qiskit.pulse.Instruction.ch_stop_time")(\*channels)    | Return maximum start time for supplied channels.                                                                                                                              |
| [`Instruction.draw`](qiskit.pulse.Instruction.draw "qiskit.pulse.Instruction.draw")(\[dt, style, filename, …])             | Plot the instruction.                                                                                                                                                         |
| [`Instruction.flatten`](qiskit.pulse.Instruction.flatten "qiskit.pulse.Instruction.flatten")()                             | Return itself as already single instruction.                                                                                                                                  |
| [`Instruction.insert`](qiskit.pulse.Instruction.insert "qiskit.pulse.Instruction.insert")(start\_time, schedule\[, name])  | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`Instruction.shift`](qiskit.pulse.Instruction.shift "qiskit.pulse.Instruction.shift")(time\[, name])                      | Return a new schedule shifted forward by time.                                                                                                                                |
| [`Instruction.union`](qiskit.pulse.Instruction.union "qiskit.pulse.Instruction.union")(\*schedules\[, name])               | Return a new schedule which is the union of self and schedule.                                                                                                                |

