<span id="qiskit-pulse-memoryslot" />

# qiskit.pulse.MemorySlot

<span id="undefined" />

`MemorySlot(index)`

Memory slot channels represent classical memory storage.

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

|                                                                                           |                |
| ----------------------------------------------------------------------------------------- | -------------- |
| [`__init__`](#qiskit.pulse.MemorySlot.__init__ "qiskit.pulse.MemorySlot.__init__")(index) | Channel class. |

## Attributes

|                                                                           |                                                                                    |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`index`](#qiskit.pulse.MemorySlot.index "qiskit.pulse.MemorySlot.index") | Return the index of this channel.                                                  |
| [`name`](#qiskit.pulse.MemorySlot.name "qiskit.pulse.MemorySlot.name")    | Return the shorthand alias for this channel, which is based on its type and index. |
| `prefix`                                                                  |                                                                                    |

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
