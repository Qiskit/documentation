<span id="qiskit-pulse-registerslot" />

# qiskit.pulse.RegisterSlot

<span id="undefined" />

`RegisterSlot(index)`

Classical resister slot channels represent classical registers (low-latency classical memory).

Channel class.

**Parameters**

**index** (`int`) – Index of channel.

**Raises**

[**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If `index` is not a nonnegative integer.

<span id="undefined" />

`__init__(index)`

Channel class.

**Parameters**

**index** (`int`) – Index of channel.

**Raises**

[**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If `index` is not a nonnegative integer.

## Methods

|                                                                                               |                |
| --------------------------------------------------------------------------------------------- | -------------- |
| [`__init__`](#qiskit.pulse.RegisterSlot.__init__ "qiskit.pulse.RegisterSlot.__init__")(index) | Channel class. |

## Attributes

|                                                                               |                                                                                    |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`index`](#qiskit.pulse.RegisterSlot.index "qiskit.pulse.RegisterSlot.index") | Return the index of this channel.                                                  |
| [`name`](#qiskit.pulse.RegisterSlot.name "qiskit.pulse.RegisterSlot.name")    | Return the shorthand alias for this channel, which is based on its type and index. |
| `prefix`                                                                      |                                                                                    |

<span id="undefined" />

`property index`

Return the index of this channel. The index is a label for a control signal line typically mapped trivially to a qubit index. For instance, `DriveChannel(0)` labels the signal line driving the qubit labeled with index 0.

**Return type**

`int`

<span id="undefined" />

`property name`

Return the shorthand alias for this channel, which is based on its type and index.

**Return type**

`str`
