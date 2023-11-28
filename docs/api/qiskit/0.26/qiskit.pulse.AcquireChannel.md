# qiskit.pulse.AcquireChannel

<span id="undefined" />

`AcquireChannel(index)`

Acquire channels are used to collect data.

Channel class.

**Parameters**

**index** (`int`) – Index of channel.

<span id="undefined" />

`__init__(index)`

Channel class.

**Parameters**

**index** (`int`) – Index of channel.

## Methods

|                                                                                                                      |                                                                  |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [`__init__`](#qiskit.pulse.AcquireChannel.__init__ "qiskit.pulse.AcquireChannel.__init__")(index)                    | Channel class.                                                   |
| [`assign`](#qiskit.pulse.AcquireChannel.assign "qiskit.pulse.AcquireChannel.assign")(parameter, value)               | Return a new channel with the input Parameter assigned to value. |
| [`is_parameterized`](#qiskit.pulse.AcquireChannel.is_parameterized "qiskit.pulse.AcquireChannel.is_parameterized")() | Return True iff the channel is parameterized.                    |

## Attributes

|                                                                                                  |                                                                                    |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| [`index`](#qiskit.pulse.AcquireChannel.index "qiskit.pulse.AcquireChannel.index")                | Return the index of this channel.                                                  |
| [`name`](#qiskit.pulse.AcquireChannel.name "qiskit.pulse.AcquireChannel.name")                   | Return the shorthand alias for this channel, which is based on its type and index. |
| [`parameters`](#qiskit.pulse.AcquireChannel.parameters "qiskit.pulse.AcquireChannel.parameters") | Parameters which determine the channel index.                                      |
| `prefix`                                                                                         |                                                                                    |

<span id="undefined" />

`assign(parameter, value)`

Return a new channel with the input Parameter assigned to value.

**Parameters**

*   **parameter** (`Parameter`) – A parameter in this expression whose value will be updated.
*   **value** (`Union`\[`ParameterExpression`, `float`, `int`]) – The new value to bind to.

**Return type**

[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")

**Returns**

A new channel with updated parameters.

**Raises**

[**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the parameter is not present in the channel.

<span id="undefined" />

`property index`

Return the index of this channel. The index is a label for a control signal line typically mapped trivially to a qubit index. For instance, `DriveChannel(0)` labels the signal line driving the qubit labeled with index 0.

**Return type**

`Union`\[`int`, `ParameterExpression`]

<span id="undefined" />

`is_parameterized()`

Return True iff the channel is parameterized.

**Return type**

`bool`

<span id="undefined" />

`property name`

Return the shorthand alias for this channel, which is based on its type and index.

**Return type**

`str`

<span id="undefined" />

`property parameters`

Parameters which determine the channel index.

**Return type**

`Set`
