<span id="qiskit-pulse-acquirechannel" />

# qiskit.pulse.AcquireChannel

<span id="undefined" />

`AcquireChannel(index)`

Acquire channels are used to collect data.

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

|                                                                                                   |                |
| ------------------------------------------------------------------------------------------------- | -------------- |
| [`__init__`](#qiskit.pulse.AcquireChannel.__init__ "qiskit.pulse.AcquireChannel.__init__")(index) | Channel class. |

## Attributes

|                                                                                   |                                                                                    |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`index`](#qiskit.pulse.AcquireChannel.index "qiskit.pulse.AcquireChannel.index") | Return the index of this channel.                                                  |
| [`name`](#qiskit.pulse.AcquireChannel.name "qiskit.pulse.AcquireChannel.name")    | Return the shorthand alias for this channel, which is based on its type and index. |
| `prefix`                                                                          |                                                                                    |

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
