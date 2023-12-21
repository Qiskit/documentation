---
title: ControlChannel
description: API reference for qiskit.pulse.ControlChannel
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.ControlChannel
---

# ControlChannel

<span id="qiskit.pulse.ControlChannel" />

`ControlChannel(index)`

Control channels provide supplementary control over the qubit to the drive channel. These are often associated with multi-qubit gate operations. They may not map trivially to a particular qubit index.

Channel class.

**Parameters**

**index** (`int`) – Index of channel.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If `index` is not a nonnegative integer.

## Attributes

|                                                                                                    |                                                                                    |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`ControlChannel.index`](qiskit.pulse.ControlChannel.index "qiskit.pulse.ControlChannel.index")    | Return the index of this channel.                                                  |
| [`ControlChannel.name`](qiskit.pulse.ControlChannel.name "qiskit.pulse.ControlChannel.name")       | Return the shorthand alias for this channel, which is based on its type and index. |
| [`ControlChannel.prefix`](qiskit.pulse.ControlChannel.prefix "qiskit.pulse.ControlChannel.prefix") | A shorthand string prefix for characterizing the channel type.                     |

## Methods

|   |
| - |

