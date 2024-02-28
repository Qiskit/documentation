---
title: Reference
description: API reference for qiskit.pulse.instructions.Reference
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.instructions.Reference
---

# Reference

<span id="qiskit.pulse.instructions.Reference" />

`qiskit.pulse.instructions.Reference(name, *extra_keys)` [GitHub](https://github.com/qiskit/qiskit/tree/main/qiskit/pulse/instructions/reference.py "view source code")

Bases: [`Instruction`](pulse#qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")

Pulse compiler directive that refers to a subroutine.

If a pulse program uses the same subset of instructions multiple times, then using the [`Reference`](#qiskit.pulse.instructions.Reference "qiskit.pulse.instructions.Reference") class may significantly reduce the memory footprint of the program. This instruction only stores the set of strings to identify the subroutine.

The actual pulse program can be stored in the `ScheduleBlock.references` of the [`ScheduleBlock`](qiskit.pulse.ScheduleBlock "qiskit.pulse.ScheduleBlock") that this reference instruction belongs to.

You can later assign schedules with the `ScheduleBlock.assign_references()` method. This allows you to build the main program without knowing the actual subroutine, that is supplied at a later time.

Create new reference.

**Parameters**

*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – Name of subroutine.
*   **extra\_keys** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – Optional. A set of string keys that may be necessary to refer to a particular subroutine. For example, when we use “sx” as a name to refer to the subroutine of an sx pulse, this name might be used among schedules for different qubits. In this example, you may specify “q0” in the extra keys to distinguish the sx schedule for qubit 0 from others. The user can use an arbitrary number of extra string keys to uniquely determine the subroutine.

## Attributes

<span id="qiskit.pulse.instructions.Reference.channels" />

### channels

Returns the channels that this schedule uses.

<span id="qiskit.pulse.instructions.Reference.duration" />

### duration

Duration of this instruction.

<span id="qiskit.pulse.instructions.Reference.id" />

### id

Unique identifier for this instruction.

<span id="qiskit.pulse.instructions.Reference.instructions" />

### instructions

Iterable for getting instructions from Schedule tree.

<span id="qiskit.pulse.instructions.Reference.key_delimiter" />

### key\_delimiter

`= ','`

<span id="qiskit.pulse.instructions.Reference.name" />

### name

Name of this instruction.

<span id="qiskit.pulse.instructions.Reference.operands" />

### operands

Return instruction operands.

<span id="qiskit.pulse.instructions.Reference.parameters" />

### parameters

Parameters which determine the instruction behavior.

<span id="qiskit.pulse.instructions.Reference.ref_keys" />

### ref\_keys

Returns unique key of the subroutine.

<span id="qiskit.pulse.instructions.Reference.scope_delimiter" />

### scope\_delimiter

`= '::'`

<span id="qiskit.pulse.instructions.Reference.start_time" />

### start\_time

Relative begin time of this instruction.

<span id="qiskit.pulse.instructions.Reference.stop_time" />

### stop\_time

Relative end time of this instruction.

## Methods

### append

<span id="qiskit.pulse.instructions.Reference.append" />

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

<span id="qiskit.pulse.instructions.Reference.ch_duration" />

`ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** ([*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")) – Supplied channels

**Return type**

[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")

### ch\_start\_time

<span id="qiskit.pulse.instructions.Reference.ch_start_time" />

`ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** ([*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")) – Supplied channels

**Return type**

[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")

### ch\_stop\_time

<span id="qiskit.pulse.instructions.Reference.ch_stop_time" />

`ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** ([*Channel*](pulse#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")) – Supplied channels

**Return type**

[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")

### insert

<span id="qiskit.pulse.instructions.Reference.insert" />

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

<span id="qiskit.pulse.instructions.Reference.is_parameterized" />

`is_parameterized()`

Return True iff the instruction is parameterized.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### shift

<span id="qiskit.pulse.instructions.Reference.shift" />

`shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Time to shift by
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of the new schedule. Defaults to name of self

**Returns**

The shifted schedule.

**Return type**

[Schedule](qiskit.pulse.Schedule "qiskit.pulse.Schedule")

