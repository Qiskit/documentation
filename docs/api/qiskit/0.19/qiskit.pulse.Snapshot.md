---
title: Snapshot
description: API reference for qiskit.pulse.Snapshot
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.Snapshot
---

# Snapshot

<span id="qiskit.pulse.Snapshot" />

`Snapshot(label, snapshot_type='statevector', name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/pulse/instructions/snapshot.py "view source code")

An instruction targeted for simulators, to capture a moment in the simulation.

Create new snapshot.

**Parameters**

*   **label** (`str`) – Snapshot label which is used to identify the snapshot in the output.
*   **snapshot\_type** (`str`) – Type of snapshot, e.g., “state” (take a snapshot of the quantum state). The types of snapshots offered are defined by the simulator used.
*   **name** (`Optional`\[`str`]) – Snapshot name which defaults to `label`. This parameter is only for display purposes and is not taken into account during comparison.

## Attributes

### channel

<span id="qiskit.pulse.Snapshot.channel" />

`qiskit.pulse.channels.SnapshotChannel`

Return the [`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on; trivially, a `SnapshotChannel`.

**Return type**

[`SnapshotChannel`](qiskit.pulse.channels#snapshotchannel "qiskit.pulse.channels.SnapshotChannel")

### channels

<span id="qiskit.pulse.Snapshot.channels" />

`Tuple[qiskit.pulse.channels.Channel]`

Returns channels that this schedule uses.

**Return type**

`Tuple`\[[`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel")]

### command

<span id="qiskit.pulse.Snapshot.command" />

`qiskit.pulse.commands.command.Command`

The associated command. Commands are deprecated, so this method will be deprecated shortly.

**Return type**

`Command`

### duration

<span id="qiskit.pulse.Snapshot.duration" />

`int`

Duration of this instruction.

**Return type**

`int`

### id

<span id="qiskit.pulse.Snapshot.id" />

`int`

Unique identifier for this instruction.

**Return type**

`int`

### instructions

<span id="qiskit.pulse.Snapshot.instructions" />

`Tuple[Tuple[int, qiskit.pulse.instructions.instruction.Instruction]]`

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, [`Instruction`](qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")]]

### label

<span id="qiskit.pulse.Snapshot.label" />

`str`

Label of snapshot.

**Return type**

`str`

### name

<span id="qiskit.pulse.Snapshot.name" />

`str`

Name of this instruction.

**Return type**

`str`

### operands

<span id="qiskit.pulse.Snapshot.operands" />

`Tuple`

Return instruction operands.

**Return type**

`Tuple`

### start\_time

<span id="qiskit.pulse.Snapshot.start_time" />

`int`

Relative begin time of this instruction.

**Return type**

`int`

### stop\_time

<span id="qiskit.pulse.Snapshot.stop_time" />

`int`

Relative end time of this instruction.

**Return type**

`int`

### timeslots

<span id="qiskit.pulse.Snapshot.timeslots" />

`Dict[qiskit.pulse.channels.Channel, List[Tuple[int, int]]]`

Occupied time slots by this instruction.

**Return type**

`Dict`\[[`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel"), `List`\[`Tuple`\[`int`, `int`]]]

### type

<span id="qiskit.pulse.Snapshot.type" />

`str`

Type of snapshot.

**Return type**

`str`

## Methods

### \_\_call\_\_

<span id="qiskit.pulse.Snapshot.__call__" />

`Snapshot.__call__()`

Deprecated.

### append

<span id="qiskit.pulse.Snapshot.append" />

`Snapshot.append(schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

**Parameters**

*   **schedule** (`ScheduleComponent`) – schedule to be appended
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

### ch\_duration

<span id="qiskit.pulse.Snapshot.ch_duration" />

`Snapshot.ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_start\_time

<span id="qiskit.pulse.Snapshot.ch_start_time" />

`Snapshot.ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_stop\_time

<span id="qiskit.pulse.Snapshot.ch_stop_time" />

`Snapshot.ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### draw

<span id="qiskit.pulse.Snapshot.draw" />

`Snapshot.draw(dt=1, style=None, filename=None, interp_method=None, scale=1, channels_to_plot=None, plot_all=False, plot_range=None, interactive=False, table=True, label=False, framechange=True, scaling=None, channels=None)`

Plot the instruction.

**Parameters**

*   **dt** (`float`) – Time interval of samples
*   **style** (*Optional\[*[*SchedStyle*](qiskit.visualization.pulse.qcstyle#schedstyle "qiskit.visualization.pulse.qcstyle.SchedStyle")*]*) – A style sheet to configure plot appearance
*   **filename** (`Optional`\[`str`]) – Name required to save pulse image
*   **interp\_method** (`Optional`\[`Callable`]) – A function for interpolation
*   **scale** (`float`) – Relative visual scaling of waveform amplitudes
*   **channels\_to\_plot** (`Optional`\[`List`\[[`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel")]]) – Deprecated, see channels
*   **plot\_all** (`bool`) – Plot empty channels
*   **plot\_range** (`Optional`\[`Tuple`\[`float`]]) – A tuple of time range to plot
*   **interactive** (`bool`) – When set true show the circuit in a new window (this depends on the matplotlib backend being used supporting this)
*   **table** (`bool`) – Draw event table for supported instructions
*   **label** (`bool`) – Label individual instructions
*   **framechange** (`bool`) – Add framechange indicators
*   **scaling** (`Optional`\[`float`]) – Deprecated, see scale
*   **channels** (`Optional`\[`List`\[[`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel")]]) – A list of channel names to plot

**Returns**

A matplotlib figure object of the pulse schedule

**Return type**

matplotlib.figure

### flatten

<span id="qiskit.pulse.Snapshot.flatten" />

`Snapshot.flatten()`

Return itself as already single instruction.

**Return type**

[`Instruction`](qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")

### insert

<span id="qiskit.pulse.Snapshot.insert" />

`Snapshot.insert(start_time, schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.

**Parameters**

*   **start\_time** (`int`) – Time to insert the schedule schedule
*   **schedule** (`ScheduleComponent`) – Schedule to insert
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

### shift

<span id="qiskit.pulse.Snapshot.shift" />

`Snapshot.shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** (`int`) – Time to shift by
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

### union

<span id="qiskit.pulse.Snapshot.union" />

`Snapshot.union(*schedules, name=None)`

Return a new schedule which is the union of self and schedule.

**Parameters**

*   **\*schedules** – Schedules to be take the union with this Instruction.
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

