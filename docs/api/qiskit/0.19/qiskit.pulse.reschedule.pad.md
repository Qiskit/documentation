---
title: pad
description: API reference for qiskit.pulse.reschedule.pad
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.pulse.reschedule.pad
---

# pad

<span id="qiskit.pulse.reschedule.pad" />

`pad(schedule, channels=None, until=None)`

Pad the input `Schedule` with `Delay` s on all unoccupied timeslots until `until` if it is provided, otherwise until `schedule.duration`.

**Parameters**

*   **schedule** ([`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")) – Schedule to pad.
*   **channels** (`Optional`\[`Iterable`\[[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]]) – Channels to pad. Defaults to all channels in `schedule` if not provided. If the supplied channel is not a member of `schedule`, it will be added.
*   **until** (`Optional`\[`int`]) – Time to pad until. Defaults to `schedule.duration` if not provided.

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

**Returns**

The padded schedule.

