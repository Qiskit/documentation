---
title: Delay
description: API reference for qiskit.pulse.instructions.Delay
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.instructions.Delay
---

# Delay

<span id="qiskit.pulse.instructions.Delay" />

`Delay(duration, channel=None, name=None)`

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

*   **duration** (`int`) – Length of time of the delay in terms of dt.
*   **channel** (`Optional`\[[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]) – The channel that will have the delay.
*   **name** (`Optional`\[`str`]) – Name of the delay for display purposes.

## Attributes

|                                                                                                                     |                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Delay.channel`](qiskit.pulse.instructions.Delay.channel "qiskit.pulse.instructions.Delay.channel")                | Return the [`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on. |
| [`Delay.channels`](qiskit.pulse.instructions.Delay.channels "qiskit.pulse.instructions.Delay.channels")             | Returns channels that this schedule uses.                                                                                                          |
| [`Delay.command`](qiskit.pulse.instructions.Delay.command "qiskit.pulse.instructions.Delay.command")                | The associated command.                                                                                                                            |
| [`Delay.duration`](qiskit.pulse.instructions.Delay.duration "qiskit.pulse.instructions.Delay.duration")             | Duration of this instruction.                                                                                                                      |
| [`Delay.id`](qiskit.pulse.instructions.Delay.id "qiskit.pulse.instructions.Delay.id")                               | Unique identifier for this instruction.                                                                                                            |
| [`Delay.instructions`](qiskit.pulse.instructions.Delay.instructions "qiskit.pulse.instructions.Delay.instructions") | Iterable for getting instructions from Schedule tree.                                                                                              |
| [`Delay.name`](qiskit.pulse.instructions.Delay.name "qiskit.pulse.instructions.Delay.name")                         | Name of this instruction.                                                                                                                          |
| [`Delay.operands`](qiskit.pulse.instructions.Delay.operands "qiskit.pulse.instructions.Delay.operands")             | Return instruction operands.                                                                                                                       |
| [`Delay.start_time`](qiskit.pulse.instructions.Delay.start_time "qiskit.pulse.instructions.Delay.start_time")       | Relative begin time of this instruction.                                                                                                           |
| [`Delay.stop_time`](qiskit.pulse.instructions.Delay.stop_time "qiskit.pulse.instructions.Delay.stop_time")          | Relative end time of this instruction.                                                                                                             |
| [`Delay.timeslots`](qiskit.pulse.instructions.Delay.timeslots "qiskit.pulse.instructions.Delay.timeslots")          | Occupied time slots by this instruction.                                                                                                           |

## Methods

|                                                                                                                                    |                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Delay.__call__`](qiskit.pulse.instructions.Delay.__call__ "qiskit.pulse.instructions.Delay.__call__")(channel)                   | Return new `Delay` that is fully instantiated with both `duration` and a `channel`.                                                                                           |
| [`Delay.append`](qiskit.pulse.instructions.Delay.append "qiskit.pulse.instructions.Delay.append")(schedule\[, name])               | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`Delay.ch_duration`](qiskit.pulse.instructions.Delay.ch_duration "qiskit.pulse.instructions.Delay.ch_duration")(\*channels)       | Return duration of the supplied channels in this Instruction.                                                                                                                 |
| [`Delay.ch_start_time`](qiskit.pulse.instructions.Delay.ch_start_time "qiskit.pulse.instructions.Delay.ch_start_time")(\*channels) | Return minimum start time for supplied channels.                                                                                                                              |
| [`Delay.ch_stop_time`](qiskit.pulse.instructions.Delay.ch_stop_time "qiskit.pulse.instructions.Delay.ch_stop_time")(\*channels)    | Return maximum start time for supplied channels.                                                                                                                              |
| [`Delay.draw`](qiskit.pulse.instructions.Delay.draw "qiskit.pulse.instructions.Delay.draw")(\[dt, style, filename, …])             | Plot the instruction.                                                                                                                                                         |
| [`Delay.flatten`](qiskit.pulse.instructions.Delay.flatten "qiskit.pulse.instructions.Delay.flatten")()                             | Return itself as already single instruction.                                                                                                                                  |
| [`Delay.insert`](qiskit.pulse.instructions.Delay.insert "qiskit.pulse.instructions.Delay.insert")(start\_time, schedule\[, name])  | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`Delay.shift`](qiskit.pulse.instructions.Delay.shift "qiskit.pulse.instructions.Delay.shift")(time\[, name])                      | Return a new schedule shifted forward by time.                                                                                                                                |
| [`Delay.union`](qiskit.pulse.instructions.Delay.union "qiskit.pulse.instructions.Delay.union")(\*schedules\[, name])               | Return a new schedule which is the union of self and schedule.                                                                                                                |

