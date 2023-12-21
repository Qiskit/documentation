---
title: SetFrequency
description: API reference for qiskit.pulse.SetFrequency
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.SetFrequency
---

# SetFrequency

<span id="qiskit.pulse.SetFrequency" />

`SetFrequency(frequency, channel, name=None)`

Set the channel frequency. This command operates on `PulseChannel` s. A `PulseChannel` creates pulses of the form

$$
Re[\exp(i 2\pi f jdt + \phi) d_j].
$$

Here, $f$ is the frequency of the channel. The command `SetFrequency` allows the user to set the value of $f$. All pulses that are played on a channel after SetFrequency has been called will have the corresponding frequency.

The duration of SetFrequency is 0.

Creates a new set channel frequency instruction.

**Parameters**

*   **frequency** (`float`) – New frequency of the channel in Hz.
*   **channel** (`Optional`\[[`PulseChannel`](qiskit.pulse.channels#qiskit.pulse.channels.PulseChannel "qiskit.pulse.channels.PulseChannel")]) – The channel this instruction operates on.
*   **name** (`Optional`\[`str`]) – Name of this set channel frequency command.

## Attributes

|                                                                                                                |                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`SetFrequency.channel`](qiskit.pulse.SetFrequency.channel "qiskit.pulse.SetFrequency.channel")                | Return the [`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on. |
| [`SetFrequency.channels`](qiskit.pulse.SetFrequency.channels "qiskit.pulse.SetFrequency.channels")             | Returns channels that this schedule uses.                                                                                                          |
| [`SetFrequency.command`](qiskit.pulse.SetFrequency.command "qiskit.pulse.SetFrequency.command")                | The associated command.                                                                                                                            |
| [`SetFrequency.duration`](qiskit.pulse.SetFrequency.duration "qiskit.pulse.SetFrequency.duration")             | Duration of this instruction.                                                                                                                      |
| [`SetFrequency.frequency`](qiskit.pulse.SetFrequency.frequency "qiskit.pulse.SetFrequency.frequency")          | New frequency.                                                                                                                                     |
| [`SetFrequency.id`](qiskit.pulse.SetFrequency.id "qiskit.pulse.SetFrequency.id")                               | Unique identifier for this instruction.                                                                                                            |
| [`SetFrequency.instructions`](qiskit.pulse.SetFrequency.instructions "qiskit.pulse.SetFrequency.instructions") | Iterable for getting instructions from Schedule tree.                                                                                              |
| [`SetFrequency.name`](qiskit.pulse.SetFrequency.name "qiskit.pulse.SetFrequency.name")                         | Name of this instruction.                                                                                                                          |
| [`SetFrequency.operands`](qiskit.pulse.SetFrequency.operands "qiskit.pulse.SetFrequency.operands")             | Return instruction operands.                                                                                                                       |
| [`SetFrequency.start_time`](qiskit.pulse.SetFrequency.start_time "qiskit.pulse.SetFrequency.start_time")       | Relative begin time of this instruction.                                                                                                           |
| [`SetFrequency.stop_time`](qiskit.pulse.SetFrequency.stop_time "qiskit.pulse.SetFrequency.stop_time")          | Relative end time of this instruction.                                                                                                             |
| [`SetFrequency.timeslots`](qiskit.pulse.SetFrequency.timeslots "qiskit.pulse.SetFrequency.timeslots")          | Occupied time slots by this instruction.                                                                                                           |

## Methods

|                                                                                                                               |                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`SetFrequency.append`](qiskit.pulse.SetFrequency.append "qiskit.pulse.SetFrequency.append")(schedule\[, name])               | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`SetFrequency.ch_duration`](qiskit.pulse.SetFrequency.ch_duration "qiskit.pulse.SetFrequency.ch_duration")(\*channels)       | Return duration of the supplied channels in this Instruction.                                                                                                                 |
| [`SetFrequency.ch_start_time`](qiskit.pulse.SetFrequency.ch_start_time "qiskit.pulse.SetFrequency.ch_start_time")(\*channels) | Return minimum start time for supplied channels.                                                                                                                              |
| [`SetFrequency.ch_stop_time`](qiskit.pulse.SetFrequency.ch_stop_time "qiskit.pulse.SetFrequency.ch_stop_time")(\*channels)    | Return maximum start time for supplied channels.                                                                                                                              |
| [`SetFrequency.draw`](qiskit.pulse.SetFrequency.draw "qiskit.pulse.SetFrequency.draw")(\[dt, style, filename, …])             | Plot the instruction.                                                                                                                                                         |
| [`SetFrequency.flatten`](qiskit.pulse.SetFrequency.flatten "qiskit.pulse.SetFrequency.flatten")()                             | Return itself as already single instruction.                                                                                                                                  |
| [`SetFrequency.insert`](qiskit.pulse.SetFrequency.insert "qiskit.pulse.SetFrequency.insert")(start\_time, schedule\[, name])  | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`SetFrequency.shift`](qiskit.pulse.SetFrequency.shift "qiskit.pulse.SetFrequency.shift")(time\[, name])                      | Return a new schedule shifted forward by time.                                                                                                                                |
| [`SetFrequency.union`](qiskit.pulse.SetFrequency.union "qiskit.pulse.SetFrequency.union")(\*schedules\[, name])               | Return a new schedule which is the union of self and schedule.                                                                                                                |

