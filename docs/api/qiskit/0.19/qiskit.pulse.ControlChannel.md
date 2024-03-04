---
title: ControlChannel
description: API reference for qiskit.pulse.ControlChannel
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.ControlChannel
---

# ControlChannel

<span id="qiskit.pulse.ControlChannel" />

`ControlChannel(index)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/pulse/channels.py "view source code")

Control channels provide supplementary control over the qubit to the drive channel. These are often associated with multi-qubit gate operations. They may not map trivially to a particular qubit index.

Channel class.

**Parameters**

**index** (`int`) – Index of channel.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If `index` is not a nonnegative integer.

## Attributes

### index

<span id="qiskit.pulse.ControlChannel.index" />

`int`

Return the index of this channel. The index is a label for a control signal line typically mapped trivially to a qubit index. For instance, `DriveChannel(0)` labels the signal line driving the qubit labeled with index 0.

**Return type**

`int`

### name

<span id="qiskit.pulse.ControlChannel.name" />

`str`

Return the shorthand alias for this channel, which is based on its type and index.

**Return type**

`str`

### prefix

<span id="qiskit.pulse.ControlChannel.prefix" />

`= 'u'`

A shorthand string prefix for characterizing the channel type.

## Methods

|   |
| - |

