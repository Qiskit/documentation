---
title: MeasureChannel
description: API reference for qiskit.pulse.channels.MeasureChannel
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.channels.MeasureChannel
---

# MeasureChannel

<span id="qiskit.pulse.channels.MeasureChannel" />

`MeasureChannel(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/pulse/channels.py "view source code")

Bases: `PulseChannel`

Measure channels transmit measurement stimulus pulses for readout.

Channel class.

**Parameters**

**index** – Index of channel.

## Methods

<span id="qiskit-pulse-channels-measurechannel-is-parameterized" />

### is\_parameterized

<span id="qiskit.pulse.channels.MeasureChannel.is_parameterized" />

`MeasureChannel.is_parameterized()`

Return True iff the channel is parameterized.

**Return type**

bool

## Attributes

<span id="qiskit.pulse.channels.MeasureChannel.index" />

### index

Return the index of this channel. The index is a label for a control signal line typically mapped trivially to a qubit index. For instance, `DriveChannel(0)` labels the signal line driving the qubit labeled with index 0.

<span id="qiskit.pulse.channels.MeasureChannel.name" />

### name

Return the shorthand alias for this channel, which is based on its type and index.

<span id="qiskit.pulse.channels.MeasureChannel.parameters" />

### parameters

Parameters which determine the channel index.

<span id="qiskit.pulse.channels.MeasureChannel.prefix" />

### prefix

`str | None`

`= 'm'`

A shorthand string prefix for characterizing the channel type.

