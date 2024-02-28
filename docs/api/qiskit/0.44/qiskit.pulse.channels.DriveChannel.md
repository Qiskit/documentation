---
title: DriveChannel
description: API reference for qiskit.pulse.channels.DriveChannel
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.channels.DriveChannel
---

# DriveChannel

<span id="qiskit.pulse.channels.DriveChannel" />

`qiskit.pulse.channels.DriveChannel(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/channels.py "view source code")

Bases: `PulseChannel`

Drive channels transmit signals to qubits which enact gate operations.

Channel class.

**Parameters**

**index** – Index of channel.

## Attributes

<span id="qiskit.pulse.channels.DriveChannel.index" />

### index

Return the index of this channel. The index is a label for a control signal line typically mapped trivially to a qubit index. For instance, `DriveChannel(0)` labels the signal line driving the qubit labeled with index 0.

<span id="qiskit.pulse.channels.DriveChannel.name" />

### name

Return the shorthand alias for this channel, which is based on its type and index.

<span id="qiskit.pulse.channels.DriveChannel.parameters" />

### parameters

Parameters which determine the channel index.

<span id="qiskit.pulse.channels.DriveChannel.prefix" />

### prefix

`str | None`

`= 'd'`

A shorthand string prefix for characterizing the channel type.

## Methods

### is\_parameterized

<span id="qiskit.pulse.channels.DriveChannel.is_parameterized" />

`is_parameterized()`

Return True iff the channel is parameterized.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

