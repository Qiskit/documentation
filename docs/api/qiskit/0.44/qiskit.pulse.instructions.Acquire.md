---
title: Acquire
description: API reference for qiskit.pulse.instructions.Acquire
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.instructions.Acquire
---

# Acquire

<span id="qiskit.pulse.instructions.Acquire" />

`qiskit.pulse.instructions.Acquire(duration, channel, mem_slot=None, reg_slot=None, kernel=None, discriminator=None, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/instructions/acquire.py "view source code")

Bases: [`Instruction`](pulse#qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")

The Acquire instruction is used to trigger the ADC associated with a particular qubit; e.g. instantiated with AcquireChannel(0), the Acquire command will trigger data collection for the channel associated with qubit 0 readout. This instruction also provides acquisition metadata:

> *   the number of cycles during which to acquire (in terms of dt),
> *   the register slot to store classified, intermediary readout results,
> *   the memory slot to return classified results,
> *   the kernel to integrate raw data for each shot, and
> *   the discriminator to classify kerneled IQ points.

Create a new Acquire instruction.

**Parameters**

*   **duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *|*[*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")) – Length of time to acquire data in terms of dt.
*   **channel** ([*AcquireChannel*](qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")) – The channel that will acquire data.
*   **mem\_slot** ([*MemorySlot*](qiskit.pulse.channels.MemorySlot "qiskit.pulse.channels.MemorySlot") *| None*) – The classical memory slot in which to store the classified readout result.
*   **reg\_slot** ([*RegisterSlot*](qiskit.pulse.channels.RegisterSlot "qiskit.pulse.channels.RegisterSlot") *| None*) – The fast-access register slot in which to store the classified readout result for fast feedback.
*   **kernel** (*Kernel | None*) – A `Kernel` for integrating raw data.
*   **discriminator** (*Discriminator | None*) – A `Discriminator` for discriminating kerneled IQ data into 0/1 results.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of the instruction for display purposes.

## Attributes

<span id="qiskit.pulse.instructions.Acquire.acquire" />

### acquire

Acquire channel to acquire data. The `AcquireChannel` index maps trivially to qubit index.

<span id="qiskit.pulse.instructions.Acquire.channel" />

### channel

Return the [`Channel`](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on.

<span id="qiskit.pulse.instructions.Acquire.channels" />

### channels

Returns the channels that this schedule uses.

<span id="qiskit.pulse.instructions.Acquire.discriminator" />

### discriminator

Return discrimination settings.

<span id="qiskit.pulse.instructions.Acquire.duration" />

### duration

Duration of this instruction.

<span id="qiskit.pulse.instructions.Acquire.id" />

### id

Unique identifier for this instruction.

<span id="qiskit.pulse.instructions.Acquire.instructions" />

### instructions

Iterable for getting instructions from Schedule tree.

<span id="qiskit.pulse.instructions.Acquire.kernel" />

### kernel

Return kernel settings.

<span id="qiskit.pulse.instructions.Acquire.mem_slot" />

### mem\_slot

The classical memory slot which will store the classified readout result.

<span id="qiskit.pulse.instructions.Acquire.name" />

### name

Name of this instruction.

<span id="qiskit.pulse.instructions.Acquire.operands" />

### operands

Return instruction operands.

<span id="qiskit.pulse.instructions.Acquire.parameters" />

### parameters

Parameters which determine the instruction behavior.

<span id="qiskit.pulse.instructions.Acquire.reg_slot" />

### reg\_slot

The fast-access register slot which will store the classified readout result for fast-feedback computation.

<span id="qiskit.pulse.instructions.Acquire.start_time" />

### start\_time

Relative begin time of this instruction.

<span id="qiskit.pulse.instructions.Acquire.stop_time" />

### stop\_time

Relative end time of this instruction.

## Methods

### append

<span id="qiskit.pulse.instructions.Acquire.append" />

`append(schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

**Parameters**

*   **schedule** (*Union\['Schedule', 'Instruction']*) – Schedule or instruction to be appended
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of the new schedule. Defaults to name of self

**Returns**

A new schedule with `schedule` a this instruction at t=0.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

### ch\_duration

<span id="qiskit.pulse.instructions.Acquire.ch_duration" />

`ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** ([*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")*]*) – Supplied channels

**Return type**

[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")

### ch\_start\_time

<span id="qiskit.pulse.instructions.Acquire.ch_start_time" />

`ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** ([*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")*]*) – Supplied channels

**Return type**

[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")

### ch\_stop\_time

<span id="qiskit.pulse.instructions.Acquire.ch_stop_time" />

`ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** ([*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")*]*) – Supplied channels

**Return type**

[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")

### draw

<span id="qiskit.pulse.instructions.Acquire.draw" />

`draw(dt=1, style=None, filename=None, interp_method=None, scale=1, plot_all=False, plot_range=None, interactive=False, table=True, label=False, framechange=True, channels=None)`

Plot the instruction.

<Admonition title="Deprecated since version 0.23.0" type="danger">
  The method `qiskit.pulse.instructions.instruction.Instruction.draw()` is deprecated as of qiskit-terra 0.23.0. It will be removed no earlier than 3 months after the release date. No direct alternative is being provided to drawing individual pulses. But, instructions can be visualized as part of a complete schedule using `qiskit.visualization.pulse_drawer`.
</Admonition>

**Parameters**

*   **dt** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Time interval of samples
*   **style** (*Optional\[SchedStyle]*) – A style sheet to configure plot appearance
*   **filename** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name required to save pulse image
*   **interp\_method** ([*Callable*](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.12)") *| None*) – A function for interpolation
*   **scale** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Relative visual scaling of waveform amplitudes
*   **plot\_all** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – Plot empty channels
*   **plot\_range** ([*Tuple*](https://docs.python.org/3/library/typing.html#typing.Tuple "(in Python v3.12)")*\[*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*] | None*) – A tuple of time range to plot
*   **interactive** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – When set true show the circuit in a new window (this depends on the matplotlib backend being used supporting this)
*   **table** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – Draw event table for supported instructions
*   **label** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – Label individual instructions
*   **framechange** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – Add framechange indicators
*   **channels** ([*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")*] | None*) – A list of channel names to plot

**Returns**

A matplotlib figure object of the pulse schedule

**Return type**

matplotlib.figure

### insert

<span id="qiskit.pulse.instructions.Acquire.insert" />

`insert(start_time, schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.

**Parameters**

*   **start\_time** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Time to insert the schedule schedule
*   **schedule** (*Union\['Schedule', 'Instruction']*) – Schedule or instruction to insert
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of the new schedule. Defaults to name of self

**Returns**

A new schedule with `schedule` inserted with this instruction at t=0.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

### is\_parameterized

<span id="qiskit.pulse.instructions.Acquire.is_parameterized" />

`is_parameterized()`

Return True iff the instruction is parameterized.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### shift

<span id="qiskit.pulse.instructions.Acquire.shift" />

`shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Time to shift by
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of the new schedule. Defaults to name of self

**Returns**

The shifted schedule.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

