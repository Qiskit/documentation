---
title: Snapshot
description: API reference for qiskit.pulse.Snapshot
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.Snapshot
---

# Snapshot

<span id="qiskit.pulse.Snapshot" />

`Snapshot(label, snapshot_type='statevector', name=None)`

An instruction targeted for simulators, to capture a moment in the simulation.

Create new snapshot.

**Parameters**

*   **label** (`str`) – Snapshot label which is used to identify the snapshot in the output.
*   **snapshot\_type** (`str`) – Type of snapshot, e.g., “state” (take a snapshot of the quantum state). The types of snapshots offered are defined by the simulator used.
*   **name** (`Optional`\[`str`]) – Snapshot name which defaults to `label`. This parameter is only for display purposes and is not taken into account during comparison.

## Attributes

|                                                                                                    |                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Snapshot.channel`](qiskit.pulse.Snapshot.channel "qiskit.pulse.Snapshot.channel")                | Return the [`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on; trivially, a `SnapshotChannel`. |
| [`Snapshot.channels`](qiskit.pulse.Snapshot.channels "qiskit.pulse.Snapshot.channels")             | Returns channels that this schedule uses.                                                                                                                                          |
| [`Snapshot.command`](qiskit.pulse.Snapshot.command "qiskit.pulse.Snapshot.command")                | The associated command.                                                                                                                                                            |
| [`Snapshot.duration`](qiskit.pulse.Snapshot.duration "qiskit.pulse.Snapshot.duration")             | Duration of this instruction.                                                                                                                                                      |
| [`Snapshot.id`](qiskit.pulse.Snapshot.id "qiskit.pulse.Snapshot.id")                               | Unique identifier for this instruction.                                                                                                                                            |
| [`Snapshot.instructions`](qiskit.pulse.Snapshot.instructions "qiskit.pulse.Snapshot.instructions") | Iterable for getting instructions from Schedule tree.                                                                                                                              |
| [`Snapshot.label`](qiskit.pulse.Snapshot.label "qiskit.pulse.Snapshot.label")                      | Label of snapshot.                                                                                                                                                                 |
| [`Snapshot.name`](qiskit.pulse.Snapshot.name "qiskit.pulse.Snapshot.name")                         | Name of this instruction.                                                                                                                                                          |
| [`Snapshot.operands`](qiskit.pulse.Snapshot.operands "qiskit.pulse.Snapshot.operands")             | Return instruction operands.                                                                                                                                                       |
| [`Snapshot.start_time`](qiskit.pulse.Snapshot.start_time "qiskit.pulse.Snapshot.start_time")       | Relative begin time of this instruction.                                                                                                                                           |
| [`Snapshot.stop_time`](qiskit.pulse.Snapshot.stop_time "qiskit.pulse.Snapshot.stop_time")          | Relative end time of this instruction.                                                                                                                                             |
| [`Snapshot.timeslots`](qiskit.pulse.Snapshot.timeslots "qiskit.pulse.Snapshot.timeslots")          | Occupied time slots by this instruction.                                                                                                                                           |
| [`Snapshot.type`](qiskit.pulse.Snapshot.type "qiskit.pulse.Snapshot.type")                         | Type of snapshot.                                                                                                                                                                  |

## Methods

|                                                                                                                   |                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Snapshot.__call__`](qiskit.pulse.Snapshot.__call__ "qiskit.pulse.Snapshot.__call__")()                          | Deprecated.                                                                                                                                                                   |
| [`Snapshot.append`](qiskit.pulse.Snapshot.append "qiskit.pulse.Snapshot.append")(schedule\[, name])               | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`Snapshot.ch_duration`](qiskit.pulse.Snapshot.ch_duration "qiskit.pulse.Snapshot.ch_duration")(\*channels)       | Return duration of the supplied channels in this Instruction.                                                                                                                 |
| [`Snapshot.ch_start_time`](qiskit.pulse.Snapshot.ch_start_time "qiskit.pulse.Snapshot.ch_start_time")(\*channels) | Return minimum start time for supplied channels.                                                                                                                              |
| [`Snapshot.ch_stop_time`](qiskit.pulse.Snapshot.ch_stop_time "qiskit.pulse.Snapshot.ch_stop_time")(\*channels)    | Return maximum start time for supplied channels.                                                                                                                              |
| [`Snapshot.draw`](qiskit.pulse.Snapshot.draw "qiskit.pulse.Snapshot.draw")(\[dt, style, filename, …])             | Plot the instruction.                                                                                                                                                         |
| [`Snapshot.flatten`](qiskit.pulse.Snapshot.flatten "qiskit.pulse.Snapshot.flatten")()                             | Return itself as already single instruction.                                                                                                                                  |
| [`Snapshot.insert`](qiskit.pulse.Snapshot.insert "qiskit.pulse.Snapshot.insert")(start\_time, schedule\[, name])  | Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`Snapshot.shift`](qiskit.pulse.Snapshot.shift "qiskit.pulse.Snapshot.shift")(time\[, name])                      | Return a new schedule shifted forward by time.                                                                                                                                |
| [`Snapshot.union`](qiskit.pulse.Snapshot.union "qiskit.pulse.Snapshot.union")(\*schedules\[, name])               | Return a new schedule which is the union of self and schedule.                                                                                                                |

