---
title: insert
description: API reference for qiskit.pulse.instructions.Snapshot.insert
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.instructions.Snapshot.insert
---

# insert

<span id="qiskit.pulse.instructions.Snapshot.insert" />

`Snapshot.insert(start_time, schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.

**Parameters**

*   **start\_time** (`int`) – Time to insert the schedule schedule
*   **schedule** (`ScheduleComponent`) – Schedule to insert
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

