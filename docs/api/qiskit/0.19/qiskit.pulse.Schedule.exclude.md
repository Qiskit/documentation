---
title: exclude
description: API reference for qiskit.pulse.Schedule.exclude
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.Schedule.exclude
---

# exclude

<span id="qiskit.pulse.Schedule.exclude" />

`Schedule.exclude(*filter_funcs, channels=None, instruction_types=None, time_ranges=None, intervals=None)`

Return a Schedule with only the instructions from this Schedule *failing* at least one of the provided filters. This method is the complement of `self.filter`, so that:

```python
self.filter(args) | self.exclude(args) == self
```

**Parameters**

*   **filter\_funcs** (`List`\[`Callable`]) – A list of Callables which take a (int, ScheduleComponent) tuple and return a bool.
*   **channels** (`Optional`\[`Iterable`\[[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]]) – For example, `[DriveChannel(0), AcquireChannel(0)]`.
*   **instruction\_types** (*Optional\[Iterable\[Type\[*[*qiskit.pulse.Instruction*](qiskit.pulse.Instruction "qiskit.pulse.Instruction")*]]]*) – For example, `[PulseInstruction, AcquireInstruction]`.
*   **time\_ranges** (`Optional`\[`Iterable`\[`Tuple`\[`int`, `int`]]]) – For example, `[(0, 5), (6, 10)]`.
*   **intervals** (`Optional`\[`Iterable`\[`Tuple`\[`int`, `int`]]]) – For example, `[(0, 5), (6, 10)]`.

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

