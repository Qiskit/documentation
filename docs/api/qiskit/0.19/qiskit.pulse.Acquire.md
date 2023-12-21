---
title: Acquire
description: API reference for qiskit.pulse.Acquire
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.Acquire
---

# Acquire

<span id="qiskit.pulse.Acquire" />

`Acquire(duration, channel=None, mem_slot=None, reg_slots=None, mem_slots=None, reg_slot=None, kernel=None, discriminator=None, name=None)`

The Acquire instruction is used to trigger the ADC associated with a particular qubit; e.g. instantiated with AcquireChannel(0), the Acquire command will trigger data collection for the channel associated with qubit 0 readout. This instruction also provides acquisition metadata:

> *   the number of cycles during which to acquire (in terms of dt),
> *   the register slot to store classified, intermediary readout results,
> *   the memory slot to return classified results,
> *   the kernel to integrate raw data for each shot, and
> *   the discriminator to classify kerneled IQ points.

Create a new Acquire instruction.

**Parameters**

*   **duration** (`int`) – Length of time to acquire data in terms of dt.
*   **channel** (`Union`\[[`AcquireChannel`](qiskit.pulse.channels#qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel"), `List`\[[`AcquireChannel`](qiskit.pulse.channels#qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")], `None`]) – The channel that will acquire data.
*   **mem\_slot** (`Union`\[[`MemorySlot`](qiskit.pulse.channels#qiskit.pulse.channels.MemorySlot "qiskit.pulse.channels.MemorySlot"), `List`\[[`MemorySlot`](qiskit.pulse.channels#qiskit.pulse.channels.MemorySlot "qiskit.pulse.channels.MemorySlot")], `None`]) – The classical memory slot in which to store the classified readout result.
*   **mem\_slots** (`Optional`\[`List`\[[`MemorySlot`](qiskit.pulse.channels#qiskit.pulse.channels.MemorySlot "qiskit.pulse.channels.MemorySlot")]]) – Deprecated list form of `mem_slot`.
*   **reg\_slots** (`Union`\[[`RegisterSlot`](qiskit.pulse.channels#qiskit.pulse.channels.RegisterSlot "qiskit.pulse.channels.RegisterSlot"), `List`\[[`RegisterSlot`](qiskit.pulse.channels#qiskit.pulse.channels.RegisterSlot "qiskit.pulse.channels.RegisterSlot")], `None`]) – Deprecated list form of `reg_slot`.
*   **reg\_slot** (`Optional`\[[`RegisterSlot`](qiskit.pulse.channels#qiskit.pulse.channels.RegisterSlot "qiskit.pulse.channels.RegisterSlot")]) – The fast-access register slot in which to store the classified readout result for fast feedback.
*   **kernel** (`Optional`\[`Kernel`]) – A `Kernel` for integrating raw data.
*   **discriminator** (`Optional`\[`Discriminator`]) – A `Discriminator` for discriminating kerneled IQ data into 0/1 results.
*   **name** (`Optional`\[`str`]) – Name of the instruction for display purposes.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If channels are supplied, and the number of register and/or memory slots does not equal the number of channels.

## Attributes

|                                                                                                    |                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Acquire.acquire`](qiskit.pulse.Acquire.acquire "qiskit.pulse.Acquire.acquire")                   | Acquire channel to acquire data.                                                                                                                   |
| [`Acquire.acquires`](qiskit.pulse.Acquire.acquires "qiskit.pulse.Acquire.acquires")                | Acquire channels to be acquired on.                                                                                                                |
| [`Acquire.channel`](qiskit.pulse.Acquire.channel "qiskit.pulse.Acquire.channel")                   | Return the [`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on. |
| [`Acquire.channels`](qiskit.pulse.Acquire.channels "qiskit.pulse.Acquire.channels")                | Returns channels that this schedule uses.                                                                                                          |
| [`Acquire.command`](qiskit.pulse.Acquire.command "qiskit.pulse.Acquire.command")                   | The associated command.                                                                                                                            |
| [`Acquire.discriminator`](qiskit.pulse.Acquire.discriminator "qiskit.pulse.Acquire.discriminator") | Return discrimination settings.                                                                                                                    |
| [`Acquire.duration`](qiskit.pulse.Acquire.duration "qiskit.pulse.Acquire.duration")                | Duration of this instruction.                                                                                                                      |
| [`Acquire.id`](qiskit.pulse.Acquire.id "qiskit.pulse.Acquire.id")                                  | Unique identifier for this instruction.                                                                                                            |
| [`Acquire.instructions`](qiskit.pulse.Acquire.instructions "qiskit.pulse.Acquire.instructions")    | Iterable for getting instructions from Schedule tree.                                                                                              |
| [`Acquire.kernel`](qiskit.pulse.Acquire.kernel "qiskit.pulse.Acquire.kernel")                      | Return kernel settings.                                                                                                                            |
| [`Acquire.mem_slot`](qiskit.pulse.Acquire.mem_slot "qiskit.pulse.Acquire.mem_slot")                | The classical memory slot which will store the classified readout result.                                                                          |
| [`Acquire.mem_slots`](qiskit.pulse.Acquire.mem_slots "qiskit.pulse.Acquire.mem_slots")             | MemorySlots.                                                                                                                                       |
| [`Acquire.name`](qiskit.pulse.Acquire.name "qiskit.pulse.Acquire.name")                            | Name of this instruction.                                                                                                                          |
| [`Acquire.operands`](qiskit.pulse.Acquire.operands "qiskit.pulse.Acquire.operands")                | Return instruction operands.                                                                                                                       |
| [`Acquire.reg_slot`](qiskit.pulse.Acquire.reg_slot "qiskit.pulse.Acquire.reg_slot")                | The fast-access register slot which will store the classified readout result for fast-feedback computation.                                        |
| [`Acquire.reg_slots`](qiskit.pulse.Acquire.reg_slots "qiskit.pulse.Acquire.reg_slots")             | RegisterSlots.                                                                                                                                     |
| [`Acquire.start_time`](qiskit.pulse.Acquire.start_time "qiskit.pulse.Acquire.start_time")          | Relative begin time of this instruction.                                                                                                           |
| [`Acquire.stop_time`](qiskit.pulse.Acquire.stop_time "qiskit.pulse.Acquire.stop_time")             | Relative end time of this instruction.                                                                                                             |
| [`Acquire.timeslots`](qiskit.pulse.Acquire.timeslots "qiskit.pulse.Acquire.timeslots")             | Occupied time slots by this instruction.                                                                                                           |

## Methods

|                                                                                                                |                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Acquire.__call__`](qiskit.pulse.Acquire.__call__ "qiskit.pulse.Acquire.__call__")(\[channel, mem\_slot, …])  | Return new `Acquire` that is fully instantiated with its channels.                                                                                                            |
| [`Acquire.append`](qiskit.pulse.Acquire.append "qiskit.pulse.Acquire.append")(schedule\[, name])               | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`Acquire.ch_duration`](qiskit.pulse.Acquire.ch_duration "qiskit.pulse.Acquire.ch_duration")(\*channels)       | Return duration of the supplied channels in this Instruction.                                                                                                                 |
| [`Acquire.ch_start_time`](qiskit.pulse.Acquire.ch_start_time "qiskit.pulse.Acquire.ch_start_time")(\*channels) | Return minimum start time for supplied channels.                                                                                                                              |
| [`Acquire.ch_stop_time`](qiskit.pulse.Acquire.ch_stop_time "qiskit.pulse.Acquire.ch_stop_time")(\*channels)    | Return maximum start time for supplied channels.                                                                                                                              |
| [`Acquire.draw`](qiskit.pulse.Acquire.draw "qiskit.pulse.Acquire.draw")(\[dt, style, filename, …])             | Plot the instruction.                                                                                                                                                         |
| [`Acquire.flatten`](qiskit.pulse.Acquire.flatten "qiskit.pulse.Acquire.flatten")()                             | Return itself as already single instruction.                                                                                                                                  |
| [`Acquire.insert`](qiskit.pulse.Acquire.insert "qiskit.pulse.Acquire.insert")(start\_time, schedule\[, name])  | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`Acquire.shift`](qiskit.pulse.Acquire.shift "qiskit.pulse.Acquire.shift")(time\[, name])                      | Return a new schedule shifted forward by time.                                                                                                                                |
| [`Acquire.union`](qiskit.pulse.Acquire.union "qiskit.pulse.Acquire.union")(\*schedules\[, name])               | Return a new schedule which is the union of self and schedule.                                                                                                                |

