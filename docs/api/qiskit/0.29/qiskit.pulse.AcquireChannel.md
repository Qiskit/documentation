# AcquireChannel

<span id="undefined" />

`AcquireChannel(index)`

Bases: `qiskit.pulse.channels.Channel`

Acquire channels are used to collect data.

Channel class.

**Parameters**

**index** (`int`) – Index of channel.

## Methods

|                                                                                                                                                                |                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [`assign`](qiskit.pulse.AcquireChannel.assign#qiskit.pulse.AcquireChannel.assign "qiskit.pulse.AcquireChannel.assign")                                         | Return a new channel with the input Parameter assigned to value. |
| [`is_parameterized`](qiskit.pulse.AcquireChannel.is_parameterized#qiskit.pulse.AcquireChannel.is_parameterized "qiskit.pulse.AcquireChannel.is_parameterized") | Return True iff the channel is parameterized.                    |

## Attributes

<span id="undefined" />

### index

Return the index of this channel. The index is a label for a control signal line typically mapped trivially to a qubit index. For instance, `DriveChannel(0)` labels the signal line driving the qubit labeled with index 0.

**Return type**

`Union`\[`int`, `ParameterExpression`]

<span id="undefined" />

### name

Return the shorthand alias for this channel, which is based on its type and index.

**Return type**

`str`

<span id="undefined" />

### parameters

Parameters which determine the channel index.

**Return type**

`Set`

<span id="undefined" />

### prefix

`= 'a'`
