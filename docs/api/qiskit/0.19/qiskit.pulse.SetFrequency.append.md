---
title: append
description: API reference for qiskit.pulse.SetFrequency.append
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.SetFrequency.append
---

# append

<span id="qiskit.pulse.SetFrequency.append" />

`SetFrequency.append(schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

**Parameters**

*   **schedule** (`ScheduleComponent`) – schedule to be appended
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

