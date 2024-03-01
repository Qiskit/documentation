---
title: Snapshot
description: API reference for qiskit.pulse.instructions.Snapshot
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.instructions.Snapshot
---

# Snapshot

<span id="qiskit.pulse.instructions.Snapshot" />

`Snapshot(label, snapshot_type='statevector', name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/pulse/instructions/snapshot.py "view source code")

Bases: [`Instruction`](pulse#qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")

An instruction targeted for simulators, to capture a moment in the simulation.

Create new snapshot.

**Parameters**

*   **label** (*str*) – Snapshot label which is used to identify the snapshot in the output.
*   **snapshot\_type** (*str*) – Type of snapshot, e.g., “state” (take a snapshot of the quantum state). The types of snapshots offered are defined by the simulator used.
*   **name** (*str | None*) – Snapshot name which defaults to `label`. This parameter is only for display purposes and is not taken into account during comparison.

## Methods

<span id="qiskit-pulse-instructions-snapshot-append" />

### append

<span id="qiskit.pulse.instructions.Snapshot.append" />

`Snapshot.append(schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

**Parameters**

*   **schedule** (*Union\['Schedule', 'Instruction']*) – Schedule or instruction to be appended
*   **name** (*str | None*) – Name of the new schedule. Defaults to name of self

**Returns**

A new schedule with `schedule` a this instruction at t=0.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

<span id="qiskit-pulse-instructions-snapshot-ch-duration" />

### ch\_duration

<span id="qiskit.pulse.instructions.Snapshot.ch_duration" />

`Snapshot.ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** (*List\[*[*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")*]*) – Supplied channels

**Return type**

int

<span id="qiskit-pulse-instructions-snapshot-ch-start-time" />

### ch\_start\_time

<span id="qiskit.pulse.instructions.Snapshot.ch_start_time" />

`Snapshot.ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** (*List\[*[*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")*]*) – Supplied channels

**Return type**

int

<span id="qiskit-pulse-instructions-snapshot-ch-stop-time" />

### ch\_stop\_time

<span id="qiskit.pulse.instructions.Snapshot.ch_stop_time" />

`Snapshot.ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** (*List\[*[*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")*]*) – Supplied channels

**Return type**

int

<span id="qiskit-pulse-instructions-snapshot-draw" />

### draw

<span id="qiskit.pulse.instructions.Snapshot.draw" />

`Snapshot.draw(dt=1, style=None, filename=None, interp_method=None, scale=1, plot_all=False, plot_range=None, interactive=False, table=True, label=False, framechange=True, channels=None)`

Plot the instruction.

<Admonition title="Deprecated since version 0.23.0" type="danger">
  The method `qiskit.pulse.instructions.instruction.Instruction.draw()` is deprecated as of qiskit-terra 0.23.0. It will be removed no earlier than 3 months after the release date. No direct alternative is being provided to drawing individual pulses. But, instructions can be visualized as part of a complete schedule using `qiskit.visualization.pulse_drawer`.
</Admonition>

**Parameters**

*   **dt** (*float*) – Time interval of samples
*   **style** (*Optional\[SchedStyle]*) – A style sheet to configure plot appearance
*   **filename** (*str | None*) – Name required to save pulse image
*   **interp\_method** (*Callable | None*) – A function for interpolation
*   **scale** (*float*) – Relative visual scaling of waveform amplitudes
*   **plot\_all** (*bool*) – Plot empty channels
*   **plot\_range** (*Tuple\[float] | None*) – A tuple of time range to plot
*   **interactive** (*bool*) – When set true show the circuit in a new window (this depends on the matplotlib backend being used supporting this)
*   **table** (*bool*) – Draw event table for supported instructions
*   **label** (*bool*) – Label individual instructions
*   **framechange** (*bool*) – Add framechange indicators
*   **channels** (*List\[*[*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")*] | None*) – A list of channel names to plot

**Returns**

A matplotlib figure object of the pulse schedule

**Return type**

matplotlib.figure

<span id="qiskit-pulse-instructions-snapshot-insert" />

### insert

<span id="qiskit.pulse.instructions.Snapshot.insert" />

`Snapshot.insert(start_time, schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.

**Parameters**

*   **start\_time** (*int*) – Time to insert the schedule schedule
*   **schedule** (*Union\['Schedule', 'Instruction']*) – Schedule or instruction to insert
*   **name** (*str | None*) – Name of the new schedule. Defaults to name of self

**Returns**

A new schedule with `schedule` inserted with this instruction at t=0.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

<span id="qiskit-pulse-instructions-snapshot-is-parameterized" />

### is\_parameterized

<span id="qiskit.pulse.instructions.Snapshot.is_parameterized" />

`Snapshot.is_parameterized()`

Return True iff the instruction is parameterized.

**Return type**

bool

<span id="qiskit-pulse-instructions-snapshot-shift" />

### shift

<span id="qiskit.pulse.instructions.Snapshot.shift" />

`Snapshot.shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** (*int*) – Time to shift by
*   **name** (*str | None*) – Name of the new schedule. Defaults to name of self

**Returns**

The shifted schedule.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

## Attributes

<span id="qiskit.pulse.instructions.Snapshot.channel" />

### channel

Return the [`Channel`](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on; trivially, a `SnapshotChannel`.

<span id="qiskit.pulse.instructions.Snapshot.channels" />

### channels

Returns the channels that this schedule uses.

<span id="qiskit.pulse.instructions.Snapshot.duration" />

### duration

Duration of this instruction.

<span id="qiskit.pulse.instructions.Snapshot.id" />

### id

Unique identifier for this instruction.

<span id="qiskit.pulse.instructions.Snapshot.instructions" />

### instructions

Iterable for getting instructions from Schedule tree.

<span id="qiskit.pulse.instructions.Snapshot.label" />

### label

Label of snapshot.

<span id="qiskit.pulse.instructions.Snapshot.name" />

### name

Name of this instruction.

<span id="qiskit.pulse.instructions.Snapshot.operands" />

### operands

Return instruction operands.

<span id="qiskit.pulse.instructions.Snapshot.parameters" />

### parameters

Parameters which determine the instruction behavior.

<span id="qiskit.pulse.instructions.Snapshot.start_time" />

### start\_time

Relative begin time of this instruction.

<span id="qiskit.pulse.instructions.Snapshot.stop_time" />

### stop\_time

Relative end time of this instruction.

<span id="qiskit.pulse.instructions.Snapshot.type" />

### type

Type of snapshot.

