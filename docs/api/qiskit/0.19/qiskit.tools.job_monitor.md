---
title: job_monitor
description: API reference for qiskit.tools.job_monitor
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.tools.job_monitor
---

# job\_monitor

<span id="qiskit.tools.job_monitor" />

`job_monitor(job, interval=None, quiet=False, output=<_io.TextIOWrapper name='<stdout>' mode='w' encoding='UTF-8'>)`

Monitor the status of a IBMQJob instance.

**Parameters**

*   **job** ([*BaseJob*](qiskit.providers.BaseJob "qiskit.providers.BaseJob")) – Job to monitor.
*   **interval** (*int*) – Time interval between status queries.
*   **quiet** (*bool*) – If True, do not print status messages.
*   **output** (*file*) – The file like object to write status messages to.
*   **sys.stdout.** (*By default this is*) –

