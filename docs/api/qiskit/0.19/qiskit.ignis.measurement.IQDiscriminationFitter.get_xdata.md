---
title: get_xdata
description: API reference for qiskit.ignis.measurement.IQDiscriminationFitter.get_xdata
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.measurement.IQDiscriminationFitter.get_xdata
---

# get\_xdata

<span id="qiskit.ignis.measurement.IQDiscriminationFitter.get_xdata" />

`IQDiscriminationFitter.get_xdata(results, schedule_type_to_get, schedules=None)`

Retrieves feature data (xdata) for the discriminator.

**Parameters**

*   **results** (`Union`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result"), `List`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result")]]) – the get\_memory() method is used to retrieve the level 1 data. If result is a list of Result, then the first Result in the list that returns the data of schedule (through get\_memory(schedule)) is used.
*   **schedule\_type\_to\_get** (`int`) – use to specify if we should return data corresponding to (`0`) calibration data only (`1`) non-calibration data (`2`) both calibration and non-calibration data
*   **schedules** (`Union`\[`List`\[`str`], `List`\[[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")], `None`]) – Either the names of the schedules or the schedules themselves.

**Return type**

`List`\[`List`\[`float`]]

**Returns**

data as a list of features. Each feature is a list.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – if IQ data could not be found

