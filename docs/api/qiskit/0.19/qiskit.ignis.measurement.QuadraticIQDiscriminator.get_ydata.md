---
title: get_ydata
description: API reference for qiskit.ignis.measurement.QuadraticIQDiscriminator.get_ydata
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.measurement.QuadraticIQDiscriminator.get_ydata
---

# get\_ydata

<span id="qiskit.ignis.measurement.QuadraticIQDiscriminator.get_ydata" />

`QuadraticIQDiscriminator.get_ydata(results, schedule_type_to_get, schedules=None)`

Retrieves the expected states (ydata) for the discriminator.

**Parameters**

*   **results** (`Union`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result"), `List`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result")]]) – results for which to retrieve the y data (i.e. expected states).
*   **schedule\_type\_to\_get** (`int`) – use to specify if we should return data corresponding to \* 0 calibration data only \* 1 non-calibration data \* 2 both calibration and non-calibration data
*   **schedules** (`Union`\[`List`\[`str`], `List`\[[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")], `None`]) – Either the names of the schedules or the schedules themselves.

**Returns**

**The y data, i.e. expected states. get\_ydata is designed to produce**

y data with the same length as the x data.

**Return type**

list

