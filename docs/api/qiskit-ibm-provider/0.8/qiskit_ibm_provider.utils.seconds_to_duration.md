---
title: seconds_to_duration
description: API reference for qiskit_ibm_provider.utils.seconds_to_duration
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit_ibm_provider.utils.seconds_to_duration
---

<span id="seconds-to-duration" />

# seconds\_to\_duration

<span id="qiskit_ibm_provider.utils.seconds_to_duration" />

`seconds_to_duration(seconds)` [GitHub](https://github.com/qiskit/qiskit-ibm-provider/tree/stable/0.8/qiskit_ibm_provider/utils/converters.py "view source code")

Converts seconds in a datetime delta to a duration.

**Parameters**

**seconds** (`float`) – Number of seconds in time delta.

**Return type**

`Tuple`\[`int`, `int`, `int`, `int`, `int`]

**Returns**

A tuple containing the duration in terms of days, hours, minutes, seconds, and milliseconds.

