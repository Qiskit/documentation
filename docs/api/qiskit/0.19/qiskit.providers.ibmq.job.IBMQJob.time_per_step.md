---
title: time_per_step
description: API reference for qiskit.providers.ibmq.job.IBMQJob.time_per_step
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.job.IBMQJob.time_per_step
---

# time\_per\_step

<span id="qiskit.providers.ibmq.job.IBMQJob.time_per_step" />

`IBMQJob.time_per_step()`

Return the date and time information on each step of the job processing.

The output dictionary contains the date and time information on each step of the job processing, in local time. The keys of the dictionary are the names of the steps, and the values are the date and time data, as a datetime object with local timezone info. For example:

```python
{'CREATING': datetime(2020, 2, 13, 15, 19, 25, 717000, tzinfo=tzlocal(),
 'CREATED': datetime(2020, 2, 13, 15, 19, 26, 467000, tzinfo=tzlocal(),
 'VALIDATING': datetime(2020, 2, 13, 15, 19, 26, 527000, tzinfo=tzlocal()}
```

**Return type**

`Optional`\[`Dict`]

**Returns**

Date and time information on job processing steps, in local time, or `None` if the information is not yet available.

