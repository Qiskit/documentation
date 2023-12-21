---
title: error_messages
description: API reference for qiskit.providers.ibmq.managed.ManagedJobSet.error_messages
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.managed.ManagedJobSet.error_messages
---

# error\_messages

<span id="qiskit.providers.ibmq.managed.ManagedJobSet.error_messages" />

`ManagedJobSet.error_messages()`

Provide details about job failures.

This call will block until all jobs finish.

**Return type**

`Optional`\[`str`]

**Returns**

An error report if one or more jobs failed or `None` otherwise.

