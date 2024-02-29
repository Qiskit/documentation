---
title: SetFrequency
description: API reference for qiskit.pulse.instructions.SetFrequency
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.instructions.SetFrequency
---

# SetFrequency

<span id="qiskit.pulse.instructions.SetFrequency" />

`qiskit.pulse.instructions.SetFrequency(frequency, channel, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/main/qiskit/pulse/instructions/frequency.py "view source code")

Bases: [`Instruction`](pulse#qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")

Set the channel frequency. This instruction operates on `PulseChannel` s. A `PulseChannel` creates pulses of the form

$$
Re[\exp(i 2\pi f jdt + \phi) d_j].


$$

Here, $f$ is the frequency of the channel. The instruction `SetFrequency` allows the user to set the value of $f$. All pulses that are played on a channel after SetFrequency has been called will have the corresponding frequency.

The duration of SetFrequency is 0.

Creates a new set channel frequency instruction.

**Parameters**

*   **frequency** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")  *|*[*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")) – New frequency of the channel in Hz.
*   **channel** (*PulseChannel*) – The channel this instruction operates on.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of this set channel frequency instruction.

## Attributes

<span id="qiskit.pulse.instructions.SetFrequency.channel" />

### channel

Return the [`Channel`](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on.

<span id="qiskit.pulse.instructions.SetFrequency.channels" />

### channels

Returns the channels that this schedule uses.

<span id="qiskit.pulse.instructions.SetFrequency.duration" />

### duration

Duration of this instruction.

<span id="qiskit.pulse.instructions.SetFrequency.frequency" />

### frequency

New frequency.

<span id="qiskit.pulse.instructions.SetFrequency.id" />

### id

Unique identifier for this instruction.

<span id="qiskit.pulse.instructions.SetFrequency.instructions" />

### instructions

Iterable for getting instructions from Schedule tree.

<span id="qiskit.pulse.instructions.SetFrequency.name" />

### name

Name of this instruction.

<span id="qiskit.pulse.instructions.SetFrequency.operands" />

### operands

Return instruction operands.

<span id="qiskit.pulse.instructions.SetFrequency.parameters" />

### parameters

Parameters which determine the instruction behavior.

<span id="qiskit.pulse.instructions.SetFrequency.start_time" />

### start\_time

Relative begin time of this instruction.

<span id="qiskit.pulse.instructions.SetFrequency.stop_time" />

### stop\_time

Relative end time of this instruction.

## Methods

### append

<span id="qiskit.pulse.instructions.SetFrequency.append" />

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

<span id="qiskit.pulse.instructions.SetFrequency.ch_duration" />

`ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** ([*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")) – Supplied channels

**Return type**

[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")

### ch\_start\_time

<span id="qiskit.pulse.instructions.SetFrequency.ch_start_time" />

`ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** ([*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")) – Supplied channels

**Return type**

[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")

### ch\_stop\_time

<span id="qiskit.pulse.instructions.SetFrequency.ch_stop_time" />

`ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** ([*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")) – Supplied channels

**Return type**

[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")

### insert

<span id="qiskit.pulse.instructions.SetFrequency.insert" />

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

<span id="qiskit.pulse.instructions.SetFrequency.is_parameterized" />

`is_parameterized()`

Return True iff the instruction is parameterized.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### shift

<span id="qiskit.pulse.instructions.SetFrequency.shift" />

`shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Time to shift by
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of the new schedule. Defaults to name of self

**Returns**

The shifted schedule.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

