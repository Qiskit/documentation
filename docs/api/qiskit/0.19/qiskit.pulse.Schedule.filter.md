---
title: filter
description: API reference for qiskit.pulse.Schedule.filter
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.Schedule.filter
---

# filter

<span id="qiskit.pulse.Schedule.filter" />

`Schedule.filter(*filter_funcs, channels=None, instruction_types=None, time_ranges=None, intervals=None)`

Return a new `Schedule` with only the instructions from this `Schedule` which pass though the provided filters; i.e. an instruction will be retained iff every function in `filter_funcs` returns `True`, the instruction occurs on a channel type contained in `channels`, the instruction type is contained in `instruction_types`, and the period over which the instruction operates is *fully* contained in one specified in `time_ranges` or `intervals`.

If no arguments are provided, `self` is returned.

**Parameters**

*   **filter\_funcs** (`List`\[`Callable`]) – A list of Callables which take a (int, ScheduleComponent) tuple and return a bool.
*   **channels** (`Optional`\[`Iterable`\[[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]]) – For example, `[DriveChannel(0), AcquireChannel(0)]`.
*   **instruction\_types** (*Optional\[Iterable\[Type\[*[*qiskit.pulse.Instruction*](qiskit.pulse.Instruction "qiskit.pulse.Instruction")*]]]*) – For example, `[PulseInstruction, AcquireInstruction]`.
*   **time\_ranges** (`Optional`\[`Iterable`\[`Tuple`\[`int`, `int`]]]) – For example, `[(0, 5), (6, 10)]`.
*   **intervals** (`Optional`\[`Iterable`\[`Tuple`\[`int`, `int`]]]) – For example, `[(0, 5), (6, 10)]`.

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

