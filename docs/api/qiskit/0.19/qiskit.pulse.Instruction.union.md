---
title: union
description: API reference for qiskit.pulse.Instruction.union
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.Instruction.union
---

# union

<span id="qiskit.pulse.Instruction.union" />

`Instruction.union(*schedules, name=None)`

Return a new schedule which is the union of self and schedule.

**Parameters**

*   **\*schedules** – Schedules to be take the union with this Instruction.
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

