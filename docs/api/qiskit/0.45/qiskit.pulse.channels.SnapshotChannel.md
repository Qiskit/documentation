---
title: SnapshotChannel
description: API reference for qiskit.pulse.channels.SnapshotChannel
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.channels.SnapshotChannel
---

# SnapshotChannel

<span id="qiskit.pulse.channels.SnapshotChannel" />

`qiskit.pulse.channels.SnapshotChannel(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.45/qiskit/pulse/channels.py "view source code")

Bases: `ClassicalIOChannel`

Snapshot channels are used to specify instructions for simulators.

Create new snapshot channel.

## Attributes

<span id="qiskit.pulse.channels.SnapshotChannel.index" />

### index

Return the index of this channel. The index is a label for a control signal line typically mapped trivially to a qubit index. For instance, `DriveChannel(0)` labels the signal line driving the qubit labeled with index 0.

<span id="qiskit.pulse.channels.SnapshotChannel.name" />

### name

Return the shorthand alias for this channel, which is based on its type and index.

<span id="qiskit.pulse.channels.SnapshotChannel.parameters" />

### parameters

Parameters which determine the channel index.

<span id="qiskit.pulse.channels.SnapshotChannel.prefix" />

### prefix

`str | None`

`= 's'`

A shorthand string prefix for characterizing the channel type.

## Methods

### is\_parameterized

<span id="qiskit.pulse.channels.SnapshotChannel.is_parameterized" />

`is_parameterized()`

Return True iff the channel is parameterized.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

