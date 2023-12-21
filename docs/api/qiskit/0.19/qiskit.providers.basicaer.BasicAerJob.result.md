---
title: result
description: API reference for qiskit.providers.basicaer.BasicAerJob.result
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.basicaer.BasicAerJob.result
---

# result

<span id="qiskit.providers.basicaer.BasicAerJob.result" />

`BasicAerJob.result(timeout=None)`

Get job result. The behavior is the same as the underlying concurrent Future objects,

[https://docs.python.org/3/library/concurrent.futures.html#future-objects](https://docs.python.org/3/library/concurrent.futures.html#future-objects)

**Parameters**

**timeout** (*float*) – number of seconds to wait for results.

**Returns**

Result object

**Return type**

qiskit.Result

**Raises**

*   **concurrent.futures.TimeoutError** – if timeout occurred.
*   **concurrent.futures.CancelledError** – if job cancelled before completed.

