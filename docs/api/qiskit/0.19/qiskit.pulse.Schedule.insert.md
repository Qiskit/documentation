---
title: insert
description: API reference for qiskit.pulse.Schedule.insert
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.Schedule.insert
---

# insert

<span id="qiskit.pulse.Schedule.insert" />

`Schedule.insert(start_time, schedule, name=None)`

Return a new schedule with `schedule` inserted into `self` at `start_time`.

**Parameters**

*   **start\_time** (`int`) – Time to insert the schedule.
*   **schedule** (`ScheduleComponent`) – Schedule to insert.
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to the name of self.

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

