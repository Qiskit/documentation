---
title: ControlChannel
description: API reference for qiskit.pulse.ControlChannel
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.ControlChannel
---

<span id="qiskit-pulse-controlchannel" />

# qiskit.pulse.ControlChannel

<span id="qiskit.pulse.ControlChannel" />

`ControlChannel(index)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/pulse/channels.py "view source code")

Control channels provide supplementary control over the qubit to the drive channel. These are often associated with multi-qubit gate operations. They may not map trivially to a particular qubit index.

Channel class.

**Parameters**

**index** (`int`) – Index of channel.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If `index` is not a nonnegative integer.

### \_\_init\_\_

<span id="qiskit.pulse.ControlChannel.__init__" />

`__init__(index)`

Channel class.

**Parameters**

**index** (`int`) – Index of channel.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If `index` is not a nonnegative integer.

## Methods

|                                                                                                   |                |
| ------------------------------------------------------------------------------------------------- | -------------- |
| [`__init__`](#qiskit.pulse.ControlChannel.__init__ "qiskit.pulse.ControlChannel.__init__")(index) | Channel class. |

## Attributes

|                                                                                   |                                                                                    |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`index`](#qiskit.pulse.ControlChannel.index "qiskit.pulse.ControlChannel.index") | Return the index of this channel.                                                  |
| [`name`](#qiskit.pulse.ControlChannel.name "qiskit.pulse.ControlChannel.name")    | Return the shorthand alias for this channel, which is based on its type and index. |
| `prefix`                                                                          |                                                                                    |

### index

<span id="qiskit.pulse.ControlChannel.index" />

`property index`

Return the index of this channel. The index is a label for a control signal line typically mapped trivially to a qubit index. For instance, `DriveChannel(0)` labels the signal line driving the qubit labeled with index 0.

**Return type**

`int`

### name

<span id="qiskit.pulse.ControlChannel.name" />

`property name`

Return the shorthand alias for this channel, which is based on its type and index.

**Return type**

`str`

