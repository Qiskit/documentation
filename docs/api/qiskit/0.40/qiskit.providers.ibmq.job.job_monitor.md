---
title: job_monitor
description: API reference for qiskit.providers.ibmq.job.job_monitor
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.providers.ibmq.job.job_monitor
---

# qiskit.providers.ibmq.job.job\_monitor

<span id="qiskit.providers.ibmq.job.job_monitor" />

`job_monitor(job, interval=None, output=<_io.TextIOWrapper name='<stdout>' mode='w' encoding='utf-8'>)` [GitHub](https://github.com/qiskit/qiskit-ibmq-provider/tree/stable/0.19/qiskit/providers/ibmq/job/job_monitor.py "view source code")

Monitor the status of an `IBMQJob` instance.

**Parameters**

*   **job** ([`IBMQJob`](qiskit.providers.ibmq.job.IBMQJob "qiskit.providers.ibmq.job.ibmqjob.IBMQJob")) – Job to monitor.
*   **interval** (`Optional`\[`float`]) – Time interval between status queries.
*   **output** (`TextIO`) – The file like object to write status messages to. By default this is sys.stdout.

**Return type**

`None`

