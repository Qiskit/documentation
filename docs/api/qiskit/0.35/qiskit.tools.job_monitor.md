# qiskit.tools.job\_monitor[¶](#qiskit-tools-job-monitor "Permalink to this headline")

<span id="undefined" />

`job_monitor(job, interval=None, quiet=False, output=<_io.TextIOWrapper name='<stdout>' mode='w' encoding='utf-8'>, line_discipline='\r')`

Monitor the status of a IBMQJob instance.

**Parameters**

*   **job** ([*BaseJob*](qiskit.providers.BaseJob#qiskit.providers.BaseJob "qiskit.providers.BaseJob")) – Job to monitor.
*   **interval** (*int*) – Time interval between status queries.
*   **quiet** (*bool*) – If True, do not print status messages.
*   **output** (*file*) – The file like object to write status messages to.
*   **default this is sys.stdout.** (*By*) –
*   **line\_discipline** (*string*) – character emitted at start of a line of job monitor output,
*   **defaults to r.** (*This*) –
