---
title: append
description: API reference for qiskit.pulse.Snapshot.append
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.Snapshot.append
---

# append

<span id="qiskit.pulse.Snapshot.append" />

`Snapshot.append(schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

**Parameters**

*   **schedule** (`ScheduleComponent`) – schedule to be appended
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

