---
title: RegisterSlot
description: API reference for qiskit.pulse.RegisterSlot
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.RegisterSlot
---

# RegisterSlot

<span id="qiskit.pulse.RegisterSlot" />

`RegisterSlot(index)`

Classical resister slot channels represent classical registers (low-latency classical memory).

Channel class.

**Parameters**

**index** (`int`) – Index of channel.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If `index` is not a nonnegative integer.

## Attributes

|                                                                                              |                                                                                    |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`RegisterSlot.index`](qiskit.pulse.RegisterSlot.index "qiskit.pulse.RegisterSlot.index")    | Return the index of this channel.                                                  |
| [`RegisterSlot.name`](qiskit.pulse.RegisterSlot.name "qiskit.pulse.RegisterSlot.name")       | Return the shorthand alias for this channel, which is based on its type and index. |
| [`RegisterSlot.prefix`](qiskit.pulse.RegisterSlot.prefix "qiskit.pulse.RegisterSlot.prefix") | A shorthand string prefix for characterizing the channel type.                     |

## Methods

|   |
| - |

