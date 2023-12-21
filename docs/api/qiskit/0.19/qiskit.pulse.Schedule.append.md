---
title: append
description: API reference for qiskit.pulse.Schedule.append
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.Schedule.append
---

# append

<span id="qiskit.pulse.Schedule.append" />

`Schedule.append(schedule, name=None)`

Return a new schedule with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

$$
t = \textrm{max}(\texttt{x.stop_time} |\texttt{x} \in
    \texttt{self.channels} \cap \texttt{schedule.channels})
$$

**Parameters**

*   **schedule** (`ScheduleComponent`) – Schedule to be appended.
*   **name** (`Optional`\[`str`]) – Name of the new `Schedule`. Defaults to name of `self`.

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

