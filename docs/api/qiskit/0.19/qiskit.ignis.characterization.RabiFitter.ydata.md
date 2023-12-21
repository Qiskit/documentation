---
title: ydata
description: API reference for qiskit.ignis.characterization.RabiFitter.ydata
in_page_toc_min_heading_level: 1
python_api_type: property
python_api_name: qiskit.ignis.characterization.RabiFitter.ydata
---

# ydata

<span id="qiskit.ignis.characterization.RabiFitter.ydata" />

`List[Dict]`

Return the data points on the y-axis

The data points are returning in the form of a list of dictionaries:

> *   ## ydata\[i]\[‘mean’] is a list, where item
>
>     no. j is the probability of success of qubit i for a circuit that lasts xdata\[j].
>
> *   ## ydata\[i]\[‘std’] is a list, where ydata\[‘std’]\[j] is the
>
>     standard deviation of the success of qubit i.

**Return type**

`List`\[`Dict`]

