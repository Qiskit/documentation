---
title: AcquireChannel
description: API reference for qiskit.pulse.channels.AcquireChannel
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.channels.AcquireChannel
---

# AcquireChannel

<span id="qiskit.pulse.channels.AcquireChannel" />

`qiskit.pulse.channels.AcquireChannel(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/pulse/channels.py "view source code")

Bases: [`Channel`](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")

Acquire channels are used to collect data.

Channel class.

**Parameters**

**index** – Index of channel.

## Attributes

<span id="qiskit.pulse.channels.AcquireChannel.index" />

### index

Return the index of this channel. The index is a label for a control signal line typically mapped trivially to a qubit index. For instance, `DriveChannel(0)` labels the signal line driving the qubit labeled with index 0.

<span id="qiskit.pulse.channels.AcquireChannel.name" />

### name

Return the shorthand alias for this channel, which is based on its type and index.

<span id="qiskit.pulse.channels.AcquireChannel.parameters" />

### parameters

Parameters which determine the channel index.

<span id="qiskit.pulse.channels.AcquireChannel.prefix" />

### prefix

`str | None`

`= 'a'`

A shorthand string prefix for characterizing the channel type.

## Methods

### is\_parameterized

<span id="qiskit.pulse.channels.AcquireChannel.is_parameterized" />

`is_parameterized()`

Return True iff the channel is parameterized.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

