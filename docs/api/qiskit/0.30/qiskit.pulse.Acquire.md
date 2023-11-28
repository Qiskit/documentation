# Acquire

<span id="undefined" />

`Acquire(duration, channel, mem_slot=None, reg_slot=None, kernel=None, discriminator=None, name=None)`

Bases: `qiskit.pulse.instructions.instruction.Instruction`

The Acquire instruction is used to trigger the ADC associated with a particular qubit; e.g. instantiated with AcquireChannel(0), the Acquire command will trigger data collection for the channel associated with qubit 0 readout. This instruction also provides acquisition metadata:

> *   the number of cycles during which to acquire (in terms of dt),
> *   the register slot to store classified, intermediary readout results,
> *   the memory slot to return classified results,
> *   the kernel to integrate raw data for each shot, and
> *   the discriminator to classify kerneled IQ points.

Create a new Acquire instruction.

**Parameters**

*   **duration** (`Union`\[`int`, `ParameterExpression`]) – Length of time to acquire data in terms of dt.
*   **channel** (`AcquireChannel`) – The channel that will acquire data.
*   **mem\_slot** (`Optional`\[`MemorySlot`]) – The classical memory slot in which to store the classified readout result.
*   **reg\_slot** (`Optional`\[`RegisterSlot`]) – The fast-access register slot in which to store the classified readout result for fast feedback.
*   **kernel** (`Optional`\[`Kernel`]) – A `Kernel` for integrating raw data.
*   **discriminator** (`Optional`\[`Discriminator`]) – A `Discriminator` for discriminating kerneled IQ data into 0/1 results.
*   **name** (`Optional`\[`str`]) – Name of the instruction for display purposes.

**Raises**

[**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If channels are supplied, and the number of register and/or memory slots does not equal the number of channels.

## Methods

|                                                                                                                                               |                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`append`](qiskit.pulse.Acquire.append#qiskit.pulse.Acquire.append "qiskit.pulse.Acquire.append")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`. |
| [`assign_parameters`](qiskit.pulse.Acquire.assign_parameters#qiskit.pulse.Acquire.assign_parameters "qiskit.pulse.Acquire.assign_parameters") | Modify and return self with parameters assigned according to the input.                                                                                                                             |
| [`ch_duration`](qiskit.pulse.Acquire.ch_duration#qiskit.pulse.Acquire.ch_duration "qiskit.pulse.Acquire.ch_duration")                         | Return duration of the supplied channels in this Instruction.                                                                                                                                       |
| [`ch_start_time`](qiskit.pulse.Acquire.ch_start_time#qiskit.pulse.Acquire.ch_start_time "qiskit.pulse.Acquire.ch_start_time")                 | Return minimum start time for supplied channels.                                                                                                                                                    |
| [`ch_stop_time`](qiskit.pulse.Acquire.ch_stop_time#qiskit.pulse.Acquire.ch_stop_time "qiskit.pulse.Acquire.ch_stop_time")                     | Return maximum start time for supplied channels.                                                                                                                                                    |
| [`draw`](qiskit.pulse.Acquire.draw#qiskit.pulse.Acquire.draw "qiskit.pulse.Acquire.draw")                                                     | Plot the instruction.                                                                                                                                                                               |
| [`flatten`](qiskit.pulse.Acquire.flatten#qiskit.pulse.Acquire.flatten "qiskit.pulse.Acquire.flatten")                                         | Return itself as already single instruction.                                                                                                                                                        |
| [`insert`](qiskit.pulse.Acquire.insert#qiskit.pulse.Acquire.insert "qiskit.pulse.Acquire.insert")                                             | Return a new [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.                                              |
| [`is_parameterized`](qiskit.pulse.Acquire.is_parameterized#qiskit.pulse.Acquire.is_parameterized "qiskit.pulse.Acquire.is_parameterized")     | Return True iff the instruction is parameterized.                                                                                                                                                   |
| [`shift`](qiskit.pulse.Acquire.shift#qiskit.pulse.Acquire.shift "qiskit.pulse.Acquire.shift")                                                 | Return a new schedule shifted forward by time.                                                                                                                                                      |

## Attributes

<span id="undefined" />

### acquire

Acquire channel to acquire data. The `AcquireChannel` index maps trivially to qubit index.

**Return type**

`AcquireChannel`

<span id="undefined" />

### channel

Return the `Channel` that this instruction is scheduled on.

**Return type**

`AcquireChannel`

<span id="undefined" />

### channels

Returns the channels that this schedule uses.

**Return type**

`Tuple`\[`Union`\[`AcquireChannel`, `MemorySlot`, `RegisterSlot`]]

<span id="undefined" />

### discriminator

Return discrimination settings.

**Return type**

`Discriminator`

<span id="undefined" />

### duration

Duration of this instruction.

**Return type**

`Union`\[`int`, `ParameterExpression`]

<span id="undefined" />

### id

Unique identifier for this instruction.

**Return type**

`int`

<span id="undefined" />

### instructions

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, `Instruction`]]

<span id="undefined" />

### kernel

Return kernel settings.

**Return type**

`Kernel`

<span id="undefined" />

### mem\_slot

The classical memory slot which will store the classified readout result.

**Return type**

`MemorySlot`

<span id="undefined" />

### name

Name of this instruction.

**Return type**

`str`

<span id="undefined" />

### operands

Return instruction operands.

**Return type**

`Tuple`

<span id="undefined" />

### parameters

Parameters which determine the instruction behavior.

**Return type**

`Set`

<span id="undefined" />

### reg\_slot

The fast-access register slot which will store the classified readout result for fast-feedback computation.

**Return type**

`RegisterSlot`

<span id="undefined" />

### start\_time

Relative begin time of this instruction.

**Return type**

`int`

<span id="undefined" />

### stop\_time

Relative end time of this instruction.

**Return type**

`int`
