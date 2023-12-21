---
title: Play
description: API reference for qiskit.pulse.Play
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.Play
---

# Play

<span id="qiskit.pulse.Play" />

`Play(pulse, channel, name=None)`

This instruction is responsible for applying a pulse on a channel.

The pulse specifies the exact time dynamics of the output signal envelope for a limited time. The output is modulated by a phase and frequency which are controlled by separate instructions. The pulse duration must be fixed, and is implicitly given in terms of the cycle time, dt, of the backend.

Create a new pulse instruction.

**Parameters**

*   **pulse** (`Pulse`) – A pulse waveform description, such as [`SamplePulse`](qiskit.pulse.pulse_lib.SamplePulse "qiskit.pulse.pulse_lib.SamplePulse").
*   **channel** ([`PulseChannel`](qiskit.pulse.channels#qiskit.pulse.channels.PulseChannel "qiskit.pulse.channels.PulseChannel")) – The channel to which the pulse is applied.
*   **name** (`Optional`\[`str`]) – Name of the instruction for display purposes. Defaults to `pulse.name`.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If pulse is not a Pulse type.

## Attributes

|                                                                                        |                                                                                                                                                    |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Play.channel`](qiskit.pulse.Play.channel "qiskit.pulse.Play.channel")                | Return the [`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on. |
| [`Play.channels`](qiskit.pulse.Play.channels "qiskit.pulse.Play.channels")             | Returns channels that this schedule uses.                                                                                                          |
| [`Play.command`](qiskit.pulse.Play.command "qiskit.pulse.Play.command")                | The associated command.                                                                                                                            |
| [`Play.duration`](qiskit.pulse.Play.duration "qiskit.pulse.Play.duration")             | Duration of this instruction.                                                                                                                      |
| [`Play.id`](qiskit.pulse.Play.id "qiskit.pulse.Play.id")                               | Unique identifier for this instruction.                                                                                                            |
| [`Play.instructions`](qiskit.pulse.Play.instructions "qiskit.pulse.Play.instructions") | Iterable for getting instructions from Schedule tree.                                                                                              |
| [`Play.name`](qiskit.pulse.Play.name "qiskit.pulse.Play.name")                         | Name of this instruction.                                                                                                                          |
| [`Play.operands`](qiskit.pulse.Play.operands "qiskit.pulse.Play.operands")             | Return instruction operands.                                                                                                                       |
| [`Play.pulse`](qiskit.pulse.Play.pulse "qiskit.pulse.Play.pulse")                      | A description of the samples that will be played.                                                                                                  |
| [`Play.start_time`](qiskit.pulse.Play.start_time "qiskit.pulse.Play.start_time")       | Relative begin time of this instruction.                                                                                                           |
| [`Play.stop_time`](qiskit.pulse.Play.stop_time "qiskit.pulse.Play.stop_time")          | Relative end time of this instruction.                                                                                                             |
| [`Play.timeslots`](qiskit.pulse.Play.timeslots "qiskit.pulse.Play.timeslots")          | Occupied time slots by this instruction.                                                                                                           |

## Methods

|                                                                                                       |                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Play.append`](qiskit.pulse.Play.append "qiskit.pulse.Play.append")(schedule\[, name])               | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`Play.ch_duration`](qiskit.pulse.Play.ch_duration "qiskit.pulse.Play.ch_duration")(\*channels)       | Return duration of the supplied channels in this Instruction.                                                                                                                 |
| [`Play.ch_start_time`](qiskit.pulse.Play.ch_start_time "qiskit.pulse.Play.ch_start_time")(\*channels) | Return minimum start time for supplied channels.                                                                                                                              |
| [`Play.ch_stop_time`](qiskit.pulse.Play.ch_stop_time "qiskit.pulse.Play.ch_stop_time")(\*channels)    | Return maximum start time for supplied channels.                                                                                                                              |
| [`Play.draw`](qiskit.pulse.Play.draw "qiskit.pulse.Play.draw")(\[dt, style, filename, …])             | Plot the instruction.                                                                                                                                                         |
| [`Play.flatten`](qiskit.pulse.Play.flatten "qiskit.pulse.Play.flatten")()                             | Return itself as already single instruction.                                                                                                                                  |
| [`Play.insert`](qiskit.pulse.Play.insert "qiskit.pulse.Play.insert")(start\_time, schedule\[, name])  | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`Play.shift`](qiskit.pulse.Play.shift "qiskit.pulse.Play.shift")(time\[, name])                      | Return a new schedule shifted forward by time.                                                                                                                                |
| [`Play.union`](qiskit.pulse.Play.union "qiskit.pulse.Play.union")(\*schedules\[, name])               | Return a new schedule which is the union of self and schedule.                                                                                                                |

