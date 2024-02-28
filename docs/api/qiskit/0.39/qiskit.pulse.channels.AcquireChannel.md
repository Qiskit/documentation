---
title: AcquireChannel
description: API reference for qiskit.pulse.channels.AcquireChannel
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.channels.AcquireChannel
---

# AcquireChannel

<span id="qiskit.pulse.channels.AcquireChannel" />

`AcquireChannel(index)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/pulse/channels.py "view source code")

Bases: [`qiskit.pulse.channels.Channel`](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")

Acquire channels are used to collect data.

Channel class.

**Parameters**

**index** (`int`) – Index of channel.

## Methods

### is\_parameterized

<span id="qiskit.pulse.channels.AcquireChannel.is_parameterized" />

`AcquireChannel.is_parameterized()`

Return True iff the channel is parameterized.

**Return type**

`bool`

## Attributes

<span id="qiskit.pulse.channels.AcquireChannel.index" />

### index

Return the index of this channel. The index is a label for a control signal line typically mapped trivially to a qubit index. For instance, `DriveChannel(0)` labels the signal line driving the qubit labeled with index 0.

**Return type**

`Union`\[`int`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]

<span id="qiskit.pulse.channels.AcquireChannel.name" />

### name

Return the shorthand alias for this channel, which is based on its type and index.

**Return type**

`str`

<span id="qiskit.pulse.channels.AcquireChannel.parameters" />

### parameters

Parameters which determine the channel index.

**Return type**

`Set`

<span id="qiskit.pulse.channels.AcquireChannel.prefix" />

### prefix

`Optional[str]`

`= 'a'`

A shorthand string prefix for characterizing the channel type.

