<span id="qiskit-providers-ibmq-job-job-monitor" />

# qiskit.providers.ibmq.job.job\_monitor

<span id="undefined" />

`job_monitor(job, interval=None, output=<_io.TextIOWrapper name='<stdout>' mode='w' encoding='UTF-8'>)`

Monitor the status of an `IBMQJob` instance.

**Parameters**

*   **job** (`IBMQJob`) – Job to monitor.
*   **interval** (`Optional`\[`float`]) – Time interval between status queries.
*   **output** (`TextIO`) – The file like object to write status messages to. By default this is sys.stdout.

**Return type**

`None`
