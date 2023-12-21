---
title: DriveChannel
description: API reference for qiskit.pulse.DriveChannel
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.DriveChannel
---

# DriveChannel

<span id="qiskit.pulse.DriveChannel" />

`DriveChannel(index)`

Drive channels transmit signals to qubits which enact gate operations.

Channel class.

**Parameters**

**index** (`int`) – Index of channel.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If `index` is not a nonnegative integer.

## Attributes

|                                                                                              |                                                                                    |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`DriveChannel.index`](qiskit.pulse.DriveChannel.index "qiskit.pulse.DriveChannel.index")    | Return the index of this channel.                                                  |
| [`DriveChannel.name`](qiskit.pulse.DriveChannel.name "qiskit.pulse.DriveChannel.name")       | Return the shorthand alias for this channel, which is based on its type and index. |
| [`DriveChannel.prefix`](qiskit.pulse.DriveChannel.prefix "qiskit.pulse.DriveChannel.prefix") | A shorthand string prefix for characterizing the channel type.                     |

## Methods

|   |
| - |

